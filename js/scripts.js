//traer variables css
const rootStyles = document.documentElement.style;

//DOM
const gameboardElement = document.getElementById('gameboard');

// form
const formElement = document.getElementById('form');

//input
const userWordInputElement = document.getElementById('user-solution');

//obejto palabras
const ALL_WORDS = [
  'zara',
  'pelo',
  'humo',
  'chasqueador',
  'zombie',
  'atropello',
  'ticket',
  'infectado',
  'hambre',
  'accidente',
  'vitrina',
  'apocalipsis',
  'supervivencia',
  'sangre',
  'hongo',
  'cordyceps'
];

let numberOfAttempts = 0;

//FUNCIONES

const validateWord = event => {
  event.preventDefault();

  //numero de intentos
  // numberOfAttempts++;
  // if(numberOfAttempts>5){
  //   const alert=document.createElement('span');
  //   alert.classList.add('alert');
  //   alert.textContent='Has perdido';
  //   gameboardElement.append(alert);
  // }
  const userWord = userWordInputElement.value.split(''); //guardar por letra
  console.log(userWord);

  const fragment = document.createDocumentFragment();

  userWord.forEach(letter => {
    const userletterElement = document.createElement('span'); 
    userletterElement.textContent = letter; //hago la letra
    userletterElement.classList.add('letter-container'); //le doy estilo
    fragment.append(userletterElement);
  });
  rowContainerElement=createGameboard(); //llamo a la funcion que crea el gameboard
  rowContainerElement.append(fragment);
  gameboardElement.append(rowContainerElement); //agrego la fila al gameboard
  gameboardElement.classList.add('gameboard');
  };




const createGameboard = () => {
  const word = getRandomWord();
  console.log(word);
  const letters = word.split('');
  
  for (let i = 0; i < 5; i++) {
    
  const fragment = document.createDocumentFragment();

  letters.forEach(letter => {
    const letterElement = document.createElement('span');
    // letterElement.textContent = letter;
    letterElement.classList.add('letter-container');
    fragment.append(letterElement);
  });

  const rowContainerElement= document.createElement('div');
  rowContainerElement.classList.add('gameboard-row');
  rowContainerElement.append(fragment);

  gameboardElement.append(rowContainerElement);
  gameboardElement.classList.add('gameboard');
  }
  return rowContainerElement;
}

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * ALL_WORDS.length);
  const randomWord = ALL_WORDS[randomIndex];
  return randomWord;
};

createGameboard();

//EVENTOS
formElement.addEventListener('submit', validateWord);

