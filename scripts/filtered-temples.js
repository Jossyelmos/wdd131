const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/aba-nigeria.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/manti-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/payson-utah.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/yigo_guam.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/washington.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/lima-peru.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/mexico-city.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1982, November, 27",
    area: 19184,
    imageUrl:
    "images/johannesburg.jpg"
  },
  {
    templeName: "Auckland New Zealand",
    location: "Auckland, New Zealand",
    dedicated: "2020, June, 13",
    area: 45456,
    imageUrl:
    "images/auckland-new-zealand.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Brampton, Ontario Canada",
    dedicated: "1987, October, 10",
    area: 55558,
    imageUrl:
    "images/toronto.jpg"
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

function getNewTemples(temples) {
  const dedicatedAfter2000 = temples.filter((temple) => {
    const newTemples = parseInt(temple.dedicated.split(",")[0]);
    return newTemples > 2000;

  });
  const templeCard = dedicatedAfter2000.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = templeCard;
}

function getLargeTemples(temples) {
  const biggerTemple = temples.filter((temple) => {
    const largerTemple = temple.area > 90000;
    return largerTemple;
  });
  const templeCard = biggerTemple.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = templeCard;
}

function getSmallTemples(temples) {
  const smallerTemple = temples.filter((temple) => {
    const smallTemple = temple.area < 10000;
    return smallTemple;
  });
  const temmpleCard = smallerTemple.map(templeCardTemplate).join("");
  document.querySelector(".container").innerHTML = temmpleCard;
}

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