---
title: 'Construir un business case para una propuesta de diseño'
description: 'Cómo estructurar el argumento de coste-beneficio de una iniciativa de diseño para que compita en igualdad de condiciones con cualquier otra propuesta que pida presupuesto o tiempo de equipo.'
category: business
level: advanced
order: 13
subcategory: comunicacion-stakeholders
exercises:
    - id: business-case-mc-1
      type: multiple-choice
      prompt: '¿Cuál es el propósito principal de un business case para una propuesta de diseño?'
      allowMultiple: false
      options:
          - text: 'Argumentar de forma estructurada por qué el beneficio esperado de invertir tiempo y recursos en esa propuesta compensa su coste, comparado con otras alternativas posibles.'
            correct: true
            explanation: 'Correcto. Un business case no es solo "explicar el problema": es comparar explícitamente coste frente a beneficio esperado, de forma que quien decide pueda evaluarlo con los mismos criterios que cualquier otra inversión que compite por el mismo presupuesto o tiempo de equipo.'
          - text: 'Documentar exhaustivamente cada pantalla del diseño propuesto, pixel a pixel.'
            correct: false
            explanation: 'Ese nivel de detalle visual pertenece a la documentación de diseño (specs, sistema de diseño), no al business case, que se centra en el argumento de coste-beneficio, no en el detalle de implementación.'
          - text: 'Convencer al equipo de desarrollo de que la propuesta es técnicamente viable.'
            correct: false
            explanation: 'La viabilidad técnica es una entrada importante para el business case (afecta al coste estimado), pero no es su propósito principal, que es justificar la inversión frente a quien decide con criterios de negocio.'
    - id: business-case-mc-2
      type: multiple-choice
      prompt: 'Al estimar el "coste" de una propuesta de diseño dentro de un business case, ¿qué se debería incluir además del tiempo de diseño?'
      allowMultiple: true
      options:
          - text: 'El tiempo de desarrollo necesario para construirlo.'
            correct: true
            explanation: 'Correcto. El coste real de una propuesta rara vez es solo el tiempo de diseño; incluye también el desarrollo, y a veces QA, contenido, legal u otras disciplinas implicadas.'
          - text: 'El coste de oportunidad de no dedicar ese mismo tiempo de equipo a otra iniciativa.'
            correct: true
            explanation: 'Correcto. Como se vio en la lección sobre el coste de una mala decisión de diseño, el coste de oportunidad es una parte real del coste total, aunque no aparezca en ninguna factura.'
          - text: 'El coste no debe estimarse nunca en un business case, solo el beneficio esperado.'
            correct: false
            explanation: 'Un business case sin estimación de coste no permite comparar con el beneficio esperado, que es precisamente el objetivo del documento; ambos lados son necesarios.'
    - id: business-case-free-1
      type: free-text
      prompt: 'La métrica que resume la relación entre el beneficio obtenido y el coste invertido en una iniciativa, y que suele citarse al defender un business case, se conoce por sus siglas en inglés como...'
      acceptedAnswers:
          - 'roi'
          - 'retorno de la inversion'
          - 'retorno de la inversión'
      explanation: 'ROI (Return on Investment, retorno de la inversión) resume en un solo concepto la comparación entre lo que se espera ganar y lo que cuesta conseguirlo, y es el lenguaje habitual en el que se evalúan business cases junto a otras propuestas que compiten por el mismo presupuesto.'
---

## Por qué el diseño necesita competir con las mismas reglas

En cualquier organización, distintas iniciativas compiten por el mismo tiempo de equipo y el mismo presupuesto: una mejora de diseño, una nueva integración técnica, una campaña de marketing. Si el diseño se presenta solo con argumentos de "esto mejora la experiencia" mientras otras iniciativas se presentan con cifras de coste y retorno esperado, el diseño parte con desventaja en la conversación, no porque valga menos, sino porque se argumenta con un lenguaje distinto al que se usa para decidir.

## Las partes de un business case de diseño

- **El problema y su coste actual**: qué está costando no resolver esto (en usuarios perdidos, tickets, tiempo, oportunidades), idealmente con una cifra o rango estimado.
- **La propuesta**: qué se propone construir, de forma concreta.
- **El coste estimado**: tiempo de diseño, desarrollo y otras disciplinas implicadas, más el coste de oportunidad de no dedicar ese tiempo a otra cosa.
- **El beneficio esperado**: qué métrica se espera mejorar, con una estimación razonada (aunque sea aproximada) de cuánto y en qué plazo.
- **Los riesgos y cómo mitigarlos**: qué podría no funcionar como se espera, y qué se hará para reducir ese riesgo (por ejemplo, lanzar primero a un porcentaje pequeño de usuarios).

## Estimaciones aproximadas son mejor que ninguna estimación

Un error habitual es no incluir ninguna estimación de beneficio por miedo a equivocarse, dejando el business case sin la mitad de la ecuación coste-beneficio. Es preferible dar un rango razonado y explícito ("esperamos reducir el abandono en este paso entre un 5% y un 15%, basándonos en mejoras similares en flujos comparables") que omitir el número por completo: incluso una estimación imperfecta permite comparar la propuesta con otras alternativas, mientras que la ausencia de estimación no permite comparar nada.

## De la propuesta puntual al portafolio de iniciativas

Cuando varias propuestas de diseño compiten por el mismo tiempo de equipo, presentar cada una con su business case permite a quien decide compararlas dentro de un mismo criterio (por ejemplo, usando RICE o una comparación simple de coste frente a beneficio esperado), en lugar de decidir por intuición o por quién insistió más. Presentar el propio trabajo de esta forma, de forma sistemática, es lo que a medio plazo genera más confianza en el criterio del equipo de diseño dentro de la organización.

## Reconocer los límites de un business case

No todo en diseño se puede ni se debe justificar solo con un business case cuantitativo: la accesibilidad, la ética del producto o la consistencia del sistema de diseño a largo plazo tienen un valor que a veces no se traduce fácilmente en una cifra a corto plazo. Un business case es una herramienta útil para competir por recursos con otras iniciativas, no el único criterio legítimo para decidir qué merece la pena construir.
