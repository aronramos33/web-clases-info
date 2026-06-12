/* ============================================================
   TEMA 1 · Introducción a los equipos y sistemas informáticos
   Contenido basado en el libro "Montaje y mantenimiento de
   equipo" (J. C. Moreno, Ed. Síntesis), capítulo 1 (pp. 13-36).
   ============================================================ */

"use strict";

registrarTema({
  id: 1,
  titulo: "Introducción a los equipos y sistemas informáticos",
  descripcionCorta: "Hardware y software, programas, sistema operativo, firmware, componentes electrónicos, tipos de memoria y cómo arranca un ordenador.",

  resumen:
    "<p>Este tema sienta las bases de toda la asignatura. Aprenderás a distinguir <strong>hardware</strong> (lo tangible, lo que se puede tocar) de <strong>software</strong> (lo intangible, las órdenes), y conceptos clave como <strong>programa</strong> (conjunto de órdenes), <strong>aplicación</strong>, <strong>sistema operativo</strong> (software intermediario entre programas y hardware) y <strong>firmware</strong> (software contenido en el hardware).</p>" +
    "<p>Verás que un <strong>sistema informático</strong> lo forman hardware + software + recursos humanos, y que funcionalmente un equipo se organiza en <strong>periféricos de entrada → CPU → periféricos de salida</strong>. La CPU se compone de <strong>memoria + procesador</strong>, y el procesador de <strong>unidad de control + unidad aritmética</strong>.</p>" +
    "<p>Repasarás los <strong>componentes electrónicos pasivos</strong> (resistencia, condensador, transformador, fusible…) y <strong>activos</strong> (pila, transistor, diodo, circuito integrado, microprocesador), los <strong>tipos de memoria</strong> (masiva e interna; caché y ROM) y, por último, la <strong>secuencia de arranque</strong> de un ordenador en 6 pasos: corriente → BIOS → POST → sector de arranque → Boot Manager → carga del sistema operativo.</p>",

  mapa: [
    {
      titulo: "Conceptos básicos",
      hijos: ["Hardware vs software", "Programa", "Aplicación informática", "Sistema operativo", "Firmware", "Sistema informático"]
    },
    {
      titulo: "Bloques funcionales",
      hijos: ["Periféricos de entrada", "CPU = memoria + procesador", "Procesador = U. control + U. aritmética", "Periféricos de salida"]
    },
    {
      titulo: "Componentes pasivos",
      hijos: ["Resistencia (ohmios, Ω)", "Condensador (faradios, F)", "Transformador (inducción)", "Fusible (protección)", "Interruptor, cable"]
    },
    {
      titulo: "Componentes activos",
      hijos: ["Pila o batería", "Transistor", "Diodo (y led)", "Circuito integrado", "Microprocesador"]
    },
    {
      titulo: "Tipos de memoria",
      hijos: ["Almacenamiento masivo (no volátil)", "Memoria interna: RAM y ROM", "Memoria caché", "ROM → PROM → EEPROM (flash)"]
    },
    {
      titulo: "Funcionamiento del ordenador",
      hijos: ["1. Corriente", "2. BIOS", "3. POST", "4. Sector de arranque", "5. Boot Manager", "6. Carga del SO"]
    }
  ],

  conceptosClave: [
    "<strong>Hardware</strong>: elementos tangibles (se pueden tocar) de un dispositivo.",
    "<strong>Software</strong>: elementos intangibles; las órdenes que hacen funcionar al hardware.",
    "<strong>Programa</strong>: conjunto de órdenes con una finalidad determinada.",
    "<strong>Suite o paquete integrado</strong>: grupo de programas compatibles que comparten datos (LibreOffice, Microsoft Office).",
    "<strong>Sistema operativo</strong>: software que permite que los programas funcionen sobre un hardware concreto (hace de middleware).",
    "<strong>Firmware</strong>: software que contiene el hardware, para operaciones específicas.",
    "<strong>Sistema informático</strong> = hardware + software + recursos humanos.",
    "<strong>CPU</strong> = memoria + procesador. <strong>Procesador</strong> = unidad de control + unidad aritmética.",
    "<strong>Componentes pasivos</strong>: interconexión; transmiten o modifican el nivel de una señal.",
    "<strong>Componentes activos</strong>: controlan el flujo de corriente o realizan ganancia (semiconductores).",
    "<strong>Resistencia</strong> → consume potencia → se mide en ohmios (Ω).",
    "<strong>Condensador</strong> → almacena energía → se mide en faradios (F).",
    "<strong>Fusible</strong> → elemento de protección frente a excesos de corriente.",
    "<strong>Transformador</strong> → sube o baja el voltaje mediante inducción.",
    "<strong>Diodo</strong> → deja pasar la corriente en un solo sentido.",
    "<strong>Transistor</strong> → el componente electrónico más utilizado (millones en cada micro).",
    "<strong>Memoria caché</strong>: entre un dispositivo rápido y uno lento; más rápida, más cara y de menor capacidad que la RAM.",
    "<strong>RAM</strong>: volátil, formada por biestables, necesita refresco de memoria.",
    "<strong>ROM</strong>: memoria de solo lectura. Evolución: ROM → PROM → EEPROM (flash).",
    "<strong>POST</strong> (Power On Self Test): autotest del equipo en el arranque.",
    "<strong>Boot Manager</strong> (gestor de arranque): software que carga el SO en memoria. GRUB en Linux, NTLDR en Windows."
  ],

  frasesMemorizar: [
    "El hardware se toca; el software no se toca.",
    "Un programa es un conjunto de órdenes con una finalidad.",
    "El hardware solo entiende código binario (ceros y unos).",
    "El firmware es el software que contiene el hardware.",
    "Sistema informático = hardware + software + recursos humanos.",
    "CPU = memoria + procesador; procesador = unidad de control + unidad aritmética.",
    "La resistencia consume potencia y se mide en ohmios (Ω).",
    "El condensador almacena energía y se mide en faradios (F).",
    "El diodo solo deja pasar la corriente en un sentido.",
    "La pila transforma energía química en energía eléctrica.",
    "La caché es más rápida, más cara y de menor capacidad que la memoria central.",
    "La RAM es volátil: pierde la información sin corriente; el almacenamiento masivo no.",
    "La RAM se mide en nanosegundos; el disco duro, en milisegundos.",
    "Arranque: corriente → BIOS → POST → sector de arranque → Boot Manager → sistema operativo.",
    "La BIOS está en una memoria ROM de tipo EEPROM.",
    "El sector de arranque es hardware; el gestor de arranque es software.",
    "Los programas solo se ejecutan en la memoria principal (RAM).",
    "GRUB es el gestor de arranque de Linux; NTLDR, el de Windows."
  ],

  apartados: [
    {
      titulo: "1.1 Introducción: conceptos básicos",
      html:
        "<h4>1.1.1 Diferencia entre hardware y software</h4>" +
        "<p>Cualquier dispositivo se compone de <strong>hardware</strong> (los elementos electrónicos que realizan la función para la que fue fabricado) y <strong>software</strong> (las órdenes, de fábrica o del usuario, que hacen que el hardware realice las tareas).</p>" +
        '<div class="tabla-scroll"><table><caption>Hardware vs Software</caption>' +
        "<thead><tr><th></th><th>Hardware</th><th>Software</th></tr></thead><tbody>" +
        "<tr><td><strong>Naturaleza</strong></td><td>Tangible (se puede tocar)</td><td>Intangible (no se puede tocar)</td></tr>" +
        "<tr><td><strong>Qué es</strong></td><td>Elementos electrónicos/físicos</td><td>Órdenes y programas</td></tr>" +
        "<tr><td><strong>Ejemplos</strong></td><td>Placa base, RAM, disco, teclado</td><td>Sistema operativo, aplicaciones, firmware</td></tr>" +
        "</tbody></table></div>" +
        "<h4>1.1.2 Programa</h4>" +
        "<p>Un <strong>programa</strong> es un conjunto de órdenes cuya finalidad es realizar una función determinada. El hardware solo entiende <strong>código binario</strong> (ceros y unos); los programas se escriben en lenguajes de programación y después se traducen a binario.</p>" +
        "<h4>1.1.3 Aplicación informática</h4>" +
        "<p>Una <strong>aplicación</strong> permite al usuario realizar una tarea determinada; puede estar formada por uno o varios programas. Un grupo de programas compatibles que comparten datos se llama <strong>paquete integrado o suite</strong> (LibreOffice, OpenOffice, Microsoft Office). Tipos de aplicaciones: hojas de cálculo, bases de datos, procesadores de texto, editores de presentaciones, contabilidad, diseño gráfico, reproductores multimedia, lectores de documentos…</p>" +
        "<h4>1.1.4 Sistema operativo</h4>" +
        "<p>El <strong>sistema operativo</strong> es un software que permite que los programas del usuario funcionen en un hardware concreto: hace de <strong>middleware</strong> (nexo de unión) entre los programas y el hardware. Hay SO de escritorio (Windows, Linux, macOS) y móviles (Android, iOS). iOS, macOS y Linux comparten un antepasado común: <strong>Unix</strong>.</p>" +
        "<h4>1.1.5 Firmware</h4>" +
        "<p>El <strong>firmware</strong> es el software que contiene el hardware. Se diferencia del SO en que está desarrollado para <strong>operaciones específicas</strong> y para que el hardware funcione de forma eficiente, mientras que el SO es más complejo y de propósito general. Tienen firmware los MP3, electrodomésticos, routers… y suele poder <strong>actualizarse</strong> para corregir problemas. ¡Ojo!: Android e iOS NO son firmware, son sistemas operativos.</p>" +
        "<h4>1.1.6 Sistema informático</h4>" +
        "<p>Un <strong>sistema informático</strong> está compuesto por todos los elementos físicos y lógicos necesarios para procesar la información: el <strong>hardware</strong>, el <strong>software</strong> y también los <strong>recursos humanos</strong> que dan las órdenes al sistema.</p>"
    },
    {
      titulo: "1.2 Los sistemas informáticos. Bloques funcionales",
      html:
        "<p>Desde el punto de vista lógico, un equipo informático se organiza así (la organización lógica nunca coincide con la física o comercial):</p>" +
        "<ul>" +
        "<li><strong>Periféricos de entrada</strong> (teclado, ratón, touchpad…) → envían información a la CPU.</li>" +
        "<li><strong>CPU</strong> (Central Process Unit, unidad central de proceso): procesa la información. Es el \"cerebro\" del sistema.</li>" +
        "<li><strong>Periféricos de salida</strong> (pantalla, impresora…) → reciben el resultado.</li>" +
        "</ul>" +
        "<p>Un periférico puede ser de entrada <em>y</em> de salida a la vez, como las <strong>pantallas táctiles</strong>.</p>" +
        "<p>La CPU está compuesta por una <strong>memoria</strong> (donde residen datos y programas) y un <strong>procesador</strong>. El procesador, a su vez, se compone de:</p>" +
        "<ul>" +
        "<li><strong>Unidad aritmética</strong>: hardware especializado en operaciones matemáticas, aritméticas (1+1=2) y lógicas (1 AND 1 = 1).</li>" +
        "<li><strong>Unidad de control</strong>: el verdadero \"cerebro\" del sistema.</li>" +
        "</ul>"
    },
    {
      titulo: "1.3 Los componentes electrónicos",
      html:
        "<p>Los componentes electrónicos se clasifican en dos grupos:</p>" +
        "<ul>" +
        "<li><strong>Componentes activos</strong>: pueden controlar el flujo de corriente de un circuito o realizar alguna ganancia. Los semiconductores son el caso más claro.</li>" +
        "<li><strong>Componentes pasivos</strong>: básicamente de interconexión; transmiten o modifican el nivel de una señal.</li>" +
        "</ul>" +
        '<div class="tabla-scroll"><table><caption>Clasificación de componentes electrónicos</caption>' +
        "<thead><tr><th>Componentes pasivos</th><th>Componentes activos</th></tr></thead><tbody>" +
        "<tr><td>Resistencia</td><td>Pila o batería</td></tr>" +
        "<tr><td>Condensador</td><td>Transistor</td></tr>" +
        "<tr><td>Transformador</td><td>Diodo</td></tr>" +
        "<tr><td>Fusible</td><td>Circuito integrado</td></tr>" +
        "<tr><td>Interruptor, cable</td><td>Microprocesador</td></tr>" +
        "</tbody></table></div>" +
        "<h4>1.3.1 Componentes pasivos</h4>" +
        "<p><strong>A) La resistencia.</strong> Consume potencia en el circuito. Se fabrica con materiales como carbón o vidrio. Su valor se mide en <strong>ohmios (Ω)</strong>, en honor a Georg Simon Ohm. Su valor se indica con <strong>bandas de colores</strong> que se leen de izquierda a derecha: dos primeras bandas = cifras, tercera = multiplicador, y la banda más separada = <strong>tolerancia</strong> (dorado ±5 %, plateado ±10 %).</p>" +
        '<div class="tabla-scroll"><table><caption>Código de colores de las resistencias</caption>' +
        "<thead><tr><th>Color</th><th>Banda 1</th><th>Banda 2</th><th>Multiplicador</th><th>Tolerancia</th></tr></thead><tbody>" +
        "<tr><td>Negro</td><td>0</td><td>0</td><td>×1</td><td>—</td></tr>" +
        "<tr><td>Marrón</td><td>1</td><td>1</td><td>×10</td><td>±1 %</td></tr>" +
        "<tr><td>Rojo</td><td>2</td><td>2</td><td>×100</td><td>±2 %</td></tr>" +
        "<tr><td>Naranja</td><td>3</td><td>3</td><td>×1000</td><td>—</td></tr>" +
        "<tr><td>Amarillo</td><td>4</td><td>4</td><td>×10 000</td><td>—</td></tr>" +
        "<tr><td>Verde</td><td>5</td><td>5</td><td>×100 000</td><td>—</td></tr>" +
        "<tr><td>Azul</td><td>6</td><td>6</td><td>×1 000 000</td><td>—</td></tr>" +
        "<tr><td>Violeta</td><td>7</td><td>7</td><td>×10 000 000</td><td>—</td></tr>" +
        "<tr><td>Gris</td><td>8</td><td>8</td><td>×100 000 000</td><td>—</td></tr>" +
        "<tr><td>Blanco</td><td>9</td><td>9</td><td>×1 000 000 000</td><td>—</td></tr>" +
        "<tr><td>Dorado</td><td>—</td><td>—</td><td>—</td><td>±5 %</td></tr>" +
        "<tr><td>Plateado</td><td>—</td><td>—</td><td>—</td><td>±10 %</td></tr>" +
        "</tbody></table></div>" +
        "<p><em>Ejemplo del libro:</em> rojo-violeta-naranja + dorado = 27 × 1000 = <strong>27 000 Ω (27 kΩ) ±5 %</strong>.</p>" +
        "<p><strong>B) El condensador.</strong> Quizá el componente más común en cualquier circuito. Su función es <strong>almacenar energía</strong>. Está formado por dos capas de metal separadas por un aislante o <strong>dieléctrico</strong>. Su capacidad se mide en <strong>faradios (F)</strong>. Tipos: mkp, cerámicos, electrolíticos, de lenteja, de papel…</p>" +
        "<p><strong>C) El transformador.</strong> Permite <strong>aumentar o disminuir el voltaje</strong> de un circuito. Se basa en la <strong>inducción</strong>: sobre un núcleo de hierro se enrollan dos cables (primario y secundario); según el número de vueltas de cada uno, el voltaje sube o baja.</p>" +
        "<p><strong>D) El fusible.</strong> Es un <strong>elemento de protección</strong>: un hilo de metal muy delgado que se funde por el calor cuando pasa más corriente de la permitida, protegiendo el resto del circuito. Se reemplaza por otro de las <strong>mismas características</strong> (mismos amperios).</p>" +
        "<h4>1.3.2 Componentes activos</h4>" +
        "<p><strong>A) La pila o batería.</strong> Transforma la <strong>energía química en energía eléctrica</strong>. Tiene dos polos: positivo (<strong>cátodo</strong>) y negativo (<strong>ánodo</strong>). Los electrones van del polo negativo al positivo generando corriente. En los ordenadores hay una pila que alimenta la <strong>memoria CMOS</strong>, que guarda los valores de la BIOS.</p>" +
        "<p><strong>B) El transistor.</strong> Por número, es el componente electrónico <strong>más utilizado</strong>: los microprocesadores llevan millones (el Core i9 Skylake tiene 2600 millones). También está en las RAM y en la mayoría de circuitos integrados.</p>" +
        "<p><strong>C) El diodo.</strong> Formado por semiconductores (silicio, germanio). Permite el paso de la corriente <strong>solo en un sentido</strong>. Los más comunes son los <strong>led</strong> (Light Emitting Diode), que emiten luz; también los hay ultravioleta e infrarrojos.</p>" +
        "<p><strong>D) Los circuitos integrados.</strong> Base de la electrónica moderna: una delgada lámina de <strong>silicio</strong> sobre la que, mediante <strong>fotolitografía</strong>, se crean transistores, resistencias, condensadores, etc.</p>" +
        "<p><strong>E) El microprocesador.</strong> El circuito integrado <strong>más complejo</strong>: millones de transistores. Es el \"cerebro\" del equipo. Hay micros en vehículos, ascensores, smartphones, drones, robots…</p>"
    },
    {
      titulo: "1.4 Tipos de memoria",
      html:
        "<p>Las memorias se clasifican en dos grupos:</p>" +
        "<ol>" +
        "<li><strong>Memorias de almacenamiento masivo</strong>: SSD, discos duros, tarjetas SD, pendrives… Mucho más lentas que las internas, pero su información <strong>no es volátil</strong> (permanece sin corriente).</li>" +
        "<li><strong>Memoria interna</strong>: la <strong>RAM</strong> (Random Access Memory, memoria de acceso aleatorio) y las <strong>ROM</strong> (Read Only Memory, solo lectura). Son muy rápidas: los programas en ejecución se ubican en ellas.</li>" +
        "</ol>" +
        "<p>La RAM está formada por <strong>biestables</strong>: celdillas que almacenan energía que se traduce en información binaria (cada celdilla es un <strong>bit</strong>). Como los biestables pierden la energía con el tiempo, hace falta el <strong>refresco de memoria</strong>: un proceso que lee el valor y lo vuelve a grabar para que no se pierda.</p>" +
        "<p>⚡ <strong>Velocidades</strong>: el acceso a RAM es del orden de <strong>nanosegundos</strong> (10⁻⁹ s) y el del disco duro de <strong>milisegundos</strong> (10⁻³ s). Por eso nunca se ejecuta un programa desde la memoria secundaria.</p>" +
        "<p>💡 La memoria <strong>DDR RAM</strong> tiene <em>doble tasa de transferencia</em>: transmite información por dos canales distintos de forma simultánea, multiplicando la velocidad.</p>" +
        "<h4>1.4.1 Memoria caché</h4>" +
        "<p>Se sitúa <strong>entre dos dispositivos, uno rápido y otro lento</strong>, para no ralentizar al rápido, almacenando la información más frecuente. Es común entre el procesador y la memoria central. Características: es <strong>más rápida</strong> que la memoria central, pero <strong>más cara y de menor capacidad</strong>.</p>" +
        "<h4>1.4.2 Memoria ROM</h4>" +
        "<p>ROM = Read Only Memory (solo lectura). Evolución:</p>" +
        '<div class="tabla-scroll"><table><caption>Evolución de las memorias ROM</caption>' +
        "<thead><tr><th>Tipo</th><th>Característica</th></tr></thead><tbody>" +
        "<tr><td><strong>ROM</strong></td><td>Viene programada de fábrica; no se puede modificar.</td></tr>" +
        "<tr><td><strong>PROM</strong> (Programmable ROM)</td><td>Programable, pero <strong>solo una vez</strong>.</td></tr>" +
        "<tr><td><strong>EEPROM</strong> (Electrically Erasable ROM)</td><td>Reescribible tantas veces como se desee. La memoria <strong>flash</strong> es de este tipo.</td></tr>" +
        "</tbody></table></div>"
    },
    {
      titulo: "1.5 Software base y de aplicación",
      html:
        "<p>Dentro del software se distinguen dos tipos:</p>" +
        "<ol>" +
        "<li><strong>Software base</strong> (también llamado sistema operativo o software de sistema): su objetivo es que el equipo funcione de forma eficiente, asignando recursos y permitiendo administrarlo. Incluye herramientas para administrar dispositivos (monitor, discos, bluetooth…), diagnóstico y reparación, backup, seguridad…</li>" +
        "<li><strong>Software de aplicación</strong>: se instala una vez que el equipo tiene software base. Son los programas del usuario: navegación, ofimática, dibujo, procesos educativos, industriales, comerciales…</li>" +
        "</ol>" +
        "<p>💡 El <strong>software de programación</strong> se considera software de aplicación: permite a un usuario con conocimientos crear programas.</p>"
    },
    {
      titulo: "1.6 Funcionamiento de un ordenador",
      html:
        "<h4>1.6.1 Qué ocurre cuando se pulsa el botón de encendido</h4>" +
        "<p>La secuencia de arranque tiene <strong>6 pasos</strong>:</p>" +
        "<ol>" +
        "<li><strong>Suministro de corriente</strong>: la placa base pone en funcionamiento la fuente de alimentación y los dispositivos empiezan a recibir corriente.</li>" +
        "<li><strong>Ejecución de la BIOS</strong>: la BIOS es un programa (software) almacenado en una <strong>ROM de tipo EEPROM</strong>. Su objetivo en el arranque es cargar el SO en la RAM.</li>" +
        "<li><strong>Ejecución del POST</strong> (Power On Self Test): autotest que comprueba que la RAM no esté dañada, el estado del procesador, que exista un dispositivo de arranque, etc.</li>" +
        "<li><strong>Sector de arranque</strong>: lugar físico donde se localiza el gestor de arranque. Los sistemas antiguos (Legacy BIOS) solo cargaban desde tablas <strong>MBR</strong>; los <strong>UEFI</strong> actuales pueden usar tablas <strong>GPT</strong>, con muchas ventajas.</li>" +
        "<li><strong>Carga del Boot Manager</strong> (gestor de arranque): software que carga el SO en memoria. Cada SO tiene el suyo: <strong>GRUB</strong> en Linux, <strong>NTLDR</strong> en Windows. Hay gestores que permiten tener varios SO en una misma máquina.</li>" +
        "<li><strong>Carga del sistema operativo</strong>: a partir de aquí el usuario ya puede ejecutar programas.</li>" +
        "</ol>" +
        "<p>🧠 Truco para el examen: <em>el sector de arranque es físico (hardware); el gestor de arranque es lógico (software)</em>.</p>" +
        "<h4>1.6.2 Qué ocurre cuando carga el sistema operativo</h4>" +
        "<p>Primero se carga en memoria el <strong>núcleo o kernel</strong>, la parte del SO que realiza las funciones más básicas (control de procesos, de memoria, de archivos). Después se ponen en marcha otros procesos: wifi/red, bluetooth, sonido, escritorio…</p>" +
        "<h4>1.6.3 Qué ocurre cuando se ejecuta un programa</h4>" +
        "<p>Al invocar un programa, el SO lo localiza en la <strong>memoria secundaria</strong> (SSD, disco…) y lo <strong>carga en la memoria principal</strong>. Los programas se ejecutan <strong>solamente en la memoria principal</strong>: el almacenamiento secundario no tiene velocidad suficiente.</p>"
    }
  ],

  glosario: [
    { termino: "Boot", definicion: "Del verbo \"arrancar\" en inglés. El Boot Loader es el programa responsable de que el sistema operativo comience a ejecutarse." },
    { termino: "HD / HDD", definicion: "Acrónimo de Hard Disk / Hard Disk Drive: el disco duro." },
    { termino: "SSD", definicion: "Solid State Drive (unidad de estado sólido). Sustituye a los discos duros por su mayor velocidad y menor consumo." },
    { termino: "Linux", definicion: "Sistema operativo de software libre con muchas distribuciones (distros). Ofrece su código fuente para mejorarlo o adaptarlo sin coste." },
    { termino: "Middleware", definicion: "Software que hace de intermediario entre dos sistemas o programas." },
    { termino: "Kernel (núcleo)", definicion: "Parte del sistema operativo que realiza las operaciones más básicas." },
    { termino: "Periférico", definicion: "Cualquier dispositivo conectado a la CPU. Hay periféricos de entrada y de salida: pantalla, ratón, teclado, impresora…" },
    { termino: "Semiconductor", definicion: "Tipo de material conductor. El más utilizado de la historia es el silicio (de ahí \"Silicon Valley\"). Forman los microprocesadores y circuitos integrados." },
    { termino: "Tasa de transferencia", definicion: "Cantidad de información transmitida por unidad de tiempo." },
    { termino: "Volátil", definicion: "Efímero. La RAM almacena información volátil: desaparece cuando no está alimentada eléctricamente." },
    { termino: "Suite (paquete integrado)", definicion: "Grupo de programas compatibles entre sí que comparten datos, p. ej. LibreOffice o Microsoft Office." },
    { termino: "Biestable", definicion: "Celdilla de la RAM que almacena energía traducida en información binaria. Cada biestable es un bit." },
    { termino: "Refresco de memoria", definicion: "Proceso que lee y vuelve a grabar la información de la RAM para que no se pierda al desvanecerse la energía de los biestables." },
    { termino: "POST", definicion: "Power On Self Test: autotest que comprueba en el arranque que el equipo está preparado para funcionar." },
    { termino: "BIOS", definicion: "Programa almacenado en una ROM tipo EEPROM encargado de las funciones básicas del equipo; en el arranque carga el SO en la RAM." },
    { termino: "CMOS", definicion: "Memoria alimentada por una pila que almacena los valores de configuración de la BIOS." },
    { termino: "Boot Manager (gestor de arranque)", definicion: "Software que carga el sistema operativo en memoria: GRUB (Linux), NTLDR (Windows)." },
    { termino: "MBR / GPT", definicion: "Tipos de tablas de particiones. MBR es la antigua (Legacy BIOS); GPT (GUID Partition Table) es la usada por sistemas UEFI." },
    { termino: "Fotolitografía", definicion: "Técnica con la que se crean los transistores y circuitos sobre la lámina de silicio de un circuito integrado." },
    { termino: "Dieléctrico", definicion: "Material aislante que separa las dos láminas metálicas de un condensador." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Conceptos básicos y bloques funcionales (1.1-1.2)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es el hardware?",
          opciones: {
            A: "Los elementos tangibles de un dispositivo, que se pueden tocar.",
            B: "Las órdenes que se le dan a un dispositivo.",
            C: "El software que contiene un dispositivo de fábrica.",
            D: "Cualquier programa instalado por el usuario."
          },
          correcta: ["A"],
          explicacion: "El hardware son los elementos tangibles (se pueden tocar); el software son los elementos intangibles, las órdenes."
        },
        {
          tipo: "unica",
          pregunta: "Un programa es…",
          opciones: {
            A: "Un conjunto de órdenes con la finalidad de realizar una función determinada.",
            B: "Un componente electrónico activo.",
            C: "Un grupo de aplicaciones que comparten datos.",
            D: "Un dispositivo de entrada y salida."
          },
          correcta: ["A"],
          explicacion: "Un programa es un conjunto de órdenes cuya finalidad es realizar una función determinada."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tipo de código entienden los dispositivos hardware?",
          opciones: {
            A: "Lenguaje de programación de alto nivel.",
            B: "Código binario (ceros y unos).",
            C: "Código hexadecimal directamente.",
            D: "Lenguaje natural."
          },
          correcta: ["B"],
          explicacion: "El hardware solamente entiende código binario: ceros y unos. Los programas se escriben en lenguajes de programación y se traducen a binario."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se llama a un grupo de programas compatibles entre sí que comparten datos?",
          opciones: {
            A: "Firmware.",
            B: "Sistema operativo.",
            C: "Paquete integrado o suite.",
            D: "Kernel."
          },
          correcta: ["C"],
          explicacion: "Un grupo de programas que comparten datos y son compatibles entre sí es un paquete integrado o suite, como LibreOffice o Microsoft Office."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de las siguientes son suites ofimáticas mencionadas en el libro?",
          opciones: {
            A: "LibreOffice.",
            B: "OpenOffice.",
            C: "Microsoft Office.",
            D: "Android."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El libro cita LibreOffice, OpenOffice y Microsoft Office como suites conocidas. Android es un sistema operativo móvil."
        },
        {
          tipo: "unica",
          pregunta: "El sistema operativo hace de nexo de unión (middleware) entre…",
          opciones: {
            A: "El usuario y los periféricos.",
            B: "Los programas del usuario y el hardware.",
            C: "La memoria RAM y la memoria ROM.",
            D: "Dos equipos conectados en red."
          },
          correcta: ["B"],
          explicacion: "El sistema operativo permite que los programas del usuario funcionen en un hardware concreto: hace de middleware entre programas y hardware."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué sistemas operativos comparten como antepasado común a Unix?",
          opciones: {
            A: "iOS.",
            B: "Mac OS (OS X).",
            C: "Linux.",
            D: "Windows."
          },
          correcta: ["A", "B", "C"],
          explicacion: "iOS, OS X y Linux son evoluciones de Unix y comparten muchos elementos. Windows no procede de Unix."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el firmware?",
          opciones: {
            A: "El software que contiene el hardware, para operaciones específicas.",
            B: "Un sistema operativo de propósito general.",
            C: "El hardware que contiene el software.",
            D: "Una aplicación de usuario preinstalada."
          },
          correcta: ["A"],
          explicacion: "El firmware es el software que contiene el hardware, desarrollado para operaciones específicas y para que el hardware funcione de forma eficiente."
        },
        {
          tipo: "unica",
          pregunta: "¿Android e iOS son firmware?",
          opciones: {
            A: "Sí, porque vienen preinstalados en el dispositivo.",
            B: "No: por su complejidad y funcionalidad son sistemas operativos.",
            C: "Solo Android es firmware.",
            D: "Solo iOS es firmware."
          },
          correcta: ["B"],
          explicacion: "El libro advierte de esta confusión: iOS y Android, por su complejidad y funcionalidad, son sistemas operativos, no firmware."
        },
        {
          tipo: "unica",
          pregunta: "Un sistema informático está compuesto por:",
          opciones: {
            A: "Monitor, teclado, ratón y CPU.",
            B: "Hardware y periféricos.",
            C: "Hardware y software.",
            D: "Recursos humanos, hardware y software."
          },
          correcta: ["D"],
          explicacion: "El sistema informático incluye los elementos físicos (hardware), los lógicos (software) e incluso los recursos humanos que dan las órdenes. Es una pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "La CPU está formada por:",
          opciones: {
            A: "El procesador y la unidad aritmética.",
            B: "La memoria y el procesador.",
            C: "La unidad de memoria y de control.",
            D: "La memoria y la unidad aritmética."
          },
          correcta: ["B"],
          explicacion: "La CPU se compone de memoria (donde residen datos y programas) y procesador. Es otra pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El procesador está compuesto por:",
          opciones: {
            A: "La unidad aritmética y la unidad de control.",
            B: "La memoria y la caché.",
            C: "La BIOS y el POST.",
            D: "Los periféricos de entrada y salida."
          },
          correcta: ["A"],
          explicacion: "El procesador se compone de una unidad aritmética (operaciones matemáticas y lógicas) y una unidad de control (el verdadero \"cerebro\")."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué unidad del procesador se considera el verdadero \"cerebro\" del sistema?",
          opciones: {
            A: "La unidad aritmética.",
            B: "La unidad de control.",
            C: "La memoria caché.",
            D: "La GPU."
          },
          correcta: ["B"],
          explicacion: "La unidad aritmética hace las operaciones matemáticas, pero la unidad de control es el verdadero \"cerebro\" del sistema."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es un ejemplo de operación lógica?",
          opciones: {
            A: "1 + 1 = 2.",
            B: "2 × 3 = 6.",
            C: "1 AND 1 = 1.",
            D: "10 − 5 = 5."
          },
          correcta: ["C"],
          explicacion: "El libro pone como ejemplo: operación aritmética es 1+1=2; operación lógica es 1 AND 1 = 1."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué periférico puede actuar a la vez como periférico de entrada y de salida?",
          opciones: {
            A: "El teclado.",
            B: "La impresora.",
            C: "La pantalla táctil.",
            D: "El ratón."
          },
          correcta: ["C"],
          explicacion: "Las pantallas táctiles muestran información (salida) y reciben pulsaciones del usuario (entrada)."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de los siguientes son periféricos de entrada?",
          opciones: {
            A: "Teclado.",
            B: "Ratón.",
            C: "Touchpad.",
            D: "Impresora."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Teclado, ratón y touchpad envían información a la CPU (entrada). La impresora recibe el resultado (salida)."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el flujo de información en los bloques funcionales de un sistema informático?",
          opciones: {
            A: "CPU → periféricos de entrada → periféricos de salida.",
            B: "Periféricos de entrada → CPU → periféricos de salida.",
            C: "Periféricos de salida → CPU → periféricos de entrada.",
            D: "Memoria → periféricos → procesador."
          },
          correcta: ["B"],
          explicacion: "Los periféricos de entrada envían información a la CPU, que la procesa y envía el resultado a los periféricos de salida."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es una aplicación informática?",
          opciones: {
            A: "Un software que permite a un usuario realizar una tarea determinada.",
            B: "El software que contiene el hardware.",
            C: "El núcleo del sistema operativo.",
            D: "Un componente pasivo del circuito."
          },
          correcta: ["A"],
          explicacion: "Una aplicación permite al usuario realizar una tarea determinada y puede estar compuesta por uno o varios programas."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de los siguientes son tipos de aplicaciones informáticas según el libro?",
          opciones: {
            A: "Hojas de cálculo.",
            B: "Procesadores de texto.",
            C: "Programas de diseño gráfico y retoque fotográfico.",
            D: "El POST."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El libro lista hojas de cálculo, bases de datos, procesadores de texto, presentaciones, contabilidad, diseño gráfico, multimedia y lectores de documentos. El POST es un autotest del arranque."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué se diferencia principalmente el firmware del sistema operativo?",
          opciones: {
            A: "El firmware es hardware y el SO es software.",
            B: "El firmware realiza operaciones específicas; el SO es más complejo y de propósito general.",
            C: "El firmware no se puede actualizar nunca.",
            D: "No hay ninguna diferencia."
          },
          correcta: ["B"],
          explicacion: "El firmware está desarrollado para operaciones específicas y eficiencia del hardware; el SO es más complejo y persigue un propósito general. Además, muchos firmwares sí pueden actualizarse."
        }
      ]
    },
    {
      nombre: "Paquete 2 · Componentes electrónicos (1.3)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Los componentes activos son aquellos que…",
          opciones: {
            A: "Solo interconectan elementos del circuito.",
            B: "Pueden controlar el flujo de corriente o realizar alguna ganancia.",
            C: "Siempre almacenan energía.",
            D: "Solo protegen el circuito."
          },
          correcta: ["B"],
          explicacion: "Los componentes activos controlan el flujo de corriente de un circuito o realizan alguna ganancia; los semiconductores son el caso más claro."
        },
        {
          tipo: "unica",
          pregunta: "Los componentes pasivos son básicamente…",
          opciones: {
            A: "Componentes de interconexión que transmiten o modifican el nivel de una señal.",
            B: "Semiconductores.",
            C: "Microprocesadores.",
            D: "Generadores de corriente."
          },
          correcta: ["A"],
          explicacion: "Los componentes pasivos son componentes de interconexión: transmiten o modifican el nivel de una señal."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de los siguientes son componentes pasivos?",
          opciones: {
            A: "Resistencia.",
            B: "Condensador.",
            C: "Fusible.",
            D: "Transistor."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Resistencia, condensador, fusible, transformador, interruptor y cable son pasivos. El transistor es un componente activo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de los siguientes son componentes activos?",
          opciones: {
            A: "Diodo.",
            B: "Circuito integrado.",
            C: "Microprocesador.",
            D: "Transformador."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Diodo, circuito integrado, microprocesador, transistor y pila son activos. El transformador es un componente pasivo."
        },
        {
          tipo: "unica",
          pregunta: "La resistencia tiene como objetivo:",
          opciones: {
            A: "Aumentar el voltaje.",
            B: "Almacenar energía.",
            C: "Consumir potencia.",
            D: "Reducir el voltaje."
          },
          correcta: ["C"],
          explicacion: "Las resistencias consumen potencia en un circuito electrónico. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El valor de una resistencia se mide en:",
          opciones: {
            A: "Voltios.",
            B: "Faradios.",
            C: "Amperios.",
            D: "Ohmios."
          },
          correcta: ["D"],
          explicacion: "El valor nominal de las resistencias es el ohmio (Ω), por el físico alemán Georg Simon Ohm."
        },
        {
          tipo: "unica",
          pregunta: "¿Con qué letra o símbolo se representa el ohmio?",
          opciones: {
            A: "La letra F.",
            B: "La letra griega omega (Ω).",
            C: "La letra V.",
            D: "La letra A."
          },
          correcta: ["B"],
          explicacion: "El ohmio se representa con la letra griega omega (Ω). El faradio se representa con la F."
        },
        {
          tipo: "unica",
          pregunta: "En una resistencia de cuatro bandas, la banda más separada del resto indica…",
          opciones: {
            A: "El multiplicador.",
            B: "La primera cifra.",
            C: "La tolerancia.",
            D: "El material de fabricación."
          },
          correcta: ["C"],
          explicacion: "La banda más desplazada es la banda de la tolerancia (dorado ±5 %, plateado ±10 %)."
        },
        {
          tipo: "unica",
          pregunta: "Una resistencia con bandas rojo-violeta-naranja y dorado vale…",
          opciones: {
            A: "27 000 Ω con tolerancia del ±5 %.",
            B: "270 Ω con tolerancia del ±10 %.",
            C: "2700 Ω con tolerancia del ±5 %.",
            D: "27 Ω con tolerancia del ±1 %."
          },
          correcta: ["A"],
          explicacion: "Rojo=2, violeta=7, naranja=×1000 → 27×1000 = 27 000 Ω (27 kΩ); dorado = ±5 %. Es el ejemplo resuelto del libro."
        },
        {
          tipo: "unica",
          pregunta: "Una resistencia con bandas rojo-violeta-marrón y dorado vale…",
          opciones: {
            A: "27 Ω.",
            B: "270 Ω.",
            C: "2700 Ω.",
            D: "27 000 Ω."
          },
          correcta: ["B"],
          explicacion: "Rojo=2, violeta=7, marrón=×10 → 27×10 = 270 Ω ±5 %. Ejercicio resuelto 1.2 del libro."
        },
        {
          tipo: "unica",
          pregunta: "El condensador tiene como objetivo:",
          opciones: {
            A: "Almacenar energía.",
            B: "Rectificar señales.",
            C: "Consumir potencia.",
            D: "Reducir el voltaje."
          },
          correcta: ["A"],
          explicacion: "La función del condensador es almacenar energía. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El valor (capacidad) de un condensador se mide en:",
          opciones: {
            A: "Faradios.",
            B: "Ohmios.",
            C: "Amperios.",
            D: "Vatios."
          },
          correcta: ["A"],
          explicacion: "La capacidad de un condensador se mide en faradios y se representa con la letra F."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo está formado un condensador?",
          opciones: {
            A: "Por dos capas de metal separadas por un material aislante o dieléctrico.",
            B: "Por un hilo de metal muy delgado.",
            C: "Por un núcleo de hierro con dos bobinados.",
            D: "Por una lámina de silicio con transistores."
          },
          correcta: ["A"],
          explicacion: "El condensador son dos láminas metálicas separadas por un aislante (dieléctrico), cada una conectada a un terminal."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué fenómeno físico se basa el transformador?",
          opciones: {
            A: "La fotolitografía.",
            B: "La inducción.",
            C: "La resistividad.",
            D: "La conmutación."
          },
          correcta: ["B"],
          explicacion: "La base del transformador es la inducción: el bobinado primario induce corriente en el secundario a través del núcleo de hierro."
        },
        {
          tipo: "unica",
          pregunta: "¿De qué depende que un transformador aumente o disminuya el voltaje?",
          opciones: {
            A: "Del grosor del núcleo de hierro.",
            B: "Del número de vueltas de los bobinados primario y secundario.",
            C: "Del material dieléctrico empleado.",
            D: "De la tolerancia de sus resistencias."
          },
          correcta: ["B"],
          explicacion: "Según el número de vueltas que tengan el primario y el secundario, el transformador aumenta o disminuye el voltaje del circuito."
        },
        {
          tipo: "unica",
          pregunta: "El fusible es…",
          opciones: {
            A: "Un elemento de protección frente a excesos de corriente.",
            B: "Un componente que almacena energía.",
            C: "Un semiconductor que amplifica señales.",
            D: "Un componente que aumenta el voltaje."
          },
          correcta: ["A"],
          explicacion: "El fusible es un hilo metálico muy delgado que se funde cuando pasa más corriente de la permitida, protegiendo el circuito."
        },
        {
          tipo: "unica",
          pregunta: "Cuando se funde un fusible, debe reemplazarse por…",
          opciones: {
            A: "Uno que resista más amperios, para que no vuelva a fundirse.",
            B: "Otro de las mismas características y mismos amperios.",
            C: "Un cable directo.",
            D: "Cualquier fusible, sin importar sus características."
          },
          correcta: ["B"],
          explicacion: "Debe sustituirse por otro de las mismas características y que resista los mismos amperios; si no, el circuito quedaría desprotegido."
        },
        {
          tipo: "unica",
          pregunta: "La pila o batería transforma…",
          opciones: {
            A: "Energía eléctrica en energía química.",
            B: "Energía química en energía eléctrica.",
            C: "Energía mecánica en eléctrica.",
            D: "Corriente alterna en continua."
          },
          correcta: ["B"],
          explicacion: "El objetivo de una pila es transformar la energía química en energía eléctrica."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué componente electrónico es, por número, el más utilizado?",
          opciones: {
            A: "El diodo.",
            B: "La resistencia.",
            C: "El transistor.",
            D: "El condensador."
          },
          correcta: ["C"],
          explicacion: "El transistor es el componente más utilizado por número: los microprocesadores actuales llevan millones (el Core i9 Skylake, 2600 millones)."
        },
        {
          tipo: "unica",
          pregunta: "La función del diodo en un circuito es…",
          opciones: {
            A: "Permitir el paso de la corriente solamente en un sentido.",
            B: "Almacenar energía en sus dos láminas.",
            C: "Consumir potencia.",
            D: "Subir o bajar el voltaje."
          },
          correcta: ["A"],
          explicacion: "El diodo, formado por semiconductores como silicio o germanio, permite el paso de corriente solo en un sentido. Los más comunes son los led."
        }
      ]
    },
    {
      nombre: "Paquete 3 · Memorias, software y arranque (1.4-1.6)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Las memorias de almacenamiento masivo se caracterizan por…",
          opciones: {
            A: "Ser más rápidas que las internas y volátiles.",
            B: "Ser más lentas que las internas, pero no volátiles.",
            C: "Perder la información al apagar el equipo.",
            D: "Estar formadas por biestables."
          },
          correcta: ["B"],
          explicacion: "El almacenamiento masivo (SSD, discos, SD, pendrives) es más lento que la memoria interna, pero su información no es volátil."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de las siguientes son memorias de almacenamiento masivo?",
          opciones: {
            A: "Unidades SSD.",
            B: "Discos duros.",
            C: "Tarjetas SD y pendrives.",
            D: "Memoria RAM."
          },
          correcta: ["A", "B", "C"],
          explicacion: "SSD, discos duros, tarjetas SD y pendrives son almacenamiento masivo. La RAM es memoria interna."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significa RAM?",
          opciones: {
            A: "Read Access Memory.",
            B: "Random Access Memory (memoria de acceso aleatorio).",
            C: "Rapid Access Module.",
            D: "Read And Modify."
          },
          correcta: ["B"],
          explicacion: "RAM es el acrónimo de Random Access Memory, memoria de acceso aleatorio."
        },
        {
          tipo: "unica",
          pregunta: "La memoria RAM está formada por unas celdillas llamadas…",
          opciones: {
            A: "Biestables.",
            B: "Sectores.",
            C: "Clústeres.",
            D: "Pistas."
          },
          correcta: ["A"],
          explicacion: "La RAM está formada por biestables: celdillas que almacenan energía traducida en información binaria. Cada biestable es un bit."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué sirve el refresco de memoria?",
          opciones: {
            A: "Para enfriar físicamente los módulos de RAM.",
            B: "Para releer y regrabar la información de los biestables antes de que se pierda.",
            C: "Para borrar la memoria al apagar el equipo.",
            D: "Para acelerar el disco duro."
          },
          correcta: ["B"],
          explicacion: "Los biestables van perdiendo su energía con el tiempo; el refresco lee el valor existente y lo vuelve a grabar para que no se pierda."
        },
        {
          tipo: "unica",
          pregunta: "El tiempo de acceso a la RAM es del orden de… y el del disco duro del orden de…",
          opciones: {
            A: "Milisegundos / nanosegundos.",
            B: "Nanosegundos / milisegundos.",
            C: "Segundos / milisegundos.",
            D: "Nanosegundos / microsegundos."
          },
          correcta: ["B"],
          explicacion: "La RAM se mide en nanosegundos (10⁻⁹ s) y el disco duro en milisegundos (10⁻³ s). Por eso los programas nunca se ejecutan desde memoria secundaria."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significa que la memoria DDR tenga \"doble tasa de transferencia\"?",
          opciones: {
            A: "Que consume el doble de energía.",
            B: "Que transmite información por dos canales distintos de forma simultánea.",
            C: "Que tiene el doble de capacidad.",
            D: "Que necesita el doble de refresco."
          },
          correcta: ["B"],
          explicacion: "La memoria DDR RAM transmite información por dos canales distintos a la vez, multiplicando la velocidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se sitúa la memoria caché?",
          opciones: {
            A: "Entre dos dispositivos, uno rápido y otro lento.",
            B: "Solo dentro del disco duro.",
            C: "En el sector de arranque.",
            D: "Entre el teclado y la pantalla."
          },
          correcta: ["A"],
          explicacion: "La caché se sitúa entre un dispositivo rápido y otro lento para no ralentizar al rápido. Es común entre el procesador y la memoria central."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué características tiene la memoria caché frente a la memoria central?",
          opciones: {
            A: "Es más rápida.",
            B: "Es más cara.",
            C: "Tiene menor capacidad.",
            D: "Es más lenta pero más barata."
          },
          correcta: ["A", "B", "C"],
          explicacion: "La caché es más rápida que la memoria central, pero más cara y de menor capacidad."
        },
        {
          tipo: "unica",
          pregunta: "ROM es el acrónimo de…",
          opciones: {
            A: "Random Only Memory.",
            B: "Read Only Memory (memoria de solo lectura).",
            C: "Rapid Operation Memory.",
            D: "Read Open Module."
          },
          correcta: ["B"],
          explicacion: "ROM significa Read Only Memory: memoria de solo lectura."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué diferencia hay entre una ROM y una PROM?",
          opciones: {
            A: "La ROM viene programada de fábrica; la PROM puede programarse, pero solo una vez.",
            B: "La PROM es regrabable infinitas veces.",
            C: "La ROM es más moderna que la PROM.",
            D: "No hay ninguna diferencia."
          },
          correcta: ["A"],
          explicacion: "La ROM viene programada de fábrica y la PROM (Programmable ROM) permite ser programada solamente una vez."
        },
        {
          tipo: "unica",
          pregunta: "Las memorias flash se catalogan como memorias de tipo…",
          opciones: {
            A: "PROM.",
            B: "ROM clásica.",
            C: "EEPROM.",
            D: "RAM."
          },
          correcta: ["C"],
          explicacion: "Las EEPROM (Electrically Erasable ROM) permiten reescribirse tantas veces como se desee, y las memorias flash son de este tipo."
        },
        {
          tipo: "unica",
          pregunta: "El software base también se denomina…",
          opciones: {
            A: "Software de aplicación.",
            B: "Sistema operativo o software de sistema.",
            C: "Firmware.",
            D: "Suite ofimática."
          },
          correcta: ["B"],
          explicacion: "El software base también se llama sistema operativo o software de sistema; su objetivo es que el equipo funcione eficientemente y pueda administrarse."
        },
        {
          tipo: "unica",
          pregunta: "El software de programación se considera…",
          opciones: {
            A: "Software base.",
            B: "Software de aplicación.",
            C: "Firmware.",
            D: "Hardware."
          },
          correcta: ["B"],
          explicacion: "El libro indica que el software de programación puede considerarse software de aplicación: con él un usuario puede crear programas."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué tipo de memoria está almacenada la BIOS?",
          opciones: {
            A: "En la memoria RAM.",
            B: "En una memoria ROM de tipo EEPROM.",
            C: "En el disco duro.",
            D: "En la memoria caché."
          },
          correcta: ["B"],
          explicacion: "La BIOS es un programa que está en una memoria ROM de tipo EEPROM."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el POST?",
          opciones: {
            A: "Un autotest en el que el equipo comprueba si está preparado para funcionar.",
            B: "El gestor de arranque de Windows.",
            C: "El núcleo del sistema operativo.",
            D: "Una tabla de particiones."
          },
          correcta: ["A"],
          explicacion: "El POST (Power On Self Test) comprueba cosas básicas: que la RAM no esté dañada, el estado del procesador, que exista un dispositivo de arranque…"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de los siguientes procesos del arranque se ejecuta antes?",
          opciones: {
            A: "La carga del Boot Manager.",
            B: "La carga del sistema operativo.",
            C: "El POST.",
            D: "La BIOS."
          },
          correcta: ["D"],
          explicacion: "Orden: corriente → BIOS → POST → sector de arranque → Boot Manager → carga del SO. La BIOS se ejecuta antes que el POST. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El gestor de arranque de Linux es… y el de Windows es…",
          opciones: {
            A: "NTLDR / GRUB.",
            B: "GRUB / NTLDR.",
            C: "GPT / MBR.",
            D: "POST / BIOS."
          },
          correcta: ["B"],
          explicacion: "GRUB es el gestor de arranque de Linux y NTLDR el de Windows. Cada SO tiene su gestor de arranque."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué parte del sistema operativo se carga primero en memoria?",
          opciones: {
            A: "El escritorio.",
            B: "El núcleo o kernel.",
            C: "Los drivers de la tarjeta wifi.",
            D: "Las aplicaciones de usuario."
          },
          correcta: ["B"],
          explicacion: "Primero se carga el kernel, que realiza las funciones más básicas (control de procesos, memoria, archivos); luego el resto de procesos."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se ejecutan los programas?",
          opciones: {
            A: "Solamente en la memoria principal (RAM).",
            B: "Directamente en el disco duro.",
            C: "En la memoria ROM.",
            D: "En el sector de arranque."
          },
          correcta: ["A"],
          explicacion: "Los programas se ejecutan solo en la memoria principal: el almacenamiento secundario no tiene velocidad suficiente."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema 1",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Cuál de los siguientes NO se considera periférico?",
          opciones: {
            A: "Una pantalla táctil.",
            B: "El lector de DVD.",
            C: "El microprocesador.",
            D: "Un pendrive."
          },
          correcta: ["C"],
          explicacion: "El microprocesador forma parte de la CPU, no es un periférico conectado a ella. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "SSD es el acrónimo de:",
          opciones: {
            A: "Secure System Drive.",
            B: "Solid State Drive.",
            C: "Solid Storage Drive.",
            D: "Software Storage Drive."
          },
          correcta: ["B"],
          explicacion: "SSD = Solid State Drive (unidad de estado sólido). Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "HDD es el acrónimo de:",
          opciones: {
            A: "High Definition Drive.",
            B: "High Disk Drive.",
            C: "Hard Disk Drive.",
            D: "Hover Disk Drive."
          },
          correcta: ["C"],
          explicacion: "HDD = Hard Disk Drive, el disco duro. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El software se diferencia del hardware en que…",
          opciones: {
            A: "El software es tangible y el hardware intangible.",
            B: "El software es intangible y el hardware tangible.",
            C: "Ambos son tangibles.",
            D: "Ambos son intangibles."
          },
          correcta: ["B"],
          explicacion: "El software no se puede tocar (intangible); el hardware sí (tangible)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un middleware?",
          opciones: {
            A: "Un software que hace de intermediario entre dos sistemas o programas.",
            B: "Un componente electrónico pasivo.",
            C: "Una memoria intermedia entre RAM y caché.",
            D: "Un tipo de tabla de particiones."
          },
          correcta: ["A"],
          explicacion: "Middleware es el software intermediario entre dos sistemas o programas; el SO hace de middleware entre los programas y el hardware."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué alimenta la pila de la placa base de un ordenador?",
          opciones: {
            A: "La memoria CMOS, que almacena los valores de la BIOS.",
            B: "El microprocesador.",
            C: "La memoria RAM.",
            D: "El disco duro."
          },
          correcta: ["A"],
          explicacion: "La pila alimenta la memoria CMOS, responsable de almacenar los valores de configuración de la BIOS."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué técnica se usa para fabricar los circuitos integrados sobre la lámina de silicio?",
          opciones: {
            A: "La inducción.",
            B: "La fotolitografía.",
            C: "La soldadura por ola.",
            D: "El templado."
          },
          correcta: ["B"],
          explicacion: "Mediante fotolitografía se van creando los transistores, resistencias, condensadores y circuitos sobre la lámina de silicio."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué emiten los diodos led?",
          opciones: {
            A: "Luz.",
            B: "Calor únicamente.",
            C: "Corriente alterna.",
            D: "Ondas de radio."
          },
          correcta: ["A"],
          explicacion: "Led = Light Emitting Diode, diodo emisor de luz. También existen diodos que emiten luz ultravioleta e infrarroja."
        },
        {
          tipo: "unica",
          pregunta: "El polo positivo y el polo negativo de una pila se llaman, respectivamente…",
          opciones: {
            A: "Ánodo y cátodo.",
            B: "Cátodo y ánodo.",
            C: "Primario y secundario.",
            D: "Emisor y receptor."
          },
          correcta: ["B"],
          explicacion: "Según el libro, el polo positivo es el cátodo y el negativo es el ánodo. Los electrones van del negativo al positivo."
        },
        {
          tipo: "unica",
          pregunta: "Un nanosegundo equivale a…",
          opciones: {
            A: "1 × 10⁻³ segundos.",
            B: "1 × 10⁻⁶ segundos.",
            C: "1 × 10⁻⁹ segundos.",
            D: "1 × 10⁻¹² segundos."
          },
          correcta: ["C"],
          explicacion: "Un nanosegundo = 10⁻⁹ s; un milisegundo = 10⁻³ s. Un milisegundo es un millón de nanosegundos."
        },
        {
          tipo: "multiple",
          pregunta: "Sobre la secuencia de arranque, señala las afirmaciones correctas:",
          opciones: {
            A: "El primer paso es el suministro de corriente al equipo.",
            B: "El POST se ejecuta antes que la BIOS.",
            C: "El Boot Manager carga el sistema operativo en memoria.",
            D: "Hasta que no se carga el SO, el usuario no puede ejecutar programas."
          },
          correcta: ["A", "C", "D"],
          explicacion: "El orden es: corriente → BIOS → POST → sector de arranque → Boot Manager → SO. La BIOS se ejecuta antes que el POST, no al revés."
        },
        {
          tipo: "unica",
          pregunta: "Los sistemas antiguos Legacy BIOS solo podían arrancar desde tablas de particiones…",
          opciones: {
            A: "GPT.",
            B: "MBR (Master Boot Record).",
            C: "NTFS.",
            D: "FAT32."
          },
          correcta: ["B"],
          explicacion: "Los sistemas Legacy BIOS solo cargaban desde tablas MBR; los sistemas UEFI actuales pueden usar GPT (GUID Partition Table)."
        },
        {
          tipo: "unica",
          pregunta: "\"El sector de arranque es… y el gestor de arranque es…\"",
          opciones: {
            A: "Software / hardware.",
            B: "Hardware (físico) / software (lógico).",
            C: "Ambos hardware.",
            D: "Ambos software."
          },
          correcta: ["B"],
          explicacion: "El libro lo remarca: el sector de arranque es algo físico (hardware); el gestor de arranque es algo lógico (software)."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué comprueba el POST durante el arranque?",
          opciones: {
            A: "Que la memoria RAM no esté dañada.",
            B: "El buen estado del procesador.",
            C: "Que exista un dispositivo desde el cual arrancar.",
            D: "Que haya conexión a Internet."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El POST hace comprobaciones básicas: RAM, procesador y existencia de un dispositivo de arranque. No comprueba la conexión a Internet."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace el sistema operativo cuando el usuario ejecuta un programa?",
          opciones: {
            A: "Lo ejecuta directamente desde el disco duro.",
            B: "Lo localiza en la memoria secundaria y lo carga en la memoria principal.",
            C: "Lo copia a la memoria ROM.",
            D: "Lo envía a la BIOS para su ejecución."
          },
          correcta: ["B"],
          explicacion: "El SO localiza el programa en la memoria secundaria (SSD, disco…) y lo carga en la memoria principal, donde se ejecuta."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué funciones básicas realiza el kernel de un sistema operativo?",
          opciones: {
            A: "Control de procesos, de memoria y de archivos.",
            B: "Solo la gestión del escritorio.",
            C: "El refresco de la memoria RAM.",
            D: "La ejecución del POST."
          },
          correcta: ["A"],
          explicacion: "El kernel realiza las funciones más básicas: control de los procesos, de la memoria y de los archivos."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué material semiconductor es el más utilizado de la historia?",
          opciones: {
            A: "El germanio.",
            B: "El silicio.",
            C: "El cobre.",
            D: "El carbón."
          },
          correcta: ["B"],
          explicacion: "El silicio es el semiconductor más utilizado de la historia; de ahí el nombre de Silicon Valley."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué componente sería el \"cerebro\" si comparamos un ordenador con el cuerpo humano?",
          opciones: {
            A: "La memoria RAM.",
            B: "El microprocesador.",
            C: "La fuente de alimentación.",
            D: "El disco duro."
          },
          correcta: ["B"],
          explicacion: "El libro hace el símil: el microprocesador sería el cerebro de las personas. Es el circuito integrado más complejo."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las afirmaciones correctas sobre las memorias:",
          opciones: {
            A: "La RAM es volátil.",
            B: "La ROM es de solo lectura.",
            C: "La caché almacena la información más frecuente.",
            D: "El disco duro es más rápido que la RAM."
          },
          correcta: ["A", "B", "C"],
          explicacion: "La RAM pierde su información sin corriente, la ROM es de solo lectura y la caché guarda la información más frecuente. El disco duro es muchísimo más lento que la RAM."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántos transistores contiene el procesador Core i9 Skylake según el libro?",
          opciones: {
            A: "2600 millones.",
            B: "26 millones.",
            C: "260 000.",
            D: "2600."
          },
          correcta: ["A"],
          explicacion: "El libro indica que el Core i9 Skylake contiene 2600 millones de transistores: ejemplo de la enorme integración actual."
        }
      ]
    }
  ]
});
