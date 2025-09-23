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
  { day: 6, start: "16:30", end: "17:00" }, // Saturday 4:30–5:00 PM
  { day: 1, start: "17:30", end: "18:00" }, // Monday 5:30–6:00 PM
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
