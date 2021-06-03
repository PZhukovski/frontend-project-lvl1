import getRandom from '../random.js';

import playGame from './index.js';

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const member = first + step * i;
    progression.push(member);
  }
  return progression;
};

const getsDataGame = () => {
  const first = getRandom(0, 10);
  const step = getRandom(0, 10);
  const progressionHiddenIndex = getRandom(0, progressionLength - 1);
  const progression = makeProgression(first, step, progressionLength);
  const answer = progression[progressionHiddenIndex].toString();
  progression[progressionHiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};
export default () => playGame(getsDataGame, task);
