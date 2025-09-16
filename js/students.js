const students = {
  "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
};

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const students = {
    "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
  };

  if (students[email]) {
    window.location.href = students[email];
  } else {
    document.getElementById("message").textContent = "Email not registered.";
  }
}
