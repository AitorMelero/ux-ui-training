import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const orderingExerciseSchema = z.object({
    id: z.string(),
    type: z.literal('ordering'),
    prompt: z.string(),
    items: z.array(z.string()).min(3),
    explanation: z.string().optional(),
});

const freeTextExerciseSchema = z.object({
    id: z.string(),
    type: z.literal('free-text'),
    prompt: z.string(),
    acceptedAnswers: z.array(z.string()).min(1),
    placeholder: z.string().optional(),
    explanation: z.string().optional(),
});

const multipleChoiceOptionSchema = z.object({
    text: z.string(),
    correct: z.boolean(),
    explanation: z.string().optional(),
});

const multipleChoiceExerciseSchema = z.object({
    id: z.string(),
    type: z.literal('multiple-choice'),
    prompt: z.string(),
    allowMultiple: z.boolean().default(false),
    options: z.array(multipleChoiceOptionSchema).min(2),
});

const exerciseSchema = z.discriminatedUnion('type', [
    orderingExerciseSchema,
    freeTextExerciseSchema,
    multipleChoiceExerciseSchema,
]);

const lessons = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(['ux', 'ui']),
        level: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner'),
        order: z.number(),
        exercises: z.array(exerciseSchema).default([]),
    }),
});

export const collections = { lessons };
