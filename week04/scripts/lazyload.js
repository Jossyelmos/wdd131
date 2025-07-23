let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { sectionName: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { sectionName: "002", enrolled: 87, instructor: "Sarah Gobble" }
  ]
};

function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
  return `<tr>
            <td>${section.sectionName}</td>
            <td>${section.enrolled}</td>
            <td>${section.instructor}</td>
          </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse);
renderSections(aCourse.sections);

let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(name => name.charAt(0) === 'B');

let nameLengths = names.map((name) => name.length);
let nameReducer = names.reduce((total, name) => total + name.length, 0) / names.length;

document.querySelector("#testing").innerHTML = namesB.join(", ");
document.querySelector("#nameLenght").innerHTML = nameLengths;
document.querySelector("#average").innerHTML = nameReducer;


const courses = [
  "CSE 110",
  "CSE 111",
  "WDD 130",
  "WDD 131",
  "WDD 231",
  "CSE 210"
];

// 1️⃣ map() courses to subject list
function listTemplate(course) {
  return `<li>${course}</li>`
}

function renderCourse(courses) {
  const myCourseLists = courses.map(listTemplate).join("");
  document.querySelector("#subject").innerHTML = `<ul>${myCourseLists}</ul>`;
}

renderCourse(courses);

// const subjectsList = document.getElementById("subjects");
// const subjects = courses.map((course) => course.split(" ")[0]);
// subjectsList.innerHTML = subjects
//   .map((subject) => `<li>${subject}</li>`)
//   .join("");



// *************************************************************************************
const countries = [
  "Uganda",
  "United States",
  "Uruguay",
  "Brazil",
  "Canada",
  "Germany",
  "Japan",
  "Mexico",
  "Spain",
  "Turkey"
];

// 2️⃣ filter() countries to those starting with "U"
const filterCountries = document.getElementById("filter");

const filterLine = countries.filter(country => country.startsWith("U"));

filterCountries.innerHTML = filterLine.map((country) => `<li>${country}</li>`).join('');
console.log(filterLine);

// const uList = document.getElementById("filter");
// const uCountries = countries.filter((country) => country.startsWith("U"));
// uList.innerHTML = uCountries.map((country) => `<li>${country}</li>`).join('');


// *************************************************************************************
const fruits = [
  { name: "apple", price: 1 },
  { name: "banana", price: 0.5 },
  { name: "orange", price: 1.2 },
  { name: "grape", price: 0.1 }
];

// 3️⃣ reduce() array of objects to total cost.

const fruitsP = fruits.reduce((total, fruit) => total + fruit.price, 0).toFixed(2);
document.querySelector(".total").innerHTML = `$${fruitsP}`;
console.log(fruitsP)

// *************************************************************************************
const students = [
  { fullName: "Alice Johnson", state: "California, USA", class: "Mathematics" },
  {
    fullName: "Benjamin Lee",
    state: "Ontario, Canada",
    class: "Computer Science"
  },
  { fullName: "Chloe Smith", state: "London, UK", class: "Physics" },
  { fullName: "David Kim", state: "Seoul, South Korea", class: "Engineering" },
  { fullName: "Elena Rodriguez", state: "Madrid, Spain", class: "Biology" },
  { fullName: "Felix Müller", state: "Berlin, Germany", class: "History" }
];
// 4️⃣ loop through the array
const stuList = document.querySelector("#studentList");
let studentList = "";
students.forEach((student) => {
  studentList += `<li>${student.fullName}</li>`;
});
stuList.innerHTML = `<ul>${studentList}</ul>`;

// const studentList = document.getElementById("studentList");
// students.forEach((student) => {
//   const li = document.createElement("li");
//   li.textContent = student.fullName;
//   studentList.appendChild(li);
// });
// *************************************************************************************
const products = [
  {
    name: "Widget A",
    partNumber: "WA-123",
    quantity: 50,
    price: 12.5
  },
  {
    name: "Gear B",
    partNumber: "GB-456",
    quantity: 100,
    price: 3.75
  },
  {
    name: "Lever C",
    partNumber: "LC-789",
    quantity: 25,
    price: 25.0
  },
  {
    name: "Bolt D",
    partNumber: "BD-012",
    quantity: 200,
    price: 0.5
  },
  {
    name: "Panel E",
    partNumber: "PE-345",
    quantity: 10,
    price: 50.0
  },
  {
    name: "Wire F",
    partNumber: "WF-678",
    quantity: 150,
    price: 1.25
  },
  {
    name: "Tube G",
    partNumber: "TG-901",
    quantity: 30,
    price: 18.0
  }
];
// 5️⃣ find first 'expensive' product
const findProduct = document.getElementById("product");

const productName = products.find((product) => product.price > 20);
findProduct.innerHTML = productName.name;

// const findProduct = document.getElementById("product");
// let productLists = "";
// const productsWithPriceOver20 = products.filter((product) => product.price > 20);
// productLists = productsWithPriceOver20.map(product => product.name).join(', ');
// findProduct.innerHTML = productLists;

// *************************************************************************************
// 6️⃣ determine if Canada is contained within the array countries (see line 18)

const findIndex = document.getElementById("output");

let canIndex = countries.indexOf("Canada");
findIndex.innerHTML = canIndex >= 0 ? canIndex : "Country not found";
