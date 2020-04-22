/*get number btw 1-6 from player*/
var giocatore1 = parseInt(prompt('scegli un numero da 1 a 6'));
console.log('output g1', giocatore1);

/*get random number btw 1-6 to play against*/
var giocatore2 = Math.floor(Math.random() * 6) + 1;
console.log('output pc', giocatore2);

/*check player number*/
if (isNaN(giocatore1) == true || giocatore1 < 0 || giocatore1 > 6) {
  console.log('Attenzione: il valore inserito non è valido');
} else {
  /*determine winner*/
  if (giocatore1 > giocatore2) {
    console.log('giocatore 1 vince');
  } else if (giocatore1 == giocatore2) {
    console.log('parità');
  } else {
    console.log('giocatore 2 vince');
  }
}
