import greetings, { getUserAnswer, generateQuestion } from './cli.js';

function brainGamesLogic(
    explainRule,
    generateQuestionAnswerPair,
) {
    const name = greetings();
    explainRule();

    let correctAnswers = 0;
    do {
        const [questionValue, correctAnswer] = generateQuestionAnswerPair();

        generateQuestion(questionValue);

        const userAnswer = getUserAnswer();

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswers += 1;
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
            break;
        }
    } while (correctAnswers < 3);

    if (correctAnswers === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default brainGamesLogic;
