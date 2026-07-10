/**
 * Framework-free localStorage-backed lesson progress tracking.
 *
 * A lesson is considered "completed" either because the learner explicitly
 * marked it as such, or because every exercise in the lesson has been
 * answered correctly at least once. Both paths converge on the same
 * `completed` boolean so callers never need to reason about two states.
 */

const STORAGE_KEY_PREFIX = 'ux-ui-training:lesson-progress:';

interface LessonProgress {
    completed: boolean;
    correctExerciseIds: string[];
}

const EMPTY_PROGRESS: LessonProgress = { completed: false, correctExerciseIds: [] };

function storageKey(lessonSlug: string): string {
    return `${STORAGE_KEY_PREFIX}${lessonSlug}`;
}

/** Returns the browser's localStorage, or null if it's unavailable (SSR, private browsing, disabled storage, etc). */
function getStorage(): Storage | null {
    try {
        if (typeof localStorage === 'undefined') return null;
        return localStorage;
    } catch {
        return null;
    }
}

function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function readProgress(lessonSlug: string): LessonProgress {
    const storage = getStorage();
    if (!storage) return EMPTY_PROGRESS;

    try {
        const raw = storage.getItem(storageKey(lessonSlug));
        if (!raw) return EMPTY_PROGRESS;

        const parsed: unknown = JSON.parse(raw);
        if (typeof parsed !== 'object' || parsed === null) return EMPTY_PROGRESS;

        const candidate = parsed as Record<string, unknown>;
        return {
            completed: candidate.completed === true,
            correctExerciseIds: isStringArray(candidate.correctExerciseIds) ? candidate.correctExerciseIds : [],
        };
    } catch {
        return EMPTY_PROGRESS;
    }
}

function writeProgress(lessonSlug: string, progress: LessonProgress): void {
    const storage = getStorage();
    if (!storage) return;

    try {
        storage.setItem(storageKey(lessonSlug), JSON.stringify(progress));
    } catch {
        // Storage full, disabled, or blocked (e.g. private browsing) — fail silently.
    }
}

/** Whether the lesson is currently marked completed (manually or via exercises). */
export function isLessonCompleted(lessonSlug: string): boolean {
    return readProgress(lessonSlug).completed;
}

/** Explicitly sets (or clears) the lesson's completed state, e.g. from a manual toggle. */
export function setLessonCompleted(lessonSlug: string, completed: boolean): void {
    const progress = readProgress(lessonSlug);
    writeProgress(lessonSlug, { ...progress, completed });
}

/** Returns the ids of exercises within a lesson that have been answered correctly at least once. */
export function getCorrectExerciseIds(lessonSlug: string): string[] {
    return readProgress(lessonSlug).correctExerciseIds;
}

/** Records whether a single exercise was answered correctly. Wrong answers un-record a previous correct result. */
export function recordExerciseResult(lessonSlug: string, exerciseId: string, correct: boolean): void {
    const progress = readProgress(lessonSlug);
    const correctIds = new Set(progress.correctExerciseIds);

    if (correct) {
        correctIds.add(exerciseId);
    } else {
        correctIds.delete(exerciseId);
    }

    writeProgress(lessonSlug, { ...progress, correctExerciseIds: Array.from(correctIds) });
}

/** Whether every exercise id in `exerciseIds` has been answered correctly. A lesson with no exercises is never auto-completed. */
export function isLessonAutoCompleted(lessonSlug: string, exerciseIds: string[]): boolean {
    if (exerciseIds.length === 0) return false;
    const correctIds = new Set(getCorrectExerciseIds(lessonSlug));
    return exerciseIds.every((id) => correctIds.has(id));
}

/**
 * Re-evaluates auto-completion for a lesson given its full set of exercise ids, marking the
 * lesson completed if every exercise has been answered correctly. Never un-completes a lesson —
 * that's only ever done through the manual toggle. Returns the resulting completed state.
 */
export function syncLessonCompletionFromExercises(lessonSlug: string, exerciseIds: string[]): boolean {
    if (isLessonAutoCompleted(lessonSlug, exerciseIds)) {
        setLessonCompleted(lessonSlug, true);
    }
    return isLessonCompleted(lessonSlug);
}
