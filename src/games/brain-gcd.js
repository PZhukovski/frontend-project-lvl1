import getRandom from '../random.js';

import playGame from './index.js';

const task = 'Find the greatest common divisor of given numbers.';
const isGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return isGcd(b, a % b);
};

const getsDataGame = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const question = `${num1} ${num2}`;
  const answer = isGcd(num1, num2).toString();
  return [question, answer];
};
export default () => playGame(getsDataGame, task);
