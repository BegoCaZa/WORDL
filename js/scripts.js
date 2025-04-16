//traer variables css
const rootStyles = document.documentElement.style;

//DOM
const gameboardElement = document.getElementById('gameboard');
const gameContainerElement = document.getElementById('game-container');

// form
const formElement = document.getElementById('form');

//input
const userWordInputElement = document.getElementById('user-solution');

//obejto palabras
const ALL_WORDS = [
  // 'zara',
  // 'pelo',
  'humo'
  // 'chasqueador',
  // 'zombie',
  // 'atropello',
  // 'ticket',
  // 'infectado',
  // 'hambre',
  // 'accidente',
  // 'vitrina',
  // 'apocalipsis',
  // 'supervivencia',
  // 'sangre',
  // 'hongo',
  // 'cordyceps'
];

let numberOfAttempts = 0;
let randomWord = '';

//FUNCIONES

const validateWord = event => {
  event.preventDefault();
  console.log(randomWord);
  const userWord = userWordInputElement.value; //guardar por letra
  console.log(userWord);

  let existingWarning = document.querySelector('.alert'); //busco si ya existe un p de warning
  if (existingWarning) {
    existingWarning.remove(); //lo elimino si existe
    return;
  }

  //numero de intentos
  numberOfAttempts++;
  if (numberOfAttempts >= 5) {
    const alert = document.createElement('span');
    alert.classList.add('alert');
    alert.textContent = 'Has perdido';
    gameboardElement.append(alert);
    formElement.remove();
  }

  if (userWord === randomWord) {
    const winMessage = document.createElement('span');
    winMessage.classList.add('winner');
    winMessage.textContent = 'FELICIDADES! LO HAS LOGRADO';
    gameContainerElement.append(winMessage);
    formElement.remove();
  }

  if (
    userWord.length > randomWord.length ||
    userWord.length < randomWord.length
  ) {
    numberOfAttempts--;
    const alert = document.createElement('span');
    alert.classList.add('alert');
    alert.textContent = `Introduce una palabra con ${randomWord.length} letras`;
    gameContainerElement.append(alert);
    return;
  }

  //primero ubico la fila
  const row = gameboardElement.children[numberOfAttempts - 1]; //esta es la fila y que empiece en 0
  const letterBox = row.children; //esto son los espacios de la fila


  userWord.split('').forEach((letter, index) => {
    // //el index lo detecta en automatico al ser un forEach

    if (letter === randomWord[index]) {
      console.log('la letra es la misma');
      letterBox[index].append(letter); //agrega la letra al espacio
      letterBox[index].classList.add(
        'letter-container',
        'letter-container-correct'
      ); //agrega la clase al espacio
    };
  });

  userWord.split('').forEach((letter,index) => {

    let randomWordArray=randomWord.split(''); //checar letra por letra
    console.log(randomWordArray);
    if (randomWord.includes(letter) && letter !== randomWordArray[index]) {
      console.log('existe pero en otra posicion');
      letterBox[index].append(letter); //agrega la letra al espacio
      letterBox[index].classList.add(
        'letter-container',
        'letter-container-rightLetter'
      );
     } 
    // else {
    //   console.log('las letras no coiciden');
    //   letterBox[index].append(letter); //agrega la letra al espacio
    //   letterBox[index].classList.add(
    //     'letter-container',
    //     'letter-container-wrong'
    //   );
    // }
  });

  // userWordInputElement.value = ''; //limpia el input
  event.target.reset();
};

const createGameboard = () => {
  randomWord = getRandomWord();
  console.log(randomWord);
  const letters = randomWord.split('');

  for (let i = 0; i < 5; i++) {
    const fragment = document.createDocumentFragment();

    letters.forEach(letter => {
      const letterElement = document.createElement('span');
      // letterElement.textContent = letter;
      letterElement.classList.add('letter-container');
      fragment.append(letterElement);
    });

    const rowContainerElement = document.createElement('div');
    rowContainerElement.classList.add('gameboard-row');
    rowContainerElement.append(fragment);

    gameboardElement.append(rowContainerElement);
    gameboardElement.classList.add('gameboard');
  }
};

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * ALL_WORDS.length);
  const randomWord = ALL_WORDS[randomIndex];
  return randomWord;
};

createGameboard();

//EVENTOS
formElement.addEventListener('submit', validateWord);
