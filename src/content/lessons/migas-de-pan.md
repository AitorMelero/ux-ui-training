---
title: 'Migas de pan (Breadcrumb)'
description: 'El rastro de ubicación jerárquica: cuándo aportan valor y cómo evitar que se conviertan en ruido visual.'
category: components
level: intermediate
order: 10
subcategory: navegacion
exercises:
    - id: breadcrumb-mc-1
      type: multiple-choice
      prompt: '¿En qué tipo de estructura de sitio aportan más valor las migas de pan?'
      allowMultiple: false
      options:
          - text: 'En estructuras jerárquicas de varios niveles de profundidad (categoría > subcategoría > producto), donde ayudan a entender en qué rama del árbol se está y a subir de nivel con un clic.'
            correct: true
            explanation: 'Correcto. Cuantos más niveles de profundidad tenga la navegación, más valor aporta un rastro visible del camino recorrido.'
          - text: 'En una aplicación de una sola pantalla sin ninguna jerarquía de secciones.'
            correct: false
            explanation: 'Sin jerarquía que representar, las migas de pan no tienen ningún camino que mostrar y no aportan valor.'
          - text: 'Únicamente en aplicaciones móviles, nunca en versiones de escritorio.'
            correct: false
            explanation: 'Las migas de pan son útiles en cualquier plataforma con estructura jerárquica profunda, no son exclusivas de una plataforma concreta.'
    - id: breadcrumb-mc-2
      type: multiple-choice
      prompt: '¿Cómo debe representarse el último elemento de las migas de pan, el que indica la página actual?'
      allowMultiple: true
      options:
          - text: 'Sin enlace (no es pulsable), porque ya se está en esa página.'
            correct: true
            explanation: 'Correcto. Convertir el elemento actual en un enlace hacia sí mismo no aporta nada y puede confundir sobre si hay algo que pulsar.'
          - text: 'Marcado como la página actual también para tecnologías de asistencia (por ejemplo, con aria-current), no solo visualmente.'
            correct: true
            explanation: 'Correcto. Sin esa marca semántica, un lector de pantalla no puede comunicar cuál es el elemento actual dentro del rastro.'
          - text: 'Siempre en negrita y de mayor tamaño que el resto de elementos del rastro.'
            correct: false
            explanation: 'No es obligatorio que destaque por tamaño; basta con diferenciarlo de forma clara (por ejemplo, sin subrayado ni color de enlace) y marcarlo semánticamente.'
    - id: breadcrumb-order-1
      type: ordering
      prompt: 'Ordena estos elementos de un breadcrumb típico de una tienda online, del nivel más general al más específico.'
      items:
          - 'Inicio'
          - 'Electrónica'
          - 'Portátiles'
          - 'MacBook Air 13"'
      explanation: 'Las migas de pan siempre van de lo más general (la raíz del sitio) a lo más específico (la página actual), reflejando la jerarquía real de navegación.'
---

## Por qué existen: saber dónde se está sin perderse

Las migas de pan (breadcrumb) muestran el camino jerárquico desde la página de inicio hasta la pantalla actual, como un rastro de "migas" que se pueden seguir hacia atrás. Su valor aparece sobre todo en sitios con estructuras profundas —una tienda online con categorías y subcategorías, una documentación con varios niveles de secciones— donde, sin este rastro, sería fácil perder de vista en qué rama del árbol de contenido se está navegando.

## Anatomía de un breadcrumb

<nav style="margin:1.25rem 0;font-size:0.85rem;" aria-label="Migas de pan">
    <a href="#" style="color:#364fc7;text-decoration:none;">Inicio</a>
    <span style="color:#adb5bd;margin:0 0.4rem;">/</span>
    <a href="#" style="color:#364fc7;text-decoration:none;">Electrónica</a>
    <span style="color:#adb5bd;margin:0 0.4rem;">/</span>
    <a href="#" style="color:#364fc7;text-decoration:none;">Portátiles</a>
    <span style="color:#adb5bd;margin:0 0.4rem;">/</span>
    <span style="color:#1c1f26;font-weight:600;">MacBook Air 13"</span>
</nav>

- **Nivel raíz**: normalmente "Inicio", el punto de partida de la jerarquía.
- **Niveles intermedios**: cada uno es un enlace pulsable a esa categoría o sección padre.
- **Separador**: un símbolo (">" o "/") que marca visualmente la relación jerárquica entre niveles.
- **Elemento actual**: el último de la lista, sin enlace, representando la página en la que se está.

## Buenas prácticas de diseño

- **Úsalas solo cuando reflejan una jerarquía real de varios niveles**, nunca como decoración: si el sitio solo tiene un nivel de profundidad, un breadcrumb no aporta nada.
- **El último elemento nunca debe ser un enlace** ya que representa la página actual; márcalo semánticamente como tal para lectores de pantalla.
- **Mantén el texto de cada nivel corto y coincidente con el título real de esa página**, para que el rastro sea predecible.
- **En jerarquías muy profundas, trunca los niveles intermedios** (por ejemplo, "Inicio / ... / Portátiles / MacBook Air") en lugar de mostrar seis o siete niveles que no caben en una línea.
- **No sustituyen a una navegación principal clara.** Las migas de pan son un complemento para orientarse dentro de una jerarquía, no el mecanismo principal para moverse entre secciones.
- **En móvil, prioriza mostrar solo el nivel padre inmediato** ("← Portátiles") si el espacio horizontal no permite el rastro completo sin cortarlo de forma confusa.
