---
title: 'Accesibilidad más allá del color: teclado, lectores de pantalla y ARIA'
description: 'El contraste de color es solo el principio: aprende navegación por teclado, fundamentos de lectores de pantalla y cuándo (y cuándo no) usar ARIA.'
category: ui
level: advanced
order: 8
exercises:
    - id: a11y-mc-1
      type: multiple-choice
      prompt: 'Un menú desplegable personalizado solo puede abrirse haciendo clic con el ratón; no responde a las teclas Enter, flechas ni Escape. ¿Qué principio de accesibilidad incumple?'
      allowMultiple: false
      options:
          - text: 'Operabilidad por teclado: toda la funcionalidad interactiva debe poder usarse sin ratón, con teclado únicamente.'
            correct: true
            explanation: 'Correcto. Las personas que no pueden usar un ratón (por discapacidad motriz, o porque usan un lector de pantalla, que navega principalmente por teclado) quedan completamente excluidas de esa funcionalidad si depende solo del clic.'
          - text: 'Contraste de color insuficiente.'
            correct: false
            explanation: 'El problema descrito no tiene relación con el contraste de color; es un problema de operabilidad por teclado.'
          - text: 'Tamaño de fuente demasiado pequeño.'
            correct: false
            explanation: 'El tamaño de fuente no es el problema descrito en este escenario; el problema es la dependencia exclusiva del ratón para operar el componente.'
    - id: a11y-mc-2
      type: multiple-choice
      prompt: '¿Cuál es la primera regla al usar atributos ARIA (Accessible Rich Internet Applications)?'
      allowMultiple: false
      options:
          - text: 'Usar siempre un elemento HTML nativo semánticamente correcto (como <button> o <nav>) cuando exista uno, y recurrir a ARIA solo cuando no hay equivalente nativo posible.'
            correct: true
            explanation: 'Correcto. Esta es literalmente la "primera regla de ARIA": un <button> nativo ya tiene foco de teclado, rol semántico y comportamiento de Enter/Espacio integrados de forma gratuita y fiable; recrear eso con un <div role="button"> a mano es más trabajo y más propenso a errores.'
          - text: 'Añadir tantos atributos ARIA como sea posible a cada elemento, cuantos más, mejor.'
            correct: false
            explanation: 'Un exceso de ARIA mal aplicado puede empeorar la accesibilidad en lugar de mejorarla, sobrescribiendo semántica que el navegador ya interpretaba correctamente.'
          - text: 'Usar ARIA únicamente en aplicaciones móviles, nunca en la web.'
            correct: false
            explanation: 'ARIA es una especificación pensada precisamente para contenido web, incluyendo aplicaciones web complejas, no para aplicaciones móviles nativas.'
    - id: a11y-order-1
      type: ordering
      prompt: 'Ordena estos elementos de una página según el orden en el que normalmente los recorrería la tecla Tab en un formulario de registro bien construido.'
      items:
          - 'Enlace "saltar al contenido principal" (skip link)'
          - 'Campo de nombre'
          - 'Campo de email'
          - 'Botón de enviar el formulario'
      explanation: 'Un buen orden de tabulación sigue la lectura visual y lógica de la página: primero cualquier atajo de accesibilidad como el skip link, después los campos en el orden en que aparecen, y por último las acciones del formulario.'
    - id: a11y-free-1
      type: free-text
      prompt: '¿Cómo se llama la tecnología de asistencia que convierte el contenido de una pantalla en voz sintetizada o braille, y que depende de que el HTML tenga una estructura semántica correcta para funcionar bien?'
      acceptedAnswers:
          - 'lector de pantalla'
          - 'screen reader'
          - 'lectores de pantalla'
      explanation: 'Un lector de pantalla no "ve" el diseño visual: interpreta la estructura semántica del HTML (encabezados, roles, etiquetas, atributos ARIA) para anunciar el contenido, así que una interfaz visualmente perfecta pero mal estructurada por dentro puede ser inutilizable con esta tecnología.'
---

## El contraste es el principio de la accesibilidad, no el final

La lección de color y contraste cubrió una parte importante pero parcial de la accesibilidad: la legibilidad visual. Una interfaz puede tener un contraste perfecto y seguir siendo completamente inaccesible para una persona que no puede usar el ratón, o que depende de un lector de pantalla para navegar. Esta lección cubre esas dos dimensiones adicionales, esenciales para cualquier producto que aspire a ser usable por el rango completo de personas que puedan necesitarlo.

