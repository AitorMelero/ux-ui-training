---
title: 'Experimentación y tests A/B'
description: 'Diseña experimentos rigurosos para validar decisiones de diseño con datos: hipótesis, significancia estadística y los errores más comunes al interpretarlos.'
category: ux
level: advanced
order: 13
exercises:
    - id: ab-mc-1
      type: multiple-choice
      prompt: 'En un test A/B clásico, ¿qué hace exactamente el experimento?'
      allowMultiple: false
      options:
          - text: 'Divide aleatoriamente a los usuarios en dos (o más) grupos, muestra una variante distinta a cada grupo, y compara una métrica objetivo entre ellos.'
            correct: true
            explanation: 'Correcto. La aleatoriedad en la asignación es la clave: garantiza que, salvo la variante mostrada, los grupos sean estadísticamente equivalentes, de modo que cualquier diferencia observada en la métrica se pueda atribuir al cambio de diseño.'
          - text: 'Muestra la misma variante a todos los usuarios, pero en momentos distintos del día.'
            correct: false
            explanation: 'Eso no es un test A/B; sin grupos paralelos y aleatorizados no se puede aislar el efecto del cambio de diseño de otros factores que varían con el tiempo (estacionalidad, campañas de marketing, etc.).'
          - text: 'Pregunta a un grupo de usuarios cuál de las dos versiones prefieren visualmente.'
            correct: false
            explanation: 'Eso sería una prueba de preferencia declarada, útil pero distinta: el test A/B mide comportamiento real de cada grupo, no una opinión sobre cuál "parece mejor".'
    - id: ab-mc-2
      type: multiple-choice
      prompt: 'Un test A/B lleva solo 6 horas activo y ya muestra que la variante B convierte un 15% mejor que la A, con pocos usuarios en cada grupo. El equipo quiere declarar ganadora a B de inmediato. ¿Cuál es el riesgo principal?'
      allowMultiple: false
      options:
          - text: 'Que la diferencia observada se deba al azar (una muestra pequeña y un periodo corto no alcanzan significancia estadística ni cubren variaciones normales, como diferencias entre días laborables y fin de semana).'
            correct: true
            explanation: 'Correcto. Parar un experimento en cuanto la métrica "se ve bien" (peeking) es uno de los errores más comunes en experimentación: incrementa mucho la probabilidad de declarar ganador un resultado que en realidad es ruido estadístico.'
          - text: 'Ninguno: si hay una diferencia numérica, ya es válida, sin importar el tamaño de muestra ni el tiempo transcurrido.'
            correct: false
            explanation: 'El tamaño de muestra y la duración del experimento son condiciones necesarias para que una diferencia observada sea estadísticamente fiable, no solo ruido.'
          - text: 'Que la variante B sea ilegal.'
            correct: false
            explanation: 'No hay ninguna cuestión legal implicada en este escenario; el riesgo es puramente estadístico.'
    - id: ab-order-1
      type: ordering
      prompt: 'Ordena estos pasos para diseñar un experimento A/B riguroso, del primero al último.'
      items:
          - 'Formular una hipótesis clara ("si cambiamos X, la métrica Y mejorará porque...")'
          - 'Definir la métrica principal de éxito y el tamaño de muestra necesario antes de lanzar'
          - 'Asignar usuarios aleatoriamente a cada variante y ejecutar el experimento el tiempo planificado'
          - 'Analizar los resultados una sola vez, al alcanzar el tamaño de muestra y el tiempo definidos'
      explanation: 'Decidir de antemano la métrica, el tamaño de muestra y la duración —y no analizar antes de tiempo— es lo que separa un experimento riguroso de una simple observación de un panel de datos en tiempo real.'
    - id: ab-free-1
      type: free-text
      prompt: '¿Cómo se llama el error metodológico de revisar los resultados de un experimento repetidamente mientras está en curso y detenerlo en cuanto una variante parece ganar, en lugar de esperar al tamaño de muestra planificado?'
      acceptedAnswers:
          - 'peeking'
          - 'espiar el experimento'
          - 'parada anticipada'
      explanation: 'El "peeking" infla artificialmente la probabilidad de encontrar una diferencia "significativa" que en realidad es fluctuación aleatoria, porque cuantas más veces se mira, más oportunidades hay de que el azar produzca, en algún momento, un resultado que parezca concluyente.'
