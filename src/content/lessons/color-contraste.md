---
title: 'Principios de color y contraste'
description: 'Usa el color con intención y garantiza que el texto sea legible para todas las personas, incluidas las que tienen baja visión.'
category: ui
level: beginner
order: 1
exercises:
    - id: color-mc-1
      type: multiple-choice
      prompt: 'Según las pautas WCAG 2.1 (nivel AA), ¿cuál es la ratio de contraste mínima recomendada entre texto normal y su fondo?'
      allowMultiple: false
      options:
          - text: '1.5:1'
            correct: false
            explanation: 'Una ratio tan baja apenas se distingue del fondo; no cumple ningún nivel de WCAG para texto normal.'
          - text: '4.5:1'
            correct: true
            explanation: 'Correcto. WCAG 2.1 AA exige 4.5:1 para texto normal (y 3:1 para texto grande, a partir de 18pt o 14pt en negrita).'
          - text: '10:1'
            correct: false
            explanation: '10:1 supera incluso el nivel AAA (7:1); no es el mínimo exigido para el nivel AA habitual.'
    - id: color-mc-2
      type: multiple-choice
      prompt: 'Un formulario marca los campos con error solo cambiando el borde a color rojo, sin ningún otro indicador. ¿Qué problema de accesibilidad tiene?'
      allowMultiple: false
      options:
          - text: 'Ninguno, el rojo es un color universalmente reconocido como error.'
            correct: false
            explanation: 'Una persona con daltonismo (deficiencia en la percepción del rojo-verde) puede no distinguir ese cambio de color respecto al estado normal.'
          - text: 'Depende únicamente del color para transmitir información, lo cual excluye a personas con daltonismo o baja visión.'
            correct: true
            explanation: 'Correcto. Las pautas de accesibilidad piden no usar el color como único medio para transmitir información; hay que añadir un icono, un texto o un patrón adicional.'
          - text: 'El rojo es un color prohibido en interfaces web.'
            correct: false
            explanation: 'El rojo no está prohibido; el problema es usarlo como única señal, sin apoyo de texto o iconografía.'
    - id: color-order-1
      type: ordering
      prompt: 'Ordena estos tipos de paleta de color según su función habitual en un sistema de diseño, empezando por la que define la identidad de marca.'
      items:
          - 'Color primario (identidad de marca)'
          - 'Colores secundarios (apoyo y variedad visual)'
          - 'Colores semánticos (éxito, error, advertencia)'
          - 'Escala de grises (texto, fondos, bordes)'
      explanation: 'El color primario suele anclar la identidad visual; los secundarios aportan variedad; los semánticos comunican estado; y la escala de grises resuelve la mayoría del texto y los fondos neutros de una interfaz.'
    - id: color-free-1
      type: free-text
      prompt: '¿Cómo se llama la propiedad óptica que mide la diferencia de luminosidad entre un texto y su fondo, y que determina si ese texto es legible?'
      acceptedAnswers:
          - 'contraste'
          - 'ratio de contraste'
          - 'contraste de color'
      explanation: 'El contraste (o ratio de contraste) es la base de la legibilidad: sin suficiente diferencia de luminosidad entre texto y fondo, incluso una tipografía grande resulta difícil de leer.'
---

## El color comunica antes que decora

El color en una interfaz no es solo estética: es un lenguaje. Antes de que una persona lea una sola palabra, el color ya le está diciendo algo: que un botón es la acción principal, que un mensaje es un error, que un campo está deshabilitado. Un sistema de color bien diseñado asigna significado de forma consistente (rojo para error, verde para éxito, el color de marca para las acciones principales) y lo mantiene igual en toda la aplicación, para que el usuario no tenga que volver a aprenderlo en cada pantalla.

Un sistema de color profesional casi nunca se compone de colores sueltos: se organiza en roles. Esto es lo que suele verse en la paleta de un producto real:

