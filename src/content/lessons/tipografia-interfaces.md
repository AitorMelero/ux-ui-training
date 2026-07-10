---
title: 'Tipografía en interfaces'
description: 'Domina jerarquía, escalas y legibilidad tipográfica para que el texto de tu interfaz se lea sin esfuerzo.'
category: ui
level: beginner
order: 2
exercises:
    - id: tipografia-mc-1
      type: multiple-choice
      prompt: '¿Qué se recomienda generalmente para el cuerpo de texto de una interfaz web pensada para lectura prolongada?'
      allowMultiple: false
      options:
          - text: 'Un tamaño base de al menos 16px, con una altura de línea generosa (aprox. 1.4 a 1.6 veces el tamaño de fuente).'
            correct: true
            explanation: 'Correcto. Por debajo de 16px el texto obliga a acercarse a la pantalla, y una altura de línea ajustada dificulta seguir la lectura de una línea a la siguiente.'
          - text: 'Un tamaño base de 10px para aprovechar mejor el espacio de la pantalla.'
            correct: false
            explanation: '10px es demasiado pequeño para lectura cómoda en la mayoría de dispositivos y perfiles de usuario.'
          - text: 'Una altura de línea de 1.0 (sin espacio extra entre líneas) para que el texto ocupe menos alto.'
            correct: false
            explanation: 'Una altura de línea tan ajustada hace que las líneas se sientan apelmazadas y dificulta seguir la lectura.'
    - id: tipografia-mc-2
      type: multiple-choice
      prompt: "¿Cuál es la diferencia principal entre una tipografía 'serif' y una 'sans-serif'?"
      allowMultiple: false
      options:
          - text: 'Las serif tienen pequeños remates o trazos decorativos al final de las letras; las sans-serif no.'
            correct: true
            explanation: "Correcto. 'Sans-serif' significa literalmente 'sin remates'. Las sans-serif suelen preferirse en pantalla por su claridad a tamaños pequeños."
          - text: 'Las serif solo existen en mayúsculas.'
            correct: false
            explanation: 'Ambas familias tipográficas incluyen mayúsculas y minúsculas; esa no es la diferencia entre ellas.'
          - text: 'Las sans-serif son siempre más grandes que las serif.'
            correct: false
            explanation: 'El tamaño es una propiedad independiente del estilo tipográfico; no distingue a una familia de la otra.'
    - id: tipografia-order-1
      type: ordering
      prompt: 'Ordena estos niveles de una escala tipográfica típica, del texto más pequeño al más grande.'
      items:
          - 'Texto auxiliar / leyenda (caption)'
          - 'Cuerpo de texto (body)'
          - 'Subtítulo (h3/h4)'
          - 'Título principal (h1)'
      explanation: 'Una escala tipográfica bien definida crea jerarquía visual clara: el ojo sabe instintivamente qué leer primero según el tamaño relativo de cada nivel.'
    - id: tipografia-free-1
      type: free-text
      prompt: '¿Cómo se llama la medida (normalmente en píxeles, ems o un múltiplo del tamaño de fuente) que indica el espacio vertical entre líneas consecutivas de texto?'
      acceptedAnswers:
          - 'interlineado'
          - 'altura de linea'
          - 'altura de línea'
          - 'line height'
          - 'line-height'
      explanation: "El interlineado (line-height) controla cuánto 'respiran' las líneas de texto entre sí; muy poco y el texto se ve apelmazado, demasiado y pierde cohesión visual."
---

## La tipografía es interfaz, no decoración

En una interfaz digital, la inmensa mayoría de la información se transmite mediante texto, así que la tipografía es, en la práctica, una de las herramientas de diseño más importantes que existen, aunque a menudo pase desapercibida cuando está bien resuelta (y salte a la vista en cuanto falla). Elegir bien una tipografía no es solo cuestión de estilo: afecta directamente a la velocidad de lectura, a la comprensión y al esfuerzo que le exige a los ojos del usuario.

## Legibilidad: tamaño, interlineado y longitud de línea

Tres factores determinan si un bloque de texto se lee con comodidad. El **tamaño** de fuente debe adaptarse al contexto: para cuerpo de texto en pantalla, 16px suele considerarse el mínimo razonable para lectura prolongada, aunque el tamaño ideal depende también de la tipografía elegida. El **interlineado** (o _line-height_), el espacio vertical entre líneas, necesita ser lo bastante generoso como para que el ojo distinga claramente una línea de la siguiente sin perderse; un valor entre 1.4 y 1.6 veces el tamaño de fuente suele funcionar bien para párrafos. Y la **longitud de línea**, el número de caracteres por línea, no debería ser ni demasiado corta (obliga a saltar de línea constantemente) ni demasiado larga (el ojo pierde la línea al volver al margen izquierdo); entre 50 y 75 caracteres por línea es una referencia habitual.

