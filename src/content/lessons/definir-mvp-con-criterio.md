---
title: 'Definir un MVP con criterio'
description: 'Qué es realmente un producto mínimo viable, los errores más comunes al recortar alcance, y cómo diseñar la primera versión de algo sin romper la experiencia.'
category: business
level: intermediate
order: 7
subcategory: priorizacion-decisiones
exercises:
    - id: mvp-mc-1
      type: multiple-choice
      prompt: '¿Cuál de estas definiciones describe mejor qué es un MVP (producto mínimo viable)?'
      allowMultiple: false
      options:
          - text: 'La versión más pequeña de un producto o funcionalidad que ya resuelve el problema principal del usuario de principio a fin, aunque de forma más limitada que la versión final.'
            correct: true
            explanation: 'Correcto. La clave es "viable": el MVP debe completar el recorrido del usuario de forma útil, aunque con menos funciones, no ser una versión rota o a medias del recorrido completo.'
          - text: 'Una versión con errores conocidos que se lanza igualmente porque no hay tiempo de arreglarlos.'
            correct: false
            explanation: 'Un MVP no es sinónimo de "con bugs" ni de "sin terminar de forma descuidada"; es una reducción deliberada de alcance, no una reducción de calidad en lo que sí incluye.'
          - text: 'Un prototipo interno que nunca llega a manos de usuarios reales.'
            correct: false
            explanation: 'Un MVP se diseña precisamente para llegar a usuarios reales y aprender de su comportamiento; un prototipo interno sin usuarios reales sería otra herramienta (validación de diseño), no un MVP.'
    - id: mvp-mc-2
      type: multiple-choice
      prompt: 'Un equipo quiere lanzar un MVP de una funcionalidad de "compartir un documento con otra persona". Consideran quitar la posibilidad de revocar el acceso compartido para lanzar antes. ¿Por qué suele ser un mal recorte?'
      allowMultiple: false
      options:
          - text: 'Porque compromete la confianza y seguridad básica del usuario sobre su propio contenido, que forma parte del problema principal que la funcionalidad promete resolver, no de un "extra" opcional.'
            correct: true
            explanation: 'Correcto. Un buen recorte de MVP elimina funciones secundarias o casos poco frecuentes, no garantías básicas de control y seguridad que el usuario da por sentadas al usar la funcionalidad principal.'
          - text: 'Porque técnicamente es imposible construir "revocar acceso" en una primera versión.'
            correct: false
            explanation: 'No es una cuestión de imposibilidad técnica: es una cuestión de qué se considera parte del problema principal (control sobre quién ve tu contenido) frente a qué es un extra prescindible.'
          - text: 'No es un mal recorte; cualquier función se puede añadir después sin problema.'
            correct: false
            explanation: 'Algunas funciones sí se pueden añadir después sin coste, pero otras —como la seguridad y el control básico— generan expectativas y riesgos desde el primer día, y retrasarlas puede dañar la confianza del usuario mientras tanto.'
    - id: mvp-free-1
      type: free-text
      prompt: 'El error de construir un MVP quitando pasos que el usuario necesita para completar su objetivo (en lugar de quitar variantes o casos poco frecuentes) suele describirse como confundir "mínimo" con...'
      acceptedAnswers:
          - 'incompleto'
          - 'roto'
          - 'a medias'
      explanation: 'Un MVP bien recortado sigue siendo un producto completo de principio a fin, solo que más simple; recortar tanto que el usuario no puede terminar su tarea no es un "mínimo viable", es una versión incompleta que no cumple su propósito.'
---

## "Mínimo" no significa "a medias"

El término MVP (Minimum Viable Product) se malinterpreta con frecuencia como "la versión con menos trabajo posible", lo que lleva a recortar justo las partes que hacían que el producto funcionara de verdad. La palabra clave no es "mínimo", es **viable**: el MVP debe resolver el problema del usuario de principio a fin, aunque sea de la forma más sencilla posible, no dejarlo a medio camino. Un MVP de una app de transporte no es "mostrar el mapa pero no permitir pedir el vehículo"; es permitir pedir el vehículo con las funciones justas, sin florituras.

## Qué recortar y qué no recortar

Al definir el alcance de un MVP, conviene separar dos tipos de cosas:

- **Seguro de recortar**: personalización avanzada, casos de uso poco frecuentes, funciones "de lujo" que mejoran la experiencia pero no son necesarias para completar la tarea principal, soporte para casos límite raros.
- **Peligroso de recortar**: cualquier parte del recorrido principal que el usuario necesita para completar su objetivo, garantías básicas de seguridad y control (como poder deshacer o revocar una acción), y comunicación clara de lo que sí y no incluye esta primera versión.

## El MVP como experimento, no como versión definitiva

Un MVP no se lanza para "terminar el proyecto con menos esfuerzo": se lanza para aprender algo con usuarios reales antes de invertir en construir la versión completa. Esto cambia lo que hay que medir: no basta con lanzar y pasar a lo siguiente, hace falta definir de antemano qué se va a observar (¿la gente completa el flujo?, ¿vuelve a usarlo?, ¿pide la función que se dejó fuera?) para decidir, con datos, si merece la pena seguir invirtiendo en esa dirección o cambiar de rumbo.

## Comunicar los límites del MVP

Una parte del diseño de un MVP que se olvida con frecuencia es cómo comunicar al usuario lo que todavía no incluye, sin que se sienta engañado. Si una función explícitamente no está disponible en esta primera versión (por ejemplo, "aún no puedes editar un documento compartido, solo verlo"), decirlo con claridad en la propia interfaz evita frustración y tickets de soporte, y es mucho mejor que dejar que el usuario lo descubra a base de intentarlo y fallar.

## El papel del diseño al definir el alcance

El diseño no debería limitarse a maquetar lo que producto decide dejar dentro o fuera del MVP: es quien mejor puede anticipar qué recortes van a doler de verdad al usuario y cuáles pasarán desapercibidos. Participar en esa conversación desde el principio —no recibir el alcance ya cerrado— es lo que evita los recortes que, aunque ahorran tiempo de desarrollo, generan más coste después en confusión, soporte y confianza perdida.
