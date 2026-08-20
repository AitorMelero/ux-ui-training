---
title: 'Roles tipográficos: display, headline, title, body y más'
description: 'Distingue display, headline, heading, title, subtitle, body, caption, overline y label, y cuándo su tamaño cambia entre escritorio y móvil.'
category: ui
level: beginner
order: 12
exercises:
    - id: nomenclatura-tipografica-mc-1
      type: multiple-choice
      prompt: "¿Cuál es la diferencia principal entre un 'heading' (h1-h6) y un 'title'?"
      allowMultiple: false
      options:
          - text: 'Heading es el concepto estructural de HTML (h1-h6) que define la jerarquía semántica de toda la página, usada por lectores de pantalla y buscadores; title identifica el contenido de un bloque concreto (una página, una card, un modal), sin implicar por sí mismo ninguna etiqueta HTML determinada.'
            correct: true
            explanation: 'Correcto. Un heading marca la estructura semántica del documento entero; un title es una etiqueta de rol que puede aplicarse a muchos bloques distintos de una interfaz, cada uno con su propio title, sin que eso afecte a la jerarquía de headings de la página.'
          - text: 'Son sinónimos exactos y pueden usarse indistintamente en cualquier contexto de diseño o desarrollo.'
            correct: false
            explanation: 'No son intercambiables: heading es una jerarquía semántica única por página (h1 a h6), mientras que una misma pantalla puede tener decenas de elementos con rol title (el de cada card, el de cada modal) sin relación jerárquica entre sí.'
          - text: 'Heading solo existe en dispositivos móviles y title solo en escritorio.'
            correct: false
            explanation: 'Ambos conceptos son independientes del tipo de dispositivo; la diferencia entre ellos es semántica (estructura del documento) frente a identificación de un bloque de contenido concreto.'
    - id: nomenclatura-tipografica-mc-2
      type: multiple-choice
      prompt: '¿Qué suele ocurrir con el tamaño de un texto de rol "display" o "headline" al pasar de una pantalla de escritorio a una de móvil?'
      allowMultiple: false
      options:
          - text: 'Se reduce notablemente, a menudo mediante clamp() o media queries, para evitar que desborde una pantalla estrecha o fuerce saltos de línea poco cuidados.'
            correct: true
            explanation: 'Correcto. Un display de 64-96px que funciona bien en un monitor de escritorio resulta desproporcionado en un móvil de 360px de ancho, así que se reduce de forma deliberada, normalmente con clamp() o breakpoints en media queries.'
          - text: 'Se mantiene exactamente en los mismos píxeles, igual que ocurre con el cuerpo de texto.'
            correct: false
            explanation: 'A diferencia del body (que ya está cerca del mínimo legible y apenas cambia), los tamaños grandes como display o headline sí se reescalan de forma notable entre escritorio y móvil.'
          - text: 'Aumenta en móvil para compensar que la pantalla es más pequeña.'
            correct: false
            explanation: 'Ocurre justo lo contrario: en móvil el espacio disponible es menor, así que los tamaños grandes se reducen, no se amplían.'
    - id: nomenclatura-tipografica-order-1
      type: ordering
      prompt: 'Ordena estos roles tipográficos de mayor a menor tamaño visual habitual.'
      items:
          - 'Display'
          - 'Headline'
          - 'Title / Subtitle'
          - 'Body'
          - 'Caption / Overline / Label'
      explanation: 'Esta es la progresión típica de una escala de roles tipográficos: display es el nivel más grande (portadas y héroes), y a partir de ahí el tamaño desciende hasta los roles más pequeños, pensados para texto auxiliar y funcional.'
    - id: nomenclatura-tipografica-free-1
      type: free-text
      prompt: '¿Cómo se llama el texto corto, en mayúsculas y con tracking amplio, que se coloca encima de un título para darle contexto o categoría?'
      acceptedAnswers:
          - 'overline'
          - 'eyebrow'
          - 'texto eyebrow'
      explanation: 'El overline (también llamado eyebrow) es una etiqueta editorial breve, en mayúsculas y con espaciado entre letras amplio, que ayuda a categorizar o dar contexto rápido a un título sin competir en tamaño con él.'
---

## Un vocabulario compartido entre diseño y desarrollo

Cuando un equipo trabaja con un design system serio —Material Design, las Human Interface Guidelines, o el sistema propio de cualquier producto maduro en Figma— no habla simplemente de "títulos grandes" y "texto normal": usa un vocabulario mucho más preciso, con roles tipográficos concretos como **display**, **headline**, **title** o **caption**. Esta nomenclatura no es un capricho estético: existe para que diseño y desarrollo compartan un mismo lenguaje. Cuando alguien dice "usa el headline de la sección" o "ese texto es un label, no un caption", todo el equipo entiende exactamente qué tamaño, qué peso y qué comportamiento responsive le corresponde, sin necesidad de mirar cada valor en píxeles cada vez.

## Los roles, uno a uno

