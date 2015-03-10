/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {


    $('#ObrasOt').click(function() {
        $('#cambiando').load('Obras.html');
        //$('#Contenido').css("height", "1500px");
        //$('#noticia').css("margin-top", "-390px;");
    });

    $('#Monalisa').click(function() {
        $('#FondoDObra').show();
        $('#DetObra').show();
    });
    $('#Mona').click(function() {
         $('#FondoDObra').show();
        $('#DetObra').show(); 
    });
    $('#Obra1').click(function() {
        $('#FondoDObra').show();
        $('#DetObra1').show();
    });

    $('#FondoDObra').click(function() {
        $('#FondoDObra').hide();
        $('#DetObra').hide();
        $('#DetObra1').hide();

    });
    $('#InicioMenu').click(function() {
        $('#cambiando').load('HomeInicio.html');
    });
});