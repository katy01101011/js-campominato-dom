// **Consegna**

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// **2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.

// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.


// COSTANTI GLOBAL
let limit;
let difficult;
let grid = document.querySelector('.grid');
let bombs = [];
const bombsQuantity = 16;

// AL 'CLICK' SI GIOCA
document.getElementById('start').addEventListener('click', gridWithSquares);

// GAME FUNCTIONS

/** PREPARAZIONE GRIGLIA PER IL GIOCO
 * Description // ADD: n 'clickable' squares in a grid
 * @returns {Object} // squares -> grid items
 */
function gridWithSquares() {
    grid.innerHTML = ''; // Ripulisco griglia

    difficult = parseInt(document.getElementById('mylevel').value);
    console.log(difficult);

    limit = Math.pow(difficult, 2);
    console.log(limit);

    // Creo l'array i numeri delle bombe
    bombArray = randomNumbers(bombs, bombsQuantity);
    console.log(bombArray);

    // Creo le caselle della griglia
    for (let i = 1; i <= limit; i++) {
        let gridItem = newGridSquare(i, difficult);

        let spanNumber = parseInt(document.querySelector('span').textContent);
        console.log(spanNumber);

        //Aggiungo il click ad ogni cella
        gridItem.addEventListener('click', function() {
            this.classList.add('active');


            let bomb;
            // Leggo i numeri dentro l'array
            for (let i = 0; i < bombArray.length; i++) {
                bomb = bombArray[i];
                console.log(bomb);
            }
        }  
    )
    grid.append(gridItem);
}
    return grid;
}

/**
 * Description // Generate n numer of squares
 * @param {Number} spanText // Number to insert into the square
 * @returns {Object} // Grid HTML item square with numer inside
 */
function newGridSquare(spanText, rowColQuantity) {

    const newSquare = document.createElement("div");
    newSquare.innerHTML = `<span>${spanText}</span>`;
    newSquare.style.width = `calc(100% / ${rowColQuantity})`;
    newSquare.style.height = `calc(100% / ${rowColQuantity})`;
    newSquare.classList.add("grid-item");

    return newSquare;
}

// UTILITY FUNCTIONS

/**
 * Description // Generate an array with n unique elements
 * @param {Array} arrayRandomNumbers // Random numbers Array
 * @param {Number} maxArrayNumber // Ceil random number
 * @returns {Array}
 */
function randomNumbers(arrayRandomNumbers, maxArrayNumber) {

    arrayRandomNumbers = [];
    while (arrayRandomNumbers.length < maxArrayNumber) {
        let aNumber = randomNumber(limit);
        if (!arrayRandomNumbers.includes(aNumber)) {
            arrayRandomNumbers.push(aNumber)
        }
    }
    
    return  arrayRandomNumbers;
}

/**
 * Description // Generate a integer random number
 * @param {Number} maxRndNumber // ceil random number
 * @returns {Number}
 */
 function randomNumber(maxRndNumber) {
    rndNumber = Math.floor(Math.random() * maxRndNumber) + 1;
    return  rndNumber;
}