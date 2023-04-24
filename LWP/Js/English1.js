function validarLogin() {
    var Monday = document.getElementById("lunes").value.toLowerCase();
    var Martes = document.getElementById("Martes").value.toLowerCase();
    var Miercoles = document.getElementById("Miercoles").value.toLowerCase();
    var Jueves = document.getElementById("Jueves").value.toLowerCase();
    var Viernes = document.getElementById("Viernes").value.toLowerCase();
    var Sabado = document.getElementById("Sabado").value.toLowerCase();
    var Domingo = document.getElementById("Domingo").value.toLowerCase();

    if (Monday!=="monday"){
        document.getElementById('lunes').focus();
        alert("Try again");

        return false;
    }
    if (Martes!=="tuesday"){
        document.getElementById('Martes').focus();
        alert("Try again");
        return false;
    }
    
    if (Miercoles!=='wednesday'){
        document.getElementById('Miercoles').focus();
        alert("Try again");

        return false;
    }

    if (Jueves!=='thursday'){
        document.getElementById('Jueves').focus();

        alert("Try again");


        return false;
    }

    if (Viernes!=='friday'){
        document.getElementById('Viernes').focus();
        alert("Try again");

        return false;
    }

    if (Sabado!=='saturday'){
        document.getElementById('Sabado').focus();

        alert("Try again");

        return false;
    }

    if (Domingo!=='sunday'){
        document.getElementById('Domingo').focus();
        alert("Try again");
        return false; 
        
    }alert("Excellent");
    return true;
}

function secondVideo() {

    var form1 = document.getElementById("this1").value;
    var form2 = document.getElementById("this2").value;
    var form3 = document.getElementById("this3").value.toLowerCase();
    var form4 = document.getElementById("this4").value.toLowerCase();
    var form5 = document.getElementById("this5").value.toLowerCase();
    var form6 = document.getElementById("this6").value.toLowerCase();
    var form7 = document.getElementById("this7").value.toLowerCase();
    var form8 = document.getElementById("this8").value.toLowerCase();
    var form9 = document.getElementById("this9").value.toLowerCase();
 

    if (form1!=07){
        document.getElementById('this1').focus();
        alert("Try again");
        return false;
    
    }
     if (form2!=04){
        document.getElementById('this2').focus();
        alert("Try again");
        return false;
    
     }
    if (form3!=02){
        document.getElementById('this3').focus();
        alert("Try again");

        return false;
    
    }

    if (form4!=9){
        document.getElementById('this4').focus();

        alert("Try again");


        return false;
    }

    if (form5!=06){
        document.getElementById('this5').focus();
        alert("Try again");

        return false;
    }

    if (form6!=01){
        document.getElementById('this6').focus();

        alert("Try again");

        return false;
    }
    if (form7!=08){
        document.getElementById('this7').focus();

        alert("Try again");

        return false;
    }
    if (form8!=05){
        document.getElementById('this8').focus();

        alert("Try again");

        return false;
    }
        if (form9!=03){
            document.getElementById('this9').focus();
    
            alert("Try again");
    
            return false;
        
    }alert("Excellent, good try!");
    return true;
}


document.getElementById("eliminarDatosBtn").addEventListener("click", function() {
  document.getElementById("lunes").value = "";
  document.getElementById("Martes").value = "";
  document.getElementById("Miercoles").value = "";
  document.getElementById("Jueves").value = "";
  document.getElementById("Viernes").value = "";
  document.getElementById("Sabado").value = "";
  document.getElementById("Domingo").value = "";

});

document.getElementById("eliminarDatosSegundo").addEventListener("click", function() {
    document.getElementById("this1").value = "";
    document.getElementById("this2").value = "";
    document.getElementById("this3").value = "";
    document.getElementById("this4").value = "";
    document.getElementById("this5").value = "";
    document.getElementById("this6").value = "";
    document.getElementById("this7").value = "";
    document.getElementById("this8").value = "";
    document.getElementById("this9").value = "";

  
  });
  



  