function showDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString(); // shows date + time
  document.getElementById("dateTime").innerText = formatted;
}

// run once on load
showDateTime();
