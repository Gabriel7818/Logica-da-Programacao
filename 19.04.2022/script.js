var valores = [1, 2, 3, 4, 5];

var potencia = valores.map(function (item){
    return Math.pow(item, 3);
});

document.write(potencia);
