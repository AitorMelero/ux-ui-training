---
title: 'Popover'
description: 'El punto intermedio entre tooltip y modal: contenido rico anclado a un disparador, sin bloquear el resto de la pantalla.'
category: components
level: advanced
order: 16
subcategory: overlays-feedback
exercises:
    - id: popover-mc-1
      type: multiple-choice
      prompt: 'De los tres overlays vistos (tooltip, modal, popover), ¿cómo se distingue el popover de los otros dos?'
      allowMultiple: false
      options:
          - text: 'Puede contener contenido más rico e interactivo que un tooltip (enlaces, controles), pero sin bloquear el resto de la pantalla como hace un modal.'
            correct: true
            explanation: 'Correcto. El popover ocupa el punto intermedio: más contenido y permanencia que un tooltip, pero sin la interrupción total de un modal.'
          - text: 'Es el único de los tres que puede activarse con un clic.'
            correct: false
            explanation: 'Tanto el modal como el popover pueden activarse con un clic; lo que distingue al popover es su nivel de interrupción intermedio, no el gesto que lo abre.'
          - text: 'Es el único de los tres que se ancla visualmente a un elemento disparador.'
            correct: false
            explanation: 'El tooltip también se ancla a su disparador; el rasgo distintivo del popover es que combina esa posición anclada con contenido más rico y persistente.'
    - id: popover-mc-2
      type: multiple-choice
      prompt: '¿Cómo se debe cerrar un popover?'
      allowMultiple: true
      options:
          - text: 'Al pulsar fuera de él (en cualquier otra parte de la pantalla).'
            correct: true
            explanation: 'Correcto. A diferencia del modal, el popover no bloquea el resto de la pantalla, así que pulsar fuera de él es la forma natural de descartarlo.'
          - text: 'Al pulsar la tecla Escape, igual que un modal.'
            correct: true
            explanation: 'Correcto. Escape debe funcionar de forma consistente en todos los overlays que se pueden cerrar sin completar una acción.'
          - text: 'Únicamente recargando la página completa.'
            correct: false
            explanation: 'Exigir recargar la página para cerrar un elemento de interfaz sería una experiencia rota; un popover debe poder cerrarse con interacciones normales.'
    - id: popover-free-1
      type: free-text
      prompt: 'Un ejemplo muy habitual de popover es el panel que muestra el detalle de una notificación al pulsar la campanita en la cabecera de una aplicación. ¿Qué elemento de la anatomía de un popover apunta visualmente hacia esa campanita?'
      acceptedAnswers:
          - 'flecha'
          - 'pico'
          - 'puntero'
      explanation: 'Igual que en el tooltip, una flecha o pico visual conecta el panel del popover con el elemento exacto que lo activó, especialmente importante cuando hay varios disparadores similares en la misma pantalla.'
---

## Por qué existe: contenido rico sin interrumpir del todo

Un popover es un panel flotante, anclado visualmente a un elemento disparador, que muestra contenido más rico que un tooltip —puede incluir varios párrafos, enlaces, incluso pequeños formularios— sin llegar a bloquear el resto de la pantalla como hace un modal. Es la opción adecuada cuando hace falta mostrar más información o algo de interacción puntual (el detalle de una notificación, una vista previa de un perfil), pero la tarea no merece la interrupción total de un modal.

## Anatomía de un popover

<div style="margin:1.25rem 0;position:relative;display:inline-block;">
    <button style="padding:0.5rem 0.75rem;border:1px solid #d8dbe3;border-radius:0.4rem;background:#fff;">🔔 Notificaciones</button>
    <div style="position:absolute;top:2.75rem;left:0;width:16rem;background:#fff;border:1px solid #d8dbe3;border-radius:0.5rem;box-shadow:0 8px 20px rgba(0,0,0,0.1);padding:1rem;">
        <p style="margin:0 0 0.5rem;font-weight:700;font-size:0.9rem;">Nueva solicitud de acceso</p>
        <p style="margin:0 0 0.75rem;font-size:0.8rem;color:#495057;">Marta García ha solicitado unirse al proyecto "Rediseño Web".</p>
        <a href="#" style="font-size:0.8rem;color:#364fc7;">Revisar solicitud →</a>
    </div>
</div>

- **Disparador (trigger)**: el elemento que abre el popover al pulsarlo (un botón, un icono, un avatar).
- **Panel**: el contenedor flotante, anclado y posicionado junto al disparador, con su propio padding y borde.
- **Contenido**: texto, imágenes, enlaces o controles simples; más rico que un tooltip, más ligero que un modal completo.
- **Flecha o pico (opcional)**: conecta visualmente el panel con el disparador exacto que lo abrió.

## Buenas prácticas de diseño

- **No lo uses para acciones críticas o irreversibles.** Al no bloquear el resto de la pantalla, es fácil pulsar fuera y perder el contexto sin querer; eso lo hace inadecuado para confirmaciones importantes (para eso está el modal).
- **Ciérralo al pulsar fuera de él y al pulsar Escape**, de forma consistente con el resto de overlays no bloqueantes.
- **Posiciónalo de forma que no tape el propio disparador** y que se reajuste si no cabe en la dirección por defecto (por ejemplo, abriéndose hacia arriba si no hay espacio abajo).
- **Mantén el contenido acotado.** Si el popover empieza a necesitar scroll interno largo o múltiples secciones, probablemente el contenido merece una pantalla propia o un modal.
- **Un único popover abierto a la vez.** Abrir uno nuevo debe cerrar automáticamente cualquier otro que estuviera abierto, para no acumular paneles flotantes simultáneos.
- **Debe ser accesible por teclado**, incluyendo mover el foco dentro del panel al abrirse y devolverlo al disparador al cerrarse, igual que en un modal pero sin atrapar el foco de forma permanente.
