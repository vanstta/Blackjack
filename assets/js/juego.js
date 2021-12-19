// 2C = Two of Club
// 2D = Two of Diamonds
// 2H = Two of Hearts
// 2S = Two of Spades


let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K']

let puntosJugador = 0, 
    puntosComputadora =0;


// esta función crea una nueva baraja
const crearDeck = () => {

    for ( let i=2; i<=10; i++) {
        for (let tipo of tipos) {
            deck.push(i+tipo);
        }
       
    }

    for (let tipo of tipos ) {
        for ( let esp of especiales) {
           deck.push (esp + tipo);
        }
        
}   
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// esta funcion me permite tomar una carta

const pedirCarta = () => {

    if (deck.length===0) {
        throw 'No hay cartas en el deck'
    }
   const carta=deck.pop()
  
   
    
    return(carta)

}

// pedirCarta()

const valorCarta = (carta) => {
    const valor = carta.substring(0,carta.length-1);
    // if (isNaN(valor)) {
       
    //     puntos=(valor==='A') ? 11 :10;

    // }else  {
    //     console.log('Es un número')
    //     puntos=valor*1;
    // }
    // console.log(puntos)
    return (isNaN(valor)) ? 
    (valor==='A') ? 11 : 10
    : valor*1
    
}

// TURNO DE LA COMPUTADORA 

const turnoComputadora = (puntosMinimos) => {
    
    do {
    const carta = pedirCarta();
   

    puntosComputadora =puntosComputadora +valorCarta(carta);
    console.log(puntosComputadora);
    puntosHTML[1].innerText=puntosComputadora;
   

    const imgCarta= document.createElement('img');
    imgCarta.src= `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21 ) {
        break
    }
} while ( (puntosComputadora < puntosMinimos )&& (puntosMinimos<=21));


setTimeout(()=> {


if (puntosComputadora === puntosMinimos) {
    alert('Nadie gana')
} else if (puntosMinimos>21) {
    alert('Computadora gana')
}else if (puntosComputadora>21) 
{
    alert('Jugador gana')
}else {
    alert('Computadora gana')
}
}, 50)
}


// REFERENCIAS HTML

const btnPedir =document.querySelector('#btnPedir');
const puntosHTML = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

// EVENTOS

btnPedir.addEventListener('click' , () => {
    const carta = pedirCarta();
   

    puntosJugador =puntosJugador +valorCarta(carta);
    console.log(puntosJugador);
    puntosHTML[0].innerText=puntosJugador;
   

    const imgCarta= document.createElement('img');
    imgCarta.src= `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta')
    divCartasJugador.append(imgCarta);

    if (puntosJugador> 21) {
        btnPedir.disabled = true;
        btnDetener.disabled=true
        turnoComputadora(puntosJugador)


    } else if (puntosJugador===21 ) {
        
         btnPedir.disabled = true;
         btnDetener.disabled=true;
        
    }
});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled=true;
    btnDetener.disabled=true;
    turnoComputadora(puntosJugador);
    
})

btnNuevo.addEventListener('click', () => {
    console.clear();

    btnPedir.disabled=false;
    btnDetener.disabled=false;

    deck=[];
    deck=crearDeck();

    puntosJugador= 0;
    puntosComputadora=0;

    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;

    divCartasComputadora.innerHTML= '';
    divCartasJugador.innerHTML= '';


});