---

## De la opinión a la evidencia controlada

Un test A/B (también llamado experimento controlado aleatorizado) es el método más riguroso de los disponibles para responder a una pregunta muy concreta: "¿esta variante de diseño produce mejor resultado que la actual, y esa diferencia no se debe simplemente al azar?". A diferencia de un test de usabilidad, que explora el "por qué" con pocos usuarios, un test A/B mide el "cuánto" con volúmenes de usuarios mucho mayores, y su fortaleza principal es aislar el efecto causal de un cambio concreto de todos los demás factores que también podrían influir en la métrica.

## Cómo funciona

El mecanismo central es la **asignación aleatoria**: los usuarios que entran al experimento se reparten al azar entre dos o más variantes (A, la versión actual o "control"; B, la versión nueva o "variante"). Gracias a esa aleatoriedad, en igualdad de condiciones ambos grupos deberían comportarse igual salvo por el propio cambio de diseño, así que cualquier diferencia observada en la métrica objetivo se puede atribuir, con cierta confianza estadística, al cambio introducido, y no a que un grupo tuviera usuarios distintos por casualidad.

## Antes de lanzar: la hipótesis

Un experimento no debería empezar con "vamos a probar un botón verde a ver qué pasa", sino con una **hipótesis** explícita y falsable: _"Si cambiamos el color del botón principal de gris a verde, la tasa de clics aumentará, porque el botón actual no contrasta lo suficiente con el fondo para destacar como acción principal."_ Una hipótesis bien formulada obliga a explicitar el mecanismo esperado (no solo el resultado), lo cual ayuda a interpretar el resultado —tanto si confirma la hipótesis como si no— y a diseñar el siguiente experimento con ese aprendizaje.

## Significancia estadística, sin fórmulas pero con criterio

No hace falta ser estadístico para operar con criterio en experimentación, pero sí entender dos ideas clave. Primero, un experimento necesita un **tamaño de muestra mínimo**, calculado de antemano en función de cuánta diferencia se quiere poder detectar: con muy pocos usuarios, hasta un cambio irrelevante puede parecer una diferencia enorme, o un cambio real puede quedar enmascarado por el ruido. Segundo, la **significancia estadística** (habitualmente un umbral del 95% de confianza) indica qué tan improbable es que la diferencia observada se deba solo al azar, no que el resultado sea "verdadero" con certeza absoluta. Un resultado "significativo" con un efecto minúsculo puede no ser relevante para el negocio, y un resultado grande pero no significativo (por poca muestra) no debería tratarse como una victoria confirmada.

## El error más común: mirar antes de tiempo

El fallo metodológico más frecuente en experimentación de producto es el **peeking**: revisar el resultado del experimento repetidamente mientras está en curso, y detenerlo en cuanto una variante "parece ir ganando". Esta práctica es estadísticamente traicionera porque, cuantas más veces se mira un resultado en curso, mayor es la probabilidad de toparse, en algún momento, con una fluctuación aleatoria que parezca una diferencia real. La forma correcta de proceder es fijar de antemano el tamaño de muestra y la duración necesarios (incluyendo, cuando sea relevante, ciclos completos de días laborables y fines de semana, para no confundir un patrón estacional con un efecto del diseño), y analizar los resultados una sola vez, al llegar a ese punto planificado.

## No todo se puede (ni se debe) testear con A/B

El test A/B es potente pero no universal. Funciona bien con decisiones tácticas y de alto volumen de tráfico (textos de un botón, orden de un formulario, precio mostrado). Funciona mal con cambios estructurales grandes (un rediseño completo de navegación, donde la variante "perdedora" puede ser simplemente la que resulta más rara por ser nueva, no la que es objetivamente peor) o con productos de bajo volumen de usuarios, donde nunca se alcanza el tamaño de muestra necesario en un tiempo razonable. En esos casos, métodos cualitativos (tests de usabilidad, evaluación heurística) siguen siendo la herramienta más adecuada.
