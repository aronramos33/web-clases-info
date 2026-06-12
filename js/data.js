/* ============================================================
   data.js — Registro central de temas.
   Cada archivo js/data/temaN.js añade su tema llamando a
   registrarTema({...}). Este archivo debe cargarse ANTES que
   los archivos de tema.
   ============================================================

   Estructura de un tema:
   {
     id: 1,
     titulo: "…",
     descripcionCorta: "…",          // para la tarjeta de inicio
     resumen: "…",                   // HTML permitido
     mapa: [ { titulo: "…", hijos: ["…", …] } ],
     conceptosClave: [ "…" ],
     frasesMemorizar: [ "…" ],
     apartados: [ { titulo: "1.1 …", html: "…" } ],
     glosario: [ { termino: "…", definicion: "…" } ],
     paquetes: [
       {
         nombre: "Paquete 1 · …",
         preguntas: [
           {
             tipo: "unica" | "multiple",
             pregunta: "…",
             opciones: { A: "…", B: "…", C: "…", D: "…" },
             correcta: ["A"],         // una o varias letras
             explicacion: "…"
           }
         ]
       }
     ]
   }
   ============================================================ */

"use strict";

const TEMAS = [];

function registrarTema(tema) {
  TEMAS.push(tema);
  TEMAS.sort(function (a, b) { return a.id - b.id; });
}

function obtenerTema(id) {
  return TEMAS.find(function (t) { return t.id === Number(id); }) || null;
}
