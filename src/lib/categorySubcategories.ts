import { businessSubcategories, businessSubcategoryLabels } from './businessSubcategories';
import type { Category } from './categories';
import { elementSubcategories, elementSubcategoryLabels } from './elementSubcategories';

export const categorySubcategories: Partial<Record<Category, { key: string; label: string }[]>> = {
    components: elementSubcategories.map((key) => ({ key, label: elementSubcategoryLabels[key] })),
    business: businessSubcategories.map((key) => ({ key, label: businessSubcategoryLabels[key] })),
};
