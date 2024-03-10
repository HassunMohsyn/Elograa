let 
    x = document.querySelector(".container .page .x");
    y = document.querySelector(".container .page .y");
    z = document.querySelector(".container .page .z");
    // salle = document.querySelector(".container .page .salle");
    button = document.querySelector(".container .page button");

button.onclick = function () {

    console.log(x.value);
    console.log(y.value);
    console.log(z.value);
    // console.log('------------------------------------------');
    // console.log(salle.innerText);
    // console.log('------------------------------------------');
    console.log(x.value * y.value);
    console.log(z.value - (x.value * y.value));
    
    let sale = document.createTextNode(` :${x.value * y.value}`);

    document.querySelector(".salle").appendChild(sale);
    let elbaqy = document.createTextNode(` :${z.value - (x.value * y.value)}`);

    document.querySelector(".elbaqe").appendChild(elbaqy);
}
