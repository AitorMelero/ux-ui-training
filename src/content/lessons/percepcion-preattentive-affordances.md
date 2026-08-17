---
title: 'Percepción: pre-attentive processing y affordances'
description: 'Aprende qué atributos visuales se procesan antes de la atención consciente y cómo diseñar affordances claras para que la interfaz comunique por sí misma qué se puede hacer con cada elemento.'
category: psychology
level: intermediate
subcategory: percepcion
order: 6
exercises:
    - id: percepcion-mc-1
      type: multiple-choice
      prompt: '¿Qué es el "pre-attentive processing" (procesamiento preatencional)?'
      allowMultiple: false
      options:
          - text: 'El procesamiento de ciertos atributos visuales básicos (color, forma, orientación, movimiento) que el sistema visual detecta en menos de 250 milisegundos, antes de que se dirija la atención consciente hacia ellos.'
            correct: true
            explanation: 'Correcto. La investigación de Anne Treisman sobre la teoría de integración de rasgos (feature integration theory) mostró que un conjunto reducido de atributos visuales "saltan a la vista" de forma casi instantánea y sin esfuerzo consciente, mucho antes que el resto del contenido de una pantalla.'
          - text: 'El proceso de memorizar una interfaz completa después de usarla varias veces.'
            correct: false
            explanation: 'Eso describiría un proceso de aprendizaje o memoria a largo plazo, no el procesamiento visual preatencional, que ocurre en cuestión de milisegundos ante un solo vistazo.'
          - text: 'La fase de un test de usabilidad en la que se pregunta a la persona qué recuerda antes de empezar la tarea.'
            correct: false
            explanation: 'Eso sería una técnica de investigación con usuarios, no un fenómeno de percepción visual.'
    - id: percepcion-mc-2
      type: multiple-choice
      prompt: 'Un elemento de la interfaz parece un botón (tiene forma rectangular, sombra y color distintivo) pero al pulsarlo no ocurre nada porque en realidad es solo una etiqueta decorativa. ¿Qué concepto de Donald Norman describe mejor este problema?'
      allowMultiple: false
      options:
          - text: 'Una affordance percibida falsa: el elemento comunica visualmente una posibilidad de acción (pulsable) que en realidad no existe, rompiendo la correspondencia entre lo que el diseño sugiere y lo que el sistema realmente permite.'
            correct: true
            explanation: 'Correcto. Norman, retomando el concepto ecológico de affordance de James J. Gibson, señaló que en el diseño de interfaces lo relevante es la affordance percibida: las señales visuales (signifiers) deben comunicar con precisión qué acciones son realmente posibles, ni más ni menos.'
          - text: 'Un problema de carga cognitiva extrínseca, sin relación con la percepción de posibilidades de acción.'
            correct: false
            explanation: 'Aunque la confusión puede generar carga adicional, el concepto que describe específicamente esta discrepancia entre apariencia y función es el de affordance percibida, no la carga cognitiva.'
          - text: 'Un ejemplo del efecto de posición serial.'
            correct: false
            explanation: 'El efecto de posición serial trata sobre el recuerdo de elementos en listas, sin relación con que un elemento parezca o no interactivo.'
    - id: percepcion-order-1
      type: ordering
      prompt: 'Ordena estos atributos visuales según se consideran, en la literatura sobre percepción preatencional, ejemplos clásicos de atributos detectados de forma preatencional, empezando por el más citado.'
      items:
          - 'Color (matiz)'
          - 'Orientación de una línea'
          - 'Tamaño'
          - 'Movimiento'
      explanation: 'Aunque los cuatro son atributos preatencionales bien documentados en la literatura desde los trabajos de Anne Treisman, el color suele citarse como el ejemplo más inmediato y utilizado en interfaces (por ejemplo, para resaltar errores o alertas), seguido de la orientación, el tamaño y el movimiento, que también capturan atención de forma automática pero suelen usarse con más moderación por su potencial para distraer.'
    - id: percepcion-free-1
      type: free-text
      prompt: '¿Qué autor introdujo originalmente el concepto ecológico de "affordance" (las posibilidades de acción que un entorno u objeto ofrece a quien lo percibe), posteriormente adaptado al diseño de interfaces por Donald Norman?'
      acceptedAnswers:
          - 'james gibson'
          - 'james j. gibson'
          - 'gibson'
          - 'james jerome gibson'
      explanation: 'James J. Gibson introdujo el concepto de affordance en el campo de la psicología ecológica de la percepción en los años 70; Donald Norman lo adaptó al diseño de interacción en su libro "The Design of Everyday Things" (1988), distinguiendo entre la affordance real de un objeto y su affordance percibida, que es la que realmente importa en el diseño.'
