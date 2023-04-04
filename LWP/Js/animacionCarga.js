window.addEventListener("load", function () {
  document.body.style.opacity = "1";
});

window.onload = function () {
  const loader = document.querySelector('.loader');
  const content = document.querySelector('.content');

  setTimeout(() => {
    loader.classList.add('hide');
    content.classList.remove('hide');
  }, 2000);
}

function validarcontraseña() {
  var contraseña = document.getElementById("contraseña").value;

  if (contraseña == "") {
    alert("Por favor, complete el campo del formulario");
    return false;
  }

  return true;
}

function validarLogin() {
  var correo = document.getElementById("correo").value;
  var contra = document.getElementById("contra").value;


  if (contra == ""|| correo =="") {
    alert("Por favor, complete los campos del formulario");
    return false;
  }

  return true;
}


function validarSignUp() {
  var username = document.getElementById("username").value;
  var Gmail = document.getElementById("Gmail").value;
  var mes = document.getElementById("mes").value;
  var dia = document.getElementById("dia").value;
  var ahno = document.getElementById("ahno").value;


  if (username == "" || Gmail =="" || mes =="" || dia =="" || ahno =="") {
    alert("Por favor, complete los campos del formulario");
    return false;
  }

  return true;
}