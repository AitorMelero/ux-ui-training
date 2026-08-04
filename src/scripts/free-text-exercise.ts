import { recordExerciseCompletion } from './exercise-completion';

export function initFreeTextExercise(container: HTMLElement): void {
    const input = container.querySelector<HTMLInputElement>('.answer-input');
    const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn');
    const feedback = container.querySelector<HTMLParagraphElement>('.feedback');
    const explanation = container.querySelector<HTMLParagraphElement>('.explanation');
    const acceptedAnswersRaw = container.dataset.acceptedAnswers;
    if (!input || !checkBtn || !feedback || !acceptedAnswersRaw) return;

    const acceptedAnswers = JSON.parse(acceptedAnswersRaw) as string[];

    function checkAnswer(): void {
        if (!input || !feedback) return;
        const value = input.value.trim().toLowerCase();
        const isCorrect = value.length > 0 && acceptedAnswers.includes(value);

        input.classList.toggle('is-correct', isCorrect);
        input.classList.toggle('is-incorrect', !isCorrect);

        feedback.textContent = isCorrect
            ? '¡Correcto!'
            : value.length === 0
              ? 'Escribe una respuesta antes de comprobarla.'
              : 'Esa no es la respuesta que buscamos. Lee la explicación e inténtalo de nuevo.';
        feedback.classList.toggle('is-success', isCorrect);
        feedback.classList.toggle('is-error', value.length > 0 && !isCorrect);

        if (value.length > 0 && explanation) {
            explanation.hidden = false;
        }

        recordExerciseCompletion(container, isCorrect);
    }

    checkBtn.addEventListener('click', checkAnswer);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer();
        }
    });
}

export function initFreeTextExercises(): void {
    document.querySelectorAll<HTMLElement>('.free-text-exercise').forEach(initFreeTextExercise);
}

initFreeTextExercises();
