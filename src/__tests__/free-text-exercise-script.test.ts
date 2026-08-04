// @vitest-environment jsdom
import { beforeEach, describe, expect, test } from 'vitest';

import { initFreeTextExercise } from '../scripts/free-text-exercise';

function buildExercise(acceptedAnswers: string[]): HTMLElement {
    document.body.innerHTML = `
        <div class="free-text-exercise" data-exercise-id="ex-1" data-accepted-answers='${JSON.stringify(acceptedAnswers)}'>
            <label class="exercise-prompt" for="answer-ex-1">Pregunta</label>
            <div class="input-row">
                <input type="text" id="answer-ex-1" class="answer-input" />
                <button type="button" class="check-btn">Comprobar</button>
            </div>
            <p class="feedback" role="status" aria-live="polite"></p>
            <p class="explanation" hidden>Explicación.</p>
        </div>
    `;
    return document.querySelector<HTMLElement>('.free-text-exercise')!;
}

describe('free text exercise script', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('marks the answer correct (case/whitespace-insensitive) on click', () => {
        const container = buildExercise(['madrid']);
        initFreeTextExercise(container);
        const input = container.querySelector<HTMLInputElement>('.answer-input')!;
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        input.value = '  Madrid  ';
        checkBtn.click();

        expect(input.classList.contains('is-correct')).toBe(true);
        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.textContent).toBe('¡Correcto!');
        expect(feedback.classList.contains('is-success')).toBe(true);
    });

    test('marks the answer incorrect and reveals the explanation', () => {
        const container = buildExercise(['madrid']);
        initFreeTextExercise(container);
        const input = container.querySelector<HTMLInputElement>('.answer-input')!;
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        input.value = 'barcelona';
        checkBtn.click();

        expect(input.classList.contains('is-incorrect')).toBe(true);
        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.classList.contains('is-error')).toBe(true);
        expect(container.querySelector<HTMLParagraphElement>('.explanation')!.hidden).toBe(false);
    });

    test('prompts for an answer when the input is empty, without revealing the explanation', () => {
        const container = buildExercise(['madrid']);
        initFreeTextExercise(container);
        const checkBtn = container.querySelector<HTMLButtonElement>('.check-btn')!;

        checkBtn.click();

        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.textContent).toBe('Escribe una respuesta antes de comprobarla.');
        expect(container.querySelector<HTMLParagraphElement>('.explanation')!.hidden).toBe(true);
    });

    test('also checks the answer when Enter is pressed in the input', () => {
        const container = buildExercise(['madrid']);
        initFreeTextExercise(container);
        const input = container.querySelector<HTMLInputElement>('.answer-input')!;

        input.value = 'madrid';
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', cancelable: true }));

        expect(input.classList.contains('is-correct')).toBe(true);
    });

    test('ignores other keys pressed in the input', () => {
        const container = buildExercise(['madrid']);
        initFreeTextExercise(container);
        const input = container.querySelector<HTMLInputElement>('.answer-input')!;

        input.value = 'madrid';
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab' }));

        const feedback = container.querySelector<HTMLParagraphElement>('.feedback')!;
        expect(feedback.textContent).toBe('');
    });

    test('does nothing when required elements are missing', () => {
        document.body.innerHTML = `<div class="free-text-exercise"></div>`;
        const container = document.querySelector<HTMLElement>('.free-text-exercise')!;

        expect(() => initFreeTextExercise(container)).not.toThrow();
    });
});
