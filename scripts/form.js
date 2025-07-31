const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  const reviewForm = document.querySelector(".wf1");
  const reviewCountDisplay = document.getElementById("reviewCountDisplay");

  if (reviewCountDisplay) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCountDisplay.textContent = `You have submitted ${count} review(s).`;
  }

  if (reviewForm) {
    reviewForm.addEventListener("submit", function (event) {
      let count = Number(localStorage.getItem("reviewCount")) || 0;
      count += 1;
      localStorage.setItem("reviewCount", count);

      if (reviewCountDisplay) {
        reviewCountDisplay.textContent = `You have submitted ${count} review(s).`;
      }
    });
  }
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