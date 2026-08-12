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

    test('links back to the lesson’s category page instead of the homepage', async () => {
        const paths = await getStaticPaths();
        const path = paths.find((entry) => entry.params.slug === 'que-es-ux');
        expect(path).toBeDefined();
        if (!path) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: path.props });

        expect(result).toMatch(new RegExp(`<a class="back-link" href="/${path.props.lesson.data.category}"`));
    });

    test('links to the next lesson in the same category when one exists', async () => {
        const paths = await getStaticPaths();
        const path = paths.find((entry) => entry.props.nextLesson !== undefined);
        expect(path).toBeDefined();
        if (!path || !path.props.nextLesson) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: path.props });

        expect(result).toContain(`href="/lessons/${path.props.nextLesson.id}"`);
        expect(result).toContain(path.props.nextLesson.title);
    });

    test('does not render a next-lesson link for the last lesson of a category', async () => {
        const paths = await getStaticPaths();
        const path = paths.find((entry) => entry.props.nextLesson === undefined);
        expect(path).toBeDefined();
        if (!path) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(LessonPage, { props: path.props });

        expect(result).not.toContain('next-lesson-link');
    });
});
