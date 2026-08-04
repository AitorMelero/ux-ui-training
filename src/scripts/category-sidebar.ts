export function setExpanded(toggle: HTMLButtonElement, panel: HTMLElement, expanded: boolean): void {
    toggle.setAttribute('aria-expanded', String(expanded));
    panel.hidden = !expanded;
}

export function initCategorySidebar(): void {
    const toggle = document.querySelector<HTMLButtonElement>('#category-sidebar-toggle');
    const panel = document.querySelector<HTMLElement>('#category-sidebar-panel');
    if (!toggle || !panel) return;

    if (window.matchMedia('(max-width: 640px)').matches) {
        setExpanded(toggle, panel, false);
    }

    toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        setExpanded(toggle, panel, !expanded);
    });
}

initCategorySidebar();
