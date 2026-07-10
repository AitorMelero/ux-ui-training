import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import OrderingExercise from '../components/exercises/OrderingExercise.astro';
import type { OrderingExerciseData } from '../types/exercises';

const exercise: OrderingExerciseData = {
    id: 'test-ordering',
    type: 'ordering',
    prompt: 'Ordena estos pasos.',
    items: ['Primero', 'Segundo', 'Tercero'],
    explanation: 'Este es el motivo del orden correcto.',
};

describe('OrderingExercise', () => {
    test('renders the prompt, every item and the controls needed for keyboard reordering', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(OrderingExercise, { props: { exercise } });

        expect(result).toContain('Ordena estos pasos.');
        for (const item of exercise.items) {
            expect(result).toContain(item);
        }
        expect(result).toContain('Subir este elemento');
        expect(result).toContain('Bajar este elemento');
        expect(result).toContain('Comprobar orden');
    });

    test('keeps the explanation hidden until the learner checks the answer', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(OrderingExercise, { props: { exercise } });

        expect(result).toContain('Este es el motivo del orden correcto.');
        expect(result).toMatch(/<p class="explanation" hidden[ >]/);
    });
});
