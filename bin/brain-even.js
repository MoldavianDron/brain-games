#!/usr/bin/env node

import { generateQuestion, getUserAnswer } from '../src/cli.js';
import brainGamesLogic from '../src/brain-games-logic.js';

const explainBrainEvenRule = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const generateBrainEvenQuestionValue = () => Math.floor(Math.random() * 100);

const generateBrainEvenQuestion = (value) => generateQuestion(value);

const getBrainEvenUserAnswer = () => getUserAnswer();

const isEven = (value) => value % 2 === 0;

const getBrainEvenCorrectAnswer = (value) => {
    if (isEven(value)) {
        return 'yes';
    }
    return 'no';
};

brainGamesLogic(
    explainBrainEvenRule,
    generateBrainEvenQuestionValue,
    generateBrainEvenQuestion,
    getBrainEvenUserAnswer,
    getBrainEvenCorrectAnswer,
);
