/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

const inputUser = document.getElementById('name');

const inputKm = document.getElementById('km');

const selectEta = document.getElementById('fasciaEta')

const btnGenera = document.getElementById('genera');
const btnAnnulla = document.getElementById('annulla');



btnGenera.addEventListener('click', function(){

  let validForm = true;

  const nameUser = inputUser.value;
  const km = parseInt(inputKm.value);
  const fasciaEta = selectEta.value;
  const prezzoKm = 0.21;
  const carrozza = Math.ceil(Math.random() * 5);
  const codice = Math.floor(Math.random() * (99000 - 10000 + 1) ) + 10000;

  let offerta = 'Prezzo Standard',
      sconto = 0,
      prezzo;

  if(fasciaEta === 'minorenne'){
    sconto = 20;
    offerta = 'Sconto Under';
  }else if(fasciaEta === 'senior'){
    sconto = 40;
    offerta = 'Sconto Over';
  }

  prezzo = (km * prezzoKm) * (1 - sconto/100)

  if(nameUser.length < 3)  validForm = false; 
  if(isNaN(km))  validForm = false; 
  if(fasciaEta === '') validForm = false;
  if(nameUser.lenght < 3 || isNaN(km) || fasciaEta === '') validForm = false;


  const outputName =      document.getElementById('outputName');
  const outputOfferta =   document.getElementById('outputOfferta');
  const outputCarrozza =  document.getElementById('outputCarrozza');
  const outputCodice =    document.getElementById('outputCodice');
  const outputPrezzo =    document.getElementById('outputPrezzo');

  if(validForm){
    outputName.innerHTML =      nameUser;
    outputOfferta.innerHTML =   offerta;
    outputCarrozza.innerHTML =  carrozza;
    outputCodice.innerHTML =    codice;
    outputPrezzo.innerHTML = `
      &euro; ${prezzo.toFixed(2)}
    `;
  
    document.querySelector('.ticket-area').classList.remove('hide');
  }else{
    alert('Compila tutti i campi')
  }


});

btnAnnulla.addEventListener('click', function(){
  inputUser.value = ''
  inputKm.value = ''
  selectEta.value = ''
  document.querySelector('.ticket-area').classList.add('hide');
})