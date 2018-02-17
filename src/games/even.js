import { func, random } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const namegame = 'Answer "yes" if number even otherwise answer "no".';

const equal = () => {
  const randNum = random(1, 100);
  const ans = (randNum % 2 !== 0) ? 'no' : 'yes';
  const text = (`Question: ${randNum}`);
  return cons(text, ans);
};

const evengame = () => func(namegame, equal);

export default evengame;
