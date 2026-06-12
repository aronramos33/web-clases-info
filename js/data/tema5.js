/* ============================================================
   tema5.js — Tema 5: Ensamblado de equipos microinformáticos
   Contenido fiel al capítulo 5 del libro (pp. 117-146).
   ============================================================ */

"use strict";

registrarTema({
  id: 5,
  titulo: "Ensamblado de equipos microinformáticos",
  descripcionCorta: "Precauciones de seguridad, herramientas del técnico, secuencia de montaje paso a paso, refrigeración líquida, revisión de la instalación, overclocking y modding.",

  resumen:
    "<p>Este tema enseña a <strong>montar un equipo microinformático desde cero</strong> siguiendo las normas y precauciones de seguridad. " +
    "El <strong>puesto de montaje</strong> debe estar ordenado y limpio, con temperatura adecuada (22-24 °C), luz natural sin reflejos y sin ruido excesivo. " +
    "Sobre la electricidad: usar siempre <strong>enchufes con toma de tierra</strong>, desconectar los equipos antes de manipularlos y quitar la batería a los portátiles. " +
    "Sobre los componentes: <strong>descargarse de energía estática</strong>, manejarlos <strong>por los bordes</strong>, aplicar la <strong>pasta térmica justa</strong> (solo sella los huecos entre micro y disipador; es más termoconductora que el aire), " +
    "<strong>no manipular nunca la fuente de alimentación</strong> (ni desconectada, por sus condensadores), mantener los componentes en su bolsa electrostática y no apilarlos.</p>" +
    "<p>La <strong>secuencia de montaje</strong> tiene 7 pasos: placa base → microprocesador → memoria → unidad SSD → tarjetas de expansión (opcional) → conexionado del resto → verificación. " +
    "Claves: la <strong>máscara del chasis es la toma de tierra</strong> de la placa; los zócalos <strong>LGA tienen los pines en la placa (Intel)</strong> y los <strong>PGA en el micro (AMD)</strong>; " +
    "el zócalo <strong>ZIF</strong> no requiere presión; el disipador se ancla <strong>presionando en cruz</strong> y su conector tiene <strong>4 pines</strong> (el extra es el control PWM). " +
    "Para dual/triple/quad channel: memorias del <strong>mismo modelo</strong> o irán a la velocidad de la más lenta.</p>" +
    "<p>La <strong>refrigeración líquida</strong> es más vistosa pero exige más mantenimiento; siempre se hace una <strong>prueba de estanqueidad</strong> (puenteando el cable verde del ATX con uno negro). " +
    "La <strong>revisión de la instalación</strong> tiene 3 pasos: inspección visual, revisión del arranque (el mensaje «Reboot and select proper boot device» es <strong>buen augurio</strong>) y revisión del resto de componentes. " +
    "El <strong>overclocking</strong> sube la velocidad por encima del nominal (chipsets Z, micros Intel «K», AMD FX); el <strong>underclocking</strong> la baja para ahorrar energía. " +
    "El <strong>modding</strong> es la modificación estética de los equipos.</p>",

  mapa: [
    {
      titulo: "Precauciones y advertencias de seguridad",
      hijos: [
        "Puesto de montaje: orden y limpieza, 22-24 °C, luz natural, sin ruido",
        "Electricidad: toma de tierra, desconectar antes de manipular, quitar batería",
        "Componentes: descarga estática, manejar por los bordes, pasta térmica justa",
        "NO manipular la fuente de alimentación (condensadores), ni desconectada",
        "Bolsa electrostática: no dejar el componente encima; no apilar componentes"
      ]
    },
    {
      titulo: "Herramientas y útiles",
      hijos: [
        "Multímetro, soldador, destornilladores de precisión y Phillips magnetizados",
        "Púas y espátulas de plástico (no dejan marcas), pinzas para flex",
        "Pastilleros para tornillos, pasta térmica (cerámica o metálica)",
        "Brocha, tubo retráctil, tornillería, bridas, cinta aislante"
      ]
    },
    {
      titulo: "Secuencia de montaje (7 pasos)",
      hijos: [
        "1.º Caja y placa base (máscara = toma de tierra, espaciadores)",
        "2.º Microprocesador (LGA/PGA, chaflán, ZIF, disipador en cruz, PWM)",
        "3.º Memoria RAM (compatible; dual channel = mismo modelo)",
        "4.º Unidad SSD (atornillar, SATA, BIOS, particionar)",
        "5.º Tarjetas de expansión · 6.º Conexionado (front panel, ATX) · 7.º Verificación"
      ]
    },
    {
      titulo: "Refrigeración líquida",
      hijos: [
        "Circuito: depósito → bomba → disipador → radiador con ventilador",
        "Primero los componentes que MÁS calor disipan",
        "Prueba de estanqueidad: puentear cable verde con negro de la fuente",
        "Depósito al máximo; el nivel nunca debe bajar de la cota inferior"
      ]
    },
    {
      titulo: "Revisión, overclocking y modding",
      hijos: [
        "Revisión: inspección visual → arranque (caja abierta) → resto de componentes",
        "«Reboot and select proper boot device» = buen augurio",
        "Overclocking: sobre el nominal (FSB, chipset Z, micros «K», AMD FX)",
        "Underclocking: bajar rendimiento para ahorrar energía",
        "Modding: tuneado estético (modder, mod, ledes, fanbus, vúmetros)"
      ]
    }
  ],

  conceptosClave: [
    "La <strong>temperatura ideal</strong> de una oficina/sala de trabajo ronda los <strong>22-24 grados</strong>.",
    "Los equipos con polvo se limpian <strong>fuera de la instalación</strong>, en un sitio ventilado, para que el polvo no recircule.",
    "Usar siempre <strong>enchufes con toma de tierra</strong> para los equipos microinformáticos.",
    "<strong>Desconectar</strong> los equipos de la electricidad antes de manipularlos; en portátiles, <strong>quitar la batería</strong> cuanto antes.",
    "Manejar los componentes <strong>por los bordes</strong>, sin tocar pines ni conexiones.",
    "La <strong>pasta térmica</strong> sirve <strong>solamente para sellar los huecos</strong> entre el disipador y el micro: se aplica la justa.",
    "Se aplica pasta térmica porque es <strong>más termoconductora que el aire</strong>.",
    "La pasta térmica antigua se limpia con <strong>alcohol isopropílico</strong> (no deja humedad ni residuos).",
    "<strong>NO manipular la fuente de alimentación</strong>, ni siquiera desconectada: sus <strong>condensadores</strong> pueden producir descargas.",
    "Al sacar un componente de su bolsa electrostática, <strong>no dejarlo encima de la bolsa</strong> (puede haber almacenado estática). <strong>No apilar</strong> componentes.",
    "El <strong>multímetro</strong> mide si llega corriente o si la fuente da los voltajes nominales.",
    "Las <strong>púas y espátulas de plástico</strong> no dejan marcas en los dispositivos (los metálicos sí).",
    "Las <strong>pinzas</strong> sirven para conectar <strong>flex</strong> (cables planos flexibles) y conectores pequeños.",
    "Destornilladores <strong>Phillips (de estrella)</strong> mejor con <strong>punta magnetizada</strong>.",
    "Cuanta más <strong>plata</strong> tenga la pasta térmica, más <strong>termoconductora</strong> (y más cara) será.",
    "El <strong>tubo retráctil</strong> se retrae al calentarse, sella la conexión y evita falsos contactos.",
    "Equipo básico: <strong>caja, placa base, memoria, procesador y unidad SSD</strong>.",
    "La <strong>máscara del chasis</strong> es la <strong>toma de tierra</strong> de los componentes de la placa base: elemento de seguridad.",
    "Zócalo <strong>LGA</strong>: pines en la <strong>placa base</strong> (normalmente <strong>Intel</strong>). Zócalo <strong>PGA</strong>: pines en el <strong>micro</strong> (normalmente <strong>AMD</strong>).",
    "El <strong>chaflán</strong> del micro y del socket deben coincidir para no doblar pines.",
    "Zócalo <strong>ZIF</strong> (zero insertion force): el micro se aloja <strong>sin presión</strong> y se autofija al bajar la palanca.",
    "El disipador se ancla <strong>presionando en cruz</strong> sobre sus anclajes.",
    "El conector del disipador tiene <strong>cuatro pines</strong>: el cable extra es el <strong>control PWM</strong> (varía la velocidad según la temperatura).",
    "Las DDR4 tienen forma algo <strong>curvada</strong> para favorecer la inserción en el slot.",
    "Dual/triple/quad channel: memorias del <strong>mismo modelo</strong> (capacidad y velocidad); si son distintas, irán a la velocidad de <strong>la más lenta</strong>.",
    "Discos mecánicos y lectores ópticos se instalan <strong>igual que una SSD</strong>; solo difieren en el tamaño.",
    "Los <strong>ledes del front panel tienen polaridad</strong>: mal conectados, no lucen. Probar siempre el <strong>botón de reset</strong>.",
    "Los cables internos <strong>USB 3.0 tienen más pines</strong> que los USB 2.0.",
    "Las tarjetas wifi se instalan en <strong>PCI express X1</strong>, reservando el <strong>X16</strong> para tarjetas gráficas.",
    "Refrigeración líquida: si se refrigeran varios componentes, el líquido pasa <strong>primero por el que MÁS calor disipa</strong>.",
    "<strong>Prueba de estanqueidad</strong>: puentear el <strong>cable verde</strong> del conector ATX con cualquier <strong>cable negro</strong> para arrancar la fuente.",
    "El nivel del depósito <strong>nunca debe bajar de su cota inferior</strong>: la bomba no podría recircular el líquido.",
    "El mensaje <strong>«Reboot and select proper boot device»</strong> en el primer arranque <strong>no es un error</strong>: es buen augurio.",
    "Para entrar en la BIOS se pulsa <strong>F2</strong> o <strong>supr</strong> en el arranque.",
    "<strong>Overclocking</strong>: subir la velocidad <strong>por encima del nominal</strong>. Si no se siguen los consejos del fabricante, <strong>se pierde la garantía</strong>.",
    "Subir la <strong>frecuencia base del FSB</strong> mejora micro, memoria y buses; subir el <strong>multiplicador</strong> solo el micro (Intel «K» y AMD FX lo tienen desbloqueado).",
    "Una mejora del <strong>10 %</strong> con overclocking ya es significativa; antes hay que identificar los <strong>cuellos de botella</strong>.",
    "<strong>Modding</strong>: alterar los equipos para que sean más atractivos. La persona es el <strong>modder</strong> y el equipo tuneado, el <strong>mod</strong>."
  ],

  frasesMemorizar: [
    "«Temperatura de la sala: <strong>22-24 grados</strong>».",
    "«Componentes siempre <strong>por los bordes</strong> y tras <strong>descargarme de estática</strong>».",
    "«Pasta térmica: <strong>la justa</strong> — solo sella huecos y es más termoconductora que el aire».",
    "«Pasta vieja se limpia con <strong>alcohol isopropílico</strong>».",
    "«La <strong>fuente de alimentación no se abre NUNCA</strong>, ni desconectada: condensadores».",
    "«<strong>L</strong>GA = pines en <strong>L</strong>a placa (Intel); <strong>P</strong>GA = <strong>P</strong>ines en el micro (AMD)».",
    "«ZIF = <strong>cero fuerza</strong>: el micro se posa, no se aprieta».",
    "«Disipador: <strong>presionar en cruz</strong> y conectar su cable de <strong>4 pines (PWM)</strong>».",
    "«La <strong>máscara</strong> del chasis es la <strong>toma de tierra</strong>: no olvidarla».",
    "«Dual channel: memorias <strong>iguales</strong>, o todas a la velocidad de la <strong>más lenta</strong>».",
    "«Secuencia: <strong>placa → micro → RAM → SSD → tarjetas → cables → verificar</strong>».",
    "«Refrigeración líquida: primero el componente que <strong>MÁS calor</strong> disipa, y siempre <strong>prueba de estanqueidad</strong> (verde con negro)».",
    "«Primer arranque: <strong>caja abierta</strong>. “Reboot and select proper boot device” = <strong>buena señal</strong>».",
    "«Overclocking = <strong>sobre el nominal</strong>; underclocking = bajar para <strong>ahorrar energía</strong>».",
    "«FSB sube <strong>todo</strong> (micro + memoria + buses); el multiplicador solo el <strong>micro</strong>».",
    "«Modding: <strong>modder</strong> tunea y el resultado es el <strong>mod</strong>»."
  ],

  apartados: [
    {
      titulo: "5.1 Precauciones y advertencias de seguridad",
      html:
        "<h4>El puesto de montaje</h4>" +
        "<ul>" +
        "<li><strong>Orden y limpieza:</strong> herramientas y componentes ordenados y etiquetados. Los equipos con polvo se aspiran o limpian <strong>fuera de la instalación</strong>, en un sitio ventilado, para que el polvo no recircule.</li>" +
        "<li><strong>Temperatura, humedad y ventilación:</strong> evitar humedad excesiva y corrientes de aire. Temperatura ideal: <strong>22-24 grados</strong>.</li>" +
        "<li><strong>Iluminación:</strong> lo óptimo es la <strong>luz natural</strong>, evitando reflejos en la pantalla y grandes contrastes de luz.</li>" +
        "<li><strong>Ruido:</strong> evitarlo a toda costa; servidores y workstations ruidosos van en <strong>salas aparte</strong> convenientemente refrigeradas.</li>" +
        "<li><strong>Otros factores:</strong> instalación eléctrica bien dimensionada, factor psicosocial positivo (evitar <em>mobbing</em> y <em>burnout</em>), pintura y mobiliario adecuados. No bloquear salidas de incendio ni tapar extintores.</li>" +
        "</ul>" +
        "<h4>Precauciones sobre la electricidad</h4>" +
        "<ul>" +
        "<li>Utilizar siempre <strong>enchufes con toma de tierra</strong>.</li>" +
        "<li><strong>Desconectar</strong> los equipos de la electricidad antes de manipularlos.</li>" +
        "<li>En portátiles y smartphones, <strong>desconectar la batería cuanto antes</strong> (mejor antes de manipular).</li>" +
        "</ul>" +
        "<h4>Precauciones sobre los componentes electrónicos</h4>" +
        "<ol>" +
        "<li><strong>Descargarse de energía estática</strong> antes de tocar componentes.</li>" +
        "<li><strong>Manejar los componentes por los bordes</strong>, sin tocar pines ni conexiones.</li>" +
        "<li><strong>Instalar la pasta térmica justa:</strong> el exceso puede ser más perjudicial que no ponerla. La pasta <strong>solo sella los minúsculos huecos de aire</strong> entre micro y disipador, y se usa porque es <strong>más termoconductora que el aire</strong>. Los disipadores suelen traerla preaplicada. La pasta antigua se limpia con <strong>alcohol isopropílico</strong>, que no deja humedad ni residuos.</li>" +
        "<li><strong>No manipular la fuente de alimentación</strong>, ni siquiera desconectada: tiene <strong>condensadores de alta capacidad</strong> que pueden producir descargas.</li>" +
        "<li><strong>Mantener los componentes en su bolsa electrostática</strong> y, al sacarlos, <strong>no dejarlos encima de la bolsa</strong> (su superficie puede haber almacenado estática).</li>" +
        "<li><strong>No apilar los componentes.</strong></li>" +
        "</ol>" +
        "<p><strong>Otras recomendaciones:</strong> evitar los líquidos, evitar el polvo dentro de los equipos (provoca sobrecalentamiento) y <strong>no forzar los componentes</strong>: es preferible tardar más que estropear algo.</p>"
    },
    {
      titulo: "5.2 Herramientas y útiles del técnico",
      html:
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Herramienta</th><th>Para qué sirve</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>Multímetro</strong></td><td>Medir si llega corriente a un componente o si la fuente da los voltajes nominales. Fundamental.</td></tr>" +
        "<tr><td><strong>Soldador</strong></td><td>Unir cables, crear conectores, conectar peines de pines a una placa.</td></tr>" +
        "<tr><td><strong>Destornilladores de precisión</strong></td><td>Juego completo y de calidad (los malos pueden trasroscar tornillos).</td></tr>" +
        "<tr><td><strong>Púas y espátulas de plástico</strong></td><td>Desensamblar portátiles, pantallas, smartphones. El plástico <strong>no deja marcas</strong>; lo metálico sí.</td></tr>" +
        "<tr><td><strong>Pinzas</strong></td><td>Conectar <strong>flex</strong> (cables planos flexibles) y conectores pequeños en tabletas y smartphones.</td></tr>" +
        "<tr><td><strong>Destornilladores Phillips y planos</strong></td><td>Phillips = «de estrella». Mejor con <strong>punta magnetizada</strong> para no perder tornillos.</td></tr>" +
        "<tr><td><strong>Recipientes tipo pastillero</strong></td><td>Guardar los tornillos por tandas al desensamblar, cerrando compartimentos.</td></tr>" +
        "<tr><td><strong>Pasta térmica</strong></td><td>Cerámica o metálica (blanquecina o grisácea). Más <strong>plata</strong> = más termoconductora y más cara.</td></tr>" +
        "<tr><td><strong>Brocha</strong></td><td>Limpiar el interior de los equipos (los sobremesa del suelo llegan muy sucios).</td></tr>" +
        "<tr><td><strong>Tubo retráctil</strong></td><td>Al calentarse se retrae, sella la conexión y protege de falsos contactos.</td></tr>" +
        "<tr><td><strong>Tornillería</strong></td><td>No todos los tornillos son iguales: usar la métrica adecuada a cada fijación.</td></tr>" +
        "<tr><td><strong>Otros</strong></td><td>Bridas de nailon, cinta aislante, pegamento, flexómetro, tijeras, alicates.</td></tr>" +
        "</tbody></table></div>"
    },
    {
      titulo: "5.3 Secuencia de montaje de un equipo",
      html:
        "<p>Un equipo básico consta de <strong>caja, placa base, memoria, procesador y unidad SSD</strong> (ampliable con gráfica, wifi, segunda SSD…). Pasos del montaje:</p>" +
        "<ol>" +
        "<li><strong>Apertura de la caja y montaje de la placa base.</strong></li>" +
        "<li><strong>Montaje del microprocesador.</strong></li>" +
        "<li><strong>Instalación de la memoria.</strong></li>" +
        "<li><strong>Montaje de la unidad SSD.</strong></li>" +
        "<li><strong>Montaje de las tarjetas de expansión</strong> (opcional).</li>" +
        "<li><strong>Conexionado del resto de componentes.</strong></li>" +
        "<li><strong>Verificación de la instalación.</strong></li>" +
        "</ol>" +
        "<p>No hay una sola manera: hay técnicos que prefieren instalar micro y disipador <strong>antes</strong> de fijar la placa al chasis.</p>"
    },
    {
      titulo: "5.4 Placa base, procesador y memoria RAM",
      html:
        "<h4>Montaje de la placa base</h4>" +
        "<p>En la caja vienen la <strong>máscara del chasis</strong>, los cables SATA, los manuales y la placa. Pasos: colocar la <strong>máscara</strong> y fijar la placa al chasis con la tornillería adecuada (tornillos espaciadores, arandelas). Un fallo típico es <strong>no colocar todos los espaciadores</strong>.</p>" +
        "<p>⚠️ La placa viene en una <strong>bolsa antiestática</strong> (gris): no sacarla antes de tiempo y apoyarla siempre <strong>encima de la bolsa</strong>. La <strong>máscara</strong> cumple una misión fundamental: es la <strong>toma de tierra</strong> de los componentes de la placa base, un elemento de seguridad que no hay que olvidar.</p>" +
        "<h4>Ensamblado del procesador y la refrigeración</h4>" +
        "<div class=\"tabla-scroll\"><table>" +
        "<thead><tr><th>Zócalo</th><th>¿Dónde están los pines?</th><th>Fabricante habitual</th></tr></thead>" +
        "<tbody>" +
        "<tr><td><strong>LGA</strong></td><td>En la <strong>placa base</strong> (lleva protector de plástico)</td><td><strong>Intel</strong></td></tr>" +
        "<tr><td><strong>PGA</strong></td><td>En el <strong>microprocesador</strong></td><td><strong>AMD</strong></td></tr>" +
        "</tbody></table></div>" +
        "<ol>" +
        "<li>Liberar el zócalo del protector (si es LGA) y abrir la trampilla.</li>" +
        "<li>Hacer coincidir el <strong>chaflán</strong> del micro con el del socket para no doblar pines.</li>" +
        "<li>Dejar el micro en el socket <strong>sin apretar</strong>: el zócalo <strong>ZIF</strong> (<em>zero insertion force</em>) lo autofija al bajar la palanca.</li>" +
        "<li>Anclar el disipador <strong>presionando en cruz</strong> sobre sus anclajes (de fábrica ya vienen orientados para solo apretar).</li>" +
        "<li>Conectar el cable del disipador al conector <strong>CPU fan</strong>: tiene <strong>4 pines</strong>, el extra es el <strong>control PWM</strong>, que varía la velocidad de giro según la temperatura del micro (menos ruido).</li>" +
        "</ol>" +
        '<figure class="figura"><img src="assets/img/tema5/fig5-10.jpg" alt="Secuencia de cuatro pasos con fotos: liberar el zócalo, colocar el microprocesador, fijarlo y colocar el disipador" loading="lazy"><figcaption>Figura 5.10 del libro — Ensamblado del procesador y sistema de refrigeración.</figcaption></figure>' +
        "<h4>Instalación de la memoria RAM</h4>" +
        "<p>El tipo de memoria <strong>tiene que ser compatible con la placa base</strong>. Las <strong>DDR4</strong> han cambiado la forma recta por una <strong>algo curvada</strong> para favorecer la inserción. Para <strong>dual, triple y quad channel</strong> se aconsejan memorias de calidad y del <strong>mismo modelo</strong> (capacidad y velocidad); pueden usarse distintas, pero irán a la velocidad de <strong>la más lenta</strong>.</p>"
    },
    {
      titulo: "5.5 SSD, adaptadores y resto de componentes",
      html:
        "<h4>Instalación de discos, unidades SSD y ópticas</h4>" +
        "<p>Herramienta principal: destornillador <strong>Phillips</strong> + cables <strong>SATA</strong>. Pasos: <strong>1)</strong> fijar y atornillar la unidad en su alojamiento (sin vibraciones ni desplazamientos); <strong>2)</strong> conectar los dos cables (<strong>datos</strong> —a la unidad y al puerto SATA de la placa— y <strong>alimentación</strong>); <strong>3)</strong> comprobar la unidad en la <strong>BIOS</strong> y <strong>particionarla</strong> (normalmente durante la instalación del sistema operativo).</p>" +
        "<p>📌 Los <strong>discos mecánicos y lectores ópticos se instalan igual</strong> que una SSD: mismos conectores y fijación, solo difieren en el tamaño.</p>" +
        "<h4>Fijación y conexión del resto</h4>" +
        "<ul>" +
        "<li><strong>Front panel:</strong> los <strong>ledes tienen polaridad</strong>; mal conectados, no lucen. Probar siempre el <strong>botón de reset</strong> (olvidarlo es motivo de queja del cliente).</li>" +
        "<li><strong>Ventiladores de la caja, USB y sonido:</strong> fáciles de conectar gracias al <strong>pin ciego</strong> del conector.</li>" +
        "<li><strong>Cables ATX:</strong> el de <strong>24 contactos</strong> y el <strong>ATX-12 V</strong>, para alimentar placa y procesador.</li>" +
        "<li><strong>USB 3.0 interno:</strong> diferente del USB 2.0 porque tiene <strong>más pines</strong>; da puertos rápidos frontales/laterales.</li>" +
        "<li><strong>Tarjeta wifi:</strong> se inserta en el slot <strong>PCI express X1</strong> (igual que muchas de sonido), <strong>reservando el X16</strong> para tarjetas rápidas como las gráficas. Trae dos anclajes (caja ATX y formato reducido) y hay que atornillarla bien para que no se desencaje.</li>" +
        "</ul>" +
        '<figure class="figura"><img src="assets/img/tema5/fig5-13.jpg" alt="Secuencia de cuatro pasos con fotos: conectar el front panel, los ventiladores, los puertos USB y de sonido y el conector ATX 12V" loading="lazy"><figcaption>Figura 5.13 del libro — Cables de conexión de la placa base.</figcaption></figure>' +
        '<figure class="figura"><img src="assets/img/tema5/fig5-16.jpg" alt="Dos fotos: inserción de la tarjeta wifi en el slot PCIe X1 y fijación al chasis" loading="lazy"><figcaption>Figura 5.16 del libro — Pasos en la instalación de una tarjeta wifi.</figcaption></figure>'
    },
    {
      titulo: "5.6 Sistemas de refrigeración líquida",
      html:
        "<p>Lo habitual (y lo más <strong>económico y eficiente</strong>) son disipadores y ventiladores. La <strong>refrigeración líquida</strong> es más <strong>vistosa</strong>, tiene rendimiento aceptable pero necesita <strong>más mantenimiento</strong>. Puede enfriar solo el micro o también chipset y tarjeta gráfica.</p>" +
        "<p><strong>Funcionamiento:</strong> del <strong>depósito</strong> se <strong>bombea</strong> líquido al <strong>disipador</strong> del componente; al calentarse pasa al <strong>radiador</strong>, donde se enfría en tuberías muy delgadas aireadas por un ventilador. Si se refrigeran varios componentes, el líquido pasa <strong>primero por los que MÁS calor disipan</strong> (ej.: primero el procesador y luego el chipset).</p>" +
        "<h4>Prueba de estanqueidad</h4>" +
        "<p><strong>Siempre</strong> que se instala una refrigeración líquida se hace esta prueba, que garantiza que no habrá pérdidas y que el líquido recircula bien. Para arrancar la fuente fuera del equipo se <strong>puentea con un clip el cable verde del conector ATX con cualquier cable negro</strong>.</p>" +
        "<h4>Montaje y puesta en funcionamiento</h4>" +
        "<ul>" +
        "<li>Fijar bien disipador y bomba; verificar que el depósito marca el nivel <strong>al máximo</strong> (al recircular, bajará).</li>" +
        "<li>El nivel <strong>nunca debe bajar de su cota inferior</strong>: indicaría que la bomba no puede recircular el líquido y el sistema se calentará.</li>" +
        "<li>Medir las temperaturas de los elementos refrigerados; con valores estables y sin pérdidas, la instalación es correcta.</li>" +
        "</ul>"
    },
    {
      titulo: "5.7 Revisión de la instalación",
      html:
        "<p>Se aconseja revisar en <strong>3 pasos</strong>: inspección visual → revisión del arranque → revisión del resto de componentes.</p>" +
        "<h4>1) Inspección visual</h4>" +
        "<ul>" +
        "<li>Tornillos de anclaje de la placa bien atornillados.</li>" +
        "<li>RAM correctamente fijada (verificar pestañas).</li>" +
        "<li>Disipador bien fijado y sin movimiento.</li>" +
        "<li>Cables ATX y ATX-12 V; unidades SSD conectadas; resto de conectores (CPU fan, front panel, USB, sonido…).</li>" +
        "</ul>" +
        "<h4>2) Revisión del arranque</h4>" +
        "<p>En el primer arranque sin sistema operativo aparece <strong>«Reboot and select proper boot device…»</strong>: <strong>no es un error</strong>, avisa de que no hay dispositivo de arranque. Verlo suele ser <strong>buen augurio</strong>. Es aconsejable arrancar por primera vez <strong>con la caja abierta</strong> para observar los ventiladores. Comprobar ledes de encendido, disco y botón de reset.</p>" +
        "<p>La <strong>secuencia de arranque</strong> es el orden y prioridad con que la BIOS busca un dispositivo de arranque. Se suele configurar <strong>primero el pendrive/disco USB</strong> y luego la SSD/disco mecánico, para poder instalar el sistema operativo. A la BIOS se accede con <strong>F2</strong> o <strong>supr</strong>.</p>" +
        '<figure class="figura"><img src="assets/img/tema5/fig5-29.jpg" alt="Pantalla de la BIOS con la configuración de la prioridad de arranque" loading="lazy"><figcaption>Figura 5.29 del libro — Configuración en la BIOS del dispositivo de arranque.</figcaption></figure>' +
        "<h4>3) Revisión del resto de componentes</h4>" +
        "<p>Verificar tarjeta wifi, unidad óptica, segunda unidad… y <strong>todos los puertos uno por uno</strong> (los USB de la caja, lector de tarjetas, conectores de sonido…).</p>"
    },
    {
      titulo: "5.8 Overclocking, underclocking y modding",
      html:
        "<p><strong>Overclocking:</strong> subir la velocidad del sistema <strong>por encima del nominal del fabricante</strong> para obtener el mayor rendimiento. <strong>Underclocking:</strong> lo contrario, bajar deliberadamente el rendimiento para <strong>ahorrar energía</strong> (con poca carga de trabajo). Si se hace overclocking <strong>sin seguir los consejos del fabricante, se pierde la garantía</strong>. Consecuencias posibles: funcionar más eficientemente, dejar de funcionar o, en caso extremo, estropear un componente.</p>" +
        "<p>No solo se overclockea el procesador: al subir la <strong>frecuencia base del FSB</strong> mejora el sistema globalmente, porque de ella dependen la velocidad del <strong>micro, la memoria y los buses</strong>. También puede subirse solo el micro, solo la memoria, otro componente o una combinación.</p>" +
        "<h4>Hardware indicado</h4>" +
        "<ul>" +
        "<li>Placa con <strong>chipset ZXXX</strong> (ej.: <strong>Z370</strong>) para Intel.</li>" +
        "<li>Micro con <strong>multiplicador desbloqueado</strong>: Intel terminados en <strong>«K»</strong> y <strong>AMD serie FX</strong>. Permiten además controlar el voltaje.</li>" +
        "<li>Vigilar la temperatura y, si es necesario, cambiar el disipador por otro mejor. Las BIOS/UEFI actuales lo hacen gráficamente con un control deslizante.</li>" +
        "</ul>" +
        "<h4>Tras el overclocking</h4>" +
        "<p>Comprobar la estabilidad con un <strong>benchmark</strong> (en Ubuntu, <strong>Hardinfo</strong>: <code>sudo apt install hardinfo</code>). Una mejora del <strong>10 % ya es significativa</strong>. Antes de nada hay que identificar los <strong>cuellos de botella</strong>: si el cuello está en el almacenamiento, no tiene sentido acelerar un micro que va al 15 %.</p>" +
        "<h4>Modding</h4>" +
        "<p>Modificar los equipos para que sean estéticamente (a veces también funcionalmente) más atractivos. La persona es el <strong>modder</strong> y el equipo tuneado, el <strong>mod</strong>. Elementos comerciales: rejillas que reaccionan al <strong>UV</strong>, cables iluminados, <strong>ventiladores con ledes</strong>, paneles, <strong>tiras de ledes</strong> (antes, cátodos), <strong>fanbus</strong>/controladores de ventiladores, <strong>vúmetros</strong> (nivel de ruido), controladores de temperatura, <strong>baybuses y rheobuses</strong>.</p>"
    }
  ],

  glosario: [
    { termino: "Baybus", definicion: "Componente que permite ajustar la velocidad de los ventiladores controlando el voltaje que se les suministra." },
    { termino: "Bolsa antiestática/electrostática", definicion: "Bolsa (normalmente gris) que protege los componentes de las descargas electrostáticas. No apoyar el componente encima al sacarlo." },
    { termino: "Benchmark", definicion: "Prueba de rendimiento que permite comprobar si un sistema es estable y rinde correctamente (por ejemplo, los de Hardinfo)." },
    { termino: "Chaflán", definicion: "Hendidura del microprocesador y del socket que deben coincidir al insertar el micro para no doblar pines." },
    { termino: "Control PWM", definicion: "Sistema que controla, mediante pulsos, la velocidad del ventilador de la CPU según la temperatura del micro; también reduce el ruido. Es el cuarto cable del conector del disipador." },
    { termino: "Cuello de botella", definicion: "Componente que limita el rendimiento global del sistema; hay que identificarlo antes de hacer overclocking." },
    { termino: "Fan", definicion: "Ventilador (en inglés)." },
    { termino: "Fanbus", definicion: "Sistema para controlar los ventiladores de un equipo." },
    { termino: "Flex", definicion: "Cable plano flexible de dispositivos pequeños; se conecta con pinzas." },
    { termino: "FSB", definicion: "Front Side Bus: bus que conecta los elementos más rápidos del sistema (microprocesador, memoria, chipset y PCI ×16)." },
    { termino: "LGA", definicion: "Zócalo con los pines en la placa base. Lo utiliza normalmente Intel." },
    { termino: "Máscara del chasis", definicion: "Chapita de la caja que actúa como toma de tierra de los componentes de la placa base; elemento de seguridad." },
    { termino: "Mobbing", definicion: "Acoso laboral." },
    { termino: "Mod", definicion: "Resultado del modding: el equipo tuneado por el modder." },
    { termino: "Modding", definicion: "Modificar o alterar los equipos para que sean estéticamente (a veces funcionalmente) más atractivos." },
    { termino: "Overclocking", definicion: "Subir la velocidad del sistema por encima del nominal del fabricante para obtener el mayor rendimiento del hardware." },
    { termino: "Pasta térmica", definicion: "Compuesto cerámico o metálico que sella los huecos de aire entre micro y disipador por ser más termoconductor que el aire. Más plata = más termoconductora y cara." },
    { termino: "PGA", definicion: "Zócalo en el que los pines están en el microprocesador. Lo utiliza normalmente AMD." },
    { termino: "Prueba de estanqueidad", definicion: "Prueba que se realiza siempre al instalar una refrigeración líquida para asegurar que no hay pérdidas y el líquido recircula bien." },
    { termino: "Rheobus", definicion: "Similar a baybus: control de la velocidad de los ventiladores." },
    { termino: "Secuencia de arranque", definicion: "Orden y prioridad con que la BIOS busca un dispositivo de arranque del equipo." },
    { termino: "Sistema estanco", definicion: "Que no tiene fugas de agua." },
    { termino: "Slot", definicion: "Ranura o espacio para insertar un componente." },
    { termino: "Tubo retráctil", definicion: "Tubo que al calentarse se retrae, sella la conexión y la protege de falsos contactos." },
    { termino: "Underclocking", definicion: "Bajar deliberadamente el rendimiento de un sistema para consumir menos energía, normalmente con poca carga de trabajo." },
    { termino: "ZIF", definicion: "Zero Insertion Force: zócalo en el que el micro se aloja sin presión y se autofija al bajar la palanca." }
  ],

  paquetes: [
    {
      nombre: "Paquete 1 · Precauciones de seguridad y herramientas (5.2-5.3)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Cuál es la temperatura ideal de una oficina o sala de trabajo?",
          opciones: { A: "15-18 grados", B: "22-24 grados", C: "27-30 grados", D: "No influye en el trabajo del técnico" },
          correcta: ["B"],
          explicacion: "El libro indica que una temperatura ideal en una oficina ronda los 22-24 grados, ajustándola según la estación para evitar gasto energético excesivo."
        },
        {
          tipo: "unica",
          pregunta: "¿Dónde se aconseja limpiar o aspirar los equipos del cliente que llegan con polvo?",
          opciones: { A: "En el propio puesto de montaje", B: "Fuera de la instalación, en un sitio ventilado", C: "En la sala de servidores", D: "No hace falta limpiarlos" },
          correcta: ["B"],
          explicacion: "Se limpian fuera de la instalación, en un sitio ventilado, para que el polvo no recircule en el entorno de trabajo."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué tipo de enchufes deben usarse siempre para los equipos microinformáticos?",
          opciones: { A: "Enchufes con toma de tierra", B: "Enchufes sin toma de tierra", C: "Cualquier regleta", D: "Adaptadores de viaje" },
          correcta: ["A"],
          explicacion: "Una de las precauciones sobre la electricidad es utilizar siempre enchufes con toma de tierra para los equipos microinformáticos."
        },
        {
          tipo: "unica",
          pregunta: "Antes de manipular un portátil o smartphone, ¿qué hay que hacer cuanto antes?",
          opciones: { A: "Formatearlo", B: "Desconectar la batería", C: "Quitarle la pasta térmica", D: "Apilarlo con otros equipos" },
          correcta: ["B"],
          explicacion: "En portátiles, smartphones, etc., hay que desconectar la batería cuanto antes; si puede ser, antes de manipularlos."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las precauciones correctas al manipular componentes electrónicos:",
          opciones: { A: "Descargarse de energía estática", B: "Manejar los componentes por los bordes", C: "Apilar los componentes para ahorrar espacio", D: "No apilar los componentes" },
          correcta: ["A", "B", "D"],
          explicacion: "Hay que descargarse de estática, manejar los componentes por los bordes (sin tocar pines) y NO apilarlos."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué sirve realmente la pasta térmica?",
          opciones: { A: "Para pegar el disipador al micro", B: "Para sellar los minúsculos huecos de aire entre el disipador y el microprocesador", C: "Para aislar eléctricamente el micro", D: "Para enfriar directamente el procesador como un refrigerante" },
          correcta: ["B"],
          explicacion: "La cubierta del micro y la base del disipador no son planas al 100 %: la pasta solo sella esos huecos. Por eso no hay que aplicar mucha cantidad."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué se aplica pasta térmica entre el micro y el disipador?",
          opciones: { A: "Porque es más termoconductora que el aire", B: "Porque es aislante térmico", C: "Porque evita la corrosión", D: "Porque lubrica los anclajes" },
          correcta: ["A"],
          explicacion: "Se aplica pasta térmica porque es más termoconductora que el aire que quedaría en los huecos."
        },
        {
          tipo: "unica",
          pregunta: "¿Con qué se recomienda limpiar la pasta térmica antigua de un microprocesador?",
          opciones: { A: "Con un trapo húmedo", B: "Con agua y jabón", C: "Con alcohol isopropílico", D: "Con aire comprimido" },
          correcta: ["C"],
          explicacion: "El alcohol isopropílico no deja humedad ni residuos al evaporarse. Un trapo húmedo es una opción trampa: dejaría humedad."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué NO debe manipularse la fuente de alimentación ni siquiera desconectada?",
          opciones: { A: "Porque pesa demasiado", B: "Porque tiene condensadores de alta capacidad que pueden producir descargas", C: "Porque se pierde la garantía del equipo", D: "Sí se puede manipular si está desconectada" },
          correcta: ["B"],
          explicacion: "La fuente tiene condensadores con alta capacidad que pueden producir descargas aunque esté desconectada de la electricidad."
        },
        {
          tipo: "unica",
          pregunta: "Al sacar un componente de su bolsa electrostática, ¿qué hay que evitar?",
          opciones: { A: "Tocarlo con guantes", B: "Dejarlo encima de la propia bolsa", C: "Instalarlo inmediatamente", D: "Mirar sus conectores" },
          correcta: ["B"],
          explicacion: "Hay que evitar dejar el componente encima de la bolsa por si su superficie ha almacenado energía estática."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué herramienta permite medir si una fuente de alimentación está dando correctamente los voltajes nominales?",
          opciones: { A: "El soldador", B: "El multímetro", C: "El flexómetro", D: "El tubo retráctil" },
          correcta: ["B"],
          explicacion: "El multímetro es fundamental: mide si llega corriente a un componente o si la fuente proporciona los voltajes nominales."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué ventaja tienen las púas y espátulas de plástico frente a las herramientas metálicas al abrir portátiles o smartphones?",
          opciones: { A: "Son más resistentes", B: "No dejan marcas en los dispositivos", C: "Hacen más palanca", D: "Son magnéticas" },
          correcta: ["B"],
          explicacion: "Las herramientas de plástico no dejan marcas; con destornilladores o punzones metálicos se notarían los puntos donde se hizo fuerza."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué son de gran utilidad las pinzas en dispositivos pequeños?",
          opciones: { A: "Para conectar flex (cables planos flexibles) y conectores pequeños", B: "Para atornillar la placa base", C: "Para aplicar pasta térmica", D: "Para puentear la fuente" },
          correcta: ["A"],
          explicacion: "En tabletas, smartphones y algunos portátiles, las pinzas sirven para conectar flex y conectores pequeños difíciles de manejar con los dedos."
        },
        {
          tipo: "unica",
          pregunta: "Los destornilladores Phillips también se llaman…",
          opciones: { A: "Planos", B: "De estrella", C: "Torx", D: "De precisión" },
          correcta: ["B"],
          explicacion: "Los Phillips son los «de estrella». Mejor con punta magnetizada para no perder tornillos y atornillar con comodidad."
        },
        {
          tipo: "unica",
          pregunta: "Sobre la pasta térmica, ¿qué ocurre cuanto más contenido en plata tiene?",
          opciones: { A: "Es más termoconductora y, generalmente, más cara", B: "Es más barata", C: "Es menos termoconductora", D: "Se vuelve aislante" },
          correcta: ["A"],
          explicacion: "La pasta puede ser cerámica o metálica; cuanta más plata contenga, más termoconductora será y, generalmente, más cara."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué hace el tubo retráctil cuando se calienta?",
          opciones: { A: "Se expande para ventilar el cable", B: "Se retrae, sella la conexión y la protege de falsos contactos", C: "Cambia de color para avisar de sobrecalentamiento", D: "Se funde y suelda los cables" },
          correcta: ["B"],
          explicacion: "El tubo retráctil se usa para proteger conexiones: al calentarse se retrae, sella la conexión y protege el interior de falsos contactos."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué son muy útiles los recipientes tipo pastillero al desensamblar un portátil?",
          opciones: { A: "Para guardar la pasta térmica", B: "Para guardar los tornillos por tandas y no perderlos", C: "Para almacenar los flex", D: "Para transportar el equipo" },
          correcta: ["B"],
          explicacion: "Permiten ir guardando los tornillos por tandas y cerrar los compartimentos para que no se pierdan ni se caigan."
        },
        {
          tipo: "unica",
          pregunta: "Sobre la iluminación del puesto de trabajo, lo óptimo es…",
          opciones: { A: "Trabajar con luz natural, evitando reflejos y grandes contrastes de luz", B: "Trabajar a oscuras para ver mejor los ledes", C: "Un foco potente sobre el puesto y la sala en penumbra", D: "Solo luz artificial fluorescente" },
          correcta: ["A"],
          explicacion: "Lo óptimo es la luz natural evitando reflejos en pantalla. No son recomendables los grandes contrastes (mucha luz en el puesto y sala en penumbra)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué se aconseja hacer con las máquinas potentes y ruidosas como servidores y workstations?",
          opciones: { A: "Colocarlas en salas aparte convenientemente refrigeradas", B: "Ponerlas junto al puesto de montaje", C: "Apagarlas durante la jornada", D: "Quitarles los ventiladores" },
          correcta: ["A"],
          explicacion: "El ruido excesivo es perturbador: las máquinas ruidosas se colocan en salas aparte, convenientemente refrigeradas."
        },
        {
          tipo: "multiple",
          pregunta: "Señala las recomendaciones correctas del capítulo:",
          opciones: { A: "Evitar los líquidos cerca de los equipos", B: "Evitar el polvo dentro de los equipos porque provoca sobrecalentamiento", C: "Forzar los componentes si no encajan a la primera", D: "No forzar los componentes: mejor tardar más que estropear algo" },
          correcta: ["A", "B", "D"],
          explicacion: "Hay que evitar líquidos y polvo, y nunca forzar componentes al ensamblar, atornillar o conectar: es preferible tardar más en el montaje."
        }
      ]
    },
    {
      nombre: "Paquete 2 · Secuencia de montaje: placa, micro, RAM, SSD y adaptadores (5.4-5.9)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿De qué consta, generalmente, un equipo básico?",
          opciones: { A: "Caja, placa base, memoria, procesador y unidad SSD", B: "Caja, fuente, tarjeta gráfica y monitor", C: "Placa base, dos tarjetas gráficas y refrigeración líquida", D: "Caja, procesador y teclado" },
          correcta: ["A"],
          explicacion: "Un equipo básico consta de caja, placa base, memoria, procesador y unidad SSD; a esa base se le pueden añadir gráfica, wifi, segunda SSD, etc."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuál es el PRIMER paso de la secuencia de montaje de un equipo?",
          opciones: { A: "Instalación de la memoria", B: "Apertura de la caja y montaje de la placa base", C: "Montaje de la unidad SSD", D: "Verificación de la instalación" },
          correcta: ["B"],
          explicacion: "Secuencia: 1) caja y placa base, 2) micro, 3) memoria, 4) SSD, 5) tarjetas de expansión (opcional), 6) conexionado del resto, 7) verificación."
        },
        {
          tipo: "unica",
          pregunta: "En la secuencia de montaje, ¿qué paso va justo después de instalar la memoria?",
          opciones: { A: "Montaje del microprocesador", B: "Montaje de la unidad SSD", C: "Verificación de la instalación", D: "Montaje de la placa base" },
          correcta: ["B"],
          explicacion: "Tras la memoria (paso 3) viene el montaje de la unidad SSD (paso 4)."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué misión fundamental cumple la chapita o máscara de la placa base?",
          opciones: { A: "Decorar la parte trasera de la caja", B: "Ser la toma de tierra de los componentes de la placa base", C: "Mejorar la ventilación del equipo", D: "Sujetar la placa al chasis" },
          correcta: ["B"],
          explicacion: "La máscara es la toma de tierra de los componentes de la placa base: es un elemento de seguridad que no hay que olvidarse de instalar."
        },
        {
          tipo: "unica",
          pregunta: "La placa base viene de fábrica en una bolsa antiestática. ¿Qué hay que hacer con ella?",
          opciones: { A: "Tirarla inmediatamente para no acumular estática", B: "No sacar la placa antes de tiempo y apoyarla siempre encima de la bolsa", C: "Guardar dentro la fuente de alimentación", D: "Usarla como aislante entre placa y chasis" },
          correcta: ["B"],
          explicacion: "La bolsa (gris, normalmente) protege de descargas electrostáticas: no sacar la placa antes de tiempo y apoyarla siempre encima de la bolsa."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué error típico en el montaje de la placa base puede costar tiempo extra al técnico?",
          opciones: { A: "No colocar todos los tornillos espaciadores en la fijación", B: "Conectar los cables ATX demasiado pronto", C: "Instalar la máscara del chasis", D: "Leer el manual de la placa" },
          correcta: ["A"],
          explicacion: "Un fallo en la fijación, como no colocar todos los espaciadores, supone tiempo extra para subsanar la mala instalación."
        },
        {
          tipo: "unica",
          pregunta: "Los zócalos LGA tienen los pines…",
          opciones: { A: "En el microprocesador", B: "En la placa base", C: "En el disipador", D: "No tienen pines" },
          correcta: ["B"],
          explicacion: "LGA = pines en la placa base (con protector de plástico); PGA = pines en el microprocesador."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué fabricante utiliza normalmente zócalos PGA (pines en el micro)?",
          opciones: { A: "Intel", B: "AMD", C: "NVIDIA", D: "Ninguno: el PGA está obsoleto" },
          correcta: ["B"],
          explicacion: "Normalmente, Intel utiliza LGA (pines en la placa) y AMD utiliza PGA (pines en el micro)."
        },
        {
          tipo: "unica",
          pregunta: "Antes de insertar el microprocesador en el socket hay que fijarse en…",
          opciones: { A: "La posición del chaflán en el micro y en el socket: ambas hendiduras deben coincidir", B: "El color del PCB", C: "La cantidad de pasta térmica del socket", D: "El número de serie del micro" },
          correcta: ["A"],
          explicacion: "Hay que verificar que el chaflán del micro coincide con el del socket para no doblar ningún pin."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué significa que un zócalo sea ZIF (zero insertion force)?",
          opciones: { A: "Que hay que presionar fuerte el micro para que encaje", B: "Que el micro se deja sin apretar y se autofija al bajar la palanca", C: "Que el zócalo no admite disipador", D: "Que el micro se suelda a la placa" },
          correcta: ["B"],
          explicacion: "ZIF = fuerza de inserción cero: el micro se aloja sin presión y, al bajar la palanca, se autofija solo. Nunca hay que hacer fuerza."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se ancla el disipador sobre el microprocesador?",
          opciones: { A: "Presionando en cruz sobre sus anclajes", B: "Presionando primero los dos anclajes de un lado y luego los del otro", C: "Atornillándolo al chasis", D: "Con pegamento térmico" },
          correcta: ["A"],
          explicacion: "El disipador se ancla presionando en cruz. De fábrica, los anclajes ya vienen colocados para solo apretar (al liberarlos sí hay que girarlos)."
        },
        {
          tipo: "unica",
          pregunta: "El conector del disipador (CPU fan) tiene cuatro pines. ¿Para qué sirve el cable «extra»?",
          opciones: { A: "Es el control PWM, que varía la velocidad de giro según la temperatura del procesador", B: "Es una toma de tierra adicional", C: "Alimenta los ledes del ventilador", D: "Mide el voltaje de la fuente" },
          correcta: ["A"],
          explicacion: "El cuarto cable es el control PWM: cuando el micro está más caliente el ventilador da más vueltas y, cuando está frío, menos (también reduce el ruido)."
        },
        {
          tipo: "unica",
          pregunta: "¿Por qué los módulos DDR4 han cambiado su forma recta por una algo curvada?",
          opciones: { A: "Para disipar mejor el calor", B: "Para favorecer la inserción de la memoria en el slot", C: "Por motivos estéticos de modding", D: "Para diferenciarlas de las DDR3" },
          correcta: ["B"],
          explicacion: "La forma algo curvada de las DDR4 favorece la inserción de la memoria en el slot."
        },
        {
          tipo: "unica",
          pregunta: "Para una configuración dual, triple o quad channel se aconseja instalar memorias…",
          opciones: { A: "De distintos fabricantes para repartir riesgos", B: "De calidad y del mismo modelo (capacidad y velocidad)", C: "Siempre de 4 GB", D: "Con disipador metálico obligatorio" },
          correcta: ["B"],
          explicacion: "Se aconsejan memorias de calidad y mismo modelo. Pueden usarse diferentes, pero irán a la velocidad de la más lenta."
        },
        {
          tipo: "unica",
          pregunta: "Si en dual channel se montan dos memorias de distinta velocidad, ¿a qué velocidad funcionarán?",
          opciones: { A: "A la velocidad de la más rápida", B: "A la media de ambas", C: "A la velocidad de la más lenta", D: "No funcionarán" },
          correcta: ["C"],
          explicacion: "Se pueden utilizar memorias diferentes, pero irán a la velocidad de la más lenta."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué acciones forman parte de la instalación de una unidad SSD? (señala las correctas)",
          opciones: { A: "Fijarla y atornillarla en su alojamiento para que no sufra vibraciones", B: "Conectar el cable de datos a la unidad y al puerto SATA de la placa", C: "Comprobar la unidad en la BIOS y particionarla", D: "Aplicarle pasta térmica" },
          correcta: ["A", "B", "C"],
          explicacion: "Pasos: atornillar la unidad, conectar datos (SATA) y alimentación, y comprobar en la BIOS y particionar (normalmente al instalar el sistema operativo). La pasta térmica no pinta nada aquí."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo se instalan los discos mecánicos y los lectores ópticos respecto a una unidad SSD?",
          opciones: { A: "De la misma forma: mismos conectores y fijación, solo difieren en el tamaño", B: "Con conectores IDE especiales", C: "Sin tornillos, a presión", D: "Solo pueden ir en bahías externas" },
          correcta: ["A"],
          explicacion: "Se instalan de la misma forma que una SSD: los conectores son iguales y la fijación es la misma; solamente difieren en el tamaño."
        },
        {
          tipo: "unica",
          pregunta: "Al conectar el front panel, un led no se enciende aunque el equipo funciona. ¿Cuál es la causa más probable según el libro?",
          opciones: { A: "El led está fundido", B: "Los ledes tienen polaridad y se ha conectado al revés", C: "Falta el cable ATX-12 V", D: "La BIOS lo tiene desactivado" },
          correcta: ["B"],
          explicacion: "Los ledes tienen polaridad: si no se colocan correctamente, el testigo no muestra ninguna luz. También hay que acordarse de probar el botón de reset."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué se diferencian los cables internos USB 3.0 de los USB 2.0?",
          opciones: { A: "En que tienen más pines", B: "En que son inalámbricos", C: "En el color del conector únicamente", D: "En que no llevan pin ciego" },
          correcta: ["A"],
          explicacion: "Los cables USB 3.0 tienen más pines que los 2.0, lo que sirve para ofrecer puertos USB rápidos en la parte frontal o lateral de la caja."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué slot se instala una tarjeta wifi y por qué?",
          opciones: { A: "En el PCI express X16, porque es el más rápido", B: "En el PCI express X1, reservando el X16 para tarjetas más rápidas como las gráficas", C: "En un puerto SATA", D: "En el zócalo del micro" },
          correcta: ["B"],
          explicacion: "Las tarjetas wifi (como muchas de sonido) van en el PCIe X1, reservando el X16 para tarjetas gráficas. Hay que fijarla con tornillería para que no se desencaje."
        }
      ]
    },
    {
      nombre: "Paquete 3 · Refrigeración líquida, revisión, overclocking y modding (5.10-5.12)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "¿Cuál es la manera más económica y eficiente de refrigerar un equipo?",
          opciones: { A: "La refrigeración líquida", B: "Disipadores y ventiladores", C: "Refrigeración por nitrógeno", D: "Dejar la caja abierta" },
          correcta: ["B"],
          explicacion: "Generalmente se usan disipadores y ventiladores: es lo más económico y eficiente. La líquida es más vistosa, con rendimiento aceptable."
        },
        {
          tipo: "unica",
          pregunta: "Frente a la refrigeración clásica, la refrigeración líquida…",
          opciones: { A: "No necesita ningún mantenimiento", B: "Necesita más mantenimiento", C: "Es siempre más barata", D: "Solo puede refrigerar la tarjeta gráfica" },
          correcta: ["B"],
          explicacion: "La refrigeración líquida es más vistosa y tiene un rendimiento aceptable, pero necesita más mantenimiento que la refrigeración clásica."
        },
        {
          tipo: "unica",
          pregunta: "En una refrigeración líquida, ¿dónde se enfría el líquido tras pasar por el disipador del componente?",
          opciones: { A: "En el depósito", B: "En la bomba", C: "En el radiador, en tuberías muy delgadas aireadas por un ventilador", D: "En la fuente de alimentación" },
          correcta: ["C"],
          explicacion: "Del depósito se bombea líquido al disipador del componente; al calentarse pasa al radiador, donde se enfría en tuberías delgadas aireadas por un ventilador."
        },
        {
          tipo: "unica",
          pregunta: "Si se quiere refrigerar con líquido el procesador y el chipset, ¿por cuál debe pasar primero el líquido?",
          opciones: { A: "Por el chipset, que es más delicado", B: "Por el componente que MÁS calor disipa: el procesador", C: "Es indiferente", D: "Por los dos a la vez en paralelo" },
          correcta: ["B"],
          explicacion: "Hay que colocar primero los componentes que más calor disipan: la tubería pasa primero por el disipador del procesador y luego por el del chipset."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué garantiza la prueba de estanqueidad de una refrigeración líquida?",
          opciones: { A: "Que el equipo arranca a la primera", B: "Que durante el funcionamiento no habrá pérdidas y la recirculación del líquido será correcta", C: "Que la bomba consume poco", D: "Que el refrigerante es agua pura" },
          correcta: ["B"],
          explicacion: "La prueba de estanqueidad se realiza SIEMPRE al instalar una refrigeración líquida: asegura que no habrá pérdidas y que el líquido recircula bien."
        },
        {
          tipo: "unica",
          pregunta: "Para hacer funcionar la fuente de alimentación en la prueba de estanqueidad, ¿qué cables se puentean con un clip?",
          opciones: { A: "El cable verde del conector ATX con cualquier cable negro", B: "El cable rojo con el amarillo", C: "Dos cables negros entre sí", D: "El cable azul con el rojo" },
          correcta: ["A"],
          explicacion: "Se conecta el cable verde del conector ATX con cualquier cable negro y, si la fuente está enchufada, empezará a funcionar."
        },
        {
          tipo: "unica",
          pregunta: "Al instalar la refrigeración líquida, ¿cómo debe estar el nivel del depósito y por qué?",
          opciones: { A: "Al máximo, porque al recircular el líquido seguramente el nivel baje", B: "A la mitad, para dejar espacio al aire", C: "Al mínimo, para no derramar", D: "Vacío hasta superar la prueba" },
          correcta: ["A"],
          explicacion: "Hay que verificar que el depósito marca el nivel al máximo, porque cuando el líquido se ponga a recircular, seguramente el nivel baje."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué indica que el nivel del líquido baje de su cota inferior durante el funcionamiento?",
          opciones: { A: "Que el sistema funciona a pleno rendimiento", B: "Que la bomba no puede hacer recircular el líquido y el sistema se calentará", C: "Que el radiador está demasiado frío", D: "Nada: es lo normal" },
          correcta: ["B"],
          explicacion: "El nivel nunca debe bajar de su cota inferior: esa circunstancia indica que la bomba no puede recircular el líquido y el sistema se calentará."
        },
        {
          tipo: "unica",
          pregunta: "¿Cuáles son, en orden, los tres pasos aconsejados para revisar una instalación?",
          opciones: { A: "Inspección visual → revisión del arranque → revisión del resto de componentes", B: "Benchmark → formateo → arranque", C: "Arranque → inspección visual → particionado", D: "BIOS → sistema operativo → inspección visual" },
          correcta: ["A"],
          explicacion: "Primero una revisión visual descartando errores de conexión, luego comprobar el arranque y, por último, el resto de componentes."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué puntos forman parte de la inspección visual de la instalación? (señala los correctos)",
          opciones: { A: "Comprobar los tornillos de anclaje de la placa base", B: "Comprobar que la RAM está fijada (verificar pestañas)", C: "Comprobar los cables ATX y ATX-12 V", D: "Ejecutar un benchmark con Hardinfo" },
          correcta: ["A", "B", "C"],
          explicacion: "La inspección visual incluye tornillos de la placa, RAM y pestañas, disipador fijo, cables ATX/ATX-12 V, SSD y resto de conectores. El benchmark no es inspección visual."
        },
        {
          tipo: "unica",
          pregunta: "Al arrancar por primera vez un equipo recién montado aparece «Reboot and select proper boot device…». ¿Qué significa?",
          opciones: { A: "Que hay un error grave de montaje", B: "Que el sistema no encuentra dispositivo de arranque: suele ser buen augurio", C: "Que la RAM está mal instalada", D: "Que la fuente no da los voltajes correctos" },
          correcta: ["B"],
          explicacion: "No es un error: el sistema avisa de que no ha encontrado ningún dispositivo para arrancar (aún no hay sistema operativo). Verlo suele ser buen augurio."
        },
        {
          tipo: "unica",
          pregunta: "¿Cómo es aconsejable arrancar el equipo por primera vez?",
          opciones: { A: "Con la caja abierta, para observar el funcionamiento de los ventiladores", B: "Con la caja cerrada, por seguridad", C: "Sin el disipador, para ver el micro", D: "Sin conectar el front panel" },
          correcta: ["A"],
          explicacion: "Se aconseja arrancar por primera vez con la caja abierta para poder observar el funcionamiento de los ventiladores del equipo."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es la secuencia de arranque de un equipo?",
          opciones: { A: "Los 7 pasos del montaje", B: "El orden y la prioridad con que la BIOS busca un dispositivo de arranque", C: "El orden de conexión de los cables ATX", D: "El tiempo que tarda en encender" },
          correcta: ["B"],
          explicacion: "Es el orden y prioridad con que la BIOS busca el dispositivo con el sistema operativo. Se suele poner primero el pendrive/USB y luego la SSD o disco mecánico."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué teclas se presionan en el arranque para acceder al menú principal de la BIOS?",
          opciones: { A: "F2 o supr", B: "Ctrl + Alt + Supr", C: "F12 o Esc únicamente", D: "Alt + F4" },
          correcta: ["A"],
          explicacion: "Para acceder al menú principal de la BIOS hay que presionar, en el arranque, las teclas F2 o supr."
        },
        {
          tipo: "unica",
          pregunta: "¿En qué consiste el overclocking?",
          opciones: { A: "En subir la velocidad del sistema por encima del nominal del fabricante para obtener mayor rendimiento", B: "En bajar el rendimiento para ahorrar energía", C: "En cambiar el disipador por uno líquido", D: "En tunear estéticamente el equipo" },
          correcta: ["A"],
          explicacion: "Overclocking = subir la velocidad por encima del nominal para obtener el mayor rendimiento del hardware. Lo contrario es el underclocking."
        },
        {
          tipo: "unica",
          pregunta: "¿Para qué se suele realizar underclocking?",
          opciones: { A: "Para ganar rendimiento en juegos", B: "Para consumir menos energía cuando el sistema tiene poca carga de trabajo", C: "Para enfriar la refrigeración líquida", D: "Para recuperar la garantía" },
          correcta: ["B"],
          explicacion: "El underclocking baja deliberadamente el rendimiento para consumir menos energía; suele hacerse cuando el sistema tiene poca carga de trabajo."
        },
        {
          tipo: "unica",
          pregunta: "Si se sube la frecuencia base del FSB, ¿qué velocidades mejoran?",
          opciones: { A: "Solo la del microprocesador", B: "Solo la de la memoria", C: "La del microprocesador, la de la memoria y la del resto de buses", D: "Solo la de la tarjeta gráfica" },
          correcta: ["C"],
          explicacion: "De la frecuencia base del FSB dependen la velocidad del micro, la de la memoria y la del resto de buses: subirla mejora el sistema globalmente."
        },
        {
          tipo: "multiple",
          pregunta: "¿Qué hardware está indicado para hacer overclocking? (señala los correctos)",
          opciones: { A: "Placa base con chipset ZXXX (por ejemplo, Z370)", B: "Microprocesadores Intel terminados en «K» (multiplicador desbloqueado)", C: "Microprocesadores AMD de la serie FX", D: "Cualquier equipo, sin requisitos especiales" },
          correcta: ["A", "B", "C"],
          explicacion: "Para Intel: placa con chipset Z (ej. Z370) y micros «K» con multiplicador desbloqueado; los AMD FX también lo tienen desbloqueado y permiten controlar el voltaje."
        },
        {
          tipo: "unica",
          pregunta: "Tras hacer overclocking, ¿cuál es el primer paso y qué mejora se considera ya significativa?",
          opciones: { A: "Hacer un benchmark (p. ej., con Hardinfo); una mejora del 10 % ya es significativa", B: "Formatear el equipo; mejora mínima del 50 %", C: "Cambiar la fuente; mejora del 2 %", D: "Nada: el overclock siempre funciona" },
          correcta: ["A"],
          explicacion: "Hay que comprobar la estabilidad con benchmarks (Hardinfo en Ubuntu). Una mejora del 10 % ya se considera significativa, y antes hay que identificar los cuellos de botella."
        },
        {
          tipo: "multiple",
          pregunta: "¿Cuáles son elementos comerciales de modding? (señala los correctos)",
          opciones: { A: "Ventiladores con ledes y tiras de ledes", B: "Vúmetros para mostrar el nivel de ruido", C: "Fanbus, baybuses y rheobuses", D: "Tornillos espaciadores de la placa base" },
          correcta: ["A", "B", "C"],
          explicacion: "Elementos de modding: rejillas UV, cables llamativos, ventiladores con ledes, paneles, tiras de ledes, fanbus, vúmetros, controladores de temperatura, baybuses y rheobuses. Los espaciadores son tornillería normal de montaje."
        }
      ]
    },
    {
      nombre: "Paquete 4 · Repaso global del tema (incluye autoevaluación del libro)",
      preguntas: [
        {
          tipo: "unica",
          pregunta: "Si al montar un equipo se detecta que el microprocesador ya tiene pasta térmica:",
          opciones: { A: "Se aplicará más pasta térmica y se montará el procesador", B: "Se limpiará la pasta térmica con alcohol isopropílico y se montará el procesador", C: "Se limpiará la pasta térmica con un trapo húmedo y se montará el procesador", D: "Ninguna de las opciones anteriores es correcta" },
          correcta: ["B"],
          explicacion: "La pasta antigua se limpia con alcohol isopropílico, que no deja humedad ni residuos al evaporarse. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Una temperatura ideal para una sala de trabajo será:",
          opciones: { A: "15 grados", B: "23 grados", C: "27 grados", D: "Ninguna de las opciones anteriores es correcta" },
          correcta: ["B"],
          explicacion: "La temperatura ideal de una oficina ronda los 22-24 grados, así que 23 grados es la correcta. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "La pasta térmica:",
          opciones: { A: "Está formada por partículas cerámicas de plata", B: "Hay que cambiarla cada año, más o menos", C: "Se recomienda limpiarla con un paño húmedo", D: "Ninguna de las opciones anteriores es correcta" },
          correcta: ["D"],
          explicacion: "Ninguna es correcta: la pasta es cerámica O metálica (la plata es metálica, no cerámica), el libro no fija cambiarla cada año, y se limpia con alcohol isopropílico, no con paño húmedo. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Señala cuál de las siguientes afirmaciones es correcta:",
          opciones: { A: "Se recomienda colocar el componente encima de la bolsa electrostática cuando se abre", B: "Conviene apilar los componentes con cuidado", C: "Hay que manipular la fuente de alimentación tras haberla desconectado de la electricidad", D: "Ninguna de las opciones anteriores es correcta" },
          correcta: ["D"],
          explicacion: "Las tres son trampas: NO se deja el componente sobre la bolsa, NO se apilan componentes y la fuente NO se manipula ni desconectada (condensadores). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Sobre los zócalos, es correcto afirmar que:",
          opciones: { A: "Siempre tienen pines que son muy delicados y se pueden doblar", B: "Los LGA son utilizados por AMD", C: "Los microprocesadores AMD utilizan zócalos PGA", D: "Los microprocesadores Ryzen utilizan zócalos LGA" },
          correcta: ["C"],
          explicacion: "AMD usa normalmente PGA (pines en el micro) e Intel usa LGA (pines en la placa). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Los conectores PWM del disipador tienen:",
          opciones: { A: "Cuatro cables", B: "Tres cables", C: "Cinco cables", D: "Seis cables" },
          correcta: ["A"],
          explicacion: "El conector del disipador tiene cuatro pines: el cable extra es el control PWM que regula la velocidad según la temperatura. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Señala cuál de las siguientes afirmaciones sobre la refrigeración líquida es correcta:",
          opciones: { A: "Utiliza agua como refrigerante", B: "Se utiliza para refrigerar un componente solamente, como por ejemplo el microprocesador", C: "El refrigerante pasa siempre primero por los componentes que menos calor disipan", D: "Ninguna de las opciones anteriores es correcta" },
          correcta: ["D"],
          explicacion: "Ninguna: usa líquido refrigerante (no necesariamente agua), puede refrigerar varios componentes (micro, chipset, gráfica) y el líquido pasa primero por los que MÁS calor disipan. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Si al encender el equipo recién montado aparece el mensaje «Reboot and select proper boot device or insert boot media in selected boot device and press a key»:",
          opciones: { A: "Debe apagarse el equipo y revisarse si la unidad SSD o el disco mecánico están bien conectados", B: "Es posible que el cable SATA de la unidad SSD no se haya conectado", C: "Seguramente la instalación se haya hecho correctamente", D: "Seguramente se haya olvidado el pendrive de instalación conectado al equipo" },
          correcta: ["C"],
          explicacion: "Ese mensaje no es un error: avisa de que no hay sistema operativo que arrancar. Verlo en el primer arranque suele ser buen augurio. (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "El overclocking:",
          opciones: { A: "Puede hacer que un componente gaste menos energía", B: "Puede hacer que el equipo deje de funcionar", C: "Provoca que se pierda la garantía", D: "Consiste siempre en aumentar la velocidad del procesador" },
          correcta: ["B"],
          explicacion: "Puede hacer que el equipo deje de funcionar o se estropee algo. La garantía se pierde solo si NO se siguen los consejos del fabricante, y no siempre se sube el procesador (también memoria, FSB, buses…). (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Elige la opción más completa:",
          opciones: { A: "Elevando la frecuencia base del FSB, se sube la velocidad del microprocesador y de la memoria", B: "Elevando el factor multiplicador, se sube la velocidad del microprocesador", C: "Elevando el factor multiplicador, se sube la velocidad del microprocesador y de la memoria", D: "Elevando el factor multiplicador, se sube la velocidad del microprocesador, del FSB y de la memoria" },
          correcta: ["B"],
          explicacion: "El multiplicador solo afecta al microprocesador. (La frecuencia base del FSB afecta a micro, memoria Y buses, por eso la opción A está incompleta.) (Pregunta de autoevaluación del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué diferencia existe entre un zócalo PGA y uno LGA?",
          opciones: { A: "El PGA tiene los pines en el microprocesador y el LGA en la placa base", B: "El PGA tiene los pines en la placa base y el LGA en el microprocesador", C: "El PGA es para memorias y el LGA para micros", D: "Son idénticos, solo cambia el fabricante del nombre" },
          correcta: ["A"],
          explicacion: "PGA = pines en el micro (AMD); LGA = pines en la placa base (Intel). (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "Dimas quiere montar un equipo con dual channel. ¿Qué consejo hay que darle sobre las memorias?",
          opciones: { A: "Que mezcle marcas para abaratar", B: "Que instale memorias de calidad y del mismo modelo (capacidad y velocidad)", C: "Que use una sola memoria de gran capacidad", D: "Que las memorias sean de velocidades distintas" },
          correcta: ["B"],
          explicacion: "Para dual, triple o quad channel se aconsejan memorias de calidad y mismo modelo; si son distintas, irán a la velocidad de la más lenta. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Un zócalo ZIF significa que hay que hacer presión para insertar el micro?",
          opciones: { A: "Sí, una presión firme y uniforme", B: "No: ZIF significa fuerza de inserción cero; el micro se aloja sin apretar y se fija bajando la palanca", C: "Solo en los zócalos de AMD", D: "Solo si el micro es antiguo" },
          correcta: ["B"],
          explicacion: "ZIF = zero insertion force. El micro se deja en el socket sin apretar y se autofija al bajar la palanca. (Actividad propuesta del libro.)"
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el FSB (Front Side Bus)?",
          opciones: { A: "Un bus que conecta los elementos más rápidos del sistema: microprocesador, memoria, chipset y PCI ×16", B: "El bus que conecta los puertos USB frontales", C: "Un tipo de zócalo de Intel", D: "El cable de alimentación de la placa" },
          correcta: ["A"],
          explicacion: "Según el glosario del libro, el FSB conecta los elementos más rápidos del sistema (micro, memoria, chipset y PCI ×16). Por eso subir su frecuencia mejora todo el sistema."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es un baybus (o rheobus)?",
          opciones: { A: "Un componente que ajusta la velocidad de los ventiladores controlando el voltaje que se les suministra", B: "Un bus de datos de la placa base", C: "Un tipo de bahía para discos", D: "Un benchmark de Linux" },
          correcta: ["A"],
          explicacion: "El baybus permite ajustar la velocidad de los ventiladores controlando su voltaje; el rheobus es similar. Son también elementos típicos de modding."
        },
        {
          tipo: "unica",
          pregunta: "Según el glosario del tema, un «sistema estanco» es aquel que…",
          opciones: { A: "No tiene fugas de agua", B: "No deja pasar el polvo", C: "No hace ruido", D: "No se puede overclockear" },
          correcta: ["A"],
          explicacion: "Sistema estanco = que no tiene fugas de agua. Es lo que verifica la prueba de estanqueidad de una refrigeración líquida."
        },
        {
          tipo: "unica",
          pregunta: "¿Qué es el «mobbing» que debe evitarse en el puesto de trabajo?",
          opciones: { A: "El exceso de ruido", B: "El acoso laboral", C: "El tuneado de equipos", D: "La acumulación de polvo" },
          correcta: ["B"],
          explicacion: "Mobbing = acoso laboral. El puesto de trabajo debe tener un factor psicosocial positivo, evitando el mobbing y el burnout."
        },
        {
          tipo: "unica",
          pregunta: "En el mundo del modding, ¿cómo se llaman la persona que modifica el equipo y el equipo resultante?",
          opciones: { A: "Modder y mod", B: "Mod y modder", C: "Tuner y tuning", D: "Maker y make" },
          correcta: ["A"],
          explicacion: "La persona que realiza el modding es el modder y el ordenador o sistema tuneado se denomina mod."
        },
        {
          tipo: "unica",
          pregunta: "Al sustituir una fuente de alimentación, ¿por qué es difícil extraer el conector ATX de la placa?",
          opciones: { A: "Porque va soldado", B: "Porque suele tener una presilla y, al tener 24 contactos, hay que hacer algo de fuerza (sin pasarse, para no dañar la placa)", C: "Porque tiene tornillos ocultos", D: "Porque está pegado con pasta térmica" },
          correcta: ["B"],
          explicacion: "El conector ATX suele tener una presilla y, con 24 contactos, es difícil de extraer: hay que hacer algo de fuerza, pero no más de la necesaria. (Ejercicio propuesto del libro.)"
        },
        {
          tipo: "multiple",
          pregunta: "Al desmontar un equipo portátil, ¿qué consejos da el libro? (señala los correctos)",
          opciones: { A: "Usar púas y elementos plásticos para hacer palanca, nunca destornilladores", B: "Hacer fotos de calidad del equipo para recordar cómo va conectado cada cable", C: "Tener mucho cuidado con las pestañas para que el cierre quede perfecto", D: "Forzar la apertura con un destornillador plano metálico" },
          correcta: ["A", "B", "C"],
          explicacion: "Púas plásticas (los destornilladores dañan los bordes y el equipo parece forzado), fotos bien enfocadas para el remontaje y cuidado con las pestañas. (Ejercicios propuestos del libro.)"
        }
      ]
    }
  ]
});
