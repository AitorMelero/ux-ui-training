---
title: 'Motion design y principios de interacción'
description: 'Usa la animación con propósito: comunica relaciones espaciales, da feedback y respeta a quien prefiere movimiento reducido.'
category: ui
level: advanced
order: 9
exercises:
    - id: motion-mc-1
      type: multiple-choice
      prompt: 'Un panel lateral aparece de golpe, sin ninguna transición, cuando el usuario pulsa un botón. ¿Qué función del motion design se está perdiendo?'
      allowMultiple: false
      options:
          - text: 'Comunicar la relación espacial: de dónde viene el panel y hacia dónde volverá al cerrarse, ayudando al usuario a construir un modelo mental de la interfaz.'
            correct: true
            explanation: 'Correcto. Una transición de deslizamiento desde el borde de la pantalla comunica "este panel vive fuera de la pantalla, a la derecha", información espacial que una aparición instantánea no transmite.'
          - text: 'Ninguna: la animación es puramente decorativa y nunca aporta información funcional.'
            correct: false
            explanation: 'El motion bien usado cumple funciones reales más allá de lo decorativo: comunicar relaciones espaciales, dar feedback de causa-efecto y dirigir la atención.'
          - text: 'Reducir el tiempo de carga de la página.'
            correct: false
            explanation: 'El motion design no afecta al tiempo de carga técnico de una página; su función es comunicativa e interactiva, no de rendimiento.'
    - id: motion-mc-2
      type: multiple-choice
      prompt: '¿Por qué es importante respetar la preferencia del sistema operativo "reducir movimiento" (prefers-reduced-motion) en el diseño de animaciones?'
      allowMultiple: false
      options:
          - text: 'Porque ciertas animaciones (especialmente movimiento grande, parallax o desenfoque de movimiento) pueden provocar mareo, náuseas o migrañas en personas con trastornos vestibulares.'
            correct: true
            explanation: 'Correcto. Para personas con trastornos vestibulares, animaciones que a la mayoría les resultan agradables pueden generar malestar físico real; respetar esta preferencia del sistema no es un lujo estético sino una cuestión de accesibilidad.'
          - text: 'Porque las animaciones siempre ralentizan la velocidad de conexión a internet.'
            correct: false
            explanation: 'Las animaciones de interfaz no afectan a la velocidad de la conexión a internet; el motivo de respetar esta preferencia es de accesibilidad y bienestar físico, no de rendimiento de red.'
          - text: 'Porque es un requisito exclusivo de aplicaciones para menores de edad.'
            correct: false
            explanation: 'No es una restricción exclusiva de audiencias infantiles: afecta a cualquier persona con sensibilidad al movimiento, de cualquier edad.'
    - id: motion-order-1
      type: ordering
      prompt: 'Ordena estas curvas de aceleración (easing) según cuánto se acercan a un movimiento "natural" percibido, de la menos natural a la más natural para la mayoría de transiciones de interfaz.'
      items:
          - 'Linear (velocidad constante de principio a fin)'
          - 'Ease-in (empieza lento, acelera hacia el final)'
          - 'Ease-out (empieza rápido, decelera hacia el final)'
      explanation: 'El movimiento linear se percibe mecánico porque nada en el mundo físico se mueve así; ease-out suele sentirse más natural en la mayoría de transiciones de entrada de interfaz porque imita objetos que llegan a su posición final y frenan, en lugar de detenerse en seco.'
    - id: motion-free-1
      type: free-text
      prompt: '¿Cómo se llama la media query de CSS que permite detectar si el usuario ha activado, a nivel de sistema operativo, la preferencia de reducir el movimiento en la interfaz?'
      acceptedAnswers:
          - 'prefers-reduced-motion'
          - 'prefers reduced motion'
      explanation: 'Esta media query permite que una interfaz web detecte la preferencia del sistema operativo y desactive o reduzca automáticamente animaciones no esenciales para las personas que la han activado.'
---

## La animación no es un adorno final

