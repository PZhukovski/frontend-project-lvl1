import getRandom from '../random.js';

import playGame from './index.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getsDataGame = () => {
  const num = getRandom(0, 100);
  const question = num.toString();
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};
export default () => playGame(getsDataGame, task);
