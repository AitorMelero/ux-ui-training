export type ElementSubcategory = 'acciones-contenido' | 'navegacion' | 'formularios' | 'overlays-feedback';

export const elementSubcategories: ElementSubcategory[] = [
    'acciones-contenido',
    'navegacion',
    'formularios',
    'overlays-feedback',
];

export const elementSubcategoryLabels: Record<ElementSubcategory, string> = {
    'acciones-contenido': 'Acciones y contenido',
    navegacion: 'Navegación',
    formularios: 'Formularios',
    'overlays-feedback': 'Overlays y feedback',
};
