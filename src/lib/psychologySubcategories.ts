export type PsychologySubcategory = 'memoria-carga-cognitiva' | 'decisiones-sesgos' | 'percepcion';

export const psychologySubcategories: PsychologySubcategory[] = [
    'memoria-carga-cognitiva',
    'decisiones-sesgos',
    'percepcion',
];

export const psychologySubcategoryLabels: Record<PsychologySubcategory, string> = {
    'memoria-carga-cognitiva': 'Memoria y carga cognitiva',
    'decisiones-sesgos': 'Toma de decisiones y sesgos',
    percepcion: 'Percepción',
};
