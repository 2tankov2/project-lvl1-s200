import { func, random } from '../index';
import { cons } from '../../node_modules/hexlet-pairs';

const task = 'Answer "yes" if number even otherwise answer "no".';

const showResult = () => {
  const randNum = random(1, 100);
  const ans = (randNum % 2 !== 0) ? 'no' : 'yes';
  const text = (`${randNum}`);
  return cons(text, ans);
};

const evengame = () => func(task, showResult);

export default evengame;
