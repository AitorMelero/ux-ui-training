---
title: 'Diseñar una red social'
description: 'Los retos particulares de diseñar un producto centrado en contenido generado por usuarios: el feed, la interacción social y por qué la moderación es una decisión de UX.'
category: projects
level: intermediate
order: 7
subcategory: comunidad-y-entretenimiento
exercises:
    - id: red-social-mc-1
      type: multiple-choice
      prompt: '¿Por qué el diseño del "feed" (el listado principal de contenido) se considera la decisión de UX más importante de una red social?'
      allowMultiple: false
      options:
          - text: 'Porque es la pantalla donde los usuarios pasan la mayor parte del tiempo, y el criterio de qué contenido mostrar y en qué orden determina en gran medida qué tipo de comportamiento y comunidad se fomenta.'
            correct: true
            explanation: 'Correcto. El feed no es solo una lista de contenido: el orden y el criterio de selección (cronológico, por relevancia, por engagement) moldea qué tipo de publicaciones triunfan y, con ello, qué tipo de comunidad se forma.'
          - text: 'Porque es la pantalla más sencilla de diseñar técnicamente.'
            correct: false
            explanation: 'El feed suele ser una de las partes más complejas de diseñar e implementar, precisamente por su impacto en el comportamiento de la comunidad.'
          - text: 'Porque los usuarios nunca interactúan con otras pantallas de la aplicación.'
            correct: false
            explanation: 'Los usuarios sí usan otras pantallas (perfil, mensajes, notificaciones), pero el feed suele concentrar la mayor parte del tiempo de uso y del impacto en el comportamiento.'
    - id: red-social-mc-2
      type: multiple-choice
      prompt: '¿Por qué se considera que las herramientas de moderación y denuncia de contenido son una decisión de diseño UX, y no solo un tema técnico o legal?'
      allowMultiple: false
      options:
          - text: 'Porque su facilidad de uso determina si los usuarios realmente las utilizan cuando encuentran contenido problemático, lo que afecta directamente a la seguridad percibida y a si la gente sigue usando el producto.'
            correct: true
            explanation: 'Correcto. Una herramienta de denuncia escondida o confusa apenas se usa, aunque exista técnicamente; el diseño de estos flujos afecta directamente a cuánta gente se siente segura usando el producto.'
          - text: 'Porque la moderación solo depende de algoritmos automáticos, sin intervención humana ni de diseño.'
            correct: false
            explanation: 'La moderación combina algoritmos con acciones humanas (denunciar, bloquear, silenciar), y esas acciones necesitan una interfaz clara y accesible para funcionar.'
          - text: 'Porque no afecta a las métricas de negocio de la plataforma.'
            correct: false
            explanation: 'Sí afecta: una comunidad donde la gente no se siente segura pierde usuarios a medio plazo, por lo que la moderación tiene un impacto directo en métricas de retención.'
    - id: red-social-free-1
      type: free-text
      prompt: 'En redes sociales, el porcentaje o número de usuarios que interactúan (dan like, comentan, comparten) sobre el total que ve un contenido se conoce en inglés con el término...'
      acceptedAnswers:
          - 'engagement'
      explanation: 'El engagement mide cuánta gente interactúa activamente con el contenido, no solo cuánta lo ve; muchas decisiones de diseño de una red social (orden del feed, notificaciones) se optimizan pensando en esta métrica, con el riesgo de priorizarla por encima del bienestar del usuario si no se hace con cuidado.'
---

## Un producto que diseña comportamiento, no solo pantallas

Diseñar una red social es distinto a diseñar la mayoría de productos porque el "contenido" no lo produce la empresa, lo producen los propios usuarios interactuando entre sí. Esto significa que el diseño no solo organiza información: influye directamente en qué tipo de comportamiento se fomenta (publicar, comentar, denunciar, ignorar) y qué tipo de comunidad emerge con el tiempo.

## El feed: la decisión de diseño más influyente

El feed (el listado principal de publicaciones) concentra la mayor parte del tiempo de uso, y el criterio para ordenarlo —cronológico, por relevancia estimada, por probabilidad de generar interacción— determina qué contenido triunfa. Un feed que prioriza el contenido más "viral" tiende a favorecer publicaciones extremas o polémicas; un feed cronológico simple es más predecible pero puede mostrar menos contenido relevante. Esta decisión de producto tiene consecuencias de diseño y éticas reales.

## Interacción social: hacerla fácil, pero con fricción donde importa

Dar like, comentar o compartir debe ser rápido y sin fricción, porque son la base de la interacción social del producto. Pero algunas acciones se benefician de fricción deliberada: pedir confirmación antes de publicar algo de forma pública por primera vez, o mostrar un aviso antes de compartir contenido marcado como potencialmente falso, son ejemplos de fricción bien colocada.

## Moderación y seguridad como parte del diseño

Las herramientas para bloquear, silenciar o denunciar contenido deben ser fáciles de encontrar y de usar; si están escondidas en varios niveles de menú, apenas se usan, aunque existan. El diseño de estos flujos afecta directamente a si los usuarios —especialmente los más vulnerables a acoso o contenido dañino— se sienten seguros usando el producto.

## Notificaciones: el equilibrio entre retención y respeto

Las notificaciones traen a los usuarios de vuelta a la aplicación, pero un exceso de notificaciones diseñadas solo para maximizar el regreso ("le han dado like a tu foto de hace 3 años") puede percibirse como manipulador. Diseñar bien las notificaciones significa priorizar las que aportan valor real al usuario, no solo las que maximizan la apertura de la app.

## Un ejemplo rápido

Al diseñar la acción de "denunciar una publicación": el icono debe ser visible desde el propio contenido (no escondido en un menú de tres niveles), el flujo debe pedir solo la información imprescindible (motivo de la denuncia) y debe confirmar claramente que la denuncia se ha recibido, para que la persona sienta que su acción tuvo efecto.

## Ejemplos de redes sociales como referencia

- [X (antes Twitter)](https://x.com) — ejemplo de feed en tiempo real y herramientas de moderación (silenciar, bloquear, denunciar) accesibles desde el propio contenido.
- [Reddit](https://www.reddit.com) — ejemplo de moderación distribuida por comunidades, con reglas y herramientas propias por cada subcomunidad.
