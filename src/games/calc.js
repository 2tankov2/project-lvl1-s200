import { func, random, calculator, strOperation } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const namegame = 'What is the result of the expression?';

const equal = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operation = strOperation('+-*');
  const ans = calculator(operation, num1, num2);
  const text = (`Question: ${num1} ${operation} ${num2}`);
  return cons(text, ans);
};

const calcgame = () => func(namegame, equal);

export default calcgame;
