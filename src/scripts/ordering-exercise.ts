import { recordExerciseCompletion } from './exercise-completion';

export function shuffle<T>(items: T[]): T[] {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export function currentOrder(list: HTMLOListElement): string[] {
    return Array.from(list.querySelectorAll('.ordering-item-text')).map((el) => el.textContent?.trim() ?? '');
}

export function moveItem(list: HTMLOListElement, item: HTMLLIElement, direction: -1 | 1): void {
    const sibling = direction === -1 ? item.previousElementSibling : item.nextElementSibling;
    if (!sibling) return;
    if (direction === -1) {
        list.insertBefore(item, sibling);
    } else {
        list.insertBefore(sibling, item);
    }
    item.querySelector<HTMLButtonElement>('.move-up')?.focus();
}

export function initOrderingExercise(container: HTMLElement): void {
    const list = container.querySelector<HTMLOListElement>('.ordering-list');
    const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn');
    const feedback = container.querySelector<HTMLParagraphElement>('.feedback');
    const explanation = container.querySelector<HTMLParagraphElement>('.explanation');
    const correctOrderRaw = container.dataset.correctOrder;
    if (!list || !checkBtn || !feedback || !correctOrderRaw) return;

    const correctOrder = JSON.parse(correctOrderRaw) as string[];

    const items = Array.from(list.children) as HTMLLIElement[];
    list.replaceChildren(...shuffle(items));

    list.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        const item = target.closest<HTMLLIElement>('.ordering-item');
        if (!item) return;
        if (target.classList.contains('move-up')) {
            moveItem(list, item, -1);
        } else if (target.classList.contains('move-down')) {
            moveItem(list, item, 1);
        }
    });

    let draggedItem: HTMLLIElement | null = null;
    list.addEventListener('dragstart', (event) => {
        draggedItem = (event.target as HTMLElement).closest<HTMLLIElement>('.ordering-item');
    });
    list.addEventListener('dragover', (event) => {
        event.preventDefault();
        const target = (event.target as HTMLElement).closest<HTMLLIElement>('.ordering-item');
        if (!target || !draggedItem || target === draggedItem) return;
        const rect = target.getBoundingClientRect();
        const insertBefore = event.clientY - rect.top < rect.height / 2;
        list.insertBefore(draggedItem, insertBefore ? target : target.nextSibling);
    });
    list.addEventListener('dragend', () => {
        draggedItem = null;
    });

    checkBtn.addEventListener('click', () => {
        const order = currentOrder(list);
        const isCorrect = order.every((text, index) => text === correctOrder[index]);

        Array.from(list.children).forEach((child, index) => {
            child.classList.remove('is-correct', 'is-incorrect');
            child.classList.add(order[index] === correctOrder[index] ? 'is-correct' : 'is-incorrect');
        });

        feedback.textContent = isCorrect
            ? '¡Correcto! Ese es el orden correcto.'
            : 'No del todo. Revisa los elementos marcados en rojo e inténtalo de nuevo.';
        feedback.classList.toggle('is-success', isCorrect);
        feedback.classList.toggle('is-error', !isCorrect);

        if (isCorrect && explanation) {
            explanation.hidden = false;
        }

        recordExerciseCompletion(container, isCorrect);
    });
}

export function initOrderingExercises(): void {
    document.querySelectorAll<HTMLElement>('.ordering-exercise').forEach(initOrderingExercise);
}

initOrderingExercises();
