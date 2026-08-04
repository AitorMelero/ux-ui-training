import { recordExerciseCompletion } from './exercise-completion';

export function initMultipleChoiceExercise(container: HTMLElement): void {
    const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn');
    const feedback = container.querySelector<HTMLParagraphElement>('.feedback');
    const inputs = Array.from(container.querySelectorAll<HTMLInputElement>('.option-item input'));
    if (!checkBtn || !feedback || inputs.length === 0) return;

    checkBtn.addEventListener('click', () => {
        const anySelected = inputs.some((input) => input.checked);
        if (!anySelected) {
            feedback.textContent = 'Selecciona al menos una opción antes de comprobar.';
            feedback.classList.remove('is-success');
            feedback.classList.add('is-error');
            return;
        }

        let allCorrect = true;
        inputs.forEach((input) => {
            const isCorrectOption = input.dataset.correct === 'true';
            const optionItem = input.closest<HTMLLIElement>('.option-item');
            const explanation = optionItem?.querySelector<HTMLParagraphElement>('.option-explanation');

            optionItem?.classList.remove('is-correct', 'is-incorrect');

            if (input.checked) {
                optionItem?.classList.add(isCorrectOption ? 'is-correct' : 'is-incorrect');
                if (explanation) explanation.hidden = false;
                if (!isCorrectOption) allCorrect = false;
            } else if (isCorrectOption) {
                optionItem?.classList.add('is-incorrect');
                if (explanation) explanation.hidden = false;
                allCorrect = false;
            }
        });

        feedback.textContent = allCorrect
            ? '¡Correcto! Buen razonamiento.'
            : 'No del todo. Revisa las opciones marcadas y lee la explicación.';
        feedback.classList.toggle('is-success', allCorrect);
        feedback.classList.toggle('is-error', !allCorrect);

        recordExerciseCompletion(container, allCorrect);
    });
}

export function initMultipleChoiceExercises(): void {
    document.querySelectorAll<HTMLElement>('.multiple-choice-exercise').forEach(initMultipleChoiceExercise);
}

initMultipleChoiceExercises();
