let nombreJugador = "";
let respuestasCorrectas = 0;
let preguntaActual = 0;

const preguntas = [
  {
    pregunta:
      '1.¿Cuál de los siguientes compositores es conocido por su obra "Las Cuatro Estaciones"?',
    opciones: [
      "a) Ludwig van Beethoven",
      "b) Wolfgang Amadeus Mozart",
      "c) Antonio Vivaldi",
    ],
    respuestaCorrecta: "c) Antonio Vivaldi",
  },
  {
    pregunta: '2.¿Quién fue el autor de la obra "Don Quijote de la Mancha"?',
    opciones: [
      "a) Miguel de Cervantes Saavedra",
      "b) Gabriel García Márquez",
      "c) William Shakespeare",
    ],
    respuestaCorrecta: "a) Miguel de Cervantes Saavedra",
  },
  {
    pregunta:
      '3. ¿Cuál de los siguientes escritores es conocido por su obra "Romeo y Julieta"? ',
    opciones: ["a)	William Shakespeare", "b) Charles Dickens", "c) Jane Austen"],
    respuestaCorrecta: "a)	William Shakespeare",
  },
];

function comenzar() {
  nombreJugador = document.getElementById("nombre-jugador").value;
  document.getElementById("bienvenido").style.display = "none";
  document.getElementById("pantalla").style.display = "block";
  document.getElementById("saludo").innerText = `Hola ${nombreJugador}!`;
  setTimeout(mostrarPregunta, 1000);
}

function mostrarPregunta() {
  const cajaPregunta = document.getElementById("caja");
  const preguntaActualObj = preguntas[preguntaActual];
  cajaPregunta.innerHTML = `
      <p>${preguntaActualObj.pregunta}</p>
      <ul>
        ${preguntaActualObj.opciones
          .map(
            (opcion) => `
          <li>
            <input type="radio" name="answer" value="${opcion}">
            <label>${opcion}</label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
}

function respuesta() {
  const opcionSeleccionada = document.querySelector(
    'input[type="radio"]:checked'
  );
  if (!opcionSeleccionada) {
    alert("Por favor seleccione una respuesta.");
    return;
  }

  const preguntaActualObj = preguntas[preguntaActual];
  if (opcionSeleccionada.value === preguntaActualObj.respuestaCorrecta) {
    alert("¡Respuesta Correcta!");
    respuestasCorrectas++;
  } else {
    alert("Respuesta Incorrecta.");
  }

  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    finJuego();
  }
}

function finJuego() {
  alert(
    `Fin del juego. Has respondido correctamente ${respuestasCorrectas} de ${preguntas.length} preguntas.`
  );
}

function reiniciar() {
  document.getElementById("nombre-jugador").value = "";
  preguntaActual = 0;
  respuestasCorrectas = 0;
  document.getElementById("bienvenido").style.display = "block";
  document.getElementById("pantalla").style.display = "none";
}
