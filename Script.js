document.getElementById('add-to-calendar').addEventListener('click', function () {
    const icsFileContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20250913T180000Z
DTEND:20250913T220000Z
SUMMARY:Fiesta de XV Años Maria Chaires Aguirre
DESCRIPTION:¡No olvides asistir a la fiesta de XV años de Maria!
LOCATION:Salón de eventos Alborada, Calle Benito Juárez #976, Col. Centro, CP 26450, Zaragoza Coahuila
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsFileContent], { type: 'text/calendar' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'evento_xv_anos.ics';
    link.click();
});
document.getElementById('add-to-calendar').addEventListener('click', function () {
    console.log('El botón fue presionado'); // Prueba si el clic se registra
});
const carrusel = document.querySelector('.carrusel-contenedor');
const prevButton = document.querySelector('.carrusel-control.prev');
const nextButton = document.querySelector('.carrusel-control.next');

let currentIndex = 0;

function actualizarCarrusel() {
    const anchoImagen = carrusel.querySelector('img').clientWidth;
    carrusel.style.transform = `translateX(-${currentIndex * anchoImagen}px)`;
}

prevButton.addEventListener('click', () => {
    const totalImagenes = carrusel.children.length;
    currentIndex = (currentIndex - 1 + totalImagenes) % totalImagenes;
    actualizarCarrusel();
});

nextButton.addEventListener('click', () => {
    const totalImagenes = carrusel.children.length;
    currentIndex = (currentIndex + 1) % totalImagenes;
    actualizarCarrusel();
});

window.addEventListener('resize', actualizarCarrusel);
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionamos el botón de Confirmar Asistencia
  const confirmButton = document.querySelector('.boton');
  confirmButton.addEventListener('click', function(e) {
    // Al hacer click, lanzamos el efecto de estrellas
    lanzarEstrellas();
  });
});

function lanzarEstrellas() {
  const cantidadEstrellas = 30; // Número total de estrellas a generar
  // Generamos las estrellas con un ligero retardo entre cada una
  for (let i = 0; i < cantidadEstrellas; i++) {
    setTimeout(crearEstrella, i * 100);
  }
}

function crearEstrella() {
  const estrella = document.createElement('div');
  // Le asignamos la clase para identificación (aunque los estilos se definen vía JS)
  estrella.classList.add('estrella');
  
  // Elegimos aleatoriamente en qué lado de la pantalla aparecerá la estrella
  const lado = Math.random() < 0.5 ? 'left' : 'right';
  // Generamos un offset aleatorio (hasta el 20% del ancho de la pantalla)
  const offset = Math.random() * (window.innerWidth * 0.2);
  if (lado === 'left') {
    estrella.style.left = offset + 'px';
  } else {
    estrella.style.right = offset + 'px';
  }
  
  // Posicion inicial (por encima de la pantalla)
  estrella.style.top = '-10px';
  // Definimos un tamaño pequeño (entre 2px y 4px)
  const tamano = Math.random() * 2 + 2;
  estrella.style.width = tamano + 'px';
  estrella.style.height = tamano + 'px';
  // Usamos color blanco con opacidad aleatoria para simular distintos brillos
  const opacidad = Math.random() * 0.5 + 0.5; // entre 0.5 y 1
  estrella.style.backgroundColor = 'rgba(255, 255, 255, ' + opacidad + ')';
  
  // Configuramos estilos básicos para la animación
  estrella.style.position = 'fixed';
  estrella.style.zIndex = '1000';
  estrella.style.borderRadius = '50%';
  // Evitamos que interfiera con otros elementos
  estrella.style.pointerEvents = 'none';
  
  document.body.appendChild(estrella);
  
  // Duración aleatoria de la animación (entre 3 y 5 segundos)
  const duracion = Math.random() * 2 + 3;
  // Aplicamos la transición para que la estrella caiga verticalmente
  estrella.style.transition = 'top ' + duracion + 's linear';
  
  // Forzamos la animación: cambiamos la posición top al fondo de la ventana
  setTimeout(function() {
    estrella.style.top = window.innerHeight + 'px';
  }, 10);
  
  // Una vez terminada la animación, eliminamos la estrella del DOM
  setTimeout(function() {
    estrella.remove();
  }, duracion * 1000);
}
</script>