<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1.25rem 0;">
    <div style="text-align:center;">
        <div style="width:96px;height:96px;border-radius:0.5rem;background:#364fc7;"></div>
        <p style="margin:0.4rem 0 0;font-size:0.85rem;">Primario<br /><code>#364FC7</code></p>
    </div>
    <div style="text-align:center;">
        <div style="width:96px;height:96px;border-radius:0.5rem;background:#0ca678;"></div>
        <p style="margin:0.4rem 0 0;font-size:0.85rem;">Secundario<br /><code>#0CA678</code></p>
    </div>
    <div style="text-align:center;">
        <div style="width:96px;height:96px;border-radius:0.5rem;background:#2f9e44;"></div>
        <p style="margin:0.4rem 0 0;font-size:0.85rem;">Éxito<br /><code>#2F9E44</code></p>
    </div>
    <div style="text-align:center;">
        <div style="width:96px;height:96px;border-radius:0.5rem;background:#f08c00;"></div>
        <p style="margin:0.4rem 0 0;font-size:0.85rem;">Advertencia<br /><code>#F08C00</code></p>
    </div>
    <div style="text-align:center;">
        <div style="width:96px;height:96px;border-radius:0.5rem;background:#e03131;"></div>
        <p style="margin:0.4rem 0 0;font-size:0.85rem;">Error<br /><code>#E03131</code></p>
    </div>
</div>

Junto a estos colores "con carga semántica" convive siempre una escala de grises neutros, que en la mayoría de interfaces resuelve entre el 80% y el 90% de las decisiones de color: fondos, bordes, texto secundario, divisores. No es casualidad que en esta misma lección se use principalmente esta escala:

<div style="display:flex;flex-wrap:wrap;margin:1.25rem 0;border-radius:0.5rem;overflow:hidden;border:1px solid #d8dbe3;width:fit-content;">
    <div style="width:56px;height:56px;background:#f8f9fa;"></div>
    <div style="width:56px;height:56px;background:#e9ecef;"></div>
    <div style="width:56px;height:56px;background:#ced4da;"></div>
    <div style="width:56px;height:56px;background:#adb5bd;"></div>
    <div style="width:56px;height:56px;background:#868e96;"></div>
    <div style="width:56px;height:56px;background:#495057;"></div>
    <div style="width:56px;height:56px;background:#343a40;"></div>
    <div style="width:56px;height:56px;background:#1c1f26;"></div>
</div>

## Contraste: la base de la legibilidad

Por muy bonita que sea una paleta, si el texto no se distingue del fondo, la interfaz falla en su función más básica: comunicar. El **contraste** mide la diferencia de luminosidad entre un color de texto y su fondo, y se expresa como una ratio (por ejemplo, 4.5:1). Las Pautas de Accesibilidad para el Contenido Web (WCAG) establecen mínimos según el nivel de conformidad: el nivel AA, el más habitual en proyectos profesionales, exige una ratio de al menos 4.5:1 para texto normal y 3:1 para texto grande (a partir de 18pt, o 14pt en negrita). El nivel AAA, más exigente, sube el listón a 7:1 y 4.5:1 respectivamente, y suele reservarse para productos con requisitos de accesibilidad muy altos (sector público, banca, salud).

En vez de quedarte con la fórmula abstracta, compara estos cuatro pares de texto y fondo. Todos parecen "grises razonables" a primera vista, pero solo dos cumplen el mínimo AA:

