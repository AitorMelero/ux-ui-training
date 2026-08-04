---
title: 'Introducción a los componentes de interfaz'
description: 'Qué es un componente, por qué se diseña en piezas reutilizables y cómo se organiza esta categoría del curso.'
category: components
level: beginner
order: 1
exercises:
    - id: intro-componentes-mc-1
      type: multiple-choice
      prompt: '¿Qué es un "componente" de interfaz?'
      allowMultiple: false
      options:
          - text: 'Una pieza de interfaz autocontenida (botón, campo, tarjeta...) que se reutiliza en distintas pantallas con el mismo comportamiento y apariencia.'
            correct: true
            explanation: 'Correcto. Un componente encapsula su propia estructura, estilo y comportamiento para poder repetirse sin volver a diseñarlo cada vez.'
          - text: 'Cualquier archivo del proyecto de diseño, tenga o no relación con la interfaz visible.'
            correct: false
            explanation: 'Un componente es siempre una pieza de interfaz visible o interactiva, no un archivo cualquiera.'
          - text: 'Una pantalla completa de la aplicación, como la de login o la de ajustes.'
            correct: false
            explanation: 'Una pantalla completa se construye combinando varios componentes; no es un componente en sí misma.'
    - id: intro-componentes-order-1
      type: ordering
      prompt: 'Ordena estos niveles del atomic design de menor a mayor tamaño/complejidad.'
      items:
          - 'Átomo (un icono, una etiqueta de texto)'
          - 'Molécula (un campo de texto con su etiqueta y su icono)'
          - 'Organismo (un formulario completo de registro)'
          - 'Página (la pantalla completa de registro con cabecera y pie)'
      explanation: 'El atomic design describe cómo las piezas más pequeñas e indivisibles (átomos) se combinan en piezas con sentido propio (moléculas), estas en secciones completas (organismos), hasta formar una página entera.'
    - id: intro-componentes-free-1
      type: free-text
      prompt: 'Cuando una empresa documenta todos sus componentes reutilizables (botones, campos, colores, tipografías...) en un único lugar para que todo el equipo los use de forma consistente, ¿cómo se llama a ese conjunto documentado?'
      acceptedAnswers:
          - 'sistema de diseño'
          - 'design system'
      explanation: 'Un sistema de diseño (design system) es la biblioteca de componentes, reglas y principios que garantiza que un producto se vea y se comporte de forma coherente, lo cubrimos en detalle en la lección de sistemas de diseño de la categoría UI.'
---

## De pantallas únicas a piezas reutilizables

Cuando se diseña una interfaz por primera vez, es tentador pensar en cada pantalla como un dibujo único: el login es un diseño, la lista de productos es otro, los ajustes son un tercero. Pero en cuanto el producto crece a decenas de pantallas, diseñar (y programar) cada una desde cero se vuelve insostenible y, peor aún, inconsistente: el mismo botón "Guardar" puede acabar con tres colores distintos en tres pantallas distintas, confundiendo a quien usa la aplicación.

Un **componente de interfaz** resuelve esto: es una pieza autocontenida —un botón, un campo de texto, una tarjeta, un menú— que define su propia estructura, estilo y comportamiento una sola vez, para reutilizarse en cualquier pantalla que la necesite. Diseñar (y pensar) en componentes, en lugar de en pantallas sueltas, es lo que permite que un producto con cientos de pantallas se sienta como un todo coherente.

## De átomos a pantallas: el atomic design

Una forma muy extendida de organizar los componentes es el **atomic design**, que los agrupa por nivel de complejidad:

<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1.25rem 0;align-items:stretch;">
    <div style="flex:1;min-width:150px;padding:1rem;border-radius:0.5rem;background:#ebfbee;">
        <p style="margin:0 0 0.35rem;font-weight:700;color:#2f9e44;">Átomo</p>
        <p style="margin:0;font-size:0.85rem;color:#495057;">Un icono, una etiqueta, un botón. No se puede dividir más sin perder su función.</p>
    </div>
    <div style="flex:1;min-width:150px;padding:1rem;border-radius:0.5rem;background:#fff4e6;">
        <p style="margin:0 0 0.35rem;font-weight:700;color:#e8590c;">Molécula</p>
        <p style="margin:0;font-size:0.85rem;color:#495057;">Un campo de texto con su etiqueta y su icono: varios átomos con un propósito común.</p>
    </div>
    <div style="flex:1;min-width:150px;padding:1rem;border-radius:0.5rem;background:#f8f0fc;">
        <p style="margin:0 0 0.35rem;font-weight:700;color:#9c36b5;">Organismo</p>
        <p style="margin:0;font-size:0.85rem;color:#495057;">Un formulario de registro completo, con varias moléculas combinadas.</p>
    </div>
    <div style="flex:1;min-width:150px;padding:1rem;border-radius:0.5rem;background:#e7f5ff;">
        <p style="margin:0 0 0.35rem;font-weight:700;color:#364fc7;">Página</p>
        <p style="margin:0;font-size:0.85rem;color:#495057;">La pantalla completa, con organismos como la cabecera, el formulario y el pie de página.</p>
    </div>
</div>

No hace falta seguir esta nomenclatura al pie de la letra en el día a día, pero conocerla ayuda a pensar de forma escalable: cuando diseñas un componente, pregúntate de qué piezas más pequeñas se compone y en qué piezas más grandes va a encajar.

## Qué vas a encontrar en esta categoría

Cada lección de esta categoría cubre un elemento de interfaz concreto (un botón, un campo, un modal...) siempre con la misma estructura: por qué existe y cuándo usarlo, de qué partes se compone, qué buenas prácticas de diseño evitan los errores más comunes, y ejercicios para comprobar que lo has entendido. Los elementos están agrupados en cuatro tipos que puedes filtrar en esta misma pantalla:

- **Acciones y contenido**: botón, etiqueta, enlace, icono, tarjeta — las piezas más básicas con las que se construye casi cualquier pantalla.
- **Navegación**: cabecera y pie de página, migas de pan, pestañas, barra lateral, menú — cómo se mueve la persona usuaria por la aplicación.
- **Formularios**: campo de texto, selector — cómo se introduce y elige información.
- **Overlays y feedback**: tooltip, modal, popover — contenido que aparece por encima del resto de la pantalla, cada uno con un nivel distinto de interrupción.

Esta categoría se apoya en conceptos ya vistos en UX y UI: los **estados de un componente** (reposo, hover, foco, error, deshabilitado) y los **tokens de diseño** (color, espaciado, tipografía) son la base sobre la que se construye cada elemento que vas a ver aquí.
