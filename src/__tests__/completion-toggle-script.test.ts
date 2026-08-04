// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { isLessonCompleted } from '../lib/progress';
import { initCompletionToggle, renderState } from '../scripts/completion-toggle';

function buildToggle(lessonSlug: string): HTMLElement {
    document.body.innerHTML = `
        <div class="completion-toggle" data-lesson-slug="${lessonSlug}">
            <button type="button" class="completion-toggle-btn" aria-pressed="false">Marcar como completada</button>
            <p class="completion-toggle-status" role="status" aria-live="polite">Aún no has completado esta lección.</p>
        </div>
    `;
    return document.querySelector<HTMLElement>('.completion-toggle')!;
}

describe('completion toggle script', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('renders the not-completed state by default', () => {
        const container = buildToggle('que-es-ux');

        initCompletionToggle(container);

        const button = container.querySelector<HTMLButtonElement>('.completion-toggle-btn')!;
        expect(button.getAttribute('aria-pressed')).toBe('false');
        expect(button.textContent).toBe('Marcar como completada');
        expect(container.classList.contains('is-completed')).toBe(false);
    });

    test('toggles to completed when the button is clicked, and back when clicked again', () => {
        const container = buildToggle('que-es-ux');
        initCompletionToggle(container);
        const button = container.querySelector<HTMLButtonElement>('.completion-toggle-btn')!;
        const status = container.querySelector<HTMLParagraphElement>('.completion-toggle-status')!;

        button.click();

        expect(button.getAttribute('aria-pressed')).toBe('true');
        expect(button.textContent).toBe('Marcar como no completada');
        expect(status.textContent).toBe('Lección completada.');
        expect(container.classList.contains('is-completed')).toBe(true);
        expect(isLessonCompleted('que-es-ux')).toBe(true);

        button.click();

        expect(isLessonCompleted('que-es-ux')).toBe(false);
        expect(container.classList.contains('is-completed')).toBe(false);
    });

    test('renders the already-completed state on init when the lesson was previously marked completed', () => {
        document.body.innerHTML = `
            <div class="completion-toggle" data-lesson-slug="que-es-ux">
                <button type="button" class="completion-toggle-btn" aria-pressed="false">x</button>
                <p class="completion-toggle-status"></p>
            </div>
        `;
        const container = document.querySelector<HTMLElement>('.completion-toggle')!;
        renderState(container, true);
        localStorage.clear();

        const secondContainer = buildToggle('que-es-ux');
        localStorage.setItem(
            'ux-ui-training:lesson-progress:que-es-ux',
            JSON.stringify({ completed: true, correctExerciseIds: [] }),
        );

        initCompletionToggle(secondContainer);

        expect(secondContainer.classList.contains('is-completed')).toBe(true);
    });

    test('does nothing when the container has no lesson slug', () => {
        document.body.innerHTML = `
            <div class="completion-toggle">
                <button type="button" class="completion-toggle-btn">x</button>
                <p class="completion-toggle-status"></p>
            </div>
        `;
        const container = document.querySelector<HTMLElement>('.completion-toggle')!;

        expect(() => initCompletionToggle(container)).not.toThrow();
        expect(container.classList.contains('is-completed')).toBe(false);
    });

    test('renderState does nothing when the button or status element is missing', () => {
        document.body.innerHTML = `<div class="completion-toggle"></div>`;
        const container = document.querySelector<HTMLElement>('.completion-toggle')!;

        expect(() => renderState(container, true)).not.toThrow();
    });
});
