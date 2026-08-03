---
title: 'Estados de los componentes'
description: 'Un botón no es un solo diseño: es normal, hover, focus, activo, deshabilitado, cargando y con error. Diseñar cada estado evita sorpresas en desarrollo.'
category: ui
level: intermediate
order: 6
exercises:
    - id: estados-mc-1
      type: multiple-choice
      prompt: '¿Por qué el estado "focus" (foco de teclado) de un componente es especialmente crítico para la accesibilidad?'
      allowMultiple: false
      options:
          - text: 'Porque es la única señal visual que tiene una persona que navega con teclado (sin ratón) para saber en qué elemento de la pantalla está situada en cada momento.'
            correct: true
            explanation: 'Correcto. Sin un indicador de foco visible y con suficiente contraste, una persona que navega con Tab no tiene forma de saber dónde está, lo que hace la interfaz prácticamente inutilizable con teclado.'
          - text: 'Porque solo afecta a la estética en dispositivos táctiles.'
            correct: false
            explanation: 'El foco de teclado no tiene ningún efecto en dispositivos puramente táctiles (que no usan teclado físico); su importancia es crítica precisamente para navegación por teclado y algunas tecnologías de asistencia.'
          - text: 'Porque determina el orden en que se cargan los componentes en la página.'
            correct: false
            explanation: 'El estado de foco no tiene relación con el orden de carga técnica de los componentes, sino con la navegación interactiva del usuario.'
    - id: estados-mc-2
      type: multiple-choice
      prompt: 'Un botón "Guardar cambios" queda deshabilitado (gris, sin poder pulsarse) mientras se procesa el guardado, pero no muestra ningún indicador de carga. ¿Qué problema tiene este diseño?'
      allowMultiple: false
      options:
          - text: 'El usuario no puede distinguir "deshabilitado porque está procesando" de "deshabilitado porque algo falló o no cumple una condición", lo que genera incertidumbre sobre si debe esperar o actuar.'
            correct: true
            explanation: 'Correcto. Un estado de "cargando" necesita una señal propia (un spinner, un cambio de texto a "Guardando...") distinta del estado "deshabilitado" genérico, para que el usuario entienda que debe esperar, no que algo está roto.'
          - text: 'Ningún problema: deshabilitar el botón durante el guardado siempre es suficiente por sí solo.'
            correct: false
            explanation: 'Deshabilitar el botón evita clics duplicados, pero por sí solo no comunica *por qué* está deshabilitado ni cuánto debe esperar el usuario.'
          - text: 'El botón debería permanecer habilitado durante todo el proceso de guardado.'
            correct: false
            explanation: 'Mantenerlo habilitado permitiría pulsarlo varias veces y disparar guardados duplicados; el problema no es deshabilitarlo, sino no comunicar el motivo.'
    - id: estados-order-1
      type: ordering
      prompt: 'Ordena estos estados de un campo de formulario según la secuencia habitual en la que los experimenta un usuario al rellenarlo correctamente.'
      items:
          - 'Vacío / placeholder (antes de interactuar)'
          - 'Focus (el usuario ha hecho clic o tabulado hasta el campo)'
          - 'Relleno / con valor (el usuario ha escrito algo válido)'
          - 'Éxito (el valor se ha validado correctamente, por ejemplo con un check verde)'
      explanation: 'No todos los campos llegan al estado de "éxito" explícito, pero cuando existe, suele aparecer solo después de que el usuario haya introducido y salido de un valor que pasa la validación.'
    - id: estados-free-1
      type: free-text
      prompt: '¿Cómo se llama el estado de un componente interactivo en el que el cursor del ratón está posicionado encima, pero sin haber hecho clic todavía?'
      acceptedAnswers:
          - 'hover'
          - 'estado hover'
      explanation: 'El estado hover solo existe en dispositivos con puntero (ratón, trackpad); en pantallas táctiles no hay equivalente real, así que un diseño que dependa únicamente del hover para comunicar algo importante fallará en móvil.'
---

## Un componente no es una sola imagen fija

Cuando alguien empieza a diseñar interfaces, es habitual pensar en un botón, un campo de texto o una tarjeta como una única imagen estática. En la práctica, cada componente interactivo existe en múltiples **estados** según cómo interactúa el usuario con él en cada momento, y diseñar solo el estado "normal" deja al equipo de desarrollo improvisando el resto, lo que casi siempre produce inconsistencias entre distintas partes del producto.

