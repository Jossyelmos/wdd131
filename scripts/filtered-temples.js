const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1982, November, 27",
    area: 19184,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
  },
  {
    templeName: "Auckland New Zealand",
    location: "Auckland, New Zealand",
    dedicated: "2020, June, 13",
    area: 45456,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/auckland-new-zealand-temple/auckland-new-zealand-temple-56277-main.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Brampton, Ontario Canada",
    dedicated: "1987, October, 10",
    area: 55558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469-main.jpg"
  },
  // Add more temple objects here...
];

function templeCardTemplate(temple) {
  return `<div class="temple-card">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area}sq ft.</p>
            <img class="temple-image" src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="300" height="200"/>
          </div>`
}

function renderTemple(temples) {
  const templeCards = temples.map(templeCardTemplate).join("");
  
  document.querySelector(".container").innerHTML = templeCards;
}
renderTemple(temples);

function getOldTemples(temples) {
  const dedicatedBefore1900 = temples.filter((temple) => {
    const oldTemples = parseInt(temple.dedicated.split(",")[0]);
    return oldTemples < 1900;

  });
  const templeCard = dedicatedBefore1900.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = templeCard;
}
getOldTemples(temples);

function getNewTemples(temples) {
  const dedicatedAfter2000 = temples.filter((temple) => {
    const newTemples = parseInt(temple.dedicated.split(",")[0]);
    return newTemples > 2000;

  });
  const templeCard = dedicatedAfter2000.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = templeCard;
}
getNewTemples(temples);

function getLargeTemples(temples) {
  const biggerTemple = temples.filter((temple) => {
    const lagerTemple = temple.area > 90000;
    return lagerTemple;
  });
  const temmpleCard = biggerTemple.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = temmpleCard;
}
getLargeTemples(temples);

function getSmallTemples(temples) {
  const smallerTemple = temples.filter((temple) => {
    const smallTemple = temple.area < 10000;
    return smallTemple;
  });
  const temmpleCard = smallerTemple.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = temmpleCard;
}
getSmallTemples(temples);


// Display the temples......
document.querySelector("#home").addEventListener("click", () => {
  renderTemple(temples);
});

document.querySelector("#old").addEventListener("click", () => {
  getOldTemples(temples);
});

document.querySelector("#new").addEventListener("click", () => {
  getNewTemples(temples);
});

document.querySelector("#large").addEventListener("click", () => {
  getLargeTemples(temples);
});

document.querySelector("#small").addEventListener("click", () => {
  getSmallTemples(temples);
});



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    title.classList.toggle('hidden');
});

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