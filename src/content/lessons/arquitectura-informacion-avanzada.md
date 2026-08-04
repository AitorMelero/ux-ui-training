---
title: 'Arquitectura de la información avanzada'
description: 'Profundiza en sistemas de navegación, taxonomías controladas y las variantes de card sorting y tree testing para estructuras de contenido complejas.'
category: ux
level: advanced
order: 10
exercises:
    - id: ia-avanzada-mc-1
      type: multiple-choice
      prompt: '¿Qué diferencia principal hay entre un card sorting "abierto" y uno "cerrado"?'
      allowMultiple: false
      options:
          - text: 'En el abierto, los participantes crean y nombran sus propias categorías; en el cerrado, se les dan categorías ya definidas y solo clasifican las tarjetas dentro de ellas.'
            correct: true
            explanation: 'Correcto. El abierto es exploratorio, útil al diseñar una estructura desde cero; el cerrado es confirmatorio, útil para validar una estructura de categorías que ya existe.'
          - text: 'El abierto se hace en papel; el cerrado siempre se hace con software.'
            correct: false
            explanation: 'Ambas variantes pueden hacerse en papel o con herramientas digitales; esa no es la diferencia relevante entre ellas.'
          - text: 'El cerrado permite más de un participante; el abierto solo permite uno.'
            correct: false
            explanation: 'El número de participantes no distingue estas dos variantes; ambas suelen requerir múltiples participantes para revelar patrones.'
    - id: ia-avanzada-mc-2
      type: multiple-choice
      prompt: 'En un tree testing, la métrica de "tasa de éxito directo" (directness) mide...'
      allowMultiple: false
      options:
          - text: 'Si el participante llegó a la respuesta correcta sin retroceder ni explorar otras ramas de la estructura antes.'
            correct: true
            explanation: 'Correcto. Un usuario puede llegar finalmente al lugar correcto (éxito) pero haber retrocedido varias veces antes (indirecto), lo cual revela una jerarquía confusa aunque el resultado final sea correcto.'
          - text: 'El tiempo total que tarda el participante en completar la tarea.'
            correct: false
            explanation: 'El tiempo es una métrica distinta (tiempo en tarea); la directness mide la limpieza del camino recorrido, no su duración.'
          - text: 'El número de participantes reclutados para la prueba.'
            correct: false
            explanation: 'Eso es el tamaño de la muestra, no una métrica de resultado del tree testing.'
    - id: ia-avanzada-order-1
      type: ordering
      prompt: 'Ordena estos sistemas de navegación complementarios de un sitio grande, del más "estructural" (jerarquía fija) al más "flexible" (adaptado a cada búsqueda).'
      items:
          - 'Navegación global (menú principal, siempre visible)'
          - 'Navegación local (submenú de la sección actual)'
          - 'Navegación contextual (enlaces relacionados dentro del contenido)'
          - 'Búsqueda interna con filtros'
      explanation: 'La navegación global y local reflejan la jerarquía fija del sitio; la contextual conecta contenido relacionado fuera de esa jerarquía; y la búsqueda con filtros permite a cada usuario construir su propio camino, ignorando la jerarquía por completo si lo prefiere.'
    - id: ia-avanzada-free-1
      type: free-text
      prompt: '¿Cómo se llama el vocabulario controlado de términos y sus relaciones (sinónimos, términos más amplios, más específicos) que usa un sitio grande para etiquetar contenido de forma consistente?'
      acceptedAnswers:
          - 'taxonomia'
          - 'taxonomía'
          - 'taxonomy'
      explanation: 'Una taxonomía es un sistema controlado de categorías y etiquetas, con relaciones definidas entre ellas, que evita que el mismo concepto se etiquete de formas distintas en diferentes partes de un sitio grande.'
---

## Cuando un solo menú ya no es suficiente

La lección introductoria de arquitectura de la información explicó jerarquía, etiquetado y navegación a nivel de fundamentos. Un sitio con veinte páginas se resuelve razonablemente bien con un único menú y sentido común. Un sitio con veinte mil páginas —un e-commerce grande, un intranet corporativa, una plataforma de contenido editorial— necesita algo más riguroso: sistemas de navegación complementarios que trabajen juntos, y una taxonomía controlada que garantice que el mismo concepto se llama y se clasifica igual en todo el sitio, lo trabaje quien lo trabaje.

