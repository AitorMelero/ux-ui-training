---
title: 'Métricas de UX/UI y analítica de producto'
description: 'Aprende a medir si un diseño funciona: tasa de éxito, tasa de error, SUS, NPS, conversión, engagement y retención, y cómo elegir la métrica correcta para cada pregunta.'
category: ux
level: advanced
order: 12
exercises:
    - id: metricas-mc-1
      type: multiple-choice
      prompt: 'Una app pierde el 70% de sus usuarios nuevos antes de terminar de completar el registro. ¿Qué métrica describe mejor este problema?'
      allowMultiple: false
      options:
          - text: 'Tasa de abandono (drop-off rate) en el flujo de onboarding.'
            correct: true
            explanation: 'Correcto. La tasa de abandono mide el porcentaje de usuarios que inician un flujo pero no lo completan, y es la métrica estándar para detectar en qué paso concreto se pierde a la gente.'
          - text: 'Net Promoter Score (NPS).'
            correct: false
            explanation: 'El NPS mide la probabilidad de que un usuario recomiende el producto, típicamente encuestando a usuarios activos; no está diseñado para medir abandono durante un flujo.'
          - text: 'Tiempo medio de sesión.'
            correct: false
            explanation: 'El tiempo de sesión mide cuánto dura una visita, no en qué punto exacto de un flujo se pierden los usuarios.'
    - id: metricas-mc-2
      type: multiple-choice
      prompt: '¿Qué mide específicamente el Net Promoter Score (NPS)?'
      allowMultiple: false
      options:
          - text: 'La probabilidad de que un usuario recomiende el producto a otra persona, en una escala de 0 a 10, agrupando a los encuestados en detractores, pasivos y promotores.'
            correct: true
            explanation: 'Correcto. El NPS se calcula como el porcentaje de promotores (9-10) menos el porcentaje de detractores (0-6), ignorando a los pasivos (7-8), y resulta en un número entre -100 y 100.'
          - text: 'El número de errores de usabilidad detectados en una evaluación heurística.'
            correct: false
            explanation: 'Eso corresponde a un informe de evaluación heurística, no al NPS, que es una métrica de percepción y lealtad recogida por encuesta.'
          - text: 'El porcentaje de usuarios que completan una tarea con éxito en un test de usabilidad.'
            correct: false
            explanation: 'Esa es la tasa de éxito de tarea (task success rate), una métrica distinta centrada en el desempeño, no en la percepción de lealtad.'
    - id: metricas-order-1
      type: ordering
      prompt: 'Ordena estas métricas según su cercanía al comportamiento real del usuario (de la más objetiva/conductual a la más subjetiva/de opinión).'
      items:
          - 'Tasa de éxito de tarea (¿completó la tarea sí o no?)'
          - 'Tiempo en tarea (cuánto tardó en completarla)'
          - 'System Usability Scale (SUS), un cuestionario estandarizado de percepción de usabilidad'
          - 'Net Promoter Score (NPS), probabilidad autodeclarada de recomendar el producto'
      explanation: 'La tasa de éxito y el tiempo se miden observando el comportamiento real; el SUS y el NPS se basan en lo que el usuario declara sentir o pensar, que no siempre coincide con su comportamiento real.'
    - id: metricas-free-1
      type: free-text
      prompt: '¿Cómo se llama la métrica que expresa qué porcentaje de las personas que iniciaron un proceso (por ejemplo, un embudo de compra) terminan completando el objetivo final (por ejemplo, la compra)?'
      acceptedAnswers:
          - 'tasa de conversion'
          - 'tasa de conversión'
          - 'conversion rate'
          - 'conversion'
          - 'conversión'
      explanation: 'La tasa de conversión es una de las métricas de negocio más vigiladas en productos digitales, y suele analizarse por pasos de un embudo (funnel) para localizar exactamente dónde se pierden más usuarios.'
---

## Diseñar sin medir es negociar con opiniones

Sin métricas, cualquier debate sobre si un diseño "funciona" se reduce a opiniones personales del equipo, que suelen ganar quien tiene más autoridad o más seguridad al hablar, no necesariamente quien tiene razón. Medir convierte esas discusiones en preguntas verificables: no "¿te parece que este flujo es confuso?" sino "¿qué porcentaje de usuarios lo completa sin ayuda, y cuánto tardan?". Un equipo de diseño maduro no solo produce interfaces: produce hipótesis medibles y revisa sus resultados con la misma disciplina que cualquier otra decisión de producto basada en datos.

