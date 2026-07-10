import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import FreeTextExercise from '../components/exercises/FreeTextExercise.astro';
import type { FreeTextExerciseData } from '../types/exercises';

const exercise: FreeTextExerciseData = {
    id: 'test-free-text',
    type: 'free-text',
    prompt: '¿Cuál es la capital de Francia?',
    acceptedAnswers: ['paris', 'parís'],
    placeholder: 'Escribe la ciudad...',
    explanation: 'Paris es la capital de Francia desde hace siglos.',
};

describe('FreeTextExercise', () => {
    test('renders the prompt, the input and the check button', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(FreeTextExercise, { props: { exercise } });

        expect(result).toContain('¿Cuál es la capital de Francia?');
        expect(result).toContain('<input');
        expect(result).toContain('Escribe la ciudad...');
        expect(result).toContain('Comprobar');
    });

    test('normalizes accepted answers to lowercase for the client-side check', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(FreeTextExercise, { props: { exercise } });

        expect(result).toContain('data-accepted-answers="[&quot;paris&quot;,&quot;par');
    });
});
