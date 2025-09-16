const students = {
  "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
  "auabdullahi67@gmail.com": "Students/Abubakar.html",
  "usarmkk@yahoo.com": "Students/Usman.html",
  "gimba.saleh84@gmail.com": "Students/Gimba.html",
  "dumstsamiya@gmail.com": "Students/Fatima.html",
  "aminamuhammad3013@gmail.com": "Students/Amina.html",
  "bashirtoffa30@gmail.com": "Students/Bashir.html",
  "layyatusalisu4949@gmail.com": "Students/Layytu.html",
  "khaadijaabdullah@gmail.com": "Students/Khadija.html",
  "fadilakashim01@gmail.com": "Students/Fadila.hmtl",
  "nifu2005@gmail.com": "Students/Hanifa.html",
  "faizaismailzoaka@gmail.com": "Students/Faiza.html",
};

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const students = {
    "yunusabdulhameed1@gmail.com": "Students/Yunus.html",
    "auabdullahi67@gmail.com": "Students/Abubakar.html",
    "usarmkk@yahoo.com": "Students/Usman.html",
    "gimba.saleh84@gmail.com": "Students/Gimba.html",
    "dumstsamiya@gmail.com": "Students/Fatima.html",
    "aminamuhammad3013@gmail.com": "Students/Amina.html",
    "bashirtoffa30@gmail.com": "Students/Bashir.html",
    "layyatusalisu4949@gmail.com": "Students/Layytu.html",
    "khaadijaabdullah@gmail.com": "Students/Khadija.html",
    "fadilakashim01@gmail.com": "Students/Fadila.hmtl",
    "nifu2005@gmail.com": "Students/Hanifa.html",
    "faizaismailzoaka@gmail.com": "Students/Faiza.html",
  };

  if (students[email]) {
    window.location.href = students[email];
  } else {
    document.getElementById("message").textContent = "Email not registered.";
  }
}
