# Montaje y Mantenimiento de Equipo · Web de estudio

Web de estudio del módulo **Montaje y Mantenimiento de Equipo** del CFGM de
**Sistemas Microinformáticos y Redes** (FP). Cubre los **temas 1 a 7** del libro
*Montaje y mantenimiento de equipo* (J. C. Moreno, Ed. Síntesis), cuyo PDF está
en `docs/PDF_DEL_LIBRO.pdf`.

Para cada tema incluye:

- 📋 Resumen del tema
- 🗺️ Mapa del tema (esquema visual)
- 🔑 Conceptos imprescindibles
- 🧠 Frases para memorizar
- 📚 Desarrollo resumido por apartados (con tablas comparativas)
- 📖 Glosario
- ✍️ **4 paquetes de tests autocorregibles de 20 preguntas** (560 preguntas en total),
  con preguntas de respuesta única y múltiple, explicación de cada respuesta,
  porcentaje de acierto y **mejor nota guardada en el navegador** (localStorage).

Es una web 100 % estática: **HTML5 + CSS3 + JavaScript vanilla**, sin frameworks,
sin dependencias y sin backend. Compatible con GitHub Pages.

## Estructura del proyecto

```
index.html          Página única (SPA con rutas por hash: #/, #/tema/3, #/tema/3/test)
css/styles.css      Todos los estilos
js/data.js          Registro central de temas (debe cargarse antes que los temas)
js/data/temaN.js    Contenido y preguntas de cada tema (1 a 7)
js/quiz.js          Motor de tests (corrección, explicaciones, mejor nota)
js/app.js           Enrutador y renderizado de vistas
docs/PDF_DEL_LIBRO.pdf  El libro en el que se basa todo el contenido
```

## Cómo abrirla en local

No necesita instalación. Dos opciones:

1. **Doble clic en `index.html`** — funciona directamente en cualquier navegador
   moderno, porque no se hacen peticiones de red.
2. Con un servidor local (opcional, recomendado si haces cambios):

   ```bash
   # con Python
   python -m http.server 8000
   # o con Node
   npx serve .
   ```

   Y abre `http://localhost:8000`.

## Cómo publicarla en GitHub Pages

1. Sube el repositorio a GitHub (este repo: `aronramos33/web-clases-info`).
2. En GitHub: **Settings → Pages**.
3. En *Build and deployment* → *Source*, elige **Deploy from a branch**.
4. En *Branch*, selecciona `master` (o `main`) y la carpeta **/ (root)**. Guarda.
5. En uno o dos minutos la web estará en
   `https://aronramos33.github.io/web-clases-info/`.

Cada `git push` a esa rama vuelve a publicar la web automáticamente.

## Cómo añadir un tema nuevo

1. Crea `js/data/tema8.js` copiando la estructura de cualquier tema existente:

   ```js
   "use strict";

   registrarTema({
     id: 8,
     titulo: "Título del tema",
     descripcionCorta: "Texto para la tarjeta de la portada.",
     resumen: "<p>HTML permitido…</p>",
     mapa: [ { titulo: "Rama", hijos: ["Hoja 1", "Hoja 2"] } ],
     conceptosClave: [ "Concepto (HTML permitido)…" ],
     frasesMemorizar: [ "«Frase corta para memorizar.»" ],
     apartados: [ { titulo: "8.1 Apartado", html: "<p>…</p>" } ],
     glosario: [ { termino: "Término", definicion: "Definición." } ],
     paquetes: [ /* ver siguiente apartado */ ]
   });
   ```

2. Añade la etiqueta script en `index.html`, **después** de `js/data.js` y junto
   a los demás temas:

   ```html
   <script src="js/data/tema8.js"></script>
   ```

No hay que tocar nada más: la portada, el selector de temas, la navegación
anterior/siguiente y los tests se generan solos.

## Cómo añadir preguntas a los tests

Cada tema tiene un array `paquetes`. Cada paquete es:

```js
{
  nombre: "Paquete 5 · Nombre del paquete",
  preguntas: [
    {
      tipo: "unica",            // "unica" (radio) o "multiple" (checkbox)
      pregunta: "¿Enunciado de la pregunta?",
      opciones: {
        A: "Opción A",
        B: "Opción B",
        C: "Opción C",
        D: "Opción D"
      },
      correcta: ["B"],          // una letra, o varias si tipo es "multiple": ["A","C"]
      explicacion: "Por qué esa es la respuesta correcta."
    }
  ]
}
```

Notas:

- En las preguntas `multiple` el test solo cuenta como acierto si se marcan
  **exactamente** todas las correctas.
- Puedes añadir preguntas a un paquete existente o crear paquetes nuevos:
  aparecen automáticamente en la página de tests del tema.
- La mejor nota se guarda por paquete con la clave
  `mme-mejor-nota-t{tema}-p{paquete}` en localStorage; al añadir paquetes nuevos
  empiezan «Sin intentos todavía».

## Fidelidad al contenido

Todo el contenido (resúmenes, esquemas, glosarios y preguntas, incluidas las
actividades de autoevaluación marcadas como «Pregunta de autoevaluación del
libro») está elaborado a partir del PDF del libro, resumido y reorganizado para
estudiar, sin añadir contenidos externos.
