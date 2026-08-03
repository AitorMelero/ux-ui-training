import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { describe, expect, test } from 'vitest';

import LessonPage, { getStaticPaths } from '../pages/lessons/[...slug].astro';

describe('lesson detail page', () => {
    test('renders the theory and every exercise for a lesson', async () => {
        const lessons = await getCollection('lessons');
        const lesson = lessons.find((entry) => entry.id === 'que-es-ux');
        expect(lesson).toBeDefined();
        if (!lesson) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: { lesson } });

        expect(result).toContain(lesson.data.title);
        expect(result).toContain('Ponlo en práctica');
        for (const exercise of lesson.data.exercises) {
            expect(result).toContain(exercise.prompt);
        }
    });

    test('renders a manual completion toggle for the lesson', async () => {
        const lessons = await getCollection('lessons');
        const lesson = lessons.find((entry) => entry.id === 'que-es-ux');
        expect(lesson).toBeDefined();
        if (!lesson) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: { lesson } });

        expect(result).toContain(`data-lesson-slug="${lesson.id}"`);
        expect(result).toContain('Marcar como completada');
        expect(result).toContain('completion-toggle-btn');
    });

    test('exposes the lesson slug and exercise ids for client-side progress tracking', async () => {
        const lessons = await getCollection('lessons');
        const lesson = lessons.find((entry) => entry.id === 'que-es-ux');
        expect(lesson).toBeDefined();
        if (!lesson) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: { lesson } });

        expect(result).toContain(`data-lesson-slug="${lesson.id}"`);
        for (const exercise of lesson.data.exercises) {
            expect(result).toContain(`data-exercise-id="${exercise.id}"`);
        }
    });

    test('exposes a getStaticPaths entry for every lesson', async () => {
        const lessons = await getCollection('lessons');
        const paths = await getStaticPaths();

        expect(paths).toHaveLength(lessons.length);
        for (const lesson of lessons) {
            expect(paths.some((path) => path.params.slug === lesson.id)).toBe(true);
        }
    });
});
