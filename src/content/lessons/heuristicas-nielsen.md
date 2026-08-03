---
title: 'Evaluación heurística y las 10 heurísticas de Nielsen'
description: 'Aprende a auditar una interfaz sin necesidad de usuarios, aplicando las diez heurísticas de usabilidad de Jakob Nielsen.'
category: ux
level: intermediate
order: 9
exercises:
    - id: heuristicas-mc-1
      type: multiple-choice
      prompt: '¿Qué es una "evaluación heurística"?'
      allowMultiple: false
      options:
          - text: 'Una revisión de una interfaz realizada por expertos en usabilidad, comparándola contra un conjunto de principios reconocidos, sin necesidad de usuarios reales.'
            correct: true
            explanation: 'Correcto. Es un método de "inspección": expertos recorren la interfaz buscando violaciones de principios de usabilidad conocidos, lo cual la hace mucho más rápida y barata que un test con usuarios, aunque no la sustituye por completo.'
          - text: 'Un test A/B donde se mide qué versión convierte mejor.'
            correct: false
            explanation: 'El test A/B es un método cuantitativo con usuarios reales; la evaluación heurística es un método de inspección por expertos, sin usuarios.'
          - text: 'Una encuesta de satisfacción enviada a los usuarios después de usar el producto.'
            correct: false
            explanation: 'Las encuestas recogen opinión de usuarios; la evaluación heurística la realizan expertos aplicando principios establecidos, no usuarios opinando.'
    - id: heuristicas-mc-2
      type: multiple-choice
      prompt: 'Un formulario permite subir un archivo pero no indica en ningún momento qué formatos ni qué tamaño máximo acepta, hasta que el usuario falla al subirlo. ¿Qué heurística de Nielsen se está incumpliendo principalmente?'
      allowMultiple: false
      options:
          - text: 'Prevención de errores: el sistema debería evitar que el usuario cometa el error, comunicando las restricciones antes de que ocurra, no después.'
            correct: true
            explanation: 'Correcto. Mostrar los formatos y el tamaño máximo permitido junto al campo, antes del intento, es un ejemplo directo de diseño que previene el error en lugar de limitarse a reportarlo.'
          - text: 'Estética y diseño minimalista: el formulario tiene demasiados elementos visuales.'
            correct: false
            explanation: 'El problema descrito no es de exceso de elementos visuales, sino de falta de información preventiva sobre restricciones.'
          - text: 'Flexibilidad y eficiencia de uso: falta un atajo de teclado para subir el archivo.'
            correct: false
            explanation: 'El problema no tiene relación con atajos para usuarios expertos, sino con la ausencia de información que evite el error en el primer intento.'
    - id: heuristicas-order-1
      type: ordering
      prompt: 'Ordena estos pasos de una evaluación heurística grupal, del primero al último.'
      items:
          - 'Definir las tareas y flujos que se van a evaluar'
          - 'Cada evaluador recorre la interfaz de forma independiente, anotando violaciones a las heurísticas'
          - 'El grupo pone en común los hallazgos y elimina duplicados'
          - 'Se prioriza cada problema por severidad (de cosmético a crítico)'
          - 'Se comparte un informe con recomendaciones concretas al equipo de diseño'
      explanation: 'Nielsen recomienda que cada evaluador trabaje primero en solitario para no sesgarse por las opiniones de los demás, y solo después se combinen los hallazgos en una sesión conjunta.'
    - id: heuristicas-free-1
      type: free-text
      prompt: '¿Cuántas heurísticas de usabilidad componen la lista clásica publicada por Jakob Nielsen?'
      acceptedAnswers:
          - '10'
          - 'diez'
      explanation: 'Las diez heurísticas de usabilidad de Nielsen, publicadas originalmente en 1994 y aún vigentes, cubren desde la visibilidad del estado del sistema hasta la ayuda y documentación.'
---

## Auditar sin necesidad de usuarios

