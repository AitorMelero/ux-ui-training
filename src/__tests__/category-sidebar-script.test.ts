// @vitest-environment jsdom
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { initCategorySidebar, setExpanded } from '../scripts/category-sidebar';

function buildSidebar(): { toggle: HTMLButtonElement; panel: HTMLElement } {
    document.body.innerHTML = `
        <nav class="category-sidebar">
            <button type="button" id="category-sidebar-toggle" aria-expanded="true" aria-controls="category-sidebar-panel">
                Categorías
            </button>
            <div id="category-sidebar-panel"></div>
        </nav>
    `;
    return {
        toggle: document.querySelector<HTMLButtonElement>('#category-sidebar-toggle')!,
        panel: document.querySelector<HTMLElement>('#category-sidebar-panel')!,
    };
}

function mockMatchMedia(matches: boolean): void {
    window.matchMedia = vi.fn().mockReturnValue({ matches }) as unknown as typeof window.matchMedia;
}

describe('category sidebar script', () => {
    beforeEach(() => {
        mockMatchMedia(false);
    });

    test('setExpanded updates aria-expanded and the panel visibility', () => {
        const { toggle, panel } = buildSidebar();

        setExpanded(toggle, panel, false);
        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(panel.hidden).toBe(true);

        setExpanded(toggle, panel, true);
        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(panel.hidden).toBe(false);
    });

    test('starts expanded on wide viewports', () => {
        const { toggle, panel } = buildSidebar();
        mockMatchMedia(false);

        initCategorySidebar();

        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(panel.hidden).toBe(false);
    });

    test('starts collapsed on narrow viewports', () => {
        const { toggle, panel } = buildSidebar();
        mockMatchMedia(true);

        initCategorySidebar();

        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(panel.hidden).toBe(true);
    });

    test('toggles expanded state on click', () => {
        const { toggle, panel } = buildSidebar();

        initCategorySidebar();
        toggle.click();

        expect(toggle.getAttribute('aria-expanded')).toBe('false');
        expect(panel.hidden).toBe(true);

        toggle.click();

        expect(toggle.getAttribute('aria-expanded')).toBe('true');
        expect(panel.hidden).toBe(false);
    });

    test('does nothing when the toggle or panel are missing from the page', () => {
        document.body.innerHTML = '';

        expect(() => initCategorySidebar()).not.toThrow();
    });
});
