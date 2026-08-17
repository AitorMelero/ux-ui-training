import type { CollectionEntry } from 'astro:content';

export type Category = CollectionEntry<'lessons'>['data']['category'];

export const categories: Category[] = ['ux', 'ui', 'components', 'business', 'projects', 'jobsearch', 'psychology'];

export const categoryLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario (UX)',
    ui: 'Interfaz de Usuario (UI)',
    components: 'Componentes de Interfaz',
    business: 'Lógica de Negocio',
    projects: 'Proyectos de Diseño UX/UI',
    jobsearch: 'Búsqueda de Empleo',
    psychology: 'Psicología UX',
};

export const categoryShortLabels: Record<Category, string> = {
    ux: 'Experiencia de Usuario',
    ui: 'Interfaz de Usuario',
    components: 'Componentes',
    business: 'Negocio',
    projects: 'Proyectos',
    jobsearch: 'Empleo',
    psychology: 'Psicología',
};

export const categoryDescriptions: Record<Category, string> = {
    ux: 'Fundamentos de investigación, arquitectura de información y proceso de diseño centrado en el usuario.',
    ui: 'Principios visuales, tipografía, color y maquetación para construir interfaces claras y consistentes.',
    components:
        'Patrones y buenas prácticas de los elementos de interfaz más habituales: botones, formularios, modales y más.',
    business: 'Cómo las decisiones de diseño se conectan con objetivos de negocio, métricas y restricciones reales.',
    projects: 'Ejercicios y proyectos guiados para practicar el proceso de diseño de principio a fin.',
    jobsearch: 'Consejos prácticos para preparar tu candidatura: CV, portfolio, redes profesionales y entrevistas.',
    psychology:
        'Principios de psicología cognitiva —memoria, sesgos de decisión y percepción— aplicados a decisiones de diseño de producto.',
};
