import type { CollectionEntry } from 'astro:content';

export type Exercise = CollectionEntry<'lessons'>['data']['exercises'][number];

export type OrderingExerciseData = Extract<Exercise, { type: 'ordering' }>;
export type FreeTextExerciseData = Extract<Exercise, { type: 'free-text' }>;
export type MultipleChoiceExerciseData = Extract<Exercise, { type: 'multiple-choice' }>;
