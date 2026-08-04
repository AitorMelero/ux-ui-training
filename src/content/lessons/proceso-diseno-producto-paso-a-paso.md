---
title: 'Cómo afrontar un proyecto de diseño UX/UI paso a paso'
description: 'Un proceso general, aplicable a casi cualquier producto digital, para pasar de un problema o una idea inicial a un diseño validado: descubrimiento, arquitectura, wireframes, UI y testing.'
category: projects
level: beginner
order: 1
subcategory: proceso-general
exercises:
    - id: proceso-general-mc-1
      type: multiple-choice
      prompt: '¿Por qué conviene empezar un proyecto de diseño por el descubrimiento (entender el problema y a los usuarios) antes que por las pantallas?'
      allowMultiple: false
      options:
          - text: 'Porque diseñar pantallas sin entender el problema real suele producir soluciones bonitas que no resuelven la necesidad de nadie, y ese error se detecta tarde y sale caro corregirlo.'
            correct: true
            explanation: 'Correcto. Cuanto antes en el proceso se detecta que se está resolviendo el problema equivocado, más barato sale corregirlo. Empezar por descubrimiento reduce ese riesgo.'
          - text: 'Porque así se pueden evitar las reuniones con desarrollo.'
            correct: false
            explanation: 'El descubrimiento no sustituye la coordinación con desarrollo; de hecho, suele incluir a perfiles técnicos para entender restricciones desde el principio.'
          - text: 'Porque los clientes siempre piden ver wireframes antes que nada.'
            correct: false
            explanation: 'No es una cuestión de orden de entregables para el cliente, sino de reducir el riesgo de construir la solución equivocada.'
    - id: proceso-general-mc-2
      type: multiple-choice
      prompt: 'Un equipo salta directamente de la idea inicial a diseñar la interfaz visual de alta fidelidad, sin pasar por wireframes ni validar el flujo. ¿Cuál es el riesgo principal?'
      allowMultiple: false
      options:
          - text: 'Que se invierta tiempo puliendo detalles visuales de un flujo que, tras probarlo con usuarios, resulta confuso o innecesario y hay que rehacer.'
            correct: true
            explanation: 'Correcto. La fidelidad visual alta es cara de producir y de cambiar; validar el flujo con wireframes de baja fidelidad primero permite iterar rápido y barato antes de invertir en el acabado final.'
          - text: 'Que el diseño final tenga demasiados colores.'
            correct: false
            explanation: 'El número de colores no depende de si se pasó o no por wireframes; el riesgo real es de tiempo y coste de iteración sobre un flujo no validado.'
          - text: 'Que el equipo de desarrollo tarde menos en implementarlo.'
            correct: false
            explanation: 'Al contrario: si el flujo cambia después de implementado por no haberse validado antes, el coste de desarrollo aumenta, no disminuye.'
    - id: proceso-general-free-1
      type: free-text
      prompt: 'La técnica de crear versiones simplificadas y de bajo detalle visual de una pantalla, usadas para validar un flujo antes de invertir en el diseño visual final, se llama...'
      acceptedAnswers:
          - 'wireframes'
          - 'wireframing'
          - 'wireframe'
      explanation: 'Los wireframes representan la estructura y el flujo de una pantalla sin detalle visual (color, tipografía final, imágenes), lo que permite validar si la solución funciona antes de invertir tiempo en pulirla.'
---

## Un proceso, no una plantilla rígida

Cada proyecto de diseño UX/UI es distinto —no es lo mismo diseñar un blog personal que una aplicación de gestión de proyectos empresarial—, pero casi todos atraviesan las mismas fases generales, en distinto orden de profundidad según el contexto. Conocer este esqueleto común es útil precisamente porque permite adaptarlo: en un proyecto pequeño algunas fases duran horas, en uno grande pueden durar semanas, pero saltarse una fase entera suele salir caro más adelante. Esta lección describe ese proceso general; las siguientes lecciones de esta categoría lo aplican a tipos de proyecto concretos.

## Fase 1: Descubrimiento y definición del problema

Antes de abrir cualquier herramienta de diseño, conviene responder: ¿qué problema resolvemos, para quién, y cómo sabremos si lo hemos resuelto? Esto incluye hablar con usuarios reales o revisar datos existentes, entender las restricciones de negocio y técnicas, y definir un objetivo medible. Saltarse esta fase es la causa más habitual de proyectos que entregan un producto "correcto" pero que nadie necesitaba.

## Fase 2: Arquitectura de la información y flujos

Con el problema claro, toca decidir qué contenido y funcionalidades existen y cómo se organizan: qué pantallas hay, cómo se llega de una a otra, qué es lo más importante en cada una. Aquí es donde se dibujan mapas del sitio, diagramas de flujo de usuario y, si el proyecto lo requiere, un mapa de customer journey. El objetivo es tener claro el esqueleto antes de vestirlo.

## Fase 3: Wireframes y prototipado de baja fidelidad

Los wireframes traducen la arquitectura en pantallas concretas, pero sin detalle visual: cajas, texto de relleno, jerarquía aproximada. Sirven para validar que el flujo tiene sentido —idealmente probándolo con usuarios reales o compañeros que no conocen el proyecto— antes de invertir tiempo en el acabado visual. Es la fase más barata para equivocarse y corregir.

## Fase 4: Diseño de interfaz (UI) y sistema visual

Una vez validado el flujo, se aplica el lenguaje visual: tipografía, color, espaciado, componentes reutilizables. En proyectos con cierta envergadura, esta fase se apoya en un sistema de diseño (ver la lección sobre librerías de componentes de esta misma categoría) para mantener la consistencia sin rediseñar cada pantalla desde cero.

## Fase 5: Testing, iteración y entrega

Antes y después de implementar, el diseño se contrasta con usuarios reales (tests de usabilidad, métricas de uso una vez lanzado) y se ajusta. El proceso no termina en la entrega a desarrollo: los mejores equipos tratan el diseño como algo que se revisa y mejora con datos reales, no como un documento cerrado.

## Un ejemplo rápido

Imagina que te piden diseñar una función para que los usuarios de una app puedan guardar artículos para leer después. El proceso completo sería: (1) descubrir si el problema real es "no encuentro lo que ya leí" o "no tengo tiempo de leerlo ahora"; (2) decidir dónde vive esa lista guardada en la navegación; (3) dibujar wireframes de cómo se guarda un artículo y cómo se accede a la lista; (4) diseñar visualmente el botón de guardar y la pantalla de la lista; (5) probarlo con unos pocos usuarios y ajustar antes de lanzarlo a todos.

## Recursos para profundizar

- [Nielsen Norman Group](https://www.nngroup.com) — artículos de investigación UX aplicados a procesos de diseño reales.
- [IDEO Design Kit](https://www.designkit.org) — métodos concretos para cada fase del proceso, especialmente descubrimiento.