<div style="display:flex;flex-wrap:wrap;gap:1rem;margin:1.25rem 0;">
    <div style="width:210px;padding:1rem;border-radius:0.5rem;background:#ffffff;border:1px solid #d8dbe3;">
        <p style="margin:0;color:#1c1f26;font-weight:600;">Aa Texto legible</p>
        <p style="margin:0.5rem 0 0;font-size:0.78rem;color:#1c1f26;">#1C1F26 sobre blanco — 16.5:1 ✅ AAA</p>
    </div>
    <div style="width:210px;padding:1rem;border-radius:0.5rem;background:#364fc7;">
        <p style="margin:0;color:#ffffff;font-weight:600;">Aa Texto legible</p>
        <p style="margin:0.5rem 0 0;font-size:0.78rem;color:#ffffff;">Blanco sobre #364FC7 — 6.8:1 ✅ AA</p>
    </div>
    <div style="width:210px;padding:1rem;border-radius:0.5rem;background:#ffffff;border:1px solid #d8dbe3;">
        <p style="margin:0;color:#767676;font-weight:600;">Aa Texto al límite</p>
        <p style="margin:0.5rem 0 0;font-size:0.78rem;color:#767676;">#767676 sobre blanco — 4.5:1 ⚠️ roza el mínimo</p>
    </div>
    <div style="width:210px;padding:1rem;border-radius:0.5rem;background:#ffffff;border:1px solid #d8dbe3;">
        <p style="margin:0;color:#999999;font-weight:600;">Aa Texto insuficiente</p>
        <p style="margin:0.5rem 0 0;font-size:0.78rem;color:#999999;">#999999 sobre blanco — 2.85:1 ❌ no cumple</p>
    </div>
</div>

Fíjate en la última tarjeta: ese gris claro cuesta de leer incluso en una pantalla de buena calidad y con buena luz. Ahora imagina leerlo con el sol dando en la pantalla del móvil, o con cataratas incipientes, y entenderás por qué WCAG no es un capricho burocrático. Cumplir estos mínimos no garantiza que el diseño sea bonito, pero sí garantiza que personas con baja visión —o cualquiera en malas condiciones de luz— puedan leer el contenido sin esfuerzo. En la práctica, no hace falta calcular estas ratios a mano: herramientas como el contraste de DevTools del navegador, WebAIM Contrast Checker o los plugins de contraste de Figma lo comprueban al instante mientras diseñas.

## No dependas solo del color

Una regla de accesibilidad frecuentemente olvidada es que el color nunca debe ser el único medio para transmitir una información. Alrededor de un 8% de los hombres tiene alguna forma de daltonismo, y para ellos un simple cambio de color (de gris a rojo, por ejemplo) puede pasar completamente desapercibido. Por eso, un campo de formulario con error debería mostrar también un icono y un mensaje de texto, y un gráfico con varias series de datos debería diferenciarlas también por forma o patrón, no solo por tono. Diseñar así no solo ayuda a personas con daltonismo: también mejora la experiencia en pantallas de mala calidad o con brillo alto, donde los matices de color se pierden con facilidad.

## Color y significado cultural

El significado de un color no es universal: es, en gran parte, aprendido. En muchas culturas occidentales el rojo se asocia a peligro o error, pero en otras tradiciones (por ejemplo en gran parte de la cultura china) el rojo simboliza buena suerte y celebración, no alarma. Lo mismo ocurre con el blanco, asociado a pureza en Occidente y a luto en algunas culturas asiáticas. Un producto con alcance internacional no puede asumir que sus convenciones de color se van a interpretar igual en todas partes; conviene validar la paleta con usuarios de cada mercado relevante, y apoyar siempre el significado del color con texto o iconografía que no dependa de esa interpretación cultural.

## Modo oscuro: la misma disciplina, otro punto de partida

Diseñar un modo oscuro no consiste en invertir los colores del modo claro: los grises oscuros puros (`#000000` de fondo con texto blanco puro) generan un contraste tan alto que produce fatiga visual y un efecto de "halo" alrededor del texto. La práctica habitual es usar grises muy oscuros pero no negros absolutos (por ejemplo `#121212` o `#1a1b1e`) como fondo, reducir ligeramente la saturación de los colores de marca (los tonos muy saturados "vibran" sobre fondos oscuros) y volver a comprobar cada ratio de contraste desde cero, porque un par que cumplía AA en modo claro no cumple automáticamente en modo oscuro.
