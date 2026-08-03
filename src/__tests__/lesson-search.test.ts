import { describe, expect, test } from 'vitest';

import { matchesSearch } from '../lib/lessonSearch';

describe('matchesSearch', () => {
    test('matches an empty query against any title', () => {
        expect(matchesSearch('Principios de diseño', '')).toBe(true);
        expect(matchesSearch('Principios de diseño', '   ')).toBe(true);
    });

    test('matches a partial, case-insensitive substring', () => {
        expect(matchesSearch('Principios de diseño', 'diseño')).toBe(true);
        expect(matchesSearch('Principios de diseño', 'DISEÑO')).toBe(true);
        expect(matchesSearch('Principios de diseño', 'princ')).toBe(true);
    });

    test('matches regardless of accents on either side', () => {
        expect(matchesSearch('Principios de diseño', 'diseno')).toBe(true);
        expect(matchesSearch('Tipografía y jerarquía', 'tipografia')).toBe(true);
    });

    test('does not match an unrelated query', () => {
        expect(matchesSearch('Principios de diseño', 'accesibilidad')).toBe(false);
    });
});
