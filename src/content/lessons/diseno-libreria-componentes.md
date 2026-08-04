---
title: 'Diseñar una librería de componentes (design system)'
description: 'Cómo abordar el diseño de un sistema de componentes reutilizables desde cero: qué auditar primero, cómo definir los tokens base y en qué orden construir los componentes.'
category: projects
level: intermediate
order: 2
subcategory: herramientas-y-plataformas
exercises:
    - id: libreria-componentes-mc-1
      type: multiple-choice
      prompt: 'Antes de diseñar el primer componente de una librería nueva, ¿qué paso conviene dar primero?'
      allowMultiple: false
      options:
          - text: 'Auditar las pantallas y productos ya existentes para detectar qué elementos se repiten, con cuántas variantes distintas e inconsistentes, y priorizar por ahí.'
            correct: true
            explanation: 'Correcto. Una auditoría muestra qué componentes generan más inconsistencia real (por ejemplo, 12 estilos distintos de botón) y por tanto dónde una librería aporta más valor inmediato.'
          - text: 'Diseñar directamente los componentes más complejos, como una tabla de datos avanzada, para demostrar la potencia del sistema.'
            correct: false
            explanation: 'Empezar por lo más complejo antes de tener los cimientos (tokens, componentes base como botón o campo de texto) suele obligar a rehacer trabajo cuando esos cimientos cambian.'
          - text: 'Copiar la librería de componentes de otra empresa conocida sin adaptarla.'
            correct: false
            explanation: 'Otras librerías son buena referencia de patrones, pero copiarlas sin adaptar ignora la marca, las necesidades de producto y el contenido reales del proyecto.'
    - id: libreria-componentes-mc-2
      type: multiple-choice
      prompt: '¿Qué son los "design tokens" dentro de una librería de componentes y por qué se definen antes que los componentes?'
      allowMultiple: false
      options:
          - text: 'Son los valores base reutilizables (color, espaciado, tipografía, radios de borde) de los que dependen todos los componentes, así que cambiarlos después de construir muchos componentes obliga a tocarlos todos.'
            correct: true
            explanation: 'Correcto. Si el color primario o la escala de espaciado son tokens, cambiarlos se propaga automáticamente; si están escritos a mano en cada componente, hay que editarlos uno a uno.'
          - text: 'Son los nombres de archivo que usa el equipo de desarrollo para organizar el código.'
            correct: false
            explanation: 'Los tokens son valores de diseño (colores, tamaños, espaciados), no una convención de nombres de archivos.'
          - text: 'Son un tipo de componente visual, como un botón o una tarjeta.'
            correct: false
            explanation: 'Los tokens son los valores base sobre los que se construyen los componentes, no componentes en sí mismos.'
    - id: libreria-componentes-free-1
      type: free-text
      prompt: 'El documento vivo que agrupa los componentes de una librería, sus variantes, estados y reglas de uso, y sirve como referencia compartida entre diseño y desarrollo, se suele llamar...'
      acceptedAnswers:
          - 'sistema de diseño'
          - 'design system'
      explanation: 'Un design system (sistema de diseño) es el conjunto de tokens, componentes, patrones y documentación que permite a un equipo construir interfaces consistentes sin rediseñar cada elemento desde cero.'
---

## Por qué una librería de componentes es un proyecto en sí mismo

A diferencia de diseñar una pantalla concreta, diseñar una librería de componentes significa diseñar las piezas que otros usarán para construir muchas pantallas futuras que aún no existen. Eso cambia las prioridades: importa menos que un componente "se vea perfecto en este caso concreto" y más que funcione bien en la mayor cantidad posible de contextos, tamaños de contenido y estados (vacío, cargando, con error).

## Paso 1: Auditar lo que ya existe

Si el producto ya tiene pantallas en producción, el primer paso no es diseñar, es hacer inventario: capturar todos los botones, campos de texto, tarjetas y demás elementos repetidos, y agruparlos por similitud. Esta auditoría revela la inconsistencia real (por ejemplo, seis grosores de borde distintos para lo que debería ser un solo componente) y ayuda a priorizar qué construir primero.

## Paso 2: Definir los design tokens

Antes que cualquier componente, se definen los valores base: paleta de color (incluyendo estados como error o éxito), escala tipográfica, escala de espaciado, radios de borde, sombras. Estos tokens son la capa sobre la que se apoya todo lo demás, y cambiarlos después de construir muchos componentes es mucho más caro que definirlos bien desde el principio.

## Paso 3: Construir de lo simple a lo complejo

El orden habitual es: primero los átomos (botón, campo de texto, etiqueta, icono), después las moléculas que los combinan (una tarjeta, un formulario de login), y por último los patrones más complejos (una tabla de datos, un asistente multi-paso). Construir en este orden evita rehacer componentes complejos cuando cambian sus piezas base.

## Paso 4: Documentar el uso, no solo el aspecto

Un componente sin documentación de cuándo y cómo usarlo genera tanta inconsistencia como no tener librería: cada equipo lo usará como le parezca. La documentación debe cubrir variantes disponibles, estados, quién debe usarlo y ejemplos de uso correcto e incorrecto.

## Un ejemplo rápido

Al diseñar el componente "Botón": se parte de los tokens ya definidos (color primario, radio de borde, escala tipográfica); se definen sus variantes (primario, secundario, destructivo), tamaños (pequeño, mediano) y estados (por defecto, hover, deshabilitado, cargando); y se documenta cuándo usar cada variante (por ejemplo, "el botón destructivo solo se usa para acciones irreversibles como eliminar").

## Ejemplos de librerías de componentes reales

- [Material Design](https://material.io) — el sistema de diseño de Google, con documentación extensa de componentes y su razonamiento.
- [Ant Design](https://ant.design) — sistema de diseño muy usado en productos empresariales y paneles de administración.
- [Shopify Polaris](https://polaris.shopify.com) — ejemplo de sistema de diseño orientado a un producto concreto (el ecommerce de Shopify), con guías de contenido incluidas.
