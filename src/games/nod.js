import { func, random, nod } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const namegame = 'Find the greatest common divisor of given numbers.';

const feature = () => {
  const num1 = random(1, 10);
  const num2 = random(1, 10);
  const ans = nod(num1, num2);
  const text = (`${num1} ${num2}`);
  return cons(text, ans);
};

const nodgame = () => func(namegame, feature);

export default nodgame;
