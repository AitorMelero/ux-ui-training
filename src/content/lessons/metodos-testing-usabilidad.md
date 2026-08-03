---
title: 'Métodos de test de usabilidad'
description: 'Compara moderado vs. no moderado, presencial vs. remoto, y guerrilla testing: elige el método correcto según tu pregunta, tiempo y presupuesto.'
category: ux
level: intermediate
order: 8
exercises:
    - id: testing-mc-1
      type: multiple-choice
      prompt: 'Un test de usabilidad "moderado" se diferencia de uno "no moderado" en que...'
      allowMultiple: false
      options:
          - text: 'En el moderado, una persona del equipo guía la sesión en tiempo real y puede preguntar "por qué" ante cada acción; en el no moderado, el usuario completa las tareas solo, sin nadie observando en directo.'
            correct: true
            explanation: 'Correcto. El moderado permite profundizar y repreguntar sobre la marcha, a costa de ser más lento de organizar; el no moderado escala mejor pero pierde ese contexto en tiempo real.'
          - text: 'En el moderado el usuario no sabe que está siendo observado; en el no moderado sí.'
            correct: false
            explanation: 'Ambos métodos requieren consentimiento informado del participante; la diferencia no está en el conocimiento del usuario sino en si hay una persona guiando la sesión en directo.'
          - text: 'El moderado solo puede hacerse presencialmente; el no moderado solo online.'
            correct: false
            explanation: 'El test moderado también puede hacerse en remoto por videollamada; la variable moderado/no moderado es independiente de presencial/remoto.'
    - id: testing-mc-2
      type: multiple-choice
      prompt: 'Un equipo necesita una respuesta rápida y barata sobre si tres personas cualquiera entienden el copy de una nueva pantalla, en menos de un día. ¿Qué método encaja mejor?'
      allowMultiple: false
      options:
          - text: 'Guerrilla testing: abordar a un puñado de personas disponibles (en una cafetería, en la oficina, en un pasillo) y pedirles cinco minutos para probar algo muy concreto.'
            correct: true
            explanation: 'Correcto. El guerrilla testing sacrifica rigor metodológico (la muestra no es representativa) a cambio de velocidad y coste casi nulo, ideal para validar algo muy puntual y de bajo riesgo.'
          - text: 'Un estudio longitudinal de seis meses con un panel de usuarios representativo.'
            correct: false
            explanation: 'Es una herramienta válida para otro tipo de pregunta (cambios de comportamiento a largo plazo), pero completamente desproporcionada para validar un copy en un día.'
          - text: 'Esperar al informe trimestral de analítica web.'
            correct: false
            explanation: 'La analítica cuantitativa no responde bien a preguntas de comprensión de un texto concreto; además tardaría meses, no el día disponible.'
    - id: testing-order-1
      type: ordering
      prompt: 'Ordena estos pasos para preparar un test de usabilidad moderado, del primero al último.'
      items:
          - 'Definir el objetivo: qué pregunta de diseño se quiere responder'
          - 'Escribir un guion con tareas realistas (no preguntas de opinión)'
          - 'Reclutar participantes que encajen con el perfil objetivo'
          - 'Ejecutar las sesiones, observando dónde se atascan sin ayudarles de inmediato'
          - 'Analizar los hallazgos y priorizarlos por gravedad y frecuencia'
      explanation: 'Empezar sin un objetivo claro produce sesiones dispersas; y resistir la tentación de "rescatar" al usuario en cuanto se atasca es clave para observar problemas reales, no la versión asistida de la tarea.'
    - id: testing-free-1
      type: free-text
      prompt: '¿Cómo se llama la técnica en la que se le pide al usuario que piense en voz alta mientras completa una tarea, verbalizando qué espera que pase, qué le confunde y por qué toma cada decisión?'
      acceptedAnswers:
          - 'pensamiento en voz alta'
          - 'think aloud'
          - 'protocolo think aloud'
          - 'verbalizacion'
          - 'verbalización'
      explanation: 'El protocolo "think aloud" (pensar en voz alta) convierte procesos mentales normalmente invisibles en comentarios audibles, revelando expectativas y confusiones que la simple observación del comportamiento no capturaría.'
