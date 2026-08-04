import { recordExerciseResult, syncLessonCompletionFromExercises } from '../lib/progress';

/** Records an exercise's result and re-syncs the lesson's auto-completion state from all its exercises. */
export function recordExerciseCompletion(container: HTMLElement, correct: boolean): void {
    const list = container.closest<HTMLElement>('.exercise-list[data-lesson-slug]');
    const lessonSlug = list?.dataset.lessonSlug;
    const exerciseId = container.dataset.exerciseId;
    if (!list || !lessonSlug || !exerciseId) return;

    recordExerciseResult(lessonSlug, exerciseId, correct);

    const exerciseIdsRaw = list.dataset.exerciseIds;
    if (!exerciseIdsRaw) return;
    try {
        const exerciseIds = JSON.parse(exerciseIdsRaw) as string[];
        syncLessonCompletionFromExercises(lessonSlug, exerciseIds);
    } catch {
        // Malformed data attribute — nothing to sync.
    }
}
