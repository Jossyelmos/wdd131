let habits = [
  {
    name: "water",
    label: "Drank 8 glasses of water",
    completed: false,
    value: ""
  },
  {
    name: "exercise",
    label: "Exercised 30 minutes",
    completed: false,
    value: ""
  },
  {
    name: "sleep",
    label: "Slept 8 hours",
    completed: false,
    value: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  const resetButton = document.getElementById("resetBtn");
  const currentProgress = document.getElementById("currentProgress");
  const historyProgress = document.getElementById("historyProgress");
  const viewHistoryBtn = document.getElementById("viewHistoryBtn");

  // Only run tracker logic if all tracker elements exist
  if (submitButton && resetButton && currentProgress && historyProgress && viewHistoryBtn) {
    let habitsArray = [...habits];

    habitsArray.forEach(displayHabit);

    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      let isValid = true;

      habitsArray.forEach(habit => {
        const input = document.getElementById(habit.name);
        const value = input.value.trim();

        if (value === "" || isNaN(value)) {
          isValid = false;
          input.style.border = "2px solid red";
          habit.completed = false;
        } else {
          input.style.border = "";
          const numericValue = parseInt(value, 10);
          habit.value = numericValue;

          habit.completed =
            (habit.name === "water" && numericValue >= 8) ||
            (habit.name === "exercise" && numericValue >= 30) ||
            (habit.name === "sleep" && numericValue >= 8);
        }
      });

      if (!isValid) {
        alert("Please fill in all fields with valid numbers.");
        return;
      }

      setHabitsList(habitsArray);
      displayHabitHistory(habitsArray);
      displayCurrentProgress(habitsArray);

      habitsArray.forEach(habit => {
        const input = document.getElementById(habit.name);
        input.value = "";
      });

      document.getElementById("progressText").scrollIntoView({ behavior: 'smooth' });
    });

    resetButton.addEventListener("click", () => {
      localStorage.removeItem("habits-ls");
      habitsArray = [...habits];
      currentProgress.textContent = "";
      historyProgress.textContent = "";
    });

    viewHistoryBtn.addEventListener("click", () => {
      if (historyProgress.style.display === "none") {
        displayHabitHistory(habitsArray);
        historyProgress.style.display = "block";
        viewHistoryBtn.textContent = "Hide History";
      } else {
        historyProgress.style.display = "none";
        viewHistoryBtn.textContent = "View History";
      }
    });
  }

  // Tracker functions
  function displayHabit(habit) {
    const input = document.getElementById(habit.name);
    if (input) {
      input.value = habit.value;
    }
  }

  function displayCurrentProgress(habitsArray) {
    currentProgress.innerHTML = "";

    const total = habitsArray.length;
    const completed = habitsArray.filter(h => h.completed).length;
    const percent = Math.round((completed / total) * 100);

    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    const progressFill = document.createElement("div");
    progressFill.className = "progress-fill";
    progressFill.style.width = `${percent}%`;
    progressFill.textContent = `${percent}%`;

    progressBar.appendChild(progressFill);
    currentProgress.appendChild(progressBar);

    habitsArray.forEach(habit => {
      const li = document.createElement("li");
      li.textContent = `${habit.label}: ${habit.value} ${habit.completed ? "✅" : "❌"}`;
      currentProgress.appendChild(li);
    });
  }

  function setHabitsList(habitsArray) {
    const history = JSON.parse(localStorage.getItem("habits-history")) || [];
    const timestampedEntry = {
      date: new Date().toLocaleString(),
      habits: JSON.parse(JSON.stringify(habitsArray))
    };
    history.push(timestampedEntry);
    localStorage.setItem("habits-history", JSON.stringify(history));
  }

  function getHabitsHistory() {
    return JSON.parse(localStorage.getItem("habits-history")) || [];
  }

  function displayHabitHistory(habitsArray) {
    historyProgress.innerHTML = "";
    const history = getHabitsHistory();

    history.forEach((entry, index) => {
      const container = document.createElement("div");
      container.style.marginBottom = "20px";

      const dateLabel = document.createElement("h4");
      dateLabel.textContent = `Submission #${index + 1} - ${entry.date}`;
      container.appendChild(dateLabel);

      const total = entry.habits.length;
      const completed = entry.habits.filter(h => h.completed).length;
      const percent = Math.round((completed / total) * 100);

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";

      const progressFill = document.createElement("div");
      progressFill.className = "progress-fill";
      progressFill.style.width = `${percent}%`;
      progressFill.textContent = `${percent}%`;

      progressBar.appendChild(progressFill);
      container.appendChild(progressBar);

      entry.habits.forEach(habit => {
        const li = document.createElement("li");
        li.textContent = `${habit.label}: ${habit.value} ${habit.completed ? "✅" : "❌"}`;
        container.appendChild(li);
      });

      container.appendChild(document.createElement("hr"));
      historyProgress.appendChild(container);
    });
  }
});

