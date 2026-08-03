import type { CollectionEntry } from 'astro:content';

export type Level = CollectionEntry<'lessons'>['data']['level'];

export const levels: Level[] = ['beginner', 'intermediate', 'advanced'];

export const levelLabels: Record<Level, string> = {
    beginner: 'Principiante',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
};
