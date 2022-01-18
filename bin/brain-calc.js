#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const signs = ['+', '-', '*'];

const brainCalcRules = 'What is the result of the expression?';

const generateBrainCalcQuestionAnswerPair = () => {
    const num1 = randomInt(0, 30);
    const num2 = randomInt(0, 10);
    const sign = signs[randomInt(0, 2)];

    let result = 0;
    switch (sign) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    default:
        result = num1 * num2;
    }
    return [`${num1} ${sign} ${num2}`, result.toString()];
};

brainGamesLogic(
    brainCalcRules,
    generateBrainCalcQuestionAnswerPair,
);
