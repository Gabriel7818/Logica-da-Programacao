class Palavras{

    [0] = "desoxirribonucleico";
    [1] = "ovo";
    [2] = "hipotenusa";
    [3] = "virabrequim";
    [4] = "teguinha";
    [5] = "malte";
    [6] = "carregador";
    [7] = "girafa";
    [8] = "gaivota";
    [9] = "guitarra";

    sorteio(){
        return Math.floor(Math.random() * 10);
    }
    
    escolhida(){
        return(this[this.sorteio()]);
    }   
}