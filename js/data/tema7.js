/* ============================================================
   tema7.js — Tema 7: Medición de parámetros eléctricos,
   prevención laboral y protección ambiental.
   Contenido elaborado a partir del libro del módulo.
   ============================================================ */

"use strict";

registrarTema({
  id: 7,
  titulo: "Medición de parámetros eléctricos, prevención laboral y protección ambiental",
  descripcionCorta: "Voltaje, intensidad, resistencia y potencia; el polímetro; la fuente de alimentación y sus fallos; los SAI; prevención de riesgos laborales y protección del medioambiente.",

  resumen:
    "<p>Un técnico microinformático necesita <strong>conocimientos básicos de electricidad</strong>: comprobar un cargador, medir una fuente o dimensionar la instalación de una oficina sin sobrecargarla. Los parámetros fundamentales son el <strong>voltaje</strong> (diferencia de potencial, en voltios), la <strong>intensidad</strong> (cantidad de corriente, en amperios — «lo que mata no es el voltaje sino la intensidad»), la <strong>resistencia</strong> (Ω) y la <strong>potencia</strong> (vatios). Los equipos trabajan internamente con <strong>corriente continua</strong>, pero el enchufe suministra <strong>alterna</strong> (símbolo ~): la <strong>fuente de alimentación</strong> realiza la conversión en cuatro pasos — <strong>transformación, rectificación, filtrado y estabilización</strong>.</p>" +
    "<p>El <strong>polímetro o multímetro</strong> permite medir voltajes (CC y CA), intensidad en CC, resistencias, continuidad y componentes como diodos y transistores. Las fuentes de calidad se reconocen por su eficiencia (certificación <strong>80 PLUS</strong>, del básico al <strong>titanio</strong>), el <strong>PFC activo</strong>, sus conexiones modulares y su bajo ruido. Sus dos fallos típicos: dejar de dar las tensiones correctas (difícil de detectar) o dejar de suministrar corriente (el más común). Se diagnostican con la <strong>prueba del ventilador</strong> (puentear el cable verde PS_ON con un negro GND) y midiendo con polímetro o tester.</p>" +
    "<p>Un <strong>SAI</strong> es un sistema redundante de suministro eléctrico que protege frente a los <strong>defectos de la señal</strong> (cortes, microcortes, bajadas y subidas de voltaje, transitorios, ruido eléctrico…). Tipos: <strong>offline/stand by</strong> (básico, doméstico), <strong>interactivo</strong> (añade AVR) y <strong>online</strong> (máxima calidad, salas de servidores). Su carga se mide en <strong>VA</strong> y conviene dimensionarlo al menos un <strong>25 % por encima</strong> de lo necesario.</p>" +
    "<p>El tema cierra con la <strong>prevención de riesgos laborales</strong> en entornos informáticos (posturas, pantalla, fatiga visual, ruido, climatización…) y la <strong>protección ambiental</strong>: directiva <strong>RoHS</strong>, reciclaje de residuos electrónicos, reducción del consumo energético y el <strong>gasto vampiro</strong> (consumo en stand by).</p>",

  mapa: [
    {
      titulo: "Parámetros eléctricos",
      hijos: [
        "Voltaje (V, voltios) = diferencia de potencial — voltímetro",
        "Intensidad (I, amperios) — «lo que mata es la intensidad»",
        "Resistencia (Ω) — óhmetro; aislantes (plástico) y conductores (plata, cobre)",
        "Potencia (P, vatios W) = energía que consume un dispositivo",
        "Corriente continua (equipos por dentro) vs. alterna (~, enchufe)",
        "Energía estática: descargarse tocando metal sin pintar"
      ]
    },
    {
      titulo: "El polímetro",
      hijos: [
        "Mide voltaje (CC y CA), intensidad (CC), resistencias, continuidad, diodos y transistores",
        "Conmutador en la tensión inmediatamente superior (19 V → escala de 20 V)",
        "Resistencias: con el circuito SIN alimentar",
        "Intensidad: el polímetro se conecta EN SERIE",
        "Manos secas, no ambientes húmedos, desconectar puntas al cambiar de escala"
      ]
    },
    {
      titulo: "Fuente de alimentación",
      hijos: [
        "Transformación → Rectificación (puente de Graetz) → Filtrado (condensadores) → Estabilización (regulador)",
        "Eficiencia: 80 PLUS (bronce, plata, oro, platino, titanio)",
        "PFC activo = más calidad; fuentes modulares",
        "Conectores: ATX 24 pines, ATX-12V (4/8), SATA, MOLEX",
        "Colores: amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa",
        "Fallos: tensiones incorrectas o sin corriente; prueba del ventilador (verde + negro)"
      ]
    },
    {
      titulo: "SAI",
      hijos: [
        "Defectos de la señal: cortes, microcortes, bajo/sobre voltaje, transitorios, ruido…",
        "Offline/stand by (doméstico) · Interactivo (AVR) · Online (servidores)",
        "AVR = regulador automático de voltaje",
        "Tiempo de conmutación: 2-10 ms",
        "Carga en VA; dimensionar +25 %; autonomía: a mitad de carga, doble de tiempo"
      ]
    },
    {
      titulo: "Prevención y medioambiente",
      hijos: [
        "Pantalla a más de 40 cm y bajo la horizontal (hasta 60º)",
        "Cargas: espalda recta, levantar con las piernas",
        "Oficina: 20-22 °C invierno / 24-26 °C verano; humedad 30-70 %; ruido < 55 dB; extintores de CO2",
        "Burnout (trabajador quemado) y mobbing (acoso laboral)",
        "RoHS: restringe plomo, mercurio, cadmio…",
        "Gasto vampiro = consumo en stand by (≈ 2,3 % en España)"
      ]
    }
  ],

  conceptosClave: [
    "<strong>Tensión eléctrica</strong>: se produce al poner en contacto dos cuerpos con cargas diferentes; los electrones fluyen del cuerpo más negativo al más positivo hasta igualarse.",
    "<strong>Voltaje</strong> = diferencia de potencial. Letra <strong>V</strong>, se mide en <strong>voltios</strong> con un <strong>voltímetro</strong>.",
    "<strong>Intensidad</strong> = cantidad de corriente que pasa por un conductor en un tiempo determinado. Letra <strong>I</strong>, se mide en <strong>amperios</strong>.",
    "«Lo que mata no es el voltaje sino la <strong>intensidad</strong>»: una chispa estática puede superar los 1000 V y una batería de coche son solo 12 V, pero la batería es más peligrosa.",
    "<strong>Resistencia</strong>: se representa con <strong>Ω</strong> (omega) y se mide con el <strong>ohmímetro u óhmetro</strong> (o un multímetro).",
    "<strong>Aislantes</strong>: no dejan pasar electrones (el más usado: el <strong>plástico</strong>). <strong>Conductores</strong>: plata y cobre; se usa el <strong>cobre</strong> por cualidades y precio.",
    "<strong>Potencia</strong> = energía que consume un dispositivo. Letra <strong>P</strong>, en <strong>vatios (W)</strong>.",
    "<strong>Corriente continua</strong>: flujo continuo con un sentido (del polo − al +). <strong>Corriente alterna</strong> (~): pasa de voltaje positivo a negativo y vuelta.",
    "Los equipos <strong>internamente trabajan con corriente continua</strong>; el enchufe da alterna.",
    "El <strong>polímetro</strong> mide: voltaje (CC y CA), intensidad (CC), resistencias, continuidad, diodos y transistores.",
    "Para medir, colocar el conmutador rotativo en la tensión <strong>inmediatamente superior</strong> (para 19 V → escala de 20 V). Si se desconoce el valor: empezar por el más alto e ir bajando.",
    "Resistencias: <strong>nunca con el circuito alimentado</strong>. Intensidad: el polímetro se conecta <strong>en serie</strong>.",
    "La fuente de alimentación convierte alterna en continua en 4 pasos: <strong>transformación → rectificación → filtrado → estabilización</strong>.",
    "<strong>Transformación</strong>: reduce 220 V a unos 12 V (sigue siendo alterna). <strong>Rectificación</strong>: alterna → continua con el <strong>puente de Graetz</strong> (diodos).",
    "<strong>Filtrado</strong>: «aplana» la señal con condensadores. <strong>Estabilización</strong>: un regulador evita que las variaciones de entrada afecten a la salida.",
    "<strong>80 PLUS</strong>: certifica fuentes con eficiencia superior al 80 %. Categorías: 80 PLUS, bronce, plata, oro, platino y <strong>titanio (la más eficiente)</strong>.",
    "<strong>PFC activo</strong>: señal de calidad; suele implicar eficiencia > 90 % y menos interferencias. Si el fabricante no lo indica, no suele ser activo.",
    "Conectores de la fuente: <strong>ATX 24 pines</strong> (placa), <strong>ATX-12V 4/8 pines</strong> (procesador), <strong>SATA</strong> (discos/SSD/ópticas), <strong>MOLEX</strong> (hoy ventiladores y modding).",
    "Colores de los cables: <strong>amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa (GND)</strong>.",
    "Fallos de fuente: 1) tensiones incorrectas (difícil de detectar, los componentes fallan); 2) sin corriente (el más común, fácil de localizar).",
    "<strong>Prueba del ventilador</strong>: aislar la fuente y puentear el cable <strong>verde (PS_ON)</strong> con uno <strong>negro (GND)</strong>; si el ventilador no gira, la fuente está averiada.",
    "Los <strong>condensadores</strong> de la fuente almacenan mucha energía <strong>incluso apagada</strong>: es peligroso manipularla cargada.",
    "<strong>SAI</strong> = sistema redundante de suministro eléctrico: da corriente cuando hay un corte y corrige defectos de la señal.",
    "Defectos de la señal: <strong>corte</strong> (cae por debajo del 10 %), <strong>microcorte</strong>, <strong>bajo voltaje momentáneo</strong> (10-90 %), <strong>bajo voltaje permanente</strong> (> 1 minuto), <strong>sobrevoltaje momentáneo/permanente</strong> (> 110 %), <strong>transitorios</strong> (picos breves, rayos), <strong>ruido eléctrico</strong> y <strong>cambio de frecuencia</strong>.",
    "Tipos de SAI: <strong>offline/stand by</strong> (barato, sin AVR, doméstico, no > 2000 VA), <strong>interactivo</strong> (con AVR, no > 5000 VA) y <strong>online</strong> (inversor siempre activo, máxima calidad, servidores).",
    "<strong>AVR</strong> (Automatic Voltage Regulator): regula el flujo eléctrico frente a subidas y bajadas; casi todos los SAI lo incluyen.",
    "<strong>Tiempo de conmutación</strong> de un SAI: de <strong>2 a 10 milisegundos</strong>.",
    "Carga de un SAI: en <strong>VA</strong> (voltios-amperios). VA = voltios × amperios del equipo. Dimensionar el SAI al menos un <strong>25 % más</strong> y no superar el 75 % de su capacidad.",
    "<strong>Autonomía</strong>: si al 50 % de carga da 15 minutos, al 25 % dará el doble (≈ 30 minutos).",
    "Ergonomía: pantalla a <strong>más de 40 cm</strong> de los ojos, entre la horizontal y <strong>60º bajo la horizontal</strong>; silla giratoria con apoyo lumbar.",
    "Cargas pesadas: pies separados, rodillas flexionadas, <strong>espalda recta</strong>; levantar con las piernas, nunca con la espalda.",
    "Oficina: <strong>20-22 °C</strong> en invierno y <strong>24-26 °C</strong> en verano; humedad <strong>30-70 %</strong>; ruido < <strong>55 dB</strong>; extintores de <strong>CO2</strong>; no encadenar regletas.",
    "<strong>Burnout</strong> = síndrome del trabajador quemado; <strong>mobbing</strong> = acoso laboral.",
    "<strong>RoHS</strong> (Restriction of Hazardous Substances, 2003): restringe sustancias peligrosas (plomo, cadmio, mercurio, cromo hexavalente, PBB/PBDE) en aparatos eléctricos y electrónicos.",
    "<strong>Gasto vampiro</strong>: consumo por tener un dispositivo enchufado sin usarlo (stand by). En España ronda el <strong>2,3 %</strong>.",
    "<strong>TDP</strong> (Thermal Design Power): vatios que necesita el procesador. Más vatios = más rendimiento, pero más calor y consumo.",
    "Un portátil consume entre un <strong>50 y un 85 % menos</strong> que un sobremesa (ADEME). El componente que más consume es el <strong>microprocesador</strong>."
  ],

  frasesMemorizar: [
    "«Voltaje = diferencia de potencial, en VOLTIOS. Intensidad = cantidad de corriente, en AMPERIOS. Lo que mata es la INTENSIDAD.»",
    "«Resistencia = Ω, óhmetro. Potencia = P, vatios (W).»",
    "«El enchufe da ALTERNA (~); los equipos por dentro usan CONTINUA.»",
    "«Fuente de alimentación: Transformar → Rectificar → Filtrar → Estabilizar (TRFE).»",
    "«La rectificación usa el puente de Graetz (diodos): de alterna a continua.»",
    "«80 PLUS: bronce, plata, oro, platino y TITANIO, que es la más eficiente.»",
    "«Cables de la fuente: amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa.»",
    "«Prueba del ventilador: puentear el cable VERDE (PS_ON) con un NEGRO (GND).»",
    "«Los condensadores de la fuente guardan energía aunque esté apagada y desenchufada.»",
    "«Polímetro: resistencias SIN alimentar el circuito; intensidad EN SERIE; escala inmediatamente superior.»",
    "«SAI: offline (básico), interactivo (con AVR) y online (inversor siempre activo, para servidores).»",
    "«El SAI conmuta en 2-10 milisegundos; su carga se mide en VA y se dimensiona un 25 % de más.»",
    "«SAI a mitad de carga = doble de autonomía: 50 % → 15 min, 25 % → 30 min.»",
    "«Pantalla a más de 40 cm y nunca por encima de los ojos (hasta 60º bajo la horizontal).»",
    "«Burnout = trabajador quemado; mobbing = acoso laboral.»",
    "«RoHS restringe las sustancias peligrosas: plomo, mercurio, cadmio, cromo hexavalente…»",
    "«Gasto vampiro: lo que consume un aparato enchufado SIN usarse (stand by).»"
  ],

  apartados: [
    {
      titulo: "7.1 Parámetros eléctricos básicos",
      html:
        "<p>La <strong>tensión eléctrica</strong> se produce cuando se ponen en contacto dos cuerpos con cargas diferentes: los electrones fluyen del cuerpo cargado más negativamente al más positivo hasta que las cargas se igualan.</p>" +
        "<h4>Voltaje frente a intensidad</h4>" +
        "<ul>" +
        "<li><strong>Voltaje</strong>: la diferencia de potencial (también llamada tensión eléctrica). Se representa con la letra <strong>V</strong>, su unidad es el <strong>voltio</strong> y se mide con el <strong>voltímetro</strong>.</li>" +
        "<li><strong>Intensidad</strong>: la cantidad de corriente que pasa por un conductor en un tiempo determinado. Se representa con la letra <strong>I</strong> y se mide en <strong>amperios</strong>.</li>" +
        "<li><strong>Lo que mata no es el voltaje, sino la intensidad</strong>: una descarga estática entre dos personas puede superar los 1000 V (con poquísima intensidad), mientras que una batería de coche, con solo 12 V, puede ser mucho más peligrosa.</li>" +
        "</ul>" +
        "<h4>Resistencia</h4>" +
        "<ul>" +
        "<li>Se representa con la letra <strong>omega mayúscula (Ω)</strong> y se mide con un <strong>ohmímetro u óhmetro</strong> (o con un multímetro).</li>" +
        "<li><strong>Materiales aislantes</strong>: no permiten el paso de electrones. El más utilizado en electrónica es el <strong>plástico</strong>.</li>" +
        "<li><strong>Materiales conductores</strong>: permiten el paso de electrones. La <strong>plata</strong> y el <strong>cobre</strong> son sumamente conductores; por cualidades y precio se usa mucho el cobre.</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema7/fig7-02.jpg" alt="Materiales aislantes y conductores" loading="lazy"><figcaption>Figura 7.2 del libro — Materiales aislantes y conductores.</figcaption></figure>' +
        "<h4>Potencia</h4>" +
        "<p>Es la <strong>energía que consume un dispositivo</strong>. Se representa con la letra <strong>P</strong> y se expresa en <strong>vatios (W)</strong>. Cuando se dice que un dispositivo gasta 50 vatios, se entiende que es a la hora.</p>" +
        "<h4>Corriente continua y corriente alterna</h4>" +
        "<ul>" +
        "<li><strong>Continua (CC)</strong>: flujo continuo de electrones con un sentido determinado, del polo negativo al positivo.</li>" +
        "<li><strong>Alterna (CA)</strong>: va de un voltaje positivo a uno negativo y vuelta (onda sinusoidal). Se representa con el símbolo <strong>~</strong>.</li>" +
        "<li><strong>Fundamental</strong>: los equipos trabajan internamente con corriente <strong>continua</strong>; en el enchufe se mide <strong>alterna</strong> y en una batería o el interior del equipo, continua.</li>" +
        "</ul>" +
        "<h4>Energía estática</h4>" +
        "<p>Se produce al acumularse cargas eléctricas en un objeto (como al frotar un bolígrafo sobre lana). Antes de ensamblar o mantener un equipo hay que <strong>descargarse</strong> tocando objetos metálicos grandes — patas de mesa, un grifo (mejor si la tubería es metálica), la caja del equipo — preferiblemente <strong>sin pintar</strong>.</p>"
    },
    {
      titulo: "7.2 El polímetro o multímetro",
      html:
        "<p>El <strong>polímetro o multímetro</strong> permite medir, entre otras cosas:</p>" +
        "<ul>" +
        "<li>Voltaje, en corriente continua y alterna.</li>" +
        "<li>Intensidad, en corriente continua.</li>" +
        "<li>Resistencias.</li>" +
        "<li>Continuidad de un circuito (detectar cortocircuitos).</li>" +
        "<li>Componentes electrónicos como transistores y diodos.</li>" +
        "</ul>" +
        "<p>El uso más habitual para el técnico es <strong>medir voltajes en corriente continua</strong>: las salidas de una fuente de alimentación o el cargador de un portátil, para descartar que una avería venga del suministro.</p>" +
        "<h4>Cómo medir el cargador de un portátil</h4>" +
        "<ol>" +
        "<li>Verificar el voltaje nominal de salida (output) del transformador: por ejemplo, <strong>19 V y 2,1 A</strong>.</li>" +
        "<li>Colocar el conmutador rotativo en la tensión <strong>inmediatamente superior</strong> a la que se va a medir (para 19 V → escala de <strong>20 V</strong>).</li>" +
        "<li>Conectar las puntas y medir (un clip ayuda si la punta no entra en el conector). Una pequeña variación sobre el nominal es normal.</li>" +
        "</ol>" +
        "<p>Si se <strong>desconoce</strong> el valor: empezar por la escala más alta e ir bajando (desconectando las puntas en cada cambio). Si el aparato marca <strong>fuera de rango</strong>, subir a la escala superior. En continua hay que respetar las <strong>polaridades</strong>.</p>" +
        "<h4>Consejos de uso</h4>" +
        "<ul>" +
        "<li>Desconectar las puntas antes de cambiar de escala.</li>" +
        "<li><strong>No medir resistencias con el circuito alimentado.</strong></li>" +
        "<li>No tocar las puntas metálicas durante la medición.</li>" +
        "<li>En pruebas de capacidades, los condensadores deben estar descargados.</li>" +
        "<li>Manos siempre secas y evitar ambientes muy húmedos.</li>" +
        "<li>Escoger la función y el rango apropiados, sin exceder los márgenes de cada escala.</li>" +
        "<li>Para medir <strong>intensidad</strong>, el polímetro se conecta <strong>en serie</strong> (no en paralelo), para que la corriente pase por su interior.</li>" +
        "</ul>"
    },
    {
      titulo: "7.3 La fuente de alimentación",
      html:
        "<p>Los equipos funcionan con corriente continua, pero el enchufe da alterna: la fuente debe transformarla. Realiza <strong>cuatro procesos, en este orden</strong>:</p>" +
        "<ol>" +
        "<li><strong>Transformación</strong>: reduce la tensión de entrada de 220 V a unos 12 V mediante un transformador. La corriente <strong>sigue siendo alterna</strong>.</li>" +
        "<li><strong>Rectificación</strong>: convierte la alterna en continua mediante un puente rectificador de diodos, el <strong>puente de Graetz</strong>. A partir de aquí el voltaje siempre es mayor que cero.</li>" +
        "<li><strong>Filtrado</strong>: la continua resultante no es constante; con uno o varios <strong>condensadores</strong> se eliminan las oscilaciones y la señal se «aplana».</li>" +
        "<li><strong>Estabilización</strong>: un <strong>regulador</strong> consigue que las variaciones de la señal de entrada no afecten a la salida.</li>" +
        "</ol>" +
        "<p>Las fuentes más utilizadas han sido las <strong>ATX</strong> (15 × 14 × 8,6 cm). Hoy muchas cajas compactas usan fuentes menores no estándar, cuyo repuesto puede ser caro y difícil de encontrar.</p>" +
        "<h4>Características de una fuente de calidad</h4>" +
        "<ul>" +
        "<li><strong>Eficiencia</strong>: aceptable a partir del <strong>80 %</strong>; las de calidad superan el 90 %. El programa <strong>80+/80 PLUS</strong> cataloga las fuentes con eficiencia superior al 80 % (ahorran ≈ 33 % frente a una normal). Categorías: 80 PLUS, <strong>bronce, plata, oro, platino y titanio</strong> (titanio = la más eficiente).</li>" +
        "<li>Requisitos 80 PLUS: <strong>PFC ≥ 90 %</strong>, eficiencia mínima del 80 % probada con cargas del <strong>20, 50 y 100 %</strong>, y no ser redundantes, con las salidas típicas de 3,3 V, 5 V y 12 V.</li>" +
        '</ul>' +
        '<figure class="figura"><img src="assets/img/tema7/fig7-08.jpg" alt="Logotipos de la certificación 80 PLUS" loading="lazy"><figcaption>Figura 7.8 del libro — Categorías de la certificación 80 PLUS.</figcaption></figure>' +
        '<ul>' +
        "<li>Ventajas: ahorro en la factura, disipan menos calor (menos aire acondicionado), necesitan menos potencia, <strong>se averían menos</strong> y contaminan menos.</li>" +
        "<li><strong>PFC</strong> (Power Factor Correction): las fuentes de calidad tienen PFC <strong>activo</strong> (si el fabricante no lo indica, no suele serlo); implica eficiencia > 90 %, mejor corriente de salida y menos interferencias electromagnéticas.</li>" +
        "<li><strong>Conexiones</strong>: las fuentes <strong>modulares</strong> (de calidad) permiten conectar solo los cables necesarios. Mínimo recomendable: <strong>tres cables SATA</strong>.</li>" +
        "<li><strong>Ruido</strong>: bajo nivel sonoro = calidad. <strong>Ventiladores</strong>: normalmente uno; en fuentes de servidor, algunas son <em>dual fan</em>.</li>" +
        "</ul>" +
        "<h4>Conectores</h4>" +
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Conector</th><th>Para qué sirve</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>ATX</strong></td><td>Alimenta la placa base. <strong>24 pines</strong> (las versiones antiguas tenían 20).</td></tr>" +
        "<tr><td><strong>ATX-12V</strong></td><td>Alimenta el <strong>procesador</strong>. De 4 u 8 pines; el de 8 (doble) se usa con micros que demandan gran potencia.</td></tr>" +
        "<tr><td><strong>SATA</strong></td><td>Alimenta unidades SATA: discos duros, SSD y ópticas.</td></tr>" +
        "<tr><td><strong>MOLEX</strong></td><td>Antes para discos y ópticas; hoy para ventiladores internos, modding, etc.</td></tr>" +
        "</tbody></table></div>" +
        "<p><strong>Colores de los cables</strong>: amarillo = 12 V, rojo = 5 V, naranja = 3,3 V y negro = masa (GND).</p>"
    },
    {
      titulo: "7.4 Fallos en las fuentes de alimentación",
      html:
        "<p>Un fallo de la fuente puede provocar la rotura de otros componentes. Los <strong>dos fallos más comunes</strong>:</p>" +
        "<ol>" +
        "<li><strong>Deja de suministrar las tensiones correctamente</strong>: el más difícil de detectar, porque la fuente sigue funcionando. Los componentes se comportan mal, no funcionan o se averían. Se detecta midiendo con <strong>polímetro o tester de fuentes</strong>.</li>" +
        "<li><strong>Deja de suministrar corriente</strong>: el más común. El fallo interno de algún componente apaga la fuente; localizar la avería suele ser sencillo.</li>" +
        "</ol>" +
        "<h4>La prueba del ventilador</h4>" +
        "<ol>" +
        "<li>Desconectar la fuente de la corriente y de todos los componentes (que quede aislada).</li>" +
        "<li><strong>Puentear</strong> con un clip o cable el cable <strong>verde (PS_ON)</strong> con cualquier <strong>negro (GND)</strong>.</li>" +
        "<li>Conectarla a la corriente: si el ventilador <strong>no gira</strong>, la fuente está averiada. Si gira, probablemente funcione, pero para asegurarlo hay que <strong>medir los voltajes</strong> (amarillo 12 V, rojo 5 V, naranja 3,3 V contra negro) con polímetro o tester. Si difieren mucho del nominal o fluctúan, la fuente puede estar averiada.</li>" +
        "</ol>" +
        "<p>El <strong>tester de fuentes</strong> es más rápido y sencillo que el polímetro: mide los voltajes y avisa si alguno está fuera de los parámetros normales.</p>" +
        '<figure class="figura"><img src="assets/img/tema7/fig7-09.jpg" alt="Proceso de comprobación de una fuente de alimentación" loading="lazy"><figcaption>Figura 7.9 del libro — Proceso de comprobación de una fuente de alimentación.</figcaption></figure>' +
        "<h4>Origen de los fallos y reparación</h4>" +
        "<ul>" +
        "<li>Causas habituales: <strong>sobretensiones</strong> y <strong>sobrecalentamiento</strong> (evitar la suciedad y el polvo).</li>" +
        "<li>¿Merece la pena repararla? Solo si es una fuente <strong>de calidad</strong>; si no, se sustituye.</li>" +
        "<li><strong>Peligro</strong>: los condensadores de la fuente almacenan mucha energía <strong>incluso estando apagada</strong>; es peligroso manipularla con los condensadores cargados.</li>" +
        "</ul>"
    },
    {
      titulo: "7.5 Sistemas de alimentación ininterrumpida (SAI)",
      html:
        "<p>Un <strong>SAI</strong> es un <strong>sistema redundante de suministro eléctrico</strong>: cuando hay un corte, proporciona la electricidad. Los profesionales, además, entregan una señal perfecta pase lo que pase en la red. Incorporan rectificadores y reguladores de tensión. En empresas con servidores su instalación es prácticamente obligatoria (un corte puede causar pérdida de datos, pérdidas económicas y fallos de servicio).</p>" +
        "<h4>Defectos de la señal eléctrica</h4>" +
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Defecto</th><th>Qué es</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Corte de energía</strong></td><td>La energía cae <strong>por debajo del 10 %</strong> (mantenimientos, roturas de cables…).</td></tr>" +
        "<tr><td><strong>Microcortes</strong></td><td>Caídas del suministro <strong>muy breves</strong>.</td></tr>" +
        "<tr><td><strong>Bajo voltaje momentáneo</strong></td><td>Bajada entre el <strong>10 % y el 90 %</strong>; más frecuente que los cortes.</td></tr>" +
        "<tr><td><strong>Bajo voltaje permanente</strong></td><td>Por debajo del 90 % durante <strong>más de un minuto</strong> (a veces lo provocan las compañías con mucha demanda). Lo solventan los estabilizadores.</td></tr>" +
        "<tr><td><strong>Sobrevoltaje momentáneo</strong></td><td>Se supera el <strong>110 %</strong> del voltaje nominal. Más probable que el bajo voltaje momentáneo.</td></tr>" +
        "<tr><td><strong>Sobrevoltaje permanente</strong></td><td>Más del 110 % durante más de un minuto: <strong>fatídico</strong>, los dispositivos se sobrecalientan y rompen.</td></tr>" +
        "<tr><td><strong>Transitorios</strong></td><td>Picos de muy corta duración (p. ej., la caída de un <strong>rayo</strong>). Los SAI protegen frente a ellos.</td></tr>" +
        "<tr><td><strong>Ruido eléctrico</strong></td><td>La onda se distorsiona: corrupción de datos, fallos, desgaste… Un SAI de calidad lo elimina.</td></tr>" +
        "<tr><td><strong>Cambio de frecuencia</strong></td><td>Muy improbable, pero causaría comportamiento erróneo.</td></tr>" +
        "</tbody></table></div>" +
        "<h4>Tipos de SAI</h4>" +
        "<ul>" +
        "<li><strong>Stand by u offline</strong>: los más económicos y de menor capacidad. El interruptor de transferencia se activa al detectar la anomalía y el equipo toma corriente de la batería a través del inversor. No filtran la señal ni suelen tener AVR. Para suministros estables y ámbito doméstico; no aconsejables por encima de <strong>2000 VA</strong>.</li>" +
        "<li><strong>Interactivos</strong>: más sofisticados, añaden la función <strong>AVR</strong>. Solo usan la batería cuando falla el suministro (preservan su vida). Muy eficaces y fiables; no aconsejables por encima de <strong>5000 VA</strong>.</li>" +
        "<li><strong>Online (u online de conversión Delta)</strong>: gran capacidad; el <strong>inversor siempre está funcionando</strong>, de modo que la señal proviene únicamente del SAI: la de más alta calidad y estabilidad. Para salas de servidores, videovigilancia, instalaciones industriales y equipos críticos.</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema7/fig7-15.jpg" alt="Esquema de un SAI offline" loading="lazy"><figcaption>Figura 7.15 del libro — Esquema de funcionamiento de un SAI offline (stand by).</figcaption></figure>' +
        '<figure class="figura"><img src="assets/img/tema7/fig7-16.jpg" alt="Esquema de un SAI interactivo" loading="lazy"><figcaption>Figura 7.16 del libro — Esquema de funcionamiento de un SAI interactivo.</figcaption></figure>' +
        "<p><strong>AVR</strong> (Automatic Voltage Regulator): regula el flujo eléctrico frente a subidas y bajadas de la red. Casi todos los SAI lo incluyen. <strong>Tiempo de conmutación</strong>: al detectar el fallo, el interruptor conmuta en <strong>2-10 milisegundos</strong> y el inversor pasa a suministrar la energía de las baterías.</p>" +
        "<h4>Carga y autonomía</h4>" +
        "<ul>" +
        "<li>La carga se expresa en <strong>VA</strong> (voltios-amperios). Ejemplo del libro: cargador de 19 V y 2,1 A → 19 × 2,1 ≈ <strong>40 VA</strong> por equipo; para 10 equipos, 400 VA; dimensionando un <strong>25 % más</strong>: 400 × 1,25 = <strong>500 VA</strong>.</li>" +
        "<li>Conviene <strong>no superar el 75 %</strong> de la capacidad del SAI (margen de crecimiento y más autonomía).</li>" +
        "<li><strong>Autonomía</strong>: tiempo que puede alimentar los equipos conectados. A la mitad de carga, el doble de tiempo: si al 50 % da 15 minutos, al 25 % dará unos 30.</li>" +
        "<li>Las baterías del SAI <strong>se degradan</strong> con el tiempo: hay que contar con ello al comprarlo. Al arrancar, un equipo consume ≈ el 100 % de su potencia; después puede bajar hasta un 30 % menos.</li>" +
        "</ul>"
    },
    {
      titulo: "7.6 Prevención de riesgos laborales en entornos informáticos",
      html:
        "<p>En oficinas y despachos los accidentes suelen ser leves: caídas, golpes y accidentes de tráfico al ir o volver del trabajo (<strong>in itinere</strong>). Las patologías más comunes trabajando muchas horas con ordenadores son las asociadas a las <strong>pantallas</strong> y a la <strong>ergonomía</strong>.</p>" +
        "<ul>" +
        "<li><strong>Caídas y golpes</strong>: tropiezos con cables, golpes con cajones… Se evitan con <strong>orden y limpieza</strong>: cables canalizados, zonas de paso despejadas y suelos mojados señalizados.</li>" +
        "<li><strong>Posturas y movimientos forzados</strong>: la pantalla debe estar a <strong>más de 40 cm</strong> de los ojos y situada entre la línea de visión horizontal y <strong>60º bajo la horizontal</strong> (nunca elevada). El teclado, ni al borde de la mesa ni demasiado lejos. El ratón y el teclado causan muchos problemas de mano y muñeca (<strong>síndrome del túnel carpiano</strong>). Silla adecuada: giratoria, con apoyo lumbar, buenos apoyabrazos y asiento ligeramente inclinado hacia atrás (3-5º).</li>" +
        "<li><strong>Manipulación de cargas</strong>: pies separados, rodillas flexionadas, <strong>espalda recta</strong> y ligeramente inclinada hacia delante; elevar el peso <strong>con las piernas</strong>, nunca con la espalda.</li>" +
        "<li><strong>Fatiga visual</strong>: ajustar brillo y contraste, evitar reflejos en la pantalla e iluminar bien el lugar de trabajo (mejor luz natural).</li>" +
        "<li><strong>Ruido</strong>: dañino a nivel fisiológico. En salas de servidores, permanecer el menor tiempo posible y trabajar desde una sala aneja con terminales remotos. Evitar superar los <strong>55 decibelios</strong>.</li>" +
        "<li><strong>Climatización</strong>: clima homogéneo en humedad y temperatura; una mala configuración irrita ojos, nariz y garganta. Temperatura: <strong>20-22 °C en invierno</strong> y <strong>24-26 °C en verano</strong>; humedad entre el <strong>30 y el 70 %</strong>. No colocar puestos junto a salidas de aire acondicionado o radiadores.</li>" +
        "<li><strong>Electricidad e incendios</strong>: instalación revisada por un electricista; <strong>no encadenar regletas</strong> ni sobrecargar enchufes (riesgo de incendio); todo con toma de tierra; sistema contraincendios señalizado y con extintores adecuados para informática: <strong>los de CO2</strong>.</li>" +
        "<li><strong>Clima laboral</strong>: fomentar el buen ambiente y evitar el <strong>burnout</strong> (síndrome del trabajador quemado) y el <strong>mobbing</strong> (acoso laboral).</li>" +
        "</ul>"
    },
    {
      titulo: "7.7 Residuos electrónicos, protección ambiental y gasto energético",
      html:
        "<h4>Residuos electrónicos y RoHS</h4>" +
        "<p>Cada año se consumen más dispositivos electrónicos, que contienen metales pesados y sustancias tóxicas. En Europa, la directiva <strong>RoHS</strong> (<em>Restriction of Hazardous Substances</em>, febrero de 2003) restringe sustancias peligrosas: <strong>plomo, cadmio, mercurio, cromo hexavalente y retardantes de llama PBB/PBDE</strong>. El plomo de las soldaduras ya se erradicó. Un smartphone o portátil puede tener unos <strong>1000 componentes</strong>, muchos contaminantes; los metales pesados se <strong>acumulan en el cuerpo</strong> y no se pueden eliminar fisiológicamente.</p>" +
        "<p>Qué podemos hacer: apoyar a fabricantes respetuosos, <strong>no comprar si no es necesario</strong>, devolver los aparatos viejos al fabricante o llevarlos a un <strong>punto limpio</strong>, y nunca tirarlos a la calle o a la basura.</p>" +
        "<h4>Reducir el consumo energético</h4>" +
        "<ul>" +
        "<li><strong>Pocos equipos a mucho rendimiento consumen menos</strong> que muchos rindiendo poco: concentrar servidores con virtualización (VMWare, VirtualBox, Proxmox…).</li>" +
        "<li>Desconectar periféricos que no se usen (en stand by también consumen) y usar <strong>regletas con interruptor</strong> o programadores para apagar todo al final de la jornada.</li>" +
        "<li>Salvapantallas negro (el que menos consume), suspensión automática, cerrar aplicaciones en segundo plano y mantener el equipo <strong>optimizado</strong>.</li>" +
        "<li>Comprar equipos eficientes: un <strong>portátil consume entre un 50 y un 85 % menos</strong> que un sobremesa (datos de ADEME). No usar equipos obsoletos como servidores. Mejor <strong>impresoras multifuncionales</strong> que aparatos separados, y mejor digital que papel (imprimir a doble cara).</li>" +
        "<li>Los dispositivos <strong>USB</strong> son más eficientes que los conectados a la red eléctrica (cada transformador añade pérdidas).</li>" +
        "</ul>" +
        "<p><strong>Gasto vampiro</strong>: todo el gasto producido por tener un dispositivo enchufado <strong>sin utilizarse</strong> (el stand by). En España es del <strong>2,3 %</strong>. Monitores, sobremesas e impresoras son de los que más consumen en espera. El lema erróneo es que «un dispositivo apagado no consume».</p>" +
        '<figure class="figura"><img src="assets/img/tema7/fig7-21.jpg" alt="Gasto vampiro de los dispositivos en stand by" loading="lazy"><figcaption>Figura 7.21 del libro — El gasto vampiro: consumo de los aparatos enchufados sin usarse.</figcaption></figure>' +
        "<h4>Gasto de los equipos</h4>" +
        "<ul>" +
        "<li>El <strong>microprocesador (CPU) es el elemento que más energía consume</strong>. El <strong>TDP</strong> (Thermal Design Power) son los vatios que necesita: a más vatios, más rendimiento pero más calor y consumo (un Core i7 puede consumir 45 W; un Celeron, 6 W; un Atom, unos 2 W).</li>" +
        "<li>El gasto depende del uso: un equipo puede gastar <strong>26 W en idle</strong> y <strong>62 W a pleno funcionamiento</strong>. Consumos orientativos: ultrabook 21-28 W, portátil potente 54 W, sobremesa potente ≈ 217 W, monitor LCD 20-30 W, impresora 60 W, router/hub ≈ 40 W.</li>" +
        "<li>Un <strong>SSD consume menos que un HDD</strong>; la mayor diferencia se da en reposo (idle).</li>" +
        "<li>Ejercicio del libro: una oficina que deja todo encendido 24/7 («La Gastosa») gasta <strong>658 kW al mes (≈ 131,6 €)</strong> frente a los <strong>25 kW (≈ 5 €)</strong> de otra que apaga todo al terminar la jornada («La Ahorradora»): el mismo trabajo con muchísimo menos gasto.</li>" +
        "</ul>"
    }
  ],

  glosario: [
    { termino: "Voltaje (tensión eléctrica)", definicion: "Diferencia de potencial entre dos puntos. Se representa con 'V', se mide en voltios con un voltímetro." },
    { termino: "Intensidad", definicion: "Cantidad de corriente que pasa por un conductor en un tiempo determinado. Se representa con 'I' y se mide en amperios." },
    { termino: "Resistencia", definicion: "Oposición de un material al paso de la corriente. Se representa con Ω y se mide con un ohmímetro u óhmetro." },
    { termino: "Potencia", definicion: "Energía que consume un dispositivo. Se representa con 'P' y se expresa en vatios (W)." },
    { termino: "Corriente continua", definicion: "Flujo continuo de electrones con un sentido determinado (del polo negativo al positivo). Es la que usan internamente los equipos." },
    { termino: "Corriente alterna", definicion: "Corriente que pasa de un voltaje positivo a uno negativo y de vuelta (onda sinusoidal). Es la del enchufe y se representa con ~." },
    { termino: "Polímetro (multímetro)", definicion: "Instrumento que mide voltaje (CC y CA), intensidad (CC), resistencias, continuidad y componentes como diodos y transistores." },
    { termino: "Puente de Graetz", definicion: "Puente rectificador de diodos que transforma la corriente alterna en continua durante la rectificación de la fuente." },
    { termino: "80 PLUS", definicion: "Programa que cataloga las fuentes de alimentación con eficiencia superior al 80 %. Categorías: 80 PLUS, bronce, plata, oro, platino y titanio (la más eficiente)." },
    { termino: "PFC", definicion: "Power Factor Correction (factor de corrección de potencia). Las fuentes de calidad lo tienen activo: mayor eficiencia y menos interferencias." },
    { termino: "GND", definicion: "Abreviatura de ground (masa). Masa o conector negativo de una fuente o dispositivo; en la fuente, los cables negros." },
    { termino: "SAI", definicion: "Sistema de Alimentación Ininterrumpida: sistema redundante de suministro eléctrico que da corriente durante un corte y corrige los defectos de la señal." },
    { termino: "AVR", definicion: "Automatic Voltage Regulator: regulador automático que evita que las subidas y bajadas de tensión de la red afecten a los equipos. Casi todos los SAI lo incluyen." },
    { termino: "Tiempo de conmutación", definicion: "Tiempo que tarda el SAI en pasar a alimentar desde sus baterías al detectar un fallo: de 2 a 10 milisegundos." },
    { termino: "VA (voltios-amperios)", definicion: "Unidad en la que se expresa la carga que soporta un SAI. Se calcula multiplicando voltios por amperios del equipo." },
    { termino: "Autonomía (de un SAI)", definicion: "Tiempo que el SAI puede alimentar los equipos conectados. A menor carga, más tiempo: al 50 % da la mitad de tiempo que al 25 %." },
    { termino: "CPD", definicion: "Centro de Proceso de Datos: instalación con muchos servidores, comunicaciones rápidas e infraestructura para seguir funcionando aunque se pierda la corriente." },
    { termino: "Granja de servidores", definicion: "Grupo de servidores, generalmente en un CPD, que realiza una función concreta y conjunta." },
    { termino: "Workstation", definicion: "Máquina a caballo entre un equipo de sobremesa y un servidor; se usa donde se necesita gran capacidad de procesamiento (estudios de arquitectura, etc.)." },
    { termino: "Hub / Switch", definicion: "Dispositivos para interconectar equipos. El hub reenvía cada paquete a todas las salidas; el switch, solo al destinatario (es más complejo)." },
    { termino: "Virtualización", definicion: "Uso de software que emula un equipo hardware. Permite ahorrar hardware concentrando varias máquinas en una sola." },
    { termino: "In itinere", definicion: "Accidentes de tráfico ocurridos al desplazarse al lugar de trabajo o al abandonarlo." },
    { termino: "Burnout", definicion: "Síndrome del «trabajador quemado»: desgaste profesional por estrés laboral crónico." },
    { termino: "Mobbing", definicion: "Acoso laboral." },
    { termino: "RoHS", definicion: "Restriction of Hazardous Substances (2003): directiva europea que restringe sustancias peligrosas (plomo, cadmio, mercurio, cromo hexavalente, PBB/PBDE) en aparatos eléctricos y electrónicos." },
    { termino: "Gasto vampiro", definicion: "Gasto producido por tener un dispositivo enchufado sin utilizarse (stand by). En España ronda el 2,3 %." },
    { termino: "TDP", definicion: "Thermal Design Power: cantidad de vatios que necesita el procesador. Más vatios = más rendimiento, pero más calor y más consumo." },
    { termino: "ASIC", definicion: "Application Specific Integrated Circuit: chip construido para un fin específico (a diferencia de un SoC de propósito general). Se usa, por ejemplo, en el minado de criptomonedas." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Parámetros eléctricos y el polímetro",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es el voltaje?",
          opciones: { A: "La diferencia de potencial (tensión eléctrica), medida en voltios", B: "La cantidad de corriente que pasa por un conductor", C: "La energía que consume un dispositivo", D: "La oposición al paso de la corriente" },
          correcta: ["A"],
          explicacion: "Voltaje = diferencia de potencial. Se representa con 'V', su unidad es el voltio y se mide con un voltímetro."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la intensidad y en qué se mide?",
          opciones: { A: "La cantidad de corriente que pasa por un conductor en un tiempo determinado; se mide en amperios", B: "La diferencia de potencial; se mide en voltios", C: "La energía consumida; se mide en vatios", D: "La resistencia; se mide en ohmios" },
          correcta: ["A"],
          explicacion: "La intensidad ('I') es la cantidad de corriente que pasa por un conductor en un tiempo determinado y se mide en amperios."
        },
        {
          tipo: "unica",
          pregunta: "«Lo que mata no es el voltaje sino…»",
          opciones: { A: "la potencia", B: "la intensidad", C: "la resistencia", D: "la frecuencia" },
          correcta: ["B"],
          explicacion: "Una chispa estática entre personas puede superar los 1000 V con poquísima intensidad; una batería de coche de solo 12 V puede ser más peligrosa por su intensidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Con qué letra se representa la resistencia y con qué aparato se mide?",
          opciones: { A: "Con la omega mayúscula (Ω); se mide con un ohmímetro u óhmetro", B: "Con la 'R'; se mide con un voltímetro", C: "Con la 'I'; se mide con un amperímetro", D: "Con la 'W'; se mide con un vatímetro" },
          correcta: ["A"],
          explicacion: "La resistencia se representa con Ω y se mide con un ohmímetro u óhmetro (y, obviamente, también con un multímetro)."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el material aislante más utilizado en los dispositivos electrónicos?",
          opciones: { A: "El plástico", B: "El cobre", C: "La plata", D: "El aluminio" },
          correcta: ["A"],
          explicacion: "Los aislantes no permiten el desplazamiento de electrones; el más usado en electrónica es el plástico. Cobre y plata son conductores."
        },
        {
          tipo: "unica",
          pregunta: "Plata y cobre son sumamente conductores. ¿Por qué se usa mucho más el cobre en electricidad y electrónica?",
          opciones: { A: "Por sus cualidades y su precio", B: "Porque la plata no conduce la corriente", C: "Porque el cobre es aislante", D: "Porque el cobre pesa menos que el plástico" },
          correcta: ["A"],
          explicacion: "Ambos son muy buenos conductores, pero el cobre ofrece la mejor relación cualidades/precio."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la potencia y en qué unidad se expresa?",
          opciones: { A: "La energía que consume un dispositivo; se expresa en vatios (W)", B: "La corriente que pasa por un conductor; en amperios", C: "La diferencia de potencial; en voltios", D: "La oposición al paso de corriente; en ohmios" },
          correcta: ["A"],
          explicacion: "Potencia ('P') = energía que consume un dispositivo, en vatios (W). Cuando se dice que un aparato gasta 50 vatios, se entiende que es a la hora."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo fluye la corriente continua?",
          opciones: { A: "Como un flujo continuo de electrones con un sentido determinado, del polo negativo al positivo", B: "Pasando de voltaje positivo a negativo y vuelta", C: "En forma de onda sinusoidal", D: "Solo cuando hay corriente alterna cerca" },
          correcta: ["A"],
          explicacion: "La continua es un flujo continuo con sentido fijo (− → +). La alterna es la que oscila de positivo a negativo (onda sinusoidal)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué representa el símbolo ~?",
          opciones: { A: "La corriente alterna", B: "La corriente continua", C: "La resistencia", D: "La masa (GND)" },
          correcta: ["A"],
          explicacion: "El símbolo ~ representa la corriente alterna, que oscila entre voltajes positivos y negativos."
        },
        {
          tipo: "unica",
          pregunta: "¿Con qué tipo de corriente trabajan internamente los equipos informáticos?",
          opciones: { A: "Corriente continua", B: "Corriente alterna", C: "Corriente estática", D: "Depende del fabricante" },
          correcta: ["A"],
          explicacion: "Fundamental: los equipos trabajan internamente con corriente continua; por eso la fuente convierte la alterna del enchufe."
        },
        {
          tipo: "unica",
          pregunta: "Si se mide un enchufe de la pared con el polímetro, ¿qué tipo de corriente se medirá?",
          opciones: { A: "Corriente alterna", B: "Corriente continua", C: "Corriente estática", D: "Ninguna, los enchufes no se pueden medir" },
          correcta: ["A"],
          explicacion: "En el enchufe se mide corriente alterna; en una batería o un componente interno del equipo, corriente continua."
        },
        {
          tipo: "unica",
          pregunta: "Para descargarse de la energía estática antes de manipular componentes, conviene…",
          opciones: { A: "tocar objetos metálicos grandes (patas de mesa, grifos, la caja), mejor si no están pintados", B: "frotarse con un jersey de lana", C: "tocar objetos de plástico", D: "trabajar con guantes de lana" },
          correcta: ["A"],
          explicacion: "Los electrones acumulados se descargan tocando metal grande (mejor sin pintar): patas de mesa, un grifo con tubería metálica, la caja del equipo…"
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué se puede medir o probar con un polímetro? (señala las correctas)",
          opciones: { A: "Voltaje, en corriente continua y alterna", B: "Intensidad, en corriente continua", C: "Resistencias y continuidad de un circuito", D: "La velocidad de la conexión a Internet" },
          correcta: ["A", "B", "C"],
          explicacion: "El multímetro mide voltaje (CC y CA), intensidad (CC), resistencias y continuidad, y prueba componentes como diodos y transistores. La velocidad de Internet, no."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el uso más habitual del polímetro para un técnico microinformático?",
          opciones: { A: "Medir voltajes en corriente continua (salidas de la fuente, cargador del portátil…)", B: "Medir la temperatura del micro", C: "Programar la BIOS", D: "Medir la velocidad de los ventiladores" },
          correcta: ["A"],
          explicacion: "Generalmente se usa para medir voltajes en CC: los valores de salida de una fuente o de un cargador, para descartar que la avería venga del suministro."
        },
        {
          tipo: "unica",
          pregunta: "Para medir el cargador de un portátil de 19 V, ¿dónde hay que colocar el conmutador rotativo del polímetro?",
          opciones: { A: "En la tensión inmediatamente superior: 20 voltios", B: "Exactamente en 19 voltios", C: "En la tensión inmediatamente inferior: 12 voltios", D: "En corriente alterna y 200 voltios" },
          correcta: ["A"],
          explicacion: "Se selecciona la escala inmediatamente superior a la tensión que se va a medir: para 19 V, la escala de 20 V (en corriente continua)."
        },
        {
          tipo: "unica",
          pregunta: "Si se desconoce el valor de la tensión que se quiere medir, ¿cómo hay que proceder?",
          opciones: { A: "Colocar el conmutador en el valor más alto e ir bajando, desconectando las puntas en cada cambio de escala", B: "Empezar por el valor más bajo e ir subiendo", C: "Medir directamente en cualquier escala", D: "No se puede medir sin conocer el valor" },
          correcta: ["A"],
          explicacion: "Se empieza por el rango más alto y se va bajando hasta tener una lectura válida, sin olvidar desconectar las puntas en cada cambio. Si marca fuera de rango, se sube al rango superior."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué condición es imprescindible para medir resistencias con el polímetro?",
          opciones: { A: "Que el circuito NO esté alimentado", B: "Que el circuito esté conectado a la corriente", C: "Que sea corriente alterna", D: "Que la resistencia sea menor de 5 ohmios" },
          correcta: ["A"],
          explicacion: "Nunca se miden resistencias con el circuito alimentado. El procedimiento es como el de voltajes en CC, pero sin alimentación."
        },
        {
          tipo: "unica",
          pregunta: "Para medir la intensidad, ¿cómo se conecta el multímetro?",
          opciones: { A: "En serie, para que la corriente pase por dentro de él", B: "En paralelo, como para medir voltajes", C: "Sin tocar el circuito", D: "Solo por la punta negativa" },
          correcta: ["A"],
          explicacion: "A diferencia del voltaje (en paralelo), la intensidad se mide conectando el polímetro en serie, de forma que la corriente lo atraviese."
        },
        {
          tipo: "multiple",
          pregunta: "Consejos de uso correcto del polímetro (señala las correctas):",
          opciones: { A: "Desconectar las puntas antes de cambiar la escala", B: "Tener siempre las manos secas y evitar ambientes muy húmedos", C: "En pruebas de capacidades, los condensadores deben estar descargados", D: "Tocar las puntas metálicas durante la medición para estabilizar la lectura" },
          correcta: ["A", "B", "C"],
          explicacion: "Además: elegir función y rango apropiados y no exceder los márgenes de cada escala. Nunca hay que tocar las puntas metálicas mientras se mide."
        },
        {
          tipo: "unica",
          pregunta: "Al medir el cargador, el polímetro marca un valor ligeramente superior a los 19 V nominales. ¿Qué significa?",
          opciones: { A: "Es normal: siempre puede haber una pequeña variación y el equipo funcionará sin problema", B: "El cargador está averiado y hay que tirarlo", C: "El polímetro está roto", D: "Hay un cortocircuito en el cargador" },
          correcta: ["A"],
          explicacion: "Es difícil que mida 19 V exactos; pequeñas variaciones sobre el valor de referencia son normales. Solo preocupan diferencias grandes o voltajes que fluctúan."
        }
      ]
    },
    {
      nombre: "Paquete 2 · La fuente de alimentación: procesos, 80 PLUS, conectores y fallos",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Por qué todo equipo que se conecta a la red necesita una fuente de alimentación?",
          opciones: { A: "Porque el enchufe da corriente alterna y los equipos funcionan con corriente continua", B: "Porque el enchufe da corriente continua y los equipos usan alterna", C: "Para aumentar el voltaje de 220 a 1000 V", D: "Solo la necesitan los servidores" },
          correcta: ["A"],
          explicacion: "La fuente transforma la corriente alterna del enchufe en la continua que necesitan los componentes."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué orden realiza la fuente de alimentación sus cuatro procesos?",
          opciones: { A: "Transformación → Rectificación → Filtrado → Estabilización", B: "Rectificación → Transformación → Estabilización → Filtrado", C: "Filtrado → Transformación → Rectificación → Estabilización", D: "Estabilización → Filtrado → Rectificación → Transformación" },
          correcta: ["A"],
          explicacion: "TRFE: primero se reduce la tensión (transformación), luego se convierte en continua (rectificación), se aplana la señal (filtrado) y se estabiliza (estabilización)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué ocurre en la fase de TRANSFORMACIÓN?",
          opciones: { A: "Se reduce la tensión de entrada (de 220 V a unos 12 V), pero la corriente sigue siendo alterna", B: "Se convierte la alterna en continua", C: "Se eliminan las oscilaciones de la señal", D: "Se aumenta la tensión hasta 220 V" },
          correcta: ["A"],
          explicacion: "Un transformador reduce los 220 V a unos 12 V, más parecidos a lo que usan los componentes. OJO (trampa típica): en esta fase NO se convierte en continua, sigue siendo alterna."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué elemento realiza la RECTIFICACIÓN (alterna → continua)?",
          opciones: { A: "El puente de Graetz (puente rectificador de diodos)", B: "Un condensador", C: "Un regulador", D: "Un transformador" },
          correcta: ["A"],
          explicacion: "La rectificación usa el puente de Graetz, formado por diodos. A partir de ese momento el voltaje siempre es mayor que cero."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué componente se usa en el FILTRADO y para qué?",
          opciones: { A: "Uno o varios condensadores, para eliminar las oscilaciones y «aplanar» la señal", B: "Un diodo, para invertir la corriente", C: "Un ventilador, para enfriar la señal", D: "Un transformador, para reducir el voltaje" },
          correcta: ["A"],
          explicacion: "La continua recién rectificada no es constante: los condensadores suavizan la señal eliminando sus oscilaciones."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué consigue la ESTABILIZACIÓN?",
          opciones: { A: "Que las variaciones de la señal de entrada no afecten a la señal de salida, mediante un regulador", B: "Convertir la continua en alterna", C: "Reducir el ruido del ventilador", D: "Aumentar la potencia de la fuente" },
          correcta: ["A"],
          explicacion: "Con un regulador, la salida se mantiene estable aunque la entrada varíe."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué dimensiones tienen las fuentes ATX clásicas?",
          opciones: { A: "15 × 14 × 8,6 cm (ancho × fondo × alto)", B: "30 × 30 × 30 cm", C: "5 × 5 × 2 cm", D: "20 × 25 × 12 cm" },
          correcta: ["A"],
          explicacion: "Las ATX miden 15 × 14 × 8,6. Hoy muchas cajas compactas usan fuentes menores no estándar, cuyo repuesto es caro y difícil de encontrar."
        },
        {
          tipo: "unica",
          pregunta: "¿A partir de qué eficiencia se considera aceptable una fuente de alimentación?",
          opciones: { A: "Superior al 80 % (las de calidad superan el 90 %)", B: "Superior al 50 %", C: "Superior al 20 %", D: "La eficiencia no importa en una fuente" },
          correcta: ["A"],
          explicacion: "Una eficiencia superior al 80 % suele ser aceptable; existen fuentes de calidad con más del 90 %."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el programa 80+/80 PLUS?",
          opciones: { A: "Un programa que cataloga las fuentes con eficiencia superior al 80 %", B: "Un software de monitorización de temperaturas", C: "Una garantía de 80 meses", D: "Un protocolo de la BIOS" },
          correcta: ["A"],
          explicacion: "80 PLUS certifica fuentes con eficiencia superior al 80 %; estas fuentes ahorran un 33 % más que una fuente normal."
        },
        {
          tipo: "unica",
          pregunta: "De las categorías 80 PLUS, ¿cuál es la MÁS eficiente?",
          opciones: { A: "80 PLUS titanio", B: "80 PLUS oro", C: "80 PLUS bronce", D: "80 PLUS platino" },
          correcta: ["A"],
          explicacion: "El orden es: 80 PLUS, bronce, plata, oro, platino y titanio, siendo titanio la clasificación más eficiente."
        },
        {
          tipo: "multiple",
          pregunta: "Requisitos para que una fuente se catalogue como 80 PLUS (señala las correctas):",
          opciones: { A: "PFC de, al menos, el 90 % según el fabricante", B: "Eficiencia mínima del 80 %, probada con cargas del 20, 50 y 100 %", C: "No ser redundante y tener las salidas típicas de 3,3 V, 5 V y 12 V", D: "Tener obligatoriamente dos ventiladores (dual fan)" },
          correcta: ["A", "B", "C"],
          explicacion: "Los tres requisitos son PFC ≥ 90 %, eficiencia ≥ 80 % a cargas 20/50/100 % y factor de forma no redundante con salidas estándar. El dual fan es propio de fuentes de servidor, no un requisito."
        },
        {
          tipo: "multiple",
          pregunta: "Ventajas de las fuentes 80 PLUS (señala las correctas):",
          opciones: { A: "Ahorro en la factura eléctrica", B: "Disipan menos calor (menos gasto en aire acondicionado)", C: "Suelen averiarse menos, al calentarse menos", D: "Son siempre las más baratas de comprar" },
          correcta: ["A", "B", "C"],
          explicacion: "También necesitan menos potencia y evitan la polución. Suelen costar más al comprarlas, aunque se rentabilizan con el tiempo."
        },
        {
          tipo: "unica",
          pregunta: "Si el fabricante de una fuente no indica nada sobre el PFC, ¿qué suele significar?",
          opciones: { A: "Que el PFC no es activo", B: "Que el PFC es activo", C: "Que la fuente es 80 PLUS titanio", D: "Que la fuente no tiene condensadores" },
          correcta: ["A"],
          explicacion: "Si no se especifica, el PFC no suele ser activo. Con PFC activo la eficiencia suele superar el 90 %, la corriente de salida es de más calidad y hay menos interferencias electromagnéticas."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es una fuente de alimentación MODULAR?",
          opciones: { A: "Una en la que se conectan solo los cables que se necesitan (típico de fuentes de calidad)", B: "Una que se puede ampliar con más vatios", C: "Una sin ventilador", D: "Una con dos transformadores" },
          correcta: ["A"],
          explicacion: "En las modulares se añaden solo las conexiones necesarias. Una fuente debería traer de serie, como mínimo, tres cables SATA."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántos pines tiene el conector ATX que alimenta la placa base?",
          opciones: { A: "24 pines (las versiones antiguas tenían 20)", B: "8 pines", C: "4 pines", D: "12 pines" },
          correcta: ["A"],
          explicacion: "El conector ATX de la placa es de 24 pines (antes 20). No confundir con el ATX-12V del procesador, de 4 u 8 pines."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué alimenta el conector ATX-12V y cuándo se usa su versión de 8 pines?",
          opciones: { A: "Alimenta el procesador; el de 8 pines (doble) se usa con micros que demandan gran potencia", B: "Alimenta el disco duro; el de 8 pines es para SSD", C: "Alimenta la gráfica; el de 8 pines es para monitores 4K", D: "Alimenta los ventiladores; el de 8 pines es para refrigeración líquida" },
          correcta: ["A"],
          explicacion: "El ATX-12V alimenta el procesador. El de 8 pines duplica los cables del de 4 y se usa con procesadores de gran potencia (la placa debe tener también conector de 8)."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué se usa HOY en día el conector MOLEX?",
          opciones: { A: "Para alimentar ventiladores internos, elementos de modding, etc.", B: "Para alimentar la placa base", C: "Para alimentar el procesador", D: "Ya no existe en ninguna fuente" },
          correcta: ["A"],
          explicacion: "Antiguamente alimentaba discos duros y unidades ópticas (hoy eso lo hace el conector SATA); ahora se usa para ventiladores y modding."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tensiones corresponden a los cables amarillo, rojo, naranja y negro de la fuente?",
          opciones: { A: "12 V, 5 V, 3,3 V y masa, respectivamente", B: "5 V, 12 V, masa y 3,3 V", C: "3,3 V, masa, 12 V y 5 V", D: "Masa, 3,3 V, 5 V y 12 V" },
          correcta: ["A"],
          explicacion: "Amarillo = 12 V, rojo = 5 V, naranja = 3,3 V y negro = masa (GND). Imprescindible para medir la fuente con el polímetro."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son los dos fallos más comunes de una fuente y cuál es más difícil de detectar?",
          opciones: { A: "Dejar de dar las tensiones correctas (difícil de detectar, la fuente sigue funcionando) y dejar de suministrar corriente (el más común)", B: "Quemarse el ventilador y romperse la carcasa", C: "Perder el conector ATX y el MOLEX", D: "Subir de 12 a 24 voltios y bajar a 6" },
          correcta: ["A"],
          explicacion: "Si entrega tensiones incorrectas, los componentes fallan o se averían y cuesta detectarlo (se necesita polímetro o tester). Si deja de dar corriente —lo más común—, localizarlo es sencillo."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué consiste la «prueba del ventilador» de una fuente?",
          opciones: { A: "Aislar la fuente, puentear el cable verde (PS_ON) con uno negro (GND), enchufarla y ver si el ventilador gira", B: "Soplar el ventilador para ver si gira libre", C: "Cambiar el ventilador por uno nuevo", D: "Medir la temperatura del ventilador con el polímetro" },
          correcta: ["A"],
          explicacion: "Si el ventilador no gira, la fuente está averiada. Si gira, probablemente funcione, pero para asegurarlo hay que medir los voltajes con un polímetro o tester. Recuerda: los condensadores almacenan energía incluso con la fuente apagada."
        }
      ]
    },
    {
      nombre: "Paquete 3 · SAI y prevención de riesgos laborales",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es un SAI?",
          opciones: { A: "Un sistema redundante de suministro eléctrico que da corriente cuando hay un corte", B: "Un sistema de refrigeración líquida", C: "Un software de copias de seguridad", D: "Un tipo de fuente de alimentación modular" },
          correcta: ["A"],
          explicacion: "El SAI (Sistema de Alimentación Ininterrumpida) suministra electricidad ante un corte; los profesionales además entregan una señal perfecta corrigiendo los defectos de la red."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuándo se considera que hay un «corte de energía»?",
          opciones: { A: "Cuando la energía cae por debajo del 10 %", B: "Cuando sube por encima del 110 %", C: "Cuando baja entre el 10 % y el 90 %", D: "Cuando la onda se distorsiona" },
          correcta: ["A"],
          explicacion: "Corte o interrupción: la energía cae por debajo de un 10 % (mantenimientos de la compañía, rotura de cables…)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un microcorte?",
          opciones: { A: "Una caída del suministro eléctrico muy breve", B: "Una subida de tensión de un minuto", C: "Un pico producido por un rayo", D: "Una distorsión permanente de la onda" },
          correcta: ["A"],
          explicacion: "Los microcortes son caídas del suministro muy breves; un SAI los cubre sin que el equipo se entere."
        },
        {
          tipo: "unica",
          pregunta: "El «bajo voltaje momentáneo» se produce cuando la tensión baja…",
          opciones: { A: "entre un 10 % y un 90 %", B: "por debajo del 10 %", C: "por encima del 110 %", D: "exactamente al 50 %" },
          correcta: ["A"],
          explicacion: "La bajada se sitúa entre el 10 % y el 90 % y es más frecuente que los cortes de energía; afecta a muchos aparatos no pensados para tan poca energía."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué se produce a veces el bajo voltaje permanente de forma intencionada?",
          opciones: { A: "Porque cuando hay mucha demanda las compañías eléctricas bajan el voltaje a propósito para satisfacer a todos los clientes", B: "Porque los usuarios lo configuran en la BIOS", C: "Porque los SAI lo provocan", D: "Nunca es intencionado" },
          correcta: ["A"],
          explicacion: "Es la bajada por debajo del 90 % durante más de un minuto. Los estabilizadores de voltaje solventan este problema."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué defecto de la señal se considera «fatídico» porque sobrecalienta y rompe los dispositivos?",
          opciones: { A: "El sobrevoltaje permanente (más del 110 % durante más de un minuto)", B: "El microcorte", C: "El bajo voltaje momentáneo", D: "El cambio de frecuencia" },
          correcta: ["A"],
          explicacion: "Superar el 110 % del voltaje nominal durante más de un minuto suele ser fatídico para los dispositivos electrónicos."
        },
        {
          tipo: "unica",
          pregunta: "La caída de un rayo puede producir en la red eléctrica…",
          opciones: { A: "un transitorio o sobretensión transitoria (pico de muy corta duración)", B: "un cambio de frecuencia", C: "un bajo voltaje permanente", D: "ruido acústico" },
          correcta: ["A"],
          explicacion: "Los transitorios son picos de muy corta duración; normalmente los SAI protegen frente a ellos."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «ruido eléctrico» y por qué es peligroso?",
          opciones: { A: "La distorsión de la onda eléctrica; puede producir corrupción de datos, fallos, desgaste y sobrecalentamiento", B: "El sonido del ventilador de la fuente", C: "Una subida del 110 % del voltaje", D: "Una caída breve del suministro" },
          correcta: ["A"],
          explicacion: "Cuando la onda se distorsiona, los dispositivos sufren: datos corruptos, fallos, desgaste… Un SAI de calidad elimina los ruidos de la señal."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el AVR de un SAI?",
          opciones: { A: "El regulador automático de voltaje, que protege frente a subidas y bajadas de tensión de la red", B: "La batería interna del SAI", C: "El software de apagado automático", D: "El conector de la placa base" },
          correcta: ["A"],
          explicacion: "AVR = Automatic Voltage Regulator. Prácticamente la totalidad de los SAI del mercado lo incluyen para mayor protección."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el tiempo de conmutación típico de un SAI al detectar un fallo del suministro?",
          opciones: { A: "De 2 a 10 milisegundos", B: "De 2 a 10 segundos", C: "De 1 a 2 minutos", D: "Una hora" },
          correcta: ["A"],
          explicacion: "El interruptor conmuta en cuestión de milisegundos (2-10 ms) y el inversor pasa a suministrar la energía de las baterías."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué caracteriza a los SAI stand by u OFFLINE?",
          opciones: { A: "Son los más económicos, no filtran la señal ni suelen tener AVR; para suministros estables y ámbito doméstico", B: "Su inversor siempre está funcionando", C: "Son los de mayor capacidad del mercado", D: "Solo funcionan con servidores" },
          correcta: ["A"],
          explicacion: "El interruptor de transferencia se activa al detectar la anomalía. No son aconsejables cuando la demanda supera los 2000 VA."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué añade un SAI INTERACTIVO frente a un offline?",
          opciones: { A: "La función AVR; además solo demanda corriente de la batería cuando falla el suministro", B: "Un segundo ventilador", C: "Una pantalla táctil", D: "Nada, son idénticos" },
          correcta: ["A"],
          explicacion: "Los interactivos son más sofisticados: incorporan AVR y preservan la vida de la batería usándola solo ante fallos. No aconsejables por encima de 5000 VA."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde es recomendable utilizar un SAI ONLINE (de conversión Delta)?",
          opciones: { A: "En salas de servidores, videovigilancia, instalaciones industriales y equipos críticos", B: "Solo en casa", C: "En equipos que no superen los 100 VA", D: "Nunca: están obsoletos" },
          correcta: ["A"],
          explicacion: "En los online el inversor siempre está funcionando: la señal proviene únicamente del SAI y es de la más alta calidad y estabilidad."
        },
        {
          tipo: "unica",
          pregunta: "Un portátil tiene un cargador de 19 V y 2,1 A. ¿Qué carga aproximada representa para un SAI?",
          opciones: { A: "Unos 40 VA (19 × 2,1 = 39,9)", B: "Unos 21 VA", C: "Unos 400 VA", D: "Unos 19 VA" },
          correcta: ["A"],
          explicacion: "Es el ejercicio de Dimas: 19 × 2,1 = 39,9 ≈ 40 VA. Para 10 equipos, 400 VA; dimensionando un 25 % más, el SAI debería soportar al menos 500 VA."
        },
        {
          tipo: "unica",
          pregunta: "Si un SAI al 50 % de carga ofrece 15 minutos de autonomía, ¿cuánto ofrecerá al 25 % de carga?",
          opciones: { A: "El doble: alrededor de 30 minutos", B: "La mitad: unos 7 minutos", C: "Lo mismo: 15 minutos", D: "Cuatro horas" },
          correcta: ["A"],
          explicacion: "A menor carga conectada, más autonomía: a la mitad de carga, el doble de tiempo. Además, conviene no superar el 75 % de la capacidad del SAI."
        },
        {
          tipo: "unica",
          pregunta: "¿A qué distancia y altura debe situarse la pantalla del ordenador para trabajar de forma ergonómica?",
          opciones: { A: "A más de 40 cm de los ojos y entre la línea de visión horizontal y 60º bajo la horizontal", B: "A menos de 20 cm y por encima de los ojos", C: "A 2 metros y a la altura del pecho", D: "Es indiferente" },
          correcta: ["A"],
          explicacion: "La pantalla nunca debe quedar elevada (sufrirían cuello y espalda): a más de 40 cm y entre la horizontal y 60º por debajo."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se debe levantar una carga pesada?",
          opciones: { A: "Pies separados, rodillas flexionadas, espalda recta y elevando el peso con las piernas", B: "Con las piernas rectas y doblando la espalda", C: "Rápidamente y con un solo brazo", D: "Siempre por encima de la cabeza" },
          correcta: ["A"],
          explicacion: "Hay que elevar el peso con las piernas y nunca con la espalda, que debe ir recta y ligeramente inclinada hacia delante."
        },
        {
          tipo: "multiple",
          pregunta: "Consejos correctos para un entorno de oficina seguro (señala los correctos):",
          opciones: { A: "Canalizar los cables por paredes y techo y despejar las zonas de paso", B: "Extintores de CO2, adecuados para salas de informática", C: "Temperatura de 20-22 °C en invierno y 24-26 °C en verano, con humedad del 30-70 %", D: "Colocar regletas en serie para repartir la carga entre enchufes" },
          correcta: ["A", "B", "C"],
          explicacion: "Encadenar regletas sobrecarga los puntos de luz y puede provocar un incendio. Además: ruido < 55 dB, luz natural si es posible y toma de tierra en todo."
        },
        {
          tipo: "unica",
          pregunta: "En una sala de servidores el ruido es muy molesto y dañino. ¿Qué recomienda el libro?",
          opciones: { A: "Trabajar en ella el menor tiempo posible y usar terminales remotos desde una sala aneja", B: "Usar cascos de música", C: "Apagar los servidores mientras se trabaja", D: "Trabajar solo de noche" },
          correcta: ["A"],
          explicacion: "El ruido es dañino a nivel fisiológico; en salas de servidores conviene permanecer lo mínimo y trabajar en remoto desde una sala próxima."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué son el burnout y el mobbing?",
          opciones: { A: "Burnout: síndrome del trabajador quemado; mobbing: acoso laboral", B: "Burnout: acoso laboral; mobbing: trabajador quemado", C: "Dos tipos de SAI", D: "Dos defectos de la señal eléctrica" },
          correcta: ["A"],
          explicacion: "Hay que fomentar el buen ambiente entre los empleados y evitar tanto el burnout (desgaste por estrés) como el mobbing (acoso laboral)."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema (con autoevaluación del libro)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es el burnout?",
          opciones: { A: "El síndrome del «trabajador quemado»", B: "El responsable del efecto invernadero", C: "El efecto de una conducción eléctrica excesiva", D: "El responsable de que un CPD siga funcionando sin problemas" },
          correcta: ["A"],
          explicacion: "El burnout es el síndrome del trabajador quemado, producido por el estrés laboral crónico. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Una máquina a caballo entre un equipo normal de sobremesa y un servidor se denomina:",
          opciones: { A: "Ultraportátil", B: "Workstation", C: "Megaserver", D: "Megacomputer" },
          correcta: ["B"],
          explicacion: "La workstation tiene características de ambos; se usa en estudios de arquitectura y sitios que necesitan gran capacidad de procesamiento sin llegar a usar servidores. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Se mide en amperios:",
          opciones: { A: "La potencia", B: "La diferencia de potencial", C: "La intensidad", D: "La capacidad de un condensador" },
          correcta: ["C"],
          explicacion: "La intensidad ('I') se mide en amperios; la potencia en vatios y la diferencia de potencial (voltaje) en voltios. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Se representa con la letra omega mayúscula (Ω):",
          opciones: { A: "La potencia", B: "La diferencia de potencial", C: "La intensidad", D: "La resistencia" },
          correcta: ["D"],
          explicacion: "La resistencia se representa con Ω y se mide con un ohmímetro u óhmetro. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Se mide en vatios:",
          opciones: { A: "La potencia", B: "La diferencia de potencial", C: "La intensidad", D: "La resistencia" },
          correcta: ["A"],
          explicacion: "La potencia ('P') es la energía que consume un dispositivo y se expresa en vatios (W). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Se representa mediante el símbolo ~:",
          opciones: { A: "La potencia", B: "La diferencia de potencial", C: "La intensidad", D: "La corriente alterna" },
          correcta: ["D"],
          explicacion: "El símbolo ~ representa la corriente alterna, la que llega por el enchufe. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "NO se puede probar con un polímetro:",
          opciones: { A: "El voltaje en corriente continua y «subalterna»", B: "La intensidad en corriente continua", C: "Las resistencias", D: "Los diodos y transistores" },
          correcta: ["A"],
          explicacion: "Pregunta trampa: la corriente «subalterna» no existe. El polímetro mide voltaje en continua y ALTERNA, intensidad en continua, resistencias, continuidad, diodos y transistores. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Por este orden, la fuente de alimentación realiza los siguientes procesos con la señal:",
          opciones: { A: "Transformación, rectificación, filtrado y estabilización", B: "Rectificación, transformación, estabilización y filtrado", C: "Transformación, estabilización, rectificación y filtrado", D: "Transformación, filtrado, estabilización y rectificación" },
          correcta: ["A"],
          explicacion: "TRFE: transformación (reduce el voltaje), rectificación (alterna → continua), filtrado (aplana la señal) y estabilización (salida estable). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el proceso que utiliza un puente de Graetz o puente rectificador de diodos?",
          opciones: { A: "La transformación", B: "La rectificación", C: "La estabilización", D: "El filtrado" },
          correcta: ["B"],
          explicacion: "El puente de Graetz (diodos) convierte la corriente alterna en continua: es la rectificación. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de las siguientes fuentes es la más eficiente?",
          opciones: { A: "80 PLUS diamante", B: "80 PLUS oro", C: "80 PLUS platino", D: "80 PLUS titanio" },
          correcta: ["D"],
          explicacion: "Trampa: la categoría «diamante» no existe. El orden real es 80 PLUS, bronce, plata, oro, platino y titanio, siendo titanio la más eficiente. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Completa: «En la gama baja de SAI están los interactivos y los _________, frente a la gama alta como son los _________».",
          opciones: { A: "stand by … online", B: "online … stand by", C: "modulares … redundantes", D: "AVR … PFC" },
          correcta: ["A"],
          explicacion: "Gama baja: interactivos y stand by (offline); gama alta: online, como los de conversión Delta. (Ejercicio del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Completa: «Cuando un SAI detecta un fallo del suministro, el _________ conmuta en cuestión de milisegundos».",
          opciones: { A: "interruptor", B: "transformador", C: "condensador", D: "ventilador" },
          correcta: ["A"],
          explicacion: "El interruptor conmuta en 2-10 ms y el inversor pasa a suministrar la energía de las baterías. (Ejercicio del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "RoHS es el acrónimo de Restriction of _________ Substances.",
          opciones: { A: "Hazardous", B: "Heavy", C: "Hard", D: "Hot" },
          correcta: ["A"],
          explicacion: "RoHS = Restriction of Hazardous Substances (restricción de sustancias peligrosas), directiva europea de 2003. (Ejercicio del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué sustancias restringe o limita la directiva RoHS? (señala las correctas)",
          opciones: { A: "Plomo y cadmio", B: "Mercurio y cromo hexavalente", C: "Retardantes de llama como los PBB o PBDE", D: "El cobre de los cables" },
          correcta: ["A", "B", "C"],
          explicacion: "RoHS restringe metales pesados y sustancias tóxicas: plomo, cadmio, mercurio, cromo hexavalente, PBB, PBDE… El cobre no está restringido."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «gasto vampiro»?",
          opciones: { A: "El gasto producido por tener un dispositivo enchufado a la corriente sin utilizarse (stand by)", B: "El consumo nocturno de los servidores", C: "El gasto de los SAI al cargar sus baterías", D: "El sobreprecio de la tarifa eléctrica" },
          correcta: ["A"],
          explicacion: "En España este gasto es del 2,3 %. Monitores, sobremesas e impresoras son de lo que más consume en espera; el lema erróneo es que «un dispositivo apagado no consume»."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el TDP (Thermal Design Power) de un procesador?",
          opciones: { A: "El gasto o cantidad de vatios que necesita el procesador", B: "La temperatura máxima de la caja", C: "El número de núcleos del micro", D: "La velocidad del ventilador" },
          correcta: ["A"],
          explicacion: "Cuantos más vatios gaste, mayor rendimiento, pero generará más calor, consumirá más energía y la batería durará menos."
        },
        {
          tipo: "unica",
          pregunta: "Según ADEME, ¿cuánto menos consume un portátil que un equipo de sobremesa?",
          opciones: { A: "Entre un 50 y un 85 % menos", B: "Un 5 % menos", C: "Consumen lo mismo", D: "El portátil consume más" },
          correcta: ["A"],
          explicacion: "Los portátiles consumen mucho menos; además, el microprocesador (CPU) es el elemento del sistema que más energía consume."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué acciones reducen el consumo energético en un entorno informático? (señala las correctas)",
          opciones: { A: "Concentrar varios servidores en uno más potente mediante virtualización (VMWare, VirtualBox, Proxmox…)", B: "Usar regletas con interruptor y apagarlas al terminar la jornada", C: "Desconectar los periféricos que no se usen (en stand by también consumen)", D: "Usar equipos antiguos y obsoletos como servidores" },
          correcta: ["A", "B", "C"],
          explicacion: "Los equipos obsoletos son menos eficientes y consumirían más. También ayudan el salvapantallas negro, cerrar apps en segundo plano, multifuncionales y dispositivos USB. (Ejercicio del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué diferencia de consumo hay entre un SSD y un disco duro mecánico?",
          opciones: { A: "El SSD consume menos, y la mayor diferencia se da en reposo (idle)", B: "El HDD consume menos en todos los casos", C: "Consumen exactamente lo mismo", D: "El SSD solo consume menos al escribir" },
          correcta: ["A"],
          explicacion: "Los SSD consumen menos que un disco tradicional; donde más se nota es en reposo, sin operaciones de lectura o escritura."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué es peligroso manipular el interior de una fuente de alimentación aunque esté apagada y desenchufada?",
          opciones: { A: "Porque sus condensadores almacenan mucha energía incluso estando apagada", B: "Porque sigue conectada a Internet", C: "Porque el ventilador puede girar solo", D: "No es peligroso en absoluto" },
          correcta: ["A"],
          explicacion: "Los condensadores de la fuente almacenan mucha energía aunque esté apagada; sería peligroso manipularla con los condensadores cargados."
        }
      ]
    }
  ]
});
