import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { describe, expect, test } from 'vitest';

import IndexPage from '../pages/index.astro';

describe('index page', () => {
    test('renders the landing page title', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('Aprende UX/UI');
    });

    test('lists every lesson grouped by category', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);
        const lessons = await getCollection('lessons');

        expect(lessons.length).toBeGreaterThan(0);
        for (const lesson of lessons) {
            expect(result).toContain(lesson.data.title);
            expect(result).toContain(`/lessons/${lesson.id}`);
        }
    });

    test('renders both the UX and UI section headings', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('Experiencia de Usuario (UX)');
        expect(result).toContain('Interfaz de Usuario (UI)');
    });

    test('marks up every lesson card with its slug and a hidden completed indicator', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);
        const lessons = await getCollection('lessons');

        for (const lesson of lessons) {
            expect(result).toContain(`data-lesson-slug="${lesson.id}"`);
        }
        expect(result).toContain('lesson-completed-badge');
        expect(result).toMatch(/<span class="lesson-completed-badge" hidden[ >]/);
    });
});