La diferencia entre un interlineado ajustado y uno cómodo se nota más viéndola que describiéndola:

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;">
    <div style="flex:1;min-width:220px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.5rem;font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#e03131;">line-height: 1.0 (demasiado ajustado)</p>
        <p style="margin:0;line-height:1.0;">El interlineado ajustado hace que las líneas se sientan apelmazadas y el ojo tiene dificultad para saltar de una línea a la siguiente sin perderse.</p>
    </div>
    <div style="flex:1;min-width:220px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.5rem;font-size:0.78rem;font-weight:700;text-transform:uppercase;color:#2f9e44;">line-height: 1.5 (recomendado)</p>
        <p style="margin:0;line-height:1.5;">Un interlineado generoso da a cada línea espacio para respirar, y el ojo encuentra fácilmente el inicio de la siguiente línea al terminar de leer.</p>
    </div>
</div>

## Jerarquía con una escala tipográfica

Una interfaz rara vez usa un solo tamaño de texto: usa una **escala tipográfica**, un conjunto limitado y coherente de tamaños (por ejemplo 12, 14, 16, 20, 24, 32px) que se reutiliza en toda la aplicación para crear jerarquía visual. El título más importante de una pantalla debe destacar claramente sobre los subtítulos, y estos sobre el cuerpo de texto, de modo que el usuario pueda escanear la pantalla y entender en segundos qué es lo más importante sin tener que leer cada palabra. Limitar la escala a pocos tamaños (en vez de improvisar un tamaño distinto en cada pantalla) también facilita mantener consistencia cuando el producto crece y lo trabajan varias personas.

Así se ve una escala tipográfica típica aplicada de menor a mayor peso visual:

<div style="margin:1.25rem 0;">
    <p style="margin:0 0 0.5rem;font-size:0.75rem;color:#868e96;">Caption · 12px / regular</p>
    <p style="margin:0 0 0.75rem;font-size:1rem;color:#1c1f26;">Cuerpo de texto · 16px / regular</p>
    <p style="margin:0 0 0.75rem;font-size:1.25rem;font-weight:600;color:#1c1f26;">Subtítulo · 20px / semibold</p>
    <p style="margin:0;font-size:2rem;font-weight:700;color:#1c1f26;">Título principal · 32px / bold</p>
</div>

Nota cómo cada nivel combina **tamaño y peso** (regular, semibold, bold): subir solo el tamaño sin ajustar el peso, o solo el peso sin ajustar el tamaño, produce una jerarquía más débil que combinar ambas variables a la vez.

## Serif, sans-serif y el peso de la fuente

Además del tamaño, la propia forma de la letra transmite personalidad y afecta a la legibilidad en distintos contextos:

<div style="display:flex;flex-wrap:wrap;gap:1.5rem;margin:1.25rem 0;">
    <div style="flex:1;min-width:200px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.35rem;font-family:Georgia, 'Times New Roman', serif;font-size:1.5rem;">Serif Aa</p>
        <p style="margin:0;font-size:0.8rem;color:#495057;">Remates decorativos; asociada a lo editorial e impreso.</p>
    </div>
    <div style="flex:1;min-width:200px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.35rem;font-family:Arial, Helvetica, sans-serif;font-size:1.5rem;">Sans-serif Aa</p>
        <p style="margin:0;font-size:0.8rem;color:#495057;">Sin remates; más nítida en pantallas pequeñas y a tamaños reducidos.</p>
    </div>
    <div style="flex:1;min-width:200px;padding:1rem;border-radius:0.5rem;border:1px solid #d8dbe3;">
        <p style="margin:0 0 0.35rem;font-family:'Courier New', monospace;font-size:1.5rem;">Monoespaciada Aa</p>
        <p style="margin:0;font-size:0.8rem;color:#495057;">Todos los caracteres ocupan el mismo ancho; ideal para código o datos tabulares.</p>
    </div>
</div>

## Cuántas tipografías usar (y por qué no más)

Un error habitual en quien empieza es mezclar demasiadas familias tipográficas en una misma interfaz. La convención más segura es limitarse a una o dos familias: una para texto general y, como mucho, otra distinta para títulos o para elementos muy concretos (por ejemplo una monoespaciada para fragmentos de código). Cada familia adicional multiplica el trabajo de mantener consistencia —pesos, tamaños, licencias, tiempos de carga de la fuente— sin aportar claridad proporcional al usuario. Si necesitas más variedad, casi siempre es mejor conseguirla variando el peso (regular, medium, bold) y el tamaño dentro de la misma familia que añadiendo una tipografía nueva.
