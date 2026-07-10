import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import IndexPage from '../pages/index.astro';

describe('index page', () => {
    test('renders Hello World', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(IndexPage);

        expect(result).toContain('Hello World');
    });
});
