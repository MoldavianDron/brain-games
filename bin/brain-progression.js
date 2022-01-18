#!/usr/bin/env node

import brainGamesLogic from '../src/brain-games-logic.js';
import randomInt from '../src/random-int.js';

const brainProgressionRules = 'What number is missing in the progression?';

const generateBrainProgressionQuestionAnswerPair = () => {
    const progressionStartNum = randomInt(1, 10);
    const progressionDelta = randomInt(2, 10);
    const progressionHoleIndex = randomInt(0, 9);
    const progressionArray = [];
    for (
        let num = progressionStartNum;
        num <= progressionStartNum + 9 * progressionDelta;
        num += progressionDelta
    ) {
        progressionArray.push(num.toString());
    }
    const answerValue = progressionArray[progressionHoleIndex];
    progressionArray[progressionHoleIndex] = '..';
    const questionValue = progressionArray.join(' ');
    return [questionValue, answerValue];
};

brainGamesLogic(
    brainProgressionRules,
    generateBrainProgressionQuestionAnswerPair,
);
