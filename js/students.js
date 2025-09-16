const students = {
  "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
};

function login(event) {
  event.preventDefault(); // prevent page reload

  const email = document.getElementById("email").value.trim();
  const students = {
    "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
  };

  if (students[email]) {
    // Redirect to their dashboard
    window.location.href = students[email];
  } else {
    // Show error
    document.getElementById("message").textContent = "Email not registered.";
  }
}
