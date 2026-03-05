const valores=["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function recorrerValores(valores){
    let h1 = document.querySelector("h1");
    if (h1.textContent===""){
        h1 = valores[Math.floor(Math.random()* valores.length)];
    }
}
