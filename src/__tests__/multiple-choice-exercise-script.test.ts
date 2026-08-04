// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { initMultipleChoiceExercise } from '../scripts/multiple-choice-exercise';

function buildExercise(): HTMLElement {
    document.body.innerHTML = `
        <div class="multiple-choice-exercise" data-exercise-id="ex-1" data-allow-multiple="false">
            <p class="exercise-prompt">Pregunta</p>
            <ul class="options-list">
                <li class="option-item">
                    <label><input type="radio" name="mc-ex-1" value="0" data-correct="true" /><span class="option-text">A</span></label>
                    <p class="option-explanation" hidden>Explicación A.</p>
                </li>
                <li class="option-item">
                    <label><input type="radio" name="mc-ex-1" value="1" data-correct="false" /><span class="option-text">B</span></label>
                </li>
            </ul>
            <button type="button" class="check-btn">Comprobar respuesta</button>
            <p class="feedback" role="status" aria-live="polite"></p>
        </div>
    `;
    return document.querySelector<HTMLElement>('.multiple-choice-exercise')!;
}

describe('multiple choice exercise script', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('prompts to select an option when nothing is checked', () => {
        const container = buildExercise();
        initMultipleChoiceExercise(container);
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.textContent).toBe('Selecciona al menos una opción antes de comprobar.');
        expect(feedback.classList.contains('is-error')).toBe(true);
    });

    test('marks the correct option and shows success feedback when the right answer is selected', () => {
        const container = buildExercise();
        initMultipleChoiceExercise(container);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');
        inputs[0].checked = true;
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        const optionItems = container.querySelectorAll<HTMLElement>('.option-item');
        expect(optionItems[0].classList.contains('is-correct')).toBe(true);
        expect(optionItems[0].querySelector<HTMLElement>('.option-explanation')!.hidden).toBe(false);
        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.classList.contains('is-success')).toBe(true);
    });

    test('marks the wrong selected option incorrect and reveals the missed correct option', () => {
        const container = buildExercise();
        initMultipleChoiceExercise(container);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');
        inputs[1].checked = true;
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        const optionItems = container.querySelectorAll<HTMLElement>('.option-item');
        expect(optionItems[1].classList.contains('is-incorrect')).toBe(true);
        expect(optionItems[0].classList.contains('is-incorrect')).toBe(true);
        expect(optionItems[0].querySelector<HTMLElement>('.option-explanation')!.hidden).toBe(false);
        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.classList.contains('is-error')).toBe(true);
    });

    test('marks a missed correct option without an explanation, without throwing', () => {
        document.body.innerHTML = `
            <div class="multiple-choice-exercise" data-exercise-id="ex-1" data-allow-multiple="false">
                <p class="exercise-prompt">Pregunta</p>
                <ul class="options-list">
                    <li class="option-item">
                        <label><input type="radio" name="mc-ex-1" value="0" data-correct="true" /><span class="option-text">A</span></label>
                    </li>
                    <li class="option-item">
                        <label><input type="radio" name="mc-ex-1" value="1" data-correct="false" /><span class="option-text">B</span></label>
                    </li>
                </ul>
                <button type="button" class="check-btn">Comprobar respuesta</button>
                <p class="feedback" role="status" aria-live="polite"></p>
            </div>
        `;
        const container = document.querySelector<HTMLElement>('.multiple-choice-exercise')!;
        initMultipleChoiceExercise(container);
        const inputs = container.querySelectorAll<HTMLInputElement>('input');
        inputs[1].checked = true;
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        expect(() => checkBtn.click()).not.toThrow();

        const optionItems = container.querySelectorAll<HTMLElement>('.option-item');
        expect(optionItems[0].classList.contains('is-incorrect')).toBe(true);
    });

    test('does nothing when required elements are missing', () => {
        document.body.innerHTML = `<div class="multiple-choice-exercise"></div>`;
        const container = document.querySelector<HTMLElement>('.multiple-choice-exercise')!;

        expect(() => initMultipleChoiceExercise(container)).not.toThrow();
    });
});
