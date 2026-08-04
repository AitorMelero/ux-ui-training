---
title: 'Iconografía en interfaces'
description: 'Usa los iconos como lenguaje visual con significado propio: cuándo funcionan solos, cuándo necesitan texto, y cómo mantenerlos consistentes.'
category: ui
level: beginner
order: 3
exercises:
    - id: iconos-mc-1
      type: multiple-choice
      prompt: 'Una app usa un icono de disquete (floppy disk) para "Guardar". ¿Por qué sigue funcionando bien pese a que casi nadie usa ya disquetes?'
      allowMultiple: false
      options:
          - text: 'Porque, a base de repetición en cientos de productos durante décadas, se ha convertido en un símbolo aprendido: la mayoría de usuarios lo reconoce como "guardar" aunque nunca haya visto un disquete real.'
            correct: true
            explanation: 'Correcto. Algunos iconos dejan de representar el objeto original y pasan a ser convenciones aprendidas culturalmente, como ocurre también con el sobre para "correo" o la lupa para "buscar".'
          - text: 'Porque todos los usuarios jóvenes reconocen visualmente un disquete físico.'
            correct: false
            explanation: 'Es justo lo contrario: gran parte de los usuarios actuales nunca ha visto un disquete físico, y aun así reconoce el icono por convención aprendida, no por relación con el objeto real.'
          - text: 'Porque la forma del disquete se parece a la de un botón genérico.'
            correct: false
            explanation: 'No hay relación de forma con "botón genérico"; el reconocimiento viene de la convención cultural repetida, no de una similitud formal casual.'
    - id: iconos-mc-2
      type: multiple-choice
      prompt: 'Una barra de navegación inferior muestra cinco iconos sin ningún texto debajo, y varios usuarios en un test de usabilidad no logran identificar qué hace cada uno. ¿Qué principio de uso de iconos se está incumpliendo?'
      allowMultiple: false
      options:
          - text: 'Los iconos ambiguos o poco convencionales necesitan una etiqueta de texto de apoyo, especialmente en acciones importantes de navegación.'
            correct: true
            explanation: 'Correcto. Solo un pequeño conjunto de iconos (lupa, casa, papelera) son lo bastante universales como para omitir el texto sin riesgo; el resto debería acompañarse de una etiqueta, sobre todo en navegación principal.'
          - text: 'Los iconos nunca deberían usarse en una barra de navegación.'
            correct: false
            explanation: 'Los iconos son perfectamente válidos en navegación; el problema no es usarlos, sino omitir el texto de apoyo cuando el icono no es universalmente reconocible.'
          - text: 'Los iconos deberían tener siempre relleno de color en vez de solo contorno.'
            correct: false
            explanation: 'El estilo (relleno vs. contorno) no es la causa del problema descrito; la causa es la falta de una etiqueta textual de apoyo.'
    - id: iconos-free-1
      type: free-text
      prompt: '¿Cómo se llama el atributo HTML/ARIA que debe usarse para dar un nombre accesible a un botón que solo contiene un icono, sin texto visible, de forma que los lectores de pantalla puedan anunciarlo?'
      acceptedAnswers:
          - 'aria-label'
          - 'aria label'
      explanation: '`aria-label` proporciona un nombre accesible al elemento cuando no hay texto visible que un lector de pantalla pueda leer; sin él, un botón de solo icono es indistinguible de un botón vacío para una persona que use un lector de pantalla.'
---

## Un icono es un atajo visual, no una decoración

Un icono bien elegido comunica un concepto en una fracción de segundo, ocupando mucho menos espacio que una palabra, lo que lo hace especialmente valioso en pantallas pequeñas o en interfaces con muchas acciones repetidas (una barra de herramientas, una lista de acciones por fila). Pero esa velocidad de reconocimiento solo funciona si el icono representa algo que el usuario ya conoce o puede inferir con facilidad; un icono original pero ambiguo consigue el efecto contrario: obliga al usuario a detenerse a interpretarlo, perdiendo justo la ventaja de velocidad que se buscaba.

## Icónico, indexado y arbitrario

Es útil clasificar los iconos según cuánta relación visual tienen con lo que representan. Un icono **icónico** se parece directamente al objeto que representa (una papelera para "eliminar", una impresora para "imprimir"): se entiende sin necesidad de haberlo visto antes. Un icono **indexado** representa el concepto de forma indirecta pero lógica, mediante una asociación cultural (un sobre para "correo electrónico", aunque hoy casi nadie envíe sobres de papel). Un icono **arbitrario** no tiene ninguna relación visual con lo que representa y solo se entiende porque se ha aprendido por convención repetida en muchos productos (el disquete para "guardar" es el ejemplo clásico: gran parte de los usuarios actuales nunca ha usado un disquete físico, pero reconoce el icono igualmente). Cuantos más iconos arbitrarios use una interfaz, mayor es el riesgo de que el usuario no los reconozca sin apoyo adicional.

## Cuándo un icono puede ir solo, y cuándo no

Solo un puñado de iconos son lo bastante universales —por repetición masiva en la industria durante décadas— como para usarse solos, sin texto, sin generar ambigüedad: la lupa (buscar), la casa (inicio), la papelera (eliminar), el carrito (compra), el sobre (correo), las tres líneas horizontales o "hamburguesa" (menú). Fuera de ese conjunto reducido, la recomendación general es acompañar el icono con una etiqueta de texto, especialmente en acciones de navegación principal o en acciones irreversibles, donde el coste de una mala interpretación es alto. Cuando el espacio no permite mostrar texto de forma permanente, una alternativa habitual es mostrar la etiqueta en un tooltip al pasar el cursor (en escritorio) o mantener el texto visible solo en el elemento activo de una barra de navegación.

## Consistencia de estilo: una sola familia, un solo grosor

Mezclar iconos de distintas librerías o estilos en la misma interfaz —unos con relleno sólido, otros solo de contorno; unos con esquinas redondeadas, otros angulosas; grosores de trazo distintos— produce una sensación de descuido que el usuario percibe aunque no sepa explicar por qué. La práctica recomendada es elegir una única librería de iconos (o diseñar un set propio coherente) y mantener el mismo estilo, grosor de trazo y tamaño de rejilla (_grid_) en toda la aplicación, igual que se haría con una única familia tipográfica. Los sistemas de diseño maduros documentan su set de iconos como un componente más, con las mismas reglas de tamaño y variantes que un botón o un campo de texto.

## Iconos y accesibilidad

Un icono sin texto visible sigue necesitando un nombre accesible para las personas que usan lectores de pantalla: sin él, un botón de solo icono se anuncia como "botón", sin ninguna pista de qué hace. La solución técnica habitual es el atributo `aria-label` (por ejemplo, `aria-label="Eliminar elemento"` en un botón que solo muestra un icono de papelera), que proporciona ese nombre de forma invisible para usuarios videntes pero perfectamente audible para un lector de pantalla. Omitir este detalle es uno de los fallos de accesibilidad más comunes y más fáciles de evitar en interfaces con mucha iconografía.
