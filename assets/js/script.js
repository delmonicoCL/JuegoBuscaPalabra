function salir() {
  setTimeout(() => {
    Swal.fire({
      imageUrl: "assets/images/fondo_alert.png",
      position: "center",
      // imageWidth: 400/3,
      // imageHeight: 480/3,
      color: "#716add",
      background: "#fff url(assets/images/salir.png)",
      showCancelButton: true,
      confirmButtonColor: "#517290",
      cancelButtonColor: "#fc8d72",
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      showClass: {
        popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          window.location.href = "adios.html";
        }, 500);
      } else {
        setTimeout(() => {
          window.location.href = "juego.html";
        }, 500);
      }
    });
  }, 10);
}

function perdiste() {
  setTimeout(() => {
    Swal.fire({
      imageUrl: "assets/images/fondo_alert.png",
      position: "center",
      // imageWidth: 400/3,
      // imageHeight: 480/3,
      color: "#716add",
      background: "#fff url(assets/images/perdiste.png)",
      showCancelButton: true,
      confirmButtonColor: "#517290",
      cancelButtonColor: "#fc8d72",
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      showClass: {
        popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          window.location.href = "juego.html";
        }, 1500);
      } else {
        setTimeout(() => {
          window.location.href = "adios.html";
        }, 1500);
      }
    });
  }, 3500);
}

function ganaste() {
  setTimeout(() => {
    Swal.fire({
      imageUrl: "assets/images/fondo_alert.png",
      position: "center",
      imageWidth: 400,
      imageHeight: 480,
      color: "#716add",
      background: "#fff url(assets/images/ganaste.png)",
      showCancelButton: true,
      confirmButtonColor: "#517290",
      cancelButtonColor: "#fc8d72",
      confirmButtonText: "SI",
      cancelButtonText: "NO",
      showClass: {
        popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setTimeout(() => {
          window.location.href = "juego.html";
        }, 1500);
      } else {
        setTimeout(() => {
          window.location.href = "adios.html";
        }, 1500);
      }
    });
  }, 100000);
}

function nombreJugador() {
  // Utilizar un cuadro de diálogo de entrada para obtener el nombre del jugador
  var nombreJugador = prompt("Ingresa tu nombre:");

  // Verificar si el jugador ingresó un nombre y no canceló la entrada
  if (nombreJugador !== null && nombreJugador.trim() !== "") {
    localStorage.setItem("jugador", nombreJugador);
    window.location.href = "juego.html";
    console.log("Nombre del jugador almacenado:", nombreJugador);
  } else {
    console.log("No se ingresó un nombre.");
  }
}

function actualizarNombreJugador() {
  // Obtener el nombre del jugador almacenado en localStorage
  var nombreJugador = localStorage.getItem("jugador");

  // Obtener el elemento span por su id
  var nombreJugadorSpan = document.getElementById("nombreJugadorSpan");

  // Verificar si el nombre del jugador está almacenado
  if (nombreJugador) {
    // Actualizar el contenido del elemento span con el nombre del jugador
    nombreJugadorSpan.textContent = nombreJugador;
  } else {
    // Si no hay un nombre almacenado, puedes mostrar un mensaje predeterminado o manejarlo según tus necesidades
    nombreJugadorSpan.textContent = "Jugador Anónimo";
  }
}

actualizarNombreJugador();

// Array de Palabras

