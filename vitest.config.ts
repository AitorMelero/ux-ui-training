/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
    test: {
        environment: 'node',
        globals: true,
        clearMocks: true,
        mockReset: true,
        restoreMocks: true,

        coverage: {
            provider: 'v8',
            exclude: [
                '**/dist/**',
                '**/coverage/**',
                '**/node_modules/**',
                'src/**/index.ts',
                '**/__mocks__/**',
                '**/.*.md',
            ],
            include: ['src/**'],
        },
    },
});
