#!/usr/bin/env node

import { generateQuestion, getUserAnswer } from '../src/cli.js';
import brainGamesLogic from '../src/brain-games-logic.js';

const signs = ['+', '-', '*'];

const explainBrainCalcRule = () => 'What is the result of the expression?';

const generateRandomIntNumber = (max) => Math.floor(Math.random() * (max + 1));

const generateBrainCalcQuestionValue = () => `${generateRandomIntNumber(30)} ${signs[generateRandomIntNumber(2)]} ${generateRandomIntNumber(10)}`;

const generateBrainCalcQuestion = (questionValue) => generateQuestion(questionValue);

const getBrainCalcUserAnswer = () => getUserAnswer();

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
    generateBrainCalcQuestion,
    getBrainCalcUserAnswer,
    getBrainCalcCorrectAnswer,
);
