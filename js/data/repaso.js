/* ============================================================
   repaso.js — Repaso global de los temas 1-7.
   Material condensado pensado para preparar el examen final.
   - Resumen, mapa, conceptos clave y frases combinados.
   - Apartados con solo lo imprescindible de cada tema.
   - 4 paquetes de 20 preguntas variadas de todos los temas.
   ============================================================ */

"use strict";

const REPASO = {
  id: "repaso",
  titulo: "Repaso global · Temas 1-7",

  /* ---------------- RESUMEN ---------------- */
  resumen:
    "<p>Este apartado reúne en un solo sitio <strong>todo lo esencial de los temas 1 al 7</strong> del módulo de <em>Montaje y Mantenimiento de Equipo</em>. Está pensado como <strong>último repaso antes del examen</strong>: el resumen, el mapa, los conceptos clave y las frases para memorizar están combinados y, en la zona de desarrollo, solo se han dejado los puntos más importantes de cada tema.</p>" +

    "<p><strong>Tema 1</strong> — sienta las bases: <strong>hardware</strong> (lo tangible) frente a <strong>software</strong> (las órdenes), conceptos como <strong>programa</strong>, <strong>aplicación</strong>, <strong>sistema operativo</strong>, <strong>firmware</strong> y <strong>sistema informático</strong> (HW + SW + recursos humanos). Estructura funcional: <strong>periféricos → CPU → periféricos</strong>; <strong>CPU = memoria + procesador</strong> y <strong>procesador = unidad de control + unidad aritmética</strong>. Componentes <strong>pasivos</strong> (resistencia Ω, condensador F, transformador, fusible) y <strong>activos</strong> (pila, transistor, diodo, CI, microprocesador). Tipos de memoria (masiva, RAM, ROM, caché) y la <strong>secuencia de arranque</strong> en 6 pasos: corriente → BIOS → POST → sector de arranque → Boot Manager → SO.</p>" +

    "<p><strong>Tema 2</strong> — hardware comercial: conectores externos (USB 2.0/3.0/3.1, Thunderbolt, VGA/DVI/HDMI, jacks de sonido por colores) e internos (ATX 24 pines, ATX-12V 4/8, SATA, M.2, fans, Front Panel, PC speaker). <strong>Caja</strong> y formatos (ATX, micro-ATX, mini-ITX, E-ATX), <strong>placa base</strong>, <strong>sockets</strong> (PGA-AMD vs LGA-Intel), <strong>BIOS</strong> (datos en CMOS, pila CR-2032 de 3,3 V), <strong>chipset</strong>, parámetros de la <strong>RAM</strong> (velocidad, latencia CL, dual channel, ECC, DDR4 vs DDR3) y del <strong>micro</strong> (FSB, cachés L1/L2/L3, nm, VCore, hyperthreading, overclocking). <strong>GPU</strong> con <strong>PCI Express</strong> (X1 para sonido/red, X16 para vídeo).</p>" +

    "<p><strong>Tema 3</strong> — almacenamiento: los programas pasan del <strong>almacenamiento secundario a la RAM</strong> para ejecutarse. <strong>Discos duros</strong> (magnético + digital): partes, zonas (pista, sector, clúster, sector geométrico, cilindro) y parámetros (densidad, rpm, tiempo de búsqueda y de acceso, latencia, tasa de transferencia). <strong>Memorias flash</strong> (no volátiles + actualizables + alta densidad) y <strong>SSD</strong> (flash NAND + SDRAM caché + controlador). <strong>M.2</strong> en modo SATA o <strong>NVMe</strong> (PCIe, hasta 6× más rápido). Particionamiento <strong>MBR</strong> (máx. 4 primarias, 2 TB) frente a <strong>GPT/UEFI</strong> (sin esas limitaciones). <strong>Formateo</strong>: alto nivel (lógico, implanta el SF) y bajo nivel (físico, de fábrica).</p>" +

    "<p><strong>Tema 4</strong> — periféricos: dispositivo que <strong>transmite o recibe información</strong> con transformación interna; el <strong>SO es el intermediario</strong>. <strong>Controladora</strong> = hardware, <strong>driver</strong> = software del fabricante. Clasificación clásica (E/S/E-S) y moderna (+ comunicación y almacenamiento). Ratón (Engelbart, Xerox, 1963), teclado (matriz de interruptores), <strong>escáner</strong> (CIS plano vs CCD con óptica, OCR, antropométricos), <strong>impresoras</strong> tradicionales (matricial, tinta, láser, ribbon, térmica, plóter) y <strong>3D</strong> (ABS resistente del petróleo, PLA biodegradable; STL → Gcode; RepRap y «vitaminas»). Multimedia, monitores (luminancia, dot pitch, 1080p vs 1080i, IPS, DLNA), tabletas digitalizadoras y proyectores (DLP, LED 50 000 h, lúmenes).</p>" +

    "<p><strong>Tema 5</strong> — ensamblado: puesto de trabajo (22-24 °C, toma de tierra, descarga estática, componentes por los bordes, pasta térmica la justa, NUNCA abrir la fuente). <strong>Secuencia de 7 pasos</strong>: placa → micro (LGA/PGA, ZIF, chaflán, disipador en cruz, PWM 4 pines) → RAM (dual channel = mismo modelo) → SSD → tarjetas → cables (front panel, ATX) → verificación. <strong>Refrigeración líquida</strong>: primero el que más calor disipa; prueba de estanqueidad puenteando verde con negro. Revisión: «Reboot and select proper boot device» = <strong>buen augurio</strong>. <strong>Overclocking</strong> (sobre el nominal, Intel «K», AMD FX, chipset Z) frente a <strong>underclocking</strong> (ahorrar energía) y <strong>modding</strong> (estética).</p>" +

    "<p><strong>Tema 6</strong> — mantenimiento: no se cambian piezas «por horas» como en un coche; el <strong>preventivo evita</strong> averías y el <strong>correctivo las arregla</strong>. Factores que acortan la vida: <strong>temperatura</strong> (la nº 1: a más velocidad/voltaje, más calor; cobre mejor que aluminio), <strong>polvo</strong> (limpiar fuera, nunca espráis domésticos), <strong>líquidos</strong> (gel de sílice, NUNCA secador), <strong>estática</strong> (el «asesino silencioso») e impactos. <strong>Baterías de litio</strong>: 250 ciclos, ni 100 % ni 0 %, almacenar al 40-60 %, &lt; 30 °C; <strong>garantía</strong> 2 años (1 en segunda mano). Avería: Live CD para descartar software y comprobar componentes <strong>uno a uno</strong>. Señales BIOS (CMOS error = pila, Timer not operational = placa, Display Memory error = gráfica). Placa = lo que <strong>más se avería</strong>; fuente = lo <strong>más fácil de comprobar</strong>. Red: ping <strong>loopback → router → Internet</strong>. Portátiles: caddy, SO-DIMM, inverter y flex.</p>" +

    "<p><strong>Tema 7</strong> — eléctrica y prevención: <strong>voltaje (V)</strong>, <strong>intensidad (A, lo que mata)</strong>, <strong>resistencia (Ω)</strong> y <strong>potencia (W)</strong>. Los equipos van con <strong>continua</strong>; el enchufe da <strong>alterna (~)</strong>. La <strong>fuente de alimentación</strong> convierte alterna en continua en 4 pasos: <strong>Transformación → Rectificación (puente de Graetz) → Filtrado → Estabilización</strong>. Eficiencia <strong>80 PLUS</strong> (bronce, plata, oro, platino, <strong>titanio</strong>); cables <strong>amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa</strong>; prueba del ventilador puenteando <strong>verde con negro</strong>. <strong>Polímetro</strong>: resistencias sin alimentar, intensidad <strong>en serie</strong>, escala inmediatamente superior. <strong>SAI</strong>: offline / interactivo (AVR) / online (servidores); carga en VA, dimensionar +25 %, conmuta en 2-10 ms. Cierra con prevención (pantalla a &gt;40 cm, 20-26 °C, &lt;55 dB, extintores de CO2, burnout, mobbing) y medioambiente (RoHS, gasto vampiro, TDP).</p>",

  /* ---------------- MAPA ---------------- */
  mapa: [
    {
      titulo: "Tema 1 · Introducción",
      hijos: [
        "Hardware (tangible) vs software (órdenes); firmware = SW en HW",
        "Sistema informático = HW + SW + recursos humanos",
        "CPU = memoria + procesador; procesador = U. control + U. aritmética",
        "Pasivos (R Ω, C F, transformador, fusible) vs activos (pila, transistor, diodo, CI, micro)",
        "Memorias: masiva, RAM (volátil), ROM (PROM → EEPROM/flash), caché",
        "Arranque: corriente → BIOS → POST → sector → Boot Manager (GRUB/NTLDR) → SO"
      ]
    },
    {
      titulo: "Tema 2 · Elementos internos",
      hijos: [
        "USB 2.0 (480 Mbps) / 3.0 (10×) / 3.1 (10 Gbps); Thunderbolt",
        "Sonido: verde altavoces, azul entrada, rosa micro; VGA analógico, DVI/HDMI digitales",
        "ATX 24 pines (placa) y ATX-12V 4/8 pines (micro); SATA, M.2",
        "PGA (pines en el micro = AMD) vs LGA (pines en placa = Intel); ZIF",
        "BIOS en CMOS, pila CR-2032 3,3 V; chipset comunica los elementos",
        "RAM: latencia CL, dual channel, DDR4 (1,2 V, 288 pines) vs DDR3 (1,5 V, 240)",
        "Micro: FSB, cachés L1/L2/L3, nm, VCore, hyperthreading, overclocking (K, FX)",
        "GPU; PCIe X1 (sonido/red) y X16 (vídeo); SLI (NVidia) y Crossfire (ATI)"
      ]
    },
    {
      titulo: "Tema 3 · Almacenamiento",
      hijos: [
        "Almacenamiento secundario → RAM para ejecutar (RAM es volátil)",
        "Disco duro = magnético + digital: carcasa, platos, brazos, cabezas, aparcamiento",
        "Zonas: pista, sector (512 B), clúster, sector geométrico, cilindro",
        "rpm: 5400 portátil, 7200 sobremesa, 10-15 000 servidor",
        "Flash = no volátil + actualizable + alta densidad",
        "SSD = flash NAND + SDRAM caché + controlador (el cerebro)",
        "M.2 NVMe (PCIe) hasta 6× más rápido que SATA; recibe energía de la placa",
        "MBR: 4 primarias y 2 TB max; GPT/UEFI sin esas limitaciones, con redundancia",
        "Formateo alto nivel (lógico, implanta SF) vs bajo nivel (físico, de fábrica)"
      ]
    },
    {
      titulo: "Tema 4 · Periféricos",
      hijos: [
        "Controladora = HW (en placa); driver = SW del fabricante (depende del SO)",
        "Clásica: E / S / E-S; moderna: + comunicación y almacenamiento",
        "Ratón Engelbart 1963 (Xerox); teclado = matriz de interruptores",
        "Escáner: CIS (barato y plano) vs CCD (óptica y volumen); OCR",
        "Antropométricos: huella (puntos), iris (surcos), retina (infrarrojos a venas)",
        "Impresoras: matricial (copias), tinta (doméstica), láser (volumen), térmica (tiques)",
        "3D: ABS (resistente, petróleo) y PLA (frágil, biodegradable); STL → Gcode",
        "Monitor: luminancia cd/m², dot pitch menor mejor, 1080p > 1080i, IPS, DLNA",
        "Proyectores: DLP, LED 50 000 h, lúmenes"
      ]
    },
    {
      titulo: "Tema 5 · Ensamblado",
      hijos: [
        "Puesto: 22-24 °C, luz natural, toma de tierra; descargarse y manejar por los bordes",
        "Pasta térmica la justa (más termoconductora que el aire); limpiar con alcohol isopropílico",
        "NUNCA abrir la fuente: condensadores cargados aun desenchufada",
        "Secuencia: placa → micro → RAM → SSD → tarjetas → cables → verificación",
        "LGA pines en la placa (Intel) / PGA pines en el micro (AMD); chaflán; ZIF",
        "Disipador: presión en cruz; conector 4 pines (PWM)",
        "Dual channel: memorias iguales o irá a la velocidad de la más lenta",
        "Refrigeración líquida: primero el que más calor disipa; prueba de estanqueidad verde-negro",
        "«Reboot and select proper boot device» = buen augurio en el primer arranque",
        "Overclocking (sobre nominal, pierde garantía) vs underclocking (ahorro)"
      ]
    },
    {
      titulo: "Tema 6 · Mantenimiento",
      hijos: [
        "Preventivo = evita; correctivo = arregla",
        "Temperatura nº 1; cobre > aluminio; estática = «asesino silencioso»",
        "Mojado: apagar + gel de sílice; secador NUNCA",
        "Espráis antipolvo domésticos prohibidos; polvo se limpia al aire libre",
        "Litio: 250 ciclos, ni 100 % ni 0 %, almacenar 40-60 %, < 30 °C",
        "Garantía Ley 23/2003: 2 años (1 año en segunda mano)",
        "1 pitido = BIOS contenta; CMOS error = pila; Timer = placa; Display Memory = gráfica",
        "¿Se apaga? Calor. ¿No arranca? Mínimo: placa + micro + 1 RAM",
        "Placa = lo que más se avería; fuente = lo más fácil de comprobar",
        "Ping: 127.0.0.1 (loopback) → router → Internet",
        "Portátil: caddy, SO-DIMM, inverter (parpadeo), flex (líneas)"
      ]
    },
    {
      titulo: "Tema 7 · Eléctrica y prevención",
      hijos: [
        "V (voltios), I (amperios, lo que mata), Ω (resistencia), P (vatios)",
        "Equipos por dentro: continua; enchufe: alterna (~)",
        "Fuente: Transformación → Rectificación (Graetz) → Filtrado → Estabilización",
        "80 PLUS: bronce, plata, oro, platino, TITANIO (más eficiente)",
        "Cables: amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa",
        "Prueba del ventilador: verde (PS_ON) + negro (GND)",
        "Polímetro: escala superior; resistencias sin alimentar; intensidad EN SERIE",
        "SAI: offline / interactivo (AVR) / online (servidores); +25 %, conmuta 2-10 ms",
        "Pantalla > 40 cm; 20-22 °C invierno, 24-26 °C verano; ruido < 55 dB; CO2",
        "Burnout (trabajador quemado) y mobbing (acoso); RoHS; gasto vampiro"
      ]
    }
  ],

  /* ---------------- CONCEPTOS CLAVE COMBINADOS ---------------- */
  conceptosClave: [
    /* Tema 1 */
    "<strong>Hardware</strong>: tangible (se toca). <strong>Software</strong>: intangible (órdenes). El hardware solo entiende <strong>código binario</strong>.",
    "<strong>Sistema operativo</strong>: software intermediario entre programas y hardware. <strong>Firmware</strong>: software que contiene el hardware.",
    "<strong>Sistema informático</strong> = hardware + software + recursos humanos.",
    "<strong>CPU</strong> = memoria + procesador. <strong>Procesador</strong> = unidad de control + unidad aritmética.",
    "Componentes <strong>pasivos</strong> (transmiten/modifican señal): resistencia (Ω), condensador (F), transformador, fusible. <strong>Activos</strong> (controlan corriente): pila, transistor, diodo, CI, microprocesador.",
    "La <strong>RAM</strong> es <strong>volátil</strong>; el almacenamiento masivo, no. Los programas se ejecutan en la RAM.",
    "Arranque: <strong>corriente → BIOS → POST → sector de arranque → Boot Manager → SO</strong>. GRUB en Linux, NTLDR en Windows.",

    /* Tema 2 */
    "<strong>USB</strong>: 2.0 = 480 Mbps; 3.0 = 10× más rápido; 3.1 = 10 Gbps; retrocompatibles.",
    "Sonido: <strong>verde altavoces, azul entrada de línea, rosa micrófono</strong>. VGA analógico (azul, 15 pines); DVI y HDMI digitales (HDMI = vídeo + audio).",
    "<strong>ATX</strong>: 24 pines (placa). <strong>ATX-12V</strong>: 4/8 pines (procesador).",
    "<strong>PGA</strong>: pines en el micro (AMD). <strong>LGA</strong>: pines en el socket (Intel). <strong>ZIF</strong>: cero fuerza de inserción.",
    "<strong>BIOS</strong> = Basic Input Output System. Sus datos viven en la <strong>CMOS</strong>, alimentada por la pila <strong>CR-2032 (3,3 V)</strong>. Fabricantes: AMI y AWARD-Phoenix.",
    "<strong>Chipset</strong>: comunica los elementos del sistema y da conectividad exterior.",
    "Memorias mezcladas → todas a la velocidad de la <strong>más lenta</strong>. <strong>Latencia CL</strong>: ciclos hasta seleccionar columna. DDR4 = 1,2 V, 288 pines; DDR3 = 1,5 V, 240 pines.",
    "<strong>Cachés</strong>: L1 (la más rápida, en el núcleo) → L2 → L3 (mayor capacidad, más lenta).",
    "<strong>Hyperthreading</strong>: un núcleo ejecuta dos tareas. <strong>Overclocking</strong>: subir el reloj sobre el nominal; pierde la garantía. Desbloqueados: Intel «K», AMD FX.",
    "<strong>GPU</strong>: descarga el trabajo gráfico de la CPU; experta en coma flotante. <strong>PCIe X16</strong> para tarjeta de vídeo; <strong>X1</strong> para red/sonido. <strong>SLI</strong> (NVidia), <strong>Crossfire</strong> (ATI).",

    /* Tema 3 */
    "Para ejecutar un programa, la información pasa del <strong>almacenamiento secundario a la RAM</strong>.",
    "Disco duro = sistema <strong>magnético y digital</strong>. Partes: <strong>carcasa, platos, brazos, cabezas, zona de aparcamiento</strong>. Las cabezas <strong>no tocan</strong> los platos.",
    "Zonas: <strong>pista, sector (512 B), clúster, sector geométrico, cilindro</strong>. <strong>rpm</strong>: 5400 portátil, 7200 sobremesa, 10-15 000 servidor.",
    "<strong>Tiempo medio de acceso</strong> = tiempo medio de búsqueda + latencia media.",
    "Memoria flash = <strong>no volátil + actualizable + alta densidad</strong>. Una SSD = <strong>flash NAND + SDRAM caché + controlador</strong> (el cerebro).",
    "<strong>M.2 NVMe</strong> (PCIe): hasta <strong>6×</strong> más rápido que SATA. El puerto M.2 recibe <strong>energía de la placa</strong>; el cable SATA solo datos.",
    "<strong>MBR</strong>: máx. <strong>4 particiones primarias</strong> y <strong>2 TB</strong>. <strong>GPT/UEFI</strong>: sin esas limitaciones y con <strong>redundancia</strong>. Sistemas de archivos: NTFS (Win), EXT (Linux), HFS+ (Apple), FAT (pendrives/SD).",
    "<strong>Formateo alto nivel</strong> (lógico): implanta el sistema de archivos; <strong>borra</strong> los datos. <strong>Bajo nivel</strong> (físico): de fábrica.",

    /* Tema 4 */
    "<strong>Periférico</strong>: se conecta al equipo y transmite/recibe información; en su interior hay <strong>transformación</strong>; el <strong>SO</strong> es el intermediario.",
    "<strong>Controladora</strong> = hardware (casi siempre integrada en la placa). <strong>Driver</strong> = software del <strong>fabricante</strong>, depende del SO.",
    "Ratón: <strong>Douglas Engelbart</strong> (Xerox, 1963). Teclado: matriz de interruptores; al pulsar, paso de corriente y código al equipo.",
    "<strong>CIS</strong>: escáner sin óptica, barato y plano (poca profundidad). <strong>CCD</strong>: con lentes/espejos, mejor para volumen.",
    "<strong>OCR</strong>: reconocer caracteres en una imagen. Antropométricos: huella (puntos), iris (surcos del color), retina (infrarrojos a venas).",
    "<strong>Matricial</strong>: solo donde se necesitan <strong>copias múltiples</strong> (bancos). <strong>Láser</strong>: rápida y barata por página; tarda más en la <strong>primera página</strong>. <strong>Térmica</strong>: solo papel térmico.",
    "<strong>ABS</strong>: resistente, petróleo, calor; <strong>PLA</strong>: frágil, biodegradable (vegetal). <strong>STL</strong> describe la geometría 3D → se transforma a <strong>Gcode</strong> (Cura).",
    "Monitor: <strong>luminancia</strong> en cd/m², <strong>dot pitch</strong> menor = más píxeles, <strong>5 ms</strong> tiempo de respuesta normal. <strong>1080p</strong> (progresivo) > <strong>1080i</strong> (entrelazado).",
    "Proyectores: <strong>DLP</strong> da más contraste; <strong>LED 50 000 h</strong> frente a 3000-5000 h incandescente. Luminosidad en <strong>lúmenes</strong>.",

    /* Tema 5 */
    "Temperatura ideal de la sala: <strong>22-24 °C</strong>. Manejar componentes <strong>por los bordes</strong> tras descargarse de estática.",
    "<strong>Pasta térmica</strong>: la justa (sella huecos; es más termoconductora que el aire). Se limpia con <strong>alcohol isopropílico</strong>.",
    "<strong>NUNCA</strong> manipular la fuente de alimentación, ni desenchufada: sus <strong>condensadores</strong> pueden descargar.",
    "Secuencia de montaje (7 pasos): <strong>placa → micro → RAM → SSD → tarjetas → conexionado → verificación</strong>.",
    "<strong>Máscara del chasis = toma de tierra</strong> de los componentes. <strong>Disipador</strong>: presionar en cruz; conector de <strong>4 pines (PWM)</strong>.",
    "<strong>Refrigeración líquida</strong>: el líquido pasa primero por el componente que <strong>más calor disipa</strong>. <strong>Prueba de estanqueidad</strong>: puentear el <strong>cable verde</strong> del ATX con un <strong>negro</strong>.",
    "<strong>«Reboot and select proper boot device»</strong> en el primer arranque <strong>no es un error</strong>, es buen augurio. F2 o Supr para entrar en la BIOS.",
    "<strong>Overclocking</strong>: sobre el nominal (pierde la garantía). Subir el <strong>FSB</strong> mejora micro + memoria + buses; subir el <strong>multiplicador</strong>, solo el micro. <strong>Underclocking</strong>: ahorrar energía. <strong>Modding</strong>: estética.",

    /* Tema 6 */
    "<strong>Preventivo</strong>: normas para que dure más. <strong>Correctivo</strong>: arregla averías. <strong>SMART</strong> avisa de fallos en discos mecánicos (no en SSD).",
    "Temperatura = factor más importante. A más <strong>velocidad/voltaje</strong>, más calor. <strong>Cobre</strong> > aluminio; <strong>plata</strong> > cobre.",
    "Mojado: <strong>apagar + gel de sílice</strong>. Secador <strong>NUNCA</strong>. Espráis antipolvo domésticos <strong>prohibidos</strong>; limpiar al aire libre.",
    "Estática = <strong>asesino silencioso</strong>. Pulsera antiestática; evitar lana y suelos de vinilo; tocar metal sin pintar.",
    "<strong>Litio</strong>: no tiene efecto memoria; pierde a partir de <strong>250 ciclos</strong>; almacenar al <strong>40-60 %</strong>; nunca al 100 % ni al 0 %; menos de <strong>30 °C</strong>.",
    "Garantía Ley 23/2003: <strong>2 años</strong> nuevo, <strong>1 año</strong> segunda mano. Reparación, piezas, mano de obra y envío <strong>gratis</strong>.",
    "<strong>1 pitido</strong> al arrancar = BIOS contenta. <strong>CMOS checksum error</strong> = pila. <strong>RAM Refresh Failure</strong> = módulo/slot. <strong>Timer not operational</strong> = placa. <strong>Display Memory error</strong> = tarjeta gráfica.",
    "Se apaga solo → <strong>calor</strong>. No arranca → mínimo: <strong>placa + micro + 1 RAM</strong>. <strong>Placa</strong> = lo que más se avería; <strong>fuente</strong> = lo más fácil de comprobar.",
    "Red: ping <strong>127.0.0.1 (loopback) → router → Internet</strong>. <strong>ipconfig</strong> (Win) / <strong>ifconfig</strong> (Linux).",
    "Portátil: <strong>caddy</strong> sustituye el lector óptico por SSD. RAM en formato <strong>SO-DIMM</strong>; las <strong>eMMC</strong> van soldadas. <strong>Inverter</strong> = parpadeo; <strong>flex</strong> = líneas de color.",

    /* Tema 7 */
    "<strong>Voltaje</strong> (V, voltios, voltímetro); <strong>intensidad</strong> (I, amperios — «lo que mata»); <strong>resistencia</strong> (Ω, óhmetro); <strong>potencia</strong> (P, vatios).",
    "Aislantes: plástico. Conductores: <strong>plata</strong> (la mejor) y <strong>cobre</strong> (la más usada por precio).",
    "Los equipos por dentro usan <strong>corriente continua</strong>; el enchufe da <strong>alterna (~)</strong>.",
    "Fuente: 4 pasos — <strong>Transformación → Rectificación (puente de Graetz) → Filtrado (condensadores) → Estabilización</strong>.",
    "<strong>80 PLUS</strong>: bronce → plata → oro → platino → <strong>titanio</strong> (la más eficiente). <strong>PFC activo</strong>: señal de calidad.",
    "Cables: <strong>amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa (GND)</strong>. <strong>Prueba del ventilador</strong>: <strong>verde (PS_ON)</strong> + <strong>negro (GND)</strong>.",
    "Polímetro: escala <strong>inmediatamente superior</strong>; resistencias <strong>sin alimentar</strong> el circuito; intensidad <strong>en serie</strong>.",
    "<strong>SAI</strong>: <strong>offline/stand by</strong> (doméstico) · <strong>interactivo</strong> (AVR) · <strong>online</strong> (servidores). Conmuta en <strong>2-10 ms</strong>. Carga en <strong>VA</strong>, dimensionar <strong>+25 %</strong>.",
    "Ergonomía: pantalla a <strong>>40 cm</strong> y hasta <strong>60° bajo la horizontal</strong>. Oficina: <strong>20-22 °C invierno / 24-26 °C verano</strong>; humedad 30-70 %; ruido <strong>&lt; 55 dB</strong>; extintores de <strong>CO2</strong>.",
    "<strong>Burnout</strong> = trabajador quemado; <strong>mobbing</strong> = acoso laboral. <strong>RoHS</strong> restringe plomo, mercurio, cadmio, cromo hexavalente. <strong>Gasto vampiro</strong> ≈ 2,3 % en España."
  ],

  /* ---------------- FRASES PARA MEMORIZAR ---------------- */
  frasesMemorizar: [
    "El hardware se toca; el software no. El hardware solo entiende <strong>código binario</strong>.",
    "<strong>Sistema informático</strong> = hardware + software + recursos humanos.",
    "<strong>CPU</strong> = memoria + procesador. <strong>Procesador</strong> = U. control + U. aritmética.",
    "Arranque: <strong>corriente → BIOS → POST → sector → Boot Manager → SO</strong>.",
    "USB 3.0 es <strong>10×</strong> el USB 2.0 (480 Mbps); USB 3.1 = 10 Gbps. HDMI vídeo + audio (5 Gbps).",
    "<strong>L</strong>GA = pines en <strong>L</strong>a placa (Intel); <strong>P</strong>GA = <strong>P</strong>ines en el micro (AMD).",
    "BIOS en CMOS; pila <strong>CR-2032 de 3,3 V</strong>.",
    "DDR4 = 1,2 V y 288 pines; DDR3 = 1,5 V y 240 pines. DDR no son compatibles entre sí.",
    "PCIe <strong>X16</strong> para la tarjeta gráfica; <strong>X1</strong> para red y sonido.",
    "Los programas pasan del <strong>almacenamiento secundario a la RAM</strong> para ejecutarse.",
    "Partes del disco: <strong>Carcasa, Platos, Brazos, Cabezas, Zona de aparcamiento</strong>. Zonas: <strong>Pista, Sector, Clúster, Sector geométrico, Cilindro</strong>.",
    "M.2 <strong>NVMe</strong> hasta <strong>6×</strong> más rápido que SATA.",
    "MBR: 4 primarias y 2 TB; GPT/UEFI sin esas limitaciones.",
    "Controladora = <strong>hardware</strong> en la placa; driver = <strong>software</strong> del fabricante.",
    "Ratón: <strong>Engelbart</strong>, Xerox, <strong>1963</strong>.",
    "<strong>CIS</strong>: barato y plano. <strong>CCD</strong>: óptica y volumen. <strong>OCR</strong>: caracteres a partir de imagen.",
    "<strong>ABS</strong>: resistente, del petróleo. <strong>PLA</strong>: frágil, vegetal, biodegradable. STL → Gcode.",
    "<strong>1080p</strong> mejor que <strong>1080i</strong> (progresivo vs entrelazado).",
    "Temperatura ideal de la sala: <strong>22-24 °C</strong>. Componentes <strong>por los bordes</strong>.",
    "Fuente: <strong>NUNCA</strong> abrirla, ni desenchufada (condensadores).",
    "Secuencia: <strong>placa → micro → RAM → SSD → tarjetas → cables → verificar</strong>.",
    "Refrigeración líquida: primero el que <strong>más calor</strong> disipa; estanqueidad = <strong>verde + negro</strong>.",
    "Primer arranque: «Reboot and select proper boot device» = <strong>buen augurio</strong>.",
    "FSB sube todo (micro + memoria + buses); el multiplicador solo el micro (K/FX).",
    "Preventivo evita; correctivo arregla. La <strong>temperatura</strong> es el enemigo nº 1; la <strong>estática</strong>, el asesino silencioso.",
    "Mojado: <strong>apagar + gel de sílice</strong>; secador <strong>NUNCA</strong>.",
    "Batería de litio: <strong>ni 100 % ni 0 %</strong>; almacenar al <strong>40-60 %</strong>; pierde a partir de <strong>250 ciclos</strong>.",
    "Garantía: <strong>2 años</strong> nuevo, <strong>1 año</strong> segunda mano (Ley 23/2003).",
    "<strong>1 pitido</strong> = BIOS contenta. Lo que más se avería: la <strong>placa</strong>. Lo más fácil: la <strong>fuente</strong>.",
    "Ping en orden: <strong>loopback (127.0.0.1) → router → Internet</strong>.",
    "Voltios = potencial; <strong>amperios = lo que mata</strong>; ohmios = resistencia; vatios = potencia.",
    "Equipos por dentro: <strong>continua</strong>; enchufe: <strong>alterna</strong>.",
    "Fuente: <strong>T</strong>ransformar → <strong>R</strong>ectificar (Graetz) → <strong>F</strong>iltrar → <strong>E</strong>stabilizar (TRFE).",
    "80 PLUS: bronce, plata, oro, platino, <strong>TITANIO</strong> (la más eficiente).",
    "Cables: amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa. Prueba del ventilador: <strong>verde + negro</strong>.",
    "Polímetro: resistencias <strong>sin alimentar</strong>; intensidad <strong>en serie</strong>.",
    "SAI: offline · interactivo (AVR) · online (servidores). Conmuta 2-10 ms. Dimensionar +25 %.",
    "Pantalla a más de <strong>40 cm</strong> y nunca por encima de los ojos.",
    "<strong>Burnout</strong> = trabajador quemado; <strong>mobbing</strong> = acoso. <strong>RoHS</strong> restringe sustancias peligrosas; <strong>gasto vampiro</strong> = consumo en stand by."
  ],

  /* ---------------- APARTADOS (los puntos imprescindibles) ---------------- */
  apartados: [
    {
      titulo: "Tema 1 · Introducción a los equipos y sistemas informáticos",
      html:
        "<p><strong>Idea fuerza</strong>: el hardware es lo tangible y el software, las órdenes. El hardware solo entiende <strong>binario</strong> (0 y 1).</p>" +
        "<h4>Conceptos para no fallar</h4>" +
        "<ul>" +
        "<li><strong>Programa</strong>: conjunto de órdenes con una finalidad. <strong>Suite</strong>: programas compatibles que comparten datos.</li>" +
        "<li><strong>Sistema operativo</strong>: hace de middleware entre programas y hardware. <strong>Firmware</strong>: software dentro del hardware.</li>" +
        "<li><strong>Sistema informático</strong> = HW + SW + recursos humanos.</li>" +
        "<li><strong>CPU</strong> = memoria + procesador. <strong>Procesador</strong> = U. control + U. aritmética.</li>" +
        "</ul>" +
        "<h4>Pasivos vs activos</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th>Pasivos (transmiten / modifican señal)</th><th>Activos (controlan corriente)</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Resistencia</strong> (Ω) — consume potencia</td><td><strong>Pila/batería</strong> — química → eléctrica</td></tr>" +
        "<tr><td><strong>Condensador</strong> (F) — almacena energía</td><td><strong>Transistor</strong> — el más utilizado</td></tr>" +
        "<tr><td><strong>Transformador</strong> — sube/baja voltaje por inducción</td><td><strong>Diodo</strong> — corriente en un solo sentido (ánodo → cátodo)</td></tr>" +
        "<tr><td><strong>Fusible</strong> — protección contra excesos</td><td><strong>Circuito integrado</strong> y <strong>microprocesador</strong></td></tr>" +
        "</tbody></table></div>" +
        "<h4>Memorias</h4>" +
        "<ul>" +
        "<li><strong>Almacenamiento masivo</strong>: no volátil (HDD, SSD, ópticos).</li>" +
        "<li><strong>RAM</strong>: volátil, formada por biestables, necesita refresco. Se mide en <strong>ns</strong>; el disco en <strong>ms</strong>.</li>" +
        "<li><strong>ROM</strong> de solo lectura → <strong>PROM → EEPROM (flash)</strong>. La BIOS reside en una EEPROM.</li>" +
        "<li><strong>Caché</strong>: entre algo rápido y algo lento; más rápida, más cara y de menor capacidad que la RAM.</li>" +
        "</ul>" +
        "<h4>Arranque (6 pasos)</h4>" +
        "<ol>" +
        "<li><strong>Corriente</strong> al equipo.</li>" +
        "<li><strong>BIOS</strong> toma el control.</li>" +
        "<li><strong>POST</strong> — autotest del hardware.</li>" +
        "<li><strong>Sector de arranque</strong> (hardware) del dispositivo.</li>" +
        "<li><strong>Boot Manager</strong> (software): <strong>GRUB</strong> en Linux, <strong>NTLDR</strong> en Windows.</li>" +
        "<li>Se carga el <strong>sistema operativo</strong> en memoria.</li>" +
        "</ol>"
    },

    {
      titulo: "Tema 2 · Elementos internos de un sistema microinformático",
      html:
        "<h4>Conectores que entran en el examen</h4>" +
        "<ul>" +
        "<li><strong>USB</strong>: 2.0 = 480 Mbps · 3.0 = 10× · 3.1 = 10 Gbps. Plug and play y retrocompatibles.</li>" +
        "<li><strong>Thunderbolt</strong> (Apple/Intel): 2 canales de 10 Gbps, hasta 6 dispositivos en cadena.</li>" +
        "<li><strong>Sonido</strong>: verde altavoces, azul entrada, rosa micro. <strong>VGA</strong> analógico; <strong>DVI/HDMI</strong> digitales (HDMI lleva vídeo + audio).</li>" +
        "<li><strong>Internos</strong>: ATX 24 pines (placa), ATX-12V 4/8 (micro), SATA, M.2, CPU/CHA fan, Front Panel, PC speaker.</li>" +
        "</ul>" +
        "<h4>Sockets y BIOS</h4>" +
        "<ul>" +
        "<li><strong>LGA</strong> (Intel): pines en el socket. <strong>PGA</strong> (AMD): pines en el micro. <strong>ZIF</strong>: sin presión.</li>" +
        "<li>BIOS = Basic Input Output System. Datos en <strong>CMOS</strong> + pila <strong>CR-2032 (3,3 V)</strong>. Fabricantes: AMI y AWARD-Phoenix.</li>" +
        "</ul>" +
        "<h4>Memoria RAM</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th></th><th>DDR3</th><th>DDR4</th></tr></thead>" +
        "<tbody>" +
        "<tr><td>Voltaje</td><td>1,5 V</td><td><strong>1,2 V</strong> (−40 % consumo)</td></tr>" +
        "<tr><td>Pines</td><td>240</td><td><strong>288</strong></td></tr>" +
        "<tr><td>Ancho de banda</td><td>—</td><td><strong>+50 %</strong></td></tr>" +
        "<tr><td>Detección de errores</td><td>—</td><td><strong>CRC</strong></td></tr>" +
        "</tbody></table></div>" +
        "<ul>" +
        "<li>Memorias mezcladas → <strong>velocidad de la más lenta</strong>. <strong>SO-DIMM</strong> para portátiles. <strong>ECC</strong> en servidores.</li>" +
        "<li><strong>CL</strong> (latencia): ciclos hasta seleccionar columna (menor = mejor).</li>" +
        "</ul>" +
        "<h4>Microprocesador y gráfica</h4>" +
        "<ul>" +
        "<li><strong>Cachés</strong>: L1 (la más rápida, en el núcleo) → L2 → L3 (más capacidad, más lenta).</li>" +
        "<li><strong>nm</strong>: tecnología de fabricación. <strong>VCore</strong>: voltaje del núcleo. <strong>Hyperthreading</strong>: un núcleo, dos tareas.</li>" +
        "<li><strong>Overclocking</strong>: sobre el nominal; pierde garantía. Intel «K» y AMD FX vienen desbloqueados.</li>" +
        "<li><strong>GPU</strong>: experta en coma flotante; <strong>no</strong> sustituye a la CPU. <strong>PCIe X16</strong> para vídeo, <strong>X1</strong> para red/sonido. <strong>SLI</strong> NVidia, <strong>Crossfire</strong> ATI.</li>" +
        "</ul>"
    },

    {
      titulo: "Tema 3 · Unidades de almacenamiento",
      html:
        "<h4>Disco duro (magnético + digital)</h4>" +
        "<ul>" +
        "<li>Partes: <strong>carcasa, platos, brazos, cabezas, zona de aparcamiento</strong>. Una cabeza por cara; <strong>no tocan</strong> los platos.</li>" +
        "<li>Zonas: <strong>pista, sector (512 B), clúster, sector geométrico, cilindro</strong>. La primera pista es la <strong>más alejada del eje</strong>; las exteriores tienen más sectores.</li>" +
        "<li>Parámetros: densidad, <strong>rpm</strong> (5400/7200/10-15 000), <strong>tiempo de búsqueda</strong> (a la pista) + <strong>latencia</strong> (al sector) = <strong>tiempo de acceso</strong>, tasa de transferencia.</li>" +
        "</ul>" +
        "<h4>SSD y M.2</h4>" +
        "<ul>" +
        "<li>Flash = <strong>no volátil + actualizable + alta densidad</strong>.</li>" +
        "<li>Una SSD = <strong>flash NAND</strong> (almacén) + <strong>SDRAM</strong> (caché) + <strong>controlador</strong> (cerebro).</li>" +
        "<li>En SSD el tiempo de acceso es <strong>constante</strong>; en disco mecánico depende de la fragmentación.</li>" +
        "<li><strong>M.2 NVMe (PCIe)</strong>: hasta <strong>6×</strong> más rápido que SATA; anula el PCIe más cercano. El puerto recibe <strong>energía de la placa</strong>; el cable SATA solo transmite datos.</li>" +
        "</ul>" +
        "<h4>Particiones y formateo</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th></th><th>MBR (1983)</th><th>GPT (UEFI)</th></tr></thead>" +
        "<tbody>" +
        "<tr><td>Particiones primarias</td><td>Máx. <strong>4</strong> (o 3 + 1 extendida)</td><td>Sin esa limitación</td></tr>" +
        "<tr><td>Tamaño máx. de partición</td><td><strong>2 TB</strong></td><td>Mucho mayor</td></tr>" +
        "<tr><td>Redundancia</td><td>No</td><td><strong>Sí</strong> (copias de la tabla)</td></tr>" +
        "<tr><td>Identificador</td><td>—</td><td><strong>GUID</strong> por partición</td></tr>" +
        "</tbody></table></div>" +
        "<ul>" +
        "<li>Sistemas de archivos: <strong>NTFS</strong> (Win), <strong>EXT</strong> (Linux), <strong>HFS+</strong> (Apple), <strong>FAT</strong> (pendrives, SD).</li>" +
        "<li><strong>Alto nivel</strong> (lógico): implanta el SF y borra datos. <strong>Bajo nivel</strong> (físico): de fábrica; casi nunca se repite.</li>" +
        "</ul>"
    },

    {
      titulo: "Tema 4 · Los periféricos",
      html:
        "<h4>Concepto y clasificación</h4>" +
        "<ul>" +
        "<li>Periférico = se conecta y <strong>transmite/recibe</strong> información con <strong>transformación interna</strong>. El <strong>SO</strong> es el intermediario.</li>" +
        "<li><strong>Controladora</strong> (HW, en la placa) + <strong>driver</strong> (SW del fabricante, depende del SO).</li>" +
        "<li>Clásica: E / S / E-S · Moderna: + comunicación y almacenamiento.</li>" +
        "</ul>" +
        "<h4>Entrada</h4>" +
        "<ul>" +
        "<li><strong>Ratón</strong>: Engelbart, Xerox, 1963. Óptico: sensor compara imágenes; más <strong>dpi</strong>, más preciso.</li>" +
        "<li><strong>Teclado</strong>: matriz de interruptores; al pulsar pasa corriente y se envía un código.</li>" +
        "<li><strong>Escáner</strong>: resolución <strong>ppp/dpi</strong>; <strong>interpolación</strong> deduce píxeles (real &lt; interpolada). <strong>CIS</strong> sin óptica (barato, plano) vs <strong>CCD</strong> con espejos (volumen). <strong>OCR</strong>: caracteres desde imagen.</li>" +
        "<li>Antropométricos: <strong>huella</strong> (puntos), <strong>iris</strong> (surcos del color), <strong>retina</strong> (infrarrojos a venas).</li>" +
        "</ul>" +
        "<h4>Impresoras</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th>Tipo</th><th>Cuándo</th><th>Detalle</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Matricial</strong></td><td>Copias múltiples</td><td>Bancos y entidades</td></tr>" +
        "<tr><td><strong>Tinta</strong></td><td>Doméstica</td><td>Gotas de picolitros; se disuelve con agua</td></tr>" +
        "<tr><td><strong>Láser</strong></td><td>Volumen y calidad</td><td>Tarda en la <strong>primera página</strong></td></tr>" +
        "<tr><td><strong>Ribbon / tiques</strong></td><td>Tiques</td><td>Cinta adherente</td></tr>" +
        "<tr><td><strong>Térmica</strong></td><td>Tiques</td><td>Solo papel térmico</td></tr>" +
        "<tr><td><strong>Plóter</strong></td><td>Gran formato</td><td>Planos, ingeniería</td></tr>" +
        "</tbody></table></div>" +
        "<h4>Impresión 3D</h4>" +
        "<ul>" +
        "<li><strong>ABS</strong>: resistente, deriva del <strong>petróleo</strong>, sensible al calor; <strong>PLA</strong>: <strong>frágil</strong>, biodegradable (vegetal), olor agradable. Ambos se almacenan sellados.</li>" +
        "<li><strong>RepRap</strong> (Adrian Bowyer): GPL, capaces de autorreplicarse. Las piezas no imprimibles son las <strong>vitaminas</strong>.</li>" +
        "<li>Fichero <strong>STL</strong> (geometría) → se transforma a <strong>Gcode</strong> con programas como Cura.</li>" +
        "</ul>" +
        "<h4>Multimedia</h4>" +
        "<ul>" +
        "<li>Micrófono bueno: <strong>alta sensibilidad</strong> + <strong>bajo ruido</strong>. <strong>MIDI</strong>: hasta 16 instrumentos.</li>" +
        "<li>Monitor: <strong>luminancia</strong> (cd/m², 250-350 normal), <strong>dot pitch</strong> menor mejor, <strong>5 ms</strong> tiempo de respuesta. <strong>1080p</strong> (progresivo) &gt; <strong>1080i</strong> (entrelazado). <strong>DLNA</strong>: streaming por red.</li>" +
        "<li>Proyectores: CRT → LCD → <strong>DLP</strong> (más contraste). LED <strong>50 000 h</strong> vs 3000-5000 h incandescente. Luminosidad en <strong>lúmenes</strong>.</li>" +
        "</ul>"
    },

    {
      titulo: "Tema 5 · Ensamblado de equipos",
      html:
        "<h4>Seguridad antes que nada</h4>" +
        "<ul>" +
        "<li>Sala a <strong>22-24 °C</strong>, luz natural, toma de tierra. Quitar batería en portátiles antes de manipular.</li>" +
        "<li>Componentes <strong>por los bordes</strong>; <strong>descargarse</strong> de estática.</li>" +
        "<li><strong>Pasta térmica</strong>: la justa (es más termoconductora que el aire). Se limpia con <strong>alcohol isopropílico</strong>. Más plata = más termoconductora y más cara.</li>" +
        "<li><strong>NUNCA</strong> abrir la <strong>fuente de alimentación</strong>, ni desenchufada: sus condensadores guardan energía.</li>" +
        "</ul>" +
        "<h4>Secuencia de montaje (7 pasos)</h4>" +
        "<ol>" +
        "<li><strong>Caja y placa</strong>: la <strong>máscara</strong> del chasis es la toma de tierra.</li>" +
        "<li><strong>Micro</strong>: <strong>LGA</strong> (Intel, pines en la placa) o <strong>PGA</strong> (AMD, pines en el micro). El <strong>chaflán</strong> debe coincidir. <strong>ZIF</strong> sin fuerza. Disipador en cruz; conector de <strong>4 pines (PWM)</strong>.</li>" +
        "<li><strong>RAM</strong>: dual/triple/quad channel = mismo modelo, si no, todo a la velocidad de la más lenta.</li>" +
        "<li><strong>SSD</strong>: igual que discos mecánicos/ópticos; conectar SATA + alimentación; configurar en BIOS y particionar.</li>" +
        "<li><strong>Tarjetas</strong> (opcional): wifi en PCIe X1; vídeo en X16.</li>" +
        "<li><strong>Conexionado</strong>: front panel (los <strong>ledes tienen polaridad</strong>), ATX 24 + ATX-12V. Cables USB 3.0 tienen más pines que los 2.0.</li>" +
        "<li><strong>Verificación</strong>: cerrar y arrancar.</li>" +
        "</ol>" +
        "<h4>Refrigeración líquida y revisión</h4>" +
        "<ul>" +
        "<li>Circuito: depósito → bomba → disipador → radiador con ventilador. Primero el componente que <strong>más calor</strong> disipa.</li>" +
        "<li><strong>Prueba de estanqueidad</strong>: puentear <strong>cable verde</strong> del ATX con cualquier <strong>negro</strong> para arrancar la fuente.</li>" +
        "<li>Primer arranque con <strong>caja abierta</strong>. «Reboot and select proper boot device» = <strong>buen augurio</strong> (no hay SO instalado). Entrar a BIOS con <strong>F2</strong> o <strong>Supr</strong>.</li>" +
        "</ul>" +
        "<h4>Overclocking, underclocking y modding</h4>" +
        "<ul>" +
        "<li><strong>Overclocking</strong>: sobre el nominal (pierde garantía). Subir el <strong>FSB</strong> → mejora micro + memoria + buses; subir el <strong>multiplicador</strong> → solo el micro (Intel «K», AMD FX).</li>" +
        "<li><strong>Underclocking</strong>: bajar rendimiento para ahorrar energía.</li>" +
        "<li><strong>Modding</strong>: estética (modder, mod, ledes, fanbus, vúmetros).</li>" +
        "</ul>"
    },

    {
      titulo: "Tema 6 · Mantenimiento de equipos",
      html:
        "<h4>Mantenimiento preventivo</h4>" +
        "<ul>" +
        "<li>En informática <strong>no</strong> se cambian piezas por horas: se siguen <strong>normas de prevención</strong>. <strong>SMART</strong> avisa de fallos en discos mecánicos (no SSD).</li>" +
        "<li><strong>Temperatura</strong> = factor nº 1. A más velocidad / voltaje, más calor. <strong>Cobre</strong> &gt; aluminio (heat pipes). El exceso de pasta térmica calienta más.</li>" +
        "<li><strong>Polvo</strong> reduce la refrigeración; el suelo es donde más hay. Limpiar <strong>al aire libre</strong>; <strong>NUNCA</strong> espráis antipolvo domésticos.</li>" +
        "<li><strong>Mojado</strong>: apagar + desensamblar si se puede + <strong>gel de sílice</strong>. Secador <strong>NUNCA</strong>. Salas húmedas: deshumidificadores.</li>" +
        "<li><strong>Estática</strong> = «asesino silencioso»: pulsera antiestática, evitar <strong>lana</strong> y <strong>vinilo</strong>, tocar metal sin pintar.</li>" +
        "<li><strong>Transporte</strong>: foam (rayaduras), film alveolar (golpes), cacahuetes de poliestireno (relleno), bolsas antiestáticas (descargas).</li>" +
        "</ul>" +
        "<h4>Baterías y garantía</h4>" +
        "<ul>" +
        "<li><strong>Litio</strong>: NO tiene efecto memoria. Pierde a partir de <strong>250 ciclos</strong>. Almacenar al <strong>40-60 %</strong>; <strong>nunca 100 % ni 0 %</strong>; menos de <strong>30 °C</strong>. Cargadores ultrarrápidos = estrés.</li>" +
        "<li><strong>Garantía</strong> Ley 23/2003: <strong>2 años</strong> nuevo, <strong>1 año</strong> segunda mano. Reparación, piezas, mano de obra y envío <strong>gratis</strong>.</li>" +
        "</ul>" +
        "<h4>Detección de averías</h4>" +
        "<ul>" +
        "<li>Pasos: desenchufar / quitar batería → descargarse → <strong>Live CD</strong> para descartar software → comprobar componentes y cambios <strong>uno a uno</strong>.</li>" +
        "<li>Desde la BIOS se monitorizan voltajes, temperatura del micro y velocidad de ventiladores (Health Status).</li>" +
        "</ul>" +
        "<h4>Señales clave</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th>Síntoma</th><th>Causa probable</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>1 pitido</strong> al arrancar</td><td>BIOS contenta</td></tr>" +
        "<tr><td>CMOS checksum / battery failed</td><td><strong>Pila de la BIOS</strong> agotada</td></tr>" +
        "<tr><td>RAM Refresh Failure</td><td>Módulo o slot de RAM</td></tr>" +
        "<tr><td>Timer not operational</td><td><strong>Placa base</strong></td></tr>" +
        "<tr><td>Display Memory Read/Write error</td><td><strong>Tarjeta de vídeo</strong></td></tr>" +
        "<tr><td>Se apaga solo</td><td>Calor (suciedad, ventiladores, pasta…)</td></tr>" +
        "<tr><td>No arranca</td><td>Mínimo: placa + micro + 1 RAM</td></tr>" +
        "</tbody></table></div>" +
        "<ul>" +
        "<li><strong>Placa base</strong> = lo que más se avería. <strong>Fuente</strong> = lo más fácil de comprobar (polímetro / tester).</li>" +
        "<li>Red: <strong>ping 127.0.0.1 → router → Internet</strong>. <strong>ipconfig</strong> (Win) / <strong>ifconfig</strong> (Linux); <strong>ipconfig /all</strong> o <strong>netstat -r</strong> para gateway.</li>" +
        "</ul>" +
        "<h4>Portátiles</h4>" +
        "<ul>" +
        "<li><strong>Caddy</strong>: sustituye el lector óptico por SSD (2.º disco; gasta más batería).</li>" +
        "<li>RAM en <strong>SO-DIMM</strong>. Las <strong>eMMC</strong> van soldadas y no se cambian.</li>" +
        "<li>Pantalla que <strong>parpadea</strong> = <strong>inverter</strong>; <strong>líneas de color</strong> = <strong>flex</strong>. Diagnóstico rápido: probar un monitor externo.</li>" +
        "</ul>"
    },

    {
      titulo: "Tema 7 · Eléctrica, prevención laboral y medioambiente",
      html:
        "<h4>Parámetros eléctricos</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th>Magnitud</th><th>Símbolo</th><th>Unidad</th><th>Detalle</th></tr></thead>" +
        "<tbody>" +
        "<tr><td>Voltaje</td><td>V</td><td>voltios</td><td>Diferencia de potencial · voltímetro</td></tr>" +
        "<tr><td><strong>Intensidad</strong></td><td>I</td><td>amperios</td><td><strong>«Lo que mata»</strong></td></tr>" +
        "<tr><td>Resistencia</td><td>Ω</td><td>ohmios</td><td>Aislantes: plástico · Conductores: plata, cobre</td></tr>" +
        "<tr><td>Potencia</td><td>P</td><td>vatios (W)</td><td>Energía que consume</td></tr>" +
        "</tbody></table></div>" +
        "<p>Equipos por dentro: <strong>continua</strong>. Enchufe: <strong>alterna (~)</strong>.</p>" +
        "<h4>Fuente de alimentación</h4>" +
        "<ul>" +
        "<li>4 pasos (<strong>TRFE</strong>): <strong>Transformación → Rectificación</strong> (puente de Graetz, diodos) <strong>→ Filtrado</strong> (condensadores) <strong>→ Estabilización</strong>.</li>" +
        "<li><strong>80 PLUS</strong>: bronce, plata, oro, platino, <strong>titanio</strong> (la más eficiente). <strong>PFC activo</strong> = calidad. Modulares.</li>" +
        "<li>Conectores: ATX 24, ATX-12V 4/8, SATA, MOLEX. Cables: <strong>amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa</strong>.</li>" +
        "<li>Dos fallos: tensiones incorrectas (difícil) o sin corriente (común). <strong>Prueba del ventilador</strong>: puentear <strong>verde (PS_ON)</strong> con <strong>negro (GND)</strong>.</li>" +
        "</ul>" +
        "<h4>Polímetro</h4>" +
        "<ul>" +
        "<li>Mide: voltaje (CC y CA), intensidad (CC), resistencias, continuidad, diodos y transistores.</li>" +
        "<li>Conmutador en la <strong>escala inmediatamente superior</strong>. Si no se conoce el valor, empezar por la más alta.</li>" +
        "<li>Resistencias: circuito <strong>sin alimentar</strong>. Intensidad: polímetro <strong>en serie</strong>. Manos secas; desconectar puntas al cambiar de escala.</li>" +
        "</ul>" +
        "<h4>SAI</h4>" +
        '<div class="tabla-scroll"><table>' +
        "<thead><tr><th>Tipo</th><th>AVR</th><th>Uso típico</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Offline / stand by</strong></td><td>No</td><td>Doméstico (≤ 2000 VA)</td></tr>" +
        "<tr><td><strong>Interactivo</strong></td><td><strong>Sí</strong></td><td>Pyme (≤ 5000 VA)</td></tr>" +
        "<tr><td><strong>Online</strong></td><td>Sí (inversor activo)</td><td>Servidores</td></tr>" +
        "</tbody></table></div>" +
        "<ul>" +
        "<li>Conmuta en <strong>2-10 ms</strong>. Carga en <strong>VA</strong>; dimensionar <strong>+25 %</strong> y no superar el 75 % de su capacidad.</li>" +
        "<li>Autonomía: a mitad de carga, el <strong>doble</strong> de tiempo (15 min al 50 % → 30 min al 25 %).</li>" +
        "</ul>" +
        "<h4>Prevención laboral y medioambiente</h4>" +
        "<ul>" +
        "<li>Pantalla a <strong>&gt; 40 cm</strong>, entre la horizontal y <strong>60° bajo</strong> ella. Silla giratoria con apoyo lumbar. Cargas: rodillas flexionadas, <strong>espalda recta</strong>.</li>" +
        "<li>Oficina: <strong>20-22 °C invierno</strong> / <strong>24-26 °C verano</strong>; humedad <strong>30-70 %</strong>; ruido <strong>&lt; 55 dB</strong>; extintores de <strong>CO2</strong>. No encadenar regletas.</li>" +
        "<li><strong>Burnout</strong> = trabajador quemado; <strong>mobbing</strong> = acoso laboral.</li>" +
        "<li><strong>RoHS</strong> (2003): restringe plomo, mercurio, cadmio, cromo hexavalente, PBB/PBDE.</li>" +
        "<li><strong>Gasto vampiro</strong>: consumo en stand by (≈ 2,3 % en España). <strong>TDP</strong>: vatios que necesita el procesador. Un portátil consume entre 50 y 85 % menos que un sobremesa (componente que más consume: el <strong>microprocesador</strong>).</li>" +
        "</ul>"
    }
  ],

  /* ---------------- TESTS DE REPASO ---------------- */
  paquetes: [
    /* ================= PAQUETE 1 ================= */
    {
      nombre: "Paquete 1 · Hardware y elementos internos (Temas 1-3)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Cuál de estas definiciones de software es la correcta?",
          opciones: {
            A: "Conjunto de componentes electrónicos del equipo.",
            B: "Conjunto de órdenes intangibles que dirigen al hardware.",
            C: "Hardware especializado del fabricante.",
            D: "Otro nombre para periférico."
          },
          correcta: ["B"],
          explicacion: "El software es lo intangible: las órdenes. El hardware es lo tangible."
        },
        {
          tipo: "unica",
          pregunta: "Un sistema informático está formado por…",
          opciones: {
            A: "Solo hardware y software.",
            B: "Hardware, software y recursos humanos.",
            C: "Procesador, memoria y periféricos.",
            D: "Programas, datos y firmware."
          },
          correcta: ["B"],
          explicacion: "Sistema informático = hardware + software + recursos humanos."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué fórmula es correcta?",
          opciones: {
            A: "CPU = procesador + chipset.",
            B: "CPU = unidad de control + unidad aritmética.",
            C: "CPU = memoria + procesador; procesador = U. control + U. aritmética.",
            D: "Procesador = CPU + RAM."
          },
          correcta: ["C"],
          explicacion: "La CPU es memoria + procesador, y el procesador, U. control + U. aritmética."
        },
        {
          tipo: "multiple",
          pregunta: "Marca los componentes electrónicos PASIVOS.",
          opciones: {
            A: "Resistencia.",
            B: "Transistor.",
            C: "Condensador.",
            D: "Fusible."
          },
          correcta: ["A", "C", "D"],
          explicacion: "Resistencia, condensador y fusible son pasivos. El transistor es activo."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué orden suceden los pasos del arranque?",
          opciones: {
            A: "BIOS → corriente → POST → SO → sector de arranque → Boot Manager.",
            B: "Corriente → POST → BIOS → sector de arranque → Boot Manager → SO.",
            C: "Corriente → BIOS → POST → sector de arranque → Boot Manager → SO.",
            D: "Corriente → BIOS → Boot Manager → POST → SO → sector."
          },
          correcta: ["C"],
          explicacion: "Corriente → BIOS → POST → sector de arranque → Boot Manager → carga del SO."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué afirmación sobre la memoria caché es correcta?",
          opciones: {
            A: "Es más lenta y más barata que la RAM.",
            B: "Es más rápida, más cara y de menor capacidad que la RAM.",
            C: "Es no volátil y se mide en milisegundos.",
            D: "Sustituye al almacenamiento masivo."
          },
          correcta: ["B"],
          explicacion: "La caché es más rápida, más cara y de menor capacidad que la RAM."
        },
        {
          tipo: "unica",
          pregunta: "El conector ATX de la placa base tiene…",
          opciones: {
            A: "20 pines y alimenta el procesador.",
            B: "24 pines y alimenta la placa.",
            C: "4 u 8 pines y alimenta la GPU.",
            D: "8 pines y alimenta el disco SATA."
          },
          correcta: ["B"],
          explicacion: "ATX = 24 pines para la placa; ATX-12V (4/8 pines) para el procesador."
        },
        {
          tipo: "unica",
          pregunta: "Sobre los sockets:",
          opciones: {
            A: "LGA tiene pines en el micro; lo usa AMD.",
            B: "PGA tiene pines en el socket; lo usa Intel.",
            C: "LGA tiene pines en la placa (Intel) y PGA en el micro (AMD).",
            D: "Ambos llevan zócalo ZIF, que necesita mucha fuerza."
          },
          correcta: ["C"],
          explicacion: "Truco: «L» de LGA = «L»a placa (Intel); «P» de PGA = «P»ines en el micro (AMD)."
        },
        {
          tipo: "unica",
          pregunta: "La pila de la BIOS es…",
          opciones: {
            A: "CR-2032 de 3,3 V.",
            B: "CR-2032 de 9 V.",
            C: "Una pila AAA recargable.",
            D: "Una batería de litio de 12 V."
          },
          correcta: ["A"],
          explicacion: "La pila CR-2032 de 3,3 V alimenta la CMOS donde están los datos de la BIOS."
        },
        {
          tipo: "unica",
          pregunta: "Si combinas en la placa dos memorias RAM de distinta velocidad…",
          opciones: {
            A: "El sistema irá a la velocidad de la más rápida.",
            B: "El sistema irá a la velocidad de la más lenta.",
            C: "No arrancará.",
            D: "La velocidad será la media de ambas."
          },
          correcta: ["B"],
          explicacion: "Todo el sistema se ajusta a la velocidad de la memoria más lenta."
        },
        {
          tipo: "unica",
          pregunta: "Diferencias entre DDR4 y DDR3 (elige la opción correcta).",
          opciones: {
            A: "DDR4 usa 1,5 V y 240 pines.",
            B: "DDR4 usa 1,2 V y 288 pines.",
            C: "DDR4 consume un 40 % más que DDR3.",
            D: "DDR3 incorpora CRC para detectar errores."
          },
          correcta: ["B"],
          explicacion: "DDR4 = 1,2 V (−40 % consumo) y 288 pines; DDR3 = 1,5 V y 240 pines. CRC lo añade DDR4."
        },
        {
          tipo: "unica",
          pregunta: "La tarjeta gráfica de vídeo se conecta al puerto…",
          opciones: {
            A: "PCI Express X1.",
            B: "PCI Express X16.",
            C: "M.2 NVMe.",
            D: "ATX-12V."
          },
          correcta: ["B"],
          explicacion: "PCIe X16 para vídeo; X1 para tarjetas de sonido o red."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué partes tiene un disco duro?",
          opciones: {
            A: "Carcasa, platos, brazos, cabezas y zona de aparcamiento.",
            B: "Pista, sector, clúster, sector geométrico y cilindro.",
            C: "Flash NAND, SDRAM y controlador.",
            D: "Carcasa, motor, bobinas y celdas."
          },
          correcta: ["A"],
          explicacion: "Esas son las partes físicas. Las zonas (B) son pista, sector, clúster… Eso es otra cosa."
        },
        {
          tipo: "unica",
          pregunta: "Una SSD se compone de…",
          opciones: {
            A: "Platos magnéticos y cabezas lectoescritoras.",
            B: "Flash NAND, SDRAM (caché) y un controlador.",
            C: "Solo memoria flash.",
            D: "Memoria EEPROM y un motor."
          },
          correcta: ["B"],
          explicacion: "Una SSD contiene flash NAND (almacén), SDRAM (caché) y un controlador (el cerebro)."
        },
        {
          tipo: "unica",
          pregunta: "M.2 NVMe (PCIe) puede ser, respecto al modo SATA, hasta…",
          opciones: {
            A: "2 veces más rápido.",
            B: "10 veces más rápido.",
            C: "6 veces más rápido.",
            D: "Igual de rápido."
          },
          correcta: ["C"],
          explicacion: "M.2 NVMe puede llegar a ser hasta 6 veces más rápido que M.2 en modo SATA."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es una limitación del particionado MBR?",
          opciones: {
            A: "Solo permite 1 partición primaria.",
            B: "No admite particiones de más de 2 TB.",
            C: "Requiere obligatoriamente UEFI.",
            D: "No admite particiones lógicas."
          },
          correcta: ["B"],
          explicacion: "MBR limita a 4 primarias y a particiones de máximo 2 TB; GPT elimina ambas limitaciones."
        },
        {
          tipo: "unica",
          pregunta: "El formateo a alto nivel…",
          opciones: {
            A: "Es el físico, viene hecho de fábrica.",
            B: "Implanta el sistema de archivos y borra la información.",
            C: "Verifica byte a byte y marca los sectores defectuosos.",
            D: "Solo cambia el nombre del volumen."
          },
          correcta: ["B"],
          explicacion: "Alto nivel = lógico, implanta el SF y borra los datos. Bajo nivel = físico, de fábrica."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué afirmaciones sobre el USB son correctas?",
          opciones: {
            A: "USB 2.0 alcanza 480 Mbps.",
            B: "USB 3.0 es 10 veces más rápido que USB 2.0.",
            C: "USB 3.1 alcanza 10 Gbps.",
            D: "USB 3.0 no es retrocompatible con 2.0."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Las versiones USB son retrocompatibles; 2.0 = 480 Mbps, 3.0 ≈ 10× y 3.1 = 10 Gbps."
        },
        {
          tipo: "unica",
          pregunta: "Acerca de las cachés del microprocesador:",
          opciones: {
            A: "L3 es la más rápida y está en el núcleo.",
            B: "L1 es la más rápida y está integrada en el núcleo.",
            C: "L2 está en la placa base.",
            D: "Todas tienen el mismo tamaño."
          },
          correcta: ["B"],
          explicacion: "L1 es la más rápida, en el núcleo. L2 (backside bus). L3 es la más lenta y la de mayor capacidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué sistema de archivos es habitual en pendrives y tarjetas SD?",
          opciones: {
            A: "NTFS.",
            B: "EXT.",
            C: "HFS Plus.",
            D: "FAT."
          },
          correcta: ["D"],
          explicacion: "Pendrives y SD usan FAT; Windows NTFS, Linux EXT y Apple HFS+."
        }
      ]
    },

    /* ================= PAQUETE 2 ================= */
    {
      nombre: "Paquete 2 · Periféricos y ensamblado (Temas 4-5)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es un driver?",
          opciones: {
            A: "El hardware que controla un periférico.",
            B: "El software del fabricante que permite al SO trabajar con el dispositivo.",
            C: "La controladora integrada en la placa base.",
            D: "Un sistema operativo simplificado."
          },
          correcta: ["B"],
          explicacion: "Controladora = hardware (en la placa). Driver = software del fabricante, depende del SO."
        },
        {
          tipo: "unica",
          pregunta: "El ratón fue inventado por…",
          opciones: {
            A: "Steve Jobs en 1984.",
            B: "Douglas Engelbart, en Xerox, en 1963.",
            C: "Bill Gates en 1981.",
            D: "Tim Berners-Lee en 1989."
          },
          correcta: ["B"],
          explicacion: "Engelbart, trabajador de Xerox, lo inventó en 1963."
        },
        {
          tipo: "unica",
          pregunta: "Sobre los escáneres:",
          opciones: {
            A: "CIS lleva espejos y lentes; CCD no.",
            B: "CCD es ideal para documentos planos y muy barato.",
            C: "CIS es más barato y sin óptica; CCD permite digitalizar objetos con volumen.",
            D: "Los dos requieren OCR para funcionar."
          },
          correcta: ["C"],
          explicacion: "CIS = barato, plano, sin óptica. CCD = con óptica, mejor para volumen."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace el OCR?",
          opciones: {
            A: "Reconoce caracteres en una imagen.",
            B: "Aumenta la resolución por interpolación.",
            C: "Convierte el escáner en una impresora.",
            D: "Mide la profundidad de color."
          },
          correcta: ["A"],
          explicacion: "OCR (Object Character Recognition) reconoce caracteres dentro de una imagen."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles de estos escáneres antropométricos están bien descritos?",
          opciones: {
            A: "Iris: surcos de la parte de color.",
            B: "Retina: luz infrarroja al patrón de venas del fondo del ojo.",
            C: "Huella: análisis del calor de la palma.",
            D: "Huella: puntos de referencia."
          },
          correcta: ["A", "B", "D"],
          explicacion: "Huella = puntos; iris = surcos; retina = infrarrojos a las venas. El calor de la palma no es lo habitual."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué se diferencian ABS y PLA?",
          opciones: {
            A: "ABS es biodegradable; PLA viene del petróleo.",
            B: "ABS es resistente y deriva del petróleo; PLA es más frágil y biodegradable.",
            C: "Ambos son derivados del petróleo y biodegradables.",
            D: "PLA aguanta más temperatura que ABS al imprimir."
          },
          correcta: ["B"],
          explicacion: "ABS: resistente, derivado del petróleo. PLA: más frágil, biodegradable (vegetal)."
        },
        {
          tipo: "unica",
          pregunta: "Un fichero STL…",
          opciones: {
            A: "Es directamente imprimible en 3D.",
            B: "Describe la geometría 3D y debe transformarse a Gcode (por ejemplo con Cura).",
            C: "Solo se usa con impresoras de tinta.",
            D: "Contiene la información de color y textura."
          },
          correcta: ["B"],
          explicacion: "STL describe la geometría; para imprimir se traduce a Gcode."
        },
        {
          tipo: "unica",
          pregunta: "Sobre los monitores:",
          opciones: {
            A: "1080i (entrelazado) es mejor que 1080p (progresivo).",
            B: "1080p (progresivo) es mejor que 1080i (entrelazado).",
            C: "Más tiempo de respuesta significa mejor monitor.",
            D: "Dot pitch mayor implica más píxeles."
          },
          correcta: ["B"],
          explicacion: "Progresivo (1080p) muestra todas las líneas a la vez; mejor que entrelazado (1080i)."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la temperatura ideal para una sala de trabajo de montaje?",
          opciones: {
            A: "10-14 °C.",
            B: "16-18 °C.",
            C: "22-24 °C.",
            D: "28-30 °C."
          },
          correcta: ["C"],
          explicacion: "Entre 22 y 24 °C: la temperatura ideal de una oficina/sala de trabajo."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué NUNCA se debe abrir una fuente de alimentación?",
          opciones: {
            A: "Porque emite radiación.",
            B: "Porque sus condensadores pueden estar cargados y producir descargas.",
            C: "Porque pierde inmediatamente la garantía aunque esté operativa.",
            D: "Porque hace caer la potencia eléctrica de la casa."
          },
          correcta: ["B"],
          explicacion: "Los condensadores de la fuente almacenan energía aun desenchufada: pueden descargar."
        },
        {
          tipo: "unica",
          pregunta: "La pasta térmica se aplica porque…",
          opciones: {
            A: "Es más termoconductora que el aire y sella los huecos entre micro y disipador.",
            B: "Refrigera por sí sola sin ayuda del disipador.",
            C: "Sustituye al disipador en equipos pequeños.",
            D: "Aumenta la velocidad del micro."
          },
          correcta: ["A"],
          explicacion: "La pasta sella los huecos; al ser más termoconductora que el aire, mejora la transmisión de calor."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se limpia la pasta térmica antigua?",
          opciones: {
            A: "Con agua y jabón.",
            B: "Con espráis antipolvo domésticos.",
            C: "Con alcohol isopropílico.",
            D: "Con aceite."
          },
          correcta: ["C"],
          explicacion: "El alcohol isopropílico no deja humedad ni residuos."
        },
        {
          tipo: "unica",
          pregunta: "El orden correcto del montaje es…",
          opciones: {
            A: "RAM → micro → placa → SSD → tarjetas → cables → verificar.",
            B: "Placa → micro → RAM → SSD → tarjetas → cables → verificar.",
            C: "Cables → placa → RAM → micro → SSD → tarjetas → verificar.",
            D: "Placa → SSD → RAM → micro → tarjetas → cables → verificar."
          },
          correcta: ["B"],
          explicacion: "Secuencia oficial: placa → micro → RAM → SSD → tarjetas → conexionado → verificación."
        },
        {
          tipo: "unica",
          pregunta: "El conector del disipador con sus 4 pines incluye…",
          opciones: {
            A: "Un cable de tierra extra.",
            B: "El control PWM, que varía la velocidad del ventilador según la temperatura.",
            C: "Un sensor de humedad.",
            D: "Una conexión USB."
          },
          correcta: ["B"],
          explicacion: "El cuarto cable es el control PWM para regular la velocidad del ventilador."
        },
        {
          tipo: "unica",
          pregunta: "En la refrigeración líquida, la prueba de estanqueidad se hace…",
          opciones: {
            A: "Puenteando el cable rojo con el negro de la fuente.",
            B: "Puenteando el cable verde (PS_ON) con un negro (GND) del ATX.",
            C: "Encendiendo el equipo y mirando si hay fugas.",
            D: "Conectando la bomba directamente a la red."
          },
          correcta: ["B"],
          explicacion: "Verde (PS_ON) con negro (GND) arranca la fuente sin placa para probar el circuito de líquido."
        },
        {
          tipo: "unica",
          pregunta: "En el primer arranque ves «Reboot and select proper boot device». Significa que…",
          opciones: {
            A: "Has dañado la placa base.",
            B: "El equipo no tiene corriente.",
            C: "Es un buen augurio: la BIOS funciona, solo falta el sistema operativo.",
            D: "Debes cambiar el microprocesador."
          },
          correcta: ["C"],
          explicacion: "Significa que arranca y busca un sistema operativo; basta instalar el SO."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué afirmaciones sobre el overclocking son ciertas?",
          opciones: {
            A: "Sube la velocidad por encima del nominal.",
            B: "Subir el FSB mejora micro, memoria y buses.",
            C: "Subir el multiplicador mejora todos los componentes.",
            D: "Anula la garantía si no se siguen los consejos del fabricante."
          },
          correcta: ["A", "B", "D"],
          explicacion: "El multiplicador solo mejora el micro (Intel «K», AMD FX). El FSB sí mejora todo."
        },
        {
          tipo: "unica",
          pregunta: "Para entrar a la BIOS en el arranque suelen pulsarse…",
          opciones: {
            A: "F2 o Supr.",
            B: "F12 y Esc.",
            C: "Ctrl+Alt+Supr.",
            D: "Tab."
          },
          correcta: ["A"],
          explicacion: "F2 o Supr son las teclas habituales para entrar en el setup de la BIOS."
        },
        {
          tipo: "unica",
          pregunta: "El modding consiste en…",
          opciones: {
            A: "Cambiar la BIOS por una de otro fabricante.",
            B: "Alterar el equipo para que sea más atractivo (estética).",
            C: "Subir la velocidad del micro.",
            D: "Sustituir piezas defectuosas por nuevas."
          },
          correcta: ["B"],
          explicacion: "Modding: tuneado estético. El modder es la persona; el mod, el equipo tuneado."
        },
        {
          tipo: "unica",
          pregunta: "El ratón óptico funciona…",
          opciones: {
            A: "Con una bola que mueve dos rodillos.",
            B: "Con un sensor/cámara que toma imágenes y las compara con la anterior.",
            C: "Con un láser único que mide distancia al techo.",
            D: "Con un giroscopio."
          },
          correcta: ["B"],
          explicacion: "El sensor toma imágenes por segundo y las compara para detectar el desplazamiento."
        }
      ]
    },

    /* ================= PAQUETE 3 ================= */
    {
      nombre: "Paquete 3 · Mantenimiento, eléctrica y prevención (Temas 6-7)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿En qué consiste el mantenimiento preventivo en informática?",
          opciones: {
            A: "Cambiar todas las piezas cada cierto número de horas.",
            B: "Seguir normas de prevención para alargar la vida útil del equipo.",
            C: "Arreglar las averías cuando aparecen.",
            D: "Sustituir el equipo cada dos años."
          },
          correcta: ["B"],
          explicacion: "Preventivo = evitar averías mediante normas. Correctivo = arreglarlas."
        },
        {
          tipo: "unica",
          pregunta: "El principal factor que degrada la electrónica es…",
          opciones: {
            A: "La luz solar.",
            B: "La temperatura.",
            C: "El ruido ambiental.",
            D: "La radiación cósmica."
          },
          correcta: ["B"],
          explicacion: "La temperatura es, por regla general, el factor más importante."
        },
        {
          tipo: "unica",
          pregunta: "Has mojado un dispositivo. ¿Cómo debes secarlo?",
          opciones: {
            A: "Con un secador a máxima potencia.",
            B: "Apagándolo y usando gel de sílice (silica gel).",
            C: "Dejándolo enchufado al sol directo.",
            D: "Sumergiéndolo en alcohol."
          },
          correcta: ["B"],
          explicacion: "Apagar + gel de sílice. El secador desplaza el agua a otros componentes."
        },
        {
          tipo: "unica",
          pregunta: "Las baterías de litio…",
          opciones: {
            A: "Tienen efecto memoria y conviene cargarlas al 100 %.",
            B: "No tienen efecto memoria; deben almacenarse al 40-60 % y menos de 30 °C.",
            C: "Pierden capacidad al primer ciclo.",
            D: "Mejoran su capacidad con cargadores ultrarrápidos."
          },
          correcta: ["B"],
          explicacion: "Sin efecto memoria. Pierden a partir de 250 ciclos; almacenar al 40-60 % y <30 °C."
        },
        {
          tipo: "unica",
          pregunta: "Según la Ley 23/2003, la garantía de un producto nuevo en España es de…",
          opciones: {
            A: "6 meses.",
            B: "1 año.",
            C: "2 años (1 año en segunda mano).",
            D: "5 años."
          },
          correcta: ["C"],
          explicacion: "2 años para nuevos y 1 año para segunda mano."
        },
        {
          tipo: "unica",
          pregunta: "El mensaje «CMOS checksum error / battery failed» indica…",
          opciones: {
            A: "La RAM está dañada.",
            B: "La pila de la BIOS está agotada.",
            C: "El reloj de la placa base está estropeado.",
            D: "La tarjeta de vídeo no funciona."
          },
          correcta: ["B"],
          explicacion: "Pila CR-2032 agotada: hay que sustituirla."
        },
        {
          tipo: "unica",
          pregunta: "El componente que MÁS se avería es…",
          opciones: {
            A: "La fuente de alimentación.",
            B: "La placa base.",
            C: "El microprocesador.",
            D: "La memoria RAM."
          },
          correcta: ["B"],
          explicacion: "La placa, por la cantidad de circuitos integrados. La fuente, en cambio, es la más fácil de comprobar."
        },
        {
          tipo: "unica",
          pregunta: "Si un equipo no enciende, lo primero es arrancarlo con…",
          opciones: {
            A: "Todos los componentes posibles a la vez.",
            B: "El mínimo: placa, micro y un módulo de RAM.",
            C: "Solo la fuente.",
            D: "Solo el disco duro."
          },
          correcta: ["B"],
          explicacion: "Con el mínimo de componentes, sin disco; si arranca, se van añadiendo el resto."
        },
        {
          tipo: "unica",
          pregunta: "Para diagnosticar problemas de red el orden de ping correcto es…",
          opciones: {
            A: "Internet → router → loopback.",
            B: "Router → loopback → Internet.",
            C: "Loopback (127.0.0.1) → router → Internet.",
            D: "DNS → router → DHCP."
          },
          correcta: ["C"],
          explicacion: "Loopback (pila TCP/IP local) → router (LAN) → Internet (WAN)."
        },
        {
          tipo: "unica",
          pregunta: "En portátiles, si la pantalla parpadea, lo más probable es que falle…",
          opciones: {
            A: "El flex.",
            B: "El inverter.",
            C: "La RAM.",
            D: "El disco duro."
          },
          correcta: ["B"],
          explicacion: "El inverter alimenta la retroiluminación; el flex provoca líneas de color."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué magnitud «es la que mata»?",
          opciones: {
            A: "El voltaje.",
            B: "La intensidad.",
            C: "La resistencia.",
            D: "La potencia."
          },
          correcta: ["B"],
          explicacion: "Una chispa puede tener 1000 V con muy poca intensidad y no matar; lo peligroso es la intensidad."
        },
        {
          tipo: "unica",
          pregunta: "Los equipos por dentro funcionan con corriente… y el enchufe da…",
          opciones: {
            A: "…continua / continua.",
            B: "…alterna / alterna.",
            C: "…continua / alterna.",
            D: "…alterna / continua."
          },
          correcta: ["C"],
          explicacion: "Por dentro continua; el enchufe da alterna (símbolo ~)."
        },
        {
          tipo: "unica",
          pregunta: "Los 4 pasos de la fuente de alimentación, en orden, son:",
          opciones: {
            A: "Filtrado → Transformación → Estabilización → Rectificación.",
            B: "Transformación → Rectificación → Filtrado → Estabilización.",
            C: "Rectificación → Filtrado → Transformación → Estabilización.",
            D: "Estabilización → Filtrado → Rectificación → Transformación."
          },
          correcta: ["B"],
          explicacion: "TRFE: Transformar → Rectificar (puente de Graetz) → Filtrar → Estabilizar."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la certificación 80 PLUS más eficiente?",
          opciones: {
            A: "Bronce.",
            B: "Oro.",
            C: "Platino.",
            D: "Titanio."
          },
          correcta: ["D"],
          explicacion: "Categorías: 80 PLUS, bronce, plata, oro, platino y titanio (la más eficiente)."
        },
        {
          tipo: "unica",
          pregunta: "Los colores de los cables de la fuente ATX son…",
          opciones: {
            A: "Rojo 12 V, amarillo 5 V, naranja 3,3 V, negro masa.",
            B: "Amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa.",
            C: "Negro 12 V, naranja 5 V, amarillo 3,3 V, rojo masa.",
            D: "Verde 12 V, azul 5 V, amarillo 3,3 V, blanco masa."
          },
          correcta: ["B"],
          explicacion: "Amarillo 12 V, rojo 5 V, naranja 3,3 V, negro masa (GND)."
        },
        {
          tipo: "unica",
          pregunta: "La prueba del ventilador (para saber si la fuente arranca) consiste en…",
          opciones: {
            A: "Puentear el cable rojo con uno negro.",
            B: "Puentear el cable verde (PS_ON) con cualquier negro (GND).",
            C: "Conectar el cable amarillo a tierra.",
            D: "Cortocircuitar dos negros del MOLEX."
          },
          correcta: ["B"],
          explicacion: "Puentear verde con negro hace que la fuente entre en marcha."
        },
        {
          tipo: "unica",
          pregunta: "Para medir resistencias con el polímetro…",
          opciones: {
            A: "Debe haber tensión en el circuito.",
            B: "El circuito debe estar SIN alimentar.",
            C: "Hay que conectar el polímetro en serie con la carga.",
            D: "Solo se puede medir en corriente alterna."
          },
          correcta: ["B"],
          explicacion: "Resistencias siempre con el circuito sin alimentar; intensidad sí en serie."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué tipos de SAI existen?",
          opciones: {
            A: "Offline o stand by (sin AVR).",
            B: "Interactivo (con AVR).",
            C: "Online (inversor siempre activo).",
            D: "Pasivo-recargable."
          },
          correcta: ["A", "B", "C"],
          explicacion: "Offline (doméstico), interactivo (AVR, pyme) y online (servidores). El cuarto no existe."
        },
        {
          tipo: "unica",
          pregunta: "Un SAI conmuta entre la red y la batería en…",
          opciones: {
            A: "2-10 milisegundos.",
            B: "2-10 segundos.",
            C: "100-200 ms.",
            D: "Nunca, depende solo del usuario."
          },
          correcta: ["A"],
          explicacion: "De 2 a 10 ms es lo habitual."
        },
        {
          tipo: "unica",
          pregunta: "La normativa RoHS…",
          opciones: {
            A: "Regula el sonido de los altavoces.",
            B: "Restringe sustancias peligrosas (plomo, mercurio, cadmio…) en aparatos electrónicos.",
            C: "Solo se aplica a baterías.",
            D: "Obliga a usar carcasas de aluminio."
          },
          correcta: ["B"],
          explicacion: "RoHS (Restriction of Hazardous Substances, 2003) restringe plomo, mercurio, cadmio…"
        }
      ]
    },

    /* ================= PAQUETE 4 · GLOBAL ================= */
    {
      nombre: "Paquete 4 · Repaso global (Temas 1-7)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es el firmware?",
          opciones: {
            A: "Software que contiene el hardware para operaciones específicas.",
            B: "El sistema operativo de un servidor.",
            C: "Una suite ofimática.",
            D: "Una memoria volátil."
          },
          correcta: ["A"],
          explicacion: "El firmware es software grabado en el hardware (por ejemplo, en una EEPROM)."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué memoria se almacenan los datos de configuración de la BIOS?",
          opciones: {
            A: "En la RAM.",
            B: "En la CMOS.",
            C: "En el chipset.",
            D: "En el sector de arranque."
          },
          correcta: ["B"],
          explicacion: "Los datos viven en la CMOS, alimentada por la pila CR-2032 de 3,3 V."
        },
        {
          tipo: "unica",
          pregunta: "Sobre las cabezas de un disco duro:",
          opciones: {
            A: "Tocan los platos para leer la información.",
            B: "Flotan sobre el plato sin tocarlo.",
            C: "Solo hay una por disco.",
            D: "Son siempre magnéticas y rotativas."
          },
          correcta: ["B"],
          explicacion: "Flotan sin tocar; hay como mínimo dos cabezas por plato (una por cara)."
        },
        {
          tipo: "unica",
          pregunta: "Las características que reúne la memoria flash son…",
          opciones: {
            A: "Volátil + lenta + alta densidad.",
            B: "No volátil + actualizable + alta densidad.",
            C: "Volátil + actualizable + baja densidad.",
            D: "No volátil + solo lectura."
          },
          correcta: ["B"],
          explicacion: "Flash = lo mejor de RAM (densidad), ROM (no volátil) y EEPROM (actualizable)."
        },
        {
          tipo: "multiple",
          pregunta: "Marca las afirmaciones correctas sobre la impresión.",
          opciones: {
            A: "La láser destaca por su coste por página y volumen, pero tarda en la primera página.",
            B: "Las matriciales se usan principalmente para fotos.",
            C: "Las térmicas no necesitan ribbon, solo papel térmico.",
            D: "El plóter sirve para gran formato (planos)."
          },
          correcta: ["A", "C", "D"],
          explicacion: "Las matriciales se usan donde se requieren copias múltiples (bancos), no para fotos."
        },
        {
          tipo: "unica",
          pregunta: "RepRap es…",
          opciones: {
            A: "Un sistema operativo de impresoras.",
            B: "Un proyecto open source de impresoras 3D capaces de autorreplicarse, cuyas piezas no imprimibles se llaman vitaminas.",
            C: "El nombre de la primera impresora láser de color.",
            D: "Una norma para impresoras de tinta."
          },
          correcta: ["B"],
          explicacion: "RepRap (Adrian Bowyer): impresoras GPL que se autorreplican; lo no imprimible se llaman vitaminas."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace el SO respecto a los periféricos?",
          opciones: {
            A: "Es el intermediario entre los periféricos y los programas.",
            B: "Sustituye al driver del fabricante.",
            C: "Controla físicamente cada periférico.",
            D: "Convierte señales analógicas en digitales."
          },
          correcta: ["A"],
          explicacion: "El SO hace de intermediario: toda la información de los periféricos pasa por él."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué pasos sigue una fuente de alimentación durante la rectificación?",
          opciones: {
            A: "Usa un puente de Graetz (diodos) para pasar de alterna a continua.",
            B: "Usa un transformador para bajar el voltaje.",
            C: "Usa condensadores para «aplanar» la señal.",
            D: "Usa un regulador para estabilizarla."
          },
          correcta: ["A"],
          explicacion: "El puente de Graetz, con diodos, convierte alterna en continua durante la rectificación."
        },
        {
          tipo: "multiple",
          pregunta: "Marca las afirmaciones correctas sobre la pasta térmica.",
          opciones: {
            A: "Se aplica la justa, solo para sellar huecos.",
            B: "Es más termoconductora que el aire.",
            C: "Cuanta más plata contenga, mejor termoconducción (y más cara).",
            D: "El exceso de pasta refrigera mucho mejor el micro."
          },
          correcta: ["A", "B", "C"],
          explicacion: "El exceso de pasta es contraproducente: el micro/CI se calientan mucho más."
        },
        {
          tipo: "unica",
          pregunta: "El elemento del chasis que actúa como toma de tierra de los componentes de la placa es…",
          opciones: {
            A: "El ventilador de la caja.",
            B: "La máscara del chasis.",
            C: "El cable de datos SATA.",
            D: "El conector molex."
          },
          correcta: ["B"],
          explicacion: "La máscara del chasis es la toma de tierra de los componentes de la placa base."
        },
        {
          tipo: "unica",
          pregunta: "Sobre la temperatura y los componentes:",
          opciones: {
            A: "A más velocidad o más voltaje/consumo, más calor disipan.",
            B: "El aluminio es mejor termoconductor que el cobre.",
            C: "Las SSD calientan más que los discos mecánicos.",
            D: "El chipset apenas se calienta nunca."
          },
          correcta: ["A"],
          explicacion: "Más velocidad o más voltaje = más calor. El cobre es mejor termoconductor que el aluminio."
        },
        {
          tipo: "unica",
          pregunta: "El «asesino silencioso» del hardware es…",
          opciones: {
            A: "La humedad.",
            B: "La energía estática.",
            C: "El polvo.",
            D: "El sol."
          },
          correcta: ["B"],
          explicacion: "La estática causa daños invisibles e imperceptibles: es el «asesino silencioso»."
        },
        {
          tipo: "unica",
          pregunta: "Un solo pitido al arrancar significa…",
          opciones: {
            A: "Avería en la RAM.",
            B: "La BIOS no encontró fallos en el test inicial.",
            C: "Avería en la placa base.",
            D: "Configuración correcta del SO."
          },
          correcta: ["B"],
          explicacion: "Un único pitido = BIOS contenta (no garantiza que la configuración esté bien)."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de estos errores apunta a una avería de la tarjeta gráfica?",
          opciones: {
            A: "Timer not operational.",
            B: "CMOS checksum error.",
            C: "RAM Refresh Failure.",
            D: "Display Memory Read/Write error."
          },
          correcta: ["D"],
          explicacion: "«Display Memory Read/Write error» indica que la tarjeta de vídeo está estropeada."
        },
        {
          tipo: "unica",
          pregunta: "Un caddy de portátil sirve para…",
          opciones: {
            A: "Ampliar la RAM.",
            B: "Sustituir el lector óptico por un disco/SSD de 2,5\".",
            C: "Conectar un monitor externo.",
            D: "Mejorar la pantalla."
          },
          correcta: ["B"],
          explicacion: "Caddy = adaptador que ocupa el hueco del lector óptico con una unidad de 2,5\". Gasta más batería."
        },
        {
          tipo: "unica",
          pregunta: "Sobre la corriente continua y alterna:",
          opciones: {
            A: "Los equipos internamente usan alterna.",
            B: "El enchufe doméstico suministra alterna y los equipos por dentro usan continua.",
            C: "La continua se identifica con el símbolo ~.",
            D: "La fuente de alimentación convierte continua en alterna."
          },
          correcta: ["B"],
          explicacion: "El enchufe da alterna; los equipos por dentro continua. La fuente convierte alterna→continua."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuánto y cómo dimensionar la carga de un SAI?",
          opciones: {
            A: "Justo lo que consume el equipo, en vatios.",
            B: "Al menos un 25 % por encima de lo necesario, en VA.",
            C: "Un 50 % por debajo de lo necesario, en kWh.",
            D: "No es necesario dimensionarlo."
          },
          correcta: ["B"],
          explicacion: "La carga del SAI se mide en VA y se dimensiona al menos un 25 % por encima."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «gasto vampiro»?",
          opciones: {
            A: "El consumo del SAI.",
            B: "El consumo del equipo en stand by (enchufado y sin usar).",
            C: "El consumo de los SAI offline.",
            D: "El gasto en sustituir baterías."
          },
          correcta: ["B"],
          explicacion: "Consumo en stand by; en España ronda el 2,3 %."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué afirmaciones sobre el puesto de trabajo son correctas?",
          opciones: {
            A: "La pantalla debe estar a más de 40 cm de los ojos.",
            B: "Conviene colocar la pantalla por encima de los ojos.",
            C: "En verano la temperatura recomendada es 24-26 °C.",
            D: "El ruido debería estar por debajo de 55 dB."
          },
          correcta: ["A", "C", "D"],
          explicacion: "La pantalla va entre la horizontal y 60° por debajo, no por encima."
        },
        {
          tipo: "unica",
          pregunta: "Para extinguir un fuego en una sala con equipos informáticos se usa…",
          opciones: {
            A: "Extintor de agua.",
            B: "Extintor de espuma.",
            C: "Extintor de CO2.",
            D: "Mantas mojadas."
          },
          correcta: ["C"],
          explicacion: "El CO2 no daña los equipos electrónicos; el agua o la espuma sí."
        }
      ]
    }
  ]
};
