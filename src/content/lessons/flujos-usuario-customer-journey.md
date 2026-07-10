---
title: 'Flujos de usuario y mapas de experiencia'
description: 'Visualiza el camino completo de una persona a través de un producto o servicio con user flows y customer journey maps.'
category: ux
level: intermediate
order: 6
exercises:
    - id: flujos-mc-1
      type: multiple-choice
      prompt: '¿Qué representa principalmente un "user flow" (flujo de usuario)?'
      allowMultiple: false
      options:
          - text: 'La secuencia de pantallas y decisiones que sigue una persona para completar una tarea concreta dentro de un producto.'
            correct: true
            explanation: 'Correcto. Un user flow es un diagrama de pasos y bifurcaciones centrado en una tarea, por ejemplo "completar el registro" o "finalizar una compra".'
          - text: 'La paleta de colores usada en cada pantalla del producto.'
            correct: false
            explanation: 'Eso es diseño visual (UI); un user flow es un diagrama de navegación y decisiones, no de estilo.'
          - text: 'El organigrama del equipo que construyó el producto.'
            correct: false
            explanation: 'Un user flow describe el recorrido de la persona usuaria, no la estructura organizativa del equipo.'
    - id: flujos-mc-2
      type: multiple-choice
      prompt: '¿En qué se diferencia un "customer journey map" de un user flow?'
      allowMultiple: false
      options:
          - text: 'El journey map es más amplio: incluye etapas anteriores y posteriores al uso del producto (descubrimiento, soporte) y añade la dimensión emocional; el user flow se centra solo en los pasos dentro del producto para una tarea.'
            correct: true
            explanation: 'Correcto. El journey map suele abarcar toda la relación con la marca, incluyendo canales fuera del producto digital, y representa el estado emocional del usuario en cada etapa, algo que un user flow no suele incluir.'
          - text: 'No hay diferencia real, son términos intercambiables.'
            correct: false
            explanation: 'Aunque están relacionados, tienen alcance y propósito distintos: uno es más táctico (una tarea), el otro más estratégico (toda la relación con la marca).'
          - text: 'El user flow incluye emociones; el journey map no.'
            correct: false
            explanation: 'Es al revés: el journey map es el que suele representar explícitamente el estado emocional del usuario en cada etapa.'
    - id: flujos-order-1
      type: ordering
      prompt: 'Ordena estas etapas típicas de un customer journey map de un servicio de streaming, de la más temprana a la más tardía.'
      items:
          - 'Descubrimiento (ve un anuncio o recomendación del servicio)'
          - 'Consideración (compara precios y catálogo con otras opciones)'
          - 'Onboarding (crea la cuenta y configura su perfil)'
          - 'Uso habitual (busca y ve contenido regularmente)'
          - 'Retención o abandono (renueva la suscripción o la cancela)'
      explanation: 'Un journey map completo no empieza cuando el usuario abre la app: empieza mucho antes, en el momento en que descubre que el producto existe, y termina mucho después del primer uso, en la decisión de seguir siendo cliente o no.'
    - id: flujos-free-1
      type: free-text
      prompt: 'En un diagrama de flujo de usuario, ¿cómo se llama habitualmente el punto donde el camino se divide en dos o más caminos posibles según una condición (por ejemplo, "¿el usuario ya tiene cuenta? sí/no")?'
      acceptedAnswers:
          - 'punto de decision'
          - 'punto de decisión'
          - 'decision point'
          - 'bifurcacion'
          - 'bifurcación'
      explanation: 'Los puntos de decisión son los rombos (en la notación clásica de diagramas de flujo) donde el camino se ramifica según una condición, y son precisamente donde suelen concentrarse los problemas de usabilidad si no están bien resueltos.'
---

## Por qué no basta con diseñar pantallas sueltas

Es tentador diseñar una interfaz pantalla a pantalla, resolviendo cada una como si fuera independiente. Pero casi ningún objetivo real de un usuario se completa en una sola pantalla: registrarse, comprar un producto o recuperar una contraseña son **procesos** que atraviesan varias pantallas, con decisiones y posibles caminos alternativos en cada paso. Diseñar sin ver el flujo completo es la causa más común de fricciones como pasos duplicados, callejones sin salida o información que se pide dos veces porque cada pantalla se diseñó de forma aislada.

## User flows: el mapa de una tarea

Un **user flow** (flujo de usuario) es un diagrama que representa, paso a paso, el camino que sigue una persona dentro de un producto para completar una tarea concreta. Se construye con una notación simple: rectángulos para pantallas o pasos, rombos para puntos de decisión, y flechas para las transiciones posibles entre ellos. Por ejemplo, el flujo de "recuperar contraseña" típicamente incluye: pantalla de login → enlace "olvidé mi contraseña" → formulario de email → punto de decisión ("¿el email existe en el sistema?") → email enviado / mensaje de error → formulario de nueva contraseña → confirmación.

Dibujar este diagrama antes de diseñar las pantallas obliga al equipo a responder preguntas incómodas pero necesarias: ¿qué pasa si el usuario cierra la pestaña a mitad del proceso? ¿qué pasa si introduce datos inválidos? ¿hay algún camino que termine en un callejón sin salida, sin forma de continuar ni de volver atrás? Detectar estos casos límite en un diagrama es mucho más barato que detectarlos ya construidos.

## Customer journey map: la vista panorámica

Mientras que un user flow se centra en los pasos **dentro** del producto para una tarea concreta, un **customer journey map** (mapa de experiencia del cliente) adopta una vista mucho más amplia: representa toda la relación de una persona con una marca a lo largo del tiempo, desde antes de conocer el producto hasta mucho después de haberlo usado, incluyendo canales que no son digitales (un anuncio, una llamada a soporte, una reseña de otro usuario). Un journey map típico organiza la información en filas:

- **Etapas**: las fases del recorrido (descubrimiento, consideración, onboarding, uso habitual, retención/abandono).
- **Acciones**: qué hace la persona en cada etapa.
- **Puntos de contacto** (_touchpoints_): a través de qué canal interactúa (anuncio, app, email, atención al cliente).
- **Emociones**: cómo se siente en cada etapa, a menudo representado como una línea que sube y baja (frustración, alivio, satisfacción).
- **Oportunidades**: qué podría mejorar el equipo en cada punto de fricción detectado.

La fila de emociones es la que más valor aporta y la que más se suele omitir por prisa: es la que revela, de un vistazo, en qué momento del recorrido el usuario está más frustrado o más a punto de abandonar, y por tanto dónde priorizar el trabajo de mejora.

## Cuándo usar cada herramienta

Como regla práctica: usa un **user flow** cuando el problema es táctico y está dentro del producto ("el checkout tiene una tasa de abandono alta, ¿dónde exactamente se atascan?"), y usa un **customer journey map** cuando el problema es estratégico y atraviesa varios canales ("los usuarios se dan de baja a los dos meses, ¿en qué momento de toda su relación con nosotros empieza a fallar la experiencia?"). Muchos equipos maduros mantienen ambos documentos vivos, revisándolos cada vez que hay un cambio significativo en el producto o en el negocio, en lugar de crearlos una vez y olvidarlos en una carpeta.
