#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const explainBrainGCDRule = () => 'Find the greatest common divisor of given numbers.';

const generateBrainGCDQuestionValue = () => `${randomInt(1, 100)} ${randomInt(1, 20)}`;

const GCD = (a, b) => {
    const val1 = Math.max(a, b);
    const val2 = Math.min(a, b);
    const remainder = val1 % val2;
    if (remainder === 0) return val2;
    return GCD(val2, remainder);
};

const getBrainGCDCorrectAnswer = (questionValue) => {
    const val1 = Number(questionValue.split(' ')[0]);
    const val2 = Number(questionValue.split(' ')[1]);
    return GCD(val1, val2).toString();
};

brainGamesLogic(
    explainBrainGCDRule,
    generateBrainGCDQuestionValue,
    getBrainGCDCorrectAnswer,
);
