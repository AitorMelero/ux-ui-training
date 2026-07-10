---
title: 'Arquitectura de la información'
description: 'Organiza contenido y navegación para que las personas encuentren lo que buscan sin esfuerzo.'
category: ux
order: 3
exercises:
    - id: arquitectura-mc-1
      type: multiple-choice
      prompt: '¿Qué es la arquitectura de la información (AI)?'
      allowMultiple: false
      options:
          - text: 'La paleta de colores y tipografías que usa un sitio web.'
            correct: false
            explanation: 'Eso pertenece al diseño visual (UI), no a la arquitectura de la información.'
          - text: 'La forma en que se organiza, estructura y etiqueta el contenido para que sea fácil de encontrar y entender.'
            correct: true
            explanation: 'Correcto. La AI define categorías, jerarquías, etiquetas y rutas de navegación, como los planos de un edificio antes de decorarlo.'
          - text: 'El servidor donde se aloja la información de la web.'
            correct: false
            explanation: 'Eso es infraestructura técnica; la arquitectura de la información es un concepto de diseño, no de hosting.'
    - id: arquitectura-free-1
      type: free-text
      prompt: '¿Cómo se llama la técnica de investigación en la que se pide a los usuarios que agrupen tarjetas con contenidos en categorías que tengan sentido para ellos, para ayudar a definir la estructura de un sitio?'
      acceptedAnswers:
          - 'card sorting'
          - 'clasificacion de tarjetas'
          - 'clasificación de tarjetas'
          - 'ordenacion de tarjetas'
          - 'ordenación de tarjetas'
      explanation: 'El card sorting revela cómo agrupan y nombran el contenido los propios usuarios, en lugar de basar la estructura solo en la lógica interna de la empresa.'
    - id: arquitectura-order-1
      type: ordering
      prompt: 'Ordena estos niveles de un menú de navegación de comercio electrónico, del más general al más específico.'
      items:
          - 'Inicio'
          - 'Ropa'
          - 'Ropa de mujer'
          - 'Vestidos'
          - 'Vestido azul de fiesta (ficha de producto)'
      explanation: 'Una buena jerarquía va de lo general a lo específico en pasos predecibles, evitando saltos que obliguen al usuario a adivinar dónde está.'
    - id: arquitectura-mc-2
      type: multiple-choice
      prompt: 'Un usuario está en la página de una zapatilla y no tiene ni idea de en qué categoría del menú está, ni cómo volver atrás sin usar el botón del navegador. ¿Qué elemento de arquitectura de la información falta?'
      allowMultiple: false
      options:
          - text: 'Un breadcrumb (ruta de migas de pan) que muestre la jerarquía actual, como Inicio > Calzado > Zapatillas.'
            correct: true
            explanation: 'Exacto. Los breadcrumbs muestran dónde está el usuario dentro de la jerarquía y le permiten subir de nivel con un clic.'
          - text: 'Más fotos del producto.'
            correct: false
            explanation: 'Más fotos mejorarían la ficha de producto, pero no resuelven el problema de orientación dentro de la estructura del sitio.'
          - text: 'Un vídeo promocional en la página de inicio.'
            correct: false
            explanation: 'No tiene relación con el problema de orientación y navegación descrito.'
---

## Los planos antes que la decoración

Imagina un edificio sin planos: pasillos que no llevan a ninguna parte, puertas sin cartel y ascensores que no sabes a qué planta te llevan. Eso es exactamente lo que sufre un usuario cuando un sitio web o una app carecen de arquitectura de la información (AI). La AI es la disciplina que organiza, estructura y etiqueta el contenido de un producto digital para que las personas puedan encontrar lo que buscan y entender dónde están en todo momento. Se ocupa de decidir qué categorías existen, cómo se llaman, qué contenido va en cada una y cómo se conectan entre sí, todo antes de pensar en colores o tipografías.

## Jerarquías, etiquetas y navegación

Tres piezas sostienen una buena arquitectura de la información. Primero, la **jerarquía**: la estructura de niveles (secciones, subsecciones, páginas) que organiza el contenido de lo general a lo específico. Segundo, el **etiquetado**: los nombres que usamos para cada categoría o enlace, que deben coincidir con el vocabulario mental del usuario y no con la jerga interna de la empresa. Tercero, la **navegación**: los caminos y mecanismos (menús, buscadores, breadcrumbs, enlaces relacionados) que permiten moverse por esa jerarquía. Cuando cualquiera de estas tres piezas falla, el usuario se pierde, aunque el diseño visual sea impecable.

## Cómo se valida una estructura

La arquitectura de la información no se decide por intuición: se valida con usuarios reales. Dos técnicas muy usadas son el **card sorting**, donde se pide a un grupo de personas que agrupe y nombre tarjetas de contenido según su propia lógica (revelando cómo esperan que esté organizado el sitio), y el **tree testing**, donde se comprueba si las personas son capaces de encontrar información concreta navegando solo por una estructura de texto, sin diseño visual de por medio. Ambas técnicas ayudan a detectar, antes de construir nada, si la estructura propuesta tiene sentido para quienes la van a usar de verdad.
