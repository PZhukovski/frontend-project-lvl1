import getRandom from '../random.js';

import playGame from './index.js';

const task = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};
const operators = ['+', '-', '*'];
const maxNumOperators = operators.length - 1;

const getsDataGame = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operatorIndex = getRandom(0, maxNumOperators);
  const operator = operators[operatorIndex];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [question, answer];
};

export default () => playGame(getsDataGame, task);
