document.addEventListener('DOMContentLoaded', function () {
  // ───────────────────────────────────────────────
  // 1. Botón "Agregar a Calendario" (.ics download)
  // ───────────────────────────────────────────────
  const addToCalendarButton = document.getElementById('add-to-calendar');
  if (addToCalendarButton) {
    addToCalendarButton.addEventListener('click', function () {
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
  }

  // ───────────────────────────────────────────────
  // 2. Carrusel de imágenes con scroll horizontal
  // ───────────────────────────────────────────────
  const carrusel = document.querySelector('.carrusel-contenedor');
  const prevButton = document.querySelector('.carrusel-control.prev');
  const nextButton = document.querySelector('.carrusel-control.next');

  if (carrusel && prevButton && nextButton) {
    const scrollAmount = 300; // puedes ajustar este valor si lo deseas

    prevButton.addEventListener('click', () => {
      carrusel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
      carrusel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  // ───────────────────────────────────────────────
  // 3. Confirmación con efecto de estrellas
  // ───────────────────────────────────────────────
  const confirmButton = document.querySelector('.boton.confirmar');

  if (confirmButton) {
    confirmButton.addEventListener('click', function (e) {
      e.preventDefault();
      lanzarEstrellas();

      // Después de 2 segundos, abre el enlace
      setTimeout(() => {
        window.open(confirmButton.getAttribute('href'), '_blank');
      }, 2000);
    });
  }

  function lanzarEstrellas() {
    const cantidadEstrellas = 40;
    for (let i = 0; i < cantidadEstrellas; i++) {
      setTimeout(crearEstrella, i * 50);
    }
  }

  function crearEstrella() {
    const estrella = document.createElement('div');
    estrella.classList.add('estrella');

    // Izquierda o derecha
    const desdeIzquierda = Math.random() < 0.5;
    estrella.style.left = desdeIzquierda ? '-20px' : window.innerWidth + 'px';

    // Posición vertical
    const posY = Math.random() * window.innerHeight;
    estrella.style.top = posY + 'px';

    // Tamaño aleatorio
    const tamano = Math.random() * 5 + 5;
    estrella.style.width = tamano + 'px';
    estrella.style.height = tamano + 'px';

    // Color y brillo
    const colores = ['#FFD700', '#FF69B4', '#7FFFD4', '#ADFF2F', '#FFFFFF'];
    const color = colores[Math.floor(Math.random() * colores.length)];
    estrella.style.backgroundColor = color;
    estrella.style.boxShadow = `0 0 20px ${color}`;

    // Estilos generales
    estrella.style.borderRadius = '50%';
    estrella.style.position = 'fixed';
    estrella.style.zIndex = '1000';
    estrella.style.pointerEvents = 'none';
    estrella.style.opacity = '1';
    estrella.style.transition = 'transform 2s ease-out, opacity 2s ease-out';

    document.body.appendChild(estrella);

    // Movimiento hacia el centro y desaparición
    setTimeout(() => {
      const destinoX = window.innerWidth / 2 - (desdeIzquierda ? 0 : estrella.clientWidth);
      const destinoY = window.innerHeight / 2 - estrella.clientHeight;
      estrella.style.transform = `translate(${destinoX - parseFloat(estrella.style.left)}px, ${destinoY - posY}px) scale(0.5)`;
      estrella.style.opacity = '0';
    }, 50);

    // Eliminar estrella tras animación
    setTimeout(() => {
      estrella.remove();
    }, 2000);
  }

  // ───────────────────────────────────────────────
  // 4. Cuenta regresiva hasta el evento
  // ───────────────────────────────────────────────
  const eventoFecha = new Date('2025-09-13T18:00:00').getTime();

  function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const distancia = eventoFecha - ahora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;

    if (distancia < 0) {
      clearInterval(intervalo);
      document.querySelector('.cuenta-regresiva').innerHTML = '<h2>¡Hora de festejar!</h2>';
    }
  }

  const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
});
