import { randomNum, getNums, questions } from '..';

const type = 'calc';
const getExpressionType = () => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  return getRandomInt(1, 4);
};
const getExpression = () => {
  const num1 = randomNum();
  const num2 = randomNum();
  const expressionType = getExpressionType();
  const operations = {
    1: `${num1} + ${num2}`,
    2: `${num1} - ${num2}`,
    3: `${num1} * ${num2}`,
  };

  return operations[expressionType];
};
const getExpressionResult = (str) => {
  const [num1, num2] = getNums(str);
  const [, expressionType] = str.match(/\W/g);
  const result = {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
  };
  return result[expressionType];
};
const gameMethods = {
  getExpression,
  getAnswer: getExpressionResult,
};
const gameQuestions = {
  ...questions,
  calc: {
    rules: 'Welcome to the Brain Games! \nWhat is the result of the expression?',
  },
};
export { type, gameMethods, gameQuestions };
