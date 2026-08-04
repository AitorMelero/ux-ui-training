import { isLessonCompleted } from '../lib/progress';

export function initLessonCard(card: HTMLElement): void {
    const lessonSlug = card.dataset.lessonSlug;
    const badge = card.querySelector<HTMLElement>('.lesson-completed-badge');
    if (!lessonSlug || !badge) return;

    const completed = isLessonCompleted(lessonSlug);
    badge.hidden = !completed;
    card.classList.toggle('is-completed', completed);
}

export function initLessonCards(): void {
    document.querySelectorAll<HTMLElement>('.lesson-card[data-lesson-slug]').forEach(initLessonCard);
}

initLessonCards();
