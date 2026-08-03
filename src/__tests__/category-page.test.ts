import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { describe, expect, test } from 'vitest';

import { categories, categoryLabels } from '../lib/categories';
import CategoryPage, { getStaticPaths } from '../pages/[category].astro';

describe('category page', () => {
    test('exposes a getStaticPaths entry for every category', async () => {
        const paths = await getStaticPaths();

        expect(paths).toHaveLength(categories.length);
        for (const category of categories) {
            expect(paths.some((path) => path.params.category === category)).toBe(true);
        }
    });

    test.each(categories)('renders only the lessons of the "%s" category', async (category) => {
        const lessons = await getCollection('lessons');
        const paths = await getStaticPaths();
        const path = paths.find((entry) => entry.params.category === category);
        expect(path).toBeDefined();
        if (!path) return;

        const container = await AstroContainer.create();
        const result = await container.renderToString(CategoryPage, { props: path.props });

        expect(result).toContain(categoryLabels[category]);

        for (const lesson of lessons) {
            if (lesson.data.category === category) {
                expect(result).toContain(lesson.data.title);
                expect(result).toContain(`/lessons/${lesson.id}`);
            } else {
                expect(result).not.toContain(`/lessons/${lesson.id}`);
            }
        }
    });
});
