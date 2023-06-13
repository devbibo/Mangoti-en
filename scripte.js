window.onload = function() {
  var nameForm = document.getElementById("name-form");
  var nameInput = document.getElementById("name-input");
  var error = document.getElementById("error");

  nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = nameInput.value.trim();
    if (name) {
      if (name.toLowerCase().includes("nigga") || name.toLowerCase().includes("nigger") || name.toLowerCase().includes("hitler") || name.toLowerCase().includes("hetler")) {
        error.innerHTML = "ايه الاسم ده بذمتك ماتسلك";
      } else {
        localStorage.setItem("name", name); // store name in localStorage
        window.location.href = "MangotiGame/index.html"; // redirect to mangoti
      }
    }
  });

  nameInput.addEventListener("input", function() {
    var name = nameInput.value.toLowerCase();
    if (name.includes("nigga") || name.includes("nigger") || name.includes("hitler") || name.includes("hetler")) {
      error.innerHTML = "ايه الاسم ده بذمتك ماتسلك";
      nameInput.classList.add("invalid");
    } else {
      error.innerHTML = "";
      nameInput.classList.remove("invalid");
    }
  });
}