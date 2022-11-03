$(documente).ready(function() {
$("a").click(function(evento){
    alert("Has pulsado el enlace.Ahora iras a la pagina de la USAT");
});
});

$("#cb1").click(function () {
    $("#cont1").toggle(1500);
}, function() {
    $("#cont1").toggle(1500);
});