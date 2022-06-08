const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. What does CPU mean?",
    respuestas: {
      a: "Processed Units Center",
      b: "Central processing unit",
      c: "Unit Core Processes",
    },
    respuestaCorrecta: "b",
  },

  {
    pregunta: "2. What does RAM mean?",
    respuestas: {
      a: "Alternate Memory Access",
      b: "Greater Access Actions",
      c: "Random access memory",
    },
    respuestaCorrecta: "c",
  },

  {
    pregunta: "3. What is Local Disk C:\?",
    respuestas: {
      a: "configuration command",
      b: "recovery partition",
      c: "Primary system hard drive",
    },
    respuestaCorrecta: "c",
  },

  {
    pregunta: "4. What does cmd mean?",
    respuestas: {
      a: "Command Prompt in Windows",
      b: "Settings Command",
      c: "Core Memory Disk",
    },
    respuestaCorrecta: "a",
  },

  {
    pregunta: "5. What is software?",
    respuestas: {
      a: "Main Program",
      b: "Windows Command Prompt",
      c: "Formal System of an Information System",
    },
    respuestaCorrecta: "c",
  },

  {
    pregunta: "6. What is Hardware?",
    respuestas: {
      a: "Removable Memory",
      b: "Antivirus",
      c: "Equipment or Physical Support",
    },
    respuestaCorrecta: "c",
  },

  {
    pregunta: "7. Is it so that the user can select or click?",
    respuestas: {
      a: "Keyboard",
      b: "Mouse",
      c: "power button",
    },
    respuestaCorrecta: "b",
  },
  
  {
    pregunta: "8. Is it used to insert and write text in the system?",
    respuestas: {
      a: "Touch screen",
      b: "Keyboard",
      c: "Tactile",
    },
    respuestaCorrecta: "b",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
  const respuestas = contenedor.querySelectorAll(".respuestas");
  let respuestasCorrectas = 0;

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const todasLasRespuestas = respuestas[numeroDePregunta];
    const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
    const respuestaElegida = (
      todasLasRespuestas.querySelector(checkboxRespuestas) || {}
    ).value;

    if (respuestaElegida === preguntaActual.respuestaCorrecta) {
      respuestasCorrectas++;

      respuestas[numeroDePregunta].style.color = "blue";
    } else {
      respuestas[numeroDePregunta].style.color = "red";
    }
  });

  resultadoTest.innerHTML =
    "you have correct " +
    respuestasCorrectas +
    " questions out of a total of " +
    preguntas.length;
}

botonRes.addEventListener("click", mostrarResultado);