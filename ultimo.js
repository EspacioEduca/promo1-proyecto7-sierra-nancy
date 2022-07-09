let Estudios=["Prescolar-Carita Feliz","Primaria-Esdras","Primaria Segunda etapa, Secundaria y Tecnica- Fe y alegria Maria Inmaculada N-3" ];
let Experiencias=["Pasante en (CND) -Centro Nacional de Despacho"]
let Habilidades=["Creativa","trabajo en equipo","inovadora","basico de Html,Javascript,Css","basico de paquetes Office","Mantenimiento a las pc","Instalacion de S.O"]



$(".F").mouseenter(function (){
    for( let estu of Estudios){
        $(".H").append(`<li> ${estu} </li>`)
    }
})
$(".F").mouseleave(function (){
    
})

for( let expe of Experiencias){
    $(".I").append(`<li> ${expe} </li>`)
}

for( let habi of Habilidades){
    $(".J").append(`<li> ${habi} </li>`)
}

$