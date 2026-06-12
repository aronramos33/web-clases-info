/* ============================================================
   tema3.js — Tema 3: Unidades de almacenamiento de la información
   Contenido fiel al capítulo 3 del libro (pp. 65-84).
   ============================================================ */

"use strict";

registrarTema({
  id: 3,
  titulo: "Unidades de almacenamiento de la información",
  descripcionCorta: "Discos duros (partes, zonas y parámetros), dispositivos ópticos, memorias flash, SSD y M.2/NVMe, particionamiento MBR y GPT/UEFI, y formateo a alto y bajo nivel.",

  resumen:
    "<p>Para ejecutar un programa, el sistema copia la información del <strong>almacenamiento secundario a la RAM</strong>. Como la RAM es volátil, los datos deben guardarse de forma definitiva en unidades SSD, discos duros o dispositivos ópticos.</p>" +
    "<p>Los <strong>discos duros</strong> son los únicos dispositivos magnéticos que se usan en la actualidad (cintas y disquetes están obsoletos). Combinan partes mecánicas y electrónicas: son un sistema de grabación <strong>magnético y digital</strong>. Sus partes son carcasa, platos, brazos actuadores, cabezas lectoescritoras y zona de aparcamiento; sus zonas son pista, sector, clúster, sector geométrico y cilindro; y sus parámetros: densidad de grabación, velocidad de rotación, tiempo medio de búsqueda, latencia media, tiempo medio de acceso y tasa de transferencia.</p>" +
    "<p>Las <strong>memorias flash</strong> reúnen lo mejor de RAM (alta densidad), ROM (no volátil) y EEPROM (actualizable). Las <strong>unidades SSD</strong> contienen memoria flash NAND, memoria SDRAM (caché) y un <strong>controlador</strong> (su cerebro). Las <strong>M.2</strong> superan a las SSD SATA en velocidad y pueden funcionar en modo SATA o en modo <strong>PCI-E/NVMe</strong> (hasta 6 veces más rápido).</p>" +
    "<p>La estructura lógica se organiza en <strong>particiones</strong>. El particionamiento <strong>MBR</strong> (desde 1983) limita a 4 particiones primarias y 2 TB por partición; el <strong>GPT</strong> de los sistemas <strong>UEFI</strong> elimina esas limitaciones y añade redundancia. El <strong>formateo a alto nivel</strong> (lógico) implanta un sistema de archivos y borra la información; el <strong>formateo a bajo nivel</strong> (físico) viene hecho de fábrica y casi nunca hay que repetirlo.</p>",

  mapa: [
    {
      titulo: "Dispositivos magnéticos (discos duros)",
      hijos: [
        "Elementos: carcasa, platos, brazos, cabezas, zona de aparcamiento",
        "Zonas: pista, sector, clúster, sector geométrico, cilindro",
        "Parámetros: densidad, rpm, t. búsqueda, latencia, t. acceso, tasa de transferencia"
      ]
    },
    {
      titulo: "Dispositivos ópticos",
      hijos: [
        "CD y DVD: soporte de policarbonato",
        "Información en pits (hoyos) y lands (zonas planas)",
        "No les afectan los campos magnéticos"
      ]
    },
    {
      titulo: "Memorias sólidas (flash)",
      hijos: [
        "No volátiles + actualizables + alta densidad",
        "SSD: flash NAND + SDRAM caché + controlador",
        "M.2: modo SATA o modo PCI-E/NVMe (hasta 6× más rápido)"
      ]
    },
    {
      titulo: "Estructura lógica",
      hijos: [
        "Partición: espacio físico con sistema de archivos independiente",
        "MBR: máx. 4 primarias, particiones de máx. 2 TB",
        "GPT/UEFI: sin esas limitaciones, GUID por partición, redundancia",
        "Formateo a alto nivel (lógico) y a bajo nivel (físico)"
      ]
    }
  ],

  conceptosClave: [
    "Los programas pasan del <strong>almacenamiento secundario a la RAM</strong> para ejecutarse; la RAM es volátil.",
    "Un dispositivo magnético almacena <strong>1 bit por celda</strong> de material magnetizable; celdas más pequeñas = más bits por superficie.",
    "El disco duro es un sistema de grabación <strong>magnético y digital</strong>: tiene partes mecánicas y electrónicas.",
    "<strong>Carcasa</strong>: protege del polvo; tiene orificios de aireación (<em>blowholes</em>) que compensan presiones y hacen de filtro.",
    "<strong>Platos</strong>: donde reside la información; si hay varios, giran todos a la vez.",
    "<strong>Cabezas</strong>: una por cara del plato (mínimo 2 por plato); flotan <strong>sin tocar</strong> la superficie.",
    "<strong>Zona de aparcamiento</strong>: zona rugosa en el interior del plato, con capa de carbono lubricante, donde se aparcan las cabezas.",
    "<strong>Pista</strong>: zona circular; la primera es la <strong>más alejada del eje</strong>; las exteriores tienen más sectores.",
    "<strong>Sector</strong>: división de la pista, generalmente de <strong>512 bytes</strong>. <strong>Clúster</strong>: conjunto de sectores.",
    "<strong>Sector geométrico</strong>: \"ración de tarta\" (sectores contiguos de pistas distintas). <strong>Cilindro</strong>: misma pista en distintos platos.",
    "<strong>Densidad de grabación</strong>: bits o bytes por unidad de espacio (bytes por pulgada cuadrada).",
    "Velocidad de rotación: portátiles <strong>5400 rpm</strong>, sobremesa <strong>7200 rpm</strong>, servidores 10 000-15 000 rpm.",
    "<strong>Tiempo medio de búsqueda</strong>: llegar a la pista (mitad del recorrido completo). <strong>Latencia media</strong>: llegar al sector (media revolución).",
    "<strong>Tiempo medio de acceso</strong> = tiempo medio de búsqueda + latencia media.",
    "Los discos ópticos son de <strong>policarbonato</strong>; la información se graba en <strong>pits</strong> (hoyos) y <strong>lands</strong> (zonas planas).",
    "Memoria flash = <strong>no volátil + actualizable + alta densidad</strong> (une RAM, ROM y EEPROM).",
    "Las flash tienen un número <strong>limitado de lecturas/escrituras</strong>, pero hoy el sistema queda obsoleto antes de alcanzarlo.",
    "Una SSD contiene: <strong>flash NAND</strong> (almacén), <strong>SDRAM</strong> (caché) y <strong>controlador</strong> (el cerebro, del que depende la velocidad).",
    "En una SSD el tiempo de búsqueda y acceso es <strong>constante</strong>; en un disco depende de la fragmentación.",
    "De un disco magnético se puede <strong>recuperar información</strong> tras un fallo; en una SSD, si se destruye la celda, se pierde todo.",
    "<strong>M.2 NVMe (PCI-E)</strong>: hasta <strong>6 veces más rápido</strong> que el modo SATA, pero anula el puerto PCI-E más cercano.",
    "El puerto M.2 recibe <strong>energía de la placa base</strong>; el cable SATA solo transmite datos.",
    "<strong>MBR</strong> (desde 1983): máximo <strong>4 particiones primarias</strong> y particiones de máximo <strong>2 TB</strong>.",
    "Reglas MBR: 0 o 1 extendida; la extendida admite particiones lógicas sin límite; si hay extendida, máximo 3 primarias.",
    "<strong>Partición activa</strong>: la marcada para arrancar; sin ella el sistema no inicia. El <strong>Master Boot</strong> está en el sector 0.",
    "<strong>GPT</strong> (GUID Partition Table): cada partición tiene un GUID único y hay <strong>redundancia</strong> (copias de la tabla en otras zonas).",
    "Ventajas UEFI: inicio más rápido, particiones >2 TB, más fiable, gestión eficiente de energía, más de 4 primarias.",
    "Sistemas de archivos: Apple <strong>HFS Plus</strong>, Windows <strong>NTFS</strong>, Linux <strong>EXT</strong>, tarjetas SD y pendrives <strong>FAT</strong>.",
    "<strong>Formateo a alto nivel</strong> (lógico): implanta el sistema de archivos; borra toda la información.",
    "<strong>Formateo a bajo nivel</strong> (físico): viene de fábrica; verifica byte a byte y marca los defectuosos. Casi nunca hay que repetirlo."
  ],

  frasesMemorizar: [
    "«Partes del disco: Carcasa, Platos, Brazos, Cabezas y Zona de aparcamiento».",
    "«Zonas del disco: Pista, Sector, Clúster, Sector geométrico y Cilindro».",
    "«Tiempo medio de acceso = tiempo medio de búsqueda + latencia media».",
    "«Búsqueda → pista; latencia → sector».",
    "«Una cabeza por cara: un plato, dos cabezas como mínimo».",
    "«Portátil 5400 rpm, sobremesa 7200 rpm».",
    "«El sector mide, generalmente, 512 bytes».",
    "«Flash = RAM (densidad) + ROM (no volátil) + EEPROM (actualizable)».",
    "«SSD por dentro: flash NAND + SDRAM caché + controlador (el cerebro)».",
    "«NVMe = Non-Volatile Memory Express: hasta 6 veces más rápido que M.2 SATA».",
    "«MBR: máximo 4 primarias y 2 TB por partición; con extendida, máximo 3 primarias».",
    "«GPT: GUID único por partición y redundancia de la tabla».",
    "«Sin partición activa, el equipo no arranca».",
    "«Alto nivel = lógico (sistema de archivos); bajo nivel = físico (de fábrica)».",
    "«FAT para pendrives y SD; NTFS Windows; EXT Linux; HFS Plus Apple»."
  ],

  apartados: [
    {
      titulo: "3.1 Introducción",
      html:
        "<p>Para ejecutar un programa, lo normal es que el sistema copie la información del <strong>almacenamiento secundario a la memoria RAM</strong>. Como la RAM es un medio <strong>volátil</strong>, los datos tienen que almacenarse de forma definitiva en otro sitio: las unidades SSD, los discos duros y los dispositivos ópticos (como los DVD) almacenan cualquier tipo de información para que <strong>persista y no se pierda</strong>.</p>"
    },
    {
      titulo: "3.2 Dispositivos magnéticos: los discos duros",
      html:
        "<p>Los discos duros son, hoy, los <strong>únicos dispositivos magnéticos utilizados</strong>: las cintas y los discos flexibles están obsoletos. Todo dispositivo magnético es una superficie rígida con material magnetizable agrupado en <strong>celdas</strong>, cada una de las cuales almacena <strong>1 bit</strong> (dos estados estables: uno o cero; una celda sin magnetizar no puede interpretarse). Si las celdas son más pequeñas, caben más bits en la misma superficie.</p>" +
        "<p>El disco duro tiene partes mecánicas y electrónicas: es un sistema de grabación <strong>magnético y digital</strong>. La información reside en platos metálicos dentro de una carcasa aislada del polvo, con un orificio de aire filtrado (<em>blowhole</em>) que compensa las presiones internas.</p>" +
        "<h4>Partes o elementos de un disco duro</h4>" +
        "<ol>" +
        "<li><strong>Carcasa</strong>: protege el interior del polvo y la suciedad. Sellada de forma incompleta: sus agujeros de aireación (<em>blowholes</em>) compensan los cambios de presión y hacen también de filtro.</li>" +
        "<li><strong>Platos</strong>: donde reside la información (de ahí el nombre «disco»). Los actuales suelen tener un solo plato, pero puede haber varios y todos giran a la vez. Son de metal con material magnetizable o película metálica magnetizable en su superficie.</li>" +
        "<li><strong>Brazos actuadores</strong>: donde se montan las cabezas. Se desplazan de izquierda a derecha (ayudados por la rotación del plato) para acceder a toda la superficie.</li>" +
        "<li><strong>Cabezas lectoescritoras</strong>: leen y escriben la información en el plato. Hay <strong>una cabeza por cara</strong>: un disco con un solo plato tiene dos cabezas. <strong>Flotan sin tocar la superficie</strong>: con la velocidad de giro (hasta 7200 rpm), el rozamiento provocaría un recalentamiento enorme.</li>" +
        "<li><strong>Zona de aparcamiento</strong>: zona en el <strong>interior del plato</strong> donde se «aparcan» las cabezas. Es más rugosa y tiene una capa de carbono que actúa de lubricante y evita que la cabeza se dañe.</li>" +
        "</ol>" +
        "<h4>Zonas de un disco duro</h4>" +
        "<ol>" +
        "<li><strong>Pista</strong>: zona circular del disco. Por convenio, la primera pista es la <strong>más alejada del eje</strong>. Las pistas exteriores son más grandes y tienen más sectores, aprovechando mejor la superficie.</li>" +
        "<li><strong>Sector</strong>: división de la pista; su tamaño general es de <strong>512 bytes</strong>.</li>" +
        "<li><strong>Clúster</strong>: conjunto de sectores.</li>" +
        "<li><strong>Sector geométrico</strong>: sectores pegados unos a otros pero de pistas diferentes; si el plato fuera una tarta, sería una <strong>ración</strong> de la tarta.</li>" +
        "<li><strong>Cilindro</strong>: la misma pista en los distintos platos (los sectores quedan en una zona cilíndrica).</li>" +
        "</ol>" +
        "<h4>Parámetros de un disco duro</h4>" +
        "<table><thead><tr><th>Parámetro</th><th>Qué mide</th></tr></thead><tbody>" +
        "<tr><td><strong>Densidad de grabación</strong></td><td>Bits o bytes por unidad de espacio (normalmente bytes por pulgada cuadrada). Unidad de información = byte; unidad de espacio = pulgada.</td></tr>" +
        "<tr><td><strong>Velocidad de rotación</strong></td><td>En rpm. Portátiles: 5400 rpm (menos consumo y ruido); sobremesa: 7200 rpm; servidores: más de 10 000 o incluso 15 000 rpm. Para compensar menos rpm se puede aumentar la densidad de grabación.</td></tr>" +
        "<tr><td><strong>Tiempo medio de búsqueda</strong></td><td>Tiempo medio en colocarse la cabeza en la <strong>pista</strong> seleccionada: mitad del tiempo de ir de la pista más alejada a la más cercana.</td></tr>" +
        "<tr><td><strong>Latencia media</strong></td><td>Tiempo medio en colocarse en el <strong>sector</strong> (ya en la pista): tiempo de <strong>media revolución</strong> del plato.</td></tr>" +
        "<tr><td><strong>Tiempo medio de acceso</strong></td><td>Búsqueda + latencia: situarse sobre pista y sector seleccionados.</td></tr>" +
        "<tr><td><strong>Tasa de transferencia</strong></td><td>Velocidad a la que se transfiere la información desde o hasta el plato.</td></tr>" +
        "</tbody></table>" +
        "<p><strong>Ejemplo resuelto (libro):</strong> un disco que da 21 600 vueltas en 3 minutos gira a 21 600/3 = <strong>7200 rpm</strong>; su latencia media (media vuelta) es (0,5 · 60)/7200 = <strong>4,16 ms</strong>. Un disco con tasa de 100 Mbps tarda ≈ <strong>4,19 s</strong> en transferir un fichero de 50 MB (50 · 1024 · 1024 · 8 bits / 100·10⁶).</p>"
    },
    {
      titulo: "3.3 Dispositivos ópticos",
      html:
        "<p>Los dispositivos ópticos fueron el medio de instalación de sistemas operativos y un soporte de gran capacidad a bajo coste por bit. Frente a los medios magnéticos de la época: el soporte <strong>duraba muchos años</strong> sin degradarse, <strong>no les afectaban los campos magnéticos</strong> y aguantaban golpes y humedad. Los lectores eran tan económicos que todo equipo traía lector de CD o DVD de serie.</p>" +
        "<p>CD y DVD tienen la misma apariencia externa pero composición diferente; ambos usan soporte de <strong>policarbonato</strong> (material fácil de moldear, flexible y resistente, usado también en gafas). La información se representa con hoyos microscópicos llamados <strong>pits</strong> y zonas planas llamadas <strong>lands</strong>. En los DVD caseros, el láser <strong>quema</strong> zonas con el mismo efecto que un pit. El láser rebota en las zonas planas y no refleja igual en los pits: así el lector interpreta la información.</p>" +
        "<p>Capas de un DVD: <strong>etiqueta → capa de policarbonato → reflector metálico → capa de policarbonato</strong>.</p>" +
        "<p><em>Curiosidades del libro:</em> el agujero interior del CD tiene el tamaño de la moneda de diez céntimos de florín holandés (por Kees Immink, uno de sus inventores); su diámetro es de 12,7 cm para que cupiera en los bolsillos de las camisas (según Sony). Los DVD+R no llevan el logotipo de DVD para no pagar licencia a DVD Forum.</p>"
    },
    {
      titulo: "3.4 Memorias sólidas",
      html:
        "<p>Las memorias sólidas o <strong>memorias flash</strong> están presentes donde se necesita almacenamiento persistente en poco espacio y con poco consumo: tarjetas de memoria, automóviles, electrodomésticos, smartphones, routers, juguetes…</p>" +
        "<h4>Ventajas de las flash frente a los discos duros</h4>" +
        "<ul>" +
        "<li>No tienen partes mecánicas.</li><li>Disipan mucho menos calor.</li><li>La lectura es más rápida.</li>" +
        "<li>El rendimiento no baja cuando el dispositivo está muy lleno.</li><li>Pesan mucho menos.</li><li>Consumen menos energía.</li>" +
        "<li>El tiempo de búsqueda y acceso es <strong>constante</strong>.</li><li>Resisten los golpes.</li><li>No son ruidosas.</li>" +
        "</ul>" +
        "<h4>Propiedades de las memorias flash</h4>" +
        "<p>La flash reúne las características de RAM, ROM y EEPROM:</p>" +
        "<ul>" +
        "<li><strong>No volátiles</strong> (como la ROM, al contrario que la RAM): sin alimentación, la información permanece.</li>" +
        "<li><strong>Actualizables</strong> (como la EEPROM, al contrario que la ROM): son de lectura y escritura.</li>" +
        "<li><strong>Alta densidad</strong> (como la RAM): mucha información en poco espacio, con tecnología de fabricación cada vez menor.</li>" +
        "</ul>" +
        "<p>Tienen un número <strong>limitado de lecturas y escrituras</strong>, pero en las memorias actuales el sistema queda obsoleto mucho antes de alcanzar ese límite. En tarjetas de memoria, el formato <strong>SD</strong> ganó la batalla (frente a MMC, Compact Flash…), y tuvo que sacar el <strong>micro-SD</strong> para dispositivos pequeños como los smartphones.</p>" +
        "<h4>3.4.1 Unidades SSD</h4>" +
        "<p><strong>SSD</strong> = <em>Solid State Drive</em> (unidad de estado sólido). Aunque a veces se les llama «discos SSD», son puramente <strong>electrónicas</strong> (no contienen ningún disco). En su interior hay:</p>" +
        "<ol>" +
        "<li><strong>Memoria no volátil flash</strong> (NAND): la base del almacenamiento.</li>" +
        "<li><strong>Memoria volátil SDRAM</strong>: usada como caché, da la velocidad necesaria.</li>" +
        "<li><strong>Controlador</strong>: el <strong>cerebro</strong> de la unidad; de él depende en gran medida la velocidad. Su función es alargar la vida de la SSD, reducir el gasto y mejorar el rendimiento. Empresas como SandForce solo fabrican controladores y los venden a fabricantes de SSD (Kingston, OCZ, Corsair…).</li>" +
        "</ol>" +
        "<p>Diferencias clave con el disco duro: la SSD <strong>no vibra</strong> (sin partes móviles), sus latencias y tiempos de búsqueda son mucho menores y <strong>constantes</strong> (en un disco dependen de la fragmentación). En cambio, en caso de fallo, de un disco magnético se puede <strong>recuperar la información</strong>; en una SSD, si se destruye la celda, se pierde por completo.</p>" +
        "<p><em>Sabías que…</em> cuando las SSD eran caras y pequeñas se idearon los <strong>discos duros híbridos</strong> (flash como superbúfer/caché + disco tradicional); hoy están obsoletos.</p>" +
        "<h4>3.4.2 Unidades SSD M.2</h4>" +
        "<p>Las SSD SATA han dejado paso a las unidades con socket <strong>M.2</strong>. La diferencia básica entre ambas es la <strong>velocidad</strong>. Las M.2 quedan <strong>a ras de la placa base</strong> y no molestan al insertar otros componentes. El puerto M.2 obtiene la <strong>energía directamente de la placa base</strong> (el cable SATA solo transmite datos); el puerto PCI Express puede ofrecer más de 70 W, aunque una M.2 rara vez demanda más de dos.</p>" +
        "<p>Tienen <strong>dos modos de funcionamiento</strong>:</p>" +
        "<table><thead><tr><th>Modo</th><th>Velocidad</th><th>Observaciones</th></tr></thead><tbody>" +
        "<tr><td><strong>SATA</strong></td><td>Similar o poco superior a una SSD SATA convencional</td><td>—</td></tr>" +
        "<tr><td><strong>PCI-E / NVMe</strong></td><td>Muy superior: hasta <strong>6 veces más rápido</strong></td><td>Anula el puerto PCI-E más cercano</td></tr>" +
        "</tbody></table>" +
        "<p><strong>NVMe</strong> (<em>Non-Volatile Memory Express</em>) se diseñó desde cero aprovechando la baja latencia y el paralelismo del puerto PCI Express, mejorando la transferencia y la eficiencia energética en suspensión o hibernación. Para placas sin conector M.2 existen <strong>adaptadores PCI-E a M.2</strong> (conectores SFF-8639).</p>"
    },
    {
      titulo: "3.5 Estructura lógica de un dispositivo de almacenamiento",
      html:
        "<p>Una <strong>partición</strong> es un espacio físico donde el sistema almacena los datos, con un <strong>sistema de archivos independiente</strong>. Un dispositivo puede tener varias particiones con sistemas de archivos diferentes. Hay dos tipos de particionamiento: <strong>MBR</strong> (tradicional) y <strong>GPT</strong> (actual, de los sistemas UEFI).</p>" +
        "<h4>3.5.1 Particionamiento MBR</h4>" +
        "<p><strong>MBR</strong> = <em>Master Boot Record</em>, formato de particiones usado <strong>desde 1983</strong> y todavía presente en algunos equipos. Sus limitaciones: tamaño máximo de partición de <strong>2 TB</strong> y máximo <strong>4 particiones primarias</strong>. Si se necesitan más particiones, se crean dentro de una <strong>partición extendida</strong>; las creadas dentro se llaman <strong>particiones lógicas</strong>.</p>" +
        "<p>Tipos de particiones MBR: <strong>primaria</strong>, <strong>extendida</strong> (contenedor de lógicas) y <strong>lógica</strong>.</p>" +
        "<p>Reglas del particionamiento MBR:</p>" +
        "<ol>" +
        "<li>En un dispositivo solo puede haber <strong>cero o una</strong> partición extendida.</li>" +
        "<li>Una extendida puede tener cero o muchas particiones lógicas: <strong>no existe límite</strong>.</li>" +
        "<li>Una unidad solo puede tener como máximo <strong>cuatro particiones primarias</strong>.</li>" +
        "<li>Si existe una extendida, solo podrá haber como máximo <strong>tres primarias</strong>.</li>" +
        "</ol>" +
        "<p>La <strong>partición activa</strong> es la marcada como partición de arranque: <strong>sin ella, el sistema no puede iniciarse</strong>. En sistemas legacy, el sector de arranque es el <strong>primer sector del disco (sector cero)</strong>, donde se ubican la tabla de particiones y el gestor de arranque o <strong>Master Boot</strong>: un programa que lee la tabla de particiones y cede el control al sistema operativo de la partición activa.</p>" +
        "<h4>3.5.2 Particionamiento UEFI y particiones GPT</h4>" +
        "<p>El arranque <strong>UEFI</strong> es más moderno que la Legacy BIOS. Sus ventajas:</p>" +
        "<ul>" +
        "<li>El sistema inicia <strong>mucho más rápido</strong> (la más apreciada por el usuario).</li>" +
        "<li>Particiones de <strong>más de 2 TB</strong>.</li>" +
        "<li>Es <strong>más fiable</strong> que la Legacy BIOS.</li>" +
        "<li>Gestiona de forma eficiente la energía y el sistema.</li>" +
        "<li>Más de <strong>cuatro particiones primarias</strong> por unidad.</li>" +
        "</ul>" +
        "<p><strong>GPT</strong> = <em>GUID Partition Table</em>. Cada partición tiene un <strong>GUID</strong> (identificador único global) tan largo que no se repite en ninguna otra partición. Además ofrecen <strong>redundancia</strong>: mientras que en MBR, si se corrompe el sector 0, se pierde la información del disco, GPT guarda <strong>copias en otras zonas</strong> del disco para restaurarla en caso de error.</p>" +
        "<h4>3.5.3 Formateo a alto nivel o formateo lógico</h4>" +
        "<p>Los equipos vienen con el almacenamiento ya formateado; solo hay que reformatear para cambiar las particiones o reinstalar el sistema. <strong>Formatear implica perder toda la información</strong> del dispositivo. El orden es: primero se <strong>particiona</strong> y luego se <strong>formatea lógicamente</strong> para implantar un sistema de archivos. Es el formateo «clásico» al reinstalar de cero un sistema operativo.</p>" +
        "<table><thead><tr><th>Sistema</th><th>Sistema de archivos</th></tr></thead><tbody>" +
        "<tr><td>Apple</td><td><strong>HFS Plus</strong></td></tr>" +
        "<tr><td>Microsoft Windows</td><td><strong>NTFS</strong></td></tr>" +
        "<tr><td>Linux</td><td><strong>EXT</strong></td></tr>" +
        "<tr><td>Tarjetas SD, pendrives…</td><td><strong>FAT</strong> (origen Microsoft, usado por todos los sistemas operativos)</td></tr>" +
        "</tbody></table>" +
        "<h4>3.5.4 Formateo a bajo nivel o formateo físico</h4>" +
        "<p><strong>Nunca hace falta</strong> hacer un formateo físico, salvo contadas ocasiones: los discos vienen <strong>de fábrica formateados a bajo nivel</strong> y ese formato no se pierde. Consiste en <strong>leer y escribir todos los bytes</strong> de la superficie para verificar que funcionan; los bytes defectuosos se <strong>marcan para no volver a usarse</strong>. Regla práctica del libro: si crees que necesitas un formateo a bajo nivel, seguramente lo que necesitas es uno a alto nivel.</p>"
    }
  ],

  glosario: [
    { termino: "Benchmark", definicion: "Programa o utilidad para medir o evaluar el rendimiento de un sistema." },
    { termino: "Buffer", definicion: "Memoria intermedia que se ubica entre un elemento rápido y otro lento, para evitar la ralentización del lento." },
    { termino: "Desfragmentación", definicion: "Reorganización de la información en un disco duro para que el acceso sea más rápido (también llamada compactación). Las SSD, teóricamente, no necesitan desfragmentarse." },
    { termino: "IoT", definicion: "Internet of Things (Internet de las cosas): conexión a Internet de elementos cotidianos (cafetera, luz, frigorífico…) para facilitar la vida a los usuarios." },
    { termino: "Nanotecnología", definicion: "Manipulación de la materia a la escala de átomos y moléculas." },
    { termino: "Policarbonato", definicion: "Material plástico fácil de trabajar y moldear, resistente a impactos y temperatura. Usado en CD y DVD." },
    { termino: "Pulgada", definicion: "Unidad de medida que equivale a 25,4 milímetros (2,54 centímetros)." },
    { termino: "RPM", definicion: "Revoluciones por minuto: vueltas que da un objeto respecto a un eje en un minuto." },
    { termino: "Terabyte", definicion: "Equivale a 1024 GB." },
    { termino: "Wearable", definicion: "Dispositivo electrónico que se lleva puesto (pulsera inteligente, calcetín inteligente, ropa con sensores…)." },
    { termino: "Blowhole", definicion: "Orificio de aireación de la carcasa del disco duro por el que pasa aire filtrado; compensa las presiones internas y hace de filtro." },
    { termino: "Pit / Land", definicion: "Pit: hoyo microscópico de la superficie de un CD/DVD. Land: zona plana sin agujero. El láser refleja distinto en cada uno, representando la información." },
    { termino: "SSD", definicion: "Solid State Drive (unidad de estado sólido): unidad puramente electrónica formada por flash NAND, caché SDRAM y un controlador." },
    { termino: "NVMe", definicion: "Non-Volatile Memory Express: modo de funcionamiento de las M.2 por PCI-E, hasta 6 veces más rápido que el modo SATA." },
    { termino: "SFF-8639", definicion: "Nombre que reciben los adaptadores PCI-E a M.2, para conectar un NVMe en placas sin puerto M.2." },
    { termino: "Partición", definicion: "Espacio físico de un dispositivo de almacenamiento donde el sistema almacena los datos, con un sistema de archivos independiente." },
    { termino: "MBR", definicion: "Master Boot Record: formato de particiones usado desde 1983. Limita a 4 particiones primarias y 2 TB por partición." },
    { termino: "GPT", definicion: "GUID Partition Table: formato de particiones moderno de los sistemas UEFI, con GUID único por partición y redundancia de la tabla." },
    { termino: "GUID", definicion: "Identificador único global de cada partición GPT, lo bastante largo para no repetirse en ningún sistema." },
    { termino: "Partición activa", definicion: "Partición marcada como la de arranque del sistema. Si no existe, el sistema no podrá iniciarse." },
    { termino: "Master Boot", definicion: "Gestor de arranque ubicado en el sector cero: lee la tabla de particiones y cede el control al sistema operativo de la partición activa." },
    { termino: "Formateo a alto nivel", definicion: "Formateo lógico que implanta un sistema de archivos en una partición. Implica perder la información existente." },
    { termino: "Formateo a bajo nivel", definicion: "Formateo físico de fábrica: lee y escribe todos los bytes de la superficie y marca los defectuosos. Casi nunca es necesario repetirlo." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Discos duros: partes, zonas y parámetros (3.1-3.2)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Para ejecutar un programa, lo más normal es que el sistema copie la información…",
          opciones: { A: "De la RAM al almacenamiento secundario", B: "Del almacenamiento secundario a la memoria RAM", C: "De la ROM a la caché", D: "Del registro del procesador al disco" },
          correcta: ["B"],
          explicacion: "El sistema copia la información del almacenamiento secundario a la RAM, que es volátil; por eso los datos deben persistir en SSD, discos u ópticos."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son los únicos dispositivos magnéticos utilizados en la actualidad?",
          opciones: { A: "Las cintas magnéticas", B: "Los discos flexibles", C: "Los discos duros", D: "Las unidades SSD" },
          correcta: ["C"],
          explicacion: "Cintas y discos flexibles han quedado obsoletos; solo se usan los discos duros. Las SSD no son magnéticas, son electrónicas."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuánta información almacena cada celda de material magnetizable?",
          opciones: { A: "1 byte", B: "1 bit", C: "512 bytes", D: "Depende del formato" },
          correcta: ["B"],
          explicacion: "Cada celda almacena 1 bit. Si las celdas son más pequeñas, caben más bits en la misma superficie."
        },
        {
          tipo: "unica",
          pregunta: "Una celda sin magnetizar…",
          opciones: { A: "Representa un cero", B: "Representa un uno", C: "Su contenido no podrá ser interpretado", D: "Se interpreta como espacio libre" },
          correcta: ["C"],
          explicacion: "El material magnetizable tiene dos estados estables (uno o cero); si la celda está sin magnetizar, su contenido no puede interpretarse."
        },
        {
          tipo: "unica",
          pregunta: "El disco duro es un sistema de grabación…",
          opciones: { A: "Óptico y analógico", B: "Magnético y digital", C: "Electrónico puro", D: "Magnético y analógico" },
          correcta: ["B"],
          explicacion: "Contiene partes mecánicas y electrónicas: es un sistema de grabación magnético y digital."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué son los blowholes de un disco duro?",
          opciones: { A: "Los hoyos donde se graba la información", B: "Agujeros de aireación de la carcasa que compensan presiones y hacen de filtro", C: "Las zonas defectuosas marcadas en el formateo", D: "Los conectores de alimentación" },
          correcta: ["B"],
          explicacion: "La carcasa está sellada de forma incompleta: los blowholes dejan pasar aire filtrado, compensan los cambios de presión internos y actúan de filtro."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde reside la información de un disco duro?",
          opciones: { A: "En el controlador", B: "En los brazos actuadores", C: "En los platos", D: "En la zona de aparcamiento" },
          correcta: ["C"],
          explicacion: "Los platos son donde reside la información, y de ellos viene el nombre de «disco» duro. Si hay varios, todos giran a la vez."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántas cabezas lectoescritoras tiene, como mínimo, un disco con un solo plato?",
          opciones: { A: "Una", B: "Dos", C: "Cuatro", D: "Depende de las rpm" },
          correcta: ["B"],
          explicacion: "Hay una cabeza por cara del plato: un disco de un plato tiene dos cabezas (dos por plato, como mínimo)."
        },
        {
          tipo: "unica",
          pregunta: "Las cabezas lectoescritoras de un disco duro…",
          opciones: { A: "Rozan levemente la superficie del plato", B: "Flotan sobre la superficie sin tocarla nunca", C: "Solo tocan el plato al escribir", D: "Están fijas y es el plato el que se desplaza" },
          correcta: ["B"],
          explicacion: "Flotan sin tocar la superficie: a 7200 rpm, el simple rozamiento provocaría un recalentamiento enorme. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde está la zona de aparcamiento de las cabezas?",
          opciones: { A: "En el exterior del plato", B: "En el interior del plato", C: "Fuera de la carcasa", D: "En el brazo actuador" },
          correcta: ["B"],
          explicacion: "Es una zona en el interior del plato, más rugosa, con una capa de carbono que lubrica y evita dañar la cabeza al aparcarla. (La autoevaluación del libro marca como incorrecta la opción «en el exterior».)"
        },
        {
          tipo: "unica",
          pregunta: "Por convenio, la primera pista de un disco es…",
          opciones: { A: "La más cercana al eje", B: "La más alejada del eje", C: "La central", D: "La de la cara inferior" },
          correcta: ["B"],
          explicacion: "La primera pista es la más alejada del eje. Las pistas exteriores son más grandes, tienen más sectores y aprovechan mejor la superficie."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el tamaño general de un sector?",
          opciones: { A: "256 bytes", B: "512 bytes", C: "1024 bytes", D: "4096 bits" },
          correcta: ["B"],
          explicacion: "Las pistas se dividen en sectores cuyo tamaño, generalmente, es de 512 bytes."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un clúster?",
          opciones: { A: "Un conjunto de sectores", B: "Un conjunto de pistas", C: "La misma pista en varios platos", D: "Una ración de la «tarta» del plato" },
          correcta: ["A"],
          explicacion: "Un clúster es un conjunto de sectores. La «ración de tarta» es el sector geométrico y la misma pista en varios platos es el cilindro."
        },
        {
          tipo: "unica",
          pregunta: "Si el plato fuera una tarta, una ración de dicha tarta sería…",
          opciones: { A: "Un cilindro", B: "Un clúster", C: "Un sector geométrico", D: "Una pista" },
          correcta: ["C"],
          explicacion: "El sector geométrico son sectores pegados unos a otros pero de pistas diferentes: la «ración de tarta» del libro."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el cilindro de un disco?",
          opciones: { A: "El eje sobre el que giran los platos", B: "La misma pista en diferentes platos", C: "El conjunto de sectores de una pista", D: "La carcasa cilíndrica del motor" },
          correcta: ["B"],
          explicacion: "Si el disco tiene varios platos, el cilindro es la misma pista en los diferentes platos: los sectores quedan comprendidos en una zona cilíndrica."
        },
        {
          tipo: "unica",
          pregunta: "La densidad de grabación se mide normalmente en…",
          opciones: { A: "Bits por segundo", B: "Bytes por pulgada cuadrada", C: "Revoluciones por minuto", D: "Sectores por pista" },
          correcta: ["B"],
          explicacion: "Es la cantidad de bits o bytes por unidad de espacio: normalmente bytes por pulgada cuadrada (unidad de información = byte; unidad de espacio = pulgada)."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los discos de los portátiles giran a 5400 rpm en vez de a 7200 rpm?",
          opciones: { A: "Porque son más pequeños y no pueden girar más", B: "Para evitar mucho consumo y reducir el nivel sonoro", C: "Porque el estándar SATA lo limita", D: "Para aumentar el tiempo de búsqueda" },
          correcta: ["B"],
          explicacion: "Giran más despacio para consumir menos y hacer menos ruido; a veces se compensa aumentando la densidad de grabación. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "La latencia media de un disco corresponde a…",
          opciones: { A: "El tiempo de ir de la pista más alejada a la más cercana", B: "El tiempo que tarda el plato en dar media revolución", C: "La suma de búsqueda y acceso", D: "El tiempo de transferir un sector" },
          correcta: ["B"],
          explicacion: "Es el tiempo medio en colocarse en el sector seleccionado (ya en la pista): media vuelta del plato. La búsqueda se refiere a la pista."
        },
        {
          tipo: "unica",
          pregunta: "El tiempo medio de acceso es…",
          opciones: { A: "La mitad del tiempo de búsqueda", B: "La latencia media menos el tiempo de búsqueda", C: "La suma del tiempo medio de búsqueda más la latencia media", D: "El inverso de la tasa de transferencia" },
          correcta: ["C"],
          explicacion: "Acceso = búsqueda (situarse en la pista) + latencia (situarse en el sector)."
        },
        {
          tipo: "unica",
          pregunta: "Un disco da 21 600 vueltas en tres minutos. ¿Cuál es su velocidad de rotación?",
          opciones: { A: "5400 rpm", B: "7200 rpm", C: "10 800 rpm", D: "21 600 rpm" },
          correcta: ["B"],
          explicacion: "21 600 / 3 = 7200 rpm. Su latencia media (media vuelta) sería (0,5 · 60)/7200 = 4,16 ms. (Ejercicio resuelto del libro.)"
        }
      ]
    },
    {
      nombre: "Paquete 2 · Dispositivos ópticos y memorias sólidas (3.3-3.4)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿De qué material están formados los discos ópticos (CD y DVD)?",
          opciones: { A: "Polipropileno", B: "Policarbonato", C: "Metacrilato", D: "Silicio" },
          correcta: ["B"],
          explicacion: "Ambos usan soporte de policarbonato: material fácil de moldear, flexible y resistente (también usado en gafas)."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué ventajas tenían los discos ópticos frente a los medios magnéticos de su época? (elige todas las correctas)",
          opciones: { A: "No les afectaban los campos magnéticos", B: "Aguantaban golpes y humedad", C: "La información no se degradaba en muchos años con cuidados básicos", D: "Tenían menor capacidad y mayor coste por bit" },
          correcta: ["A", "B", "C"],
          explicacion: "No les afectan los campos magnéticos, aguantan golpes y humedad y el soporte dura años sin degradarse. Eran de mucha capacidad y BAJO coste por bit, así que D es falsa."
        },
        {
          tipo: "unica",
          pregunta: "En un CD/DVD, los hoyos microscópicos donde no refleja igual el láser se llaman…",
          opciones: { A: "Lands", B: "Pits", C: "Celdas", D: "Clústeres" },
          correcta: ["B"],
          explicacion: "Los hoyos son los pits; las zonas planas sin agujero son los lands. El láser rebota en las zonas planas y no refleja igual en los pits."
        },
        {
          tipo: "unica",
          pregunta: "En los DVD caseros (grabables), el efecto del pit se consigue…",
          opciones: { A: "Perforando el soporte mecánicamente", B: "Quemando ciertas zonas con el láser", C: "Magnetizando celdas", D: "Imprimiendo tinta reflectante" },
          correcta: ["B"],
          explicacion: "En vez de hoyos, el láser quema ciertas zonas y el efecto es el mismo que el de un pit."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el orden correcto de las capas de un DVD?",
          opciones: { A: "Etiqueta, policarbonato, reflector metálico, policarbonato", B: "Reflector, etiqueta, policarbonato, policarbonato", C: "Policarbonato, etiqueta, reflector, policarbonato", D: "Etiqueta, reflector, policarbonato, reflector" },
          correcta: ["A"],
          explicacion: "Capas de un DVD (figura 3.7 del libro): etiqueta → capa de policarbonato → reflector metálico → capa de policarbonato."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los DVD+R no llevan el logotipo de DVD?",
          opciones: { A: "Por ser un formato pirata", B: "Para no pagar licencia a DVD Forum y abaratar el soporte", C: "Porque no son compatibles con lectores DVD", D: "Por una exigencia de Sony" },
          correcta: ["B"],
          explicacion: "Los DVD+R no llevan el logotipo de DVD ni el formato −R para no pagar licencia a DVD Forum; así los soportes salen algo más económicos."
        },
        {
          tipo: "unica",
          pregunta: "¿Es cierto que las rpm de una unidad SSD son constantes por ser un dispositivo electrónico?",
          opciones: { A: "Sí, giran siempre a velocidad constante", B: "No: una SSD no tiene partes que giren, no tiene rpm", C: "Sí, pero solo en modo NVMe", D: "Solo si tiene caché SDRAM" },
          correcta: ["B"],
          explicacion: "Pregunta trampa (actividad propuesta del libro): la SSD es puramente electrónica, sin partes mecánicas ni giro, así que no tiene rpm."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué ventajas tienen las memorias flash frente a los discos duros tradicionales? (elige todas las correctas)",
          opciones: { A: "No tienen partes mecánicas", B: "El rendimiento no baja cuando el dispositivo está muy lleno", C: "El tiempo de búsqueda y acceso es constante", D: "Se puede recuperar mejor la información si se destruye una celda" },
          correcta: ["A", "B", "C"],
          explicacion: "A, B y C son ventajas del libro (además: menos calor, lectura más rápida, menos peso, menos consumo, resistencia a golpes y silencio). D es al revés: en una SSD, si se destruye la celda, la información se pierde por completo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son las tres propiedades de las memorias flash?",
          opciones: { A: "No son volátiles", B: "Son actualizables", C: "Alta densidad", D: "Lecturas y escrituras ilimitadas" },
          correcta: ["A", "B", "C"],
          explicacion: "La flash une lo mejor de ROM (no volátil), EEPROM (actualizable) y RAM (alta densidad). Las lecturas/escrituras son limitadas, aunque el límite ya es difícil de alcanzar."
        },
        {
          tipo: "unica",
          pregunta: "Las memorias flash aúnan las características de…",
          opciones: { A: "RAM, ROM y EEPROM", B: "Caché, registros y RAM", C: "HDD, SSD y M.2", D: "SDRAM, VRAM y GDDR" },
          correcta: ["A"],
          explicacion: "Figura 3.8 del libro: alta densidad de la RAM + no volátil de la ROM + actualizable de la EEPROM = FLASH."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué formato de tarjeta de memoria «ganó la batalla» a MMC y Compact Flash?",
          opciones: { A: "Memory Stick", B: "SD", C: "xD", D: "SmartMedia" },
          correcta: ["B"],
          explicacion: "El formato SD se impuso, y tuvo que sacar el micro-SD para dispositivos pequeños como los smartphones, porque el SD era demasiado grande."
        },
        {
          tipo: "unica",
          pregunta: "SSD es el acrónimo de…",
          opciones: { A: "Super Speed Drive", B: "Solid State Drive", C: "Solid Storage Device", D: "Serial State Disk" },
          correcta: ["B"],
          explicacion: "Solid State Drive: unidad de estado sólido. Aunque a veces se les llama «discos SSD», no contienen ningún disco: son puramente electrónicas."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué contienen en su interior las unidades SSD? (elige todas las correctas)",
          opciones: { A: "Memoria no volátil flash", B: "Memoria volátil SDRAM usada como caché", C: "Un controlador", D: "Un plato de pequeño tamaño" },
          correcta: ["A", "B", "C"],
          explicacion: "SSD = flash NAND (almacén) + SDRAM (caché que da velocidad) + controlador (el cerebro). No tienen ningún plato ni parte mecánica."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la pieza fundamental de una unidad SSD, de la que dependen sus prestaciones?",
          opciones: { A: "La memoria flash NAND", B: "La caché SDRAM", C: "El controlador", D: "El conector SATA" },
          correcta: ["C"],
          explicacion: "El controlador es el cerebro de la SSD: alarga su vida, reduce el gasto y mejora el rendimiento. Empresas como SandForce solo fabrican controladores y los venden a Kingston, OCZ, Corsair…"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué eran los discos duros híbridos?",
          opciones: { A: "Discos con dos motores", B: "Memoria flash como superbúfer/caché combinada con un disco tradicional", C: "Dos SSD en RAID", D: "Discos con doble interfaz SATA y M.2" },
          correcta: ["B"],
          explicacion: "Cuando las SSD eran caras y pequeñas, los híbridos combinaban flash (como caché) con disco tradicional. Hoy están obsoletos al abaratarse las SSD."
        },
        {
          tipo: "unica",
          pregunta: "La diferencia básica entre una unidad SSD SATA y una M.2 es…",
          opciones: { A: "La capacidad", B: "La velocidad", C: "El tipo de memoria flash", D: "El sistema de archivos" },
          correcta: ["B"],
          explicacion: "Según el libro, la diferencia entre una SSD SATA y una M.2 es, básicamente, la velocidad."
        },
        {
          tipo: "unica",
          pregunta: "¿De dónde obtiene la energía el puerto M.2?",
          opciones: { A: "De un cable de alimentación SATA", B: "Directamente de la placa base", C: "De un conector Molex", D: "De la fuente mediante cable de 4 pines" },
          correcta: ["B"],
          explicacion: "El puerto M.2 obtiene la energía directamente de la placa base, a diferencia del cable SATA, que solo transmite datos. El PCI-E puede dar más de 70 W, aunque una M.2 rara vez pide más de dos."
        },
        {
          tipo: "unica",
          pregunta: "NVMe es el acrónimo de…",
          opciones: { A: "New Volume Multiple Express", B: "New Volume Memory Express", C: "Non-Volatile Memory Extended", D: "Non-Volatile Memory Express" },
          correcta: ["D"],
          explicacion: "Non-Volatile Memory Express: diseñado desde cero para aprovechar la baja latencia y el paralelismo del puerto PCI Express. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántas veces puede llegar a ser más rápida una M.2 NVMe PCI-E que una M.2 en modo SATA?",
          opciones: { A: "2 veces", B: "4 veces", C: "6 veces", D: "10 veces" },
          correcta: ["C"],
          explicacion: "El modo PCI-E/NVMe puede llegar a ser 6 veces más rápido. Su única desventaja: anula el puerto PCI-E más cercano. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Para conectar un NVMe en una placa sin puerto M.2 se puede usar…",
          opciones: { A: "Un adaptador PCI-E a M.2 (conector SFF-8639)", B: "Un cable SATA III", C: "Un adaptador USB 2.0", D: "No es posible conectarlo" },
          correcta: ["A"],
          explicacion: "Existen adaptadores PCI-E a M.2, llamados también conectores SFF-8639, para placas que no disponen de puerto M.2."
        }
      ]
    },
    {
      nombre: "Paquete 3 · Estructura lógica: particiones y formateo (3.5)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué es una partición?",
          opciones: { A: "Un espacio físico donde el sistema almacena los datos, con un sistema de archivos independiente", B: "Un conjunto de sectores contiguos de la misma pista", C: "Una copia de seguridad del disco", D: "El primer sector del disco" },
          correcta: ["A"],
          explicacion: "Una partición es un espacio físico de almacenamiento con su propio sistema de archivos. Un dispositivo puede tener varias particiones con sistemas de archivos diferentes."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son los dos tipos de particionamiento?",
          opciones: { A: "FAT y NTFS", B: "MBR (tradicional) y GPT (actual, de los sistemas UEFI)", C: "Primario y secundario", D: "Lógico y físico" },
          correcta: ["B"],
          explicacion: "MBR es el formato tradicional (desde 1983) y GPT el actual de los sistemas UEFI. FAT y NTFS son sistemas de archivos, no particionamientos."
        },
        {
          tipo: "unica",
          pregunta: "MBR son las siglas de…",
          opciones: { A: "Master Boot Record", B: "Main Boot Region", C: "Master Block Record", D: "Multiple Boot Record" },
          correcta: ["A"],
          explicacion: "Master Boot Record: formato de particiones usado desde 1983 y todavía presente en algunos equipos."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son las limitaciones del particionamiento MBR? (elige todas las correctas)",
          opciones: { A: "Tamaño máximo de partición de 2 TB", B: "Máximo cuatro particiones primarias", C: "Máximo dos sistemas de archivos por disco", D: "No admite particiones lógicas" },
          correcta: ["A", "B"],
          explicacion: "MBR limita a 2 TB por partición y 4 primarias como máximo. Sí admite particiones lógicas (dentro de una extendida) y no limita los sistemas de archivos."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es una partición extendida?",
          opciones: { A: "Una partición primaria de más de 2 TB", B: "Un contenedor de particiones lógicas", C: "La partición donde arranca el sistema", D: "Una partición GPT" },
          correcta: ["B"],
          explicacion: "La extendida es un contenedor de particiones lógicas. Son necesarias porque, sin ellas, un disco MBR solo podría tener cuatro particiones."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántas particiones extendidas puede haber en un dispositivo MBR?",
          opciones: { A: "Hasta cuatro", B: "Cero o una", C: "Una como mínimo", D: "Sin límite" },
          correcta: ["B"],
          explicacion: "Regla 1 del particionamiento MBR: en un dispositivo solamente puede haber cero o una partición extendida."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántas particiones lógicas puede contener una partición extendida?",
          opciones: { A: "Máximo tres", B: "Máximo cuatro", C: "Cero o muchas: no existe límite", D: "Tantas como primarias haya" },
          correcta: ["C"],
          explicacion: "Regla 2: una extendida puede tener cero o muchas particiones lógicas, sin límite."
        },
        {
          tipo: "unica",
          pregunta: "Si en un disco MBR existe una partición extendida, ¿cuántas primarias puede haber como máximo?",
          opciones: { A: "Cuatro", B: "Tres", C: "Dos", D: "Una" },
          correcta: ["B"],
          explicacion: "Regla 4: si existe una extendida, solo podrán existir como máximo tres particiones primarias (la extendida ocupa uno de los cuatro huecos)."
        },
        {
          tipo: "unica",
          pregunta: "¿Puede existir una unidad con dos particiones primarias y dos extendidas?",
          opciones: { A: "Sí, mientras no pasen de cuatro en total", B: "No: como máximo puede haber una partición extendida", C: "Sí, si es GPT… y también en MBR", D: "Solo si las extendidas están vacías" },
          correcta: ["B"],
          explicacion: "No: la regla 1 de MBR dice que solo puede haber cero o una extendida. (Actividad propuesta 3.5 del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Puede existir una unidad MBR con dos particiones primarias y tres lógicas?",
          opciones: { A: "No, porque suman cinco particiones", B: "Sí, si las lógicas están dentro de una partición extendida", C: "No, las lógicas no pueden convivir con primarias", D: "Solo en discos de más de 2 TB" },
          correcta: ["B"],
          explicacion: "Sí: dos primarias + una extendida (quedan dentro del máximo de 4) y, dentro de la extendida, las tres lógicas (sin límite). (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la partición activa?",
          opciones: { A: "La que está marcada como partición de arranque del sistema", B: "La que más espacio ocupa", C: "La que se está usando en cada momento", D: "La primera partición lógica" },
          correcta: ["A"],
          explicacion: "Es la marcada como partición de arranque. Si no existe una partición activa, el sistema no podrá iniciarse."
        },
        {
          tipo: "unica",
          pregunta: "En sistemas legacy, ¿dónde se ubica el sector de arranque?",
          opciones: { A: "En el último sector del disco", B: "En el primer sector del disco o sector cero", C: "En la partición extendida", D: "En la zona de aparcamiento" },
          correcta: ["B"],
          explicacion: "El sector de arranque es el primer sector (sector cero). Dentro de él están la tabla de particiones y el gestor de arranque o Master Boot."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace el Master Boot?",
          opciones: { A: "Formatea el disco al arrancar", B: "Lee la tabla de particiones y cede el control al sistema operativo de la partición activa", C: "Verifica byte a byte la superficie del disco", D: "Carga los drivers del sistema operativo" },
          correcta: ["B"],
          explicacion: "El Master Boot es un programa que lee la tabla de particiones y cede el control al SO de la partición activa. Si no hay partición activa, el equipo da error al arrancar."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son ventajas de UEFI frente a la Legacy BIOS? (elige todas las correctas)",
          opciones: { A: "El sistema inicia mucho más rápido", B: "Se pueden tener particiones de más de 2 TB", C: "Se pueden tener más de cuatro particiones primarias por unidad", D: "Obliga a usar el sistema de archivos FAT" },
          correcta: ["A", "B", "C"],
          explicacion: "Ventajas de UEFI: inicio más rápido (la más apreciada), particiones >2 TB, más fiabilidad, gestión eficiente de energía y más de 4 primarias. D es falsa."
        },
        {
          tipo: "unica",
          pregunta: "GPT son las siglas de…",
          opciones: { A: "Global Partition Type", B: "GUID Partition Table", C: "General Purpose Table", D: "Grand Partition Tree" },
          correcta: ["B"],
          explicacion: "GUID Partition Table: cada partición tiene un GUID (identificador único global) que no se repite en ningún otro sistema."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué ventaja de redundancia ofrece GPT frente a MBR?",
          opciones: { A: "Duplica todos los datos del usuario", B: "Guarda copias de la tabla en otras zonas del disco para recuperarla si se corrompe", C: "Usa dos discos en espejo", D: "Comprime la información para ocupar la mitad" },
          correcta: ["B"],
          explicacion: "En MBR, si se corrompe el sector 0 se pierde la información del disco; GPT guarda copias en otras zonas y usa una copia para restaurar la tabla errónea."
        },
        {
          tipo: "unica",
          pregunta: "Si se quiere particionar y formatear un dispositivo, ¿en qué orden se hace?",
          opciones: { A: "Primero se formatea y luego se particiona", B: "Primero se particiona y luego se formatea lógicamente", C: "Da igual el orden", D: "Solo hace falta particionar" },
          correcta: ["B"],
          explicacion: "Primero se particiona y luego se formatea a alto nivel (lógicamente) para implantar un sistema de archivos. Recuerda: el formateo implica perder toda la información."
        },
        {
          tipo: "unica",
          pregunta: "Relaciona: ¿qué sistema de archivos usan los dispositivos Apple, Windows y Linux, respectivamente?",
          opciones: { A: "NTFS, EXT, HFS Plus", B: "HFS Plus, NTFS, EXT", C: "EXT, HFS Plus, NTFS", D: "FAT, NTFS, HFS Plus" },
          correcta: ["B"],
          explicacion: "Apple: HFS Plus; Windows: NTFS; Linux: EXT. FAT (origen Microsoft) se usa en tarjetas SD y pendrives, y lo leen todos los sistemas."
        },
        {
          tipo: "unica",
          pregunta: "Un pendrive tiene, generalmente, un sistema de archivos…",
          opciones: { A: "FAT", B: "EXT", C: "HFS", D: "NTFS" },
          correcta: ["A"],
          explicacion: "FAT es originario de Microsoft pero se usa en tarjetas SD, pendrives, etc., y por eso lo utilizan todos los sistemas operativos. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Sobre el formateo a bajo nivel, ¿cuál es la afirmación correcta?",
          opciones: { A: "Hay que repetirlo cada vez que se reinstala el sistema operativo", B: "Los discos vienen de fábrica formateados a bajo nivel y casi nunca hay que repetirlo", C: "Es lo mismo que el formateo lógico", D: "Solo implanta el sistema de archivos" },
          correcta: ["B"],
          explicacion: "El formateo físico viene de fábrica y no se pierde. Lee y escribe todos los bytes de la superficie y marca los defectuosos para no usarlos. Si crees que lo necesitas, seguramente lo que necesitas es un formateo a alto nivel."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema 3",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Elige la opción incorrecta:",
          opciones: { A: "La carcasa de un disco puede tener un orificio donde pasa el aire filtrado", B: "La cabeza lectoescritora es la encargada de leer la información del disco", C: "La zona de aparcamiento es una zona en el exterior del plato", D: "La latencia media es el tiempo medio que tarda la cabeza en colocarse en el sector seleccionado" },
          correcta: ["C"],
          explicacion: "La zona de aparcamiento está en el INTERIOR del plato, no en el exterior. Las demás son correctas. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Con MBR Legacy:",
          opciones: { A: "Se pueden tener más de cuatro particiones primarias", B: "Es más fiable que UEFI/GPT", C: "Se pueden tener dos particiones primarias, una extendida y siete lógicas", D: "Se inicia más rápido que UEFI" },
          correcta: ["C"],
          explicacion: "Dos primarias + una extendida cumplen las reglas, y dentro de la extendida no hay límite de lógicas. MBR no admite más de 4 primarias, es menos fiable que GPT y arranca más lento que UEFI. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Escoge la opción incorrecta:",
          opciones: { A: "Los discos de portátil giran más despacio para consumir menos y hacer menos ruido", B: "La celda de un dispositivo magnético solamente puede tener un uno o un cero", C: "Las pistas están divididas en sectores de, generalmente, 512 bytes", D: "Los discos duros son un sistema de grabación magnético y digital" },
          correcta: ["B"],
          explicacion: "La celda también puede estar SIN magnetizar (y entonces no puede interpretarse), así que no «solamente» puede tener uno o cero. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Elige la opción incorrecta:",
          opciones: { A: "Las cintas son dispositivos ópticos", B: "El tiempo medio de búsqueda es el tiempo medio en colocarse en la pista seleccionada", C: "El agujero interior del CD tiene el tamaño de la moneda de diez céntimos de florín holandés", D: "Los brazos actuadores son el lugar en que se montan las cabezas del disco" },
          correcta: ["A"],
          explicacion: "Las cintas son dispositivos MAGNÉTICOS (hoy obsoletos), no ópticos. Las demás afirmaciones son correctas. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál de las siguientes opciones no es correcta?",
          opciones: { A: "Las cabezas lectoescritoras de un disco rozan levemente la superficie del disco", B: "Los discos duros contienen partes mecánicas y electrónicas", C: "Los MacBook de Apple tienen el disco formateado en HFS+", D: "Un clúster se considera un conjunto de sectores" },
          correcta: ["A"],
          explicacion: "Las cabezas FLOTAN sin tocar nunca la superficie: el rozamiento a 7200 rpm provocaría un recalentamiento enorme. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuántos sistemas operativos se pueden instalar en un disco con dos particiones primarias, una extendida y dos lógicas?",
          opciones: { A: "Ninguno", B: "Dos", C: "Uno", D: "Cuatro" },
          correcta: ["D"],
          explicacion: "Cada partición con sistema de archivos puede alojar un SO: 2 primarias + 2 lógicas = hasta cuatro sistemas operativos. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Es el disco duro un medio de información volátil?",
          opciones: { A: "Sí, pierde los datos al apagarse", B: "No: almacena la información de forma persistente aunque no haya alimentación", C: "Solo si está formateado en FAT", D: "Solo los discos de portátil" },
          correcta: ["B"],
          explicacion: "El disco duro es almacenamiento secundario persistente: la información se graba magnéticamente y no se pierde sin alimentación (a diferencia de la RAM). (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué parte del disco se encarga de leer y escribir la información en su superficie?",
          opciones: { A: "El brazo actuador", B: "La cabeza lectoescritora", C: "El plato", D: "El controlador" },
          correcta: ["B"],
          explicacion: "Las cabezas lectoescritoras leen y escriben en el plato; los brazos solo las desplazan por la superficie. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál será la velocidad de rotación de un disco que da 8100 vueltas en un minuto y medio?",
          opciones: { A: "8100 rpm", B: "5400 rpm", C: "7200 rpm", D: "4050 rpm" },
          correcta: ["B"],
          explicacion: "8100 / 1,5 = 5400 rpm, la velocidad típica de un disco de portátil. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "La cabeza de un disco tarda 12 ms en ir de la pista más cercana al eje a la más alejada y volver. ¿Cuál es el tiempo medio de búsqueda?",
          opciones: { A: "12 ms", B: "6 ms", C: "3 ms", D: "24 ms" },
          correcta: ["C"],
          explicacion: "Ida y vuelta = 12 ms → un recorrido completo = 6 ms. El tiempo medio de búsqueda es la mitad del recorrido completo: 3 ms. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la desfragmentación?",
          opciones: { A: "Dividir el disco en particiones", B: "Reorganizar la información del disco para que el acceso sea más rápido", C: "Borrar los archivos temporales", D: "Marcar los sectores defectuosos" },
          correcta: ["B"],
          explicacion: "También llamada compactación. Las unidades SSD, teóricamente, no necesitan desfragmentarse (su tiempo de acceso es constante). (Glosario del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un buffer?",
          opciones: { A: "Una memoria intermedia entre un elemento rápido y otro lento", B: "Un programa para medir el rendimiento", C: "Una zona del disco para aparcar las cabezas", D: "Una copia de la tabla de particiones" },
          correcta: ["A"],
          explicacion: "Memoria intermedia que evita que el elemento lento ralentice al rápido. El benchmark es el programa de medir rendimiento. (Glosario del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un benchmark?",
          opciones: { A: "Un tipo de partición", B: "Un programa o utilidad para medir o evaluar el rendimiento de un sistema", C: "El controlador de una SSD", D: "Una prueba de arranque UEFI" },
          correcta: ["B"],
          explicacion: "Programa para medir el rendimiento (p. ej., CrystalDiskMark o HD Tune en Windows). Recuerda: no tiene valor hacer la prueba sobre un disco montado y en uso. (Glosario y práctica del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Un terabyte equivale a…",
          opciones: { A: "1000 GB", B: "1024 GB", C: "1024 MB", D: "2048 GB" },
          correcta: ["B"],
          explicacion: "Según el glosario del libro, 1 TB = 1024 GB."
        },
        {
          tipo: "unica",
          pregunta: "Una pulgada equivale a…",
          opciones: { A: "25,4 milímetros", B: "2,54 milímetros", C: "30,48 centímetros", D: "10 milímetros" },
          correcta: ["A"],
          explicacion: "1 pulgada = 25,4 mm = 2,54 cm. Es la unidad de espacio usada en la densidad de grabación. (Glosario del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un wearable?",
          opciones: { A: "Un dispositivo electrónico que se lleva puesto", B: "Un disco extraíble", C: "Una memoria flash industrial", D: "Un electrodoméstico conectado" },
          correcta: ["A"],
          explicacion: "Dispositivo que se lleva puesto: pulsera inteligente, calcetín inteligente, ropa con sensores… La miniaturización de la flash es clave para ellos. (Glosario del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "IoT es el acrónimo de…",
          opciones: { A: "Internet of Things (Internet de las cosas)", B: "Input/Output Technology", C: "Integrated Optical Transfer", D: "Internal Operating Table" },
          correcta: ["A"],
          explicacion: "Conexión a Internet de elementos cotidianos (cafetera, luz, frigorífico…) para facilitar la vida a los usuarios. (Glosario del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "¿En qué se diferencia una unidad SSD de un disco duro tradicional? (elige todas las correctas)",
          opciones: { A: "La SSD no tiene vibraciones al no tener partes móviles", B: "Las latencias y tiempos de búsqueda de la SSD son menores y constantes", C: "De la SSD siempre es más fácil recuperar la información tras un fallo", D: "En el disco, el tiempo de acceso depende de la fragmentación" },
          correcta: ["A", "B", "D"],
          explicacion: "A, B y D son correctas. C es al revés: del disco magnético se puede recuperar información; en la SSD, si se destruye la celda, se pierde por completo."
        },
        {
          tipo: "unica",
          pregunta: "¿Pueden existir, en una unidad SSD, diecisiete sistemas de archivos diferentes?",
          opciones: { A: "No, el máximo es cuatro", B: "Sí, con 17 particiones (p. ej., 3 primarias + 1 extendida con 14 lógicas en MBR), cada una con su sistema de archivos", C: "Solo si la unidad es GPT", D: "No, todos deben ser iguales" },
          correcta: ["B"],
          explicacion: "Cada partición tiene un sistema de archivos independiente y pueden ser distintos. Con la extendida (lógicas sin límite) o con GPT se llega sin problema a 17. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Calcula la velocidad de rotación de un disco que da 25 200 revoluciones en 210 segundos.",
          opciones: { A: "5400 rpm", B: "7200 rpm", C: "10 000 rpm", D: "12 600 rpm" },
          correcta: ["B"],
          explicacion: "210 s = 3,5 min → 25 200 / 3,5 = 7200 rpm. (Ejercicio propuesto del libro.)"
        }
      ]
    }
  ]
});
