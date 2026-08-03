import type { CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'lessons'>['data']['category'];

export const categories: Category[] = ['ux', 'ui'];

export const categoryLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario (UX)',
    ui: 'Interfaz de Usuario (UI)',
};

export const categoryShortLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario',
    ui: 'Interfaz de Usuario',
};
