import readlineSync from 'readline-sync';

const userName = (quest) => {
  console.log(`Welcome to the Brain Games! \n${quest}\n`);
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};
export default userName;

const rand = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const even = () => {
  const name = userName('Answer yes if number even otherwise answer "no".');
  for (let i = 1; i < 4; i += 1) {
    const getRand = rand(1, 100);
    const quest = readlineSync.question(`Question: ${getRand} \nYour answer: `);
    if (getRand % 2 !== 0 && quest !== 'no') {
      return console.log(`${quest} is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!\n`);
    } if (getRand % 2 === 0 && quest !== 'yes') {
      return console.log(`${quest} is wrong answer ;(. Correct answer was "yes". \nLet's try again, ${name}!\n`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${name}!\n`);
};
