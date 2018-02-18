import { func, random, balance } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const namegame = 'Balance the given number.';

const feature = () => {
  const num = random(100, 5000);
  const ans = balance(num);
  const text = (`${num}`);
  return cons(text, ans);
};

const balancegame = () => func(namegame, feature);

export default balancegame;
