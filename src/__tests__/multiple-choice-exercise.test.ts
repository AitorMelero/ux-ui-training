import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, test } from 'vitest';

import MultipleChoiceExercise from '../components/exercises/MultipleChoiceExercise.astro';
import type { MultipleChoiceExerciseData } from '../types/exercises';

const singleChoiceExercise: MultipleChoiceExerciseData = {
    id: 'test-mc-single',
    type: 'multiple-choice',
    prompt: '¿Qué disciplina define el aspecto visual de un producto?',
    allowMultiple: false,
    options: [
        { text: 'UX', correct: false, explanation: 'UX se centra en la experiencia global, no solo en lo visual.' },
        { text: 'UI', correct: true, explanation: 'UI es la disciplina responsable del aspecto visual.' },
    ],
};

const multiChoiceExercise: MultipleChoiceExerciseData = {
    id: 'test-mc-multi',
    type: 'multiple-choice',
    prompt: 'Selecciona todos los colores primarios.',
    allowMultiple: true,
    options: [
        { text: 'Rojo', correct: true },
        { text: 'Verde', correct: false },
        { text: 'Azul', correct: true },
    ],
};

describe('MultipleChoiceExercise', () => {
    test('renders radio inputs when only one answer is allowed', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(MultipleChoiceExercise, {
            props: { exercise: singleChoiceExercise },
        });

        expect(result).toContain('¿Qué disciplina define el aspecto visual de un producto?');
        expect(result).toContain('type="radio"');
        expect(result).not.toContain('type="checkbox"');
        expect(result).toContain('Check answer');
    });

    test('renders checkbox inputs when multiple answers are allowed', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(MultipleChoiceExercise, {
            props: { exercise: multiChoiceExercise },
        });

        expect(result).toContain('type="checkbox"');
        expect(result).toContain('Rojo');
        expect(result).toContain('Verde');
        expect(result).toContain('Azul');
    });

    test('renders every option with its correctness flag for the client-side check', async () => {
        const container = await AstroContainer.create();
        const result = await container.renderToString(MultipleChoiceExercise, {
            props: { exercise: singleChoiceExercise },
        });

        expect(result).toContain('data-correct="false"');
        expect(result).toContain('data-correct="true"');
    });
});
