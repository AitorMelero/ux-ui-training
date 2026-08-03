---
title: 'Cabecera y pie de página (Header / Footer)'
description: 'Los dos landmarks que enmarcan cada pantalla: qué contenido va en cada uno y cómo se comportan al hacer scroll.'
category: components
level: beginner
order: 7
subcategory: navegacion
exercises:
    - id: header-footer-mc-1
      type: multiple-choice
      prompt: '¿Qué tienen en común la cabecera (header) y el pie de página (footer) frente al resto de contenido de una pantalla?'
      allowMultiple: false
      options:
          - text: 'Ambos son "landmarks" (puntos de referencia) que se repiten de forma consistente en todas las pantallas, dando marco y orientación constantes al resto del contenido, que sí cambia.'
            correct: true
            explanation: 'Correcto. Al mantenerse iguales pantalla tras pantalla, actúan como puntos fijos de orientación: la persona usuaria siempre sabe dónde buscar la navegación principal o el contacto, sin importar en qué sección se encuentre.'
          - text: 'Ambos deben contener siempre exactamente los mismos enlaces, sin ninguna diferencia entre ellos.'
            correct: false
            explanation: 'Cabecera y pie suelen tener contenido distinto: la cabecera prioriza navegación y acciones frecuentes; el pie agrupa enlaces secundarios, legales y de contacto.'
          - text: 'Ninguno de los dos debería ser accesible mediante teclado, ya que su función es únicamente decorativa.'
            correct: false
            explanation: 'Al contrario: al contener navegación esencial, ambos deben ser completamente accesibles por teclado y lector de pantalla.'
    - id: header-footer-mc-2
      type: multiple-choice
      prompt: '¿Cuál es el principal riesgo de una cabecera "sticky" (que permanece fija al hacer scroll) mal dimensionada?'
      allowMultiple: false
      options:
          - text: 'Si ocupa demasiada altura, resta espacio permanente a la pantalla visible, especialmente crítico en dispositivos móviles con poca altura de pantalla.'
            correct: true
            explanation: 'Correcto. Una cabecera fija generosa en escritorio puede ser aceptable, pero la misma altura en un móvil en horizontal puede dejar muy poco espacio útil para el contenido.'
          - text: 'Que dejen de funcionar los enlaces de la cabecera al hacer scroll.'
            correct: false
            explanation: 'El comportamiento "sticky" no afecta a la funcionalidad de los enlaces, solo a su posición fija en pantalla.'
          - text: 'Que el pie de página deje de ser visible en toda la sesión.'
            correct: false
            explanation: 'El comportamiento de la cabecera no determina la visibilidad del pie de página, que sigue apareciendo al final del contenido.'
    - id: header-footer-order-1
      type: ordering
      prompt: 'Ordena estos elementos según dónde es más habitual encontrarlos: del más típico de la cabecera al más típico del pie de página.'
      items:
          - 'Logotipo y menú de navegación principal'
          - 'Buscador y acceso a la cuenta de usuario'
          - 'Enlaces secundarios (ayuda, blog, sobre nosotros)'
          - 'Aviso legal, política de privacidad y redes sociales'
      explanation: 'La cabecera concentra lo que se usa con más frecuencia (navegación principal, cuenta, búsqueda); el pie de página agrupa lo que se consulta con menos frecuencia pero debe seguir siendo accesible (legal, contacto, enlaces secundarios).'
---

## Por qué existen: el marco constante de cada pantalla

La cabecera (header) y el pie de página (footer) son los dos "landmarks" —puntos de referencia estructurales— que enmarcan el contenido de cada pantalla. Aparecen en (casi) todas las vistas de una aplicación o sitio web con la misma posición y, en gran medida, el mismo contenido, mientras que lo que hay entre ambos cambia constantemente. Esa repetición es justo lo que los hace valiosos: le dan a la persona usuaria un marco de orientación estable, sin importar en qué parte del producto se encuentre.

## Anatomía de una cabecera

<div style="margin:1.25rem 0;border:1px solid #d8dbe3;border-radius:0.5rem;overflow:hidden;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;background:#fff;border-bottom:1px solid #eef0f4;">
        <span style="font-weight:700;color:#364fc7;">Logo</span>
        <div style="display:flex;gap:1rem;font-size:0.85rem;">
            <span>Productos</span><span>Precios</span><span>Ayuda</span>
        </div>
        <button style="padding:0.4rem 0.9rem;border:none;border-radius:0.4rem;background:#364fc7;color:#fff;font-size:0.8rem;">Mi cuenta</button>
    </div>
    <div style="padding:1.5rem;color:#adb5bd;font-size:0.8rem;text-align:center;">contenido de la página...</div>
</div>

- **Logotipo / identidad**: normalmente a la izquierda, y suele funcionar también como enlace a la página de inicio.
- **Navegación principal**: los destinos de más alto nivel del producto, siempre visibles.
- **Acciones frecuentes**: búsqueda, carrito, notificaciones, acceso a la cuenta — lo que se usa en casi cualquier sesión.

## Anatomía de un pie de página

<div style="margin:1.25rem 0;padding:1.25rem;border-radius:0.5rem;background:#1c1f26;color:#dee2e6;font-size:0.8rem;">
    <div style="display:flex;flex-wrap:wrap;gap:2rem;margin-block-end:1rem;">
        <div><p style="margin:0 0 0.5rem;font-weight:700;color:#fff;">Producto</p><p style="margin:0.15rem 0;">Funcionalidades</p><p style="margin:0.15rem 0;">Precios</p></div>
        <div><p style="margin:0 0 0.5rem;font-weight:700;color:#fff;">Empresa</p><p style="margin:0.15rem 0;">Sobre nosotros</p><p style="margin:0.15rem 0;">Contacto</p></div>
        <div><p style="margin:0 0 0.5rem;font-weight:700;color:#fff;">Legal</p><p style="margin:0.15rem 0;">Privacidad</p><p style="margin:0.15rem 0;">Términos</p></div>
    </div>
    <p style="margin:0;color:#868e96;">© 2026 Empresa. Todos los derechos reservados.</p>
</div>

- **Enlaces secundarios agrupados por tema**: contenido útil pero de baja frecuencia de uso (documentación, empleo, blog).
- **Información legal**: aviso legal, política de privacidad, cookies — a menudo un requisito normativo, no solo de diseño.
- **Identidad y contacto**: redes sociales, dirección, formas de contacto adicionales.

## Buenas prácticas de diseño

- **Limita la cabecera a lo verdaderamente frecuente.** Cuantos más elementos compitan en ella, menos destaca cada uno; lo poco frecuente pertenece al pie de página o a un menú secundario.
- **Si la cabecera es "sticky" (fija al hacer scroll), vigila su altura**, sobre todo en móvil: cuanto más espacio ocupe de forma permanente, menos queda para el contenido.
- **Marca siempre la sección activa en la navegación de la cabecera**, para que la persona usuaria sepa dónde está dentro del producto.
- **Agrupa los enlaces del pie de página por tema, con encabezados claros**, en lugar de una lista plana larga que obliga a leer todo para encontrar algo.
- **No dupliques en el pie de página exactamente lo mismo que ya está en la cabecera**; aprovecha el espacio para lo que no cabe arriba (legal, redes sociales, enlaces secundarios).
- **Ambos deben ser totalmente accesibles por teclado**, incluyendo un enlace de "saltar al contenido principal" al principio de la página para quienes navegan sin ratón.
