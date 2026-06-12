/* ============================================================
   tema6.js — Tema 6: Mantenimiento de equipos microinformáticos
   Contenido fiel al capítulo 6 del libro (pp. 147-186).
   ============================================================ */

"use strict";

registrarTema({
  id: 6,
  titulo: "Mantenimiento de equipos microinformáticos",
  descripcionCorta: "Mantenimiento preventivo, factores que acortan la vida útil, baterías, garantía, detección de averías, señales de la BIOS, fallos comunes y operaciones en portátiles.",

  resumen:
    "<p>En un equipo informático <strong>no se reemplazan piezas cada equis horas</strong> como en un coche o un avión: el <strong>mantenimiento preventivo</strong> consiste en seguir normas de prevención para que el equipo dure más (el <strong>correctivo</strong> arregla las averías). " +
    "Los factores que acortan la vida útil son: la <strong>temperatura</strong> (el factor más importante: a más velocidad y a más voltaje/consumo, más calor; el cobre disipa mejor que el aluminio), el <strong>polvo</strong> (reduce la refrigeración; nunca usar espráis domésticos), " +
    "los <strong>líquidos y la humedad</strong> (apagar el dispositivo mojado y secarlo con <strong>gel de sílice</strong>, nunca con secador), las <strong>descargas electrostáticas</strong> (el «asesino silencioso»: usar pulseras antiestáticas, evitar lana y suelos de vinilo) " +
    "y los <strong>impactos y vibraciones</strong> (foam contra rayaduras, film alveolar contra golpes).</p>" +
    "<p>Las <strong>baterías de litio</strong> no tienen «efecto memoria»: a partir de <strong>250 ciclos</strong> pierden capacidad; no cargarlas nunca al 100 %, no agotarlas, almacenarlas al <strong>40-60 %</strong> y evitar que superen los <strong>30 °C</strong>. " +
    "La <strong>garantía</strong> en España (Ley 23/2003) es de <strong>2 años</strong> (1 año en productos de segunda mano).</p>" +
    "<p>Ante una avería: desenchufar/quitar batería, descargarse, descartar error software con un <strong>Live CD</strong> y comprobar los componentes <strong>uno a uno</strong>. " +
    "Un <strong>único pitido</strong> al arrancar significa que se pasó el test de la BIOS. Mensajes típicos: <em>CMOS checksum error</em> (pila agotada), <em>RAM Refresh Failure</em> (módulo o slot), <em>Timer not operational</em> (placa base). " +
    "La <strong>placa base es el componente que más se avería</strong> (muchos circuitos integrados) y la <strong>fuente, el más fácil de comprobar</strong> (polímetro o tester). " +
    "La conectividad se verifica con <strong>ping</strong> (loopback 127.0.0.1 → router → Internet). En portátiles: ampliar RAM (SO-DIMM), cambiar disco por <strong>SSD</strong> o sustituir el lector óptico por un <strong>caddy</strong> con SSD; " +
    "la pantalla que parpadea suele ser el <strong>inverter</strong>, y las líneas de color, el <strong>flex</strong>.</p>",

  mapa: [
    {
      titulo: "Mantenimiento preventivo",
      hijos: [
        "No se cambian piezas por horas de uso: se siguen normas de prevención",
        "Temperatura: el factor que más degrada (velocidad y voltaje = calor)",
        "Polvo (reduce refrigeración), líquidos (gel de sílice), humedad (deshumidificadores)",
        "Estática: el «asesino silencioso» — pulsera antiestática, evitar lana y vinilo",
        "Baterías de litio: 250 ciclos, ni 100 % ni 0 %, almacenar al 40-60 %, < 30 °C",
        "Garantía: 2 años (Ley 23/2003); segunda mano, 1 año"
      ]
    },
    {
      titulo: "Detección de averías",
      hijos: [
        "Desenchufar/quitar batería, descargarse, Live CD para descartar software",
        "Comprobar componentes y cambios uno a uno",
        "Verificar conexiones internas (ATX, RAM, disipador) y externas",
        "Informe de avería: técnico, cliente, equipo, síntomas, operaciones, coste, garantía",
        "Monitorización desde la BIOS: voltajes, temperatura, ventiladores (dashboard)"
      ]
    },
    {
      titulo: "Señales de aviso",
      hijos: [
        "Un solo pitido al arrancar = test de la BIOS superado",
        "CMOS checksum error / battery failed = pila de la BIOS agotada",
        "RAM Refresh Failure / Memory Test Fail = módulo de RAM o slot",
        "Timer not operational = reloj de la placa base",
        "Ledes: encendido, actividad de discos (¿malware?), transformador del portátil"
      ]
    },
    {
      titulo: "Fallos e incompatibilidades",
      hijos: [
        "Se apaga de repente: normalmente calor (suciedad, ventiladores, pasta, fuente)",
        "No enciende: arrancar con lo mínimo (placa, micro, 1 módulo de RAM)",
        "Sin imagen: monitor externo, Live CD, mínimo de componentes",
        "Placa base = lo que más se avería; fuente = lo más fácil de comprobar",
        "Red: ping a loopback (127.0.0.1) → router → Internet; ipconfig/ifconfig"
      ]
    },
    {
      titulo: "Ampliaciones y portátiles",
      hijos: [
        "Caddy: sustituir el lector óptico por una SSD (2.º disco)",
        "Ampliar RAM (formato SO-DIMM; las eMMC van soldadas)",
        "HDD → SSD: más velocidad, fiabilidad y batería; menos espacio",
        "Cargador: medir voltaje con polímetro; teclado: cuidado con el flex",
        "Pantalla: inverter (parpadeo), flex (líneas de color), probar monitor externo"
      ]
    }
  ],

  conceptosClave: [
    "En informática <strong>no se reemplazan piezas periódicamente</strong> como prevención: no es económico ni razonable. Se siguen <strong>normas de prevención</strong>.",
    "<strong>SMART</strong> permite prever si un disco mecánico va a fallar: debe estar <strong>habilitado en la BIOS</strong> y tener un <strong>agente instalado</strong>. No existe en las SSD.",
    "La <strong>temperatura</strong> es, por regla general, el <strong>factor más importante</strong> en la degradación de un dispositivo electrónico.",
    "Reglas del calor: <strong>a más velocidad, más calor</strong>; <strong>a más voltaje o consumo, más calor</strong>.",
    "Los que más se calientan: <strong>microprocesador, chipset y GPU</strong>. El cambio de estado de los transistores disipa energía en forma de calor.",
    "Los fabricantes aumentan los <strong>núcleos</strong> para rendir más con <strong>menos velocidad de reloj</strong>; tecnologías de fabricación menores = menos consumo y calor.",
    "El <strong>cobre es mejor termoconductor que el aluminio</strong>: disipadores y heat pipes de cobre son mejores. Un chasis de aluminio disipa mejor que uno de plástico.",
    "El <strong>exceso de pasta térmica</strong> provoca que el micro o el circuito integrado se calienten <strong>mucho más</strong>.",
    "El <strong>polvo</strong> reduce la refrigeración y obstruye rejillas y ventiladores. El <strong>suelo</strong> es donde más polvo hay: evitar poner equipos sobre él (usar filtros antipolvo).",
    "<strong>Nunca</strong> usar espráis antipolvo <strong>domésticos</strong>: sus compuestos pueden inutilizar teclados y componentes. Limpiar el polvo interno <strong>al aire libre</strong>.",
    "Dispositivo mojado: <strong>apagarlo</strong>, desensamblarlo si se puede y secarlo con <strong>gel de sílice</strong> (silica gel). <strong>Nunca usar secador</strong> (desplaza el agua a otros componentes); mejor sol de forma indirecta.",
    "En salas muy húmedas (p. ej., de servidores) se instalan <strong>deshumidificadores</strong>.",
    "La energía electrostática es el <strong>«asesino silencioso»</strong>: descargas de cientos o miles de voltios (con muy poca intensidad) que casi nunca se perciben.",
    "Contra la estática: <strong>pulseras antiestáticas</strong>, espráis antiestáticos en suelos, tocar <strong>objetos metálicos sin pintar</strong>, evitar <strong>jerséis de lana</strong> y <strong>suelos de vinilo</strong>.",
    "Transporte: <strong>foam</strong> contra rayaduras, <strong>film alveolar</strong> (burbujas) contra golpes, <strong>cacahuetes de poliestireno</strong> de relleno y <strong>bolsas antiestáticas</strong> contra descargas.",
    "Los <strong>discos mecánicos</strong> son muy sensibles a golpes y vibraciones, sobre todo <strong>en funcionamiento</strong>.",
    "Las <strong>baterías de litio no tienen «efecto memoria»</strong> (las antiguas de níquel-metal hidruro, sí): las <strong>descargas parciales</strong> no son perjudiciales, alargan su vida.",
    "A partir de <strong>250 ciclos</strong>, las baterías empiezan a <strong>perder capacidad</strong> de carga. Un ciclo = una carga + una descarga.",
    "Batería de litio: <strong>no cargarla nunca al 100 %</strong>, no agotarla, almacenarla al <strong>40-60 %</strong> (como vienen de fábrica) y evitar más de <strong>30 °C</strong>. Los <strong>cargadores ultrarrápidos</strong> la estresan.",
    "Garantía (Ley 23/2003): mínimo <strong>2 años</strong>; productos de <strong>segunda mano, 1 año</strong>. Reparación, piezas, mano de obra y envío <strong>gratis</strong>.",
    "Ante una avería: desenchufar/quitar batería, descargarse, descartar software con un <strong>Live CD</strong>, comprobar componentes y cambios <strong>uno a uno</strong>.",
    "Desde la BIOS se monitorizan <strong>voltajes (procesador y chipset), temperatura del micro y velocidad de los ventiladores</strong> (dashboard, Health Status, Hardware Monitoring).",
    "<strong>Un único pitido</strong> al arrancar = la BIOS no encontró fallos de hardware (no significa que la configuración sea correcta). Si no suena, puede no haber <strong>speaker</strong>.",
    "<strong>CMOS checksum error / CMOS battery failed</strong>: la <strong>pila de la BIOS</strong> se ha agotado → sustituirla.",
    "<strong>RAM Refresh Failure / Memory Test Fail</strong>: probar el módulo en <strong>otro banco</strong>; si persiste, sustituir el módulo.",
    "<strong>Timer not operational</strong>: el reloj de la placa está estropeado → seguramente cambiar la <strong>placa base</strong>.",
    "<strong>Display Memory Read/Write error</strong>: la <strong>tarjeta de vídeo</strong> está estropeada.",
    "Led de actividad del disco con <strong>actividad excesiva</strong> sin trabajar → posible <strong>malware</strong>; continuamente encendido → problema en el sistema.",
    "Equipo que <strong>se apaga de repente</strong>: normalmente <strong>calor</strong> (suciedad, ventiladores, pasta térmica) o fuente sin potencia suficiente.",
    "Equipo que <strong>no enciende</strong> o sin imagen: arrancar con el <strong>mínimo de componentes</strong> (placa, micro y 1 módulo de RAM; el disco no es necesario).",
    "La <strong>placa base es el elemento que más se avería</strong> (gran número de circuitos integrados). La <strong>fuente es lo más fácil de comprobar</strong>: polímetro o tester.",
    "Red: ping a <strong>loopback (127.0.0.1 / ::1)</strong> → ping al <strong>router</strong> → ping a <strong>Internet</strong>. IP con <strong>ifconfig</strong> (Linux) / <strong>ipconfig</strong> (Windows); gateway con <strong>ipconfig /all</strong> o <strong>netstat -r</strong>.",
    "Las <strong>SSD/NVMe</strong> son mejores para portátiles: más resistentes a golpes y disipan menos calor (menos consumo).",
    "<strong>Caddy</strong>: adaptador que sustituye el lector óptico por un disco/SSD de 2,5\". Ventaja: segundo disco; desventaja: <strong>mayor consumo de batería</strong>.",
    "La RAM de portátil es igual que la de sobremesa pero en formato <strong>SO-DIMM</strong>. Las memorias <strong>eMMC van soldadas</strong> y no se pueden cambiar.",
    "Pantalla de portátil: si <strong>parpadea</strong>, suele ser el <strong>inverter</strong> (placa que alimenta la retroiluminación); <strong>líneas de color</strong> → conexión del <strong>flex</strong>. Diagnóstico: conectar un <strong>monitor externo</strong> (HDMI/VGA)."
  ],

  frasesMemorizar: [
    "«El mantenimiento <strong>preventivo evita</strong> averías; el <strong>correctivo las arregla</strong>».",
    "«La <strong>temperatura</strong> es el enemigo n.º 1; la <strong>estática</strong>, el asesino silencioso; los <strong>líquidos</strong>, el principal peligro».",
    "«Más <strong>velocidad</strong> o más <strong>voltaje</strong> = más <strong>calor</strong>».",
    "«<strong>Cobre</strong> mejor que aluminio; <strong>plata</strong> mejor que cobre (termoconductores)».",
    "«Mojado: <strong>apagar + gel de sílice</strong>; secador <strong>NUNCA</strong>».",
    "«Espráis antipolvo domésticos: <strong>prohibidos</strong>; limpiar el polvo <strong>al aire libre</strong>».",
    "«Batería de litio: <strong>ni 100 % ni 0 %</strong>; almacenar al <strong>40-60 %</strong>; menos de <strong>30 °C</strong>; pierde a partir de <strong>250 ciclos</strong>».",
    "«Garantía: <strong>2 años</strong> nuevo, <strong>1 año</strong> segunda mano (Ley 23/2003)».",
    "«<strong>Un pitido</strong> al arrancar = BIOS contenta».",
    "«<strong>CMOS error</strong> = pila agotada; <strong>Timer not operational</strong> = placa base; <strong>Display Memory error</strong> = tarjeta de vídeo».",
    "«¿Se apaga solo? Piensa en el <strong>CALOR</strong>».",
    "«¿No arranca? <strong>Mínimo de componentes</strong>: placa + micro + 1 RAM».",
    "«Lo que <strong>más se avería</strong>: la placa base. Lo <strong>más fácil de comprobar</strong>: la fuente».",
    "«Ping en orden: <strong>loopback (127.0.0.1) → router → Internet</strong>».",
    "«Portátil: pantalla que <strong>parpadea = inverter</strong>; <strong>líneas de color = flex</strong>; duda = <strong>monitor externo</strong>».",
    "«<strong>Caddy</strong>: fuera el DVD, dentro una SSD»."
  ],

  apartados: [
    {
      titulo: "6.1 El mantenimiento preventivo",
      html:
        "<p>El trabajo del técnico es hoy muy variado (problemas de configuración, sincronización, conectividad, averías y ampliaciones) y en organizaciones grandes los técnicos se especializan. El mantenimiento de un equipo informático <strong>no consiste en reemplazar piezas cada equis horas</strong> como en un coche o un avión (no es económico ni razonable), sino en seguir <strong>normas de prevención</strong> para que el equipo dure más tiempo trabajando a un nivel aceptable.</p>" +
        "<p>La técnica <strong>SMART</strong> de los discos mecánicos permite <strong>prever si un disco va a fallar</strong>: hay que comprobar que está <strong>habilitada en la BIOS</strong> y tener un <strong>agente SMART instalado</strong> en el sistema.</p>"
    },
    {
      titulo: "6.2 Factores que acortan la vida útil de un dispositivo",
      html:
        "<h4>A) La temperatura — el factor más importante</h4>" +
        "<p>Degrada y avería los dispositivos electrónicos (y también mecánicos, como los discos duros). Los elementos que más se calientan son el <strong>microprocesador, el chipset y la GPU</strong>: el cambio de estado de sus millones de transistores disipa energía en forma de calor. Dos reglas básicas:</p>" +
        "<ul><li><strong>A más velocidad, más calor</strong> se desprende.</li><li><strong>A mayor voltaje o consumo de energía, más calor</strong> se desprende.</li></ul>" +
        "<p>Por eso los fabricantes aumentan los <strong>núcleos</strong> (más rendimiento con menos velocidad de reloj) y reducen la <strong>tecnología de fabricación</strong> (puertas lógicas más pequeñas = menos consumo y calor). Consejos: ventilar las cajas (un ventilador que meta aire y otro que lo evacue), dejar espacio a las rejillas, disipadores de aluminio o <strong>cobre</strong> (el cobre es mejor termoconductor), filtros antipolvo en equipos en el suelo y nunca exponer al sol directo. Un chasis de <strong>aluminio disipa mejor que uno de plástico</strong>. ⚠️ El <strong>exceso de pasta térmica calienta MÁS</strong> el micro. Las BIOS pueden <strong>apagar el equipo</strong> por alta temperatura (umbral modificable). El cristal de silicio de los micros se rompe con temperaturas extremas.</p>" +
        "<h4>B) El polvo y las partículas</h4>" +
        "<p>Reduce la refrigeración al depositarse sobre los componentes y obstruye rejillas y ventiladores. El <strong>suelo es donde más polvo hay</strong>: evitar los equipos sobre él. Hay espráis antipolvo (de aire) que no dañan los componentes, pero <strong>nunca usar espráis domésticos</strong> (pueden inutilizar teclados). Limpiar el polvo interno <strong>al aire libre</strong> para no dispersarlo en la sala.</p>" +
        "<h4>C) Los líquidos y la humedad</h4>" +
        "<p>Los líquidos son <strong>el principal peligro</strong>. Muchos móviles llevan un <strong>testigo</strong> que delata el contacto con agua. Si un dispositivo se moja: <strong>apagarlo</strong>, desensamblarlo si es posible, secarlo y ponerlo con <strong>gel de sílice</strong> (mejor que el arroz). <strong>Nunca el secador</strong>: desplaza el agua y moja otros componentes; mejor al sol de forma indirecta. En salas de servidores muy húmedas se instalan <strong>deshumidificadores</strong>.</p>" +
        "<h4>D) Las descargas electrostáticas</h4>" +
        "<p>La estática es el <strong>«asesino silencioso»</strong>: se acumula en el cuerpo y, al tocar circuitos integrados, puede dañarlos. Casi nunca se percibe y puede llegar a <strong>cientos o miles de voltios</strong> (con muy poca intensidad). Cómo evitarla: <strong>pulseras antiestáticas</strong>, espráis antiestáticos para el suelo, tocar antes <strong>objetos metálicos</strong> (mejor sin pintar: patas de mesa, grifos…), evitar <strong>jerséis de lana</strong> y materiales sintéticos, mantener los componentes en su <strong>bolsa antiestática</strong> hasta ensamblarlos y evitar <strong>suelos de vinilo</strong>.</p>" +
        "<h4>E) Los impactos y vibraciones</h4>" +
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Material</th><th>Protege frente a…</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Películas de foam</strong></td><td>Rayaduras</td></tr>" +
        "<tr><td><strong>Film alveolar</strong> (plástico de burbujas)</td><td>Golpes</td></tr>" +
        "<tr><td><strong>Cacahuetes de poliestireno</strong></td><td>Movimiento dentro de la caja (relleno)</td></tr>" +
        "<tr><td><strong>Bolsas antiestáticas</strong></td><td>Descargas electrostáticas</td></tr>" +
        "</tbody></table></div>" +
        "<p>Los <strong>discos mecánicos</strong> son muy sensibles a impactos y vibraciones: si el equipo funciona en el momento del golpe, es muy probable que se dañen. Maletines y mochilas de transporte: rígidos, con fijaciones y acolchados.</p>"
    },
    {
      titulo: "6.3 Prevención, garantía y procedimiento ante una avería",
      html:
        "<h4>Operaciones de mantenimiento preventivo</h4>" +
        "<ul><li><strong>Batería:</strong> seguir los avisos del sistema; no conviene agotar la carga ni dejar el equipo siempre enchufado.</li>" +
        "<li><strong>Evitar líquidos y sustancias</strong> (migas, polvo); si se moja: sitio seco, gel de sílice y no encender hasta que esté seco del todo.</li>" +
        "<li><strong>Transporte y almacenaje</strong> con los materiales adecuados (foam, film alveolar, etc.).</li></ul>" +
        "<h4>La garantía</h4>" +
        "<p>Debe constar: el <strong>producto</strong>, el <strong>comprador/titular</strong>, el <strong>garante</strong> (vendedor, fabricante…), la <strong>duración</strong> y los <strong>derechos del titular</strong>. En España, la <strong>Ley 23/2003</strong> establece una duración mínima de <strong>2 años</strong> (el garante puede ofrecer más); en productos de <strong>segunda mano, 1 año</strong>. Si hay problema: reparación con <strong>piezas, mano de obra y envío gratis</strong>, en un tiempo razonable. Si la reparación no es satisfactoria, el comprador puede pedir: <strong>cambio por otro igual</strong>, cambio por otro de prestaciones similares o superiores, <strong>rebaja del precio</strong> o <strong>resolución del contrato</strong> y devolución del dinero.</p>" +
        "<h4>Procedimiento ante una avería</h4>" +
        "<ul>" +
        "<li><strong>Desenchufar</strong> el dispositivo o quitarle la batería y <strong>descargarse electrostáticamente</strong>.</li>" +
        "<li>Descartar un error software con un sistema operativo alternativo (<strong>Live CD</strong> de Linux).</li>" +
        "<li>Abrir el dispositivo <strong>solo cuando sea necesario</strong>; usar herramientas de diagnóstico (<strong>GParted, Parted Magic</strong>…).</li>" +
        "<li>Si es un periférico: <strong>actualizar los drivers</strong>. Si falla más de un componente: comprobarlos <strong>uno a uno</strong>.</li>" +
        "<li>Comprobar los cambios <strong>uno a uno</strong>; analizar los síntomas; revisar conexiones; preguntarse si hubo operaciones recientes; desconectar componentes no esenciales para localizar el fallo. Manipular con cuidado para no empeorar el estado.</li>" +
        "</ul>" +
        "<h4>Monitorización desde la BIOS</h4>" +
        "<p>Desde la BIOS se puede monitorizar el <strong>voltaje del procesador y del chipset</strong>, la <strong>temperatura del micro</strong> y la <strong>velocidad de giro de los ventiladores</strong>. Muchas BIOS traen un <strong>dashboard</strong> (cuadro de mandos) o secciones como <em>Health Status</em> o <em>Hardware Monitoring</em>. Existen aplicaciones para acceder a este cuadro de mandos de forma remota.</p>" +
        '<figure class="figura"><img src="assets/img/tema6/fig6-06.jpg" alt="Pantalla EZ Mode de una BIOS con temperaturas, voltajes y velocidad de los ventiladores" loading="lazy"><figcaption>Figura 6.6 del libro — Dashboard de la BIOS: monitorización de la placa base.</figcaption></figure>'
    },
    {
      titulo: "6.4 Mantenimiento preventivo de las baterías",
      html:
        "<p>Las <strong>baterías de litio</strong>, a diferencia de las antiguas de <strong>níquel-metal hidruro</strong>, tienen un mecanismo que evita el <strong>«efecto memoria»</strong> y, teóricamente, deberían durar para siempre. Pierden prestaciones por: el <strong>número de ciclos</strong> y la <strong>temperatura</strong>.</p>" +
        "<ul>" +
        "<li><strong>Ciclos:</strong> un ciclo = una carga + una descarga. El primer año el rendimiento es óptimo, pero a partir de <strong>250 ciclos</strong> empiezan a perder capacidad de carga.</li>" +
        "<li>Las <strong>descargas parciales</strong> alargan la vida: no hace falta (ni conviene) descargarla del todo.</li>" +
        "<li>Las <strong>cargas completas son perjudiciales</strong>: un voltaje por celda muy superior al nominal reduce la vida. <strong>No cargarla nunca al 100 %</strong>.</li>" +
        "<li>Los <strong>cargadores ultrarrápidos</strong> provocan más estrés y reducen su vida.</li>" +
        "<li><strong>Temperatura:</strong> por encima de <strong>30 °C</strong> se considera elevada y la vida se reduce drásticamente.</li>" +
        "<li>Tampoco es bueno tener el dispositivo <strong>siempre enchufado</strong> (muchos sistemas recargan al 100 % al bajar de cierto nivel).</li>" +
        "</ul>" +
        "<p><strong>Recomendaciones:</strong> almacenarla al <strong>40-60 %</strong> (la carga de fábrica), nunca al 100 % ni totalmente descargada; no apurarla; evitar altas temperaturas.</p>"
    },
    {
      titulo: "6.5 Detección de averías, informe y señales de aviso",
      html:
        "<h4>Verificaciones al montar o reparar</h4>" +
        "<p><strong>Conexiones internas:</strong> cables recogidos con bridas (sin tocar ventiladores), micro y disipador bien fijados (probar holguras), RAM con las pestañas cerradas, ventiladores conectados, conectores <strong>ATX y ATX-12 V</strong> fijados, unidades NVMe/SSD/discos sin holguras (las SATA con cable de datos y corriente), front panel/USB/sonido conectados (¡polaridad de los ledes!) y tarjetas de expansión bien insertadas. <strong>Conexiones externas:</strong> cable de alimentación con corriente, monitor conectado y periféricos.</p>" +
        "<h4>Informe de avería</h4>" +
        "<p>Debe contener, como mínimo: <strong>1)</strong> identificación del servicio técnico (nombre del técnico); <strong>2)</strong> identificación del cliente; <strong>3)</strong> identificación del equipo (marca, modelo, número de serie); <strong>4)</strong> detalle de los <strong>síntomas</strong>; <strong>5)</strong> operaciones realizadas (piezas y tiempo); <strong>6)</strong> coste de las operaciones; <strong>7)</strong> coste total con impuestos; <strong>8)</strong> firma del operario; <strong>9)</strong> garantía de la reparación.</p>" +
        "<h4>Señales acústicas y mensajes de la BIOS</h4>" +
        "<p>El técnico desea escuchar <strong>un único pitido</strong> al arrancar: significa que se pasó el test de la BIOS (sin fallos de hardware, aunque no garantiza una configuración correcta). Si no suena, el equipo puede no tener <strong>speaker</strong>.</p>" +
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Mensaje de error</th><th>Significado / acción</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>RAM Refresh Failure</strong></td><td>Fallo del refresco de la RAM: cambiar el módulo de banco; si persiste, sustituirlo.</td></tr>" +
        "<tr><td><strong>Timer not operational</strong></td><td>El reloj que sincroniza la placa está estropeado: seguramente cambiar la placa base.</td></tr>" +
        "<tr><td><strong>CMOS checksum error / CMOS battery failed / BIOS ROM Checksum Error</strong></td><td>La pila de la BIOS se ha agotado (la información no permanece al apagar): sustituir la pila y reconfigurar.</td></tr>" +
        "<tr><td><strong>Processor Error / Processor Exception</strong></td><td>Fallo del procesador (o a veces de la memoria de vídeo): reiniciar y chequear ambos en profundidad.</td></tr>" +
        "<tr><td><strong>Display Memory Read/Write error</strong></td><td>La tarjeta de vídeo está estropeada.</td></tr>" +
        "<tr><td><strong>Cache Error / External Cache Bad</strong></td><td>Fallo en la memoria caché del procesador o de la placa.</td></tr>" +
        "<tr><td><strong>Memory Test Fail</strong></td><td>El chequeo de memoria del arranque falla: si persiste, cambiar el módulo averiado.</td></tr>" +
        "<tr><td><strong>Override enabled – Defaults loaded</strong></td><td>La BIOS no puede arrancar con sus parámetros: carga los valores por defecto.</td></tr>" +
        "</tbody></table></div>" +
        "<h4>Señales luminosas</h4>" +
        "<p><strong>Led de encendido</strong> (suministro eléctrico); <strong>led de actividad de las unidades</strong>: actividad excesiva sin estar trabajando → comprobar que no sea <strong>malware</strong>; continuamente encendido → problema en el sistema. <strong>Led del transformador del portátil</strong>: indica si el cargador funciona (algunos cambian de color con problemas). Testigos wifi/webcam: poco habituales.</p>"
    },
    {
      titulo: "6.6 Fallos comunes e incompatibilidades",
      html:
        "<h4>El equipo se apaga de repente</h4>" +
        "<p>Normalmente provocado por <strong>calor</strong> (aunque no es la única causa): comprobar suciedad, sobrecalentamiento del chasis, ventiladores y pasta térmica. También puede ser la <strong>fuente</strong> (¿tiene potencia suficiente?, ¿voltajes correctos?) o un <strong>error software</strong> (¿funciona con un Live CD?).</p>" +
        "<h4>El equipo no enciende</h4>" +
        "<p>Puede ser simple (cableado, falso contacto, interruptor de la fuente en off) o grave (placa base). <strong>Consejo:</strong> arrancar con el <strong>mínimo de componentes</strong> (placa, micro y 1 módulo de memoria) y luego probar componente a componente reemplazando por uno compatible.</p>" +
        "<h4>No se muestra nada en pantalla</h4>" +
        "<p>Comprobar cables y descartar el fallo del monitor; en un portátil, probar la salida con un <strong>monitor externo</strong>. ¿Se puede entrar en la BIOS? → puede ser fallo software (descartar con <strong>Live CD</strong>). Si persiste: mínimo de componentes (la SSD/disco <strong>no es necesaria</strong> para verificar el sistema).</p>" +
        "<h4>Fallos por componentes</h4>" +
        "<ul>" +
        "<li><strong>RAM:</strong> si está averiada, el equipo no funciona (no pasa el POST); si solo hay celdas dañadas, reseteos y fallos aleatorios → <strong>test de memoria</strong> (en Ubuntu: <code>sudo apt install memtester</code> y <code>memtester 4096 2</code> = testear 4096 MB con 2 pasadas; también GRUB o la herramienta de Windows).</li>" +
        "<li><strong>Microprocesador:</strong> averiado, el equipo no hace nada. Si se sobrecalienta y se para: pasta térmica, disipador, refrigeración.</li>" +
        "<li><strong>Placa base:</strong> es <strong>lo que más se avería</strong> (muchos circuitos integrados). Fallo parcial (red, sonido, vídeo…) → sustituir o usar un componente extra; fallo general → sustitución.</li>" +
        "<li><strong>Fuente de alimentación:</strong> <strong>lo más fácil de comprobar y reemplazar</strong>: con el <strong>polímetro</strong> o programas tipo <strong>tester</strong>. «Muerta» (no pasa la prueba del ventilador) o con voltajes incorrectos → sustitución.</li>" +
        "<li><strong>Caja/chasis:</strong> lo que menos se avería. Ledes (polaridad), conectores (testear en placa), calentamiento (limpiar, ventiladores extra).</li>" +
        "<li><strong>Tarjetas de expansión:</strong> muchas fallan por el <strong>driver</strong>: tenerlos actualizados.</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema6/fig6-13.jpg" alt="Esquema de fallo general y fallo parcial de la placa base con sus acciones" loading="lazy"><figcaption>Figura 6.13 del libro — Fallos y averías en la placa base.</figcaption></figure>' +
        '<figure class="figura"><img src="assets/img/tema6/fig6-14.jpg" alt="Esquema de los fallos de la fuente de alimentación: no funciona (está muerta) o no proporciona los voltajes correctos" loading="lazy"><figcaption>Figura 6.14 del libro — Fallos y averías en la fuente de alimentación.</figcaption></figure>' +
        "<h4>Comprobar la red (ping)</h4>" +
        "<p>Orden de comprobación (o el inverso): <strong>1)</strong> ping a la dirección de <strong>loopback</strong> de la NIC (<strong>127.0.0.1</strong> o <strong>::1</strong>): si falla, la tarjeta está mal configurada o deshabilitada (si el equipo ya tiene IP asignada, funcionará seguro); <strong>2)</strong> ping al <strong>router</strong>: si falla, problema de conectividad con el router (cableado) o no asignó IP; <strong>3)</strong> ping a <strong>servidores web de Internet</strong>: si falla, problema de DNS o el router no tiene salida. Un tiempo de respuesta alto o pérdida de paquetes evidencia un <strong>problema de conectividad</strong>. La IP se consulta con <strong>ifconfig</strong> (Linux) o <strong>ipconfig</strong> (Windows); el gateway con <strong>ipconfig /all</strong> (Windows) o <strong>netstat -r</strong> (Linux). En redes pequeñas, el router de fibra es también el <strong>gateway</strong>.</p>" +
        "<h4>Discos mecánicos y SSD</h4>" +
        "<p>Las <strong>SSD y NVMe</strong> son más apropiadas para portátiles: más resistentes a los golpes y disipan menos calor (menos consumo). <strong>SMART</strong> predice fallos del disco mecánico, pero <strong>no está disponible en las SSD</strong>. En servidores: escaneo periódico de superficie (<strong>Smartmontools</strong> en Linux, <strong>HDTune</strong> en Windows). Una <strong>temperatura elevada</strong> del disco mecánico es síntoma de problema.</p>"
    },
    {
      titulo: "6.7 Ampliaciones y mantenimiento en portátiles",
      html:
        "<p>Los dispositivos son cada vez <strong>menos ampliables</strong>: algunos portátiles traen memoria y procesador <strong>soldados</strong> a la placa. Los sobremesa, al ser más modulares y estándar, se reparan más fácilmente. En portátiles, pantalla, placa y procesador generalmente <strong>se reparan, no se amplían</strong>.</p>" +
        "<h4>Ampliaciones típicas</h4>" +
        "<ul>" +
        "<li><strong>Sustituir el lector óptico por un caddy + SSD:</strong> se gana un segundo disco y se retira un lector obsoleto. Desventaja: <strong>mayor consumo de batería</strong>. El caddy tiene un conector SATA y hay que atornillar el disco a él. El lector óptico suele estar fijado por <strong>un solo tornillo</strong>.</li>" +
        "<li><strong>Ampliar la RAM:</strong> más capacidad y, a veces, más velocidad. La RAM de portátil es igual a la de sobremesa pero en formato <strong>SO-DIMM</strong>. Comprobar el tipo (DDR3L, DDR4…), los bancos disponibles y si va soldada (<strong>eMMC</strong> = no ampliable). Si se añade un módulo más lento, todo irá a la velocidad del más lento.</li>" +
        "<li><strong>Sustituir el disco mecánico por SSD:</strong> multiplica la velocidad y da nueva vida a equipos antiguos. Ventajas: carga más rápida del SO y aplicaciones, <strong>menor consumo</strong> (más batería), <strong>más fiabilidad</strong>, <strong>menos ruido</strong> y <strong>menos calor</strong> (sin partes mecánicas). Inconveniente: <strong>menos espacio</strong>. La mayoría de discos de portátil son de <strong>2,5 pulgadas</strong> (excepciones: MacBook Air e iPod, 1,8\"). Extraer el disco haciendo <strong>fuerza lateral</strong> (nunca estirar perpendicular: se daña el conector).</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema6/fig6-19.jpg" alt="Retirada de la batería de un portátil y desatornillado de la portezuela del chasis" loading="lazy"><figcaption>Figuras 6.19 y 6.20 del libro — Retirada de la batería y apertura de la portezuela del chasis.</figcaption></figure>' +
        "<h4>Averías típicas en portátiles</h4>" +
        "<ul>" +
        "<li><strong>Alimentación:</strong> las baterías se degradan con los ciclos. Si el cargador falla: mirar el led testigo, examinar si el <strong>cable está retorcido o machacado</strong> y <strong>medir el voltaje de salida con un polímetro</strong>. Hay cargadores universales configurables (voltaje y amperaje correctos para no dañar el equipo). Si el cargador funciona y el equipo va con batería, puede ser el <strong>conector</strong> (se reemplaza soldando) o el sistema de carga.</li>" +
        "<li><strong>Teclado:</strong> elemento muy sufrido (líquidos, migas); integrado en el chasis, más frágil que el de sobremesa. Está conectado por un <strong>flex</strong> fijado con una presa con pestaña. Liberar las pestañas con una <strong>púa</strong>; probar el teclado <strong>antes de fijarlo</strong> de nuevo. Comprar el portátil en otro país = distribución de teclado diferente → cambio del teclado físico.</li>" +
        "<li><strong>Memoria:</strong> si no funciona, el equipo no arranca; si se bloquea o resetea → test de memoria. Manipular el módulo <strong>por los bordes</strong>.</li>" +
        "<li><strong>Disco mecánico:</strong> da más problemas que en sobremesa (golpes, movimiento, poca ventilación). Ruido anormal o sectores dañados = avería en breve (SMART).</li>" +
        "<li><strong>Placa base:</strong> fallos normalmente <strong>letales</strong>; en portátiles fuera de garantía, a menudo no merece la pena la reparación. Para diagnosticar: probar el resto de componentes en otro equipo compatible.</li>" +
        "<li><strong>Pantalla:</strong> más sensible que un monitor (espacio reducido, bisagras, cables). Causas: golpe (panel quebrado), no muestra nada (panel TFT o <strong>inverter</strong> averiado: la placa que alimenta la <strong>retroiluminación</strong>), <strong>parpadeo</strong> (suele ser el inverter), o fallo de la gráfica/placa. <strong>Líneas de color</strong>: conexión del <strong>flex</strong> con la pantalla (a veces se arregla presionando el marco o reajustando el flex). Diagnóstico clave: conectar un <strong>monitor externo</strong> por HDMI/VGA: si se ve bien, la pantalla es la averiada.</li>" +
        "</ul>"
    }
  ],

  glosario: [
    { termino: "Benchmark", definicion: "Programa que mide el rendimiento de un sistema y ofrece una comparativa del resultado obtenido." },
    { termino: "Caddy", definicion: "Elemento o dispositivo que alberga otro en su interior (a veces una simple carcasa). Permite, por ejemplo, sustituir el lector óptico de un portátil por una SSD de 2,5\"." },
    { termino: "Checksum", definicion: "Suma de verificación: permite saber si un archivo ha sido alterado; al modificar el fichero, la suma cambia." },
    { termino: "Ciclo de descarga", definicion: "Descarga de la batería cuando está cargada. Una carga y una descarga cuentan como un ciclo." },
    { termino: "Cristal de silicio", definicion: "Estructura tetraédrica del silicio que compone los circuitos integrados. Se rompe con temperaturas extremas." },
    { termino: "Dashboard", definicion: "Cuadro de mandos (por ejemplo, el de monitorización de la BIOS)." },
    { termino: "Deshumidificador", definicion: "Dispositivo que elimina la humedad del ambiente para preservar y alargar la vida de los componentes electrónicos." },
    { termino: "Efecto memoria", definicion: "Defecto de las baterías antiguas (níquel-metal hidruro) que las de litio evitan: las descargas parciales no perjudican a las de litio." },
    { termino: "Flex", definicion: "Cable flexible utilizado en dispositivos ultracompactos como tabletas, smartphones o portátiles (conecta, por ejemplo, el teclado o la pantalla)." },
    { termino: "Gel de sílice (silica gel)", definicion: "Material desecante usado para absorber la humedad de un dispositivo mojado; mejor alternativa que el arroz." },
    { termino: "Inverter (inversor)", definicion: "Pequeña placa que suministra corriente a la retroiluminación de la pantalla de un portátil; su avería causa parpadeos o pantalla apagada." },
    { termino: "Live CD", definicion: "Distribución (normalmente Linux) en pendrive o disco óptico que funciona de forma autónoma sin instalarse. Sirve para descartar errores software." },
    { termino: "Loopback", definicion: "Interfaz de red del propio equipo. Su dirección IPv4 es 127.0.0.1 (::1 en IPv6)." },
    { termino: "Malware", definicion: "Software malicioso, como los virus, troyanos, etc." },
    { termino: "NIC", definicion: "Network Interface Card: la tarjeta de red del equipo, ya sea wifi o Ethernet." },
    { termino: "Ping", definicion: "Herramienta que comprueba la conectividad entre el equipo y un host (loopback → router → Internet)." },
    { termino: "Pulsera antiestática", definicion: "Pulsera que elimina la acumulación de energía electrostática durante el ensamblado de componentes." },
    { termino: "SMART", definicion: "Tecnología de los discos mecánicos que predice si el disco va a fallar. Requiere habilitarse en la BIOS y un agente instalado. No existe en SSD." },
    { termino: "SO-DIMM", definicion: "Formato reducido de módulo de memoria usado en portátiles y algunos barebones." },
    { termino: "Slot", definicion: "Ranura (por ejemplo, la de un módulo de memoria)." },
    { termino: "Ultraportátil", definicion: "Portátil de bajo peso, perfil reducido y fácil de transportar; compite con los convertibles." },
    { termino: "Vinilo", definicion: "Material plástico con muchas aplicaciones; como suelo, acumula energía electrostática y debe evitarse en oficinas." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Mantenimiento preventivo, factores de riesgo, baterías y garantía (6.2)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿En qué consiste el mantenimiento preventivo de un equipo informático?",
          opciones: { A: "En reemplazar piezas cada equis horas de trabajo, como en un avión", B: "En seguir unas normas de prevención para que el equipo dure más tiempo trabajando a un nivel aceptable", C: "En cambiar la placa base una vez al año", D: "En formatear el equipo periódicamente" },
          correcta: ["B"],
          explicacion: "En un equipo informático no se reemplazan piezas en previsión de fallo (no es económico ni razonable): se siguen normas de prevención."
        },
        {
          tipo: "unica",
          pregunta: "Para beneficiarse de la tecnología SMART de los discos mecánicos hay que…",
          opciones: { A: "Comprobar que está habilitada en la BIOS y tener un agente SMART instalado en el sistema", B: "Instalarla en la unidad SSD", C: "Formatear el disco en NTFS", D: "Desactivarla para que no consuma recursos" },
          correcta: ["A"],
          explicacion: "SMART permite prever si un disco mecánico va a fallar: debe estar habilitada en la BIOS y debe haber un agente SMART instalado."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es, por regla general, el factor más importante a la hora de degradar y averiar un dispositivo electrónico?",
          opciones: { A: "El polvo", B: "La temperatura", C: "Las vibraciones", D: "La humedad" },
          correcta: ["B"],
          explicacion: "La temperatura es el factor más importante; también sufren con ella dispositivos mecánicos como los discos duros."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las dos reglas básicas que explican por qué se produce calor en los dispositivos:",
          opciones: { A: "Cuanta más velocidad tenga un dispositivo, más calor se desprende", B: "A mayor voltaje o mayor consumo de energía, más calor se desprende", C: "Cuantos más núcleos, más calor a igualdad de rendimiento", D: "El calor solo depende del tamaño de la caja" },
          correcta: ["A", "B"],
          explicacion: "Las dos reglas básicas: más velocidad = más calor; más voltaje/consumo = más calor. De hecho, más núcleos a menor velocidad permiten rendir más generando menos calor."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué elementos de un dispositivo electrónico son los que más se calientan?",
          opciones: { A: "El microprocesador junto con circuitos integrados como el chipset o la GPU", B: "La caja y los cables", C: "Los puertos USB", D: "El teclado y el ratón" },
          correcta: ["A"],
          explicacion: "Micro, chipset y GPU: el cambio de estado de sus millones de transistores disipa energía en forma de calor."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los fabricantes aumentan el número de núcleos de los procesadores?",
          opciones: { A: "Para aumentar el rendimiento aunque sea con una velocidad de reloj inferior", B: "Para generar más calor", C: "Para subir el voltaje", D: "Para abaratar el silicio" },
          correcta: ["A"],
          explicacion: "Dos núcleos a menor velocidad pueden rendir más que uno solo a mayor velocidad; además, tecnologías de fabricación menores reducen consumo y calor."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los disipadores o heat pipes de cobre son mejores que los de aluminio?",
          opciones: { A: "Porque el cobre es mayor termoconductor que el aluminio", B: "Porque el cobre pesa menos", C: "Porque el aluminio se oxida con el calor", D: "Porque el cobre es más barato" },
          correcta: ["A"],
          explicacion: "El cobre conduce mejor el calor que el aluminio. Igualmente, un chasis de aluminio disipa mejor que uno de plástico."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué ocurre si se pone mucha silicona o pasta térmica en el montaje?",
          opciones: { A: "El micro se refrigera mejor", B: "El microprocesador o el circuito integrado se calentarán mucho más", C: "No pasa nada, el exceso se evapora", D: "Mejora el contacto eléctrico" },
          correcta: ["B"],
          explicacion: "El exceso de pasta térmica provoca que el micro o el circuito integrado se calienten mucho más."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué mecanismo tienen las BIOS relacionado con la temperatura?",
          opciones: { A: "Apagar el equipo en caso de alta temperatura (umbral a veces modificable)", B: "Encender un aire acondicionado", C: "Bajar la velocidad de los discos", D: "Avisar al fabricante por Internet" },
          correcta: ["A"],
          explicacion: "Las BIOS pueden apagar el equipo por alta temperatura; en ocasiones se puede modificar ese umbral subiéndolo o bajándolo."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde hay más polvo y, por tanto, dónde hay que evitar colocar los equipos?",
          opciones: { A: "En las estanterías", B: "En el suelo", C: "Sobre la mesa", D: "Cerca de las ventanas" },
          correcta: ["B"],
          explicacion: "El suelo es el lugar donde más polvo hay: hay que evitar tener los equipos sobre él (y usar filtros y rejillas antipolvo si están en el suelo)."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué NUNCA deben rociarse los dispositivos con espráis antipolvo domésticos?",
          opciones: { A: "Porque sus compuestos pueden inutilizar teclados u otros componentes", B: "Porque son demasiado caros", C: "Porque no tienen fuerza suficiente", D: "Sí se pueden usar sin problema" },
          correcta: ["A"],
          explicacion: "Los espráis domésticos llevan compuestos que pueden inutilizar componentes. Los espráis antipolvo específicos están compuestos de aire y no dañan."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde conviene limpiar el polvo interno de un equipo?",
          opciones: { A: "Al aire libre, si es posible", B: "En la sala de servidores", C: "En el puesto de montaje, con las ventanas cerradas", D: "Dentro de la caja del equipo" },
          correcta: ["A"],
          explicacion: "Si no se hace al aire libre, lo que se consigue es dispersar el polvo en la sala donde se realiza la limpieza."
        },
        {
          tipo: "unica",
          pregunta: "Un dispositivo electrónico ha estado en contacto con agua. ¿Cuál es la mejor actuación?",
          opciones: { A: "Apagarlo, desensamblarlo si es posible, secarlo y colocarlo con gel de sílice", B: "Secarlo inmediatamente con un secador de pelo", C: "Encenderlo para comprobar si funciona", D: "Meterlo en el congelador" },
          correcta: ["A"],
          explicacion: "Apagado, desensamblado y gel de sílice (silica gel). Nunca el secador: desplaza el agua y moja el resto de componentes; mejor al sol de forma indirecta."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué se instalan deshumidificadores en una sala de servidores?",
          opciones: { A: "Para eliminar la humedad del ambiente y alargar la vida de los componentes", B: "Para enfriar los servidores", C: "Para eliminar el polvo", D: "Para reducir el ruido" },
          correcta: ["A"],
          explicacion: "Los deshumidificadores eliminan la humedad del ambiente; su objetivo es preservar y alargar la vida de los componentes electrónicos."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué se llama a la energía electrostática el «asesino silencioso» de los componentes?",
          opciones: { A: "Porque las descargas casi nunca se perciben y pueden llegar a cientos o miles de voltios (con poca intensidad)", B: "Porque hace ruido al descargarse", C: "Porque solo afecta de noche", D: "Porque mata lentamente las baterías" },
          correcta: ["A"],
          explicacion: "Se acumula en el cuerpo y, al tocar circuitos integrados, puede dañarlos sin que se perciba: cientos o miles de voltios con muy poca intensidad."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cómo se puede evitar o limitar la energía electrostática? (señala las correctas)",
          opciones: { A: "Utilizando pulseras antiestáticas", B: "Tocando antes objetos metálicos, mejor sin pintar (patas de mesa, grifos…)", C: "Usando jerséis de lana y suelos de vinilo", D: "Utilizando espráis antiestáticos para limpiar los suelos" },
          correcta: ["A", "B", "D"],
          explicacion: "Pulseras antiestáticas, tocar metal sin pintar y espráis antiestáticos para el suelo. Los jerséis de lana y los suelos de vinilo ACUMULAN estática: hay que evitarlos."
        },
        {
          tipo: "unica",
          pregunta: "En el transporte de dispositivos, ¿qué material protege frente a los golpes?",
          opciones: { A: "Las películas de foam", B: "El film alveolar (plástico de burbujas)", C: "Los cacahuetes de poliestireno", D: "Las bolsas antiestáticas" },
          correcta: ["B"],
          explicacion: "Foam = rayaduras; film alveolar = golpes; cacahuetes de poliestireno = relleno para evitar movimiento; bolsas antiestáticas = descargas."
        },
        {
          tipo: "unica",
          pregunta: "Sobre las baterías de litio, ¿qué afirma el libro respecto al «efecto memoria»?",
          opciones: { A: "Tienen un mecanismo que lo evita: las descargas parciales no son perjudiciales", B: "Lo sufren igual que las de níquel-metal hidruro", C: "Solo lo sufren con cargadores ultrarrápidos", D: "Aparece a partir de 250 ciclos" },
          correcta: ["A"],
          explicacion: "A diferencia de las antiguas de níquel-metal hidruro, las de litio evitan el efecto memoria: las descargas parciales hacen que la batería dure MÁS."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué recomendaciones alargan la vida de una batería de litio? (señala las correctas)",
          opciones: { A: "No cargarla nunca al 100 %", B: "No dejar que se descargue totalmente", C: "Almacenarla al 40-60 % de carga", D: "Usar cargadores ultrarrápidos para que se caliente menos tiempo" },
          correcta: ["A", "B", "C"],
          explicacion: "Ni 100 % ni 0 %; almacenar al 40-60 % (la carga de fábrica) y evitar más de 30 °C. Los cargadores ultrarrápidos provocan MÁS estrés y reducen su vida; a partir de 250 ciclos pierde capacidad."
        },
        {
          tipo: "unica",
          pregunta: "Según la Ley 23/2003, ¿qué duración mínima tiene la garantía de los dispositivos electrónicos en España?",
          opciones: { A: "Dos años (un año si son de segunda mano)", B: "Un año en todos los casos", C: "Seis meses", D: "Tres años (dos si son de segunda mano)" },
          correcta: ["A"],
          explicacion: "Mínimo dos años (el garante puede ofrecer más); en productos de segunda mano, solamente un año. La reparación, piezas, mano de obra y envío son gratis."
        }
      ]
    },
    {
      nombre: "Paquete 2 · Procedimiento ante averías, monitorización y señales de la BIOS",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Ante una posible avería, ¿para qué sirve arrancar el equipo con un Live CD/USB?",
          opciones: { A: "Para descartar que el problema sea del software o del sistema operativo instalado", B: "Para reparar físicamente el disco duro", C: "Para actualizar la BIOS automáticamente", D: "Para cargar más rápido el sistema operativo del disco" },
          correcta: ["A"],
          explicacion: "Si el equipo funciona bien con un sistema arrancado desde Live CD/USB, el hardware está bien y el problema es del software/SO instalado."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué herramienta cita el libro para trabajar con particiones desde un sistema autoarrancable?",
          opciones: { A: "GParted (incluida en distribuciones como Parted Magic)", B: "Memtester", C: "HD Tune", D: "Hardinfo" },
          correcta: ["A"],
          explicacion: "GParted permite gestionar particiones; viene en distribuciones Live como Parted Magic, útiles para diagnóstico y reparación."
        },
        {
          tipo: "unica",
          pregunta: "Si se sospecha de un componente averiado, ¿cuál es la forma correcta de proceder?",
          opciones: { A: "Cambiar varios componentes a la vez para ahorrar tiempo", B: "Comprobar o sustituir los componentes de uno en uno", C: "Reinstalar siempre el sistema operativo primero", D: "Llevar el equipo directamente al fabricante" },
          correcta: ["B"],
          explicacion: "Los cambios y comprobaciones se hacen de uno en uno: así se identifica exactamente qué componente causa el fallo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué parámetros se pueden monitorizar desde la BIOS para vigilar la salud del equipo? (señala las correctas)",
          opciones: { A: "Los voltajes que entrega la fuente de alimentación", B: "La temperatura del microprocesador y de la placa", C: "La velocidad de giro de los ventiladores", D: "La velocidad de la conexión a Internet" },
          correcta: ["A", "B", "C"],
          explicacion: "La BIOS (en apartados tipo Health Status o «dashboard») muestra voltajes, temperaturas y revoluciones de los ventiladores. La conexión a Internet no se monitoriza desde la BIOS."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué apartado de la BIOS se suele encontrar la monitorización de temperaturas, voltajes y ventiladores?",
          opciones: { A: "Boot Sequence", B: "Health Status (o similar, a modo de «dashboard»)", C: "Advanced Chipset Features", D: "Integrated Peripherals" },
          correcta: ["B"],
          explicacion: "Suele llamarse Health Status, PC Health o similar, y actúa como panel de control (dashboard) del estado del equipo."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué información debe contener un informe de avería? (señala las correctas)",
          opciones: { A: "Datos del equipo y del cliente, y fecha de entrada", B: "Descripción del problema y pruebas realizadas", C: "Diagnóstico, piezas sustituidas y tiempo empleado", D: "La contraseña del correo personal del cliente" },
          correcta: ["A", "B", "C"],
          explicacion: "El informe recoge identificación del equipo/cliente, fechas, síntomas, verificaciones y pruebas, diagnóstico, reparación realizada, piezas y tiempo. Nunca datos privados innecesarios."
        },
        {
          tipo: "unica",
          pregunta: "Al arrancar, el equipo emite un único pitido corto. ¿Qué significa?",
          opciones: { A: "Que la memoria RAM está averiada", B: "Que el test de la BIOS (POST) se ha superado correctamente", C: "Que falta el teclado", D: "Que la pila CMOS está agotada" },
          correcta: ["B"],
          explicacion: "Un pitido = el test de arranque de la BIOS es correcto. Ojo: eso no garantiza que la configuración del sistema operativo esté bien."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué puede un equipo no emitir ningún pitido al arrancar aunque funcione bien?",
          opciones: { A: "Porque la BIOS está apagada", B: "Porque no tiene altavoz interno (speaker) conectado a la placa", C: "Porque el sistema operativo lo silencia", D: "Porque solo pitan los equipos antiguos con disquetera" },
          correcta: ["B"],
          explicacion: "Muchas cajas no llevan el pequeño altavoz interno (speaker) conectado a la placa; sin él no se oyen los pitidos del POST."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje de la BIOS: «RAM Refresh Failure». ¿Qué conviene hacer?",
          opciones: { A: "Cambiar la pila de la placa", B: "Probar los módulos de memoria en otro banco o sustituirlos", C: "Cambiar la tarjeta gráfica", D: "Actualizar los drivers" },
          correcta: ["B"],
          explicacion: "Indica un problema al refrescar la RAM: se prueban los módulos de uno en uno y en otros bancos, y se sustituyen si fallan."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje de la BIOS: «Timer not operational». ¿A qué apunta?",
          opciones: { A: "Al reloj del sistema operativo", B: "A un fallo de la placa base", C: "A la fuente de alimentación", D: "Al disco duro" },
          correcta: ["B"],
          explicacion: "El temporizador está en la placa base; si no funciona, el problema es de la placa."
        },
        {
          tipo: "unica",
          pregunta: "Mensajes tipo «CMOS checksum error» o «CMOS battery failed» suelen indicar…",
          opciones: { A: "Que hay que cambiar la pila de la placa base", B: "Que la RAM está mal colocada", C: "Que el micro está sobrecalentado", D: "Que el disco duro está lleno" },
          correcta: ["A"],
          explicacion: "La CMOS guarda la configuración de la BIOS y se alimenta con la pila de la placa; estos errores apuntan a pila agotada o configuración corrupta."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje de la BIOS: «Processor Error». ¿Qué componentes señala el libro como posibles culpables?",
          opciones: { A: "El microprocesador o la memoria de vídeo", B: "Solo el ventilador", C: "El teclado y el ratón", D: "La tarjeta de red" },
          correcta: ["A"],
          explicacion: "«Processor Error» apunta al microprocesador o a la memoria de vídeo."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje de la BIOS: «Display Memory error». ¿Qué hay que revisar?",
          opciones: { A: "La tarjeta de vídeo", B: "El disco duro", C: "La fuente de alimentación", D: "La pila CMOS" },
          correcta: ["A"],
          explicacion: "Es un error de la memoria de vídeo: hay que revisar o sustituir la tarjeta gráfica."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje «Memory Test Fail» durante el arranque. ¿Qué significa?",
          opciones: { A: "Que el test de la memoria RAM ha fallado", B: "Que el disco duro tiene sectores defectuosos", C: "Que la BIOS necesita actualización", D: "Que la caché del micro está desactivada" },
          correcta: ["A"],
          explicacion: "El POST comprueba la memoria RAM; si el test falla, hay que revisar los módulos de memoria."
        },
        {
          tipo: "unica",
          pregunta: "Mensaje «Override enabled – Defaults loaded». ¿Qué ha ocurrido?",
          opciones: { A: "La BIOS no ha podido arrancar con la configuración actual y ha cargado los valores por defecto", B: "Se ha actualizado el sistema operativo", C: "El equipo ha sido formateado", D: "Se ha activado el overclocking automático" },
          correcta: ["A"],
          explicacion: "Si la configuración guardada impide arrancar, la BIOS carga la configuración por defecto para poder iniciar el equipo."
        },
        {
          tipo: "unica",
          pregunta: "El led de actividad del disco parpadea de forma excesiva y constante sin que el usuario haga nada. ¿Qué puede indicar?",
          opciones: { A: "Que el equipo funciona perfectamente", B: "Una actividad anómala, por ejemplo causada por malware", C: "Que falta pasta térmica", D: "Que la pantalla está averiada" },
          correcta: ["B"],
          explicacion: "Una actividad de disco excesiva e injustificada puede deberse a procesos anómalos, como software malicioso."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué puede indicar un led de actividad continuamente encendido (fijo, sin parpadear)?",
          opciones: { A: "Que todo va bien", B: "Un problema en el dispositivo o en su controladora", C: "Que el equipo está en suspensión", D: "Que la batería está cargada" },
          correcta: ["B"],
          explicacion: "Un led de actividad fijo suele señalar que el dispositivo se ha quedado bloqueado o tiene un problema."
        },
        {
          tipo: "multiple",
          pregunta: "Dentro de las verificaciones para detectar una avería, ¿cuáles son EXTERNAS? (señala las correctas)",
          opciones: { A: "Comprobar cables y conexiones del equipo", B: "Observar pitidos, mensajes en pantalla y ledes", C: "Probar la RAM en otro banco de memoria", D: "Medir la fuente con el polímetro por dentro" },
          correcta: ["A", "B"],
          explicacion: "Las verificaciones externas no requieren abrir el equipo: cables, conexiones, señales acústicas y luminosas, mensajes. Las internas implican abrir y manipular componentes."
        },
        {
          tipo: "unica",
          pregunta: "Tras un fallo, el técnico anota síntomas, pruebas realizadas y diagnóstico. ¿Cómo se llama ese documento?",
          opciones: { A: "Informe de avería", B: "Manual de usuario", C: "Hoja de garantía", D: "Factura proforma" },
          correcta: ["A"],
          explicacion: "El informe de avería documenta todo el proceso: identificación, síntomas, pruebas, diagnóstico, reparación, piezas y tiempo."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el primer paso recomendado ante un equipo que falla de forma intermitente con el sistema operativo instalado?",
          opciones: { A: "Formatear inmediatamente", B: "Arrancar con un Live CD/USB para separar problema de hardware y de software", C: "Cambiar la placa base", D: "Desactivar la BIOS" },
          correcta: ["B"],
          explicacion: "Antes de tocar hardware se descarta el software: si con un Live CD el equipo va bien, el fallo es del sistema instalado."
        }
      ]
    },
    {
      nombre: "Paquete 3 · Fallos comunes, red, ampliaciones y portátiles",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Un equipo se apaga de repente al cabo de un rato de funcionamiento. ¿Cuál es la causa MÁS habitual según el libro?",
          opciones: { A: "Un exceso de temperatura (la protección apaga el equipo)", B: "Un virus", C: "El teclado averiado", D: "La pantalla fundida" },
          correcta: ["A"],
          explicacion: "Los apagados repentinos suelen deberse al calor: cuando se supera el umbral, el equipo se apaga para protegerse. Hay que revisar ventiladores, polvo y pasta térmica."
        },
        {
          tipo: "unica",
          pregunta: "Un equipo no enciende en absoluto. ¿Qué técnica de diagnóstico recomienda el libro?",
          opciones: { A: "Arrancarlo con el mínimo de componentes (placa, micro y un módulo de RAM)", B: "Cambiar directamente el disco duro", C: "Reinstalar el sistema operativo", D: "Esperar 24 horas y volver a probar" },
          correcta: ["A"],
          explicacion: "Se deja el equipo con lo mínimo imprescindible y, si arranca, se van añadiendo componentes uno a uno hasta dar con el culpable."
        },
        {
          tipo: "unica",
          pregunta: "El equipo enciende (ventiladores, ledes) pero no se ve nada en pantalla. ¿Qué prueba rápida propone el libro?",
          opciones: { A: "Conectar un monitor externo para descartar la pantalla o la tarjeta de vídeo", B: "Cambiar la fuente de alimentación", C: "Quitar la pila CMOS para siempre", D: "Formatear el disco" },
          correcta: ["A"],
          explicacion: "Con un monitor externo se descarta si el problema es del monitor/pantalla o de la tarjeta gráfica del equipo."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué síntomas provoca una memoria RAM con celdas dañadas?",
          opciones: { A: "Reseteos y cuelgues aleatorios, o que el equipo no pase el POST", B: "Que la pantalla se vea en blanco y negro", C: "Que el ratón vaya lento", D: "Que el disco haga ruido" },
          correcta: ["A"],
          explicacion: "Una RAM defectuosa puede impedir pasar el test de arranque o causar bloqueos y reinicios aleatorios cuando se usan las celdas dañadas."
        },
        {
          tipo: "unica",
          pregunta: "En GNU/Linux, ¿qué hace la orden «memtester 4096 2»?",
          opciones: { A: "Comprueba 4096 MB de memoria RAM haciendo 2 pasadas de test", B: "Borra 4096 MB del disco 2 veces", C: "Crea 2 particiones de 4096 MB", D: "Lanza 4096 pings al router en 2 segundos" },
          correcta: ["A"],
          explicacion: "memtester comprueba la RAM: el primer parámetro es la cantidad de memoria (4096 MB) y el segundo el número de pasadas (2). Se instala con «sudo apt install memtester»."
        },
        {
          tipo: "unica",
          pregunta: "Según el libro, ¿qué componente es el que MÁS se suele averiar en un equipo?",
          opciones: { A: "La placa base", B: "El microprocesador", C: "El teclado", D: "La memoria RAM" },
          correcta: ["A"],
          explicacion: "La placa base es el componente que más se avería (condensadores, circuitería, conectores…). Además su sustitución es de las más laboriosas."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué componente es de los MÁS FÁCILES de comprobar si está averiado?",
          opciones: { A: "La fuente de alimentación (con un polímetro o tester de fuentes)", B: "El chipset de la placa", C: "La GPU integrada", D: "La caché del micro" },
          correcta: ["A"],
          explicacion: "La fuente se comprueba fácilmente midiendo sus voltajes con un polímetro o con un tester de fuentes; también se observa si arranca su ventilador."
        },
        {
          tipo: "unica",
          pregunta: "Muchos fallos de dispositivos (gráfica, sonido, red…) no son de hardware sino de…",
          opciones: { A: "Drivers/controladores desactualizados o incorrectos", B: "La pila CMOS", C: "El speaker", D: "La caja del equipo" },
          correcta: ["A"],
          explicacion: "Antes de dar por averiado un dispositivo conviene comprobar y actualizar sus drivers: muchos problemas se resuelven así."
        },
        {
          tipo: "unica",
          pregunta: "Para diagnosticar la red, ¿qué comprueba la orden «ping 127.0.0.1»?",
          opciones: { A: "Que la pila TCP/IP y la tarjeta de red del propio equipo funcionan (dirección de loopback)", B: "Que el router tiene Internet", C: "Que el DNS de Google responde", D: "La velocidad de descarga" },
          correcta: ["A"],
          explicacion: "127.0.0.1 (o ::1 en IPv6) es la dirección de loopback: si responde, la configuración de red local del equipo funciona. Después se hace ping al router y a Internet."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es la secuencia lógica de pings para localizar un problema de red?",
          opciones: { A: "Loopback (127.0.0.1) → router (puerta de enlace) → un servidor de Internet", B: "Internet → router → loopback", C: "Solo al router", D: "Solo a Internet" },
          correcta: ["A"],
          explicacion: "De dentro hacia fuera: primero el propio equipo (loopback), luego el router y por último Internet. Donde falle el ping, ahí está el problema."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué órdenes sirven para ver o diagnosticar la configuración de red? (señala las correctas)",
          opciones: { A: "ifconfig (GNU/Linux)", B: "ipconfig /all (Windows)", C: "netstat -r (tabla de rutas)", D: "memtester" },
          correcta: ["A", "B", "C"],
          explicacion: "ifconfig e ipconfig muestran la configuración de red; netstat -r muestra la tabla de rutas. memtester es para comprobar la RAM."
        },
        {
          tipo: "unica",
          pregunta: "En la respuesta de un ping, ¿qué indican tiempos muy altos o pérdida de paquetes?",
          opciones: { A: "Problemas de conectividad o mala calidad del enlace", B: "Que el antivirus está activado", C: "Que la RAM falla", D: "Que la fuente da poco voltaje" },
          correcta: ["A"],
          explicacion: "Tiempos de respuesta elevados o paquetes perdidos señalan problemas en la conexión de red."
        },
        {
          tipo: "multiple",
          pregunta: "Ventajas de sustituir el disco mecánico (HDD) de un portátil por un SSD (señala las correctas):",
          opciones: { A: "Mayor velocidad de arranque y de carga de programas", B: "Más resistencia a golpes y vibraciones", C: "Menos calor, ruido y consumo", D: "Mayor capacidad por el mismo precio" },
          correcta: ["A", "B", "C"],
          explicacion: "El SSD es más rápido, resistente (sin partes móviles), silencioso y eficiente. Su desventaja: menor capacidad por el mismo precio."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tamaño de disco montan habitualmente los portátiles?",
          opciones: { A: "2,5 pulgadas (algunos ultraligeros, como el MacBook Air antiguo, 1,8\")", B: "3,5 pulgadas", C: "5,25 pulgadas", D: "1 pulgada" },
          correcta: ["A"],
          explicacion: "Los portátiles usan discos de 2,5\"; algunos equipos muy compactos llegaron a usar 1,8\". Los 3,5\" son de sobremesa."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un «caddy» en un portátil?",
          opciones: { A: "Un adaptador que sustituye la unidad óptica para alojar un segundo disco", B: "Un tipo de batería externa", C: "Un ventilador adicional", D: "Una funda antiestática" },
          correcta: ["A"],
          explicacion: "El caddy ocupa la bahía del lector óptico y permite añadir un segundo disco (p. ej., SSD para el sistema + HDD para datos). Contrapartida: algo más de consumo y perder el lector."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tipo de memoria RAM usan los portátiles?",
          opciones: { A: "SO-DIMM (más corta que la DIMM de sobremesa)", B: "DIMM estándar de sobremesa", C: "SIMM de 30 contactos", D: "Memoria eMMC extraíble" },
          correcta: ["A"],
          explicacion: "Los portátiles montan módulos SO-DIMM. Ojo: en muchos equipos compactos la memoria (o el almacenamiento eMMC) va SOLDADA y no se puede ampliar."
        },
        {
          tipo: "unica",
          pregunta: "Para comprobar el cargador de un portátil que no carga, ¿qué propone el libro?",
          opciones: { A: "Medir con el polímetro el voltaje que entrega el conector del cargador", B: "Abrir el cargador con un destornillador", C: "Cargarlo con otro portátil", D: "Meterlo en arroz" },
          correcta: ["A"],
          explicacion: "Con el polímetro se mide si el cargador entrega su voltaje nominal. También hay que revisar cables retorcidos/pelados y el conector (a veces requiere soldadura). Un cargador universal debe respetar voltaje y amperaje."
        },
        {
          tipo: "unica",
          pregunta: "Al sustituir el teclado de un portátil, ¿qué precaución es fundamental?",
          opciones: { A: "Conectar con cuidado el cable plano (flex) y probar el teclado ANTES de fijarlo del todo", B: "Pegarlo con adhesivo instantáneo", C: "Cambiar también la pantalla", D: "Quitar la BIOS" },
          correcta: ["A"],
          explicacion: "El teclado se conecta mediante un flex delicado; conviene probarlo antes de fijar todo. Además, hay que pedir el teclado con la distribución del país (la Ñ en España)."
        },
        {
          tipo: "unica",
          pregunta: "La pantalla de un portátil muestra líneas verticales de colores que cambian al mover la tapa. ¿Cuál es el sospechoso principal?",
          opciones: { A: "El cable flex de vídeo que une placa y pantalla", B: "La batería", C: "El disco duro", D: "El micrófono" },
          correcta: ["A"],
          explicacion: "Si la imagen cambia al mover la bisagra, el flex de vídeo está dañado o mal asentado. Conectando un monitor externo (HDMI/VGA) se confirma que el resto del equipo va bien."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué dice el libro que manipular la placa base de un portátil es especialmente delicado?",
          opciones: { A: "Porque casi todo va integrado y en miniatura: un error puede ser letal para el equipo", B: "Porque pesa mucho", C: "Porque no existe repuesto", D: "Porque lleva piezas radiactivas" },
          correcta: ["A"],
          explicacion: "En portátiles la integración es máxima (componentes soldados, conectores frágiles, poco espacio); una mala manipulación puede inutilizar el equipo."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema (con autoevaluación del libro)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Qué dirección IP se conoce como dirección de loopback?",
          opciones: { A: "127.0.0.1", B: "192.168.1.1", C: "8.8.8.8", D: "255.255.255.0" },
          correcta: ["A"],
          explicacion: "127.0.0.1 (::1 en IPv6) es la dirección de bucle local: sirve para comprobar que la pila de red del propio equipo funciona. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significan las siglas NIC?",
          opciones: { A: "New Internet Connection", B: "National Informatics Center", C: "Network Internal Cable", D: "Network Interface Card (tarjeta de red)" },
          correcta: ["D"],
          explicacion: "NIC = Network Interface Card, la tarjeta de interfaz de red del equipo. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Señala la afirmación FALSA sobre el calor en los equipos:",
          opciones: { A: "A más velocidad de funcionamiento, más calor desprende un componente", B: "A más voltaje, más calor", C: "El micro, el chipset y la GPU son de los elementos que más se calientan", D: "A igual rendimiento, un micro con más núcleos desprende más calor" },
          correcta: ["D"],
          explicacion: "Es al revés: repartir el trabajo entre más núcleos permite menos velocidad por núcleo y, a igual rendimiento, MENOS calor. Las otras tres son las reglas del libro. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Señala la afirmación FALSA sobre la humedad y los líquidos:",
          opciones: { A: "El gel de sílice ayuda a absorber la humedad de un dispositivo mojado", B: "Nunca se debe usar un secador para secar un dispositivo mojado", C: "Los deshumidificadores reducen la humedad ambiental", D: "Un deshumidificador sirve para refrigerar el equipo" },
          correcta: ["D"],
          explicacion: "El deshumidificador reduce la humedad del aire, no refrigera. Para un dispositivo mojado: apagar, quitar batería si se puede y gel de sílice; nunca calor directo. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué metal es mejor conductor térmico para un disipador o una pasta térmica?",
          opciones: { A: "El aluminio", B: "El hierro", C: "El plástico", D: "La plata" },
          correcta: ["D"],
          explicacion: "La plata es mejor termoconductora que el cobre, y este mejor que el aluminio. Por eso las pastas térmicas con plata son las de más calidad. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Para almacenar una batería de litio mucho tiempo, ¿con qué nivel de carga conviene guardarla?",
          opciones: { A: "En torno al 50 % (el libro recomienda el 40-60 %, la carga de fábrica)", B: "Al 100 %", C: "Al 0 %", D: "Es indiferente" },
          correcta: ["A"],
          explicacion: "Se almacena a media carga (40-60 %), en lugar fresco (< 30 °C). Ni totalmente cargada ni totalmente descargada. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles de estas verificaciones son externas: comprobar cables, escuchar pitidos, observar ledes y mensajes en pantalla?",
          opciones: { A: "Solo los cables", B: "Solo los pitidos", C: "Solo los ledes", D: "Todas ellas son verificaciones externas" },
          correcta: ["D"],
          explicacion: "Todas se hacen sin abrir el equipo: son verificaciones externas. Las internas requieren abrir y manipular componentes. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "«RAM Refresh Failure» y «CMOS battery failed», ¿son mensajes de error de la BIOS?",
          opciones: { A: "Solo el primero", B: "Solo el segundo", C: "Sí, ambos son mensajes del POST de la BIOS", D: "No, son mensajes del sistema operativo" },
          correcta: ["C"],
          explicacion: "Ambos los emite la BIOS durante el arranque: el primero apunta a la RAM y el segundo a la pila de la placa. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Un equipo se apaga solo de vez en cuando. ¿Cuál de estas causas es posible?",
          opciones: { A: "Exceso de calor", B: "Un problema de software", C: "Una fuente de alimentación defectuosa", D: "Cualquiera de las tres anteriores" },
          correcta: ["D"],
          explicacion: "El calor es lo más habitual, pero el software (cuelgues, malware) y una fuente que no entrega bien sus voltajes también provocan apagados. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Para arrancar un equipo con el «mínimo de componentes», ¿qué hace falta?",
          opciones: { A: "Solo el disco duro", B: "Solo la fuente", C: "Placa base y teclado", D: "Placa base, microprocesador y un módulo de memoria" },
          correcta: ["D"],
          explicacion: "El mínimo imprescindible para que el POST arranque: placa, micro y un módulo de RAM (más la fuente). Después se añaden componentes uno a uno. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "A Dimas su disco duro mecánico le hace un ruido metálico y repetitivo. ¿Qué debe hacer?",
          opciones: { A: "Hacer copia de seguridad cuanto antes: el ruido anuncia avería inminente", B: "Ignorarlo, es normal", C: "Golpear suavemente el disco", D: "Desfragmentarlo" },
          correcta: ["A"],
          explicacion: "Los ruidos metálicos en un HDD anuncian fallo mecánico inminente: copia de seguridad inmediata y revisar el estado SMART. (Ejercicio del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tecnología incorporan los discos para autodiagnosticarse y avisar de fallos inminentes?",
          opciones: { A: "SMART (debe estar habilitada en la BIOS y vigilada por un agente software)", B: "POST", C: "CMOS", D: "RAID" },
          correcta: ["A"],
          explicacion: "SMART monitoriza parámetros internos del disco. Para aprovecharla debe estar habilitada en la BIOS y contar con software que la consulte (Smartmontools, HD Tune…)."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué un SSD soporta mejor los golpes que un disco mecánico?",
          opciones: { A: "Porque no tiene partes móviles (es memoria flash)", B: "Porque pesa más", C: "Porque gira más despacio", D: "Porque lleva amortiguadores" },
          correcta: ["A"],
          explicacion: "El SSD no tiene platos ni cabezales: sin partes móviles, los golpes y vibraciones apenas le afectan. El HDD funcionando es muy sensible a los golpes."
        },
        {
          tipo: "unica",
          pregunta: "Tu cuñado asegura que «cuanta más pasta térmica pongas, mejor refrigera». ¿Es cierto?",
          opciones: { A: "No: el exceso de pasta aísla en lugar de conducir; hay que poner una capa fina y justa", B: "Sí, siempre", C: "Solo en verano", D: "Solo con disipadores de aluminio" },
          correcta: ["A"],
          explicacion: "La pasta solo debe rellenar las microimperfecciones entre micro y disipador. En exceso actúa de aislante y empeora la refrigeración. (Ejercicio del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "A un amigo se le ha caído el móvil al agua. ¿Qué consejos son correctos? (señala las correctas)",
          opciones: { A: "Apagarlo inmediatamente y, si se puede, quitar la batería", B: "Secarlo con un secador de pelo bien caliente", C: "Meterlo con bolsitas de gel de sílice para absorber la humedad", D: "Encenderlo cada cinco minutos para ver si ya funciona" },
          correcta: ["A", "C"],
          explicacion: "Apagar, quitar batería y dejar que el gel de sílice absorba la humedad. Nunca aplicar calor directo (secador) ni encenderlo húmedo: provocaría cortocircuitos. (Ejercicio del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «checksum» que comprueba la BIOS?",
          opciones: { A: "Una suma de verificación que detecta si la configuración guardada se ha corrompido", B: "El número de serie de la placa", C: "La velocidad del micro", D: "Una contraseña de arranque" },
          correcta: ["A"],
          explicacion: "El checksum es una suma de comprobación: si no coincide, la configuración CMOS está corrupta (a menudo por pila agotada) y la BIOS avisa con «CMOS checksum error»."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué diferencia hay entre mantenimiento preventivo y correctivo?",
          opciones: { A: "El preventivo se anticipa a las averías (limpieza, revisiones, monitorización); el correctivo repara cuando ya se ha producido el fallo", B: "Son lo mismo", C: "El preventivo solo se aplica a portátiles", D: "El correctivo lo hace siempre el fabricante" },
          correcta: ["A"],
          explicacion: "Preventivo = evitar la avería antes de que ocurra; correctivo = diagnosticar y reparar la avería ya producida. En informática NO se sustituyen piezas por horas de uso, a diferencia de otros sectores."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «flex» de un portátil?",
          opciones: { A: "Un cable plano y flexible que conecta componentes (teclado, pantalla…) con la placa", B: "Una bisagra de la tapa", C: "Un tipo de batería flexible", D: "El cargador universal" },
          correcta: ["A"],
          explicacion: "Los flex son cables planos muy delicados; conectan teclado, táctil o pantalla con la placa. Un flex dañado en la pantalla produce líneas de colores que cambian al mover la tapa."
        },
        {
          tipo: "unica",
          pregunta: "Para transportar componentes sueltos (placas, tarjetas), ¿qué protección es imprescindible contra las descargas?",
          opciones: { A: "Bolsas antiestáticas", B: "Papel de periódico", C: "Film transparente de cocina", D: "Una caja de cartón sin más" },
          correcta: ["A"],
          explicacion: "Las bolsas antiestáticas protegen de la electricidad estática. El foam protege de rayaduras, el film alveolar de golpes y los cacahuetes de poliestireno rellenan huecos."
        },
        {
          tipo: "unica",
          pregunta: "En un portátil moderno con almacenamiento eMMC, ¿qué limitación de ampliación existe?",
          opciones: { A: "La eMMC va soldada a la placa y no se puede sustituir ni ampliar", B: "Solo admite discos de 3,5 pulgadas", C: "Necesita un caddy especial", D: "Solo funciona con Windows" },
          correcta: ["A"],
          explicacion: "La memoria eMMC (y a veces también la RAM) va soldada: en esos equipos no es posible ampliar el almacenamiento interno. Conviene comprobarlo antes de comprar."
        }
      ]
    }
  ]
});
