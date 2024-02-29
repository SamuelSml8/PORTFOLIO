const copyBtn = document.querySelector("#copy-btn")

function copiarAlPortapapeles(copyBtn) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(copyBtn).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
  }

