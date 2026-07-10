---
title: 'Wireframing y prototipado'
description: 'Entiende para qué sirve cada nivel de fidelidad y cuándo usar wireframes, mockups o prototipos interactivos.'
category: ux
order: 4
exercises:
    - id: wireframing-mc-1
      type: multiple-choice
      prompt: '¿Cuál es el propósito principal de un wireframe de baja fidelidad?'
      allowMultiple: false
      options:
          - text: 'Mostrar los colores y la tipografía final del producto.'
            correct: false
            explanation: 'Eso corresponde a un mockup de alta fidelidad, no a un wireframe de baja fidelidad.'
          - text: 'Definir rápidamente la estructura, el contenido y la disposición de los elementos sin distraer con el diseño visual.'
            correct: true
            explanation: 'Correcto. Un wireframe se centra en el «qué» y el «dónde», dejando el «cómo se ve» para etapas posteriores.'
          - text: 'Sustituir por completo la necesidad de hacer un diseño visual más adelante.'
            correct: false
            explanation: 'El wireframe es un paso intermedio, no un sustituto del diseño visual final.'
    - id: wireframing-order-1
      type: ordering
      prompt: 'Ordena estas etapas del proceso de diseño según su nivel de fidelidad, de menor a mayor.'
      items:
          - 'Bocetos en papel (sketches)'
          - 'Wireframes de baja fidelidad'
          - 'Mockups de alta fidelidad'
          - 'Prototipo interactivo navegable'
      explanation: 'Aumentar la fidelidad gradualmente permite validar ideas de estructura antes de invertir tiempo en detalles visuales o de interacción que tocaría rehacer si la estructura cambia.'
    - id: wireframing-free-1
      type: free-text
      prompt: '¿Cómo se llama al artefacto de diseño que simula la interacción real de un producto (se puede navegar, hacer clic en botones, etc.) sin necesidad de programarlo?'
      acceptedAnswers:
          - 'prototipo'
          - 'prototipo interactivo'
          - 'prototype'
      explanation: 'Un prototipo interactivo conecta pantallas estáticas mediante enlaces y transiciones para simular el flujo real, permitiendo probarlo con usuarios antes de escribir una sola línea de código.'
    - id: wireframing-mc-2
      type: multiple-choice
      prompt: 'Un equipo quiere validar en dos días si el orden de los pasos de un flujo de compra tiene sentido para los usuarios, antes de decidir el diseño visual. ¿Qué opción es más eficiente?'
      allowMultiple: false
      options:
          - text: 'Diseñar mockups de alta fidelidad con todos los colores y textos finales.'
            correct: false
            explanation: 'Es mucho trabajo para una pregunta que solo trata sobre la estructura del flujo, no sobre el aspecto visual.'
          - text: 'Hacer wireframes de baja fidelidad y probarlos con algunos usuarios.'
            correct: true
            explanation: 'Correcto. La baja fidelidad permite iterar rápido y aprender sobre la estructura sin invertir tiempo en detalles que aún podrían cambiar.'
          - text: 'Esperar a tener el producto programado para ver si funciona.'
            correct: false
            explanation: 'Esperar hasta el desarrollo hace que cualquier corrección sea mucho más cara y lenta que corregirla en wireframes.'
---

## Bocetar antes de pulir

Wireframing es el proceso de representar la estructura de una pantalla —qué elementos hay, en qué orden y con qué prioridad— usando formas simples: rectángulos, líneas y texto de relleno, casi siempre en escala de grises. La idea es deliberada: al eliminar el color, las imágenes finales y la tipografía cuidada, el equipo (y las personas que prueban el diseño) se concentra en si la estructura y el contenido tienen sentido, sin que un buen acabado visual "tape" un problema de fondo, como un formulario mal ordenado o un botón de llamada a la acción poco visible.

## Niveles de fidelidad

Es útil pensar el proceso de diseño como una escalera de fidelidad creciente. Se empieza con **bocetos en papel**, rapidísimos y desechables, para explorar muchas ideas en poco tiempo. Se sigue con **wireframes digitales de baja fidelidad**, ya con medidas y jerarquía más precisas. Después llegan los **mockups de alta fidelidad**: el diseño visual definitivo, con colores, tipografías e imágenes reales. Y finalmente el **prototipo interactivo**, que conecta esas pantallas con transiciones y zonas clicables para simular la experiencia real de uso. Subir de fidelidad demasiado pronto es un error común: se invierte tiempo puliendo detalles visuales de una estructura que quizás haya que rehacer por completo tras la primera prueba con usuarios.

## Prototipar para aprender, no para impresionar

El prototipo no es un entregable decorativo: es una herramienta para aprender antes de programar. Un prototipo navegable permite poner el diseño delante de usuarios reales y observar si consiguen completar tareas, sin haber escrito una sola línea de código de producción. Esto reduce enormemente el coste de los errores: es mucho más barato descubrir en un prototipo que un flujo de pago tiene un paso confuso que descubrirlo después del lanzamiento, cuando corregirlo implica tocar código, hacer pruebas de regresión y desplegar de nuevo.
