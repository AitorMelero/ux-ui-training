---
title: 'Diseñar un blog'
description: 'Las decisiones de UX/UI específicas de un blog: jerarquía de lectura, navegación entre artículos, y por qué la tipografía es el componente más importante del proyecto.'
category: projects
level: beginner
order: 3
subcategory: productos-de-contenido
exercises:
    - id: diseno-blog-mc-1
      type: multiple-choice
      prompt: 'En el diseño de un blog, ¿por qué se considera la tipografía y el espaciado del texto como el elemento de diseño más importante?'
      allowMultiple: false
      options:
          - text: 'Porque el contenido principal es texto largo, y una mala legibilidad (línea demasiado ancha, interlineado ajustado, contraste bajo) hace que la gente abandone la lectura sin importar lo bien diseñado que esté el resto de la página.'
            correct: true
            explanation: 'Correcto. En un blog el usuario pasa la mayor parte del tiempo leyendo bloques largos de texto, así que la legibilidad tipográfica afecta directamente a si termina o abandona el artículo.'
          - text: 'Porque los blogs no necesitan menú de navegación.'
            correct: false
            explanation: 'Los blogs sí necesitan navegación (categorías, buscador, artículos relacionados), aunque sea más discreta que en otro tipo de producto.'
          - text: 'Porque los buscadores solo indexan el contenido si la tipografía es grande.'
            correct: false
            explanation: 'El tamaño de la tipografía no es un factor de indexación en buscadores; la legibilidad importa por la experiencia de lectura humana, no por SEO técnico.'
    - id: diseno-blog-mc-2
      type: multiple-choice
      prompt: '¿Qué ancho de línea de texto (medida en caracteres aproximados por línea) se recomienda habitualmente para bloques largos de lectura en un blog?'
      allowMultiple: false
      options:
          - text: 'Entre 50 y 75 caracteres por línea.'
            correct: true
            explanation: 'Correcto. Líneas más cortas obligan a saltar de línea con demasiada frecuencia, y líneas más largas hacen que el ojo pierda el punto de retorno al principio de la siguiente línea; ese rango intermedio es el más cómodo para lectura prolongada.'
          - text: 'El ancho completo de la pantalla, sin límite, para aprovechar el espacio.'
            correct: false
            explanation: 'Un texto que ocupa todo el ancho de una pantalla grande resulta muy incómodo de leer: el ojo se pierde al buscar el inicio de la siguiente línea.'
          - text: 'Entre 15 y 20 caracteres por línea, como en un periódico impreso en varias columnas.'
            correct: false
            explanation: 'Ese ancho es demasiado estrecho para lectura continua en pantalla y obligaría a saltos de línea constantes, rompiendo el ritmo de lectura.'
    - id: diseno-blog-free-1
      type: free-text
      prompt: 'El listado de artículos relacionados o sugeridos que suele aparecer al final de un post de blog, pensado para mantener al lector navegando por el sitio, se conoce habitualmente como contenido...'
      acceptedAnswers:
          - 'relacionado'
          - 'sugerido'
          - 'recomendado'
      explanation: 'El contenido relacionado o sugerido reduce la tasa de salida tras terminar un artículo, ofreciendo al lector un siguiente paso natural en lugar de dejarlo sin más opción que cerrar la pestaña.'
---

## El objetivo principal: que se lea el artículo entero

A diferencia de un producto con muchas funciones, el objetivo central del diseño de un blog es simple: que quien llega a un artículo lo lea, y que después encuentre un motivo para quedarse o volver. Esto simplifica mucho las prioridades de diseño: la tipografía, el contraste y el espaciado del texto importan más que casi cualquier otra decisión visual.

## La tipografía como componente principal

En un blog, elegir bien el tamaño de fuente (habitualmente 18-20px o más para el cuerpo del artículo), el interlineado (1.5-1.7 veces el tamaño de fuente) y un ancho de línea de entre 50 y 75 caracteres marca la diferencia entre un artículo que se termina de leer y uno que se abandona a los pocos párrafos. Estas decisiones se toman antes de pensar en colores de marca o ilustraciones.

## Navegación: discreta pero presente

La navegación de un blog no debe competir con el contenido, pero debe existir: categorías o etiquetas para explorar por tema, un buscador si hay muchos artículos acumulados, y navegación entre publicaciones (artículo anterior/siguiente, artículos relacionados) para mantener al lector en el sitio una vez termina de leer.

## La página de listado de artículos

La portada o listado de artículos debe permitir escanear rápido: título claro, una imagen o extracto que dé contexto, fecha y tiempo de lectura estimado. El objetivo es que alguien pueda decidir en segundos si un artículo le interesa, sin tener que abrirlo.

## Detalles que afectan más de lo que parece

- **Contraste de color** entre el texto y el fondo: un gris demasiado claro sobre blanco es una causa habitual de fatiga visual en lecturas largas.
- **Tiempo de lectura estimado**: ayuda al lector a decidir si tiene tiempo de leer el artículo ahora.
- **Modo oscuro**: cada vez más esperado en blogs de contenido técnico, donde se lee en sesiones largas.

## Ejemplos de blogs con buen diseño de lectura

- [Medium](https://medium.com) — referencia habitual en tipografía y espaciado optimizados para lectura larga.
- [dev.to](https://dev.to) — blog técnico con navegación por etiquetas y comunidad integrada.