---

## Un mismo objetivo, muchos formatos posibles

"Hacer un test de usabilidad" no describe un único método: existen múltiples formatos, cada uno con sus ventajas, y elegir el correcto depende de la pregunta que se quiera responder, el tiempo disponible y el nivel de riesgo de la decisión. Usar siempre el mismo formato por costumbre —normalmente el más elaborado y lento— es un desperdicio de recursos cuando muchas preguntas de diseño se pueden responder con métodos mucho más ligeros.

## Moderado vs. no moderado

En un test **moderado**, una persona del equipo guía la sesión en tiempo real (presencial o por videollamada), presenta las tareas, observa y puede repreguntar sobre la marcha ("¿por qué has dudado ahí?", "¿qué esperabas que pasara al pulsar ese botón?"). Esta capacidad de profundizar en el momento es su mayor ventaja, pero requiere coordinar agendas y solo permite un puñado de sesiones al día.

En un test **no moderado**, el participante completa las tareas por su cuenta, normalmente a través de una plataforma que graba pantalla y voz, sin nadie observando en directo. Se pierde la posibilidad de repreguntar, pero se gana escala: se pueden recoger decenas de sesiones en paralelo, en distintas zonas horarias, a una fracción del coste por sesión. La regla práctica es usar test moderado cuando el objetivo es entender el "por qué" con profundidad, y no moderado cuando el objetivo es detectar patrones a mayor escala con menos presupuesto por sesión.

## Presencial vs. remoto

Esta es una segunda variable, independiente de la anterior: un test puede ser presencial (en persona, a menudo en un laboratorio de usabilidad con espejo unidireccional) o remoto (por videollamada o mediante una plataforma). Lo presencial permite observar lenguaje corporal y usar dispositivos o prototipos físicos con más fidelidad, pero es caro y limita la muestra a quien pueda desplazarse. Lo remoto amplía enormemente el alcance geográfico y reduce costes, a cambio de perder parte de esa observación no verbal y depender de que la tecnología del participante funcione bien.

## Guerrilla testing: rapidez por encima de rigor

El **guerrilla testing** lleva la idea de "rápido y barato" al extremo: consiste en abordar a personas disponibles en un entorno informal (una cafetería, un pasillo de la oficina, un evento) y pedirles cinco o diez minutos para probar algo muy concreto, normalmente sin planificación previa ni incentivo económico. Sacrifica representatividad de la muestra (esas personas no necesariamente encajan con el perfil objetivo del producto) a cambio de una velocidad casi inmediata. Es adecuado para validar decisiones de bajo riesgo y alta incertidumbre ("¿esta etiqueta se entiende?"), pero no para decisiones de negocio importantes, donde conviene un método más riguroso.

## El protocolo "think aloud"

Casi todos los formatos anteriores se combinan con el **protocolo think aloud** (pensar en voz alta): se pide al participante que verbalice continuamente sus pensamientos mientras interactúa con el producto —qué espera que pase, qué le sorprende, qué le confunde— en lugar de completar la tarea en silencio. Esto convierte procesos mentales normalmente invisibles (dudas, suposiciones erróneas, momentos de confianza) en datos observables. Requiere práctica moderando: hay que recordar suavemente al participante que siga verbalizando sin ayudarle a resolver la tarea, algo que a los moderadores nuevos les cuesta especialmente resistir cuando ven a alguien atascado.

## Cuántas sesiones y con qué frecuencia

Un error habitual es tratar el testing de usabilidad como un evento puntual antes del lanzamiento, en lugar de un hábito continuo. Los equipos maduros integran sesiones cortas y frecuentes (por ejemplo, cinco usuarios cada dos semanas, alternando moderado y no moderado según la pregunta) en su ritmo normal de trabajo, en vez de reservar toda la investigación para una única ronda masiva justo antes de lanzar, momento en el que ya es tarde y caro para cambiar decisiones estructurales.
