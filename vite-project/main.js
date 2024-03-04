// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const copyButton = document.getElementById("copy-btn");
  const emailAddress = document.querySelector(".home-email");

  copyButton.addEventListener("click", function () {
    const textToCopy = emailAddress.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        copyButton.innerHTML =
          '<box-icon name="check-circle" color="green"></box-icon>';
        setTimeout(() => {
          copyButton.innerHTML = '<box-icon name="copy"></box-icon>';
        }, 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  });
});

const formContact = document.querySelector("#form-contact");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const textAreaInput = document.querySelector("#textarea");

formContact.addEventListener("submit", () => {
  fieldsValidation();
});

function fieldsValidation() {
  if (nameInput.value == "" && emailInput.value == "" && textAreaInput.value == "") {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "The fields are required",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message was sent",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
