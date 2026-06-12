/* ============================================================
   tema4.js — Tema 4: Los periféricos
   Contenido fiel al capítulo 4 del libro (pp. 85-116).
   ============================================================ */

"use strict";

registrarTema({
  id: 4,
  titulo: "Los periféricos",
  descripcionCorta: "Clasificación de periféricos, ratón y teclado, escáneres (CIS/CCD, OCR), impresoras tradicionales y 3D (ABS/PLA, STL), dispositivos multimedia, monitores, tabletas digitalizadoras y proyectores.",

  resumen:
    "<p>Un <strong>periférico</strong> es cualquier dispositivo que se conecta a un equipo y que transmite o recibe información; dentro del periférico hay una <strong>transformación de la información</strong> y el <strong>sistema operativo</strong> es el intermediario. Todos los periféricos tienen una <strong>controladora</strong> (hardware, casi siempre integrada en la placa base) y muchos necesitan un <strong>driver</strong> (software del fabricante) para entenderse con el sistema operativo.</p>" +
    "<p>Clasificación clásica: <strong>entrada, salida y entrada/salida</strong>. Clasificación moderna: <strong>comunicación, almacenamiento, entrada, salida y entrada/salida</strong>.</p>" +
    "<p>El <strong>ratón</strong> (inventado por Douglas Engelbart, de Xerox, en 1963) pasó de bola a óptico: un sensor toma imágenes por segundo y las compara para detectar el desplazamiento. El <strong>teclado</strong> es una matriz de interruptores: al pulsar una tecla hay paso de corriente y se envía un código al equipo.</p>" +
    "<p>El <strong>escáner</strong> digitaliza documentos u objetos. Tipos: de documentos, de código de barras, de fotografía, antropométricos (huella, iris, retina, reconocimiento facial) y 3D. Parámetros: tiempo de previsualización, <strong>resolución</strong> (ppp/dpi) e <strong>interpolación</strong>, fuente de luz, botones, área máxima y profundidad de color. Tecnologías: <strong>CIS</strong> (barata, sin óptica, poca profundidad de campo) frente a <strong>CCD</strong> (con lentes y espejos, mejor para objetos con volumen). El <strong>OCR</strong> reconoce caracteres en una imagen.</p>" +
    "<p><strong>Impresoras</strong>: matriciales, de chorro de tinta, láser, de tiques (ribbon), térmicas, fotográficas y plóteres. Las <strong>impresoras 3D</strong> usan termoplásticos <strong>ABS</strong> (resistente, para piezas mecánicas, derivado del petróleo) y <strong>PLA</strong> (frágil, biodegradable, de origen vegetal); los modelos se distribuyen en ficheros <strong>STL</strong> que deben convertirse a <strong>Gcode</strong> para imprimirse.</p>" +
    "<p>En <strong>multimedia</strong>: chips de sonido con CODEC, micrófonos (alta sensibilidad y bajo ruido), cámaras (resolución real, FPS), y <strong>monitores</strong> con muchos parámetros (luminancia, relación de aspecto, dot pitch, tiempo de respuesta, IPS, tasa de refresco, contraste, DLNA, conexiones). Además: <strong>tabletas digitalizadoras</strong> (presión e inclinación del lápiz) y <strong>proyectores</strong> (CRT → LCD → DLP; lámparas LED de 50 000 horas; luminosidad en lúmenes).</p>",

  mapa: [
    {
      titulo: "Concepto y clasificación",
      hijos: [
        "Periférico: transmite o recibe información, con transformación interna",
        "Controladora (hardware, en placa base) y driver (software del fabricante)",
        "Clásica: entrada / salida / entrada-salida",
        "Moderna: + comunicación y almacenamiento"
      ]
    },
    {
      titulo: "Ratón y teclado",
      hijos: [
        "Ratón: Engelbart (Xerox, 1963); de bola → óptico (sensor compara imágenes)",
        "Teclado: matriz de interruptores; pulsar = paso de corriente + código"
      ]
    },
    {
      titulo: "Escáner",
      hijos: [
        "Tipos: documentos, código de barras, fotografía, antropométricos, 3D",
        "Parámetros: resolución (ppp/dpi), interpolación, fuente de luz, profundidad de color",
        "CIS (barato, sin óptica) vs CCD (óptica, volumen)",
        "OCR: reconocer caracteres en imágenes"
      ]
    },
    {
      titulo: "Impresoras",
      hijos: [
        "Tradicionales: matricial, chorro de tinta, láser, tiques (ribbon), térmica, plóter",
        "Características: resolución, ppm, primera página, conexión, coste/página, driver",
        "3D: ABS (resistente) vs PLA (biodegradable); RepRap y vitaminas; STL → Gcode"
      ]
    },
    {
      titulo: "Multimedia y otros",
      hijos: [
        "Sonido: CODEC, MP3, MIDI; micrófono: sensibilidad alta + ruido bajo",
        "Cámaras: resolución real, FPS, bit rate",
        "Monitores: luminancia, 16:9, dot pitch, t. respuesta, IPS, refresco, contraste, DLNA",
        "Tableta digitalizadora (presión e inclinación) y proyectores (DLP, LED, lúmenes)"
      ]
    }
  ],

  conceptosClave: [
    "<strong>Periférico</strong>: cualquier dispositivo que se conecta a un equipo y transmite o recibe información; en su interior hay una <strong>transformación de la información</strong>.",
    "El <strong>sistema operativo es el intermediario</strong>: por él pasa toda la información desde y hasta los periféricos.",
    "<strong>Controladora</strong>: componente <strong>hardware</strong> que controla los periféricos; casi todas están integradas en la placa base.",
    "<strong>Driver</strong>: software del <strong>fabricante</strong> que permite al SO reconocer el dispositivo y trabajar con él. Es <strong>dependiente del SO</strong>.",
    "Clasificación clásica: <strong>entrada</strong> (ratón, teclado), <strong>salida</strong> (monitor, impresora), <strong>entrada/salida</strong> (pantalla táctil, regrabadora, pendrive).",
    "Clasificación moderna: <strong>comunicación</strong> (wifi, tarjeta de red), <strong>almacenamiento</strong> (pendrive, regrabadora), entrada, salida y entrada/salida.",
    "El ratón lo inventó <strong>Douglas Engelbart</strong>, trabajador de <strong>Xerox</strong>, en <strong>1963</strong>.",
    "Ratón óptico: un sensor/cámara toma imágenes por segundo y <strong>las compara</strong> con la anterior; a más <strong>dpi</strong>, más preciso.",
    "El <strong>teclado</strong> es una matriz de interruptores: al pulsar hay <strong>paso de corriente</strong> y se envía un código (también al liberar la tecla).",
    "Escáner de código de barras: emite un <strong>láser</strong>; las zonas negras no reflejan y las blancas sí.",
    "Escáneres antropométricos: <strong>huella</strong> (puntos de referencia), <strong>iris</strong> (surcos de la parte de color), <strong>retina</strong> (luz infrarroja para el patrón de venas del fondo del ojo).",
    "El escáner <strong>3D</strong> toma muestras geométricas para crear una <strong>nube de puntos</strong> y reconstruir el objeto por extrapolación.",
    "Resolución del escáner: en <strong>ppp/dpi</strong>. La <strong>interpolación</strong> genera píxeles extra deducidos de los vecinos (resolución interpolada > real).",
    "Fuente de luz del escáner: fluorescentes → xenón/cátodos fríos → <strong>led</strong> (más económicos e igual de eficientes).",
    "<strong>Profundidad de color</strong>: número de bits para representar el color de cada píxel (p. ej., 48 bits).",
    "<strong>CIS</strong>: más barata, sin elementos ópticos, sin calentamiento, menos consumo; pero el documento debe estar pegado al cristal (poca profundidad de campo) y da menos calidad.",
    "<strong>CCD</strong>: necesita espejos y lentes; mejor para digitalizar objetos con <strong>volumen</strong>. (Los CCD están obsoletos frente a los CMOS, más modernos y baratos.)",
    "<strong>OCR</strong> (Object Character Recognition): reconocer los caracteres de una imagen para tratarlos con un procesador de textos.",
    "Características de impresoras: <strong>resolución (ppp)</strong>, <strong>velocidad (ppm)</strong>, tiempo de la primera página (clave en láser), conexión, <strong>coste por página</strong> y driver.",
    "<strong>Matriciales</strong>: solo en bancos y entidades que necesitan <strong>copias múltiples</strong>.",
    "<strong>Chorro de tinta</strong>: doméstica, económica; expulsa gotas de <strong>picolitros</strong>; la tinta se disuelve con el agua.",
    "<strong>Láser</strong>: rápida, buena calidad y menor coste por página; tarda más en la <strong>primera página</strong>.",
    "<strong>De tiques/códigos de barras</strong>: usan <strong>ribbon</strong> (cinta que se adhiere al papel, como el tóner). <strong>Térmicas</strong>: sin consumibles salvo el <strong>papel térmico</strong>; el cabezal caliente provoca una reacción química que oscurece el papel.",
    "<strong>Plóter</strong>: impresión de gran formato (planos de urbanismo, arquitectura, ingeniería).",
    "<strong>ABS</strong>: resistente (piezas mecánicas), se taladra/lija/suaviza con acetona, deriva del <strong>petróleo</strong>, sensible al calor al imprimir, huele a plástico caliente.",
    "<strong>PLA</strong>: más <strong>frágil</strong>, fácil de imprimir, <strong>biodegradable</strong> (de patata, maíz, remolacha…), apto para envases de comida, olor agradable.",
    "El ABS <strong>resiste más temperatura</strong> y tiene un punto de fusión más alto que el PLA. Ambos se almacenan <strong>sellados</strong> (la humedad los degrada).",
    "<strong>RepRap</strong> (Adrian Bowyer): impresoras open source (GPL) capaces de <strong>autorreplicarse</strong>; las partes no imprimibles se llaman <strong>vitaminas</strong>.",
    "<strong>Fichero STL</strong>: describe la <strong>geometría tridimensional</strong> (sin color ni textura). No es directamente imprimible: se transforma a <strong>Gcode</strong> con programas como Cura.",
    "Micrófono bueno: <strong>alta sensibilidad</strong> y <strong>bajo nivel de ruido</strong>. <strong>MIDI</strong> = Musical Instrument Digital Interface (como una partitura, hasta 16 instrumentos).",
    "Cámaras: mejor <strong>resolución real</strong> que interpolada; más <strong>FPS</strong> = mejor; el <strong>bit rate</strong> alto mejora la calidad del vídeo.",
    "Monitor: <strong>luminancia</strong> en cd/m² (250-350 normal; 500 para películas), <strong>dot pitch</strong> (menor = más píxeles), <strong>tiempo de respuesta</strong> (menor = mejor; 5 ms normal), contraste deseable <strong>>600:1</strong>.",
    "<strong>1080p</strong> (progresivo, líneas a la vez) es mejor que <strong>1080i</strong> (entrelazado, pares e impares en fracciones distintas).",
    "<strong>DLNA</strong>: permite al monitor recibir y controlar flujos de vídeo/audio/fotos por red (Ethernet o wifi).",
    "Tableta digitalizadora: más precisa que el ratón; detecta <strong>presión e inclinación</strong> del lápiz (las profesionales, más de 1000 niveles).",
    "Proyectores: CRT → LCD (luz por 3 pantallas, una por color) → <strong>DLP</strong> (más contraste). Lámparas <strong>LED: 50 000 h</strong> frente a 3000-5000 h de las incandescentes. Luminosidad en <strong>lúmenes</strong>."
  ],

  frasesMemorizar: [
    "«Periférico: se conecta al equipo y transmite o recibe información».",
    "«Controladora = hardware (en la placa); driver = software (del fabricante)».",
    "«Sin driver no hay comunicación: lo da el fabricante y depende del SO».",
    "«El ratón lo inventó Engelbart (Xerox) en 1963».",
    "«Teclado: tecla pulsada → paso de corriente → código al equipo».",
    "«Huella: puntos; iris: surcos del color; retina: infrarrojos a las venas».",
    "«CIS: barato y plano; CCD: óptica y volumen».",
    "«La resolución interpolada siempre es mayor que la real (píxeles deducidos, no inventados al azar)».",
    "«Matricial = copias múltiples; tinta = doméstica; láser = volumen y calidad; térmica = tiques sin consumible».",
    "«Ribbon en impresoras de tiques; papel térmico en las térmicas: nunca juntos».",
    "«ABS: resistente y del petróleo. PLA: frágil, vegetal y biodegradable».",
    "«STL describe la geometría 3D; para imprimir se convierte a Gcode».",
    "«RepRap: impresoras GPL que se autorreplican; lo no imprimible son las vitaminas».",
    "«Micrófono bueno: mucha sensibilidad, poco ruido».",
    "«1080p mejor que 1080i: progresivo muestra todas las líneas a la vez».",
    "«Menos tiempo de respuesta = monitor más rápido (5 ms es lo normal)».",
    "«LED de proyector: 50 000 horas; incandescente: 3000-5000»."
  ],

  apartados: [
    {
      titulo: "4.1 Introducción: periféricos, controladoras y drivers",
      html:
        "<p>Se denomina <strong>periférico</strong> a cualquier dispositivo que se conecta a un equipo y que <strong>transmite o recibe información</strong>. Dentro del periférico hay una <strong>transformación de la información</strong>: en un disco duro, los bits se transforman en impulsos eléctricos que magnetizan la superficie; en una impresora 3D, las instrucciones mueven los motores para crear la pieza.</p>" +
        "<p>El <strong>sistema operativo</strong> es parte fundamental del proceso: es el <strong>intermediario</strong> por el que pasa toda la información desde y hasta los periféricos (mucha de ella se almacena también en la RAM).</p>" +
        "<p>La <strong>controladora</strong> es un componente <strong>hardware</strong> que controla los periféricos; todos tienen una asociada. Están integradas casi en su totalidad en la <strong>placa base</strong> (controladoras para Ethernet, VGA/DVI/HDMI, USB, lector de tarjetas…).</p>" +
        "<p>Muchos periféricos necesitan además un software para «entenderse» con el SO: el <strong>driver</strong>. Como un SO no puede conocer cómo funciona cualquier dispositivo actual o futuro, es el <strong>fabricante</strong> quien provee el driver, que permite reconocer el dispositivo y trabajar con él. Consejo del libro: <strong>actualiza siempre los drivers</strong> a la última versión (corrigen errores y mejoran el funcionamiento).</p>"
    },
    {
      titulo: "4.2 Clasificación de los periféricos",
      html:
        "<p>Clasificación <strong>histórica</strong>:</p>" +
        "<ul>" +
        "<li><strong>De entrada</strong>: reciben datos para el equipo (ratón, teclado…).</li>" +
        "<li><strong>De salida</strong>: muestran datos del sistema (monitor, impresora…).</li>" +
        "<li><strong>De entrada/salida</strong>: ambas funciones (pantallas táctiles, regrabadoras, pendrives, tarjetas de memoria…).</li>" +
        "</ul>" +
        "<p>Clasificación <strong>moderna</strong>:</p>" +
        "<table><thead><tr><th>Tipo</th><th>Ejemplos</th></tr></thead><tbody>" +
        "<tr><td><strong>Comunicación</strong></td><td>Antenas wifi o bluetooth, tarjetas de red…</td></tr>" +
        "<tr><td><strong>Almacenamiento</strong></td><td>Tarjetas de memoria, pendrives, regrabadoras ópticas…</td></tr>" +
        "<tr><td><strong>Entrada</strong></td><td>Escáner, cámara/webcam, teclado, micrófono…</td></tr>" +
        "<tr><td><strong>Salida</strong></td><td>Impresora, monitor, altavoces…</td></tr>" +
        "<tr><td><strong>Entrada/salida</strong></td><td>Pantalla táctil, wearables que reciben y envían información…</td></tr>" +
        "</tbody></table>"
    },
    {
      titulo: "4.3 Ratón y teclado",
      html:
        "<h4>4.3.1 Ratón</h4>" +
        "<p>Inventado por <strong>Douglas Engelbart</strong>, trabajador de <strong>Xerox</strong>, en <strong>1963</strong> (el nombre viene de su parecido con un ratón). Han surgido sustitutos (trackball, touchpad, pantallas táctiles), pero sigue usándose. Hay ratones con cable e inalámbricos (libertad de no depender del cable). Tecnológicamente pasaron de <strong>bola</strong> a <strong>ópticos</strong>: un pequeño sensor/cámara toma imágenes por segundo (a más <strong>dpi</strong>, más imágenes y más precisión).</p>" +
        "<p>Pasos del ratón óptico: 1) el sensor detecta la imagen bajo el ratón; 2) se transmite al procesador del ratón; 3) se <strong>compara con la imagen anterior</strong>; 4) si son iguales, no hubo desplazamiento; 5) si son diferentes, se calcula el movimiento; 6) se comunican las coordenadas al SO para mover el puntero; 7) vuelta al paso 1.</p>" +
        "<h4>4.3.2 Teclado</h4>" +
        "<p>Un teclado es una <strong>matriz de interruptores o contactos</strong>. Al pulsar una tecla se produce un <strong>paso de corriente</strong> (contacto entre dos láminas internas) y se envía un código al equipo; las señales se envían <strong>al pulsar y al liberar</strong>, para saber si una tecla está pulsada en cada momento. <em>Recuerda:</em> los teclados pueden tener más bacterias que un inodoro (revista Which): límpialos con un trapo levemente humedecido (nunca espráis directos) y usa espray limpiapolvo o aspirador para el polvo.</p>"
    },
    {
      titulo: "4.4 Escáner",
      html:
        "<p>La función del escáner es <strong>digitalizar</strong> un objeto o documento: observar la realidad y generar una representación digital.</p>" +
        "<h4>4.4.1 Tipos de escáner</h4>" +
        "<ul>" +
        "<li><strong>De documentos</strong>: los más utilizados. El <strong>plano</strong> tiene la mejor relación calidad/precio; con <strong>alimentador</strong> para uso intensivo/profesional; los <strong>portátiles</strong> (menos resolución) para uso itinerante o espacios reducidos.</li>" +
        "<li><strong>De código de barras</strong>: en comercios y almacenes; fijos (cajas de supermercado) o de pistola. Emiten un <strong>haz láser</strong>: las zonas negras no reflejan y las blancas sí; el escáner lee ese reflejo.</li>" +
        "<li><strong>De fotografía</strong>: tuvieron éxito al pasar los negativos a digital.</li>" +
        "<li><strong>Antropométricos</strong>: identifican a las personas. De <strong>huella</strong> (puntos de referencia de la huella que se comparan al validar), de <strong>iris</strong> (patrones de los surcos de la parte de color del ojo) y de <strong>retina</strong> (proyectan luz infrarroja para medir el patrón de venas del fondo del ojo; muy efectivos). Los sistemas de <strong>reconocimiento facial</strong> reconocen la fisiología del rostro en 3D con cámara normal + cámara y proyectores infrarrojos, midiendo extensión entre ojos, profundidad de la cara, forma de la nariz…, y siguen reconociendo al individuo con gafas, barba o corte de pelo gracias a la IA (redes neuronales, aprendizaje automático).</li>" +
        "<li><strong>3D</strong>: toman muestras geométricas del objeto para crear una <strong>nube de puntos</strong> de su superficie y reconstruirlo por extrapolación (algunos también capturan color).</li>" +
        "</ul>" +
        "<h4>4.4.2 Parámetros de un escáner</h4>" +
        "<table><thead><tr><th>Parámetro</th><th>Descripción</th></tr></thead><tbody>" +
        "<tr><td><strong>Tamaño de documento</strong></td><td>Lo normal: A4 (216 × 297 mm) o tipo carta.</td></tr>" +
        "<tr><td><strong>Tiempo de previsualización</strong></td><td>Lo que tarda en escanear y mostrar (aprox. 9 s; varía con tamaño y resolución).</td></tr>" +
        "<tr><td><strong>Resolución e interpolación</strong></td><td>En ppp/dpi. Ej.: óptica 4800 dpi (una fila de 4800 sensores), hardware 4800 × 9600, máxima interpolada 12 800. La <strong>interpolación</strong> añade píxeles extra <em>deducidos</em> de los vecinos (no arbitrarios).</td></tr>" +
        "<tr><td><strong>Fuente de luz</strong></td><td>Fluorescentes → xenón y cátodos fríos → <strong>led</strong> (más económicos e igual de eficientes).</td></tr>" +
        "<tr><td><strong>Botones de escaneo</strong></td><td>Funciones extra: fotocopia, generar PDF, enviar por correo…</td></tr>" +
        "<tr><td><strong>Máxima área de escaneo</strong></td><td>En pulgadas (p. ej., 8,5″ × 11,7″).</td></tr>" +
        "<tr><td><strong>Profundidad de color</strong></td><td>Bits por píxel (p. ej., 48 bits).</td></tr>" +
        "</tbody></table>" +
        "<h4>4.4.3 Tecnología CIS frente a tecnología CCD</h4>" +
        "<table><thead><tr><th></th><th>CIS</th><th>CCD</th></tr></thead><tbody>" +
        "<tr><td><strong>Óptica</strong></td><td>Sin lentes ni espejos: fila de sensores que cubre el ancho</td><td>Necesita espejos, lentes y otros elementos ópticos</td></tr>" +
        "<tr><td><strong>Precio</strong></td><td>Mucho más barata</td><td>Más cara</td></tr>" +
        "<tr><td><strong>Profundidad de campo</strong></td><td>Muy poca: el documento debe estar pegado al cristal; no sirve para objetos con volumen</td><td>Mejor para objetos con volumen</td></tr>" +
        "<tr><td><strong>Calidad</strong></td><td>Menor (menos matices en sombras), aunque ha mejorado mucho</td><td>Mayor</td></tr>" +
        "<tr><td><strong>Otras</strong></td><td>Sin tiempo de calentamiento; menos consumo</td><td>—</td></tr>" +
        "</tbody></table>" +
        "<h4>4.4.4 Proceso de escaneo</h4>" +
        "<p>El documento se sitúa sobre el cristal y se cubre con la tapa. Un carro con una <strong>tira de sensores</strong> hace una pasada proyectando luz con la lámpara: las zonas blancas reflejan mucha luz y las oscuras menos. Los escáneres en color tienen varias tiras de sensores, cada una especializada en un color (<strong>rojo, azul y verde</strong>). La imagen se guarda en binario en un <strong>buffer</strong> y pasa al software. El <strong>driver</strong> es dependiente del SO: el de Windows 10 no sirve para Mac OS X o Linux.</p>" +
        "<h4>4.4.5 OCR</h4>" +
        "<p>El <strong>OCR</strong> (<em>Object Character Recognition</em>) es una característica de casi todos los softwares de escáner: <strong>reconocer los caracteres de una imagen</strong> para poder tratarlos después con cualquier procesador de textos.</p>"
    },
    {
      titulo: "4.5 Impresoras",
      html:
        "<h4>4.5.1 Características de las impresoras tradicionales</h4>" +
        "<ol>" +
        "<li><strong>Resolución</strong>: en ppp/dpi. Más resolución = más definición. Distinguir <strong>real</strong> de <strong>interpolada</strong> (píxeles «inventados» por algoritmos).</li>" +
        "<li><strong>Velocidad de impresión</strong>: en <strong>ppm</strong> (páginas por minuto). Ojo: los fabricantes miden con páginas de poca superficie impresa, así que el usuario siempre tarda algo más.</li>" +
        "<li><strong>Tiempo de impresión de la primera página</strong>: clave en las <strong>láser</strong>, que tardan más en la primera.</li>" +
        "<li><strong>Conexión</strong>: cable o inalámbrica (estas permiten imprimir desde smartphones y tabletas).</li>" +
        "<li><strong>Coste por página</strong>: fundamental con muchos volúmenes; existen recambios compatibles o reciclados más baratos.</li>" +
        "<li><strong>Driver</strong>: lo da el fabricante; de él depende que funcione mejor o peor.</li>" +
        "</ol>" +
        "<h4>4.5.2 Tipos de impresoras tradicionales</h4>" +
        "<table><thead><tr><th>Tipo</th><th>Características</th></tr></thead><tbody>" +
        "<tr><td><strong>Matriciales</strong></td><td>Solo en bancos y entidades que necesitan <strong>copias múltiples</strong>.</td></tr>" +
        "<tr><td><strong>Chorro de tinta</strong></td><td>Doméstica, económica, consumibles baratos. Expulsa gotas de <strong>picolitros</strong>. La tinta se disuelve con agua o humedad.</td></tr>" +
        "<tr><td><strong>Láser</strong></td><td>Rápida, buena calidad, menor coste por página (el tóner dura muchas impresiones). Más cara, pero se amortiza con volumen.</td></tr>" +
        "<tr><td><strong>De tiques y códigos de barras</strong></td><td>Usan <strong>ribbon</strong>: cinta que se adhiere al papel con resultado similar al tóner. Impresión duradera y resistente.</td></tr>" +
        "<tr><td><strong>Térmicas</strong></td><td>Recibos y tiques. Sin consumibles salvo el <strong>papel térmico</strong>: el cabezal se calienta y provoca una <strong>reacción química</strong> que oscurece el papel. Muy robustas.</td></tr>" +
        "<tr><td><strong>Otras</strong></td><td>Fotográficas y <strong>plóteres</strong> (gran formato: planos de urbanismo, arquitectura, ingeniería).</td></tr>" +
        "</tbody></table>" +
        "<p>Capas del papel térmico: <strong>papel</strong> (capa base) → <strong>under coating o estuco</strong> (soporte de la capa térmica, alisa el papel) → <strong>capa térmica</strong> (agentes químicos que reaccionan al calor formando la imagen).</p>" +
        "<h4>4.5.3 Impresoras 3D</h4>" +
        "<p>Se popularizan al bajar de precio (antes podían costar 90 000 €). Aplicaciones: automoción, aeronáutica, arquitectura, decoración, cocina (la NASA creó una «gastroimpresora»), creación de órganos con células madre, odontología, medicina (materiales <strong>biocompatibles</strong>), defensa, productos de consumo…</p>" +
        "<p><strong>Materiales termoplásticos</strong> (se funden con calor y solidifican al enfriar, reutilizables):</p>" +
        "<table><thead><tr><th></th><th>ABS</th><th>PLA</th></tr></thead><tbody>" +
        "<tr><td><strong>Origen</strong></td><td>Petróleo</td><td>Vegetal: patata, maíz, remolacha (biodegradable)</td></tr>" +
        "<tr><td><strong>Resistencia</strong></td><td>Muy resistente: piezas mecánicas; se taladra, lija y suaviza con acetona</td><td>Más frágil y rígido; no recomendado para piezas mecánicas</td></tr>" +
        "<tr><td><strong>Impresión</strong></td><td>Sensible al calor: requiere experiencia</td><td>Más fácil de imprimir</td></tr>" +
        "<tr><td><strong>Temperatura</strong></td><td>Resiste más; punto de fusión más alto</td><td>Resiste menos</td></tr>" +
        "<tr><td><strong>Olor al imprimir</strong></td><td>A plástico caliente (ventilar el lugar)</td><td>Agradable (derivado del azúcar)</td></tr>" +
        "<tr><td><strong>Acabado</strong></td><td>Máxima resolución</td><td>Más agradable al tacto y brillante; apto para envases de comida</td></tr>" +
        "</tbody></table>" +
        "<p>Ambos deben almacenarse <strong>sellados</strong>: la humedad los degrada. Otros materiales: <strong>elastómeros termoplásticos</strong> (flexibilidad, como el Filaflex), <strong>copolímeros derivados del nailon</strong> (resistentes, ligeros, superficie lisa: rodamientos y rótulas con poca lubricación), terminación <strong>cerámica</strong> (Laybrick) o <strong>madera</strong> (Laywoo-D3), <strong>fotopolímeros</strong> (formas complejas, capas delgadas) y <strong>metal líquido</strong> (en investigación).</p>" +
        "<p><strong>Reciclaje</strong>: el filamento (1,75-3 mm de grosor) cuesta 25-60 €/kg. La Universidad de Míchigan recicló botellas de plástico (lavar, cortar en tiras y extrusionar); puede ahorrar hasta un <strong>90 % de la energía</strong>, aunque el filamento resultante no siempre es de óptima calidad.</p>" +
        "<p><strong>Tipos</strong>: impresoras de marca (profesionales) e impresoras de bajo coste tipo <strong>RepRap</strong>. El proyecto RepRap (de <strong>Adrian Bowyer</strong>) crea impresoras de bajo coste que pueden imprimir partes de otras impresoras: se <strong>autorreplican</strong>. Casi todas bajo licencia <strong>GPL</strong> (código abierto). Constan de piezas de plástico imprimibles y de <strong>vitaminas</strong>: las partes no imprimibles que hay que comprar (motores, tornillos, varillas…). Una de las más populares es la <strong>Prusa Mendel</strong> (la i4 ronda los 400 € o menos).</p>" +
        "<p><strong>Ficheros STL</strong>: describen la <strong>geometría tridimensional</strong> de un objeto sin color ni textura. Codificados en binario (más compactos) o ASCII (editables con un editor de texto). <strong>No son directamente imprimibles</strong>: se transforman en comandos <strong>Gcode</strong> con programas como Cura Ultimaker.</p>"
    },
    {
      titulo: "4.6 Dispositivos multimedia",
      html:
        "<h4>4.6.1 Dispositivos de sonido</h4>" +
        "<p>Las placas base llevan <strong>chips dedicados</strong> al sonido, muchos con <strong>CODEC</strong> (codificadores/decodificadores) que transforman el sonido analógico en digital y viceversa. Prácticamente todo usa ya sonido <strong>HD</strong>. Los profesionales usan tarjetas de sonido especiales. El sonido suele comprimirse en <strong>MP3</strong> (MPEG Audio Layer 3). <strong>MIDI</strong> (Musical Instrument Digital Interface) es como una partitura interpretada por hasta <strong>16 instrumentos simultáneos</strong>; fuera del ámbito profesional no se usa porque no es sonido real.</p>" +
        "<p>Un buen <strong>micrófono</strong> tiene: <strong>alta sensibilidad</strong> (más sensibilidad = más calidad), <strong>bajo nivel de ruido</strong> (imprescindible en uso profesional) y materiales y mecánica de calidad. Los <strong>altavoces</strong> también valen por su ensamblado y materiales; los inalámbricos son más caros (emisores y receptores) pero sin cable.</p>" +
        "<h4>4.6.2 Cámaras o webcams</h4>" +
        "<ul>" +
        "<li><strong>Resolución</strong>: mejor la <strong>real</strong> que la interpolada (esta inventa píxeles por algoritmos).</li>" +
        "<li><strong>FPS</strong> (frames por segundo): a más FPS, mejor dispositivo.</li>" +
        "<li><strong>Iluminación</strong>: necesaria con poca luz ambiental.</li>" +
        "<li><strong>Bit rate</strong>: tasa de bits por segundo; a mayor bit rate, mejor calidad de vídeo.</li>" +
        "</ul>" +
        "<h4>4.6.3 Monitores</h4>" +
        "<table><thead><tr><th>Parámetro</th><th>Descripción</th></tr></thead><tbody>" +
        "<tr><td><strong>Tamaño</strong></td><td>En pulgadas, medido en diagonal.</td></tr>" +
        "<tr><td><strong>Brillo o luminancia</strong></td><td>En cd/m². Rango habitual 250-350; para películas, unas 500.</td></tr>" +
        "<tr><td><strong>Relación de aspecto</strong></td><td>16:9 (anchura:altura); la visión humana es panorámica, más cercana al 16:9 que al 4:3 antiguo.</td></tr>" +
        "<tr><td><strong>Pixel pitch / dot pitch</strong></td><td>Distancia entre dos píxeles del mismo color. Menor dot pitch = más píxeles en el mismo espacio.</td></tr>" +
        "<tr><td><strong>Tiempo de respuesta</strong></td><td>Tiempo en que un píxel cambia de valor y vuelve. 5 ms normal; menor en monitores gaming. <strong>Menos = mejor</strong>.</td></tr>" +
        "<tr><td><strong>IPS</strong></td><td>In Plane Switching: máxima definición de colores, brillo y nitidez; mayor ángulo de visión; menos fatiga ocular.</td></tr>" +
        "<tr><td><strong>Colores</strong></td><td>En millones; cuantos más, mejor.</td></tr>" +
        "<tr><td><strong>HD Ready / Full HD / 1080p-i</strong></td><td>HD Ready: mínimo 720 líneas en 16:9 con conexión digital. Full HD: máxima resolución. <strong>p</strong> = progresivo (todas las líneas a la vez, mejor); <strong>i</strong> = entrelazado (540 pares y 540 impares alternas, peor).</td></tr>" +
        "<tr><td><strong>Resolución</strong></td><td>Líneas horizontales × verticales (p. ej., 1366 × 768).</td></tr>" +
        "<tr><td><strong>Tasa de refresco</strong></td><td>Veces que se redibuja la imagen por segundo (Hz). Baja = parpadeo. Relacionada con la resolución.</td></tr>" +
        "<tr><td><strong>Ángulo de visión</strong></td><td>Ángulo máximo desde el que se ve bien la imagen.</td></tr>" +
        "<tr><td><strong>Contraste</strong></td><td>Capacidad de producir negros oscuros y blancos brillantes (ratio, p. ej. 1000:1). Deseable <strong>>600:1</strong>.</td></tr>" +
        "<tr><td><strong>DLNA</strong></td><td>Digital Living Network Alliance: recibir y controlar flujos de vídeo/audio/fotos por red (Ethernet o wifi).</td></tr>" +
        "<tr><td><strong>Conexiones</strong></td><td>VGA (analógico), DVI (digital, sin audio), <strong>HDMI</strong>/Thunderbolt (audio y vídeo; HDMI muy recomendable).</td></tr>" +
        "</tbody></table>"
    },
    {
      titulo: "4.7 Otros periféricos",
      html:
        "<h4>4.7.1 Tableta digitalizadora</h4>" +
        "<p>Usada por dibujantes e ilustradores: con un ratón era casi imposible pintar detalles, así que se necesitaba un periférico parecido a un lápiz. Tienen un bolígrafo o lápiz especial sobre una tablilla que reconoce los trazos. Son <strong>más precisas que un ratón</strong>, tienen botones para enviar órdenes (con la tableta no es necesario el ratón) y detectan <strong>la presión y la inclinación del lápiz</strong>. Las profesionales detectan más de <strong>1000 niveles de presión</strong>.</p>" +
        "<h4>4.7.2 Proyectores</h4>" +
        "<p>Para mostrar imágenes en gran tamaño (aulas, salas de reuniones, salones de actos…). Evolución tecnológica: <strong>CRT → LCD → DLP</strong>. La LCD hacía pasar la luz por <strong>tres pantallas LCD</strong> (una por color básico); la <strong>DLP</strong> consigue factores de <strong>contraste mayores</strong>. Las lámparas ahora son <strong>LED</strong>: las incandescentes duraban <strong>3000-5000 horas</strong>, necesitaban refrigeración (más ruido) y consumían mucho más; un led dura <strong>50 000 horas o más</strong>.</p>" +
        "<p>Resoluciones: antiguas SVGA (800 × 600) o XGA (1024 × 768); actuales UXGA (1280 × 720), WUXGA (1920 × 1080) o mayores. A mayor tamaño de proyección, más resolución necesaria. La <strong>luminosidad se mide en lúmenes</strong>: con pantallas grandes o mucha luz ambiente se necesitan más lúmenes. Para una buena proyección hay que evitar fuentes de luz que incidan sobre la pantalla.</p>"
    }
  ],

  glosario: [
    { termino: "Cuadro o frame", definicion: "Equivalente a un fotograma: una imagen dentro de una secuencia (un vídeo es una sucesión de frames)." },
    { termino: "Open Source", definicion: "Código abierto: software que puede ser distribuido y desarrollado de forma libre." },
    { termino: "Picolitro", definicion: "División muy pequeña de la unidad de volumen: en un litro hay unos 12 billones de picolitros. Es el orden de las gotas de una impresora de tinta." },
    { termino: "Punto por pulgada (ppp / dpi)", definicion: "Dots per inch. Mide la calidad de impresión o escaneado: a mayor definición, más puntos por pulgada." },
    { termino: "Sensor CCD", definicion: "Charge Coupled Device (dispositivo de cargas eléctricas). Su alternativa son los CMOS, más modernos y económicos; los CCD están obsoletos." },
    { termino: "Periférico", definicion: "Cualquier dispositivo que se conecta a un equipo y que transmite o recibe información." },
    { termino: "Controladora", definicion: "Componente hardware que controla los periféricos; casi todas integradas en la placa base." },
    { termino: "Driver", definicion: "Software provisto por el fabricante que permite al sistema operativo reconocer un dispositivo y trabajar con él. Depende del SO." },
    { termino: "OCR", definicion: "Object Character Recognition: reconocimiento de los caracteres de una imagen para tratarlos con un procesador de textos." },
    { termino: "CIS", definicion: "Tecnología de escáner sin elementos ópticos: fila de sensores que cubre el ancho. Barata, sin calentamiento y de bajo consumo, pero con poca profundidad de campo." },
    { termino: "Interpolación", definicion: "Técnica que incrementa artificialmente la resolución generando píxeles extra deducidos de los píxeles reales que los rodean." },
    { termino: "Ribbon", definicion: "Cinta de las impresoras de tiques y códigos de barras que, al adherirse al papel, queda como el tóner. Impresión duradera y resistente." },
    { termino: "Papel térmico", definicion: "Papel especial de las impresoras térmicas: capa base + estuco (under coating) + capa térmica con agentes químicos que se oscurecen con el calor del cabezal." },
    { termino: "Plóter", definicion: "Impresora de gran formato para planos de urbanismo, arquitectura o ingeniería." },
    { termino: "ABS", definicion: "Acrilonitrilo butadieno estireno: termoplástico resistente derivado del petróleo, ideal para piezas mecánicas; se puede taladrar, lijar y suavizar con acetona." },
    { termino: "PLA", definicion: "Ácido poliláctico: termoplástico biodegradable de origen vegetal (patata, maíz, remolacha), más frágil que el ABS pero más fácil de imprimir." },
    { termino: "RepRap", definicion: "Proyecto de Adrian Bowyer: impresoras 3D de bajo coste y código abierto (GPL) capaces de imprimir partes de otras impresoras (autorreplicación)." },
    { termino: "Vitaminas", definicion: "Partes no imprimibles de una impresora RepRap que hay que comprar: motores, tornillos, varillas, etc." },
    { termino: "Fichero STL", definicion: "Fichero de estereolitografía que describe la geometría tridimensional de un objeto (sin color ni textura). Se transforma a Gcode para imprimirse." },
    { termino: "Gcode", definicion: "Comandos interpretables directamente por la impresora 3D, generados desde un STL con programas como Cura Ultimaker." },
    { termino: "CODEC", definicion: "Codificador/decodificador: transforma el sonido analógico en digital y viceversa." },
    { termino: "MIDI", definicion: "Musical Instrument Digital Interface: parecido a una partitura interpretada por hasta 16 instrumentos simultáneos. No es sonido real." },
    { termino: "Bit rate", definicion: "Tasa de bits que pueden procesarse por segundo. A mayor bit rate de un vídeo, mejor calidad." },
    { termino: "Luminancia", definicion: "Brillo de pantalla: cantidad de luz que produce el monitor, en candelas por metro cuadrado (cd/m²)." },
    { termino: "Dot pitch", definicion: "Distancia entre dos píxeles del mismo color en una pantalla. Cuanto más pequeño, más píxeles en el mismo espacio." },
    { termino: "IPS", definicion: "In Plane Switching: tecnología de panel con máxima definición de colores, brillo y nitidez, mayor ángulo de visión y menos fatiga ocular." },
    { termino: "DLNA", definicion: "Digital Living Network Alliance: permite al monitor recibir y controlar flujos de vídeo, audio o fotos a través de la red (cable o wifi)." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Concepto, clasificación, ratón, teclado y escáner (4.1-4.4)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es un periférico?",
          opciones: { A: "Cualquier dispositivo que se conecta a un equipo y transmite o recibe información", B: "Solo los dispositivos de salida del equipo", C: "Cualquier componente interno de la caja", D: "Un dispositivo que únicamente almacena datos" },
          correcta: ["A"],
          explicacion: "Es la definición del libro. Además, dentro del periférico hay una transformación de la información (p. ej., bits → impulsos que magnetizan la superficie de un disco)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué papel desempeña el sistema operativo respecto a los periféricos?",
          opciones: { A: "Ninguno: los periféricos se comunican directamente con la CPU", B: "Es el intermediario: por él pasa toda la información desde y hasta los periféricos", C: "Solo gestiona los periféricos de salida", D: "Sustituye a la controladora hardware" },
          correcta: ["B"],
          explicacion: "El SO es parte fundamental del proceso: es el intermediario por el que pasa toda la información, mucha de la cual se almacena también en la RAM."
        },
        {
          tipo: "unica",
          pregunta: "La controladora de los periféricos:",
          opciones: { A: "Es un dispositivo software dependiente de la BIOS", B: "Es un componente software también llamado driver", C: "Es un componente hardware que controla los periféricos", D: "Es una parte del sistema operativo" },
          correcta: ["C"],
          explicacion: "La controladora es hardware (no confundir con el driver, que es software). Casi todas están integradas en la placa base. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Quién proporciona el driver de un dispositivo?",
          opciones: { A: "El fabricante del dispositivo", B: "El desarrollador del sistema operativo", C: "El fabricante de la placa base", D: "Viene grabado en la BIOS" },
          correcta: ["A"],
          explicacion: "Un SO no puede conocer cómo funciona cualquier dispositivo actual o futuro: es el fabricante quien provee el driver. Sin él no hay comunicación con muchos dispositivos."
        },
        {
          tipo: "unica",
          pregunta: "El driver de un escáner para Windows 10…",
          opciones: { A: "Sirve también para Mac OS X y Linux", B: "No sirve para Mac OS X ni Linux: el driver depende del sistema operativo", C: "Sirve para Linux pero no para Mac", D: "Es universal si el escáner es USB" },
          correcta: ["B"],
          explicacion: "El driver es dependiente del sistema operativo: el de Windows 10 no servirá para Mac OS X o Linux y viceversa."
        },
        {
          tipo: "unica",
          pregunta: "Una pantalla táctil se puede considerar…",
          opciones: { A: "Un periférico de comunicaciones", B: "Un periférico de salida", C: "Un periférico de entrada/salida", D: "No es un periférico" },
          correcta: ["C"],
          explicacion: "Tiene ambas funciones: muestra datos (salida) y recibe pulsaciones (entrada). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "Según la clasificación moderna, ¿cuáles de estos son periféricos de comunicación? (elige todas las correctas)",
          opciones: { A: "Antena wifi", B: "Tarjeta de red", C: "Antena bluetooth", D: "Regrabadora óptica" },
          correcta: ["A", "B", "C"],
          explicacion: "Comunicación: antenas wifi o bluetooth, tarjetas de red… La regrabadora es un periférico de almacenamiento."
        },
        {
          tipo: "unica",
          pregunta: "¿Se puede considerar un lector de huellas digitales un periférico de entrada?",
          opciones: { A: "Sí: recibe datos (la huella) para el equipo informático", B: "No, es de salida", C: "No, es de comunicación", D: "Solo si es inalámbrico" },
          correcta: ["A"],
          explicacion: "Captura la huella y la envía al equipo: introduce datos, luego es de entrada. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "El ratón:",
          opciones: { A: "Fue inventado por Google Labs", B: "Fue inventado por un trabajador de Xerox", C: "Fue inventado por un trabajador de Microsoft", D: "Fue inventado por un trabajador de IBM" },
          correcta: ["B"],
          explicacion: "Douglas Engelbart, trabajador de Xerox, lo inventó en 1963. El nombre viene de su parecido con un ratón. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Las dpi:",
          opciones: { A: "Son la inferencia del láser del ratón sobre superficies no rugosas", B: "Son una característica de los ratones mecánicos", C: "Son una característica de los ratones ópticos", D: "Son las siglas de pulsaciones por segundo" },
          correcta: ["C"],
          explicacion: "Cuantas más dpi tiene un ratón óptico, más imágenes por segundo toma su sensor y más preciso es. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo detecta un ratón óptico que ha habido desplazamiento?",
          opciones: { A: "Midiendo el giro de la bola interior", B: "Comparando la imagen actual del sensor con la tomada previamente", C: "Con un acelerómetro interno", D: "Por la variación de presión sobre la alfombrilla" },
          correcta: ["B"],
          explicacion: "Si la imagen actual es igual a la anterior, no hubo desplazamiento; si son diferentes, se calcula el movimiento y se comunican las coordenadas al SO."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un teclado, físicamente?",
          opciones: { A: "Una matriz de interruptores o contactos", B: "Un conjunto de sensores ópticos", C: "Una superficie capacitiva continua", D: "Un array de células fotoeléctricas" },
          correcta: ["A"],
          explicacion: "Al pulsar una tecla se produce el contacto entre dos láminas internas (paso de corriente) y se envía un código al equipo."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuándo envía señales el teclado al equipo?",
          opciones: { A: "Solo al pulsar la tecla", B: "Solo al liberar la tecla", C: "Tanto al pulsar como al liberar la tecla", D: "Cada segundo, de forma periódica" },
          correcta: ["C"],
          explicacion: "Se envían señales al pulsar y al liberar: así se puede saber si una tecla está pulsada o no en un momento determinado."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo lee un escáner de código de barras?",
          opciones: { A: "Con una cámara que fotografía el producto", B: "Emite un haz láser: las zonas negras no reflejan y las blancas sí, y lee ese reflejo", C: "Por radiofrecuencia RFID", D: "Midiendo el grosor de las barras con un palpador" },
          correcta: ["B"],
          explicacion: "El código es blanco y negro: las zonas negras no se reflejan y las blancas sí. Reemplaza el tecleado manual del código del producto."
        },
        {
          tipo: "unica",
          pregunta: "Los escáneres antropométricos:",
          opciones: { A: "Miden la distancia del objeto para un barrido tridimensional", B: "Necesitan mantener una base de datos para comparar los datos del sujeto con los registrados previamente", C: "Proyectan luz infrarroja para medir los surcos de la parte interna del ojo", D: "Solo funcionan con huellas dactilares" },
          correcta: ["B"],
          explicacion: "Al dar de alta la huella se establecen puntos de referencia que luego sirven de comparación al validar. (Pregunta de autoevaluación del libro: los de iris analizan surcos de la parte de color; los de retina, las venas con infrarrojos.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace un escáner de retina?",
          opciones: { A: "Analiza los patrones de los surcos de la parte de color del ojo", B: "Proyecta una luz infrarroja para medir el patrón de venas del fondo del ojo", C: "Fotografía la córnea", D: "Mide la distancia entre los ojos" },
          correcta: ["B"],
          explicacion: "El de retina usa infrarrojos sobre las venas del fondo del ojo (muy efectivo); el de iris analiza los surcos de la parte de color."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo funciona un escáner 3D?",
          opciones: { A: "Hace un barrido bidimensional y deduce la tercera dimensión por interpolación", B: "Toma muestras geométricas del objeto para crear una nube de puntos de su superficie", C: "Usa rayos X para ver el interior del objeto", D: "Fotografía el objeto desde un único ángulo" },
          correcta: ["B"],
          explicacion: "Con la nube de puntos y técnicas de extrapolación se reconstruye el objeto; algunos prototipos también capturan el color."
        },
        {
          tipo: "unica",
          pregunta: "Elige la respuesta correcta:",
          opciones: { A: "Un escáner 3D hace un barrido bidimensional y crea la tercera dimensión por interpolación", B: "Los escáneres en color tienen tiras especializadas en rojo, amarillo y verde", C: "A mayor resolución interpolada, menor resolución real", D: "Ppp y dpi son siglas análogas" },
          correcta: ["D"],
          explicacion: "Puntos por pulgada (ppp) = dots per inch (dpi). Los colores de las tiras son rojo, azul y verde; y la interpolada no reduce la real. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué resolución es mayor, la real o la interpolada?",
          opciones: { A: "La real, siempre", B: "La interpolada: añade píxeles extra deducidos de los píxeles reales que los rodean", C: "Son siempre iguales", D: "Depende de la fuente de luz" },
          correcta: ["B"],
          explicacion: "La interpolación incrementa artificialmente la resolución generando píxeles extra entre los reales, deducidos de sus vecinos (no inventados al azar). (Actividad propuesta del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué ventajas tiene la tecnología CIS frente a la CCD? (elige todas las correctas)",
          opciones: { A: "Es mucho más barata al no necesitar elementos ópticos", B: "No necesita tiempo de calentamiento", C: "Consume menos energía", D: "Es mejor para digitalizar objetos con volumen" },
          correcta: ["A", "B", "C"],
          explicacion: "CIS: barata (sin lentes ni espejos), sin calentamiento y menor consumo. Para objetos con volumen es mejor la CCD: la CIS tiene muy poca profundidad de campo y exige el documento pegado al cristal."
        }
      ]
    },
    {
      nombre: "Paquete 2 · Impresoras tradicionales y 3D (4.5)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿En qué unidad se mide la velocidad de impresión?",
          opciones: { A: "En ppp (puntos por pulgada)", B: "En ppm (páginas por minuto)", C: "En dpi", D: "En Hz" },
          correcta: ["B"],
          explicacion: "Velocidad en ppm; la resolución es la que se mide en ppp/dpi. Ojo: los fabricantes miden con páginas de poca superficie impresa, así que el usuario tarda algo más."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué tipo de impresora hay que tener especialmente en cuenta el tiempo de impresión de la primera página?",
          opciones: { A: "Matricial", B: "De chorro de tinta", C: "Láser", D: "Térmica" },
          correcta: ["C"],
          explicacion: "Las impresoras láser tardan más en imprimir la primera página, por lo que este parámetro hay que tenerlo siempre en cuenta en ellas."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se utilizan hoy las impresoras matriciales?",
          opciones: { A: "En uso doméstico", B: "En bancos y entidades que necesitan realizar copias múltiples", C: "En estudios de fotografía", D: "En supermercados, para los tiques" },
          correcta: ["B"],
          explicacion: "Solamente se usan donde se necesitan copias múltiples, como bancos y entidades similares."
        },
        {
          tipo: "unica",
          pregunta: "Las impresoras de chorro de tinta expulsan gotas del orden de…",
          opciones: { A: "Mililitros", B: "Microlitros", C: "Picolitros", D: "Nanolitros" },
          correcta: ["C"],
          explicacion: "Gotas muy pequeñas del orden de picolitros (en un litro hay unos 12 billones). Su problema: la tinta se disuelve con el agua o la humedad."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la principal ventaja de las impresoras láser frente a las de tinta cuando se imprime mucho?",
          opciones: { A: "Su precio de compra menor", B: "Menor coste por página: el tóner dura un número muy alto de impresiones", C: "Que la tinta no se disuelve", D: "Que no necesitan driver" },
          correcta: ["B"],
          explicacion: "Son más caras de comprar, pero con alto volumen de impresión la inversión se amortiza rápido por su menor coste por página, rapidez y calidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el ribbon?",
          opciones: { A: "El papel especial de las impresoras térmicas", B: "Una cinta que, al adherirse al papel, queda igual que el tóner de una láser", C: "El cabezal de una impresora de tinta", D: "Un tipo de filamento 3D" },
          correcta: ["B"],
          explicacion: "Lo usan las impresoras de tiques y códigos de barras; su ventaja es la durabilidad y resistencia de la impresión."
        },
        {
          tipo: "unica",
          pregunta: "Elige la respuesta correcta sobre las impresoras térmicas:",
          opciones: { A: "Utilizan tinta térmica que se oscurece al contacto con el papel", B: "El cabezal, al contacto con el papel, genera una reacción química en el mismo que hace que se oscurezca", C: "Queman el papel con el cabezal", D: "Tienen consumibles muy baratos" },
          correcta: ["B"],
          explicacion: "El cabezal se calienta y el papel térmico (su único «consumible») sufre una reacción química que lo oscurece. No usan tinta ni queman el papel. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Se utilizan los ribbons en impresoras térmicas?",
          opciones: { A: "Sí, es su consumible principal", B: "No: las térmicas no necesitan consumibles salvo el papel térmico; el ribbon es de las impresoras de tiques y códigos de barras", C: "Sí, pero solo en las de color", D: "Solo en las matriciales" },
          correcta: ["B"],
          explicacion: "Las térmicas funcionan por reacción química del papel térmico con el calor del cabezal; el ribbon es la cinta de las impresoras de tiques/códigos de barras. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son las capas del papel térmico, en orden?",
          opciones: { A: "Papel, capa under coating o estuco, capa térmica", B: "Capa térmica, papel, estuco", C: "Estuco, capa térmica, papel", D: "Papel, capa térmica, estuco" },
          correcta: ["A"],
          explicacion: "Papel (capa base) → under coating o estuco (soporte de la capa térmica, alisa el papel) → capa térmica (agentes químicos que reaccionan al calor formando la imagen)."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué se utilizan los plóteres?",
          opciones: { A: "Para copias múltiples en bancos", B: "Para impresiones de grandes formatos: planos de urbanismo, arquitectura o ingeniería", C: "Para imprimir tiques", D: "Para fotografía doméstica" },
          correcta: ["B"],
          explicacion: "Los plóteres son impresoras de gran formato usadas en planos de urbanismo, arquitectura o ingeniería."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué propiedad define a los materiales termoplásticos?",
          opciones: { A: "Solo pueden fundirse una vez", B: "Pueden fundirse y moldearse con calor, solidificarse al enfriar, y repetir el proceso muchas veces (reutilizables)", C: "Son siempre biodegradables", D: "No resisten ninguna temperatura" },
          correcta: ["B"],
          explicacion: "Se funden con cierto calor y solidifican al enfriarse, muchas veces: por eso se pueden reutilizar. Los de impresión 3D básicos son ABS y PLA."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de estos filamentos es más adecuado para imprimir piezas mecánicas?",
          opciones: { A: "Laywoo", B: "ABS", C: "PLA", D: "Filaflex" },
          correcta: ["B"],
          explicacion: "El ABS es el más resistente: una vez enfriado se puede taladrar, lijar o suavizar con acetona. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué características tiene el PLA? (elige todas las correctas)",
          opciones: { A: "Es biodegradable y procede de plantas (patata, maíz, remolacha…)", B: "Es más frágil que el ABS", C: "Es más fácil de imprimir que el ABS", D: "Procede del petróleo" },
          correcta: ["A", "B", "C"],
          explicacion: "El PLA es vegetal y biodegradable (ideal para envases de comida), más frágil pero más fácil de imprimir. El que procede del petróleo es el ABS."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál resiste más la temperatura y tiene un punto de fusión más alto?",
          opciones: { A: "El PLA", B: "El ABS", C: "Ambos por igual", D: "Ninguno resiste temperatura" },
          correcta: ["B"],
          explicacion: "El ABS resiste más la temperatura que el PLA y tiene un punto de fusión más alto. (Actividad propuesta del libro: el ABS es el más resistente.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo deben almacenarse el ABS y el PLA?",
          opciones: { A: "Al aire libre para que se sequen", B: "Sellados, porque la humedad del ambiente los degrada poco a poco", C: "En el frigorífico", D: "Sumergidos en acetona" },
          correcta: ["B"],
          explicacion: "Ambos deben almacenarse sellados: la humedad los degrada y el trabajo resultante pierde calidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué material 3D destaca por su elasticidad y flexibilidad?",
          opciones: { A: "Laybrick", B: "Los elastómeros termoplásticos (como el Filaflex)", C: "El ABS", D: "El Laywoo-D3" },
          correcta: ["B"],
          explicacion: "Los elastómeros termoplásticos dan una terminación elástica y flexible que ABS y PLA no aportan. Laybrick imita cerámica y Laywoo-D3 madera."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los copolímeros derivados del nailon sirven para rodamientos y rótulas?",
          opciones: { A: "Porque son transparentes", B: "Por su superficie lisa y resistencia, necesitando poca lubricación", C: "Porque son biodegradables", D: "Porque pesan más que el ABS" },
          correcta: ["B"],
          explicacion: "El nailon es resistente, más ligero que ABS y PLA, flexible y de superficie lisa: ideal para piezas con mucha fricción y poca lubricación."
        },
        {
          tipo: "unica",
          pregunta: "¿Quién creó el proyecto RepRap y cuál es su finalidad?",
          opciones: { A: "Douglas Engelbart; crear ratones de bajo coste", B: "Adrian Bowyer; crear impresoras de bajo coste que pueden imprimir partes de otras impresoras (autorreplicarse)", C: "Kees Immink; estandarizar el CD", D: "SandForce; fabricar controladores SSD" },
          correcta: ["B"],
          explicacion: "Adrian Bowyer creó RepRap: impresoras open source (casi todas con licencia GPL) capaces de imprimir piezas de otras impresoras."
        },
        {
          tipo: "unica",
          pregunta: "En una impresora RepRap, ¿qué son las «vitaminas»?",
          opciones: { A: "Aditivos del filamento para darle color", B: "Las partes no imprimibles que hay que comprar: motores, tornillos, varillas…", C: "Las piezas de plástico imprimibles", D: "Los perfiles de impresión de Cura" },
          correcta: ["B"],
          explicacion: "Las RepRap se componen de piezas de plástico imprimibles con otra impresora 3D y de «vitaminas»: las partes que no se pueden imprimir."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué formato se distribuyen los modelos imprimibles en 3D y qué hace falta para imprimirlos?",
          opciones: { A: "En JPG; se imprimen directamente", B: "En STL (geometría 3D sin color ni textura); deben transformarse a Gcode con programas como Cura", C: "En PDF; se convierten a PNG", D: "En Gcode; se convierten a STL" },
          correcta: ["B"],
          explicacion: "El STL describe la geometría tridimensional (binario, más compacto, o ASCII, editable). No es directamente imprimible: se transforma en comandos Gcode. (Actividad propuesta del libro.)"
        }
      ]
    },
    {
      nombre: "Paquete 3 · Multimedia, monitores y otros periféricos (4.6-4.7)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué hace un CODEC de sonido?",
          opciones: { A: "Amplificar la señal de los altavoces", B: "Transformar el sonido analógico en digital y viceversa", C: "Eliminar el ruido del micrófono", D: "Comprimir vídeo" },
          correcta: ["B"],
          explicacion: "Los chips de sonido de las placas base incluyen CODEC (codificadores/decodificadores) que convierten el sonido analógico en digital (el que procesa el equipo) y viceversa."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el MP3?",
          opciones: { A: "Un conector de audio", B: "Un estándar de codificación (compresión) de audio: MPEG Audio Layer 3", C: "Un tipo de micrófono", D: "Una tarjeta de sonido profesional" },
          correcta: ["B"],
          explicacion: "El sonido se captura y se comprime en formatos como MP3 (MPEG Audio Layer 3), el estándar más utilizado."
        },
        {
          tipo: "unica",
          pregunta: "MIDI es el acrónimo de:",
          opciones: { A: "Music Interface Device Interconnection", B: "Musical Instrument Dispositive Interface", C: "Musical Instrument Digital Interface", D: "Musical Interface Digital of Instruments" },
          correcta: ["C"],
          explicacion: "Interfaz digital para instrumentos musicales: parecido a una partitura interpretada por hasta 16 instrumentos simultáneos. Fuera del ámbito profesional no se usa porque no es sonido real. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Un buen micrófono:",
          opciones: { A: "Tiene una alta sensibilidad y un bajo nivel de ruido", B: "Tiene que ser sensible y con caretina, a ser posible de oro", C: "Tiene una alta sensibilidad y un alto nivel de ruido", D: "Tiene una baja sensibilidad y un bajo nivel de ruido" },
          correcta: ["A"],
          explicacion: "Alta sensibilidad (más calidad), bajo nivel de ruido (necesario en uso profesional) y buenos materiales y elementos mecánicos. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "En una cámara o webcam, ¿qué resolución es preferible?",
          opciones: { A: "La interpolada, que es mayor", B: "La real: en la interpolada se inventan píxeles por medio de algoritmos", C: "Cualquiera, son equivalentes", D: "La de la pantalla del equipo" },
          correcta: ["B"],
          explicacion: "Mejor resolución real y no interpolada. También cuentan los FPS que procesa (a más, mejor) y la iluminación para poca luz ambiental."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el bit rate de un vídeo?",
          opciones: { A: "El número de fotogramas por segundo", B: "La tasa de bits que pueden procesarse por segundo: a mayor bit rate, mejor calidad", C: "La resolución horizontal", D: "El tamaño del fichero" },
          correcta: ["B"],
          explicacion: "El bit rate es la tasa de bits procesados por segundo. Generalmente, cuanto mayor es, mejor es la calidad del vídeo."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se mide el tamaño de la pantalla de un monitor?",
          opciones: { A: "Por su anchura en centímetros", B: "Diagonalmente, desde una esquina a su opuesta, en pulgadas", C: "Por su superficie en cm²", D: "Por el número de píxeles" },
          correcta: ["B"],
          explicacion: "El tamaño se expresa en pulgadas y se mide en diagonal."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué unidad se expresa la luminancia o brillo de un monitor?",
          opciones: { A: "Lúmenes", B: "Candelas por metro cuadrado (cd/m²)", C: "Vatios", D: "Hercios" },
          correcta: ["B"],
          explicacion: "La luminancia va en cd/m²: 250-350 para tareas rutinarias; para películas es deseable más (unas 500). Los lúmenes son la unidad de los proyectores."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué la relación de aspecto 16:9 sustituyó a la 4:3?",
          opciones: { A: "Porque consume menos energía", B: "Porque la visión humana es panorámica, más cercana al 16:9", C: "Porque permite más resolución", D: "Por imposición de los fabricantes" },
          correcta: ["B"],
          explicacion: "La vista humana tiene una visión panorámica más cercana al 16:9; por eso las pantallas de cine son panorámicas."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el dot pitch (o pixel pitch)?",
          opciones: { A: "La distancia entre dos píxeles del mismo color en una pantalla", B: "El número de píxeles totales", C: "El tiempo de cambio de un píxel", D: "El brillo máximo de un píxel" },
          correcta: ["A"],
          explicacion: "Si el dot pitch es más pequeño, en el mismo espacio caben más píxeles (28 mm ≈ 1225 píxeles/cm² frente a 25 mm ≈ 1600)."
        },
        {
          tipo: "unica",
          pregunta: "¿Es correcto afirmar que cuanto mayor tiempo de respuesta, más rápido será el monitor?",
          opciones: { A: "Sí, mayor tiempo es mejor", B: "No: el tiempo de respuesta es lo que tarda un píxel en cambiar y volver; cuanto MENOR, más rápido el monitor", C: "El tiempo de respuesta no afecta a la velocidad", D: "Solo en monitores IPS" },
          correcta: ["B"],
          explicacion: "Es el tiempo que tarda un píxel en cambiar de valor y volver al original (en ms). Lo normal es 5 ms; en monitores gaming es menor. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué aporta la tecnología IPS (In Plane Switching)?",
          opciones: { A: "Menor consumo eléctrico", B: "Máxima definición de colores, brillo y nitidez, mayor ángulo de visión y menos fatiga ocular", C: "Mayor tasa de refresco", D: "Conectividad de red" },
          correcta: ["B"],
          explicacion: "Con IPS se consigue máxima definición de colores, brillo y nitidez; el ángulo de visión es mucho mayor y la imagen más nítida reduce la fatiga ocular."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significa que un dispositivo sea HD Ready?",
          opciones: { A: "Que tiene la máxima resolución posible", B: "Que visualiza alta resolución con un mínimo de 720 líneas físicas en 16:9 y conexión digital (DVI o HDMI)", C: "Que solo funciona con antena TDT", D: "Que es un monitor IPS" },
          correcta: ["B"],
          explicacion: "HD Ready: mínimo 720 líneas físicas en relación 16:9 y conexión digital. Full HD es la máxima resolución, con imágenes más nítidas."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la diferencia entre 1080p y 1080i?",
          opciones: { A: "p = portátil, i = integrado", B: "p = progresivo (todas las líneas a la vez); i = entrelazado (540 pares y 540 impares en fracciones distintas, peor calidad)", C: "1080i tiene más líneas", D: "Son exactamente iguales" },
          correcta: ["B"],
          explicacion: "Con «p» las líneas se muestran a la vez; con «i» (entrelazado) se alternan pares e impares, lo que da peor calidad al no mostrar la imagen completa a la vez."
        },
        {
          tipo: "unica",
          pregunta: "Un monitor con tasa de refresco de 72 Hz…",
          opciones: { A: "Muestra 72 colores", B: "Redibuja la imagen 72 veces por segundo", C: "Tiene 72 líneas verticales", D: "Consume 72 vatios" },
          correcta: ["B"],
          explicacion: "La tasa de refresco indica las veces por segundo que se dibuja la imagen. Si es muy baja, la imagen parpadea; y está ligada a la resolución (a más resolución, quizá menos refresco posible)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué valor de contraste es deseable en un monitor?",
          opciones: { A: "Superior a 600:1", B: "Inferior a 100:1", C: "Exactamente 16:9", D: "Superior a 50 000:1 obligatoriamente" },
          correcta: ["A"],
          explicacion: "El contraste (capacidad de producir negros oscuros y blancos brillantes) se expresa como ratio (p. ej., 1000:1); lo deseable es superior a 600:1."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué permite el parámetro DLNA de un monitor?",
          opciones: { A: "Acceder a los medios a través de la red (cable o wifi), recibiendo y controlando flujos de vídeo, audio y fotos", B: "Conectar dos monitores en cadena", C: "Calibrar el color automáticamente", D: "Reducir el tiempo de respuesta" },
          correcta: ["A"],
          explicacion: "DLNA (Digital Living Network Alliance): el monitor recibe y visualiza flujos de datos por red y permite controlarlos (avance, pausa, retroceso…)."
        },
        {
          tipo: "unica",
          pregunta: "Sobre los conectores de un monitor, ¿cuál es la afirmación correcta?",
          opciones: { A: "El VGA es digital y el DVI analógico", B: "El DVI da mejor imagen que el VGA pero no transmite audio; HDMI transmite audio y vídeo", C: "El HDMI solo transmite audio", D: "El VGA es el más recomendable hoy" },
          correcta: ["B"],
          explicacion: "VGA es analógico; DVI es digital con mejor imagen pero sin audio; HDMI y Thunderbolt llevan audio y vídeo. Hoy es muy deseable que el monitor tenga HDMI."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué ventajas tiene una tableta digitalizadora frente a un ratón? (elige todas las correctas)",
          opciones: { A: "Es más precisa", B: "Detecta la presión del lápiz", C: "Detecta la inclinación del lápiz", D: "Es siempre más barata" },
          correcta: ["A", "B", "C"],
          explicacion: "Las tabletas son más precisas, detectan presión e inclinación, y tienen botones para enviar órdenes (usándolas no hace falta ratón). Las profesionales superan los 1000 niveles de presión y son más caras."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuánto dura una lámpara LED de proyector frente a una incandescente?",
          opciones: { A: "5000 h frente a 50 000 h", B: "50 000 h o más, frente a 3000-5000 h de la incandescente", C: "Ambas duran lo mismo", D: "1000 h frente a 500 h" },
          correcta: ["B"],
          explicacion: "Los ledes duran 50 000 h o más; las incandescentes 3000-5000 h, necesitaban refrigeración (más ruido) y consumían muchísimo más."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema 4",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Clasifica: un pendrive o tarjeta de memoria es un periférico de…",
          opciones: { A: "Entrada", B: "Salida", C: "Almacenamiento", D: "Comunicación" },
          correcta: ["C"],
          explicacion: "En la clasificación moderna, pendrives y tarjetas de memoria son periféricos de almacenamiento (en la clásica serían de entrada/salida). (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Clasifica: una tarjeta de red (con o sin cable) es un periférico de…",
          opciones: { A: "Comunicación", B: "Almacenamiento", C: "Solo entrada", D: "Solo salida" },
          correcta: ["A"],
          explicacion: "Tarjetas de red, antenas wifi y bluetooth son periféricos de comunicación. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Clasifica: una webcam es un periférico de…",
          opciones: { A: "Salida", B: "Entrada", C: "Comunicación", D: "Almacenamiento" },
          correcta: ["B"],
          explicacion: "La webcam captura imagen y la envía al equipo: periférico de entrada, como el escáner, el teclado o el micrófono. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué un enchufe inteligente o un wearable se puede considerar un periférico?",
          opciones: { A: "Porque llevan batería", B: "Porque se conectan a un equipo y transmiten o reciben información", C: "No pueden considerarse periféricos", D: "Porque tienen pantalla" },
          correcta: ["B"],
          explicacion: "Cumplen la definición de periférico: dispositivos conectados que envían y/o reciben información (los wearables que hacen ambas cosas son de entrada/salida). (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tamaño tiene un documento A4?",
          opciones: { A: "210 × 290 mm", B: "216 × 297 mm", C: "200 × 300 mm", D: "215 × 280 mm" },
          correcta: ["B"],
          explicacion: "Según el libro, el tamaño de un A4 es de 216 × 297 milímetros; es el formato normal de los escáneres de documentos."
        },
        {
          tipo: "unica",
          pregunta: "Un escáner tiene resolución óptica de 4800 dpi. ¿Qué significa?",
          opciones: { A: "Que escanea 4800 páginas por hora", B: "Que tiene una fila de 4800 sensores dispuestos para escanear el documento", C: "Que interpola 4800 píxeles", D: "Que su área máxima es de 4800 pulgadas" },
          correcta: ["B"],
          explicacion: "La resolución óptica indica la fila de sensores reales; al hacer la pasada, la resolución hardware puede ser 4800 × 9600, y la interpolada aún mayor (p. ej., 12 800)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué fuente de luz usan los escáneres actuales?",
          opciones: { A: "Lámparas fluorescentes", B: "Bombillas incandescentes", C: "Sistemas led, más económicos e igual de eficientes", D: "Lámparas de queroseno" },
          correcta: ["C"],
          explicacion: "Evolución: fluorescentes → xenón y cátodos fríos → led (los actuales)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la profundidad de color de un escáner?",
          opciones: { A: "El número de bits que se utilizan para representar el color de cada píxel", B: "El número de colores de la lámpara", C: "La distancia máxima de enfoque", D: "El área máxima de escaneo" },
          correcta: ["A"],
          explicacion: "Por ejemplo, 48 bits de profundidad de color. A más bits, más matices de color puede capturar."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué colores se especializan las tiras de sensores de un escáner en color?",
          opciones: { A: "Rojo, amarillo y verde", B: "Rojo, azul y verde", C: "Cian, magenta y amarillo", D: "Blanco y negro" },
          correcta: ["B"],
          explicacion: "Cada tira se especializa en un color: rojo, azul y verde (RGB). (La autoevaluación del libro marca «rojo, amarillo y verde» como incorrecta.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué permite el OCR?",
          opciones: { A: "Reconocer los caracteres de una imagen para tratarlos con un procesador de textos", B: "Mejorar la resolución del escaneo", C: "Escanear en tres dimensiones", D: "Comprimir la imagen escaneada" },
          correcta: ["A"],
          explicacion: "OCR = Object Character Recognition. Lo incluyen casi todos los softwares de escáner; también se usa para identificar matrículas, palabras… (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los sistemas de reconocimiento facial siguen reconociendo a una persona con gafas o barba?",
          opciones: { A: "Porque guardan miles de fotos de la persona", B: "Porque usan modelos matemáticos avanzados e IA (redes neuronales, aprendizaje automático) sobre la fisiología 3D del rostro", C: "Porque escanean la retina a la vez", D: "Porque leen el DNI" },
          correcta: ["B"],
          explicacion: "Reconocen la fisiología del rostro en 3D (extensión entre ojos, profundidad de la cara, forma de la nariz…) con cámara normal + infrarroja, y modelos de IA que toleran cambios de apariencia."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué las impresiones del usuario tardan más que la velocidad ppm anunciada?",
          opciones: { A: "Porque el driver frena la impresora", B: "Porque los fabricantes hacen los test con páginas que tienen poca superficie impresa", C: "Porque el papel es más grueso", D: "Porque el USB es lento" },
          correcta: ["B"],
          explicacion: "Los test de velocidad se hacen con páginas de poca superficie impresa, así que las impresiones reales siempre tardan algo más que el tiempo de referencia."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué problema tiene la impresión de chorro de tinta?",
          opciones: { A: "El tóner es muy caro", B: "La tinta se disuelve fácilmente con el agua o incluso la humedad", C: "No imprime en color", D: "Necesita papel térmico" },
          correcta: ["B"],
          explicacion: "Las impresoras de tinta son económicas y aceptables para poco volumen, pero su tinta se disuelve con agua o humedad."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué aplicaciones de la impresión 3D cita el libro? (elige todas las correctas)",
          opciones: { A: "Odontología (coronas, puentes, piezas de ortodoncia)", B: "Medicina (piezas quirúrgicas biocompatibles)", C: "Sector aeroespacial y defensa", D: "Minería de criptomonedas" },
          correcta: ["A", "B", "C"],
          explicacion: "El libro cita odontología, medicina, aeroespacial, defensa, automoción y productos de consumo. También la «gastroimpresora» de la NASA y la creación de órganos con células madre."
        },
        {
          tipo: "unica",
          pregunta: "En medicina, además de resistentes, los materiales impresos en 3D deben ser…",
          opciones: { A: "Biocompatibles: no deben provocar alergias ni trastornos al ser humano", B: "Transparentes", C: "Magnéticos", D: "Solubles en agua" },
          correcta: ["A"],
          explicacion: "Deben ser biocompatibles y permitir crear objetos según la geometría del paciente, lo que reduce tiempos y mejora procedimientos."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuánto puede ahorrar, en energía, reciclar plástico para filamento frente a crear plástico comercial?",
          opciones: { A: "Hasta un 10 %", B: "Hasta un 50 %", C: "Hasta un 90 %", D: "No ahorra energía" },
          correcta: ["C"],
          explicacion: "Según los cálculos citados (iniciativa de la Universidad de Míchigan con botellas recicladas), puede ahorrar hasta el 90 % de la energía, aunque el filamento no siempre es de óptima calidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué grosor suelen tener los filamentos de impresión 3D?",
          opciones: { A: "Entre 1,75 y 3 milímetros", B: "Entre 5 y 10 milímetros", C: "Menos de 0,5 milímetros", D: "Exactamente 1 centímetro" },
          correcta: ["A"],
          explicacion: "Entre 1,75 y 3 mm, con precios de 25 a 60 €/kg o más según tipo y calidad; las bobinas se venden al peso."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué diferencia hay entre un fichero STL binario y uno ASCII?",
          opciones: { A: "El binario es más compacto; el ASCII se puede abrir y editar con un editor de texto", B: "El ASCII es más compacto", C: "El binario incluye el color y el ASCII no", D: "Son idénticos" },
          correcta: ["A"],
          explicacion: "Los binarios son más compactos (formato de máquina); los ASCII se pueden ver y editar con un editor como Notepad. Ninguno incluye color ni textura: solo geometría."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tecnología de proyector consigue factores de contraste mayores?",
          opciones: { A: "CRT", B: "LCD", C: "DLP", D: "VGA" },
          correcta: ["C"],
          explicacion: "Evolución: CRT → LCD (luz a través de tres pantallas LCD, una por color básico) → DLP, que consigue mayores factores de contraste."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué se mide la luminosidad de un proyector?",
          opciones: { A: "En candelas por metro cuadrado", B: "En lúmenes", C: "En vatios", D: "En hercios" },
          correcta: ["B"],
          explicacion: "En lúmenes: con pantallas grandes o mucha luz ambiente se necesitan más. Para una buena proyección hay que evitar fuentes de luz que incidan sobre la pantalla. (Los cd/m² son la luminancia de los monitores.)"
        }
      ]
    }
  ]
});
