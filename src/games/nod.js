import { func, random, gcd } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const namegame = 'Find the greatest common divisor of given numbers.';

const equal = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const ans = gcd(num1, num2);
  const text = (`Question: ${num1} ${num2}`);
  return cons(text, ans);
};

const nodgame = () => func(namegame, equal);

export default nodgame;
