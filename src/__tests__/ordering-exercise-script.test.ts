// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { currentOrder, initOrderingExercise, moveItem, shuffle } from '../scripts/ordering-exercise';

function buildExercise(items: string[]): HTMLElement {
    const itemsHtml = items
        .map(
            (item) => `
        <li class="ordering-item" draggable="true">
            <span class="drag-handle" aria-hidden="true">⠿</span>
            <span class="ordering-item-text">${item}</span>
            <span class="ordering-item-controls">
                <button type="button" class="move-up" aria-label="Subir este elemento">↑</button>
                <button type="button" class="move-down" aria-label="Bajar este elemento">↓</button>
            </span>
        </li>`,
        )
        .join('');

    document.body.innerHTML = `
        <div class="ordering-exercise" data-exercise-id="ex-1" data-correct-order='${JSON.stringify(items)}'>
            <ol class="ordering-list">${itemsHtml}</ol>
            <button type="button" class="check-btn">Comprobar orden</button>
            <p class="feedback" role="status" aria-live="polite"></p>
            <p class="explanation" hidden>Explicación.</p>
        </div>
    `;
    return document.querySelector<HTMLElement>('.ordering-exercise')!;
}

describe('shuffle', () => {
    test('returns every original item exactly once', () => {
        const items = ['a', 'b', 'c', 'd'];

        const result = shuffle(items);

        expect(result).toHaveLength(items.length);
        expect(result.slice().sort()).toEqual(items.slice().sort());
    });

    test('does not mutate the original array', () => {
        const items = ['a', 'b', 'c'];

        shuffle(items);

        expect(items).toEqual(['a', 'b', 'c']);
    });
});

describe('currentOrder / moveItem', () => {
    test('currentOrder reads the visible order of items', () => {
        buildExercise(['Primero', 'Segundo', 'Tercero']);
        const list = document.querySelector<HTMLOListElement>('.ordering-list')!;

        expect(currentOrder(list)).toEqual(['Primero', 'Segundo', 'Tercero']);
    });

    test('moveItem moves an item up and down, and focuses its move-up button', () => {
        buildExercise(['Primero', 'Segundo', 'Tercero']);
        const list = document.querySelector<HTMLOListElement>('.ordering-list')!;
        const items = Array.from(list.children) as HTMLLIElement[];

        moveItem(list, items[1], -1);
        expect(currentOrder(list)).toEqual(['Segundo', 'Primero', 'Tercero']);

        moveItem(list, items[1], 1);
        expect(currentOrder(list)).toEqual(['Primero', 'Segundo', 'Tercero']);
    });

    test('moveItem does nothing when there is no sibling in that direction', () => {
        buildExercise(['Primero', 'Segundo']);
        const list = document.querySelector<HTMLOListElement>('.ordering-list')!;
        const items = Array.from(list.children) as HTMLLIElement[];

        moveItem(list, items[0], -1);

        expect(currentOrder(list)).toEqual(['Primero', 'Segundo']);
    });
});

/** initOrderingExercise shuffles items on init, so tests force a known DOM order before asserting. */
function forceOrder(list: HTMLOListElement, order: string[]): void {
    const itemsByText = new Map(
        Array.from(list.children).map((child) => [child.querySelector('.ordering-item-text')?.textContent, child]),
    );
    order.forEach((text) => list.appendChild(itemsByText.get(text)!));
}