Es habitual tratar la animación como el último toque decorativo que se añade cuando "ya está todo diseñado", pero el motion design bien empleado cumple funciones comunicativas reales que van mucho más allá de verse elegante. Una transición puede comunicar de dónde viene y hacia dónde va un elemento (relación espacial), confirmar que una acción del usuario ha tenido efecto (feedback de causa-efecto), dirigir la atención hacia lo que acaba de cambiar, o suavizar un cambio de estado brusco que de otra forma resultaría confuso o desorientador.

## Función 1: comunicar relaciones espaciales

Cuando un panel aparece deslizándose desde el borde derecho de la pantalla, el usuario entiende intuitivamente que ese panel "vive" fuera del área visible, a la derecha, y que al cerrarlo volverá a ese mismo lugar. Esa información espacial —de dónde viene un elemento y a dónde vuelve— ayuda a construir un modelo mental coherente de cómo está organizada la interfaz "por debajo". Si el mismo panel apareciera de golpe, sin transición, esa información se pierde por completo: el usuario ve un cambio de estado, pero no entiende la relación espacial entre el antes y el después.

## Función 2: dar feedback de causa y efecto

Cuando un usuario pulsa un botón "Añadir al carrito" y el icono del carrito se anima brevemente (un pequeño rebote, un cambio de color momentáneo), esa animación confirma, de forma casi instantánea, que la acción ha surtido efecto, sin necesidad de un mensaje de texto ni de que el usuario tenga que verificarlo manualmente. Esta función de feedback es especialmente importante en acciones que no tienen un resultado visualmente obvio de otra forma (por ejemplo, guardar algo en segundo plano), donde la animación cierra el ciclo de "hice algo → el sistema lo ha registrado" que de otro modo dejaría al usuario con dudas sobre si su acción tuvo efecto.

## Duración y curvas de aceleración (easing)

Dos parámetros técnicos determinan si una animación se percibe natural o torpe: la **duración** y la **curva de aceleración** (_easing_). Como referencia general, las transiciones de interfaz suelen funcionar bien entre 150 y 400 milisegundos: más cortas resultan casi imperceptibles, más largas empiezan a sentirse lentas y a estorbar en el flujo del usuario. Respecto a la curva de aceleración, casi ningún objeto del mundo físico se mueve a velocidad constante de principio a fin (**linear**); por eso una animación linear tiende a percibirse mecánica y artificial. Las curvas **ease-out** (que empiezan rápido y deceleran hacia el final, como un objeto que llega a su destino y frena) suelen sentirse más naturales para elementos que entran en pantalla, mientras que **ease-in** (que empieza lento y acelera) suele encajar mejor con elementos que salen de pantalla, alejándose del punto de atención del usuario.

## La regla de oro: la animación no debe bloquear al usuario

Por atractiva que sea una animación, nunca debería hacer que el usuario espere innecesariamente para poder actuar. Una transición larga entre pantallas que impide interactuar hasta que termina, o una animación de carga decorativa que se alarga solo para "lucirse", prioriza la estética por encima de la eficiencia del usuario, que es precisamente lo contrario de lo que debería hacer una buena interfaz. Como norma práctica: la animación debe informar, no interponerse; si hay duda entre una transición más vistosa y una más rápida, en la inmensa mayoría de los casos gana la más rápida.

## Movimiento y accesibilidad: `prefers-reduced-motion`

Para una parte de la población —personas con trastornos vestibulares, migrañas asociadas al movimiento, o simplemente sensibilidad al parallax y al desenfoque de movimiento— ciertas animaciones no son solo una preferencia estética, sino una fuente real de malestar físico (mareo, náuseas). Los sistemas operativos modernos permiten activar una preferencia de "reducir movimiento", que las interfaces web pueden detectar mediante la media query de CSS `prefers-reduced-motion`. Un producto bien diseñado respeta esta preferencia desactivando o reduciendo drásticamente animaciones no esenciales (parallax, movimiento grande, autoplay de vídeo) cuando está activada, manteniendo únicamente las transiciones mínimas necesarias para la orientación del usuario, sin eliminar por completo el feedback funcional.
