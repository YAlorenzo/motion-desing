const submitButton = document.querySelector("#btn-submit");
const submitButtonText = document.querySelector("#btn-submit .button--text");
const inputName = document.querySelector("#login-username");
const inputPass = document.querySelector("#login-pwd");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  submitButton.classList.add("loading");

  setTimeout(() => {
    submitButton.classList.remove("loading");

    if (inputName.value === "" || inputPass.value === "") {
      if (inputName.value === "") {
        inputName.classList.add("noname");
      } else {
        inputName.classList.remove("noname");
      }

      if (inputPass.value === "") {
        inputPass.classList.add("nopass");
      } else {
        inputPass.classList.remove("nopass");
      }

      submitButton.classList.add("fail");
      submitButtonText.innerHTML = "Loading fail";
    } else {
      submitButton.classList.add("success");
      submitButtonText.innerHTML = "Loading successful";
    }
  }, 4000);
});
