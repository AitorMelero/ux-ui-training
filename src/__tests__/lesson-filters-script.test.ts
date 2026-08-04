// @vitest-environment jsdom
import { describe, expect, test } from 'vitest';

import { initLessonFilters } from '../scripts/lesson-filters';

function buildFixture(): void {
    document.body.innerHTML = `
        <div class="lesson-filters">
            <input type="search" id="lesson-search-input" />
            <div class="lesson-level-filter-options">
                <button type="button" class="lesson-level-filter-button" data-level="all" aria-pressed="true">Todos</button>
                <button type="button" class="lesson-level-filter-button" data-level="beginner" aria-pressed="false">Principiante</button>
            </div>
            <div class="lesson-subcategory-filter-options">
                <button type="button" class="lesson-subcategory-filter-button" data-subcategory="all" aria-pressed="true">Todos</button>
                <button type="button" class="lesson-subcategory-filter-button" data-subcategory="boton" aria-pressed="false">Botón</button>
            </div>
            <p class="lesson-filters-empty" hidden>No se encontraron lecciones con esos filtros.</p>
        </div>
        <section class="lesson-group">
            <div class="level-group" data-level="beginner">
                <ul class="lesson-grid">
                    <li class="lesson-card" data-subcategory="boton"><h3>El botón</h3></li>
                    <li class="lesson-card" data-subcategory="campo-de-texto"><h3>El campo de texto</h3></li>
                </ul>
            </div>
            <div class="level-group" data-level="advanced">
                <ul class="lesson-grid">
                    <li class="lesson-card" data-subcategory="modal"><h3>El modal</h3></li>
                </ul>
            </div>
        </section>
    `;
}

describe('lesson filters script', () => {
    test('filters cards by search text', () => {
        buildFixture();
        initLessonFilters();
        const input = document.querySelector<HTMLInputElement>('#lesson-search-input')!;

        input.value = 'botón';
        input.dispatchEvent(new Event('input'));

        const cards = Array.from(document.querySelectorAll<HTMLElement>('.lesson-card'));
        expect(cards.find((card) => card.dataset.subcategory === 'boton')!.hidden).toBe(false);
        expect(cards.find((card) => card.dataset.subcategory === 'campo-de-texto')!.hidden).toBe(true);
    });

    test('filters cards by level and updates aria-pressed on the selected button', () => {
        buildFixture();
        initLessonFilters();
        const beginnerButton = document.querySelector<HTMLButtonElement>('[data-level="beginner"]')!;
        const allButton = document.querySelector<HTMLButtonElement>('[data-level="all"]')!;

        beginnerButton.click();

        expect(beginnerButton.getAttribute('aria-pressed')).toBe('true');
        expect(allButton.getAttribute('aria-pressed')).toBe('false');
        const advancedGroup = document.querySelector<HTMLElement>('[data-level="advanced"]')!;
        expect(advancedGroup.hidden).toBe(true);
    });

    test('filters cards by subcategory', () => {
        buildFixture();
        initLessonFilters();
        const subcategoryButton = document.querySelector<HTMLButtonElement>('[data-subcategory="boton"]')!;

        subcategoryButton.click();

        const cards = Array.from(document.querySelectorAll<HTMLElement>('.lesson-card'));
        expect(cards.find((card) => card.dataset.subcategory === 'boton')!.hidden).toBe(false);
        expect(cards.find((card) => card.dataset.subcategory === 'modal')!.hidden).toBe(true);
    });

    test('shows the empty message and hides level groups when no card matches', () => {
        buildFixture();
        initLessonFilters();
        const input = document.querySelector<HTMLInputElement>('#lesson-search-input')!;
        const emptyMessage = document.querySelector<HTMLElement>('.lesson-filters-empty')!;

        input.value = 'no existe ninguna lección con este texto';
        input.dispatchEvent(new Event('input'));

        expect(emptyMessage.hidden).toBe(false);
        document.querySelectorAll<HTMLElement>('.level-group').forEach((group) => {
            expect(group.hidden).toBe(true);
        });
    });

    test('does nothing when there are no filter controls on the page', () => {
        document.body.innerHTML = '';

        expect(() => initLessonFilters()).not.toThrow();
    });
});
