#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const isEven = (questionValue) => questionValue % 2 === 0;

const brainEvenRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateBrainEvenQuestionAnswerPair = () => {
  const questionValue = randomInt(0, 100);
  if (isEven(questionValue)) {
    return [questionValue, 'yes'];
  }
  return [questionValue, 'no'];
};

brainGamesLogic(
  brainEvenRules,
  generateBrainEvenQuestionAnswerPair,
);
