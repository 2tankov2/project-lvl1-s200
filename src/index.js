import readlineSync from 'readline-sync';
import { car, cdr, cons } from 'hexlet-pairs';

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

export const nod = (n, m) => {
  if (m === 0) {
    return n;
  } return nod(m, n % m);
};

const sum = (a) => {
  const strNum = String(a);
  let result = 0;
  for (let i = 0; i < strNum.length; i += 1) {
    result += Number(strNum[i]);
  } return result;
};

export const balance = (num) => {
  const strN = String(num);
  const iter = (count, acc, res) => {
    if (acc === 0) {
      return res;
    } return iter(count - Math.floor(count / acc), acc - 1, res + String(Math.floor(count / acc)));
  }; return iter(sum(num), strN.length, '');
};

export const pro = (step, k) => {
  const iter = (count, acc, result, skip) => {
    if (acc === 0) {
      return cons(skip, result);
    } if (acc === skip) {
      return iter(count + step, acc - 1, `${result} .. `, count);
    } return iter(count + step, acc - 1, `${result} ${count} `, skip);
  }; return iter(random(1, 100), k, '', random(1, k));
};

const yourAns = () => readlineSync.question('Your answer: ');

export const func = (game, rules) => {
  const user = salute(game);
  const inc = 3;
  for (let i = 0; i < inc; i += 1) {
    const rule = rules();
    console.log(`Question: ${car(rule)}`);
    const answer = yourAns();
    if (answer !== String(cdr(rule))) {
      return console.log(`\n"${answer}" is wrong answer ;(. Correct answer was "${cdr(rule)}". \nLet's try again, ${user}!\n`);
    } console.log('Correct!');
  } return console.log(`Congratulations, ${user}!\n`);
};
