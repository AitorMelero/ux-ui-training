export type ProjectSubcategory =
    'proceso-general' | 'productos-de-contenido' | 'herramientas-y-plataformas' | 'comunidad-y-entretenimiento';

export const projectSubcategories: ProjectSubcategory[] = [
    'proceso-general',
    'productos-de-contenido',
    'herramientas-y-plataformas',
    'comunidad-y-entretenimiento',
];

export const projectSubcategoryLabels: Record<ProjectSubcategory, string> = {
    'proceso-general': 'Proceso general',
    'productos-de-contenido': 'Productos de contenido',
    'herramientas-y-plataformas': 'Herramientas y plataformas',
    'comunidad-y-entretenimiento': 'Comunidad y entretenimiento',
};
