// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { getCorrectExerciseIds, isLessonCompleted } from '../lib/progress';
import { recordExerciseCompletion } from '../scripts/exercise-completion';

function buildExercise(lessonSlug: string, exerciseId: string, exerciseIds: string[]): HTMLElement {
    document.body.innerHTML = `
        <section class="exercise-list" data-lesson-slug="${lessonSlug}" data-exercise-ids='${JSON.stringify(exerciseIds)}'>
            <div class="exercise-wrapper">
                <div class="ordering-exercise" data-exercise-id="${exerciseId}"></div>
            </div>
        </section>
    `;
    return document.querySelector<HTMLElement>('.ordering-exercise')!;
}

describe('recordExerciseCompletion', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('records a correct result and syncs lesson auto-completion once every exercise is correct', () => {
        const container = buildExercise('que-es-ux', 'ex-1', ['ex-1']);

        recordExerciseCompletion(container, true);

        expect(getCorrectExerciseIds('que-es-ux')).toEqual(['ex-1']);
        expect(isLessonCompleted('que-es-ux')).toBe(true);
    });

    test('does not auto-complete the lesson while other exercises are still unsolved', () => {
        const container = buildExercise('que-es-ux', 'ex-1', ['ex-1', 'ex-2']);

        recordExerciseCompletion(container, true);

        expect(isLessonCompleted('que-es-ux')).toBe(false);
    });

    test('does nothing when the exercise is not inside an exercise-list', () => {
        document.body.innerHTML = `<div class="ordering-exercise" data-exercise-id="ex-1"></div>`;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        expect(() => recordExerciseCompletion(container, true)).not.toThrow();
        expect(getCorrectExerciseIds('que-es-ux')).toEqual([]);
    });

    test('does nothing when the exercise-list has no lesson slug', () => {
        document.body.innerHTML = `
            <section class="exercise-list" data-exercise-ids='["ex-1"]'>
                <div class="ordering-exercise" data-exercise-id="ex-1"></div>
            </section>
        `;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        expect(() => recordExerciseCompletion(container, true)).not.toThrow();
    });

    test('does nothing when the container has no exercise id', () => {
        document.body.innerHTML = `
            <section class="exercise-list" data-lesson-slug="que-es-ux" data-exercise-ids='["ex-1"]'>
                <div class="ordering-exercise"></div>
            </section>
        `;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        recordExerciseCompletion(container, true);

        expect(getCorrectExerciseIds('que-es-ux')).toEqual([]);
    });

    test('records the result but skips the sync when exercise-ids is missing', () => {
        document.body.innerHTML = `
            <section class="exercise-list" data-lesson-slug="que-es-ux">
                <div class="ordering-exercise" data-exercise-id="ex-1"></div>
            </section>
        `;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        recordExerciseCompletion(container, true);

        expect(getCorrectExerciseIds('que-es-ux')).toEqual(['ex-1']);
        expect(isLessonCompleted('que-es-ux')).toBe(false);
    });

    test('does not throw and does not sync when exercise-ids is malformed JSON', () => {
        document.body.innerHTML = `
            <section class="exercise-list" data-lesson-slug="que-es-ux" data-exercise-ids="not-json">
                <div class="ordering-exercise" data-exercise-id="ex-1"></div>
            </section>
        `;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        expect(() => recordExerciseCompletion(container, true)).not.toThrow();
        expect(getCorrectExerciseIds('que-es-ux')).toEqual(['ex-1']);
    });
});