## Métricas de usabilidad: cómo se comporta la gente

Estas métricas se recogen observando comportamiento real, normalmente en tests de usabilidad:

- **Tasa de éxito de tarea** (_task success rate_): porcentaje de participantes que completan una tarea concreta. Suele desglosarse en éxito completo, éxito con ayuda y fracaso, en lugar de un simple sí/no.
- **Tiempo en tarea**: cuánto tarda un usuario en completar una tarea. Útil sobre todo en comparación (¿el nuevo diseño es más rápido que el anterior?), no como número aislado.
- **Tasa de error**: cuántos errores comete un usuario durante una tarea, y de qué tipo (errores que corrige solo vs. errores que le hacen fracasar por completo).
- **Tasa de abandono** (_drop-off rate_): en un flujo de varios pasos (registro, checkout), qué porcentaje de usuarios abandona en cada paso. Analizada paso a paso, revela exactamente dónde está el problema, no solo que existe un problema.

## Métricas de percepción: cómo se siente la gente

Estas métricas se recogen mediante cuestionarios, y capturan la experiencia subjetiva, que no siempre coincide con el desempeño objetivo (un usuario puede completar una tarea con éxito y aun así sentir que fue frustrante):

- **System Usability Scale (SUS)**: un cuestionario estandarizado de diez preguntas con escala de acuerdo (1-5), que produce una puntuación de 0 a 100 comparable entre estudios y a lo largo del tiempo. Una puntuación por encima de 68 se considera por encima de la media.
- **Net Promoter Score (NPS)**: pregunta "¿qué probabilidad hay de que recomiendes este producto a un colega o amigo?" en una escala de 0 a 10. Se clasifica a los encuestados en detractores (0-6), pasivos (7-8) y promotores (9-10), y el NPS es el porcentaje de promotores menos el porcentaje de detractores, dando un número entre -100 y 100.
- **Customer Satisfaction Score (CSAT)**: pregunta directa sobre satisfacción con una interacción concreta (por ejemplo, tras un contacto con soporte), normalmente en una escala de 1 a 5.

## Métricas de negocio: engagement, conversión y retención

Estas métricas conectan el diseño con el resultado del negocio, y suelen obtenerse de analítica de producto en lugar de encuestas o tests:

- **Conversión**: porcentaje de usuarios que completan un objetivo de negocio (compra, suscripción, registro), a menudo analizado como un embudo (_funnel_) paso a paso.
- **Engagement**: con cuánta frecuencia e intensidad usan el producto los usuarios activos (sesiones por semana, funciones usadas, contenido creado). No hay una única métrica de engagement; depende de qué comportamiento define "usar bien" ese producto concreto.
- **Retención**: qué porcentaje de usuarios sigue activo después de un periodo (día 1, día 7, día 30 desde el registro). Se suele representar como una curva de retención por cohortes: el grupo de usuarios que se registró la misma semana, seguido en el tiempo.
- **Churn** (tasa de cancelación o abandono): el reverso de la retención; qué porcentaje de usuarios (o suscriptores) deja de usar el producto en un periodo dado.

## Ninguna métrica sola cuenta toda la historia

Un error habitual es optimizar una única métrica de forma aislada, ignorando el resto del sistema. Un rediseño puede subir la conversión a corto plazo (por ejemplo, ocultando información relevante para forzar una decisión rápida) y al mismo tiempo dañar la satisfacción y disparar el churn semanas después, porque el usuario se siente engañado. Por eso los equipos maduros combinan métricas de las tres familias —usabilidad, percepción y negocio— antes de declarar un cambio como un éxito: un diseño realmente bueno mejora el comportamiento, la percepción y el resultado de negocio a la vez, no solo uno de los tres a costa de los otros dos.

## De dónde salen estos números en la práctica

Las métricas de usabilidad y percepción se recogen en sesiones de investigación específicas (tests moderados o no moderados, cuestionarios post-tarea). Las métricas de negocio se recogen de herramientas de analítica de producto (event tracking: qué acciones realiza cada usuario, en qué orden y cuándo), configuradas para registrar eventos clave del producto (por ejemplo, "vio la pantalla de checkout", "pulsó comprar", "compra completada"). Definir bien qué eventos registrar —ni tan pocos que dejen puntos ciegos, ni tantos que generen ruido inmanejable— es en sí mismo un trabajo de diseño, normalmente compartido entre UX, producto y analítica.
