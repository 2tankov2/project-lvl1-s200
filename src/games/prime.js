import { func, random, isPrime } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const task = 'Is this number prime?';

const showResult = () => {
  const randNum = random(1, 100);
  const ans = isPrime(randNum) ? 'yes' : 'no';
  const text = (`${randNum}`);
  return cons(text, ans);
};

const evengame = () => func(task, showResult);

export default evengame;
