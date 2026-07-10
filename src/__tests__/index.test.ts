import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { describe, expect, test } from 'vitest';

import IndexPage from '../pages/index.astro';

describe('index page', () => {
    test('renders the landing page title', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('Learn UX/UI');
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

        expect(result).toContain('User Experience (UX)');
        expect(result).toContain('User Interface (UI)');
    });
});