## Navegación por teclado: el estándar mínimo

Toda funcionalidad interactiva de una interfaz debería poder operarse completamente con teclado, sin depender del ratón. Esto no es una petición marginal: personas con discapacidad motriz que no pueden manejar un ratón con precisión, personas que usan lectores de pantalla (que navegan principalmente con teclado) y usuarios avanzados que simplemente prefieren la velocidad del teclado dependen de ello. Las teclas fundamentales que cualquier componente interactivo personalizado debería soportar son: **Tab** (mover el foco al siguiente elemento interactivo), **Shift+Tab** (al anterior), **Enter o Espacio** (activar el elemento con foco) y **Escape** (cerrar un menú, modal o desplegable abierto). Cuando un equipo construye un componente personalizado (un desplegable, un selector de fecha, un modal) reimplementando desde cero lo que un elemento HTML nativo ya resolvía, es muy fácil olvidar alguna de estas teclas, dejando ese componente completamente inoperable para quien no usa ratón.

## Orden de tabulación y "skip links"

El orden en el que la tecla Tab recorre los elementos de una página (el **orden de tabulación**) debería coincidir con el orden lógico y visual del contenido; un orden de tabulación que salta de forma errática de un extremo a otro de la pantalla confunde profundamente a quien navega sin ver la pantalla completa de un vistazo. En páginas con navegación extensa antes del contenido principal, es una práctica recomendada incluir un **skip link** ("saltar al contenido principal"), normalmente invisible hasta que recibe el foco, que permite a alguien que navega por teclado evitar tener que pasar por decenas de enlaces de menú en cada página antes de llegar al contenido que realmente le interesa.

## Lectores de pantalla: HTML semántico como base

Un **lector de pantalla** (como VoiceOver en Apple, NVDA o JAWS en Windows, TalkBack en Android) convierte el contenido de una interfaz en voz sintetizada o braille. No "ve" el diseño visual: interpreta la estructura semántica subyacente del HTML. Esto significa que una interfaz que use elementos genéricos (`<div>`, `<span>`) para todo, en lugar de elementos semánticos apropiados (`<button>`, `<nav>`, `<header>`, encabezados `<h1>`-`<h6>` en orden jerárquico), resultará en una experiencia confusa o directamente inutilizable con un lector de pantalla, por muy bien que se vea visualmente. Los encabezados merecen mención especial: muchas personas usuarias de lectores de pantalla navegan saltando de encabezado en encabezado para hacerse una idea rápida de la estructura de la página, así que usar encabezados solo por su tamaño visual (en lugar de por su nivel jerárquico real) rompe esa forma de navegación.

## ARIA: un complemento, no un sustituto de HTML semántico

**ARIA** (Accessible Rich Internet Applications) es un conjunto de atributos que permiten añadir información semántica a elementos que no la tienen de forma nativa, útil sobre todo para construir componentes de interfaz complejos que no existen como elementos HTML estándar (pestañas, árboles de navegación, tablas de datos interactivas). La primera y más importante regla de ARIA es: **si existe un elemento HTML nativo que ya resuelve lo que necesitas, úsalo en lugar de recrearlo con ARIA**. Un `<button>` nativo ya llega con foco de teclado, activación por Enter y Espacio, y el rol correcto anunciado por cualquier lector de pantalla, de fábrica y sin escribir una sola línea de JavaScript. Reconstruir ese mismo comportamiento con un `<div role="button" tabindex="0">` exige reimplementar manualmente cada una de esas piezas, y es fácil que algo quede incompleto. ARIA mal usado —etiquetas contradictorias, roles aplicados a elementos que ya tenían un rol nativo distinto, atributos `aria-*` añadidos sin entender su efecto— puede empeorar activamente la experiencia con lector de pantalla, así que la recomendación general es: HTML semántico primero, ARIA solo cuando de verdad no hay alternativa nativa.

## Texto alternativo en imágenes

Toda imagen que aporte información debe tener un atributo `alt` que describa su contenido o función, para que un lector de pantalla pueda comunicarlo. La excepción son las imágenes puramente decorativas (un adorno visual sin significado propio), que deberían llevar `alt=""` (vacío, no ausente) para que el lector de pantalla las ignore explícitamente en lugar de intentar describir un archivo sin contenido informativo relevante, o peor, leer en voz alta el nombre del archivo.
