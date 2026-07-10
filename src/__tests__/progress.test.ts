import { afterEach, beforeEach, describe, expect, test } from 'vitest';

import {
    getCorrectExerciseIds,
    isLessonAutoCompleted,
    isLessonCompleted,
    recordExerciseResult,
    setLessonCompleted,
    syncLessonCompletionFromExercises,
} from '../lib/progress';

function createMemoryStorage(): Storage {
    const store = new Map<string, string>();

    return {
        get length() {
            return store.size;
        },
        clear(): void {
            store.clear();
        },
        getItem(key: string): string | null {
            return store.get(key) ?? null;
        },
        key(index: number): string | null {
            return Array.from(store.keys())[index] ?? null;
        },
        removeItem(key: string): void {
            store.delete(key);
        },
        setItem(key: string, value: string): void {
            store.set(key, value);
        },
    };
}

describe('progress', () => {
    beforeEach(() => {
        globalThis.localStorage = createMemoryStorage();
    });

    afterEach(() => {
        Reflect.deleteProperty(globalThis, 'localStorage');
    });

    test('a lesson is not completed by default', () => {
        expect(isLessonCompleted('que-es-ux')).toBe(false);
    });

    test('setLessonCompleted marks and unmarks a lesson as completed', () => {
        setLessonCompleted('que-es-ux', true);
        expect(isLessonCompleted('que-es-ux')).toBe(true);

        setLessonCompleted('que-es-ux', false);
        expect(isLessonCompleted('que-es-ux')).toBe(false);
    });

    test('tracks progress independently per lesson slug', () => {
        setLessonCompleted('que-es-ux', true);

        expect(isLessonCompleted('color-contraste')).toBe(false);
    });

    test('recordExerciseResult tracks which exercises were answered correctly', () => {
        recordExerciseResult('que-es-ux', 'ex-1', true);
        recordExerciseResult('que-es-ux', 'ex-2', false);

        expect(getCorrectExerciseIds('que-es-ux')).toEqual(['ex-1']);
    });

    test('recordExerciseResult un-records an exercise once it is answered incorrectly again', () => {
        recordExerciseResult('que-es-ux', 'ex-1', true);
        recordExerciseResult('que-es-ux', 'ex-1', false);

        expect(getCorrectExerciseIds('que-es-ux')).toEqual([]);
    });

    test('isLessonAutoCompleted is false until every exercise id has been answered correctly', () => {
        recordExerciseResult('que-es-ux', 'ex-1', true);
        expect(isLessonAutoCompleted('que-es-ux', ['ex-1', 'ex-2'])).toBe(false);

        recordExerciseResult('que-es-ux', 'ex-2', true);
        expect(isLessonAutoCompleted('que-es-ux', ['ex-1', 'ex-2'])).toBe(true);
    });

    test('a lesson with no exercises is never auto-completed', () => {
        expect(isLessonAutoCompleted('que-es-ux', [])).toBe(false);
    });

    test('syncLessonCompletionFromExercises marks the lesson completed once every exercise is correct', () => {
        recordExerciseResult('que-es-ux', 'ex-1', true);
        recordExerciseResult('que-es-ux', 'ex-2', true);

        const completed = syncLessonCompletionFromExercises('que-es-ux', ['ex-1', 'ex-2']);

        expect(completed).toBe(true);
        expect(isLessonCompleted('que-es-ux')).toBe(true);
    });

    test('syncLessonCompletionFromExercises leaves the lesson incomplete while exercises remain unsolved', () => {
        recordExerciseResult('que-es-ux', 'ex-1', true);

        const completed = syncLessonCompletionFromExercises('que-es-ux', ['ex-1', 'ex-2']);

        expect(completed).toBe(false);
        expect(isLessonCompleted('que-es-ux')).toBe(false);
    });

    test('a manual override is not undone by later answering an exercise incorrectly', () => {
        setLessonCompleted('que-es-ux', true);
        recordExerciseResult('que-es-ux', 'ex-1', false);

        expect(isLessonCompleted('que-es-ux')).toBe(true);
    });

    test('gracefully no-ops when localStorage is unavailable', () => {
        Reflect.deleteProperty(globalThis, 'localStorage');

        expect(() => setLessonCompleted('que-es-ux', true)).not.toThrow();
        expect(isLessonCompleted('que-es-ux')).toBe(false);
        expect(() => recordExerciseResult('que-es-ux', 'ex-1', true)).not.toThrow();
        expect(getCorrectExerciseIds('que-es-ux')).toEqual([]);
    });

    test('gracefully recovers from malformed JSON already stored', () => {
        globalThis.localStorage.setItem('ux-ui-training:lesson-progress:que-es-ux', 'not-json');

        expect(isLessonCompleted('que-es-ux')).toBe(false);
        expect(getCorrectExerciseIds('que-es-ux')).toEqual([]);
    });
});
