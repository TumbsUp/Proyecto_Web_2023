function outside() {
    var outside = document.getElementById("outside").value.toLowerCase();
    if (outside !== "exterior") {
        document.getElementById('outside').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function come() {
    var come = document.getElementById("come").value.toLowerCase();
    if (come !== "venir") {
        document.getElementById('come').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function inside() {
    var inside = document.getElementById("inside").value.toLowerCase();
    if (inside !== "adentro") {
        document.getElementById('inside').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function run() {
    var run = document.getElementById("run").value.toLowerCase();
    if (run !== "correr") {
        document.getElementById('run').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function swimming() {
    var swimming = document.getElementById("swimming").value.toLowerCase();
    if (swimming !== "nadar") {
        document.getElementById('swimming').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function skating() {
    var skating = document.getElementById("skating").value.toLowerCase();
    if (skating !== "patinar") {
        document.getElementById('skating').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function exercise() {
    var exercise = document.getElementById("exercise").value.toLowerCase();
    if (exercise !== "ejercicio") {
        document.getElementById('exercise').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function strech() {
    var outside = document.getElementById("strech").value.toLowerCase();
    if (strech !== "Estirar") {
        document.getElementById('strech').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}

function jump() {
    var jump = document.getElementById("jump").value.toLowerCase();
    if (jump !== "saltar") {
        document.getElementById('jump').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
document.getElementById("eliminarDatosSegundo").addEventListener("click", function () {
    document.getElementById("outside").value = "";
    document.getElementById("come").value = "";
    document.getElementById("inside").value = "";
    document.getElementById("run").value = "";
    document.getElementById("swimming").value = "";
    document.getElementById("skating").value = "";
    document.getElementById("exercise").value = "";
    document.getElementById("strech").value = "";
    document.getElementById("jump").value = "";


});

function happy() {
    var happy = document.getElementById("happy").value.toLowerCase();
    if (happy !== "happy") {
        document.getElementById('happy').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function hands() {
    var hands = document.getElementById("hands").value.toLowerCase();
    if (hands !== "hands") {
        document.getElementById('hands').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function sleepy() {
    var sleepy = document.getElementById("sleepy").value.toLowerCase();
    if (sleepy !== "sleepy") {
        document.getElementById('sleepy').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function nap() {
    var nap = document.getElementById("nap").value.toLowerCase();
    if (nap !== "nap") {
        document.getElementById('nap').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function stomp() {
    var stomp = document.getElementById("stomp").value.toLowerCase();
    if (stomp !== "stomp") {
        document.getElementById('outside').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
function scared() {
    var outside = document.getElementById("scared").value.toLowerCase();
    if (scared !== "scared") {
        document.getElementById('scared').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    return true;
}
document.getElementById("eliminarDatosSegundo1").addEventListener("click", function () {
    document.getElementById("happy").value = "";
    document.getElementById("hands").value = "";
    document.getElementById("sleepy").value = "";
    document.getElementById("nap").value = "";
    document.getElementById("stomp").value = "";
    document.getElementById("scared").value = "";


});


function carrot() {
    var carrot = document.getElementById("carrot").value.toLowerCase();
    if (carrot !== "carrot") {
        document.getElementById('carrot').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("carrot").value = "";
    return true;

}

function cabbage() {
    var cabbage = document.getElementById("cabbage").value.toLowerCase();
    if (cabbage !== "cabbage") {
        document.getElementById('cabbage').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("cabbage").value = "";
    return true;
}

function garlic() {
    var garlic = document.getElementById("garlic").value.toLowerCase();
    if (garlic !== "garlic") {
        document.getElementById('garlic').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("garlic").value = "";
    return true;
}

function spinach() {
    var spinach = document.getElementById("spinach").value.toLowerCase();
    if (spinach !== "spinach") {
        document.getElementById('spinach').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("spinach").value = "";

    return true;
}

function potato() {
    var potato = document.getElementById("potato").value.toLowerCase();
    if (potato !== "potato") {
        document.getElementById('potato').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("potato").value = "";
    return true;
}

function celery() {
    var celery = document.getElementById("celery").value.toLowerCase();
    if (celery !== "celery") {
        document.getElementById('celery').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("celery").value = "";

    return true;
}

function broccoli() {
    var broccoli = document.getElementById("broccoli").value.toLowerCase();
    if (broccoli !== "broccoli") {
        document.getElementById('broccoli').focus();
        alert("Sorry, try again")
        return false;
    } alert("Good job")
    document.getElementById("broccoli").value = "";
    return true;
}

function first() {
    var first = document.getElementById("first").value.trim().toLowerCase();

    if (first !== "the scarescrow was made of straw") {
        document.getElementById('first').focus();
        alert("Try again")
        return false;
    } alert("Good job")
    document.getElementById("first").value = "";
    return true;
}

function second() {

    var second = document.getElementById("second").value.trim().toLowerCase();


    if (second !== "he stood in a field and looked like a man") {
        document.getElementById('second').focus();
        alert("Try again")
        return false;
    } alert("Good job")
    document.getElementById("second").value = "";
    return true;
}



function third() {

    var third = document.getElementById("third").value.trim().toLowerCase();


    if (third !== "the second crow flew to the scarecrow") {
        document.getElementById('third').focus();
        alert("Try again")
        return false;
    } alert("Good job")
    document.getElementById("third").value = "";
    return true;
}

function fourth() {

    var fourth = document.getElementById("fourth").value.trim().toLowerCase();


    if (fourth !== "he has fresh straw in all his pockets") {
        document.getElementById('fourth').focus();
        alert("Try again")
        return false;
    } alert("Good job")
    document.getElementById("fourth").value = "";
    return true;
} 