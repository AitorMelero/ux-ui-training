---
title: 'Métricas de negocio vs. métricas de producto'
description: 'Aprende a distinguir entre lo que mide dirección (ingresos, coste de adquisición) y lo que mide un equipo de producto/diseño en el día a día, y cómo se conectan entre sí.'
category: business
level: beginner
order: 3
subcategory: fundamentos-negocio
exercises:
    - id: metricas-negocio-mc-1
      type: multiple-choice
      prompt: '¿Cuál de estas es una métrica de negocio de alto nivel, más que una métrica de producto del día a día?'
      allowMultiple: false
      options:
          - text: 'Ingresos recurrentes mensuales (MRR).'
            correct: true
            explanation: 'Correcto. El MRR (Monthly Recurring Revenue) es una métrica de negocio: la sigue dirección y finanzas para entender la salud económica global de la empresa, no un equipo de diseño evaluando una pantalla concreta.'
          - text: 'La tasa de error al rellenar un formulario de tres campos.'
            correct: false
            explanation: 'Esa es una métrica de producto muy específica, útil para el equipo que trabaja en ese formulario, pero demasiado granular para presentarse como métrica de negocio a dirección.'
          - text: 'El tiempo que tarda un botón en responder tras pulsarlo.'
            correct: false
            explanation: 'Es una métrica técnica/de producto (rendimiento), relevante para el equipo de ingeniería y diseño, pero no una métrica de negocio de alto nivel.'
    - id: metricas-negocio-mc-2
      type: multiple-choice
      prompt: 'Un equipo de diseño mejora la tasa de finalización de un flujo de onboarding del 40% al 60%. ¿Cómo se conecta ese resultado de producto con una métrica de negocio?'
      allowMultiple: false
      options:
          - text: 'Más usuarios completando el onboarding significa más usuarios activos que pueden convertirse en clientes de pago, lo que debería reflejarse en el número de nuevos usuarios activados y, más adelante, en ingresos.'
            correct: true
            explanation: 'Correcto. La cadena de causalidad va de una métrica de producto (finalización de un flujo) a una métrica de negocio (usuarios activados, y en última instancia ingresos), y saber trazar esa cadena es justo lo que hace persuasivo un informe de resultados de diseño.'
          - text: 'No hay ninguna relación: las métricas de producto y de negocio son independientes entre sí.'
            correct: false
            explanation: 'Al contrario, casi toda métrica de producto tiene un efecto (a veces indirecto) sobre alguna métrica de negocio; encontrar esa conexión es una habilidad clave para justificar el trabajo de diseño.'
          - text: 'Solo importa si el equipo de marketing decide comunicarlo externamente.'
            correct: false
            explanation: 'La relevancia de la mejora no depende de si se comunica externamente, sino del efecto real que tiene sobre el comportamiento de los usuarios y, en cadena, sobre los resultados del negocio.'
    - id: metricas-negocio-order-1
      type: ordering
      prompt: 'Ordena estos elementos de una cadena de causalidad típica, desde la métrica de producto más cercana al diseño hasta la métrica de negocio más alejada.'
      items:
          - 'Tasa de finalización del flujo de registro (métrica de producto)'
          - 'Número de nuevos usuarios activados por semana (métrica de crecimiento)'
          - 'Usuarios que se convierten en clientes de pago (métrica de conversión a ingreso)'
          - 'Ingresos recurrentes mensuales de la empresa (métrica de negocio)'
      explanation: 'Las métricas de producto (lo que un equipo de diseño puede mover directamente con una interfaz) están en el extremo más cercano al trabajo diario; a medida que se avanza en la cadena, cada paso depende de muchos más factores además del diseño, hasta llegar a la métrica de negocio final.'
---

## Dos escalas distintas de la misma historia

Es habitual que un diseñador mejore algo muy concreto —el tiempo que tarda un usuario en encontrar un botón, la claridad de un mensaje de error— y no sepa cómo explicar por qué eso importa a alguien que solo mira ingresos y coste de adquisición de clientes. La confusión suele venir de mezclar dos escalas distintas de métricas que, aunque están conectadas, no son lo mismo.

## Métricas de producto: lo que se mueve con una interfaz

Son las que un equipo de diseño o producto puede influir de forma bastante directa cambiando un flujo, una pantalla o un componente:

- Tasa de finalización de una tarea o flujo concreto (registro, checkout, creación de un elemento).
- Tasa de error en un formulario o interacción específica.
- Tiempo que tarda un usuario en completar una acción.
- Adopción de una funcionalidad nueva (qué porcentaje de usuarios la usa tras su lanzamiento).

## Métricas de negocio: lo que mira dirección

Son de más alto nivel, agregan el comportamiento de muchísimos usuarios a lo largo del tiempo, y rara vez las mueve un solo cambio de diseño de forma aislada:

- **Ingresos recurrentes mensuales (MRR)** o ingresos totales.
- **Coste de adquisición de cliente (CAC)**: cuánto cuesta conseguir un cliente nuevo (marketing, ventas).
- **Valor de vida del cliente (LTV, lifetime value)**: cuánto ingreso genera un cliente medio durante toda su relación con el producto.
- **Churn** (tasa de cancelación) a nivel de negocio, no solo de una funcionalidad.

## La cadena que las conecta

Ninguna métrica de negocio se mueve directamente por una decisión de diseño aislada; se mueve porque muchas mejoras de producto, sumadas, cambian el comportamiento agregado de la base de usuarios. Un diseñador eficaz aprende a **trazar la cadena**: "si mejoro la finalización del onboarding, entran más usuarios activados; si más usuarios se activan, más llegan a probar la funcionalidad de pago; si más prueban esa funcionalidad, sube la conversión a cliente de pago; y eso, agregado a lo largo del mes, mueve el MRR". No hace falta demostrar esa cadena con precisión matemática en cada propuesta, pero sí saber articularla, porque es el lenguaje en el que dirección evalúa qué merece inversión.

## El riesgo de optimizar la métrica equivocada

Un peligro real es optimizar agresivamente una métrica de producto sin comprobar que de verdad está conectada con el resultado de negocio que se busca. Por ejemplo, aumentar los clics en un botón no sirve de nada si esos clics no se traducen en usuarios que completan la acción que realmente genera valor. Antes de fijar una métrica de éxito para un cambio de diseño, conviene preguntarse explícitamente a qué métrica de negocio está conectada y por qué cadena de pasos.