## Los estados básicos de cualquier componente interactivo

Un botón, por ejemplo, atraviesa (como mínimo) estos estados a lo largo de su ciclo de interacción:

<div style="display:flex;flex-wrap:wrap;gap:0.9rem;margin:1.25rem 0;">
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#364fc7;color:#fff;font-size:0.85rem;font-weight:600;">Guardar</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Normal</p>
    </div>
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#2f3ea3;color:#fff;font-size:0.85rem;font-weight:600;">Guardar</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Hover</p>
    </div>
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#364fc7;color:#fff;font-size:0.85rem;font-weight:600;outline:3px solid #a5b4fc;outline-offset:2px;">Guardar</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Focus</p>
    </div>
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#25317a;color:#fff;font-size:0.85rem;font-weight:600;">Guardar</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Activo (pulsando)</p>
    </div>
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#ced4da;color:#868e96;font-size:0.85rem;font-weight:600;">Guardar</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Deshabilitado</p>
    </div>
    <div style="text-align:center;">
        <div style="padding:0.55rem 1.1rem;border-radius:0.4rem;background:#364fc7;color:#fff;font-size:0.85rem;font-weight:600;">Guardando…</div>
        <p style="margin:0.4rem 0 0;font-size:0.72rem;color:#495057;">Cargando</p>
    </div>
</div>

- **Normal**: el estado por defecto, en reposo.
- **Hover**: el cursor está encima, sin haber hecho clic. Solo existe en dispositivos con puntero; no tiene equivalente directo en pantallas táctiles.
- **Focus**: el elemento tiene el foco de teclado (tras pulsar Tab, o al hacer clic en algunos navegadores). Es la señal principal para quien navega sin ratón.
- **Activo**: el instante en que se está pulsando o haciendo clic, antes de soltar.
- **Deshabilitado**: la acción no está disponible en ese momento (por ejemplo, un formulario incompleto), normalmente con menor contraste para comunicar que no es interactivo.
- **Cargando**: la acción se está procesando; necesita una señal propia (spinner, cambio de texto) distinta de "deshabilitado", porque comunican cosas distintas al usuario.

## Focus: el estado que más se olvida y más importa

De todos los estados, el **focus** es el que con más frecuencia se elimina "porque no queda bien estéticamente" (`outline: none` es una de las líneas de CSS más dañinas para la accesibilidad que existen) y, a la vez, el más crítico: es la única señal visual que tiene una persona que navega con teclado para saber en qué elemento de la pantalla está situada. Sin un indicador de foco claro y con contraste suficiente, esa persona pierde por completo la capacidad de orientarse. Si el estilo de foco por defecto del navegador no encaja con el diseño visual, la solución correcta es sustituirlo por un indicador propio igual de visible (por ejemplo, un contorno de color con suficiente contraste, como en la tarjeta de ejemplo anterior), nunca eliminarlo sin más.

## Más allá de los botones: campos, tarjetas, filas de tabla

El mismo principio se aplica a cualquier componente interactivo, no solo a botones. Un **campo de formulario** típicamente necesita estados de vacío, focus, relleno, error (con mensaje explicativo) y a veces éxito (una validación en verde tras un valor correcto). Una **fila de una tabla o lista** puede necesitar estados de normal, hover, seleccionada y deshabilitada. Una **tarjeta arrastrable** en un tablero tipo kanban necesita, además, un estado de "siendo arrastrada" y otro de "zona de destino válida" mientras se suelta. Cuantos más estados tenga un componente sin documentar, más varía su implementación real de una parte a otra del producto, y más trabajo de control de calidad genera detectar esas inconsistencias después de programadas.

## Documentar estados es tan importante como diseñarlos

Un sistema de diseño maduro no solo dibuja cada estado: documenta explícitamente qué lo dispara (¿qué evento activa "cargando"? ¿cuánto dura como máximo antes de mostrar un error de timeout?) y qué reglas de transición existen entre ellos (¿puede pasar directamente de "error" a "cargando" si el usuario reintenta, o primero vuelve a "normal"?). Sin esa documentación, cada desarrollador termina decidiendo por su cuenta cómo se comporta cada transición, lo que produce el mismo tipo de inconsistencia sutil que un sistema de diseño debería evitar.