var Palabras = [
  {
    nombre: "COCODRILO",
    src: "assets/images/galeria/cocodrilo.png",
    pista: "Es un reptil que vive en el agua",
    descripcion:
      "Sabías Que? El cocodrilo puede medir 2 metros y tiene una piel escamosa. Tiene gran fuerza en sus mandíbulas!",
  },
  {
    nombre: "RINOCERONTE",
    src: "assets/images/galeria/rinoceronte.png",
    pista: "Es un animal gigante con un cuerno en la nariz, que vive en Africa",
    descripcion:
      "Sabías Que? El rinocerontele encanta revolcarse en el lodo para refrescarse. Su cuerno está hecho de queratina,igual que tus uñas y cabello.",
  },
  {
    nombre: "ELEFANTE",
    src: "assets/images/galeria/elefante.png",
    pista: "Es el animal más grande de la selva y tiene una trompa larga",
    descripcion:
      "Sabías Que? El elefante tiene una trompa larga y fuerte que utiliza para agarrar cosas, ¡incluso para darse abrazos entre ellos!",
  },
  {
    nombre: "JIRAFA",
    src: "assets/images/galeria/jirafa.png",
    pista: "Es un animal con un cuello largo que vive en la sabana",
    descripcion:
      "Sabías Que? La jirafa come hojas de los árboles.¡Su cuello largo le permite alcanzar las hojas más altas y comunicarse con otras jirafas!",
  },
  {
    nombre: "PINGUINO",
    src: "assets/images/galeria/pinguino.png",
    pista: "Es un pájaro que no vuela y vive en el frío",
    descripcion:
      "Sabías Que? Los pingüinos son excelentes nadadores. Aunque no vuelan, pueden sumergirse en el agua y atrapar peces para comer. ¡Son como pequeños acróbatas del océano!",
  },
  {
    nombre: "FELICIDAD",
    src: "assets/images/galeria/felicidad.png",
    pista: "Es sentirse muy contento y alegre",
    descripcion:
      "La felicidad es como cuando recibes un regalo sorpresa. ¡Puede provenir de las pequeñas cosas y hacer que tu corazón se llene de alegría!",
  },
  {
    nombre: "EMPATIA",
    src: "assets/images/galeria/empatia.png",
    pista: "Es entender y compartir los sentimientos de otras personas",
    descripcion:
      "La empatía es como ponerse en los zapatos de un amigo para comprender cómo se siente. ¡Ser amable y comprensivo con los demás hace del mundo un lugar mejor!",
  },

  {
    nombre: "TRISTEZA",
    src: "assets/images/galeria/tristeza.png",
    pista: "Es sentirse con melancolia y ganas de llorar",
    descripcion:
      "La tristeza puede ser desapecer con un abrazo y palabras de cariño. Compartir tus sentimientos con alguien de confianza te hace sientir mejor.",
  },
  {
    nombre: "FURIA",
    src: "assets/images/galeria/furia.png",
    pista: "Es sentirse muy enojado y furioso",
    descripcion:
      "La furia o enojo es una emoción fuerte que todos experimentamos. Aprender a controlarla, respirar profundo y expresarla de manera positiva es muy importante",
  },
  {
    nombre: "ALEGRIA",
    src: "assets/images/galeria/alegria.png",
    pista: "Es sentirse feliz y contento",
    descripcion:
      "La alegría es una emoción que nos llena de felicidad y positividad. Puede ser contagiosa, ¡así que comparte tu alegría!",
  },
  {
    nombre: "BARCELONA",
    src: "assets/images/galeria/barcelona.png",
    pista: "Es una ciudad en España famosa por su arquitectura única",
    descripcion:
      "Sabías Que? El arquitecto Gaudí, nacio en Barcelona. ¡La Sagrada Familia es una de las obras maestras arquitectónicas más famosas del mundo!",
  },
  {
    nombre: "VALENCIA",
    src: "assets/images/galeria/valencia.png",
    pista: "Es una ciudad en España conocida por las fiestas y la paella",
    descripcion:
      "Sabías Que? Valencia tiene una fiesta llamada Las Fallas y la comida es deliciosa, especialmente la paella!",
  },
  {
    nombre: "MADRID",
    src: "assets/images/galeria/madrid.png",
    pista: "Es la capital de España y tiene muchos lugares interesantes",
    descripcion:
      "Sabías Que? Madrid es famosa por su parque El Retiro y por el Palacio Real. Capital de España",
  },
  {
    nombre: "GRANADA",
    src: "assets/images/galeria/granada.png",
    pista: "Es una ciudad en España con un palacio llamado La Alhambra",
    descripcion:
      "Sabías Que? Granada es famosa por su hermoso palacio y sus jardines, llenos de fuentes y flores. ¡La Alhambra es un lugar mágico con una arquitectura impresionante!",
  },
  {
    nombre: "SEVILLA",
    src: "assets/images/galeria/sevilla.png",
    pista: "Es una ciudad en el sur de España con una torre llamada La Giralda",
    descripcion:
      "Sabías Que? Sevilla tiene una feria llamada Feria de Abril, donde la gente baila, come y se divierte. ¡Es una celebración llena de alegría y color en el sur de España!",
  },
];

