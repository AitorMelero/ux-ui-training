export type JobsearchSubcategory = 'cv-y-portfolio' | 'redes-y-contacto' | 'pruebas-y-proyectos' | 'entrevistas';

export const jobsearchSubcategories: JobsearchSubcategory[] = [
    'cv-y-portfolio',
    'redes-y-contacto',
    'pruebas-y-proyectos',
    'entrevistas',
];

export const jobsearchSubcategoryLabels: Record<JobsearchSubcategory, string> = {
    'cv-y-portfolio': 'CV y Portfolio',
    'redes-y-contacto': 'Redes y Contacto',
    'pruebas-y-proyectos': 'Pruebas y Proyectos',
    entrevistas: 'Entrevistas',
};
