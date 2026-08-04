export type BusinessSubcategory =
    'fundamentos-negocio' | 'priorizacion-decisiones' | 'monetizacion-crecimiento' | 'comunicacion-stakeholders';

export const businessSubcategories: BusinessSubcategory[] = [
    'fundamentos-negocio',
    'priorizacion-decisiones',
    'monetizacion-crecimiento',
    'comunicacion-stakeholders',
];

export const businessSubcategoryLabels: Record<BusinessSubcategory, string> = {
    'fundamentos-negocio': 'Fundamentos de negocio',
    'priorizacion-decisiones': 'Priorización y decisiones',
    'monetizacion-crecimiento': 'Monetización y crecimiento',
    'comunicacion-stakeholders': 'Comunicación con stakeholders',
};
