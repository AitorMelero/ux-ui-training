---
title: 'Memoria a corto y largo plazo aplicada al diseño de producto'
description: 'Entiende cómo funcionan la memoria a corto y largo plazo para diseñar flujos que no exijan a la persona usuaria recordar más de lo necesario.'
category: psychology
level: beginner
subcategory: memoria-carga-cognitiva
order: 1
exercises:
    - id: memoria-mc-1
      type: multiple-choice
      prompt: 'Según el modelo multialmacén de Atkinson y Shiffrin, ¿qué caracteriza a la memoria a corto plazo frente a la memoria a largo plazo?'
      allowMultiple: false
      options:
          - text: 'Tiene una capacidad y una duración muy limitadas (segundos, unos pocos elementos), mientras que la memoria a largo plazo puede almacenar información durante años con una capacidad prácticamente ilimitada.'
            correct: true
            explanation: 'Correcto. La memoria a corto plazo retiene información durante segundos y con capacidad reducida (en torno a 7±2 elementos según Miller); solo una parte de esa información pasa, mediante repaso o codificación elaborada, a la memoria a largo plazo.'
          - text: 'Ambas tienen la misma capacidad, pero la memoria a largo plazo solo almacena imágenes y la memoria a corto plazo solo texto.'
            correct: false
            explanation: 'La diferencia entre ambas no es el tipo de contenido que almacenan, sino su capacidad y duración.'
          - text: 'La memoria a corto plazo es la que usamos para recordar contraseñas para siempre.'
            correct: false
            explanation: 'Recordar algo "para siempre" es precisamente lo que caracteriza a la memoria a largo plazo, no a la memoria a corto plazo.'
    - id: memoria-mc-2
      type: multiple-choice
      prompt: 'Un flujo de checkout pide el número de tarjeta en la pantalla 1 y, tres pantallas después, le pide a la persona usuaria que repita ese mismo número de memoria para "confirmarlo". ¿Qué problema de diseño ilustra mejor este caso?'
      allowMultiple: false
      options:
          - text: 'Exige mantener información en la memoria a corto plazo durante más tiempo del que esta puede retenerla de forma fiable, en vez de dejar que el sistema recuerde el dato por la persona.'
            correct: true
            explanation: 'Correcto. La memoria a corto plazo se degrada en cuestión de segundos sin repaso activo; pedir que se recuerde un dato varias pantallas después fuerza un esfuerzo de memoria innecesario que un buen diseño evita.'
          - text: 'Es un problema de contraste de color entre el texto y el fondo.'
            correct: false
            explanation: 'El problema descrito es de carga de memoria a través del tiempo, no de contraste visual.'
          - text: 'Es un problema exclusivamente de velocidad de carga de la página.'
            correct: false
            explanation: 'El enunciado no menciona tiempos de carga, sino la necesidad de recordar un dato varias pantallas después.'
    - id: memoria-order-1
      type: ordering
      prompt: 'Ordena estas fases del modelo multialmacén de memoria, desde que llega un estímulo hasta que queda fijado de forma duradera.'
      items:
          - 'Memoria sensorial: el estímulo entra por los sentidos y persiste una fracción de segundo'
          - 'Memoria a corto plazo: la información atendida se retiene unos segundos con capacidad limitada'
          - 'Codificación / repaso: la información se elabora o se repite activamente'
          - 'Memoria a largo plazo: la información queda almacenada de forma duradera y recuperable'
      explanation: 'El modelo de Atkinson y Shiffrin (1968) describe un flujo en cascada: sin atención, la información sensorial se pierde; sin codificación o repaso, la información de corto plazo también se pierde antes de consolidarse en la memoria a largo plazo.'
    - id: memoria-free-1
      type: free-text
      prompt: 'Según el trabajo clásico de George A. Miller, ¿cuántos elementos (aproximadamente) puede retener la memoria a corto plazo de una persona adulta sin ayuda de agrupación?'
      acceptedAnswers:
          - '7'
          - 'siete'
          - '7±2'
          - '7 mas menos 2'
          - '7 más menos 2'
          - 'entre 5 y 9'
      explanation: 'Miller (1956) propuso el "número mágico" 7±2 como la capacidad aproximada de la memoria a corto plazo cuando la información no está agrupada en unidades más grandes (chunks).'
