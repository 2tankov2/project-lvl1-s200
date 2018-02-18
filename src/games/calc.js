import { func, random, calculator, strOperation } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const task = 'What is the result of the expression?';

const showResult = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const operation = strOperation('+-*');
  const ans = calculator(operation, num1, num2);
  const text = (`${num1} ${operation} ${num2}`);
  return cons(text, ans);
};

const calcgame = () => func(task, showResult);

export default calcgame;
