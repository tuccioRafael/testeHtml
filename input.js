
$('.input').click(() => {
    //alert('oi')
    $('#label').removeClass("label-solto")
    $('#label').addClass("label-apertado")
    
    
})

$('.input').blur(() => {
    alert('ola')
    $('#label').removeClass("label-solto")
    $('#label').addClass("label-apertado")
})
