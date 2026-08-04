---
title: 'Barra lateral (Sidebar)'
description: 'La navegación persistente para aplicaciones con muchas secciones: cuándo usarla, colapsarla o convertirla en menú móvil.'
category: components
level: intermediate
order: 12
subcategory: navegacion
exercises:
    - id: sidebar-mc-1
      type: multiple-choice
      prompt: '¿En qué tipo de producto tiene más sentido una barra lateral (sidebar) de navegación frente a una cabecera horizontal?'
      allowMultiple: false
      options:
          - text: 'En aplicaciones con muchas secciones de primer nivel (paneles de administración, herramientas de productividad), donde una fila horizontal no tendría espacio suficiente para todas.'
            correct: true
            explanation: 'Correcto. La disposición vertical de una barra lateral escala mucho mejor a docenas de secciones que una fila horizontal, que se satura enseguida.'
          - text: 'En cualquier tipo de sitio web, sin excepción, porque siempre es superior a una cabecera horizontal.'
            correct: false
            explanation: 'Para sitios de marketing o con pocas secciones, una cabecera horizontal suele ser más apropiada y ocupa menos espacio permanente de la pantalla.'
          - text: 'Únicamente cuando el contenido principal no necesita usar todo el ancho de la pantalla.'
            correct: false
            explanation: 'La decisión de usar una barra lateral depende de la cantidad y estructura de las secciones a navegar, no del ancho que ocupe el contenido principal.'
    - id: sidebar-mc-2
      type: multiple-choice
      prompt: '¿Qué patrón es habitual para adaptar una barra lateral de escritorio a una pantalla de móvil estrecha?'
      allowMultiple: false
      options:
          - text: 'Ocultarla por defecto y mostrarla como un panel deslizante (drawer) que se abre con un botón de menú, en lugar de restarle espacio permanente al contenido.'
            correct: true
            explanation: 'Correcto. En pantallas estrechas, mantener la barra lateral siempre visible dejaría muy poco espacio para el contenido principal; convertirla en un panel que se abre bajo demanda resuelve ese problema.'
          - text: 'Mantenerla exactamente igual que en escritorio, con el mismo ancho fijo en píxeles.'
            correct: false
            explanation: 'Un ancho fijo pensado para escritorio ocuparía una proporción excesiva de una pantalla de móvil.'
          - text: 'Eliminar por completo la navegación en dispositivos móviles.'
            correct: false
            explanation: 'La navegación sigue siendo necesaria en móvil; lo que cambia es cómo se presenta (colapsada, en un drawer), no que desaparezca.'
    - id: sidebar-order-1
      type: ordering
      prompt: 'Ordena estos estados de una barra lateral colapsable, del más expandido al más compacto.'
      items:
          - 'Expandida: icono y texto de cada sección visibles'
          - 'Colapsada: solo iconos, con el texto disponible en un tooltip al pasar el ratón'
          - 'Oculta como drawer: no visible hasta que se abre con un botón de menú (típico en móvil)'
      explanation: 'Ofrecer estos niveles de compactación permite que la misma navegación se adapte tanto a pantallas grandes (donde puede permanecer expandida) como a espacios reducidos (colapsada o como panel bajo demanda).'
---

## Por qué existe: navegación persistente para productos complejos

Una barra lateral (sidebar) es un panel de navegación vertical, normalmente fijo en un lateral de la pantalla, que da acceso a las secciones principales de una aplicación. Es el patrón preferido en productos con muchas áreas funcionales —paneles de administración, herramientas de gestión, editores— porque su disposición vertical escala mucho mejor que una barra horizontal cuando hay más de seis o siete secciones que mostrar.

## Anatomía de una barra lateral

<div style="display:flex;margin:1.25rem 0;border:1px solid #d8dbe3;border-radius:0.5rem;overflow:hidden;max-width:28rem;">
    <nav style="width:9rem;background:#f8f9fb;padding:1rem 0.5rem;font-size:0.85rem;">
        <p style="margin:0 0 0.75rem;padding:0.4rem 0.5rem;border-radius:0.4rem;background:#364fc7;color:#fff;font-weight:600;">📊 Panel</p>
        <p style="margin:0 0 0.75rem;padding:0.4rem 0.5rem;color:#495057;">👥 Usuarios</p>
        <p style="margin:0 0 0.75rem;padding:0.4rem 0.5rem;color:#495057;">⚙️ Ajustes</p>
    </nav>
    <div style="flex:1;padding:1.5rem;color:#adb5bd;font-size:0.8rem;">contenido principal...</div>
</div>

- **Cabecera de la barra (opcional)**: logotipo o selector de espacio de trabajo, en la parte superior.
- **Lista de secciones**: cada entrada con icono, texto y su propio estado activo/hover.
- **Sección activa**: marcada con un fondo o borde distintivo, indicando en qué parte de la aplicación se está.
- **Control de colapso (opcional)**: un botón para reducir la barra a solo iconos y ganar espacio para el contenido.

## Buenas prácticas de diseño

- **Marca siempre la sección activa de forma inequívoca**, con suficiente contraste respecto al resto de entradas.
- **Combina icono y texto en cada entrada**, no solo iconos: un icono sin texto obliga a memorizar su significado, sobre todo en aplicaciones con muchas secciones poco familiares.
- **Ofrece un modo colapsado a solo iconos** en pantallas donde el espacio horizontal es limitado, mostrando el texto en un tooltip al pasar el cursor.
- **En pantallas estrechas, conviértela en un panel deslizante (drawer)** que se abre bajo demanda, en lugar de restarle espacio permanente al contenido principal.
- **Agrupa las secciones relacionadas con espaciado o separadores**, en lugar de una lista plana larga sin ninguna jerarquía visual.
- **Debe ser completamente navegable por teclado**, incluyendo el atajo para abrir/cerrar el panel en su versión móvil.
