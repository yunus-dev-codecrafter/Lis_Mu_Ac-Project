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

// Example: Ahmed has completed 25 surahs
let completed = 0;
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
