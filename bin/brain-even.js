#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const explainBrainEvenRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const generateBrainEvenQuestionValue = () => randomInt(0, 100);

const isEven = (questionValue) => questionValue % 2 === 0;

const getBrainEvenCorrectAnswer = (questionValue) => {
    if (isEven(questionValue)) {
        return 'yes';
    }
    return 'no';
};

brainGamesLogic(
    explainBrainEvenRule,
    generateBrainEvenQuestionValue,
    getBrainEvenCorrectAnswer,
);