No toda evaluación de usabilidad requiere reclutar participantes. La **evaluación heurística** es un método de inspección en el que una o varias personas expertas en usabilidad recorren una interfaz comparándola sistemáticamente contra un conjunto de principios reconocidos —las heurísticas—, anotando cada punto donde la interfaz los incumple. Es mucho más rápida y barata que un test con usuarios, lo que la hace ideal como primer filtro antes de invertir en investigación con usuarios reales, o como chequeo rápido antes de un lanzamiento. Su limitación es igual de importante: al no involucrar usuarios reales, puede pasar por alto problemas específicos del contexto o del modelo mental de la audiencia real, por lo que complementa la investigación con usuarios, no la sustituye.

## Las diez heurísticas de Nielsen

Jakob Nielsen publicó en 1994, junto con Rolf Molich, un conjunto de diez principios de usabilidad que siguen siendo el estándar de referencia treinta años después:

1. **Visibilidad del estado del sistema**: el sistema debe mantener siempre informado al usuario de lo que está pasando, con feedback apropiado en un tiempo razonable (una barra de progreso, una confirmación tras guardar).
2. **Correspondencia entre el sistema y el mundo real**: usar el lenguaje del usuario, no jerga técnica interna, y seguir convenciones del mundo real en el orden y la lógica de la información.
3. **Control y libertad del usuario**: ofrecer una "salida de emergencia" clara (deshacer, cancelar, volver atrás) para cuando el usuario elige una acción por error.
4. **Consistencia y estándares**: no obligar al usuario a preguntarse si distintas palabras, situaciones o acciones significan lo mismo; seguir las convenciones de la plataforma.
5. **Prevención de errores**: mejor un diseño cuidadoso que evite el problema desde el origen que un buen mensaje de error después de que ocurra.
6. **Reconocer antes que recordar**: minimizar la carga de memoria del usuario haciendo visibles las opciones, instrucciones y elementos, en lugar de exigirle recordar información de una pantalla a otra.
7. **Flexibilidad y eficiencia de uso**: ofrecer aceleradores (atajos de teclado, accesos directos) invisibles para el usuario novato pero útiles para el experto, permitiendo personalizar acciones frecuentes.
8. **Diseño estético y minimalista**: las pantallas no deberían contener información irrelevante o rara vez necesaria; cada unidad extra de información compite con la relevante y reduce su visibilidad relativa.
9. **Ayudar a reconocer, diagnosticar y recuperarse de errores**: los mensajes de error deben expresarse en lenguaje sencillo (sin códigos crípticos), indicar el problema con precisión y sugerir una solución constructiva.
10. **Ayuda y documentación**: aunque lo ideal es que el sistema se use sin necesidad de documentación, cuando haga falta debe ser fácil de encontrar, centrada en la tarea del usuario y no excesivamente larga.

## Severidad, no solo lista de problemas

Un error habitual al aplicar estas heurísticas es generar una lista plana de "cosas que están mal" sin priorizar. Nielsen propone clasificar cada hallazgo por **severidad**, combinando frecuencia (¿cuántos usuarios lo van a encontrar?), impacto (¿cuánto les cuesta cuando ocurre?) y persistencia (¿es un problema puntual o repetido cada vez que se usa el producto?). Una escala habitual va de 0 (no es un problema real de usabilidad) a 4 (catástrofe de usabilidad, hay que arreglarlo antes de lanzar), pasando por cosmético, menor y mayor. Esta priorización es lo que convierte una lista de hallazgos en un plan de trabajo accionable para el equipo de diseño y desarrollo.

## Varios evaluadores, mejor que uno

La investigación original de Nielsen mostró que un solo evaluador detecta, en promedio, solo alrededor del 35% de los problemas de usabilidad de una interfaz; combinar entre tres y cinco evaluadores independientes eleva esa cifra a más del 75%, porque cada persona tiende a fijarse en aspectos distintos según su experiencia. Por eso la práctica recomendada es que cada evaluador recorra la interfaz por separado, sin ver antes los hallazgos de los demás (para no sesgarse), y que el grupo combine y depure la lista conjunta al final.
