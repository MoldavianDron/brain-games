#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const isPrime = (num) => {
  const isPrimeIter = (iter) => {
    if (iter > Math.floor(num / 2)) return true;
    if (num % iter === 0) return false;
    return isPrimeIter(iter + 1);
  };
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  return isPrimeIter(3);
};

const brainPrimeionRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateBrainPrimeQuestionAnswerPair = () => {
  const num = randomInt(1, 51);
  if (isPrime(num)) {
    return [num.toString(), 'yes'];
  } return [num.toString(), 'no'];
};

brainGamesLogic(
  brainPrimeionRules,
  generateBrainPrimeQuestionAnswerPair,
);
