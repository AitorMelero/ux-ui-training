import type { CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'lessons'>['data']['category'];

export const categories: Category[] = ['ux', 'ui', 'components', 'business', 'projects', 'jobsearch'];

export const categoryLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario (UX)',
    ui: 'Interfaz de Usuario (UI)',
    components: 'Componentes de Interfaz',
    business: 'Lógica de Negocio',
    projects: 'Proyectos de Diseño UX/UI',
    jobsearch: 'Búsqueda de Empleo',
};

export const categoryShortLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario',
    ui: 'Interfaz de Usuario',
    components: 'Componentes',
    business: 'Negocio',
    projects: 'Proyectos',
    jobsearch: 'Empleo',
};
