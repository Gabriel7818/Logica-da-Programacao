var min= document.getElementById("minimo").value;
var max= document.getElementById("maximo").value;
function teste(){
    var min= Math.ceil(document.getElementById("minimo").value);
    var max= Math.floor(document.getElementById("maximo").value);
    var valor= Math.floor(Math.random() * (max - min + 1) + min);
    alert(valor);
    // alert(Math.random());
    // alert(Math.ceil(5.4));
    // alert(Math.floor(5.4));
}

// function juros(){
//     var principal= 1000.00;
//     var taxa= 0.08;
//     var meses= 2;  
//     var juros = principal * taxa * meses;
         
//         document.write("O total de juros a ser pago é: " 
//           + juros);

//     }





    