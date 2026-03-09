const valores=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function recorrerValores(valor){
    let aleatorio= Math.floor(Math.random()*valor.length);
    let h1 = document.querySelector("h1");
    h1.textContent=valor[aleatorio];
}
function recorrerPalos(simpolo){
    let random= Math.floor(Math.random()*simpolo.length);
    document.getElementById("imagen").src = simpolo[random].img;
    document.getElementById("imagen2").src = simpolo[random].img;
}

const palos=[{
        titulo: "pica",
        img: "assets/img/pica.png"
    },
    {
        titulo: "trebol",
        img: "assets/img/trebol.png"
    },
    {
        titulo: "diamante",
        img: "assets/img/diamante.png"
    },{
        titulo: "corazon",
        img: "assets/img/corazon.png",
        
    }];

recorrerValores(valores);
recorrerPalos(palos);

