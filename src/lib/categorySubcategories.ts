import { businessSubcategories, businessSubcategoryLabels } from './businessSubcategories';
import type { Category } from './categories';
import { elementSubcategories, elementSubcategoryLabels } from './elementSubcategories';
import { jobsearchSubcategories, jobsearchSubcategoryLabels } from './jobsearchSubcategories';
import { projectSubcategories, projectSubcategoryLabels } from './projectSubcategories';
import { psychologySubcategories, psychologySubcategoryLabels } from './psychologySubcategories';

export const categorySubcategories: Partial<Record<Category, { key: string; label: string }[]>> = {
    components: elementSubcategories.map((key) => ({ key, label: elementSubcategoryLabels[key] })),
    business: businessSubcategories.map((key) => ({ key, label: businessSubcategoryLabels[key] })),
    projects: projectSubcategories.map((key) => ({ key, label: projectSubcategoryLabels[key] })),
    jobsearch: jobsearchSubcategories.map((key) => ({ key, label: jobsearchSubcategoryLabels[key] })),
    psychology: psychologySubcategories.map((key) => ({ key, label: psychologySubcategoryLabels[key] })),
};
