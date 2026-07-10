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

    test('exposes a getStaticPaths entry for every lesson', async () => {
        const lessons = await getCollection('lessons');
        const paths = await getStaticPaths();

        expect(paths).toHaveLength(lessons.length);
        for (const lesson of lessons) {
            expect(paths.some((path) => path.params.slug === lesson.id)).toBe(true);
        }
    });
});
