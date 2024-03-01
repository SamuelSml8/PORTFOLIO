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
