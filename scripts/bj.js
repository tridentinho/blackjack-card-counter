class Mao {
    constructor() {
        this.pontos = 0;
        this.cartas = Array();
    }

    pedirCarta(id, baralho) {
        //add carta a mao
        this.cartas.push(id);
        //rm carta do baralho
        setBaralho(removerCarta(id, baralho.cartas));

        var adicionar;
        adicionar = rmLetras(id);
        adicionar = parseInt(adicionar);
        if (adicionar >= 10) {
            adicionar = 10;
        }
        if (this.pontos <= 10 && adicionar == 1) {
            adicionar = 11;
        } else if (this.pontos > 10 && adicionar == 1) {
            adicionar = 1;
        }
        //add pontos mao
        this.pontos += addPontos(id);
        if (this.pontos == 21) {
            console.log('Voce ganhou');
        } else if (this.pontos > 21) {
            console.log('Voce casa perdeu');
        }
        return baralho;
    }
}

class Cassino {
    constructor() {
        this.pontos = 0;
        this.dealer = Array();
    }


    dealerPega(id, baralho) {
        //console.log(this.dealer);
        this.dealer.push(id);
        //console.log(this.dealer);
        baralho.setBaralho(removerCarta(id, baralho.cartas));

        this.pontos += addPontos(id);
        if (this.pontos == 21) {
            console.log('A casa ganhou');
        } else if (this.pontos > 21) {
            console.log('A casa perdeu');
        }
        return baralho;
    }
}

class Baralho {
    constructor() {
        this.cartas = criarCartas();
    }
    getBaralho() {
        return this.baralho;
    }
    setBaralho(baralho) {
        this.baralho = baralho;
    }
}

var baralho = new Baralho;
var minhaMao = Array();
var casa = new Cassino;

function verMao(id){

}

/*
1 - E 
2 - P 
3 - O
4 - C
*/
function criarCartas() {
    var cartas = new Array();
    for (i = 1; i <= 4; i++) {
        for (j = 1; j <= 13; j++) {
            if (i == 1) {
                cartas.push('e' + j);
            }
            if (i == 2) {
                cartas.push('p' + j);
            }
            if (i == 3) {
                cartas.push('o' + j);
            }
            if (i == 4) {
                cartas.push('c' + j);
            }
        }
    }
    return cartas;
}

function removerCarta(id, baralho) {
    baralho.splice(baralho.indexOf(id), 1);
    return baralho;
}

function rmLetras(str) {
    //alert(str.replace(/[^\d]+/g, ''));
    return str.replace(/[^\d]+/g, '');
}

function addPontos(id) {
    var adicionar;
    adicionar = rmLetras(id);
    adicionar = parseInt(adicionar);
    if (adicionar >= 10) {
        adicionar = 10;
    }
    if (this.pontos <= 10 && adicionar == 1) {
        adicionar = 11;
    } else if (this.pontos > 10 && adicionar == 1) {
        adicionar = 1;
    }
    //add pontos mao
    return adicionar;

}

function addCartaDealer() {
    var id = document.getElementById('dealer').value;
    baralho.setBaralho(casa.dealerPega(id, baralho));
    //console.log(id);
}