// Seleccionar aleatoriamente un objeto del array
var PalabraSeleccionada = Palabras[Math.floor(Math.random() * Palabras.length)];

// Obtener la palabra oculta del objeto seleccionado
var PalabraOculta = PalabraSeleccionada.nombre;
var PalabraBuscada = PalabraOculta.split("");

// Obtener el contenedor del teclado
var tecladoContainer = document.getElementById("ZonaPalabraBuscada");

// Generar dinámicamente los divs con el contenido del array
for (var i = 0; i < PalabraBuscada.length; i++) {
  var divTecla = document.createElement("div");
  divTecla.className = "tecla-teclado1 btn m-1";
  divTecla.id = PalabraBuscada[i];

  // Agregar el div al contenedor
  tecladoContainer.appendChild(divTecla);

  // Mostrar la descripción en la zona de información
  var zonaInfo = document.getElementById("ZonaInfo");
  zonaInfo.innerHTML = `<h3>${PalabraSeleccionada.pista}</h3>`;
}

contadorErrores = 0;
contadorAciertos = 0;
// Array con el alfabeto de la A a la Z
const alfabeto = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode("A".charCodeAt(0) + i)
);

// Obtener el elemento contenedor del teclado por su ID
const contenedorTeclado = document.getElementById("teclado");

