#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
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
