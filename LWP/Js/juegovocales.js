function validarLogin() {
    var a = document.getElementById("Vocala").value.toLowerCase();
    var e = document.getElementById("Vocale").value.toLowerCase();
    var i = document.getElementById("Vocali").value.toLowerCase();
    var o= document.getElementById("Vocalo").value.toLowerCase();
    var u = document.getElementById("Vocalu").value.toLowerCase();

    if (a!=="a"){
        document.getElementById('Vocala').focus();
        alert("Otra vez");

        return false;
    }
    if (e!=="e"){
        document.getElementById('Vocale').focus();
        alert("Otra vez");
        return false;
    }
    
    if (i!=='i'){
        document.getElementById('Vocali').focus();
        alert("Otra vez");

        return false;
    }

    if (o!=='o'){
        document.getElementById('Vocalo').focus();

        alert("Otra vez");


        return false;
    }

    if (u!=='u'){
        document.getElementById('Vocalu').focus();
        alert("Otra vez");

        return false;
    }alert("Excellent");
    return true;
}


document.getElementById("eliminarDatosBtn").addEventListener("click", function() {
  document.getElementById("Vocala").value = "";
  document.getElementById("Vocale").value = "";
  document.getElementById("Vocali").value = "";
  document.getElementById("Vocalo").value = "";
  document.getElementById("Vocalu").value = "";

});


  



  