---

## Dos sistemas de memoria muy distintos

El modelo multialmacén de **Atkinson y Shiffrin (1968)** distingue tres etapas: la memoria sensorial (persiste una fracción de segundo), la **memoria a corto plazo** (retiene unos pocos elementos durante segundos, salvo que se repasen activamente) y la **memoria a largo plazo** (almacenamiento duradero, potencialmente de por vida, con capacidad prácticamente ilimitada). Para el diseño de producto, la distinción relevante es simple pero se olvida constantemente: **lo que la persona usuaria tiene "en mente" en un momento dado es frágil y limitado**, mientras que lo que ya forma parte de su conocimiento previo (cómo funciona un carrito de compra, qué significa un icono de papelera) es estable y no requiere esfuerzo.

## La capacidad limitada de la memoria a corto plazo

El trabajo clásico de **George A. Miller (1956)**, "The Magical Number Seven, Plus or Minus Two", estableció que la memoria a corto plazo retiene de forma fiable entre 5 y 9 unidades de información a la vez. Esa cifra es la razón por la que buenos diseños de interfaz:

- Trocean los números largos en grupos (un número de tarjeta se muestra en bloques de 4 dígitos, no como 16 dígitos seguidos).
- Limitan el número de opciones visibles simultáneamente en un menú de navegación principal.
- Evitan formularios de una sola pantalla con veinte campos sin agrupar, sustituyéndolos por secciones o pasos con menos elementos cada uno.

Esta técnica de agrupar información en unidades mayores para reducir la carga se llama **chunking**, y es una de las estrategias de diseño más directamente derivadas de la psicología de la memoria.

## Por qué no se debe exigir memoria a corto plazo entre pantallas

Cada vez que un flujo obliga a la persona usuaria a recordar un dato mostrado en una pantalla para usarlo varias pantallas después —un código, un resumen de lo que eligió, una condición que aceptó— se está apostando por una memoria que se degrada en segundos si no hay repaso activo. Los experimentos de **Peterson y Peterson (1959)** mostraron que, sin repetición, el recuerdo de información en memoria a corto plazo cae drásticamente en apenas 18-30 segundos. La implicación de diseño es directa: **el sistema debe recordar por la persona, no al revés**. De ahí prácticas como mantener visible el resumen del pedido durante todo el checkout, o repetir el precio final en cada paso en lugar de exigir que se recuerde de un paso anterior — la misma idea que subyace a la heurística "reconocer antes que recordar" de Nielsen, pero explicada desde su base psicológica.

## Diseñar para pasar información a la memoria a largo plazo

No toda la información debe tratarse como desechable. Cuando el objetivo es que la persona usuaria **aprenda** algo de forma duradera (los atajos de una herramienta, la estructura de un menú), el diseño puede apoyarse en mecanismos que favorecen el paso de la memoria a corto a la memoria a largo plazo:

- **Repetición espaciada**: mostrar un mismo mensaje o funcionalidad en varios momentos separados en el tiempo consolida mejor el aprendizaje que mostrarlo una sola vez de forma intensiva.
- **Codificación elaborada**: asociar la información nueva con algo que la persona ya conoce (metáforas visuales, iconos familiares) facilita su almacenamiento a largo plazo frente a la simple repetición mecánica.
- **Práctica activa**: pedir que la persona use una función guiada (en vez de solo leer sobre ella) refuerza su fijación en la memoria a largo plazo, algo especialmente relevante en onboarding de producto.

## Aplicación práctica: auditar la carga de memoria de un flujo

Al revisar un flujo, es útil preguntarse en cada pantalla: _¿estoy pidiendo a la persona usuaria que recuerde algo de una pantalla anterior que no está visible ahora?_ Si la respuesta es sí, casi siempre hay una alternativa mejor: mantener el dato visible, resumirlo de forma persistente, o rediseñar el flujo para que la decisión se tome completa en un único contexto visual.
