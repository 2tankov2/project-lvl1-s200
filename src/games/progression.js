import { func, random, pro } from '../index';
import { cons, car, cdr } from '../../node_modules/hexlet-pairs';

const task = 'What number is missing in this progression?';

const showResult = () => {
  const resProgres = pro(random(1, 10), 10);
  const num = cdr(resProgres);
  const ans = car(resProgres);
  const text = (`${num}`);
  return cons(text, ans);
};

const progressiongame = () => func(task, showResult);

export default progressiongame;
