import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import { categories, categoryLabels } from '../lib/categories';
import NotFoundPage from '../pages/404.astro';

describe('404 page', () => {
    test('renders a friendly not-found message with a link back home', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(NotFoundPage);

        expect(result).toContain('404');
        expect(result).toContain('Página no encontrada');
        expect(result).toMatch(/<a class="not-found-cta" href="\/"[^>]*>Volver al inicio<\/a>/);
    });

    test('links to every category as a way back into the content', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(NotFoundPage);

        for (const category of categories) {
            expect(result).toContain(`href="/${category}"`);
            expect(result).toContain(categoryLabels[category]);
        }
    });
});