// Crear teclas del teclado en español desde el array
alfabeto.forEach((letra) => {
  // Crear un elemento div para representar cada tecla
  const teclaElemento = document.createElement("div");
  // Asignar clases para aplicar estilos de Bootstrap y personalizados
  teclaElemento.className = "tecla-teclado btn m-1";
  // Establecer el contenido de la tecla como la letra actual
  teclaElemento.textContent = letra;
  // Asignar el Id de la tecla como la letra actual
  teclaElemento.id = letra;

  var teclaseleccionada;

  // Cargar Imagen Pregunta
  CargarImagenPregunta();

  // Agregar la tecla al contenedor del teclado
  contenedorTeclado.appendChild(teclaElemento);

  // Agregar un evento de clic a cada tecla
  teclaElemento.addEventListener("click", function () {
    // Verificar si la tecla no ha sido seleccionada
    if (!this.classList.contains("teclaseleccionada")) {
      // Almacenar la letra seleccionada
      teclaseleccionada = this.textContent;
      // SonidoTecla.play();
      this.classList.add("teclaseleccionada");
      // Desactivar el evento de clic para evitar selecciones adicionales
      this.removeEventListener("click", arguments.callee);

      // Imprimir el valor en la consola
      console.log("Letra seleccionada:", teclaseleccionada);

      // Imprimir Array Palabra Buscada
      console.log("PalabraBUSCADA:", PalabraBuscada);

      buscarLetra();
    }

    function buscarLetra() {
      // Variable para verificar si la letra fue encontrada
      var letraEncontrada = false;

      // Recorre el array PalabraBuscada
      for (var i = 0; i < PalabraBuscada.length; i++) {
        // Compara la letra actual con teclaseleccionada

        if (PalabraBuscada[i] === teclaseleccionada) {
          contadorAciertos++;
          console.log("ContadorAciertos:", contadorAciertos);
          LetraCorrecta.play();
          // Muestra una alerta con la letra encontrada

          // Obtener todos los elementos con el ID igual al contenido de teclaseleccionada
          var letraApintar = document.querySelectorAll(
            '[id="' + teclaseleccionada + '"]'
          );

          // Iterar sobre los elementos y actualizar su contenido con el valor de teclaseleccionada
          letraApintar.forEach(function (letra) {
            letra.innerHTML = teclaseleccionada;
          });
          // Indica que la letra fue encontrada
          letraEncontrada = true;
        }

        if (PalabraBuscada.length === contadorAciertos) {
          console.log("HAS GANADO");
          Ganaste.play();
          var zonaInfo = document.getElementById("ZonaInfo");
          zonaInfo.innerHTML = `<h5>${PalabraSeleccionada.descripcion}</h5>`;

          cambiarZonaFotter();
          ganaste();

          // Verificar si ya se ha agregado la imagen
          var zonaImagen = document.getElementById("ZonaImagen");

          // Obtener el elemento de imagen anterior
          var imagenAnterior = zonaImagen.lastChild;

          // Eliminar el elemento de imagen anterior del DOM
          zonaImagen.removeChild(imagenAnterior);

          // if (!zonaImagen.querySelector('img')) {
          // Crear un nuevo objeto de imagen
          var nuevaImagen = new Image();
          nuevaImagen.src = PalabraSeleccionada.src;

          // Agregar la nueva imagen al DOM
          zonaImagen.appendChild(nuevaImagen);
          // }
        }
      }

      if (!letraEncontrada) {
        contadorErrores++;
        console.log("ContadorErrores:", contadorErrores);
        // Obtener el elemento "Zona Imagen"
        var zonaImagen = document.getElementById("ZonaImagen");

        // Obtener el elemento de imagen anterior
        var imagenAnterior = zonaImagen.lastChild;

        // Eliminar el elemento de imagen anterior del DOM
        zonaImagen.removeChild(imagenAnterior);

        // Crear un nuevo objeto de imagen
        var nuevaImagen = new Image();

        if (contadorErrores === 1) {
          LetraIncorrecta.play();

          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<div class="d-flex justify-content-center align-items-center justify-content-center">
          <h1 class="m-0">Tienes 5 </h1>
          <img src="assets/images/corazonAzul.png" class="corazon ml-2" alt="Corazón">
        </div>
      `;

          // Asignar el atributo src con la ruta de la primera imagen
          nuevaImagen.src = "assets/images/fotos_pastelazo/imagen1.png";
          // Obtener el elemento VIDA que deseas eliminar
          var vidas = document.getElementById("vida1");
          // Eliminar el elemento del DOM
          vidas.remove();
        } else if (contadorErrores === 2) {
          LetraIncorrecta.play();
          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<div class="d-flex justify-content-center align-items-center justify-content-center">
          <h1 class="m-0">Tienes 4 </h1>
          <img src="assets/images/corazonAzul.png" class="corazon ml-2" alt="Corazón">
        </div>
      `;

          // Asignar el atributo src con la ruta de la segunda imagen
          nuevaImagen.src = "assets/images/fotos_pastelazo/imagen2.png";
          // Obtener el elemento VIDA que deseas eliminar
          var vidas = document.getElementById("vida2");
          // Eliminar el elemento del DOM
          vidas.remove();
        } else if (contadorErrores === 3) {
          LetraIncorrecta.play();
          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<div class="d-flex justify-content-center align-items-center justify-content-center">
            <h1 class="m-0">Tienes 3</h1>
            <img src="assets/images/corazonAzul.png" class="corazon ml-2" alt="Corazón">
          </div>
        `;
          // Asignar el atributo src con la ruta de la tercera imagen
          nuevaImagen.src = "assets/images/fotos_pastelazo/imagen3.png";
          // Obtener el elemento VIDA que deseas eliminar
          var vidas = document.getElementById("vida3");
          // Eliminar el elemento del DOM
          vidas.remove();
        } else if (contadorErrores === 4) {
          LetraIncorrecta.play();
          // Asignar el atributo src con la ruta de la cuarta imagen
          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<div class="d-flex justify-content-center align-items-center justify-content-center">
          <h1 class="m-0">Tienes 2 </h1>
          <img src="assets/images/corazonAzul.png" class="corazon ml-2" alt="Corazón">
        </div>
      `;
          nuevaImagen.src = "assets/images/fotos_pastelazo/imagen4.png";
          var vidas = document.getElementById("vida4");
          // Eliminar el elemento del DOM
          vidas.remove();
        } else if (contadorErrores === 5) {
          LetraIncorrecta.play();
          // Asignar el atributo src con la ruta de la quinta imagen
          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<div class="d-flex justify-content-center align-items-center justify-content-center">
          <h1 class="m-0">Tienes 1</h1>
          <img src="assets/images/corazonAzul.png" class="corazon ml-2" alt="Corazón">
        </div>
      `;
      nuevaImagen.src = "assets/images/fotos_pastelazo/imagen5.png";
          // Obtener el elemento VIDA que deseas eliminar
          var vidas = document.getElementById("vida5");
          // Eliminar el elemento del DOM
          vidas.remove();
        } else if (contadorErrores === 6) {
          Finjuego.play();

          // Modifica BARRRA FOOTER con la cantidad de vidas restantes //
          var barraFooter = document.getElementById("BarraFooter");
          barraFooter.innerHTML = `<h1>Sin Vidas <img src="assets/images/corazonAzul.png" class="corazon" alt="Corazón"></h1>`;
          // Asignar el atributo src con la ruta de la quinta imagen
          nuevaImagen.src = "assets/images/fotos_pastelazo/imagen6.png";
          // Obtener el elemento VIDA que deseas eliminar
          var vidas = document.getElementById("vida6");
          // Eliminar el elemento del DOM
          vidas.remove();
          perdiste();
        }

        // Obtener el elemento "Zona Imagen" y agregar la nueva imagen
        var zonaImagen = document.getElementById("ZonaImagen");
        zonaImagen.appendChild(nuevaImagen);
      }
    } //

    function cambiarZonaFotter() {
      // Obtén el elemento del div por su ID
      var barraFooter = document.getElementById("BarraFooter");

      // Define el nuevo contenido HTML que deseas establecer
      var nuevoContenido = ` <h3 style="color: rgb(255, 254, 252)">
        <a href="juego.html" style="text-decoration: none; color: inherit;">
            VOLVER A JUGAR
        </a>
    </h3>`;

      // Cambia el contenido del div utilizando innerHTML
      barraFooter.innerHTML = nuevoContenido;
    }
  });

  function CargarImagenPregunta() {
    console.log("IMAGEN PREGUNTA");
    // Crear un nuevo objeto de imagen
    var imagenPregunta = new Image();

    // Establecer la ruta de la imagen pregunta.png
    imagenPregunta.src = "assets/images/galeria/pregunta.png";

    // Agregar la imagen al elemento con el ID "ZonaImagen"
    var zonaImagen = document.getElementById("ZonaImagen");
    zonaImagen.innerHTML = ""; // Limpiar cualquier contenido previo
    zonaImagen.appendChild(imagenPregunta);
  }
});

const SonidoTecla = new Audio("assets/media/mp3/tecla_maquinaescribir.wav");
const LetraCorrecta = new Audio("assets/media/mp3/piezacorrecta.mp3");
const LetraIncorrecta = new Audio("assets/media/mp3/piezaincorrecta.mp3");
LetraIncorrecta.volume = 0.5;
const Finjuego = new Audio("assets/media/mp3/baby.mp3");
Finjuego.volume = 0.5;
const Ganaste = new Audio("assets/media/mp3/win.mp3");
// Ganaste.volume = 0.5;
