const valores=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
const palos = ["♠︎","♥︎","♦︎","♣︎"]

function recorrerValores(valor){
    let aleatorio= Math.floor(Math.random()*valor.length);
    let h1 = document.querySelector("h1");
    h1.textContent=valor[aleatorio];
}
function recorrerPalos(simbolo){
    let random= Math.floor(Math.random()*simbolo.length);
    let top = document.querySelector(".top");
    let bottom = document.querySelector(".bottom");
    if(simbolo[random]=="♥︎"||simbolo[random]=="♦︎"){
        top.style.color="red";
        bottom.style.color="red";
    }
    else{
        top.style.color="black";
        bottom.style.color="black";
    }
    top.textContent=simbolo[random];
    bottom.textContent=simbolo[random];
    //document.getElementById("imagen").src = simpolo[random].img;
    //document.getElementById("imagen2").src = simpolo[random].img;
    //html id que se usaba en version anterior
    //<img id="imagen" width="30%">
    //<img id="imagen2" width="30%">
}
//const palos=[{
//        titulo: "pica",
//        img: "assets/img/pica.png"
//    },
//    {
//        titulo: "trebol",
//        img: "assets/img/trebol.png"
//    },
//    {
//        titulo: "diamante",
//        img: "assets/img/diamante.png"
//    },{
//        titulo: "corazon",
//        img: "assets/img/corazon.png",
//        
//    }];
recorrerValores(valores);
recorrerPalos(palos);

