#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const signs = ['+', '-', '*'];

const explainBrainCalcRule = () => 'What is the result of the expression?';

const generateBrainCalcQuestionValue = () => `${randomInt(0, 30)} ${signs[randomInt(0, 2)]} ${randomInt(0, 10)}`;

const getBrainCalcCorrectAnswer = (questionValue) => {
    const parseQuestionValue = (str) => {
        const val1 = Number(str.split(' ')[0]);
        const val2 = Number(str.split(' ')[2]);
        const sign = str.split(' ')[1];
        return [val1, sign, val2];
    };
    const [val1, sign, val2] = parseQuestionValue(questionValue);
    let result = 0;
    switch (sign) {
    case '+':
        result = val1 + val2;
        break;
    case '-':
        result = val1 - val2;
        break;
    default:
        result = val1 * val2;
    }
    return result.toString();
};

brainGamesLogic(
    explainBrainCalcRule,
    generateBrainCalcQuestionValue,
    getBrainCalcCorrectAnswer,
);