function displayCurrentProgress() {
  currentProgress.innerHTML = "";

  let total = habitsArray.length;
  let completed = habitsArray.filter(h => h.completed).length;
  let percent = Math.round((completed / total) * 100);

  let progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  let progressFill = document.createElement("div");
  progressFill.className = "progress-fill";
  progressFill.style.width = `${percent}%`;
  progressFill.textContent = `${percent}%`;

  progressBar.appendChild(progressFill);
  currentProgress.appendChild(progressBar);

  habitsArray.forEach(habit => {
    let li = document.createElement("li");
    li.textContent = `${habit.label}: ${habit.value} ${habit.completed ? "✅" : "❌"}`;
    currentProgress.appendChild(li);
  });
}


function setHabitsList() {
  let history = JSON.parse(localStorage.getItem("habits-history")) || [];
  let timestampedEntry = {
    date: new Date().toLocaleString(),
    habits: JSON.parse(JSON.stringify(habitsArray))
  };
  history.push(timestampedEntry);
  localStorage.setItem("habits-history", JSON.stringify(history));
}

function getHabitsHistory() {
  return JSON.parse(localStorage.getItem("habits-history")) || [];
}

function displayHabit(habit) {
  let li = document.createElement("li");
  let label = document.createElement("label");
  label.textContent = habit.label;
  let input = document.getElementById(habit.name);
  if (!input) {
    input = document.createElement("input");
    input.type = "text";
    input.id = habit.name;
    input.value = habit.value;
    li.appendChild(label);
    li.appendChild(input);
  } else {
    input.value = habit.value;
  }
  if (habit.completed) {
    console.log("Congratulations! You have completed your daily habit target.")
  }
};

function displayHabits() {
  progressLists.innerHTML = "";
  habitsArray.forEach(habit => {
    let li = document.createElement("li");
    li.textContent = `${habit.label}: ${habit.value}`;
    progressLists.appendChild(li);
  });
};

function displayHabitHistory() {
  historyProgress.innerHTML = "";
  let history = getHabitsHistory();

  history.forEach((entry, index) => {
    let container = document.createElement("div");
    container.style.marginBottom = "20px";

    let dateLabel = document.createElement("h4");
    dateLabel.textContent = `Submission #${index + 1} - ${entry.date}`;
    container.appendChild(dateLabel);

    let total = entry.habits.length;
    let completed = entry.habits.filter(h => h.completed).length;
    let percent = Math.round((completed / total) * 100);

    let progressBar = document.createElement("div");
    progressBar.className = "progress-bar";

    let progressFill = document.createElement("div");
    progressFill.className = "progress-fill";
    progressFill.style.width = `${percent}%`;
    progressFill.textContent = `${percent}%`;

    progressBar.appendChild(progressFill);
    container.appendChild(progressBar);

    entry.habits.forEach(habit => {
      let li = document.createElement("li");
      li.textContent = `${habit.label}: ${habit.value} ${habit.completed ? "✅" : "❌"}`;
      container.appendChild(li);
    });

    const separator = document.createElement("hr");
    container.appendChild(separator);
    historyProgress.appendChild(container);
  });
};



// Navbar javascript section

  const hamButton = document.querySelector('#menu');
  const navigation = document.querySelector('.navigation');
  const title = document.querySelector('.logo');

  if (hamButton && navigation && title) {
    hamButton.addEventListener('click', () => {
      navigation.classList.toggle('open');
      hamButton.classList.toggle('open');
      title.classList.toggle('hidden');
    });
  }


// Footer javascript section

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