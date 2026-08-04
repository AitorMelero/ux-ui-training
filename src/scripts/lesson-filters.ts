import { matchesSearch } from '../lib/lessonSearch';

export function initLessonFilters(): void {
    const searchInput = document.querySelector<HTMLInputElement>('#lesson-search-input');
    const levelButtons = document.querySelectorAll<HTMLButtonElement>('.lesson-level-filter-button');
    const subcategoryButtons = document.querySelectorAll<HTMLButtonElement>('.lesson-subcategory-filter-button');
    const emptyMessage = document.querySelector<HTMLElement>('.lesson-filters-empty');

    let selectedLevel = 'all';
    let selectedSubcategory = 'all';

    function applyFilters(): void {
        const query = searchInput?.value ?? '';
        let anyLessonVisible = false;

        document.querySelectorAll<HTMLElement>('.level-group').forEach((levelGroup) => {
            const matchesLevel = selectedLevel === 'all' || levelGroup.dataset.level === selectedLevel;
            let groupHasVisibleLesson = false;

            levelGroup.querySelectorAll<HTMLElement>('.lesson-card').forEach((card) => {
                const title = card.querySelector('h3')?.textContent ?? '';
                const matchesSubcategory =
                    selectedSubcategory === 'all' || card.dataset.subcategory === selectedSubcategory;
                const visible = matchesLevel && matchesSubcategory && matchesSearch(title, query);
                card.hidden = !visible;
                if (visible) groupHasVisibleLesson = true;
            });

            levelGroup.hidden = !groupHasVisibleLesson;
            if (groupHasVisibleLesson) anyLessonVisible = true;
        });

        document.querySelectorAll<HTMLElement>('.lesson-group').forEach((lessonGroup) => {
            const hasVisibleLevelGroup = Array.from(lessonGroup.querySelectorAll<HTMLElement>('.level-group')).some(
                (levelGroup) => !levelGroup.hidden,
            );
            lessonGroup.hidden = !hasVisibleLevelGroup;
        });

        if (emptyMessage) emptyMessage.hidden = anyLessonVisible;
    }

    searchInput?.addEventListener('input', applyFilters);

    levelButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedLevel = button.dataset.level ?? 'all';
            levelButtons.forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
            applyFilters();
        });
    });

    subcategoryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectedSubcategory = button.dataset.subcategory ?? 'all';
            subcategoryButtons.forEach((other) => other.setAttribute('aria-pressed', String(other === button)));
            applyFilters();
        });
    });
}

initLessonFilters();
