---
title: 'Tarjeta (Card)'
description: 'El contenedor modular más usado en interfaces modernas: sus partes, cuándo agrupar contenido en tarjetas y errores comunes.'
category: components
level: beginner
order: 6
subcategory: acciones-contenido
exercises:
    - id: tarjeta-mc-1
      type: multiple-choice
      prompt: '¿Qué problema resuelve principalmente una tarjeta (card) en una interfaz con muchos elementos independientes (por ejemplo, una lista de productos)?'
      allowMultiple: false
      options:
          - text: 'Agrupa visualmente toda la información relacionada con un mismo elemento (imagen, título, precio, acción) dentro de un límite claro, para que se perciba como una unidad independiente del resto.'
            correct: true
            explanation: 'Correcto. El borde o la sombra de una tarjeta actúa como límite de agrupación, aplicando el principio de proximidad y semejanza de la Gestalt a un conjunto de datos heterogéneo.'
          - text: 'Reduce el tiempo de carga de la página al mostrar menos información por elemento.'
            correct: false
            explanation: 'La tarjeta es una decisión de agrupación visual, no una técnica de rendimiento; puede contener tanta información como cualquier otro layout.'
          - text: 'Sustituye por completo a las tablas de datos en cualquier contexto.'
            correct: false
            explanation: 'Las tarjetas funcionan mejor con contenido heterogéneo y visual (imágenes, texto, acciones); para comparar muchos valores numéricos entre filas, una tabla suele seguir siendo más eficaz.'
    - id: tarjeta-mc-2
      type: multiple-choice
      prompt: '¿Cuál de estas es una mala práctica frecuente al diseñar una rejilla (grid) de tarjetas?'
      allowMultiple: false
      options:
          - text: 'Dejar que cada tarjeta tenga una altura distinta según la longitud de su contenido, sin alinear elementos clave (como el precio o el botón) entre tarjetas vecinas.'
            correct: true
            explanation: 'Correcto. Cuando el título ocupa una línea en una tarjeta y tres en la de al lado, el resto del contenido queda desalineado y la rejilla se percibe desordenada; conviene truncar texto o fijar alturas para los elementos clave.'
          - text: 'Usar el mismo espaciado entre todas las tarjetas de la rejilla.'
            correct: false
            explanation: 'Un espaciado consistente es justamente una buena práctica, no un error.'
          - text: 'Incluir una única acción principal clara por tarjeta.'
            correct: false
            explanation: 'Tener una acción principal clara por tarjeta es recomendable, no un error de diseño.'
    - id: tarjeta-order-1
      type: ordering
      prompt: 'Dentro de una tarjeta de producto típica, ordena estos elementos según la jerarquía visual habitual, de mayor a menor peso.'
      items:
          - 'Imagen del producto (ocupa la mayor parte del área visible)'
          - 'Título del producto'
          - 'Precio'
          - 'Texto secundario (por ejemplo, valoraciones o envío)'
      explanation: 'La imagen suele ser el elemento con más peso visual porque comunica de un vistazo de qué se trata; el resto de datos se jerarquiza según cuánto influyen en la decisión de la persona usuaria.'
---

## Por qué existe: agrupar sin usar líneas

Una tarjeta (card) es un contenedor que agrupa un conjunto de información relacionada —una imagen, un título, una descripción, una acción— dentro de un límite visual reconocible, normalmente marcado con un borde sutil, una sombra o un cambio de fondo. Es el componente que permite mostrar decenas de elementos independientes (productos, artículos, perfiles) en una rejilla, sin necesidad de tablas ni de separadores explícitos entre cada uno.

## Anatomía de una tarjeta

<div style="max-width:16rem;margin:1.25rem 0;border:1px solid #d8dbe3;border-radius:0.75rem;overflow:hidden;">
    <div style="height:7rem;background:#e7f5ff;display:flex;align-items:center;justify-content:center;color:#364fc7;font-size:0.8rem;">Imagen</div>
    <div style="padding:1rem;">
        <p style="margin:0 0 0.35rem;font-weight:700;">Silla de escritorio ergonómica</p>
        <p style="margin:0 0 0.75rem;font-size:0.85rem;color:#495057;">Ajustable en altura, con soporte lumbar.</p>
        <p style="margin:0 0 0.75rem;font-weight:700;color:#364fc7;">129 €</p>
        <button style="width:100%;padding:0.5rem;border:none;border-radius:0.4rem;background:#364fc7;color:#fff;font-weight:600;">Añadir al carrito</button>
    </div>
</div>

- **Contenedor**: el límite visual (borde, sombra o fondo) que define dónde empieza y termina la tarjeta.
- **Media (opcional)**: una imagen o ilustración representativa, normalmente en la parte superior.
- **Contenido**: título, descripción y datos clave, siempre con una jerarquía tipográfica clara entre ellos.
- **Acción (opcional)**: uno o varios botones o enlaces relacionados con el elemento de la tarjeta.
- **Estado interactivo (opcional)**: si la tarjeta entera es pulsable, necesita su propio estado de hover/foco.

## Buenas prácticas de diseño

- **Mantén una única acción principal por tarjeta.** Varias tarjetas con múltiples botones compitiendo entre sí (y entre tarjetas) generan una rejilla ruidosa y difícil de escanear.
- **Alinea los elementos clave entre tarjetas vecinas** (precio, botón) aunque el contenido varíe en longitud; trunca textos largos con puntos suspensivos en lugar de dejar que cada tarjeta tenga una altura distinta.
- **Si toda la tarjeta es pulsable, evita anidar otro elemento interactivo independiente dentro** (como un botón con su propia acción distinta); genera ambigüedad sobre qué ocurre al pulsar y complica la accesibilidad.
- **No sobrecargues la tarjeta de información.** Si necesitas mostrar muchos datos, deja los secundarios para la vista de detalle a la que lleva la tarjeta.
- **Usa un espaciado y unas proporciones de imagen consistentes** entre todas las tarjetas de una misma rejilla, para que se perciban como una colección coherente.
- **Cuida el contraste del borde o la sombra**: un límite demasiado sutil hace que las tarjetas se confundan con el fondo; demasiado marcado, compite con el contenido.
