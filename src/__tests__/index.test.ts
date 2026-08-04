import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, expect, test } from 'vitest';

import { categories, categoryLabels } from '../lib/categories';
import { levelLabels, levels } from '../lib/levels';
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

    test('renders a section heading for every category', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        for (const category of categories) {
            expect(result).toContain(categoryLabels[category]);
        }
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

    test('hides the completed badge with CSS even before the client script runs, so a new visitor never sees it', () => {
        const stylesheetPath = fileURLToPath(new URL('../components/LessonCard.css', import.meta.url));
        const source = readFileSync(stylesheetPath, 'utf-8');

        expect(source).toMatch(/\.lesson-completed-badge\[hidden\]\s*{\s*display:\s*none;/);
    });

    test('groups lessons by level within each category and shows a level badge per lesson', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);
        const lessons = await getCollection('lessons');

        const levelsPresent = new Set(lessons.map((lesson) => lesson.data.level));
        for (const level of levelsPresent) {
            expect(result).toContain(levelLabels[level]);
        }
        expect(result).toContain('lesson-level--beginner');
    });

    test('renders a category sidebar with "Todo" active and links to every category', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        expect(result).toMatch(/<a href="\/" aria-current="page"[^>]*>Todo<\/a>/);
        for (const category of categories) {
            const label = escapeRegExp(categoryLabels[category]);
            expect(result).toMatch(new RegExp(`<a href="/${category}"[^>]*>${label}</a>`));
            expect(result).not.toContain(`aria-current="page">${categoryLabels[category]}`);
        }
    });

    test('renders a lesson search box to filter across all lessons', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('id="lesson-search-input"');
        expect(result).toContain('type="search"');
    });

    test('renders a level filter with all levels', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('data-level="all"');
        for (const level of levels) {
            expect(result).toContain(`data-level="${level}"`);
            expect(result).toContain(levelLabels[level]);
        }
    });

    test('covers a beginner-to-advanced curriculum with a substantial number of lessons', async () => {
        const lessons = await getCollection('lessons');

        expect(lessons.length).toBeGreaterThanOrEqual(20);
        expect(lessons.some((lesson) => lesson.data.level === 'beginner')).toBe(true);
        expect(lessons.some((lesson) => lesson.data.level === 'intermediate')).toBe(true);
        expect(lessons.some((lesson) => lesson.data.level === 'advanced')).toBe(true);
    });
});
