/* ============================================================
   app.js — Enrutado y renderizado de vistas.
   Rutas (hash):
     #/             → inicio
     #/tema/3       → página del tema 3
     #/tema/3/test  → tests del tema 3
   ============================================================ */

"use strict";

const $main = document.getElementById("contenido");
const $selectorTema = document.getElementById("selector-tema");

/* ---------- Utilidades ---------- */

function esc(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function irArriba() {
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  $main.focus({ preventScroll: true });
}

/* ---------- Selector de temas de la cabecera ---------- */

function montarSelector() {
  TEMAS.forEach(function (t) {
    const op = document.createElement("option");
    op.value = String(t.id);
    op.textContent = "Tema " + t.id + " · " + t.titulo;
    $selectorTema.appendChild(op);
  });
  $selectorTema.addEventListener("change", function () {
    if ($selectorTema.value) {
      location.hash = "#/tema/" + $selectorTema.value;
    }
  });
}

function sincronizarSelector(idTema) {
  $selectorTema.value = idTema ? String(idTema) : "";
}

/* ---------- Vista: inicio ---------- */

function vistaInicio() {
  document.title = "Montaje y Mantenimiento de Equipo · Web de estudio";
  sincronizarSelector(null);

  let html =
    '<section class="hero">' +
    "<h1>Montaje y Mantenimiento de Equipo</h1>" +
    "<p>Web de estudio del módulo de <strong>Montaje y Mantenimiento de Equipo</strong> " +
    "del CFGM de Sistemas Microinformáticos y Redes. Aquí encontrarás, para cada tema, " +
    "un resumen claro, esquemas visuales, conceptos imprescindibles, frases para memorizar, " +
    "tablas comparativas, glosario y <strong>tests autocorregibles</strong> orientados al examen.</p>" +
    "<p>Elige un tema para empezar a estudiar. ¡Mucho ánimo! 💪</p>" +
    "</section>";

  html += '<h2 id="temas">Temas del módulo</h2><ul class="grid-temas">';
  TEMAS.forEach(function (t) {
    html +=
      '<li class="tarjeta-tema"><a href="#/tema/' + t.id + '">' +
      '<span class="numero" aria-hidden="true">' + t.id + "</span>" +
      "<h3>Tema " + t.id + ". " + esc(t.titulo) + "</h3>" +
      "<p>" + esc(t.descripcionCorta) + "</p>" +
      "</a></li>";
  });
  html += "</ul>";

  $main.innerHTML = html;
}

/* ---------- Bloques de la vista de tema ---------- */

function bloqueMapaMental(tema) {
  if (!tema.mapa || !tema.mapa.length) return "";
  let html =
    '<section class="seccion" aria-labelledby="t-mapa"><h2 id="t-mapa">🗺️ Mapa del tema</h2>' +
    '<div class="mapa-arbol">' +
    '<p class="nodo nodo-raiz">Tema ' + tema.id + ". " + esc(tema.titulo) + "</p>" +
    '<ul class="arbol">';
  tema.mapa.forEach(function (rama) {
    html += '<li><span class="nodo nodo-rama">' + esc(rama.titulo) + "</span>";
    if (rama.hijos && rama.hijos.length) {
      html += "<ul>";
      rama.hijos.forEach(function (h) {
        html += '<li><span class="nodo nodo-hoja">' + esc(h) + "</span></li>";
      });
      html += "</ul>";
    }
    html += "</li>";
  });
  html += "</ul></div></section>";
  return html;
}

function bloqueConceptos(tema) {
  if (!tema.conceptosClave || !tema.conceptosClave.length) return "";
  let html = '<section class="seccion" aria-labelledby="t-conceptos"><h2 id="t-conceptos">🔑 Conceptos imprescindibles</h2><ul class="lista-conceptos">';
  tema.conceptosClave.forEach(function (c) { html += "<li>" + c + "</li>"; });
  html += "</ul></section>";
  return html;
}

function bloqueFrases(tema) {
  if (!tema.frasesMemorizar || !tema.frasesMemorizar.length) return "";
  let html = '<section class="seccion" aria-labelledby="t-frases"><h2 id="t-frases">🧠 Frases para memorizar</h2><ul class="lista-frases">';
  tema.frasesMemorizar.forEach(function (f) { html += "<li>" + f + "</li>"; });
  html += "</ul></section>";
  return html;
}

function bloqueApartados(tema) {
  if (!tema.apartados || !tema.apartados.length) return "";
  let html = '<section class="seccion" aria-labelledby="t-desarrollo"><h2 id="t-desarrollo">📚 Desarrollo del tema</h2>';
  tema.apartados.forEach(function (ap, i) {
    html +=
      '<article class="apartado" id="apartado-' + i + '">' +
      "<h3>" + esc(ap.titulo) + "</h3>" +
      ap.html +
      "</article>";
  });
  html += "</section>";
  return html;
}

function bloqueGlosario(tema) {
  if (!tema.glosario || !tema.glosario.length) return "";
  let html = '<section class="seccion" aria-labelledby="t-glosario"><h2 id="t-glosario">📖 Glosario</h2><div class="caja"><dl class="glosario">';
  tema.glosario.forEach(function (g) {
    html += "<dt>" + esc(g.termino) + "</dt><dd>" + esc(g.definicion) + "</dd>";
  });
  html += "</dl></div></section>";
  return html;
}

function bloqueNavTemas(tema) {
  const idx = TEMAS.indexOf(tema);
  const ant = TEMAS[idx - 1];
  const sig = TEMAS[idx + 1];
  let html = '<nav class="nav-temas" aria-label="Tema anterior y siguiente">';
  if (ant) {
    html += '<a href="#/tema/' + ant.id + '"><span class="sentido">← Tema anterior</span><strong>Tema ' + ant.id + ". " + esc(ant.titulo) + "</strong></a>";
  } else {
    html += "<span></span>";
  }
  if (sig) {
    html += '<a class="siguiente" href="#/tema/' + sig.id + '"><span class="sentido">Tema siguiente →</span><strong>Tema ' + sig.id + ". " + esc(sig.titulo) + "</strong></a>";
  }
  html += "</nav>";
  return html;
}

/* ---------- Vista: tema ---------- */

function vistaTema(idTema) {
  const tema = obtenerTema(idTema);
  if (!tema) { vista404(); return; }

  document.title = "Tema " + tema.id + " · " + tema.titulo;
  sincronizarSelector(tema.id);

  let html =
    '<p class="miga"><a href="#/">Inicio</a> › Tema ' + tema.id + "</p>" +
    "<h1>Tema " + tema.id + ". " + esc(tema.titulo) + "</h1>";

  /* Índice interno */
  html += '<nav class="indice-interno" aria-labelledby="t-indice"><h2 id="t-indice">Índice del tema</h2><ol>';
  (tema.apartados || []).forEach(function (ap, i) {
    html += '<li><a href="#apartado-' + i + '">' + esc(ap.titulo) + "</a></li>";
  });
  html += "</ol>" +
    '<p><a class="boton boton-primario" href="#/tema/' + tema.id + '/test">✍️ Hacer los tests del tema</a></p>' +
    "</nav>";

  /* Resumen */
  html +=
    '<section class="seccion" aria-labelledby="t-resumen"><h2 id="t-resumen">📋 Resumen del tema</h2>' +
    '<div class="caja caja-resumen">' + tema.resumen + "</div></section>";

  html += bloqueMapaMental(tema);
  html += bloqueConceptos(tema);
  html += bloqueFrases(tema);
  html += bloqueApartados(tema);
  html += bloqueGlosario(tema);

  html +=
    '<p style="margin-top:2rem"><a class="boton boton-primario" href="#/tema/' + tema.id + '/test">✍️ Hacer los tests del tema ' + tema.id + "</a> " +
    '<a class="boton boton-secundario" href="#/">🏠 Volver al inicio</a></p>';

  html += bloqueNavTemas(tema);

  $main.innerHTML = html;
}

/* ---------- Vista: tests de un tema ---------- */

function vistaTest(idTema) {
  const tema = obtenerTema(idTema);
  if (!tema) { vista404(); return; }

  document.title = "Tests · Tema " + tema.id + " · " + tema.titulo;
  sincronizarSelector(tema.id);

  let html =
    '<p class="miga"><a href="#/">Inicio</a> › <a href="#/tema/' + tema.id + '">Tema ' + tema.id + "</a> › Tests</p>" +
    "<h1>✍️ Tests · Tema " + tema.id + ". " + esc(tema.titulo) + "</h1>" +
    "<p>Elige un paquete de preguntas. Cada paquete tiene <strong>" +
    (tema.paquetes[0] ? tema.paquetes[0].preguntas.length : 20) +
    " preguntas</strong> con cuatro opciones (A, B, C y D). " +
    'Las preguntas marcadas con <span class="etiqueta-multiple">Respuesta múltiple</span> pueden tener más de una opción correcta.</p>' +
    '<ul class="paquetes-test" id="paquetes-test"></ul>' +
    '<div id="zona-quiz" aria-live="polite"></div>' +
    '<p style="margin-top:2rem"><a class="boton boton-secundario" href="#/tema/' + tema.id + '">← Volver al tema</a> ' +
    '<a class="boton boton-secundario" href="#/">🏠 Inicio</a></p>';

  $main.innerHTML = html;

  Quiz.montarSelectorPaquetes(tema, document.getElementById("paquetes-test"), document.getElementById("zona-quiz"));
}

/* ---------- Vista: 404 ---------- */

function vista404() {
  document.title = "Página no encontrada";
  sincronizarSelector(null);
  $main.innerHTML =
    "<h1>Página no encontrada</h1>" +
    '<p>La dirección no existe. <a href="#/">Volver al inicio</a>.</p>';
}

/* ---------- Enrutador ---------- */

function enrutar() {
  const hash = location.hash || "#/";
  const partes = hash.replace(/^#\//, "").split("/").filter(Boolean);

  if (partes.length === 0) {
    vistaInicio();
  } else if (partes[0] === "tema" && partes[1] && !partes[2]) {
    vistaTema(partes[1]);
  } else if (partes[0] === "tema" && partes[1] && partes[2] === "test") {
    vistaTest(partes[1]);
  } else {
    vista404();
  }
  irArriba();
}

window.addEventListener("hashchange", enrutar);

montarSelector();
enrutar();
