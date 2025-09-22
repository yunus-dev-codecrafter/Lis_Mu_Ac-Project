function showDateTime() {
  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const datePart = now.toLocaleDateString(undefined, options);
  const timePart = now.toLocaleString(); // shows date + time
  document.getElementById("dateTime").innerText = `${datePart} - ${timePart}`;
}

// run once on load
showDateTime();

// update every second (optional)
setInterval(showDateTime, 1000);
