const DIACRITICS_PATTERN = new RegExp('[\\u0300-\\u036f]', 'g');

/** Strips diacritics so "diseno" matches "diseño" and vice versa. */
function normalize(value: string): string {
    return value.normalize('NFD').replace(DIACRITICS_PATTERN, '').toLowerCase().trim();
}

/** Whether `title` matches a (possibly empty) search `query`. An empty query matches everything. */
export function matchesSearch(title: string, query: string): boolean {
    const normalizedQuery = normalize(query);
    if (normalizedQuery === '') return true;

    return normalize(title).includes(normalizedQuery);
}
