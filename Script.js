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