## Cuatro sistemas de navegación, no uno

Los sitios grandes rara vez dependen de un único menú: combinan varios sistemas de navegación con propósitos distintos y complementarios.

- **Navegación global**: el menú principal, visible en todas las páginas, que representa las categorías de nivel superior del sitio y ancla la identidad de marca.
- **Navegación local**: los submenús de la sección en la que se encuentra el usuario, que solo aparecen dentro de esa sección.
- **Navegación contextual**: enlaces embebidos en el propio contenido ("productos relacionados", "quizás también te interese"), que conectan contenido relevante sin depender de la jerarquía formal.
- **Navegación de utilidad**: elementos de soporte presentes en todo el sitio pero fuera de la jerarquía de contenido (login, carrito, cambio de idioma, ayuda).

A esto se suma la **búsqueda con filtros**, que en sitios grandes suele generar más tráfico interno que el propio menú: muchos usuarios, sobre todo los que ya saben lo que buscan, prefieren escribirlo directamente que navegar por categorías. Un sitio que invierte mucho en la jerarquía de menús pero descuida la calidad de su buscador interno (sinónimos, tolerancia a erratas, autocompletado) suele estar resolviendo mal el problema real de sus usuarios más decididos.

## Taxonomías: el vocabulario controlado detrás del etiquetado

Una **taxonomía** es un sistema estructurado de términos y las relaciones entre ellos: sinónimos ("zapatillas" = "sneakers" para efectos de búsqueda), términos más amplios y más específicos ("calzado" contiene a "zapatillas", que contiene a "zapatillas de running"), y términos relacionados. Sin una taxonomía explícita y documentada, es habitual que distintas personas del equipo (o distintos departamentos) etiqueten el mismo concepto de formas ligeramente distintas a lo largo del tiempo, lo que fragmenta la navegación y el buscador interno: la mitad del contenido sobre un tema queda bajo una etiqueta y la otra mitad bajo otra, invisibles entre sí. Mantener una taxonomía es, en esencia, tratar el vocabulario del sitio como una decisión de diseño deliberada y gobernada, no como una consecuencia accidental de quién escribió cada página.

## Card sorting: abierto, cerrado e híbrido

La lección introductoria mencionó el card sorting como técnica para validar estructuras. En la práctica existen tres variantes con usos distintos:

- **Abierto**: los participantes reciben tarjetas de contenido sin categorías predefinidas, y crean y nombran sus propias categorías. Es exploratorio: sirve para diseñar una estructura desde cero, revelando cómo agrupa y nombra el contenido la mente del usuario, sin la influencia de una propuesta previa.
- **Cerrado**: los participantes reciben categorías ya definidas por el equipo, y solo clasifican las tarjetas dentro de ellas. Es confirmatorio: sirve para validar (o encontrar problemas en) una estructura que ya existe o que se está proponiendo.
- **Híbrido**: combina ambos; se ofrecen categorías predefinidas pero se permite crear categorías nuevas si ninguna encaja. Es útil cuando ya existe una estructura parcial que se quiere refinar, no sustituir por completo.

## Tree testing: validar la estructura sin diseño visual

El **tree testing** comprueba si las personas son capaces de encontrar información concreta navegando exclusivamente por una jerarquía de texto (sin menús desplegables reales ni diseño visual de por medio), lo que aísla la calidad de la estructura y el etiquetado de cualquier influencia del diseño gráfico. Las métricas clave son la **tasa de éxito** (¿llegó al lugar correcto?), la **directness** (¿llegó sin retroceder ni explorar ramas equivocadas antes?) y el **tiempo empleado**. Un patrón revelador y contraintuitivo es cuando la tasa de éxito es alta pero la directness es baja: el usuario acaba encontrando lo que busca, pero solo después de varios intentos fallidos, lo cual indica una jerarquía confusa que el usuario logra "resolver" a base de prueba y error, un problema real aunque las métricas de éxito final lo disimulen.
