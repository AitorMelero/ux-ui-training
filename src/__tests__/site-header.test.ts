import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import SiteHeader from '../components/SiteHeader.astro';

describe('site header', () => {
    test('renders a logo link back to the homepage, visible on every page', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(SiteHeader);

        expect(result).toMatch(/<a class="site-logo" href="\/"/);
        expect(result).toContain('Aprende UX/UI');
    });
});
