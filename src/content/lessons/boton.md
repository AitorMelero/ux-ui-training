---
title: 'Botón (Button)'
description: 'El elemento de acción por excelencia: sus partes, la jerarquía entre botón primario y secundario, y cómo diseñar sus estados.'
category: components
level: beginner
order: 2
subcategory: acciones-contenido
exercises:
    - id: boton-mc-1
      type: multiple-choice
      prompt: '¿Cuándo se debe usar un botón en lugar de un enlace?'
      allowMultiple: false
      options:
          - text: 'Cuando la acción provoca un cambio de estado o ejecuta una operación (guardar, eliminar, enviar), no cuando simplemente navega a otra URL.'
            correct: true
            explanation: 'Correcto. El botón comunica "esto va a pasar algo aquí mismo"; el enlace comunica "esto te va a llevar a otro sitio".'
          - text: 'Siempre que el texto sea corto, sin importar lo que ocurra al pulsarlo.'
            correct: false
            explanation: 'La longitud del texto no determina si debe ser botón o enlace; lo determina la acción que dispara.'
          - text: 'Nunca; los enlaces con estilo de botón cumplen exactamente la misma función.'
            correct: false
            explanation: 'Visualmente pueden parecerse, pero semánticamente son distintos: un enlace navega, un botón ejecuta una acción. Confundirlos rompe expectativas y accesibilidad (lectores de pantalla, atajos de teclado).'
    - id: boton-mc-2
      type: multiple-choice
      prompt: 'En una pantalla con un botón "Guardar cambios" y un botón "Cancelar", ¿cómo se suele resolver la jerarquía visual entre ambos?'
      allowMultiple: true
      options:
          - text: 'El botón principal ("Guardar cambios") usa el estilo primario (fondo sólido, más peso visual).'
            correct: true
            explanation: 'Correcto. La acción que se espera que la mayoría de usuarios realice debe destacar más.'
          - text: 'El botón secundario ("Cancelar") suele usar un estilo con menos peso visual (borde, texto, o fondo neutro).'
            correct: true
            explanation: 'Correcto. Reducir el peso visual del botón secundario evita que compita con la acción principal y reduce el riesgo de pulsaciones accidentales.'
          - text: 'Ambos botones deben tener siempre exactamente el mismo estilo para no confundir al usuario.'
            correct: false
            explanation: 'Al contrario: dar el mismo peso visual a dos acciones de importancia distinta dificulta saber cuál es la recomendada.'
    - id: boton-order-1
      type: ordering
      prompt: 'Ordena estos estados de un botón según la secuencia natural de interacción, de "antes de tocarlo" a "después de que termine la acción".'
      items:
          - 'Reposo (idle): el botón visible, sin interacción'
          - 'Hover / foco: el cursor está encima o ha llegado por teclado'
          - 'Pulsado (active): se ha hecho clic y se mantiene presionado'
          - 'Cargando (loading): la acción se está procesando'
      explanation: 'Diseñar los cuatro estados evita botones que "no responden" visualmente: sin un estado de carga, por ejemplo, el usuario no sabe si su clic tuvo efecto y puede volver a pulsar.'
---

## Por qué existe: la acción más básica de una interfaz

El botón es el elemento con el que una persona le dice a la aplicación "haz esto ahora". Es, junto al enlace, el componente interactivo más fundamental de cualquier interfaz: sin botones, ningún formulario podría enviarse, ninguna compra podría confirmarse, ningún cambio podría guardarse. Precisamente por ser tan omnipresente, un botón mal diseñado —difícil de encontrar, ambiguo en lo que hace, o sin respuesta visible al pulsarlo— genera fricción en prácticamente toda la aplicación a la vez.

## Anatomía de un botón

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;align-items:center;">
    <button style="padding:0.75rem 1.5rem;border:none;border-radius:0.5rem;background:#364fc7;color:#fff;font-weight:700;font-size:0.95rem;display:inline-flex;align-items:center;gap:0.5rem;">
        <span>＋</span> Añadir producto
    </button>
</div>

- **Contenedor**: el área pulsable, con su relleno (padding) interno; debe ser lo bastante grande para tocarse con comodidad (mínimo recomendado ~44×44px en móvil).
- **Etiqueta (label)**: el texto de la acción, siempre en verbo ("Guardar", "Eliminar cuenta"), nunca ambiguo ("Aceptar" sin contexto es peor que "Confirmar pedido").
- **Icono opcional**: refuerza el significado (un "+" para añadir, una papelera para eliminar), nunca sustituye al texto salvo en botones ya universalmente reconocidos.
- **Estado visual**: el color de fondo, borde y texto cambian según el estado (reposo, hover, pulsado, deshabilitado, cargando).

## Jerarquía: primario, secundario y terciario

No todos los botones de una pantalla pesan lo mismo. Es habitual definir al menos tres niveles:

<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1.25rem 0;align-items:center;">
    <button style="padding:0.65rem 1.25rem;border:none;border-radius:0.5rem;background:#364fc7;color:#fff;font-weight:700;">Primario</button>
    <button style="padding:0.65rem 1.25rem;border:1px solid #364fc7;border-radius:0.5rem;background:#fff;color:#364fc7;font-weight:700;">Secundario</button>
    <button style="padding:0.65rem 1.25rem;border:none;border-radius:0.5rem;background:transparent;color:#364fc7;font-weight:700;">Terciario / texto</button>
</div>

El **primario** marca la acción recomendada de la pantalla (solo debería haber uno por vista). El **secundario** ofrece una alternativa sin competir visualmente. El **terciario** (a menudo solo texto, sin fondo ni borde) se reserva para acciones de menor importancia, como "Cancelar" o "Saltar este paso".

## Buenas prácticas de diseño

- **Un único botón primario por pantalla o por sección visible.** Si hay dos botones con el mismo peso visual, el usuario no sabe cuál es la acción recomendada.
- **Texto en verbo y específico al contexto**: "Eliminar cuenta" comunica mucho más que "Aceptar", especialmente en acciones destructivas o irreversibles.
- **Diseña los cinco estados**: reposo, hover/foco, pulsado, deshabilitado y cargando. Un botón sin estado de carga hace que el usuario dude si su clic tuvo efecto.
- **No deshabilites un botón sin explicar por qué.** Un botón gris sin ninguna pista dejar al usuario sin saber qué le falta completar para poder pulsarlo; a menudo es mejor dejarlo activo y mostrar el error al pulsar.
- **Área táctil suficiente**: aunque el texto sea corto, el área pulsable debe tener un tamaño mínimo cómodo, sobre todo en móvil.
- **Un solo botón destructivo debe distinguirse claramente** (normalmente en rojo) y, si la acción es irreversible, pedir confirmación antes de ejecutarla.
