/* ============================================================
   TEMA 2 · Elementos internos de un sistema microinformático
   Contenido basado en el libro "Montaje y mantenimiento de
   equipo" (J. C. Moreno, Ed. Síntesis), capítulo 2 (pp. 37-64).
   ============================================================ */

"use strict";

registrarTema({
  id: 2,
  titulo: "Elementos internos de un sistema microinformático",
  descripcionCorta: "Conectores externos e internos, caja, placa base, socket, BIOS, chipset, memoria RAM, microprocesador, tarjeta gráfica y tarjetas de expansión.",

  resumen:
    "<p>Este tema repasa el <strong>hardware comercial</strong> de un equipo. Empezamos por los <strong>conectores externos</strong> (USB y sus versiones, Thunderbolt, jacks de sonido por colores, VGA/DVI/HDMI) y los <strong>internos</strong> (ATX de 24 pines, ATX-12V para el procesador, SATA, M.2, ventiladores, Front Panel, speaker).</p>" +
    "<p>Después se estudia la <strong>caja o chasis</strong> (materiales y formatos ATX, micro-ATX, mini-ITX, E-ATX), la <strong>placa base</strong> y su <strong>factor de forma</strong>, los <strong>sockets</strong> PGA (AMD) y LGA (Intel), la <strong>BIOS</strong> (funciones, secuencia de arranque, valores por defecto, pila CMOS) y el <strong>chipset</strong>, que comunica todos los elementos del sistema.</p>" +
    "<p>Por último se ven los <strong>parámetros de la memoria RAM</strong> (velocidad de acceso, velocidad de reloj, latencias, dual channel, voltaje, ECC), las <strong>ventajas de DDR4 sobre DDR3</strong>, las memorias <strong>SO-DIMM</strong>, los <strong>parámetros del microprocesador</strong> (velocidad, FSB, cachés L1/L2/L3, tecnología de fabricación, VCore, núcleos, hyperthreading, overclocking), la <strong>tarjeta gráfica y la GPU</strong> con el puerto <strong>PCI Express</strong>, y las <strong>tarjetas de expansión</strong>.</p>",

  mapa: [
    {
      titulo: "Conectores externos",
      hijos: ["USB 2.0 / 3.0 / 3.1 (retrocompatibles)", "Thunderbolt (Apple, 2×10 Gbps)", "Sonido: verde, azul, rosa (+5.1)", "VGA (analógico), DVI y HDMI (digitales)"]
    },
    {
      titulo: "Conectores internos",
      hijos: ["ATX 24 pines (placa)", "ATX-12V 4/8 pines (procesador)", "SATA y M.2 (NVMe)", "CPU fan / CHA fan", "Front Panel y PC speaker"]
    },
    {
      titulo: "Caja y placa base",
      hijos: ["Chapa troquelada vs aluminio", "ATX, micro-ATX, mini-ITX, E-ATX", "Factor de forma", "SoC y arquitectura ARM"]
    },
    {
      titulo: "Socket y BIOS",
      hijos: ["PGA (pines en el micro, AMD)", "LGA (pines en el socket, Intel)", "Zócalo ZIF", "BIOS: arranque, CMOS, pila CR-2032"]
    },
    {
      titulo: "Chipset y RAM",
      hijos: ["Chipset comunica los componentes", "Velocidad acceso/reloj, latencia CL", "Dual/triple/quad channel", "DDR4 vs DDR3, SO-DIMM, ECC"]
    },
    {
      titulo: "Micro, gráfica y expansión",
      hijos: ["Hz, FSB, cachés L1/L2/L3", "Nanómetros, VCore, núcleos", "Hyperthreading, overclocking", "GPU, PCIe X1/X16, SLI/Crossfire"]
    }
  ],

  conceptosClave: [
    "<strong>USB</strong>: plug and play y retrocompatible. USB 2.0 = 480 Mbps; USB 3.0 = 10 veces más rápido; USB 3.1 = 10 Gbps.",
    "<strong>Thunderbolt</strong>: puerto de Apple inventado por Intel; conexión óptica, 2 canales de 10 Gbps, hasta 6 dispositivos en cadena.",
    "<strong>Colores de sonido</strong>: verde = salida (altavoces), azul = entrada de línea, rosa = micrófono.",
    "<strong>VGA</strong>: analógico, 15 pines, azul. <strong>DVI</strong>: digital, blanco. <strong>HDMI</strong>: digital, vídeo + audio hasta 5 Gbps.",
    "<strong>Conector ATX</strong>: 24 pines (antes 20), alimenta la placa base. <strong>ATX-12V</strong>: 4 u 8 pines, alimenta el procesador.",
    "<strong>SATA</strong>: conecta discos y SSD. <strong>M.2</strong>: evolución de SATA; un NVMe puede ser hasta 6 veces más rápido que un SSD SATA.",
    "<strong>Caja</strong>: chapa troquelada (barata, poco rígida) vs aluminio (rígido, ligero, caro).",
    "<strong>Factor de forma</strong>: formato de la placa base (ATX, micro-ATX, mini-ITX…).",
    "<strong>SoC</strong> (System on a Chip): procesador de móviles/tabletas que integra gráficos, E/S, bluetooth… Arquitectura ARM.",
    "<strong>Socket PGA</strong>: pines en el microprocesador (AMD). <strong>Socket LGA</strong>: pines en el socket (Intel).",
    "<strong>Zócalo ZIF</strong>: fija el micro sin hacer presión, mediante una patilla.",
    "<strong>BIOS</strong> = Basic Input Output System. Sus datos se guardan en la memoria <strong>CMOS</strong>, alimentada por la pila <strong>CR-2032 de 3,3 V</strong>.",
    "<strong>Fabricantes de BIOS</strong>: AMI y AWARD-Phoenix.",
    "<strong>Chipset</strong>: grupo de chips que comunica los elementos del sistema y da conectividad exterior.",
    "Con memorias de distinta velocidad, el sistema va a la velocidad de la <strong>más lenta</strong>.",
    "<strong>Latencia CL</strong>: ciclos de reloj que espera el sistema hasta que la memoria selecciona la columna.",
    "<strong>Voltajes RAM</strong>: DDR2 = 1,8 V; DDR3 = 1,5 V; DDR4 = 1,2 V.",
    "<strong>DDR4 vs DDR3</strong>: más capacidad, −40 % consumo, +50 % ancho de banda, CRC, 288 pines (vs 240).",
    "<strong>ECC</strong>: detección y corrección de errores mediante paridad; típica de servidores.",
    "<strong>Cachés</strong>: L1 (la más rápida, en el núcleo), L2 (backside bus), L3 (más lenta pero mayor capacidad).",
    "<strong>Tecnología de fabricación</strong>: tamaño de las puertas lógicas, en nanómetros.",
    "<strong>Hyperthreading</strong>: un núcleo ejecuta dos tareas simultáneas (Intel Core i).",
    "<strong>Overclocking</strong>: subir la velocidad por encima de la nominal (Intel terminados en K). Hace perder la garantía.",
    "<strong>GPU</strong>: descarga a la CPU del trabajo gráfico; experta en operaciones en coma flotante.",
    "<strong>PCI Express</strong>: X1 (red, sonido) y X16 (tarjeta de vídeo, 16 enlaces bidireccionales).",
    "<strong>SLI</strong> (NVidia) y <strong>Crossfire</strong> (ATI): varias gráficas en paralelo."
  ],

  frasesMemorizar: [
    "El USB 3.0 es 10 veces más rápido que el USB 2.0 (480 Mbps).",
    "El USB 3.1 (SuperSpeed) llega a 10 Gbps: el doble que el USB 3.0.",
    "Thunderbolt: dos canales de 10 Gbps y hasta 6 dispositivos en cadena.",
    "VGA es analógico; DVI y HDMI son digitales.",
    "HDMI transmite vídeo y sonido hasta 5 Gbps.",
    "Sonido: verde altavoces, azul entrada de línea, rosa micrófono.",
    "El conector ATX de la placa tiene 24 pines; el ATX-12V del procesador, 4 u 8.",
    "Un NVMe M.2 (PCIe) puede ser hasta 6 veces más rápido que un SSD SATA.",
    "PGA: pines en el micro (AMD). LGA: pines en el socket (Intel).",
    "El zócalo ZIF no necesita presión para fijar el microprocesador.",
    "BIOS = Basic Input Output System; sus datos se guardan en la CMOS.",
    "La pila de la BIOS es la CR-2032 de 3,3 voltios.",
    "Si mezclas memorias de distinta velocidad, todo va a la velocidad de la más lenta.",
    "Ancho de banda teórico = velocidad de reloj × 8.",
    "DDR4 usa 1,2 V y 288 pines; DDR3 usa 1,5 V y 240 pines.",
    "Las memorias DDR, DDR2, DDR3 y DDR4 NO son compatibles entre sí.",
    "SO-DIMM: la memoria de los portátiles y equipos compactos.",
    "La caché L1 va a máxima velocidad y está integrada en el núcleo.",
    "El overclocking anula la garantía del microprocesador.",
    "La GPU descarga a la CPU del trabajo gráfico, pero no puede reemplazarla.",
    "La tarjeta de vídeo se conecta al puerto PCI Express X16."
  ],

  apartados: [
    {
      titulo: "2.1 Introducción y 2.2 Conectores",
      html:
        "<p>Los <strong>conectores</strong> son elementos de interconexión entre los componentes internos del equipo y los dispositivos externos (periféricos). Están <strong>estandarizados</strong>.</p>" +
        "<h4>2.2.1 Conectores externos</h4>" +
        '<figure class="figura"><img src="assets/img/tema2/fig2-01.jpg" alt="Panel trasero de una placa base con los conectores PS2, VGA, DVI, HDMI, Ethernet, USB 2.0, USB 3.0 y sonido etiquetados" loading="lazy"><figcaption>Figura 2.1 del libro — Conectores externos de una placa base.</figcaption></figure>' +
        "<p><strong>A) USB.</strong> Uno de los más utilizados por su simplicidad, resistencia y fiabilidad:</p>" +
        "<ul>" +
        "<li><strong>Plug and play</strong>: se conecta y ya puede utilizarse.</li>" +
        "<li><strong>Velocidad</strong>: el USB 3.0 es <strong>10 veces más rápido</strong> que el USB 2.0 (que va a 480 Mbps).</li>" +
        "<li><strong>Retrocompatibilidad</strong>: un dispositivo USB 3.0 en un puerto 2.0 funciona (a menor velocidad), y viceversa.</li>" +
        "<li><strong>Tipos de conector</strong>: tipo A, tipo B, mini, micro-B (muy usado en discos duros externos)…</li>" +
        "<li><strong>USB 3.1 (SuperSpeed USB 10 Gbps)</strong>: el doble de velocidad que el 3.0, totalmente retrocompatible y con mejor eficiencia energética.</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema2/fig2-02.jpg" alt="Detalle de un conector USB 3.0 micro-B y su puerto" loading="lazy"><figcaption>Figura 2.2 del libro — Tipos de conectores USB (detalle del micro-B).</figcaption></figure>' +
        "<p><strong>B) Thunderbolt.</strong> Puerto de comunicaciones de los ordenadores <strong>Apple</strong> (inventado por <strong>Intel</strong>, igual que el USB). Transmite vídeo, audio y datos. Su alta velocidad se debe a su <strong>conexión óptica</strong> (pulsos de luz). Permite conectar hasta <strong>6 dispositivos en cadena</strong> y es <strong>4 veces más rápido que el USB 3.0</strong> al trabajar con <strong>dos canales de 10 Gb/s</strong> simultáneos.</p>" +
        "<p><strong>C) Conector de sonido.</strong> Jacks por colores:</p>" +
        '<div class="tabla-scroll"><table><caption>Colores de los conectores de sonido</caption>' +
        "<thead><tr><th>Color</th><th>Función</th></tr></thead><tbody>" +
        "<tr><td>Verde</td><td>Salida de línea: altavoces</td></tr>" +
        "<tr><td>Azul</td><td>Entrada de línea (no amplificada)</td></tr>" +
        "<tr><td>Rosa</td><td>Entrada de micrófono</td></tr>" +
        "<tr><td>Gris (5.1)</td><td>Salida altavoces delanteros</td></tr>" +
        "<tr><td>Negro (5.1)</td><td>Salida altavoces traseros</td></tr>" +
        "<tr><td>Naranja (5.1)</td><td>Salida subwoofer o altavoz central</td></tr>" +
        "</tbody></table></div>" +
        "<p><strong>D) Puertos de vídeo.</strong></p>" +
        '<div class="tabla-scroll"><table><caption>VGA vs DVI vs HDMI</caption>' +
        "<thead><tr><th>Puerto</th><th>Tipo de señal</th><th>Color típico</th><th>Detalles</th></tr></thead><tbody>" +
        "<tr><td><strong>VGA</strong> (Video Graphics Array)</td><td>Analógico</td><td>Azul</td><td>El más antiguo; 15 pines</td></tr>" +
        "<tr><td><strong>DVI</strong> (Digital Visual Interface)</td><td>Digital</td><td>Blanco</td><td>Mejor calidad que VGA en monitores digitales</td></tr>" +
        "<tr><td><strong>HDMI</strong> (High Definition Multimedia Interface)</td><td>Digital</td><td>—</td><td>Vídeo + sonido hasta 5 Gb/s</td></tr>" +
        "</tbody></table></div>" +
        "<h4>2.2.2 Conectores internos</h4>" +
        "<ol>" +
        "<li><strong>Conector ATX</strong>: suministra energía a la placa base. <strong>24 pines</strong> (20 en equipos muy antiguos). Hembra en la placa, macho en la fuente.</li>" +
        "<li><strong>Conector ATX-12V</strong>: alimenta el <strong>procesador</strong>. De <strong>4 u 8 pines</strong> (los de 8 aportan energía extra).</li>" +
        "<li><strong>Puerto SATA</strong>: conecta discos duros, SSD y antiguos lectores ópticos.</li>" +
        "<li><strong>Puerto M.2</strong>: evolución del SATA. Los <strong>NVMe</strong> con puerto M.2 funcionan en modo PCI Express: hasta <strong>6 veces más rápidos</strong> que un SSD SATA.</li>" +
        "<li><strong>Conectores de ventiladores</strong>: <strong>CPU fan</strong> (4 pines con control de velocidad PWM) y <strong>CHA fan</strong> (opcional, controlado por la placa).</li>" +
        "<li><strong>Conectores para USB externos</strong> de la caja.</li>" +
        "<li><strong>Front Panel</strong>: jumpers para el botón de encendido (Power SW), reset (Reset SW), led del disco (HDD LED) y led de encendido (Power LED).</li>" +
        "<li><strong>PC speaker</strong>: solo se usa en el arranque para que el <strong>POST</strong> avise de errores con pitidos.</li>" +
        "<li><strong>Conectores de sonido interno</strong> de la caja.</li>" +
        "</ol>" +
        '<figure class="figura"><img src="assets/img/tema2/fig2-06.jpg" alt="Detalle de una placa base con la pila y el puerto M.2" loading="lazy"><figcaption>Figura 2.6 del libro — Placa con un puerto M.2.</figcaption></figure>'
    },
    {
      titulo: "2.3 Caja o chasis",
      html:
        "<p>Un chasis deficiente que no amortigüe las vibraciones puede dañar mecánicamente discos duros o lectores ópticos.</p>" +
        "<h4>2.3.1 Material</h4>" +
        "<ul>" +
        "<li><strong>Chapa troquelada</strong> (+ plástico en el frontal): muy económica, poca rigidez.</li>" +
        "<li><strong>Aluminio</strong>: más rígido y más ligero, pero más caro. Las cajas de mejor calidad.</li>" +
        "</ul>" +
        "<h4>2.3.2 Formatos de cajas</h4>" +
        '<div class="tabla-scroll"><table><caption>Formatos de cajas</caption>' +
        "<thead><tr><th>Formato</th><th>Cajas</th><th>Características</th></tr></thead><tbody>" +
        "<tr><td><strong>Estándar</strong></td><td>ATX y micro-ATX</td><td>Las más utilizadas; albergan las placas más comunes. Las micro-ATX ocupan menos, pero su fuente (no ATX) es difícil de reemplazar.</td></tr>" +
        "<tr><td><strong>Pequeño</strong></td><td>mini-ITX</td><td>Formato reducido; fuente de poca potencia (~150 W). Algunas se atornillan tras el monitor. Aún menores: pico-ITX (barebones).</td></tr>" +
        "<tr><td><strong>Grande</strong></td><td>E-ATX (Extended ATX)</td><td>Para servidores; mejor ventilación y espacio extra.</td></tr>" +
        "</tbody></table></div>"
    },
    {
      titulo: "2.4 Placa base",
      html:
        "<p>La placa base es un componente fundamental: a veces es mejor invertir en una buena placa base que en un mejor microprocesador, porque el rendimiento del sistema será mayor.</p>" +
        "<h4>2.4.1 Factor de forma</h4>" +
        "<p>El formato de la placa base se llama <strong>factor de forma</strong>. El más usado sigue siendo el <strong>ATX</strong> (Advanced Technology Extended), junto a formatos reducidos como <strong>micro-ATX</strong> y <strong>mini-ITX</strong>. En la placa ATX los componentes se sitúan para que la caja esté más ventilada (fuente encima del micro) y haya menos maraña de cables (almacenamiento cerca de los SATA).</p>" +
        "<p>Formatos ultrarreducidos: <strong>nano-ITX (12×12 cm)</strong> y <strong>pico-ITX (10×7,2 cm)</strong>, que usan memoria SO-DIMM como los portátiles.</p>" +
        "<p><strong>Los smartphones y el SoC.</strong> Un smartphone es un ordenador en miniatura (placa base, batería, sistema de carga). Su procesador es un <strong>SoC</strong> (System on a Chip): además de procesar datos integra bluetooth, entrada/salida, procesamiento gráfico… Siguen la arquitectura <strong>ARM</strong> (diseñada para bajo consumo) frente a la <strong>x86</strong> clásica (prima la potencia). La velocidad de un SoC depende del <strong>número de núcleos</strong> y su velocidad; su potencia gráfica depende de la <strong>GPU</strong>; y su evolución, de la <strong>litografía</strong> o tecnología de fabricación (a menor tamaño, menos gasto energético y más transistores).</p>" +
        "<h4>2.4.2 Socket o zócalo de la CPU</h4>" +
        "<p>El <strong>socket</strong> es el conector donde se coloca el microprocesador en la placa base.</p>" +
        '<div class="tabla-scroll"><table><caption>Socket PGA vs LGA</caption>' +
        "<thead><tr><th>Socket</th><th>Dónde están los pines</th><th>Usado por</th></tr></thead><tbody>" +
        "<tr><td><strong>PGA</strong></td><td>En el microprocesador (el socket tiene los contactos)</td><td>AMD</td></tr>" +
        "<tr><td><strong>LGA</strong></td><td>En el socket (el micro tiene contactos); más delicados</td><td>Intel</td></tr>" +
        "</tbody></table></div>" +
        "<p>🧠 <strong>Zócalo ZIF</strong>: mecanismo con una patilla que encaja el microprocesador <strong>sin necesidad de hacer presión</strong>.</p>"
    },
    {
      titulo: "2.5 BIOS",
      html:
        "<p><strong>BIOS</strong> = Basic Input Output System (sistema básico de entrada y salida). Funciona antes de que el SO tome el control: pone en marcha las operaciones básicas de entrada/salida e <strong>identifica los componentes básicos</strong> (micro, memoria, almacenamiento, chipset…) pasándole su referencia al sistema operativo.</p>" +
        "<p>⚠️ Hay que <strong>evitar modificar parámetros de la BIOS</strong> sin saber lo que se hace; si se cambia algo, hacerlo <strong>de uno en uno</strong> y comprobar. Si el sistema deja de funcionar bien, usar <strong>\"restablecer los parámetros por defecto\"</strong>.</p>" +
        "<p>Fabricantes principales: <strong>AMI</strong> (American Megatrends Incorporated) y <strong>AWARD-Phoenix</strong>.</p>" +
        "<p>La BIOS es un programa almacenado en una <strong>memoria flash EEPROM</strong>, y sus datos se guardan en la <strong>memoria CMOS</strong>: un tipo de RAM de muy bajo consumo alimentada por la pila <strong>CR-2032 de 3,3 V</strong> de la placa base. Cuando la pila se agota aparecen mensajes tipo <em>\"CMOS Checksum Invalid\"</em> y se pierde la hora.</p>" +
        '<figure class="figura"><img src="assets/img/tema2/fig2-09.jpg" alt="Primer plano de la pila CR-2032 de la BIOS en la placa base" loading="lazy"><figcaption>Figura 2.9 del libro — Detalle de la pila de la BIOS.</figcaption></figure>' +
        "<h4>Cambiar la secuencia de arranque (práctica 2.1)</h4>" +
        "<ol>" +
        "<li>Acceder a la BIOS pulsando la tecla indicada en el arranque (\"Supr\", \"F2\"…).</li>" +
        "<li>Modificar la prioridad de arranque (menú \"Boot\", \"Advanced setup\"…), colocando primero el dispositivo deseado (pendrive, lector, red…).</li>" +
        "<li>Guardar los cambios y salir; el equipo arranca desde el dispositivo elegido.</li>" +
        "</ol>" +
        "<h4>2.5.1 Restablecer valores por defecto (práctica 2.2)</h4>" +
        "<ul>" +
        "<li>Opción de menú: \"Load Optimal Settings\", \"Setup defaults\", \"Load Fail-Safe Defaults\"…</li>" +
        "<li>Si la BIOS tiene contraseña: <strong>puentear el jumper Clear CMOS (CLRCMOS)</strong> y encender el equipo.</li>" +
        "<li>O <strong>quitar la pila unos 10 segundos</strong>: sin corriente, la CMOS pierde la información. ¡Nunca con un destornillador metálico, sino con un utensilio de plástico! Y siempre con el cable de corriente desconectado.</li>" +
        "</ul>"
    },
    {
      titulo: "2.6 Chipset",
      html:
        "<p>El <strong>chipset</strong> es un grupo de microprocesadores de la placa base. Actualmente la mayoría de funciones las realiza un <strong>chip principal</strong> con un nombre clave (H110, Z270, B250…) que indica su funcionalidad y tecnología.</p>" +
        "<p>Funciones: <strong>comunicar los elementos del sistema</strong> (SSD, memoria, micro, gráfica…) y dar <strong>conectividad con el exterior</strong> (bluetooth, Ethernet, USB…).</p>" +
        "<p>⚠️ Del chipset dependen el procesador y la memoria que admite la placa, la frecuencia del <strong>FSB</strong> (Front Side Bus), el adaptador gráfico, etc.</p>"
    },
    {
      titulo: "2.7 Memoria RAM",
      html:
        "<p>La RAM está presente en muchos sitios (caché del procesador, buffer de los SSD, memoria de vídeo…), pero normalmente \"memoria RAM\" se refiere a la <strong>memoria principal</strong>. Los circuitos integrados negros soldados a la placa verde forman el <strong>módulo de memoria</strong>. Cada placa base usa un tipo de memoria determinado: consulta el manual antes de ampliar.</p>" +
        "<h4>2.7.1 Parámetros fundamentales</h4>" +
        "<ul>" +
        "<li><strong>Velocidad de acceso</strong>: en nanosegundos; cuanto menor, mejor. ⚠️ Con memorias de diferentes velocidades, el sistema va a la velocidad de la <strong>más lenta</strong>.</li>" +
        "<li><strong>Velocidad de reloj</strong>: p. ej., DDR4 3200 PC4-25600 → 3200 MHz, DDR4 (PC4) y ancho de banda teórico 25600 (= 3200 × 8).</li>" +
        "<li><strong>Latencias</strong>: retardos al acceder. El fabricante suele dar el <strong>CAS o CL</strong>: un CL 9 significa esperar 9 ciclos de reloj hasta seleccionar la columna. ⚠️ Una memoria rápida con latencia alta pierde lo que gana.</li>" +
        "<li><strong>Dual/triple/quad channel</strong>: lectura y escritura simultánea de varios módulos; aumenta el ancho de banda. Usar memorias de la <strong>misma marca y modelo</strong>, y colocarlas en los zócalos del <strong>mismo color</strong>.</li>" +
        "<li><strong>Voltaje</strong>: DDR2 = 1,8 V; DDR3 = 1,5 V (30 % menos consumo); DDR4 = solo 1,2 V.</li>" +
        "<li><strong>ECC</strong> (Error Checking and Correction): memorias con <strong>paridad</strong> que detectan y corrigen fallos; típicas de servidores.</li>" +
        "</ul>" +
        "<h4>2.7.2 Ventajas de DDR4 frente a DDR3</h4>" +
        '<div class="tabla-scroll"><table><caption>DDR4 vs DDR3</caption>' +
        "<thead><tr><th>Aspecto</th><th>DDR3</th><th>DDR4</th></tr></thead><tbody>" +
        "<tr><td>Capacidad</td><td>Menor</td><td>Más elevada</td></tr>" +
        "<tr><td>Consumo</td><td>1,5 V</td><td>1,2 V (hasta −40 %)</td></tr>" +
        "<tr><td>Ancho de banda</td><td>—</td><td>Hasta +50 % de rendimiento</td></tr>" +
        "<tr><td>Integridad</td><td>—</td><td>Incorpora CRC (redundancia cíclica)</td></tr>" +
        "<tr><td>Pines</td><td>240</td><td>288</td></tr>" +
        "<tr><td>Física</td><td>—</td><td>Muesca en otro lugar, mayor grosor, borde curvado (más fácil de insertar)</td></tr>" +
        "</tbody></table></div>" +
        "<p>⚠️ DDR, DDR2, DDR3 y DDR4 <strong>no son compatibles entre sí</strong>: difieren en pines y la muesca está en sitios distintos para impedir insertar la memoria en un slot erróneo.</p>" +
        "<h4>2.7.3 Memorias SO-DIMM (Small Outline DIMM)</h4>" +
        "<p>Formato menor para dispositivos compactos: <strong>portátiles, barebones</strong>, placas mini-ITX e incluso impresoras de gama alta. Tienen menos contactos pero mantienen las características de las DIMM normales.</p>" +
        '<figure class="figura"><img src="assets/img/tema2/fig2-12.jpg" alt="Dos módulos de memoria RAM con disipador" loading="lazy"><figcaption>Figura 2.12 del libro — Módulos de memoria.</figcaption></figure>'
    },
    {
      titulo: "2.8 Microprocesador",
      html:
        "<p>El microprocesador es el <strong>\"cerebro\"</strong> del sistema; también se llama CPU o UCP. (Como popularmente se llama \"CPU\" a la caja del equipo, mejor decir \"microprocesador\" para evitar confusiones.) El objetivo actual: máximo rendimiento con el mayor número de núcleos, la mayor frecuencia y el mínimo consumo.</p>" +
        "<h4>2.8.1 Disipación del calor</h4>" +
        "<p>El calor es el eterno enemigo: los millones de transistores disipan calor al cambiar de estado. Se usan disipadores con ventiladores, combinados a veces con <strong>heat pipes</strong> (tubos sellados con líquido refrigerante que se evapora cerca del micro y se condensa en otra zona) y <strong>refrigeraciones termoeléctricas</strong> (efecto <strong>Peltier</strong>). Cuanto mejor es la disipación, más potencia se puede aplicar al micro.</p>" +
        "<h4>2.8.2 Parámetros de un microprocesador</h4>" +
        "<ul>" +
        "<li><strong>Velocidad</strong>: en múltiplos del hercio: KHz = 10³ Hz, MHz = 10⁶ Hz, GHz = 10⁹ Hz. La velocidad por sí sola no lo es todo: influyen la tecnología y los núcleos.</li>" +
        "<li><strong>Velocidad del bus</strong>: el <strong>FSB</strong> (Front Side Bus) conecta el micro con la memoria principal y el chipset. En AMD se llama también <strong>Hypertransport (HTT)</strong> o <strong>Lightning Data Transport (LDT)</strong>. Velocidad del micro = FSB × <strong>factor multiplicador</strong>.</li>" +
        "<li><strong>Memoria caché</strong>: <strong>L1</strong> a máxima velocidad, integrada en el núcleo; <strong>L2</strong> más lenta, conectada por el <strong>backside bus</strong>; <strong>L3</strong> más lenta que L2 pero de mayor capacidad.</li>" +
        "<li><strong>Tecnología de fabricación</strong>: en nanómetros (10⁻⁹ m); tamaño aproximado de las puertas lógicas.</li>" +
        "<li><strong>VCore</strong>: voltaje del núcleo. Nunca se modifica salvo en overclocking.</li>" +
        "<li><strong>Nombre clave del núcleo</strong>: no confundir el nombre comercial (i9, i7, i5) con la microarquitectura (skylake, sandy bridge, ivy bridge…).</li>" +
        "<li><strong>Núcleos</strong>: aumentar núcleos es más rentable que aumentar solo la velocidad; mejora la multitarea.</li>" +
        "<li><strong>Hyperthreading</strong>: capacidad de un núcleo de realizar dos tareas simultáneas. Los Intel Core i suelen tenerlo.</li>" +
        "<li><strong>Overclocking</strong>: aumentar la velocidad por encima de la nominal (micros Intel terminados en <strong>K</strong>). Más potencia, pero más consumo y calor, y se <strong>pierde la garantía</strong>.</li>" +
        "</ul>" +
        "<h4>2.8.3 Cómo se fabrican</h4>" +
        "<p>En <strong>salas libres de polvo</strong> (una mota arruinaría el micro), con filtros y trajes especiales. Se parte de una <strong>oblea de silicio</strong> sobre la que se depositan capas de materiales semiconductores, conductores y aislantes.</p>"
    },
    {
      titulo: "2.9 Tarjeta de vídeo o tarjeta gráfica",
      html:
        "<p>Responsable de enviar al monitor la información a visualizar. Los micros actuales ya integran un procesador gráfico en el encapsulado, por lo que no hace falta tarjeta dedicada <strong>salvo para juegos o diseño gráfico</strong>.</p>" +
        "<h4>2.9.1 GPU</h4>" +
        "<p>La <strong>GPU</strong> (Graphics Processing Unit) es el microprocesador de las tarjetas de vídeo. Su función es <strong>aligerar a la CPU de la carga gráfica</strong>. Está diseñada para gran cantidad de cálculos eficientes y es experta en <strong>operaciones en coma flotante</strong> (la base de los gráficos 3D). No puede reemplazar a la CPU: están diseñadas para propósitos diferentes.</p>" +
        "<p>Técnicas de realismo: <strong>antialiasing</strong> (suavizado de bordes) y <strong>anisotropic filtering</strong> (suavizado de texturas).</p>" +
        '<div class="tabla-scroll"><table><caption>Características de las GPU (cuadro 2.1 del libro)</caption>' +
        "<thead><tr><th>Característica</th><th>Descripción</th></tr></thead><tbody>" +
        "<tr><td>Velocidad del núcleo</td><td>En MHz, como el microprocesador</td></tr>" +
        "<tr><td>Ancho del bus</td><td>En bits; más ancho = más velocidad de intercambio</td></tr>" +
        "<tr><td>Velocidad del shader</td><td>Instrucciones que definen materiales, color, luces y sombras, efectos…</td></tr>" +
        "<tr><td>Sistema de ventilación</td><td>Disipadores y ventiladores; en gama alta, refrigeración termoeléctrica</td></tr>" +
        "<tr><td>Velocidad de relleno de textura</td><td>En texels/segundo; lo rápido que muestra una imagen</td></tr>" +
        "<tr><td>Librerías gráficas</td><td>Compatibilidad con Microsoft DirectX y OpenGL</td></tr>" +
        "<tr><td>Resolución máxima</td><td>Vertical y horizontal; a mayor resolución, mejor definición</td></tr>" +
        "<tr><td>SLI / Crossfire</td><td>SLI (NVidia) y Crossfire (ATI): varias gráficas en paralelo</td></tr>" +
        "<tr><td>Sufijos y numeraciones</td><td>GeForce 1060 = serie 10; 1080 &gt; 1060 &gt; 1050; GTX más potente que GT</td></tr>" +
        "</tbody></table></div>" +
        "<h4>Puerto PCI Express</h4>" +
        "<p>Interconecta la tarjeta de vídeo con la placa base. Formado por <strong>enlaces serie bidireccionales punto a punto</strong>: el slot <strong>X1</strong> tiene 1 enlace (tarjetas de red o sonido) y el <strong>X16</strong> tiene 16 enlaces (tarjeta de vídeo, el más rápido).</p>"
    },
    {
      titulo: "2.10 Tarjetas de expansión",
      html:
        "<p>Amplían las capacidades del equipo; suelen conectarse a los puertos PCI Express. Las más utilizadas:</p>" +
        "<ol>" +
        "<li><strong>Tarjeta de red</strong>: wifi o Ethernet. Las wifi son comunes porque las placas normales no traen antena.</li>" +
        "<li><strong>Tarjeta de sonido</strong>: para uso profesional del audio.</li>" +
        "<li><strong>Tarjeta gráfica</strong>: para uso intensivo de vídeo.</li>" +
        "<li><strong>Tarjeta capturadora/sintonizadora de TV</strong>: ver y grabar televisión, memorizar canales…</li>" +
        "<li><strong>Tarjeta RAID</strong>: en workstations y servidores pequeños, para discos redundantes y seguridad.</li>" +
        "<li><strong>Tarjetas de expansión USB</strong>: puertos USB adicionales de alta velocidad.</li>" +
        "</ol>"
    }
  ],

  glosario: [
    { termino: "Bus", definicion: "Canal mediante el cual se transmiten datos entre distintos componentes dentro de un equipo informático." },
    { termino: "Chipset", definicion: "Grupo de chips. El principal circuito integrado de una placa base; comunica los elementos del sistema." },
    { termino: "CRC", definicion: "Comprobación de Redundancia Cíclica: sistema para detectar errores en la información." },
    { termino: "Efecto Peltier", definicion: "Efecto termoeléctrico: aplicando un voltaje a un material se puede enfriar un dispositivo más rápido. Se usa en tarjetas de vídeo." },
    { termino: "Gbps", definicion: "Gigabit por segundo. Múltiplo de la velocidad de transmisión; la unidad es el baudio o bit por segundo." },
    { termino: "Jumper", definicion: "Se utiliza para conectar (puentear) dos patillas de un dispositivo electrónico." },
    { termino: "DirectX / OpenGL", definicion: "Librerías (software) usadas para programación de videojuegos o vídeo; aceleran el procesamiento gráfico." },
    { termino: "NVMe", definicion: "Non Volatile Memory Express: especificación de unidad SSD conectada a través de un bus PCI Express (PCIe)." },
    { termino: "Paridad", definicion: "Información extra usada en transmisión o almacenamiento para detectar o corregir errores en los datos." },
    { termino: "PCI Express", definicion: "Estándar de comunicación de las placas base. Destaca por su velocidad; lo usan dispositivos rápidos como las tarjetas de vídeo." },
    { termino: "Factor de forma", definicion: "Formato o tamaño de la placa base: ATX, micro-ATX, mini-ITX…" },
    { termino: "SoC", definicion: "System on a Chip: procesador de smartphones, tabletas y wearables que integra gráficos, E/S, bluetooth, etc." },
    { termino: "Socket (zócalo)", definicion: "Conector de la placa base donde se coloca el microprocesador. Tipos: PGA (AMD) y LGA (Intel)." },
    { termino: "ZIF", definicion: "Zócalo con un mecanismo de patilla que fija el microprocesador sin necesidad de hacer presión." },
    { termino: "CMOS", definicion: "Memoria RAM de muy bajo consumo donde se almacenan los datos de la BIOS; alimentada por la pila CR-2032 de 3,3 V." },
    { termino: "FSB", definicion: "Front Side Bus: bus que conecta el microprocesador con la memoria principal y el chipset. En AMD: Hypertransport (HTT) o LDT." },
    { termino: "Factor multiplicador", definicion: "Número por el que se multiplica la velocidad del FSB para obtener la velocidad del microprocesador." },
    { termino: "Latencia CAS (CL)", definicion: "Ciclos de reloj que espera el sistema hasta que la memoria selecciona la columna correspondiente." },
    { termino: "ECC", definicion: "Error Checking and Correction: detección y corrección de errores en memorias (usa paridad); típico de servidores." },
    { termino: "Heat pipe", definicion: "Tubo sellado con líquido refrigerante que se evapora cerca del micro y se condensa al enfriarse en otra zona del disipador." },
    { termino: "Hyperthreading", definicion: "Capacidad de un microprocesador o núcleo de realizar varias tareas de forma concurrente (dos tareas por núcleo)." },
    { termino: "Overclocking", definicion: "Aumentar la velocidad del microprocesador por encima de la nominal. Da potencia extra pero más consumo y calor, y anula la garantía." },
    { termino: "GPU", definicion: "Graphics Processing Unit: microprocesador de las tarjetas de vídeo; aligera a la CPU de la carga gráfica." },
    { termino: "Antialiasing", definicion: "Técnica de suavizado de bordes que da aspecto más realista a la imagen." },
    { termino: "SLI / Crossfire", definicion: "Sistemas de NVidia (SLI) y ATI (Crossfire) para usar más de una tarjeta gráfica en paralelo." },
    { termino: "SO-DIMM", definicion: "Small Outline DIMM: módulos de memoria de formato reducido para portátiles y equipos compactos." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Conectores externos e internos (2.2)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Cuántas veces es el USB 3.0 más rápido que su antecesor, el USB 2.0?",
          opciones: { A: "5.", B: "10.", C: "4.", D: "2." },
          correcta: ["B"],
          explicacion: "El USB 3.0 es diez veces más rápido que el USB 2.0, que va a 480 Mbps. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "¿A qué velocidad funciona el USB 2.0?",
          opciones: { A: "480 Mbps.", B: "5 Gbps.", C: "10 Gbps.", D: "480 Gbps." },
          correcta: ["A"],
          explicacion: "El USB 2.0 va a una velocidad de 480 Mbps."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significa que el USB sea \"plug and play\"?",
          opciones: {
            A: "Que hay que instalar drivers manualmente antes de usarlo.",
            B: "Que los dispositivos se conectan y ya pueden utilizarse.",
            C: "Que solo sirve para videojuegos.",
            D: "Que requiere reiniciar el equipo al conectarlo."
          },
          correcta: ["B"],
          explicacion: "Plug and play significa que el dispositivo se conecta y ya puede utilizarse, sin más pasos."
        },
        {
          tipo: "unica",
          pregunta: "Si conectas un dispositivo USB 3.0 a un puerto USB 2.0…",
          opciones: {
            A: "No funcionará.",
            B: "Funcionará correctamente, pero no a la máxima velocidad.",
            C: "Se dañará el dispositivo.",
            D: "Funcionará a la velocidad del USB 3.1."
          },
          correcta: ["B"],
          explicacion: "Los USB son retrocompatibles: funcionará correctamente pero sin alcanzar la velocidad máxima del 3.0."
        },
        {
          tipo: "unica",
          pregunta: "La especificación USB 3.1 SuperSpeed ofrece una velocidad de…",
          opciones: { A: "5 Gbps.", B: "480 Mbps.", C: "10 Gbps.", D: "20 Gbps." },
          correcta: ["C"],
          explicacion: "El USB 3.1 o SuperSpeed USB 10 Gbps ofrece 10 Gbps: el doble que el USB 3.0, siendo totalmente retrocompatible."
        },
        {
          tipo: "unica",
          pregunta: "El puerto Thunderbolt tiene una velocidad máxima (por canal) de:",
          opciones: { A: "5 Gb/s.", B: "20 Gb/s.", C: "10 Gb/s.", D: "4 Gb/s." },
          correcta: ["C"],
          explicacion: "Thunderbolt trabaja con dos canales simultáneos de 10 Gb/s cada uno. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las afirmaciones correctas sobre el puerto Thunderbolt:",
          opciones: {
            A: "Lo tienen los ordenadores Apple.",
            B: "Fue inventado por Intel.",
            C: "Permite conectar hasta seis dispositivos en cadena.",
            D: "Es más lento que el USB 2.0."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Thunderbolt es el puerto de los Apple, inventado por Intel, y permite hasta 6 dispositivos en cadena. Es 4 veces más rápido que el USB 3.0."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué es tan rápido el puerto Thunderbolt?",
          opciones: {
            A: "Porque tiene una conexión óptica y transmite por pulsos de luz.",
            B: "Porque usa cables más gruesos.",
            C: "Porque comprime los datos.",
            D: "Porque solo transmite audio."
          },
          correcta: ["A"],
          explicacion: "Su alta velocidad radica en su conexión óptica: al transmitir por pulsos de luz en vez de pulsos eléctricos, la velocidad es mayor."
        },
        {
          tipo: "unica",
          pregunta: "El conector de sonido de la entrada de línea es de color:",
          opciones: { A: "Verde.", B: "Rosa.", C: "Negro.", D: "Azul." },
          correcta: ["D"],
          explicacion: "Azul = entrada de línea (no amplificada); verde = salida para altavoces; rosa = micrófono. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "En un sistema de sonido 5.1, el conector naranja corresponde a…",
          opciones: {
            A: "Los altavoces delanteros.",
            B: "Los altavoces traseros.",
            C: "El subwoofer (subgrave) o altavoz central.",
            D: "El micrófono."
          },
          correcta: ["C"],
          explicacion: "En 5.1: gris = delanteros, negro = traseros, naranja = subwoofer o altavoz central."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de estos puertos de vídeo es analógico?",
          opciones: { A: "HDMI.", B: "DVI.", C: "VGA.", D: "Thunderbolt." },
          correcta: ["C"],
          explicacion: "El VGA es el más antiguo, tiene 15 pines, normalmente azul, y es analógico. DVI y HDMI son digitales."
        },
        {
          tipo: "unica",
          pregunta: "DVI es el acrónimo de:",
          opciones: {
            A: "Digital Video Interface.",
            B: "Digital Visual Interconnection.",
            C: "Digital Visual Interface.",
            D: "Digital Video Interconnection."
          },
          correcta: ["C"],
          explicacion: "DVI = Digital Visual Interface. Está diseñado para mejor calidad en monitores digitales. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El conector HDMI puede transmitir vídeo y sonido a una velocidad de hasta:",
          opciones: { A: "15 Gb/s.", B: "10 Gb/s.", C: "20 Gb/s.", D: "5 Gb/s." },
          correcta: ["D"],
          explicacion: "El HDMI (High Definition Multimedia Interface) transmite vídeo y sonido hasta 5 Gb/s. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "El conector DVI generalmente es de color:",
          opciones: { A: "Blanco.", B: "Azul.", C: "Verde.", D: "Negro." },
          correcta: ["A"],
          explicacion: "El DVI normalmente es blanco; el VGA es azul. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántos pines tiene el conector ATX que alimenta la placa base?",
          opciones: {
            A: "24 pines (20 en equipos muy antiguos).",
            B: "8 pines.",
            C: "12 pines.",
            D: "4 pines."
          },
          correcta: ["A"],
          explicacion: "El conector ATX tiene 24 pines, aunque en equipos muy antiguos tenía solo 20. La placa tiene el conector hembra y la fuente el macho."
        },
        {
          tipo: "unica",
          pregunta: "El conector ATX-12V tiene:",
          opciones: { A: "Entre 4 y 8 pines.", B: "Solo 4 pines.", C: "24 pines.", D: "12 pines." },
          correcta: ["A"],
          explicacion: "El ATX-12V, que alimenta al procesador, existe en versiones de 4 y de 8 pines (los de 8 aportan energía extra). Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la función del conector ATX-12V?",
          opciones: {
            A: "Suministrar energía al procesador.",
            B: "Conectar los discos duros.",
            C: "Conectar el ventilador de la caja.",
            D: "Alimentar el monitor."
          },
          correcta: ["A"],
          explicacion: "El ATX-12V suministra energía al procesador; su clavija hembra está en la placa, cercana al procesador."
        },
        {
          tipo: "unica",
          pregunta: "Un NVMe con puerto M.2 puede ser hasta… más rápido que una unidad SSD SATA.",
          opciones: { A: "2 veces.", B: "4 veces.", C: "6 veces.", D: "10 veces." },
          correcta: ["C"],
          explicacion: "El puerto M.2 es la evolución de los SATA: los NVMe funcionan en modo PCI Express y pueden ser hasta seis veces más rápidos que un SSD SATA."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué conectan los jumpers del Front Panel (panel frontal)?",
          opciones: {
            A: "El cable de encendido (Power SW).",
            B: "El botón de reset (Reset SW).",
            C: "El led de actividad del disco duro (HDD LED).",
            D: "El ventilador del procesador."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El Front Panel conecta Power SW, Reset SW, HDD LED y Power LED. El ventilador del procesador va al conector CPU fan."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué se utiliza el PC speaker conectado a la placa base?",
          opciones: {
            A: "Para escuchar música con calidad.",
            B: "Solo en el arranque, para que el POST avise de la ausencia o presencia de errores.",
            C: "Para amplificar el micrófono.",
            D: "Para el sonido envolvente 5.1."
          },
          correcta: ["B"],
          explicacion: "El speaker solo se utiliza en el arranque para que el POST avise mediante pitidos de si hay o no errores."
        }
      ]
    },
    {
      nombre: "Paquete 2 · Caja, placa base, BIOS y chipset (2.3-2.6)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿De qué material están hechas las cajas de mejor calidad?",
          opciones: { A: "Chapa troquelada.", B: "Plástico.", C: "Aluminio.", D: "Madera tratada." },
          correcta: ["C"],
          explicacion: "Las cajas de mejor calidad son de aluminio: más rígido y más liviano que la chapa troquelada, aunque más caro."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué problema puede causar un chasis deficiente que no amortigüe las vibraciones?",
          opciones: {
            A: "Daños mecánicos a discos duros o lectores ópticos.",
            B: "Pérdida de la configuración de la BIOS.",
            C: "Borrado de la memoria RAM.",
            D: "Sobrecalentamiento del monitor."
          },
          correcta: ["A"],
          explicacion: "Un chasis que no amortigüe vibraciones puede provocar daños mecánicos a componentes como discos duros o lectores ópticos."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué formato de caja se utiliza en servidores o cuando se necesita mucho espacio?",
          opciones: { A: "mini-ITX.", B: "E-ATX (Extended ATX).", C: "pico-ITX.", D: "micro-ATX." },
          correcta: ["B"],
          explicacion: "Las cajas E-ATX se usan en servidores; ofrecen mejor ventilación y espacio extra para colocar los componentes."
        },
        {
          tipo: "unica",
          pregunta: "Las cajas mini-ITX suelen tener una fuente de alimentación de unos…",
          opciones: { A: "500 vatios.", B: "150 vatios.", C: "1000 vatios.", D: "50 vatios." },
          correcta: ["B"],
          explicacion: "Las cajas mini-ITX suelen llevar una fuente de poca potencia, alrededor de 150 W. Algunas pueden atornillarse detrás del monitor."
        },
        {
          tipo: "unica",
          pregunta: "ATX es el acrónimo de:",
          opciones: {
            A: "Advanced Technology Extended.",
            B: "Advanced Transport Extension.",
            C: "Advanced Technology Extension.",
            D: "Advanced Transport Extended."
          },
          correcta: ["A"],
          explicacion: "ATX = Advanced Technology Extended, el factor de forma más utilizado. Pregunta de autoevaluación del libro."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se denomina el formato de la placa base?",
          opciones: { A: "Factor multiplicador.", B: "Factor de forma.", C: "Chipset.", D: "Front Side Bus." },
          correcta: ["B"],
          explicacion: "El formato de la placa base se denomina factor de forma: ATX, micro-ATX, mini-ITX…"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué medidas tiene el formato pico-ITX?",
          opciones: { A: "12 × 12 cm.", B: "10 × 7,2 cm.", C: "24 × 24 cm.", D: "30 × 24 cm." },
          correcta: ["B"],
          explicacion: "El pico-ITX mide 10 × 7,2 cm (el nano-ITX, 12 × 12 cm). Por su espacio reducido usan memoria SO-DIMM como los portátiles."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un SoC?",
          opciones: {
            A: "Un System on a Chip: microprocesador que integra funciones como gráficos, E/S o bluetooth.",
            B: "Un tipo de caja para servidores.",
            C: "Una memoria de solo lectura.",
            D: "Un conector de la fuente de alimentación."
          },
          correcta: ["A"],
          explicacion: "Los SoC son los procesadores de tabletas, smartphones y wearables: el mismo chip hace funciones que en una arquitectura clásica harían otros componentes."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué arquitectura siguen los procesadores de los smartphones y tabletas?",
          opciones: { A: "x86.", B: "ARM.", C: "RISC-Z.", D: "Itanium." },
          correcta: ["B"],
          explicacion: "Los SoC siguen la arquitectura ARM, diseñada en principio para dispositivos de poca capacidad de procesamiento y bajo consumo, frente a la x86 que prima la potencia."
        },
        {
          tipo: "unica",
          pregunta: "En el socket PGA, los pines están…",
          opciones: {
            A: "En el socket de la placa base.",
            B: "En el microprocesador.",
            C: "Repartidos entre ambos.",
            D: "No tiene pines."
          },
          correcta: ["B"],
          explicacion: "En el PGA las pastillas o pines están en el microprocesador y la matriz de contactos en el socket. Lo usan los procesadores AMD."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tipo de socket utilizan los microprocesadores Intel?",
          opciones: { A: "PGA.", B: "LGA.", C: "ZIF-AMD.", D: "Socket 7." },
          correcta: ["B"],
          explicacion: "Intel usa sockets LGA: los pines están en el socket (más delicados) y el micro tiene los contactos. AMD usa PGA."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un zócalo ZIF?",
          opciones: {
            A: "Un zócalo que no necesita presión para fijar el microprocesador, gracias a una patilla.",
            B: "Un zócalo exclusivo para memorias RAM.",
            C: "Un zócalo de tarjetas gráficas.",
            D: "Un zócalo que requiere soldadura."
          },
          correcta: ["A"],
          explicacion: "Los zócalos ZIF tienen un mecanismo de patilla que encaja el micro en la placa sin tener que hacer presión sobre él."
        },
        {
          tipo: "unica",
          pregunta: "BIOS es el acrónimo de:",
          opciones: {
            A: "Board Input Output System.",
            B: "Board Input Output Station.",
            C: "Basic Input Output System.",
            D: "Basic Input Output Station."
          },
          correcta: ["C"],
          explicacion: "BIOS = Basic Input Output System (sistema básico de entrada y salida). Pregunta de autoevaluación del libro."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son funciones de la BIOS?",
          opciones: {
            A: "Poner en marcha las operaciones básicas de entrada/salida.",
            B: "Identificar los componentes básicos del equipo y pasar su referencia al SO.",
            C: "Permitir cambiar la secuencia de arranque.",
            D: "Ejecutar las aplicaciones de usuario."
          },
          correcta: ["A", "B", "C"],
          explicacion: "La BIOS realiza funciones antes de que el SO tome el control: E/S básica, identificación de componentes y configuración (p. ej., la secuencia de arranque). No ejecuta aplicaciones de usuario."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son dos de los fabricantes de BIOS con más presencia en el mercado?",
          opciones: {
            A: "AMI y AWARD-Phoenix.",
            B: "Intel y AMD.",
            C: "NVidia y ATI.",
            D: "Asus y Gigabyte."
          },
          correcta: ["A"],
          explicacion: "AMI (American Megatrends Incorporated) y AWARD-Phoenix son dos de los fabricantes con más BIOS en el mercado."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué pila alimenta la memoria CMOS de la BIOS?",
          opciones: {
            A: "La CR-2032 de 3,3 voltios.",
            B: "Una pila AAA de 1,5 voltios.",
            C: "Una batería de litio de 12 voltios.",
            D: "No lleva pila."
          },
          correcta: ["A"],
          explicacion: "La pila modelo CR-2032 de 3,3 V alojada en la placa base alimenta la CMOS. Cuando se agota aparecen mensajes como \"CMOS Checksum Invalid\" y se pierde la hora."
        },
        {
          tipo: "unica",
          pregunta: "Si la BIOS tiene contraseña y no se pueden cargar los valores por defecto desde el menú, ¿qué se puede hacer?",
          opciones: {
            A: "Puentear el jumper Clear CMOS o quitar la pila unos 10 segundos.",
            B: "Formatear el disco duro.",
            C: "Cambiar la fuente de alimentación.",
            D: "Desconectar la memoria RAM."
          },
          correcta: ["A"],
          explicacion: "Las dos opciones del libro: puentear el jumper CLRCMOS y encender el equipo, o quitar la pila ~10 segundos para que la CMOS pierda la información."
        },
        {
          tipo: "unica",
          pregunta: "¿Con qué hay que retirar la pila de la BIOS?",
          opciones: {
            A: "Con un destornillador metálico.",
            B: "Con unas pinzas de acero.",
            C: "Con la capucha de un bolígrafo o un utensilio de plástico.",
            D: "Con un imán."
          },
          correcta: ["C"],
          explicacion: "Nunca con un objeto metálico: hay que usar un utensilio de plástico. Y siempre con el cable de corriente desconectado."
        },
        {
          tipo: "unica",
          pregunta: "El chipset de una placa base tiene la función de…",
          opciones: {
            A: "Comunicar los elementos del sistema y realizar la conectividad con el exterior.",
            B: "Almacenar el sistema operativo.",
            C: "Refrigerar el microprocesador.",
            D: "Convertir corriente alterna en continua."
          },
          correcta: ["A"],
          explicacion: "El chipset comunica los elementos (SSD, memoria, micro, gráfica…) y da conectividad exterior (bluetooth, Ethernet, USB…)."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué cosas dependen del tipo de chipset de la placa base?",
          opciones: {
            A: "El procesador que admite la placa.",
            B: "La memoria que admite la placa.",
            C: "La frecuencia del FSB (Front Side Bus).",
            D: "El color de la caja."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Del chipset dependen el procesador o memoria que admite la placa, la frecuencia del FSB, el adaptador gráfico, etc."
        }
      ]
    },
    {
      nombre: "Paquete 3 · RAM, microprocesador y gráfica (2.7-2.10)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Si en un sistema se colocan memorias de diferentes velocidades…",
          opciones: {
            A: "El sistema irá a la velocidad de la memoria más lenta.",
            B: "El sistema irá a la velocidad de la memoria más rápida.",
            C: "El sistema hará una media de las velocidades.",
            D: "El sistema no arrancará."
          },
          correcta: ["A"],
          explicacion: "Es un concepto fundamental del libro: con memorias de diferentes velocidades, el sistema va a la velocidad de la más lenta."
        },
        {
          tipo: "unica",
          pregunta: "Una memoria DDR4 3200 PC4-25600 tiene un ancho de banda teórico de 25600 porque…",
          opciones: {
            A: "3200 × 8 = 25600.",
            B: "3200 × 4 = 25600.",
            C: "Es un número aleatorio del fabricante.",
            D: "25600 ÷ 2 = velocidad real."
          },
          correcta: ["A"],
          explicacion: "El ancho de banda teórico se obtiene multiplicando la velocidad de reloj por ocho: 3200 × 8 = 25600."
        },
        {
          tipo: "unica",
          pregunta: "Si el fabricante dice que una memoria tiene CL 9, significa que…",
          opciones: {
            A: "El sistema espera 9 ciclos de reloj hasta que la memoria selecciona la columna.",
            B: "La memoria tiene 9 GB de capacidad.",
            C: "La memoria funciona a 9 MHz.",
            D: "La memoria tiene 9 chips."
          },
          correcta: ["A"],
          explicacion: "CL = CAS Latency: el sistema espera nueve ciclos de reloj hasta que la memoria selecciona la columna correspondiente."
        },
        {
          tipo: "unica",
          pregunta: "Para hacer dual channel se recomienda…",
          opciones: {
            A: "Utilizar memorias de la misma marca y modelo, en los zócalos del mismo color.",
            B: "Mezclar memorias de diferentes velocidades.",
            C: "Usar un solo módulo de memoria.",
            D: "Colocar las memorias en zócalos de distinto color."
          },
          correcta: ["A"],
          explicacion: "Se recomiendan memorias de la misma marca y modelo; cuando hay más de dos zócalos, las memorias a parear van en los zócalos del mismo color."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué voltaje necesitan las memorias DDR4?",
          opciones: { A: "1,8 V.", B: "1,5 V.", C: "1,2 V.", D: "3,3 V." },
          correcta: ["C"],
          explicacion: "DDR2 = 1,8 V; DDR3 = 1,5 V; DDR4 = solo 1,2 V. El voltaje ha ido reduciéndose en cada generación."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué son las memorias con ECC?",
          opciones: {
            A: "Memorias que, gracias a la paridad, detectan y corrigen fallos; normalmente en servidores.",
            B: "Memorias de bajo consumo para portátiles.",
            C: "Memorias sin latencia.",
            D: "Memorias de vídeo."
          },
          correcta: ["A"],
          explicacion: "ECC = Error Checking and Correction: usan paridad para detectar y corregir fallos en la información de la RAM; se instalan normalmente en servidores."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son ventajas de la memoria DDR4 frente a la DDR3?",
          opciones: {
            A: "Menor consumo de energía, de hasta un 40 %.",
            B: "Aumento del ancho de banda y rendimiento de hasta un 50 %.",
            C: "Incorpora CRC para verificar anomalías en la información.",
            D: "Tiene menos pines que la DDR3."
          },
          correcta: ["A", "B", "C"],
          explicacion: "DDR4 consume hasta un 40 % menos, rinde hasta un 50 % más e incorpora CRC. Tiene MÁS pines: 288 frente a los 240 de DDR3."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántos pines tiene un módulo DDR4 y cuántos uno DDR3?",
          opciones: {
            A: "288 y 240, respectivamente.",
            B: "240 y 288, respectivamente.",
            C: "200 y 100, respectivamente.",
            D: "Los mismos: 240."
          },
          correcta: ["A"],
          explicacion: "Las DDR4 tienen 288 pines frente a los 240 de las DDR3."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué no se puede insertar una memoria DDR3 en un slot DDR4?",
          opciones: {
            A: "Porque difieren en número de pines y la muesca está en un sitio diferente.",
            B: "Sí se puede, son compatibles.",
            C: "Porque la DDR3 es más rápida.",
            D: "Porque el voltaje de la DDR3 es menor."
          },
          correcta: ["A"],
          explicacion: "DDR, DDR2, DDR3 y DDR4 no son compatibles entre sí: distinto número de pines y muesca en lugar diferente para impedir errores."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se utilizan las memorias SO-DIMM?",
          opciones: {
            A: "En portátiles, barebones y otros dispositivos compactos.",
            B: "Solo en servidores.",
            C: "En tarjetas gráficas.",
            D: "En fuentes de alimentación."
          },
          correcta: ["A"],
          explicacion: "Las SO-DIMM (Small Outline DIMM), de menor formato, se usan en portátiles, barebones, placas mini-ITX e incluso impresoras de gama alta."
        },
        {
          tipo: "unica",
          pregunta: "Un gigahercio (GHz) equivale a…",
          opciones: { A: "10³ hercios.", B: "10⁶ hercios.", C: "10⁹ hercios.", D: "10¹² hercios." },
          correcta: ["C"],
          explicacion: "KHz = 10³ Hz, MHz = 10⁶ Hz y GHz = 10⁹ Hz."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué conecta el FSB (Front Side Bus)?",
          opciones: {
            A: "El microprocesador con la memoria principal y el chipset.",
            B: "El monitor con la tarjeta gráfica.",
            C: "La fuente con la placa base.",
            D: "Los discos duros con el lector óptico."
          },
          correcta: ["A"],
          explicacion: "El FSB conecta el micro con la memoria principal y el chipset. En AMD se llama también Hypertransport (HTT) o Lightning Data Transport (LDT)."
        },
        {
          tipo: "unica",
          pregunta: "La velocidad del microprocesador es igual a…",
          opciones: {
            A: "La velocidad del FSB multiplicada por el factor multiplicador.",
            B: "La velocidad de la RAM por dos.",
            C: "La suma de las velocidades de las cachés.",
            D: "La velocidad del chipset."
          },
          correcta: ["A"],
          explicacion: "El micro funciona sincronizado con el FSB: su velocidad es la del FSB multiplicada por el factor multiplicador."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué caché funciona a la máxima velocidad y se integra en el núcleo del procesador?",
          opciones: { A: "L1.", B: "L2.", C: "L3.", D: "L4." },
          correcta: ["A"],
          explicacion: "La caché L1 funciona a máxima velocidad y está integrada en el núcleo. La L2 va por el backside bus y la L3 es más lenta pero de mayor capacidad."
        },
        {
          tipo: "unica",
          pregunta: "La caché L3, comparada con la L2, es…",
          opciones: {
            A: "Más lenta, pero de mayor capacidad.",
            B: "Más rápida y de menor capacidad.",
            C: "Igual en todo.",
            D: "Más rápida y de mayor capacidad."
          },
          correcta: ["A"],
          explicacion: "La L3 es más lenta que la L2, pero tiene mayor capacidad."
        },
        {
          tipo: "unica",
          pregunta: "La tecnología de fabricación de un microprocesador se expresa en…",
          opciones: { A: "Nanómetros.", B: "Milímetros.", C: "Hercios.", D: "Vatios." },
          correcta: ["A"],
          explicacion: "Se expresa en nanómetros (10⁻⁹ m) e indica el tamaño aproximado de las puertas lógicas del microprocesador."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el hyperthreading?",
          opciones: {
            A: "La capacidad de un núcleo de realizar dos tareas de forma simultánea.",
            B: "Aumentar el voltaje del núcleo.",
            C: "Un tipo de refrigeración líquida.",
            D: "La conexión de dos tarjetas gráficas."
          },
          correcta: ["A"],
          explicacion: "Con hyperthreading, un núcleo puede realizar dos tareas simultáneas. Los Intel Core i generalmente lo tienen."
        },
        {
          tipo: "multiple",
          pregunta: "Sobre el overclocking, señala las afirmaciones correctas:",
          opciones: {
            A: "Consiste en aumentar la velocidad del micro por encima de la nominal.",
            B: "Los micros Intel terminados en 'K' están preparados para ello.",
            C: "Se pierde la garantía si se modifican parámetros fuera de los límites del fabricante.",
            D: "Reduce el consumo de energía y el calor."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El overclocking da potencia extra, pero el micro consume MÁS energía y genera MÁS calor, y se pierde la garantía."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué puerto PCI Express se conecta normalmente la tarjeta de vídeo?",
          opciones: { A: "X1.", B: "X4.", C: "X16.", D: "X2." },
          correcta: ["C"],
          explicacion: "La tarjeta de vídeo va en el X16 (16 enlaces de datos bidireccionales, el más rápido); en el X1 suelen ir tarjetas de red o sonido."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de las siguientes son tarjetas de expansión mencionadas en el libro?",
          opciones: {
            A: "Tarjeta de red.",
            B: "Tarjeta capturadora o sintonizadora de TV.",
            C: "Tarjeta RAID.",
            D: "Tarjeta de chipset."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El libro lista: red, sonido, gráfica, capturadora/sintonizadora de TV, RAID y expansión USB. No existe la \"tarjeta de chipset\"."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema 2",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué conector USB es muy utilizado en discos duros externos?",
          opciones: { A: "El micro-B de USB 3.0.", B: "El tipo A.", C: "El mini-USB tipo A.", D: "El PS2." },
          correcta: ["A"],
          explicacion: "El conector USB 3.0 micro-B es muy utilizado en dispositivos como los discos duros externos."
        },
        {
          tipo: "unica",
          pregunta: "¿Quién inventó el puerto Thunderbolt y también el USB?",
          opciones: { A: "Apple.", B: "Intel.", C: "AMD.", D: "Microsoft." },
          correcta: ["B"],
          explicacion: "Intel inventó tanto el puerto Thunderbolt (que usan los Apple) como el puerto USB."
        },
        {
          tipo: "unica",
          pregunta: "El puerto VGA tiene…",
          opciones: {
            A: "15 pines y es analógico.",
            B: "24 pines y es digital.",
            C: "8 pines y es digital.",
            D: "15 pines y es digital."
          },
          correcta: ["A"],
          explicacion: "El VGA (Video Graphics Array) es el más antiguo: 15 pines, normalmente azul y analógico."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué puerto interno se utilizaba también para conectar los lectores ópticos?",
          opciones: { A: "El puerto SATA.", B: "El ATX-12V.", C: "El Front Panel.", D: "El PC speaker." },
          correcta: ["A"],
          explicacion: "Los puertos SATA conectan discos duros y SSD, y también se usaban para los hoy obsoletos lectores ópticos."
        },
        {
          tipo: "unica",
          pregunta: "El conector del ventilador CPU fan tiene 4 pines con opción PWM, que sirve para…",
          opciones: {
            A: "Adaptar la velocidad del ventilador al rendimiento del microprocesador.",
            B: "Iluminar el ventilador con RGB.",
            C: "Alimentar el disco duro.",
            D: "Conectar dos ventiladores a la vez."
          },
          correcta: ["A"],
          explicacion: "La opción PWM de control de velocidad permite adaptar la velocidad del ventilador al rendimiento del micro."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se especifica dónde se conecta cada conector interno del equipo?",
          opciones: {
            A: "En el manual de la placa base.",
            B: "En la caja del microprocesador.",
            C: "En la web del fabricante de la RAM.",
            D: "En la etiqueta de la fuente."
          },
          correcta: ["A"],
          explicacion: "Aunque la placa lo indica serigrafiado, el manual de la placa base especifica dónde se conecta cada conector interno."
        },
        {
          tipo: "unica",
          pregunta: "En la placa ATX, ¿por qué la fuente de alimentación se coloca encima del microprocesador?",
          opciones: {
            A: "Para que la caja esté más ventilada.",
            B: "Por estética.",
            C: "Para acortar el cable SATA.",
            D: "Es una colocación aleatoria."
          },
          correcta: ["A"],
          explicacion: "La localización de los componentes en una placa ATX no es al azar: busca mejor ventilación y menos maraña de cables."
        },
        {
          tipo: "unica",
          pregunta: "A veces es mejor invertir el presupuesto en una mejor placa base que en un mejor microprocesador porque…",
          opciones: {
            A: "El rendimiento del sistema será mayor.",
            B: "La placa base es más barata siempre.",
            C: "El microprocesador no influye en el rendimiento.",
            D: "Las placas base no se estropean."
          },
          correcta: ["A"],
          explicacion: "Según el libro, una buena placa base asegura un sistema eficiente y el rendimiento del sistema será mayor."
        },
        {
          tipo: "unica",
          pregunta: "La velocidad de un SoC depende principalmente de…",
          opciones: {
            A: "El número de núcleos y la velocidad de los mismos.",
            B: "El tamaño de la pantalla.",
            C: "La capacidad de la batería.",
            D: "El sistema operativo instalado."
          },
          correcta: ["A"],
          explicacion: "Cuantos más núcleos (y más rápidos), más tareas simultáneas y mayor potencia de cálculo."
        },
        {
          tipo: "unica",
          pregunta: "Una tecnología de fabricación de 14 nanómetros significa que…",
          opciones: {
            A: "Las puertas lógicas tienen un tamaño aproximado de 14 nanómetros.",
            B: "El chip mide 14 nanómetros en total.",
            C: "Tiene 14 núcleos.",
            D: "Consume 14 vatios."
          },
          correcta: ["A"],
          explicacion: "La tecnología de fabricación indica el tamaño aproximado de las puertas lógicas con las que están construidos los circuitos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué ventajas aporta una tecnología de fabricación menor (más pequeña)?",
          opciones: {
            A: "Menos gasto energético.",
            B: "Mayor concentración de transistores en el mismo espacio.",
            C: "Un microprocesador más evolucionado.",
            D: "Mayor tamaño de las puertas lógicas."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Una litografía menor implica menos gasto energético y más transistores en el mismo espacio: el micro está más evolucionado."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué mensaje suele mostrar el sistema cuando se agota la pila de la BIOS?",
          opciones: {
            A: "\"CMOS Checksum Invalid\".",
            B: "\"RAM Failure\".",
            C: "\"Boot Manager Missing\".",
            D: "\"Disk Read Error\"."
          },
          correcta: ["A"],
          explicacion: "Al agotarse la pila aparecen mensajes tipo \"CMOS Checksum Invalid\" y se pierde el ajuste de la hora."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un heat pipe?",
          opciones: {
            A: "Un tubo sellado con líquido refrigerante que se evapora cerca del micro y se condensa en otra zona.",
            B: "Un ventilador de alta velocidad.",
            C: "Una pasta térmica especial.",
            D: "Un canal de aire de la caja."
          },
          correcta: ["A"],
          explicacion: "Los heat pipes son tubos sellados con líquido refrigerante: se evapora cerca del micro y se condensa cuando se enfría en otra zona del disipador."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el efecto Peltier?",
          opciones: {
            A: "Un efecto termoeléctrico que permite enfriar un dispositivo aplicando un voltaje a un material.",
            B: "El calentamiento de los transistores al cambiar de estado.",
            C: "Una técnica de overclocking.",
            D: "El ruido de los ventiladores."
          },
          correcta: ["A"],
          explicacion: "El efecto Peltier es un efecto termoeléctrico usado en refrigeraciones termoeléctricas, p. ej. en tarjetas de vídeo."
        },
        {
          tipo: "unica",
          pregunta: "No hay que confundir el nombre comercial de un micro (i9, i7, i5) con…",
          opciones: {
            A: "Su microarquitectura o nombre clave (skylake, sandy bridge…).",
            B: "Su número de serie.",
            C: "El nombre del chipset.",
            D: "El nombre de la BIOS."
          },
          correcta: ["A"],
          explicacion: "La microarquitectura se denomina con un nombre clave como skylake, sandy bridge o ivy bridge, distinto del nombre comercial."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué fue más rentable aumentar el número de núcleos que solo la velocidad?",
          opciones: {
            A: "Porque mejora el rendimiento, sobre todo en la multitarea.",
            B: "Porque los núcleos son gratis.",
            C: "Porque la velocidad no influye en nada.",
            D: "Porque reduce el número de transistores."
          },
          correcta: ["A"],
          explicacion: "El aumento de núcleos mejora el rendimiento sobre todo en multitarea: el sistema realiza más tareas de forma concurrente."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué tipo de operaciones están especializadas las GPU frente a las CPU?",
          opciones: {
            A: "Operaciones en coma flotante.",
            B: "Operaciones de entrada/salida.",
            C: "Gestión de archivos.",
            D: "Control de procesos."
          },
          correcta: ["A"],
          explicacion: "Las GPU están especializadas en operaciones en coma flotante, la base de los videojuegos, edición de vídeo y gráficos 3D."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué técnica de la tarjeta gráfica suaviza los bordes de las imágenes?",
          opciones: {
            A: "El antialiasing.",
            B: "El anisotropic filtering.",
            C: "El shader.",
            D: "El CRC."
          },
          correcta: ["A"],
          explicacion: "El antialiasing es el suavizado de bordes; el anisotropic filtering es el suavizado de texturas."
        },
        {
          tipo: "unica",
          pregunta: "En la numeración NVidia, ¿cuál de estas tarjetas es más potente?",
          opciones: {
            A: "GeForce 1050.",
            B: "GeForce 1060.",
            C: "GeForce 1080.",
            D: "GeForce 730."
          },
          correcta: ["C"],
          explicacion: "Dentro de la misma serie, una 1080 es más potente que una 1060, y esta más que una 1050. La 730 es de una serie anterior (serie 7)."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las afirmaciones correctas sobre las GPU y tarjetas gráficas:",
          opciones: {
            A: "La GPU no puede reemplazar a la CPU porque están diseñadas para propósitos diferentes.",
            B: "SLI es de NVidia y Crossfire de ATI.",
            C: "Los micros actuales integran un procesador gráfico, así que no siempre hace falta tarjeta dedicada.",
            D: "Las GTX son menos potentes que las GT."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Todo correcto salvo la última: las GTX son MÁS potentes que las GT."
        }
      ]
    }
  ]
});