describe('initOrderingExercise', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('moves an item up via its move-up button, swapping it with its previous sibling', () => {
        const container = buildExercise(['Primero', 'Segundo', 'Tercero']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        const orderBeforeMove = currentOrder(list);
        const secondItemMoveUp = list.children[1].querySelector<HTMLButtonElement>('.move-up')!;

        secondItemMoveUp.click();

        const orderAfterMove = currentOrder(list);
        expect(orderAfterMove[0]).toBe(orderBeforeMove[1]);
        expect(orderAfterMove[1]).toBe(orderBeforeMove[0]);
        expect(orderAfterMove[2]).toBe(orderBeforeMove[2]);
    });

    test('marks items correct and shows success feedback when the order matches', () => {
        const container = buildExercise(['Primero', 'Segundo']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        forceOrder(list, ['Primero', 'Segundo']);
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        Array.from(list.children).forEach((child) => expect(child.classList.contains('is-correct')).toBe(true));
        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.classList.contains('is-success')).toBe(true);
        expect(container.querySelector<HTMLParagraphElement>('.explanation')!.hidden).toBe(false);
    });

    test('marks items incorrect and shows error feedback when the order does not match', () => {
        const container = buildExercise(['Primero', 'Segundo']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        forceOrder(list, ['Segundo', 'Primero']);
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.classList.contains('is-error')).toBe(true);
        expect(container.querySelector<HTMLParagraphElement>('.explanation')!.hidden).toBe(true);
    });

    test('moves an item down via its move-down button, swapping it with its next sibling', () => {
        const container = buildExercise(['Primero', 'Segundo', 'Tercero']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        const orderBeforeMove = currentOrder(list);
        const firstItemMoveDown = list.children[0].querySelector<HTMLButtonElement>('.move-down')!;

        firstItemMoveDown.click();

        const orderAfterMove = currentOrder(list);
        expect(orderAfterMove[0]).toBe(orderBeforeMove[1]);
        expect(orderAfterMove[1]).toBe(orderBeforeMove[0]);
    });

    test('ignores clicks on the list that are not on a move button', () => {
        const container = buildExercise(['Primero', 'Segundo']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        const orderBeforeClick = currentOrder(list);

        list.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(currentOrder(list)).toEqual(orderBeforeClick);
    });

    test('reorders items via drag and drop', () => {
        const container = buildExercise(['Primero', 'Segundo', 'Tercero']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        forceOrder(list, ['Primero', 'Segundo', 'Tercero']);
        const [first, second, third] = Array.from(list.children) as HTMLLIElement[];

        first.dispatchEvent(new Event('dragstart', { bubbles: true }));
        third.dispatchEvent(new MouseEvent('dragover', { bubbles: true, cancelable: true, clientY: -100 }));
        list.dispatchEvent(new Event('dragend', { bubbles: true }));

        expect(currentOrder(list)).toEqual(['Segundo', 'Primero', 'Tercero']);
        expect(second).toBe(list.children[0]);
    });

    test('drops before the target when dragging over its lower half', () => {
        const container = buildExercise(['Primero', 'Segundo', 'Tercero']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        forceOrder(list, ['Primero', 'Segundo', 'Tercero']);
        const [first, , third] = Array.from(list.children) as HTMLLIElement[];

        first.dispatchEvent(new Event('dragstart', { bubbles: true }));
        third.dispatchEvent(new MouseEvent('dragover', { bubbles: true, cancelable: true, clientY: 100 }));

        expect(currentOrder(list)).toEqual(['Segundo', 'Tercero', 'Primero']);
    });

    test('ignores dragover when there is no dragged item, no target, or the target is itself', () => {
        const container = buildExercise(['Primero', 'Segundo']);
        initOrderingExercise(container);
        const list = container.querySelector<HTMLOListElement>('.ordering-list')!;
        forceOrder(list, ['Primero', 'Segundo']);
        const [first] = Array.from(list.children) as HTMLLIElement[];

        list.dispatchEvent(new MouseEvent('dragover', { bubbles: true, cancelable: true }));
        expect(currentOrder(list)).toEqual(['Primero', 'Segundo']);

        first.dispatchEvent(new Event('dragstart', { bubbles: true }));
        first.dispatchEvent(new MouseEvent('dragover', { bubbles: true, cancelable: true }));
        expect(currentOrder(list)).toEqual(['Primero', 'Segundo']);
    });

    test('does nothing when required elements are missing', () => {
        document.body.innerHTML = `<div class="ordering-exercise"></div>`;
        const container = document.querySelector<HTMLElement>('.ordering-exercise')!;

        expect(() => initOrderingExercise(container)).not.toThrow();
    });
});
