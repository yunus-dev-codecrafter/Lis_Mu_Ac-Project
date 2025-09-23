let openBtn = document.querySelector(".bi-list");
let closeBtn = document.querySelector(".bi-x-lg");
let displayMenu = document.querySelector(".logout");

openBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  displayMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  openBtn.classList.toggle("hide");
  closeBtn.classList.toggle("hide");
  displayMenu.classList.toggle("hidden");
});

const joinBtn = document.getElementById("joinBtn");

// define allowed sessions: day (0=Sunday, 1=Monday,...,6=Saturday), start, end
const sessions = [
  { day: 6, start: "16:30", end: "17:00" },
  { day: 0, start: "19:00", end: "18:00" },
];

function checkSessionTime() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentTime =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  let active = false;

  // loop through sessions and check if one matches current time
  for (const session of sessions) {
    if (
      currentDay === session.day &&
      currentTime >= session.start &&
      currentTime <= session.end
    ) {
      active = true;
      break;
    }
  }

  if (active) {
    joinBtn.classList.add("active");
    joinBtn.disabled = false;
    joinBtn.textContent = "Join Class";
  } else {
    joinBtn.classList.remove("active");
    joinBtn.disabled = true;
    joinBtn.textContent = "Not Available";
  }
}

// check immediately and then every 30 seconds
checkSessionTime();
setInterval(checkSessionTime, 30000);

joinBtn.addEventListener("click", () => {
  if (!joinBtn.disabled) {
    window.location.href = "https://meet.google.com/kzi-arnj-ohw";
  }
});

function showDateTime() {
  const now = new Date();

  // Long weekday + date
  const datePart = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Time only with seconds + AM/PM
  const timePart = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  document.getElementById("dateTime").innerText = `${datePart} - ${timePart}`;
}

// Run once when page loads
showDateTime();

// Keep updating every second
setInterval(showDateTime, 1000);

//Udate Number of Pages
let completed = 12;
let total = 604;

// Calculate percentage
let percentage = Math.round((completed / total) * 100);

// Update circle fill
let circle = document.getElementById("circle");
circle.style.background = `conic-gradient(#4caf50 ${percentage}%, #ddd ${percentage}% 100%)`;

// Update percentage text
document.getElementById("percent").innerText = percentage + "%";

// Update completed number
document.getElementById("completed").innerText = completed;
