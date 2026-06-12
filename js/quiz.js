/* ============================================================
   quiz.js — Motor de tests tipo examen.
   - Preguntas de respuesta única (radio) y múltiple (checkbox).
   - Corrección con marcado visual accesible (icono + texto,
     no solo color), explicaciones y porcentaje de acierto.
   - Guarda la mejor nota de cada paquete en localStorage.
   ============================================================ */

"use strict";

const Quiz = (function () {

  const LETRAS = ["A", "B", "C", "D"];

  function escQ(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  /* ---------- localStorage (mejor nota) ---------- */

  function claveNota(idTema, idxPaquete) {
    return "mme-mejor-nota-t" + idTema + "-p" + idxPaquete;
  }

  function leerMejorNota(idTema, idxPaquete) {
    try {
      const v = localStorage.getItem(claveNota(idTema, idxPaquete));
      return v === null ? null : Number(v);
    } catch (e) { return null; }
  }

  function guardarMejorNota(idTema, idxPaquete, porcentaje) {
    try {
      const anterior = leerMejorNota(idTema, idxPaquete);
      if (anterior === null || porcentaje > anterior) {
        localStorage.setItem(claveNota(idTema, idxPaquete), String(porcentaje));
      }
    } catch (e) { /* almacenamiento no disponible: se ignora */ }
  }

  /* ---------- Selector de paquetes ---------- */

  function montarSelectorPaquetes(tema, $lista, $zona) {
    $lista.innerHTML = "";
    tema.paquetes.forEach(function (paq, i) {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "paquete-btn";
      const mejor = leerMejorNota(tema.id, i);
      btn.innerHTML =
        "<strong>" + escQ(paq.nombre) + "</strong>" +
        '<span class="mejor-nota">' +
        (mejor === null ? "Sin intentos todavía" : "Mejor nota: " + mejor + " %") +
        "</span>";
      btn.addEventListener("click", function () {
        $lista.querySelectorAll(".paquete-btn").forEach(function (b) { b.classList.remove("activo"); });
        btn.classList.add("activo");
        renderizarPaquete(tema, i, $zona);
        $zona.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      li.appendChild(btn);
      $lista.appendChild(li);
    });
  }

  /* ---------- Renderizado de un paquete ---------- */

  function renderizarPaquete(tema, idxPaquete, $zona) {
    const paq = tema.paquetes[idxPaquete];
    let html =
      "<h2>" + escQ(paq.nombre) + "</h2>" +
      '<div id="quiz-resultado-zona"></div>' +
      '<form id="quiz-form">';

    paq.preguntas.forEach(function (p, i) {
      const multiple = p.tipo === "multiple";
      const tipoInput = multiple ? "checkbox" : "radio";
      html +=
        '<div class="quiz-pregunta" id="preg-' + i + '">' +
        "<fieldset>" +
        "<legend>" + (i + 1) + ". " + escQ(p.pregunta) +
        (multiple ? ' <span class="etiqueta-multiple">Respuesta múltiple</span>' : "") +
        "</legend>";

      LETRAS.forEach(function (letra) {
        if (!(letra in p.opciones)) return;
        html +=
          '<label class="opcion" data-letra="' + letra + '">' +
          '<input type="' + tipoInput + '" name="preg-' + i + '" value="' + letra + '">' +
          '<span class="letra">' + letra + ")</span> " +
          "<span>" + escQ(p.opciones[letra]) + "</span>" +
          "</label>";
      });

      html += "</fieldset></div>";
    });

    html +=
      "</form>" +
      '<div class="quiz-controles">' +
      '<button type="button" class="boton boton-primario" id="btn-corregir">✅ Corregir test</button>' +
      '<button type="button" class="boton boton-secundario" id="btn-reiniciar">🔄 Reiniciar test</button>' +
      "</div>";

    $zona.innerHTML = html;

    document.getElementById("btn-corregir").addEventListener("click", function () {
      corregir(tema, idxPaquete, $zona);
    });
    document.getElementById("btn-reiniciar").addEventListener("click", function () {
      renderizarPaquete(tema, idxPaquete, $zona);
      $zona.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ---------- Corrección ---------- */

  function respuestasMarcadas(i) {
    return Array.prototype.map.call(
      document.querySelectorAll('input[name="preg-' + i + '"]:checked'),
      function (input) { return input.value; }
    ).sort();
  }

  function iguales(a, b) {
    return a.length === b.length && a.every(function (v, i) { return v === b[i]; });
  }

  function corregir(tema, idxPaquete, $zona) {
    const paq = tema.paquetes[idxPaquete];
    let aciertos = 0, fallos = 0, sinContestar = 0;

    paq.preguntas.forEach(function (p, i) {
      const $preg = document.getElementById("preg-" + i);
      const marcadas = respuestasMarcadas(i);
      const correctas = p.correcta.slice().sort();

      /* Bloquear inputs */
      $preg.querySelectorAll("input").forEach(function (inp) { inp.disabled = true; });

      /* Marcar visualmente cada opción */
      $preg.querySelectorAll(".opcion").forEach(function ($op) {
        const letra = $op.getAttribute("data-letra");
        const esCorrecta = correctas.indexOf(letra) !== -1;
        const fueMarcada = marcadas.indexOf(letra) !== -1;

        if (esCorrecta) {
          $op.classList.add("es-correcta");
          $op.insertAdjacentHTML("beforeend",
            '<span class="marca-resultado ok">✔ Correcta</span>');
        } else if (fueMarcada) {
          $op.classList.add("es-incorrecta");
          $op.insertAdjacentHTML("beforeend",
            '<span class="marca-resultado ko">✘ Marcada (incorrecta)</span>');
        }
      });

      /* Estado global de la pregunta */
      let estadoHtml;
      if (marcadas.length === 0) {
        sinContestar++;
        $preg.classList.add("sin-contestar");
        estadoHtml = '<p class="estado-pregunta nc">⚠️ Sin contestar</p>';
      } else if (iguales(marcadas, correctas)) {
        aciertos++;
        $preg.classList.add("resuelta-ok");
        estadoHtml = '<p class="estado-pregunta ok">✔ Acierto</p>';
      } else {
        fallos++;
        $preg.classList.add("resuelta-ko");
        estadoHtml = '<p class="estado-pregunta ko">✘ Fallo — respuesta correcta: ' + correctas.join(", ") + "</p>";
      }

      $preg.insertAdjacentHTML("beforeend", estadoHtml);
      $preg.insertAdjacentHTML("beforeend",
        '<p class="explicacion"><strong>Explicación:</strong> ' + escQ(p.explicacion) + "</p>");
    });

    const total = paq.preguntas.length;
    const porcentaje = Math.round((aciertos / total) * 100);
    guardarMejorNota(tema.id, idxPaquete, porcentaje);

    const $resultado = document.getElementById("quiz-resultado-zona");
    $resultado.innerHTML =
      '<div class="quiz-resultado" role="status">' +
      '<span class="porcentaje">' + porcentaje + " %</span> de acierto" +
      "<ul>" +
      "<li>✔ Aciertos: <strong>" + aciertos + "</strong> de " + total + "</li>" +
      "<li>✘ Fallos: <strong>" + fallos + "</strong></li>" +
      "<li>⚠️ Sin contestar: <strong>" + sinContestar + "</strong></li>" +
      "</ul>" +
      "</div>";

    /* Ocultar botón corregir y subir al resultado */
    document.getElementById("btn-corregir").style.display = "none";
    $resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return { montarSelectorPaquetes: montarSelectorPaquetes };

})();
