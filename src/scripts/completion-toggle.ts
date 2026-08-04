import { isLessonCompleted, setLessonCompleted } from '../lib/progress';

const COMPLETED_LABEL = 'Marcar como no completada';
const NOT_COMPLETED_LABEL = 'Marcar como completada';
const COMPLETED_STATUS = 'Lección completada.';
const NOT_COMPLETED_STATUS = 'Aún no has completado esta lección.';

export function renderState(container: HTMLElement, completed: boolean): void {
    const button = container.querySelector<HTMLButtonElement>('.completion-toggle-btn');
    const status = container.querySelector<HTMLParagraphElement>('.completion-toggle-status');
    if (!button || !status) return;

    button.textContent = completed ? COMPLETED_LABEL : NOT_COMPLETED_LABEL;
    button.setAttribute('aria-pressed', String(completed));
    status.textContent = completed ? COMPLETED_STATUS : NOT_COMPLETED_STATUS;
    container.classList.toggle('is-completed', completed);
}

export function initCompletionToggle(container: HTMLElement): void {
    const lessonSlug = container.dataset.lessonSlug;
    const button = container.querySelector<HTMLButtonElement>('.completion-toggle-btn');
    if (!lessonSlug || !button) return;

    renderState(container, isLessonCompleted(lessonSlug));

    button.addEventListener('click', () => {
        const nextCompleted = !isLessonCompleted(lessonSlug);
        setLessonCompleted(lessonSlug, nextCompleted);
        renderState(container, nextCompleted);
    });
}

export function initCompletionToggles(): void {
    document.querySelectorAll<HTMLElement>('.completion-toggle').forEach(initCompletionToggle);
}

initCompletionToggles();
