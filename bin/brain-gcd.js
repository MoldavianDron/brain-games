#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const GCD = (a, b) => {
    const val1 = Math.max(a, b);
    const val2 = Math.min(a, b);
    const remainder = val1 % val2;
    if (remainder === 0) return val2;
    return GCD(val2, remainder);
};

const explainBrainGCDRule = () => 'Find the greatest common divisor of given numbers.';

const generateBrainGCDQuestionAnswerPair = () => {
    const num1 = randomInt(1, 100);
    const num2 = randomInt(1, 20);
    const questionValue = `${num1} ${num2}`;
    const gcd = GCD(num1, num2).toString();

    return [questionValue, gcd];
};

brainGamesLogic(
    explainBrainGCDRule,
    generateBrainGCDQuestionAnswerPair,
);
