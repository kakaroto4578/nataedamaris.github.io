// Define a data do casamento (11 de julho de 2026 às 16:00)
const weddingDate = new Date("2026-07-11T16:00:00").getTime();

// Atualiza a contagem a cada 1 segundo
const countdownInterval = setInterval(function () {
    // Data e hora atual
    const now = new Date().getTime();

    // Diferença entre agora e a data do casamento
    const distance = weddingDate - now;

    // Cálculo dos dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Atualiza os elementos HTML
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // Quando chegar o grande dia
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<span class='text-2xl text-gold'>O Grande Dia Chegou!</span>";
    }
}, 1000);
