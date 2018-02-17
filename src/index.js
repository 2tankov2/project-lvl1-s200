import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const salute = (rect) => {
  console.log(`Welcome to the Brain Games! \n${rect}\n`);
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

export default salute;

export const random = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

export const calculator = (str, a, b) => {
  let result;
  switch (str) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return 'Error!';
  } return result;
};

export const strOperation = (str) => {
  const i = random(0, 2);
  return str[i];
};


const yourAns = () => readlineSync.question('Your answer: ');

export const func = (game, rules) => {
  const user = salute(game);
  const inc = 3;
  for (let i = 0; i < inc; i += 1) {
    const rule = rules();
    console.log(`${car(rule)}`);
    const answer = yourAns();
    if (answer !== String(cdr(rule))) {
      return console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${cdr(rule)}". \nLet's try again, ${user}!\n`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${user}!\n`);
};
