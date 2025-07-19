const temp = 10;
const windSpeed = 11;
const condition = 'Rainy';
const windChill = calculateWindChill(temp, windSpeed)

document.getElementById('temperature').textContent = `${temp}°C`;
document.getElementById('conditions').textContent = condition;
document.getElementById('chill').textContent = windChill;
document.getElementById('wind').textContent = `${windSpeed}km/h`;

function calculateWindChill(temp, windSpeed) {
    if (windSpeed > 4.8 && temp <= 10) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return `${Math.round(windChill * 10) / 10}°C`;
    } else {
        return 'N/A';
    }
}

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

const lastModification = document.querySelector(".lastModified");
const lastModif = new Date(document.lastModified);
const formattedDate = lastModif.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});
lastModification.innerHTML = `Last Modification: ${formattedDate}`;