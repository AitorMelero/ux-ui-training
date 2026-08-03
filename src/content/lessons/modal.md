---
title: 'Modal'
description: 'El overlay más interruptivo: cuándo está justificado bloquear el resto de la pantalla y cómo gestionar el foco correctamente.'
category: components
level: advanced
order: 15
subcategory: overlays-feedback
exercises:
    - id: modal-mc-1
      type: multiple-choice
      prompt: '¿Qué caracteriza a un modal frente al resto de overlays (tooltip, popover)?'
      allowMultiple: false
      options:
          - text: 'Bloquea la interacción con el resto de la pantalla hasta que se resuelve o se cierra explícitamente, obligando a la persona a prestarle atención antes de continuar.'
            correct: true
            explanation: 'Correcto. Esa interrupción total es lo que distingue al modal: mientras está abierto, nada del resto de la interfaz es interactivo.'
          - text: 'Se cierra automáticamente al cabo de unos segundos, sin necesidad de ninguna acción.'
            correct: false
            explanation: 'Un modal requiere una acción explícita para cerrarse (confirmar, cancelar, o pulsar cerrar); cerrarlo solo, sin acción del usuario, sería precisamente evitar la interrupción que lo justifica.'
          - text: 'Aparece siempre anclado junto al elemento que lo activó, como un tooltip.'
            correct: false
            explanation: 'Un modal se centra normalmente en la pantalla, independientemente de dónde esté el elemento que lo abrió; anclarse a un disparador es más propio de un popover.'
    - id: modal-mc-2
      type: multiple-choice
      prompt: '¿Por qué es tan importante la gestión del foco de teclado al abrir un modal?'
      allowMultiple: true
      options:
          - text: 'Porque el foco debe moverse dentro del modal al abrirse, para que una persona que navega por teclado no siga interactuando "a ciegas" con contenido oculto detrás.'
            correct: true
            explanation: 'Correcto. Sin ese movimiento de foco, alguien usando solo el teclado podría seguir tabulando por elementos que están visualmente bloqueados por el modal.'
          - text: 'Porque el foco debe quedar "atrapado" dentro del modal mientras esté abierto (focus trap), sin poder salir tabulando hacia el contenido de detrás.'
            correct: true
            explanation: 'Correcto. Sin un focus trap, seguir tabulando puede llevar el foco fuera del modal, a elementos invisibles bajo la capa oscurecida, generando una experiencia confusa y rompiendo el bloqueo real de interacción.'
          - text: 'Porque sin gestión de foco el modal no se puede cerrar nunca.'
            correct: false
            explanation: 'El cierre del modal no depende de la gestión de foco en sí; es la navegación y accesibilidad durante su uso lo que se ve directamente afectado.'
    - id: modal-order-1
      type: ordering
      prompt: 'Ordena estos pasos de un flujo de eliminación con modal de confirmación, del primero al último.'
      items:
          - 'La persona pulsa "Eliminar" en la pantalla principal'
          - 'Se abre el modal con el mensaje de confirmación y el foco se mueve dentro de él'
          - 'La persona confirma o cancela la acción'
          - 'El modal se cierra y el foco vuelve al elemento que lo abrió'
      explanation: 'Devolver el foco al elemento original tras cerrar el modal es tan importante como moverlo al abrirlo: evita que una persona que navega por teclado "pierda" su posición en la página.'
---

## Por qué existe: cuando algo necesita atención total

Un modal es un panel que aparece por encima de toda la pantalla, oscureciendo y bloqueando el resto del contenido, y que exige una acción explícita antes de poder volver a interactuar con lo que había detrás. Es el overlay más interruptivo de todos —y por eso el que hay que usar con más cautela—, reservado para decisiones que realmente necesitan la atención completa de la persona: confirmar una acción irreversible, completar un paso obligatorio antes de continuar.

## Anatomía de un modal

<div style="margin:1.25rem 0;position:relative;background:#00000055;border-radius:0.5rem;padding:2rem;">
    <div style="max-width:20rem;margin:0 auto;background:#fff;border-radius:0.75rem;padding:1.5rem;box-shadow:0 8px 24px rgba(0,0,0,0.15);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-block-end:0.75rem;">
            <p style="margin:0;font-weight:700;">¿Eliminar este proyecto?</p>
            <span style="cursor:pointer;color:#868e96;">✕</span>
        </div>
        <p style="margin:0 0 1.25rem;font-size:0.85rem;color:#495057;">Esta acción no se puede deshacer. Se eliminarán todos los archivos asociados.</p>
        <div style="display:flex;gap:0.75rem;justify-content:flex-end;">
            <button style="padding:0.5rem 1rem;border:1px solid #d8dbe3;border-radius:0.4rem;background:#fff;">Cancelar</button>
            <button style="padding:0.5rem 1rem;border:none;border-radius:0.4rem;background:#e03131;color:#fff;font-weight:600;">Eliminar</button>
        </div>
    </div>
</div>

- **Capa de fondo (overlay/backdrop)**: oscurece el resto de la pantalla, marcando visualmente que está bloqueada.
- **Contenedor del modal**: el panel centrado, con su propio título, contenido y acciones.
- **Título**: describe con claridad qué decisión o información contiene el modal.
- **Acciones**: normalmente una acción principal y una de cancelar, siguiendo la misma jerarquía vista en la lección de "Botón".
- **Cierre**: un icono de cerrar, la tecla Escape, o pulsar fuera del panel (cuando la acción no es crítica).

## Buenas prácticas de diseño

- **Resérvalo para lo que realmente necesita bloquear el resto de la pantalla.** Un modal para cada notificación o confirmación menor interrumpe constantemente; para eso hay componentes menos invasivos.
- **Mueve el foco de teclado dentro del modal al abrirse, y atrápalo ahí (focus trap)** hasta que se cierre, para que tabular no lleve a contenido oculto detrás.
- **Devuelve el foco al elemento que abrió el modal cuando se cierra**, para no desorientar a quien navega por teclado.
- **Ofrece siempre una forma clara de cerrarlo** sin completar la acción: la tecla Escape, un botón de cerrar visible, y —si la acción no es crítica— pulsar fuera del panel.
- **En acciones destructivas o irreversibles, el botón principal debe describir la consecuencia**, no un genérico "Aceptar" ("Eliminar proyecto" en lugar de "Sí").
- **No anides un modal dentro de otro modal.** Si una acción dentro de un modal necesita otra confirmación, resuelve el diseño de otra forma (por ejemplo, cambiando el contenido del mismo modal) en lugar de apilar dos capas de bloqueo.
