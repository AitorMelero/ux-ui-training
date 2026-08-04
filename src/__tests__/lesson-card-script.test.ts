// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { setLessonCompleted } from '../lib/progress';
import { initLessonCard } from '../scripts/lesson-card';

function buildCard(lessonSlug?: string): HTMLElement {
    document.body.innerHTML = `
        <li class="lesson-card" ${lessonSlug ? `data-lesson-slug="${lessonSlug}"` : ''}>
            <a href="/lessons/${lessonSlug}">
                <span class="lesson-completed-badge" hidden>✓ Completada</span>
                <h3>Título</h3>
            </a>
        </li>
    `;
    return document.querySelector<HTMLElement>('.lesson-card')!;
}

describe('lesson card script', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('keeps the completed badge hidden when the lesson is not completed', () => {
        const card = buildCard('que-es-ux');

        initLessonCard(card);

        const badge = card.querySelector<HTMLElement>('.lesson-completed-badge')!;
        expect(badge.hidden).toBe(true);
        expect(card.classList.contains('is-completed')).toBe(false);
    });

    test('shows the completed badge and marks the card when the lesson is completed', () => {
        setLessonCompleted('que-es-ux', true);
        const card = buildCard('que-es-ux');

        initLessonCard(card);

        const badge = card.querySelector<HTMLElement>('.lesson-completed-badge')!;
        expect(badge.hidden).toBe(false);
        expect(card.classList.contains('is-completed')).toBe(true);
    });

    test('does nothing when the card has no lesson slug', () => {
        const card = buildCard();

        expect(() => initLessonCard(card)).not.toThrow();
        expect(card.classList.contains('is-completed')).toBe(false);
    });

    test('does nothing when the card has no completed badge', () => {
        document.body.innerHTML = `<li class="lesson-card" data-lesson-slug="que-es-ux"><h3>Título</h3></li>`;
        const card = document.querySelector<HTMLElement>('.lesson-card')!;

        expect(() => initLessonCard(card)).not.toThrow();
    });
});
