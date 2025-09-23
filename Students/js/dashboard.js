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

// set session start and end time (24-hour format)
const sessionStart = "09:00"; // 4:00 PM
const sessionEnd = "10:00"; // 4:30 PM

const joinBtn = document.getElementById("joinBtn");

function checkSessionTime() {
  const now = new Date();
  const currentTime =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0");

  if (currentTime >= sessionStart && currentTime <= sessionEnd) {
    joinBtn.classList.add("active");
    joinBtn.disabled = false;
  } else {
    joinBtn.classList.remove("active");
    joinBtn.disabled = true;
  }
}

// check every 30 seconds
checkSessionTime();
setInterval(checkSessionTime, 30000);

// Example click handler
joinBtn.addEventListener("click", () => {
  if (!joinBtn.disabled) {
    alert("Joining class...");
    // redirect to meeting link here
  }
});
