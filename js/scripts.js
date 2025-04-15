//traer variables css
const rootStyles = document.documentElement.style;
// form
const formElement = document.getElementById('user-solution');
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

//FUNCIONES

const validateWord = event => {
  event.preventDefault();
};

const getRandomWord = ALL_WORDS => {
  const randomIndex = Math.floor(Math.random() * ALL_WORDS.length);
  return ALL_WORDS[randomIndex];
};
console.log(getRandomWord());

//EVENTOS
formElement.addEventListener('submit', validateWord);