- **Display**: el tamaño más grande de toda la escala. Reservado para momentos muy puntuales y de alto impacto visual, casi siempre uno por pantalla como mucho.
- **Headline**: un escalón por debajo del display, pero todavía grande y con mucho peso visual. Encabeza secciones destacadas sin llegar al protagonismo absoluto de un display.
- **Heading**: no es un tamaño, sino un **concepto estructural** de HTML (`h1` a `h6`) que define la jerarquía semántica de una página completa, de cara a la accesibilidad y al SEO. Una página tiene una única jerarquía de headings, pero puede tener muchos elementos con rol title.
- **Title**: identifica el contenido de un bloque concreto —el título de una card, el de un modal, o el `<title>` de la pestaña del navegador—, sin implicar por sí mismo ninguna etiqueta HTML determinada. Es fácil confundirlo con heading, pero mientras heading es una cuestión de estructura semántica de toda la página, title es simplemente "el nombre de este bloque en particular".
- **Subtitle**: texto secundario que acompaña a un título, casi siempre justo debajo, aportando contexto adicional sin robarle protagonismo.
- **Body**: el cuerpo de texto, el que se usa para párrafos y descripciones extensas. Es el rol que más se lee, así que prioriza la legibilidad por encima de cualquier otra consideración.
- **Caption**: texto auxiliar y pequeño, típicamente el pie de una foto o el texto de ayuda bajo un campo de formulario.
- **Overline**: una etiqueta editorial corta, en mayúsculas y con tracking (espaciado entre letras) amplio, que se coloca encima de un título para darle contexto o categoría —por ejemplo, "NUEVO" o el nombre de una categoría encima del título de una card—.
- **Label**: texto funcional de un control de interfaz, como el nombre de un campo de formulario o el texto de un botón. Se confunde a veces con overline porque ambos son textos cortos, pero la diferencia es de propósito: el overline es editorial (da contexto a un contenido), mientras que el label es funcional (identifica un control con el que el usuario interactúa).

## Escala visual comparada

Así se ven, unos junto a otros, los distintos roles ordenados de mayor a menor tamaño, con un valor de referencia habitual en escritorio:

<div style="margin:1.25rem 0;">
    <p style="margin:0 0 0.6rem;font-size:3.5rem;font-weight:800;line-height:1.05;color:#1c1f26;">Display · 64px</p>
    <p style="margin:0 0 0.6rem;font-size:2.5rem;font-weight:700;line-height:1.1;color:#1c1f26;">Headline · 40px</p>
    <p style="margin:0 0 0.5rem;font-size:1.75rem;font-weight:700;color:#1c1f26;">Heading (h1) · 28px</p>
    <p style="margin:0 0 0.5rem;font-size:1.375rem;font-weight:600;color:#1c1f26;">Title · 22px</p>
    <p style="margin:0 0 0.5rem;font-size:1.125rem;font-weight:500;color:#495057;">Subtitle · 18px</p>
    <p style="margin:0 0 0.5rem;font-size:1rem;color:#1c1f26;">Body · 16px</p>
    <p style="margin:0 0 0.35rem;font-size:0.75rem;color:#868e96;">Caption · 12px</p>
    <p style="margin:0 0 0.35rem;font-size:0.7rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#868e96;">Overline · 11px</p>
    <p style="margin:0;font-size:0.8125rem;font-weight:600;color:#495057;">Label · 13px</p>
</div>

## ¿Cambian de tamaño entre desktop y mobile?

No todos los roles reaccionan igual al pasar de una pantalla de escritorio a una de móvil. Los tamaños grandes —**display**, **headline** y el **heading** de nivel más alto (h1)— se reducen de forma notable, normalmente con `clamp()` o con media queries, porque un tamaño de 64 a 96px que se ve bien en un monitor ancho desbordaría una pantalla de móvil estrecha, o forzaría saltos de línea poco cuidados en cuanto el texto tuviera más de dos o tres palabras. Los tamaños pequeños —**body**, **caption**, **overline** y **label**— en cambio se mantienen prácticamente iguales entre escritorio y móvil, porque ya están cerca del mínimo legible (el body normalmente no baja de 16px) y reducirlos más perjudicaría directamente la lectura, justo cuando el móvil ya de por sí exige más esfuerzo visual que una pantalla grande.

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;">
    <div style="flex:1;min-width:220px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#495057;">Escritorio</p>
        <p style="margin:0 0 0.5rem;font-size:2.5rem;font-weight:800;line-height:1.1;color:#1c1f26;">Display · 64px</p>
        <p style="margin:0;font-size:1rem;color:#1c1f26;">Body · 16px</p>
    </div>
    <div style="flex:1;min-width:220px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.5rem;font-size:0.75rem;font-weight:700;text-transform:uppercase;color:#495057;">Móvil</p>
        <p style="margin:0 0 0.5rem;font-size:1.4rem;font-weight:800;line-height:1.1;color:#1c1f26;">Display · 36px</p>
        <p style="margin:0;font-size:1rem;color:#1c1f26;">Body · 16px</p>
    </div>
</div>

El display cae de 64px a 36px entre escritorio y móvil (casi a la mitad), mientras que el body se mantiene exactamente en 16px en ambos casos: dos comportamientos responsive completamente distintos dentro de la misma escala tipográfica.

## Cómo y dónde usarlos, con ejemplos

- **Display**: el titular gigante del hero de una landing page, el primer elemento que ve el usuario al entrar.
- **Headline**: el encabezado de una sección de marketing destacada dentro de esa misma página, un escalón por debajo del hero.
- **Heading (h1-h6)**: la estructura semántica de toda la página —un único `h1` por página, y una jerarquía coherente de `h2`, `h3`, etc.— pensada para accesibilidad y SEO, no para el tamaño visual en sí.
- **Title**: el título de una card de producto en un listado, el título de un modal de confirmación, o el `<title>` que aparece en la pestaña del navegador.
- **Subtitle**: el texto secundario bajo el título de un artículo o de una card, que aporta contexto adicional sin competir con el título.
- **Body**: los párrafos de contenido y las descripciones de producto, el texto que el usuario realmente lee de corrido.
- **Caption**: el pie de una foto en una galería, o el texto de ayuda pequeño bajo un campo de un formulario.
- **Overline**: la etiqueta corta encima del título de una card, del tipo "NUEVO" o el nombre de una categoría, para dar contexto antes de leer el título.
- **Label**: el texto de la etiqueta de un campo de formulario ("Correo electrónico") o el texto de un botón ("Guardar cambios"): texto funcional de interfaz, no editorial.
