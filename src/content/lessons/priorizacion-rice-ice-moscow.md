---
title: 'Priorización de funcionalidades: RICE, ICE y MoSCoW'
description: 'Tres marcos sencillos para decidir qué construir primero cuando hay más ideas que tiempo, y cómo un diseñador puede aportar criterio en esa conversación.'
category: business
level: intermediate
order: 5
subcategory: priorizacion-decisiones
exercises:
    - id: priorizacion-mc-1
      type: multiple-choice
      prompt: 'En el marco RICE, ¿qué significa la "C" de "Confidence" (confianza)?'
      allowMultiple: false
      options:
          - text: 'El grado de certeza que el equipo tiene sobre sus propias estimaciones de alcance, impacto y esfuerzo, que actúa como un ajuste a la baja cuando hay mucha incertidumbre.'
            correct: true
            explanation: 'Correcto. La confianza reconoce que las estimaciones de alcance e impacto muchas veces son aproximadas; una iniciativa con estimaciones muy inciertas se penaliza en la puntuación final aunque sus números "sobre el papel" parezcan buenos.'
          - text: 'La confianza que el equipo de diseño tiene en que el usuario va a usar la funcionalidad sin necesitar ayuda.'
            correct: false
            explanation: 'Eso sería más bien una medida de usabilidad esperada, no el componente "Confidence" de RICE, que se refiere a la fiabilidad de las propias estimaciones del equipo.'
          - text: 'El número de personas del equipo que están de acuerdo con priorizar esa funcionalidad.'
            correct: false
            explanation: 'RICE no mide consenso interno del equipo, sino la fiabilidad de los datos usados para estimar alcance, impacto y esfuerzo.'
    - id: priorizacion-mc-2
      type: multiple-choice
      prompt: 'En el marco MoSCoW (Must have, Should have, Could have, Won''t have), ¿qué diferencia principal hay entre "Should have" y "Could have"?'
      allowMultiple: false
      options:
          - text: '"Should have" son elementos importantes pero no bloqueantes para el lanzamiento; "Could have" son deseables pero de bajo impacto si se quedan fuera.'
            correct: true
            explanation: 'Correcto. MoSCoW ordena por urgencia relativa: "Must" bloquea el lanzamiento si falta, "Should" es importante pero se puede lanzar sin ello si hace falta, y "Could" son mejoras de "nice to have" que se sacrifican primero si el tiempo aprieta.'
          - text: 'No hay ninguna diferencia real; son dos nombres distintos para la misma categoría.'
            correct: false
            explanation: 'MoSCoW distingue deliberadamente cuatro niveles de urgencia; tratar "Should" y "Could" como sinónimos anula el propósito del marco, que es precisamente ordenar por urgencia relativa.'
          - text: '"Should have" lo decide el equipo de diseño y "Could have" lo decide el equipo de desarrollo.'
            correct: false
            explanation: 'La clasificación MoSCoW la decide el equipo de producto (normalmente con aportación de diseño y desarrollo) según el impacto y la urgencia, no según qué disciplina lo propone.'
    - id: priorizacion-order-1
      type: ordering
      prompt: 'Ordena estos pasos de un proceso típico de priorización con RICE, del primero al último.'
      items:
          - 'Reunir la lista de iniciativas candidatas para el próximo periodo'
          - 'Estimar para cada una el alcance (Reach), el impacto (Impact), la confianza (Confidence) y el esfuerzo (Effort)'
          - 'Calcular la puntuación RICE de cada iniciativa (Reach × Impact × Confidence / Effort)'
          - 'Ordenar la lista de mayor a menor puntuación y discutir con el equipo si el orden resultante tiene sentido'
      explanation: 'RICE no sustituye el criterio del equipo, solo lo estructura: el paso final de discutir el resultado es importante, porque a veces la puntuación numérica no captura factores estratégicos que el equipo sí conoce.'
---

## El problema que resuelven estos marcos

Cualquier equipo de producto tiene siempre más ideas de las que puede construir en un periodo dado. Sin un criterio explícito, la priorización tiende a decidirse por quién grita más fuerte en la reunión, o por la última petición de un cliente importante, en lugar de por lo que realmente genera más valor con el menor esfuerzo. Los marcos de priorización no eliminan el juicio humano, pero lo estructuran, obligando a hacer explícitas las estimaciones y a comparar iniciativas distintas con los mismos criterios.

## RICE: Reach, Impact, Confidence, Effort

RICE calcula una puntuación combinando cuatro factores:

- **Reach (alcance)**: a cuántos usuarios afecta la iniciativa en un periodo dado (por ejemplo, "2.000 usuarios al mes").
- **Impact (impacto)**: cuánto mejora la experiencia o la métrica objetivo para cada usuario afectado, normalmente en una escala simple (masivo, alto, medio, bajo, mínimo).
- **Confidence (confianza)**: qué tan seguros están de las estimaciones anteriores, expresado como porcentaje; una idea con datos sólidos detrás tiene más confianza que una corazonada.
- **Effort (esfuerzo)**: cuánto tiempo de equipo requiere, normalmente en persona-meses.

La puntuación se calcula como `(Reach × Impact × Confidence) / Effort`: cuanto mayor, más prioritaria. El valor de RICE no está en el número exacto, sino en obligar a estimar cada factor por separado en lugar de decidir "a ojo" con todos mezclados.

## ICE: una versión más rápida

ICE (Impact, Confidence, Ease) es una versión simplificada, útil cuando no hace falta tanto detalle: puntúa impacto, confianza y facilidad de implementación (el inverso del esfuerzo) en una escala del 1 al 10 cada una, y multiplica los tres números. Es más rápida de aplicar que RICE pero también más subjetiva, por lo que suele usarse en fases tempranas de exploración, no para decisiones grandes con mucho en juego.

## MoSCoW: agrupar por urgencia, no puntuar

MoSCoW no calcula una puntuación numérica, sino que clasifica cada elemento en cuatro cubos: **Must have** (imprescindible, sin esto no se puede lanzar), **Should have** (importante pero no bloqueante), **Could have** (deseable, se sacrifica primero si falta tiempo) y **Won't have** (explícitamente fuera de alcance esta vez, para dejarlo por escrito y evitar ambigüedad). Es especialmente útil para acotar el alcance de un lanzamiento concreto, más que para comparar iniciativas de periodos distintos.

## El papel del diseño en esta conversación

Un diseñador aporta a estas discusiones algo que raramente tienen los números por sí solos: criterio sobre el impacto real en la experiencia del usuario, más allá de una métrica aislada. Estimar el "Impact" de RICE, por ejemplo, no debería hacerse solo mirando una tabla de analítica: la investigación de usuarios, los tests de usabilidad y el conocimiento acumulado del equipo de diseño sobre los puntos de fricción reales son información valiosa para que esa estimación sea más precisa que una simple suposición.
