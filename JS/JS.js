let btnAgoraclub = document.getElementById("btn_ago_club");
let btn_oh_pay = document.getElementById("btn_oh_pay");
let btn_ago_ahorramas = document.getElementById("btn_ago_ahorramas");
let btn_shop = document.getElementById("btn_shop");

//style="display: block !important;"

var startTime, endTime;

// Escuchar el evento 'slide.bs.carousel'
document
  .getElementById("carouselExampleFade")
  .addEventListener("slide.bs.carousel", function () {
    startTime = new Date().getTime();
  });

// Escuchar el evento 'slid.bs.carousel'
document
  .getElementById("carouselExampleFade")
  .addEventListener("slid.bs.carousel", function () {
    endTime = new Date().getTime();
    var duration = endTime - startTime;
    console.log("Tiempo de transición de la imagen: " + duration + " ms");
  });

// Función para obtener el índice del elemento activo
function getActiveIndex() {

  var items = document.querySelectorAll("#carouselExampleFade .carousel-item");
  var activeItem = document.querySelector(
    "#carouselExampleFade .carousel-item.active"
  );
  return Array.from(items).indexOf(activeItem);
}

const lienzo1 = document.getElementById("lienzo1");
const circulo1 = document.getElementById("circulo1");
const lienzo2 = document.getElementById("lienzo2");
const circulo2 = document.getElementById("circulo2");
const lienzo3 = document.getElementById("lienzo3");
const circulo3 = document.getElementById("circulo3");
const lienzo4 = document.getElementById("lienzo4");
const circulo4 = document.getElementById("circulo4");

// Mostrar el índice del elemento activo al cargar la página

removerStronk();

console.log("Índice del elemento activo al cargar:", getActiveIndex());
if (getActiveIndex() === 0) {
  btnAgoraclub.classList.add("active_ago_club");

  circulo1.classList.add("stronk1");
  lienzo1.classList.add("animate-rotation");
  circulo1.classList.add("animate-stroke");

}



// Agregar la clase
// elemento.classList.add('nueva-clase');

// Mostrar el índice del elemento activo después de cada transición




document
  .getElementById("carouselExampleFade")
  .addEventListener("slid.bs.carousel", function () {
    console.log(
      "Índice del elemento activo después de la transición:",
      getActiveIndex()
    );

    removerClases(); 
    removerStronk();
        
    switch (getActiveIndex()) {

      case 0:
        btnAgoraclub.classList.add("active_ago_club");
        circulo1.classList.add("stronk1");
        lienzo1.classList.add("animate-rotation");
        circulo1.classList.add("animate-stroke");

        break;
      case 1:
        btn_oh_pay.classList.add("active_oh_pay");
        circulo2.classList.add("stronk2");
        lienzo2.classList.add("animate-rotation");
        circulo2.classList.add("animate-stroke");

        break;
      case 2:
        btn_ago_ahorramas.classList.add("active_ago_ahorramas");
        circulo3.classList.add("stronk3");
        lienzo3.classList.add("animate-rotation");
        circulo3.classList.add("animate-stroke");

        break;
      case 3:
        btn_shop.classList.add("active_shop");
        circulo4.classList.add("stronk4");
        lienzo4.classList.add("animate-rotation");
        circulo4.classList.add("animate-stroke");

        break;

      default:
        break;
    }
  });

function removerStronk() {
  circulo1.classList.remove("stronk1");
  circulo2.classList.remove("stronk2");
  circulo3.classList.remove("stronk3");
  circulo4.classList.remove("stronk4");

  lienzo1.classList.remove("animate-rotation");
  circulo1.classList.remove("animate-stroke");

  lienzo2.classList.remove("animate-rotation");
  circulo2.classList.remove("animate-stroke");

  lienzo3.classList.remove("animate-rotation");
  circulo3.classList.remove("animate-stroke");

  lienzo4.classList.remove("animate-rotation");
  circulo4.classList.remove("animate-stroke");
}

function removerClases() {
  btnAgoraclub.classList.remove("active_ago_club");
  btn_oh_pay.classList.remove("active_oh_pay");
  btn_ago_ahorramas.classList.remove("active_ago_ahorramas");
  btn_shop.classList.remove("active_shop");
}

function aplicarAnimacion(id, elmentoAnterior) {
  var elemento = id;
  var startX = 0; // Posición inicial X
  var startY = calcularDistancia(id, elmentoAnterior);
  var duration = 500; // Duración de la animación en milisegundos
  var startTime = null;

  function animate(timestamp) {
    if (!startTime) startTime = timestamp;
    var elapsed = timestamp - startTime;

    // Calcular la posición actual
    var progress = Math.min(elapsed / duration, 1);
    var currentX = startX * (1 - progress);
    var currentY = startY * (1 - progress);

    // Aplicar la posición al elemento
    elemento.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // Continuar la animación si no ha terminado
    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  // Inicializar la posición inicial
  elemento.style.transform = `translate(${startX}px, ${startY}px)`;

  // Iniciar la animación
  requestAnimationFrame(animate);
}

function calcularDistancia(btnActual, btnAnterior) {
  var elemento1 = btnAnterior;
  var elemento2 = btnActual;

  var rect1 = elemento1.getBoundingClientRect();
  var rect2 = elemento2.getBoundingClientRect();

  // Calcular la distancia horizontal y vertical
  var distanciaX = rect2.left - rect1.left;
  var distanciaY = rect2.top - rect1.top;

  // Calcular la distancia euclidiana (distancia directa)
  var distancia = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

  console.log("Distancia horizontal (X): " + distanciaX + " px");
  console.log("Distancia vertical (Y): " + distanciaY + " px");
  console.log("Distancia euclidiana: " + distancia + " px");

  return distancia;
}

let abrirmenu = document.getElementById("btnAbrirMenu");
let sidebar = document.getElementById("sidebarMenu");
let check = document.getElementById("lanzador");
let altura_menu = document.getElementById("alturaMenu");

let altura_menu_px = altura_menu.offsetHeight;
sidebar.style.height = `calc(100vh - (${altura_menu_px}px))`;

abrirmenu.addEventListener("click", () => {
  let lineas = document.querySelectorAll(".menu-activador-linea");

  if (check.checked) {
    sidebar.style.transform = "translateX(0)";

    lineas.forEach((element) => {
      element.style.background = "#4b4d53";
    });
  } else {
    sidebar.style.transform = "translateX(100%)";

    lineas.forEach((element) => {
      element.style.background = "var(--cyan-color)";
    });
  }
});