---

## Ver antes de mirar: el procesamiento preatencional

Antes de que la atención consciente se dirija deliberadamente a un punto de la pantalla, el sistema visual ya ha procesado ciertos atributos básicos de forma automática y casi instantánea (en menos de 250 milisegundos). La psicóloga **Anne Treisman**, a través de la **teoría de integración de rasgos (feature integration theory, 1980)**, identificó un conjunto reducido de atributos visuales que "saltan a la vista" sin necesidad de búsqueda consciente: entre ellos, el **color**, la **orientación**, el **tamaño** y el **movimiento**. Este fenómeno se llama **procesamiento preatencional (pre-attentive processing)**, y es la razón por la que, en un mar de elementos grises, un único elemento rojo se percibe de inmediato sin tener que "buscarlo" activamente.

## Aplicaciones directas en jerarquía visual

El procesamiento preatencional es la base científica de buena parte del diseño de jerarquía visual en interfaces:

- Un **badge o punto de notificación en color saturado** (rojo, naranja) sobre un icono se detecta antes que cualquier otro elemento de la pantalla, precisamente porque el color es un atributo preatencional.
- Un **mensaje de error resaltado** (color, borde, icono) capta atención inmediata sin que la persona tenga que leer todo el formulario para localizarlo.
- El **movimiento o la animación sutil** de un elemento (una notificación que aparece con transición) se percibe de forma preatencional incluso en la visión periférica, útil para alertar de cambios de estado sin interrumpir la tarea principal.
- El **tamaño relativo** de un botón principal frente a los secundarios comunica jerarquía de forma instantánea, antes de leer ningún texto.

El uso responsable de estos atributos exige moderación: si todo en la pantalla usa color saturado, tamaño grande o movimiento, ningún elemento destaca realmente —el procesamiento preatencional solo funciona por contraste con el resto del entorno visual.

## Affordances: lo que un objeto "invita" a hacer

El psicólogo **James J. Gibson**, dentro de su teoría ecológica de la percepción en los años 70, acuñó el concepto de **affordance**: las posibilidades de acción que un objeto o entorno ofrece a quien lo percibe, de forma directa, sin necesidad de razonamiento consciente previo. Una silla "afforda" sentarse; una manija "afforda" agarrarse y tirar.

**Donald Norman**, en _The Design of Everyday Things_ (1988), adaptó este concepto al diseño de productos, introduciendo una distinción crucial: lo relevante en el diseño no es la affordance "real" de un objeto, sino su **affordance percibida** —lo que la persona cree, con solo mirarlo, que puede hacer con él—. Norman también introdujo el concepto de **signifier** (señalizador): las pistas visuales explícitas (una sombra, un subrayado, un cursor de mano) que comunican esa affordance percibida cuando la forma del objeto por sí sola no basta.

## Affordances percibidas en interfaces digitales

A diferencia de los objetos físicos, los elementos de una interfaz digital no tienen una affordance "real" inherente —un rectángulo en una pantalla no es intrínsecamente pulsable—, así que toda la affordance percibida depende enteramente de las convenciones visuales que el diseño establece:

- Un botón con **sombra, relieve o color de fondo distintivo** comunica "puedo pulsarme" mejor que texto plano del mismo color que el resto del contenido.
- Un **cursor en forma de mano** al pasar sobre un elemento (en escritorio) es un signifier explícito que confirma la affordance de clic.
- Un **campo de texto con borde y fondo diferenciado** comunica "puedes escribir aquí" de forma mucho más clara que un simple guion o línea de subrayado.
- Un **tirador (tres líneas horizontales) en el borde de un panel** comunica arrastrabilidad de forma reconocida casi universalmente, siguiendo una convención visual muy extendida.

## El coste de una affordance percibida incorrecta

Cuando la affordance percibida no coincide con la funcionalidad real —un elemento parece pulsable pero no lo es, o un elemento pulsable no lo aparenta—, se produce una fricción directamente medible: intentos de clic fallidos, funcionalidad no descubierta, pérdida de confianza en el resto de la interfaz porque las señales visuales dejan de ser fiables. Por eso una de las revisiones más rentables de cualquier interfaz consiste en recorrerla preguntando, elemento por elemento: _¿lo que este elemento parece invitar a hacer coincide exactamente con lo que realmente hace al interactuar con él?_
