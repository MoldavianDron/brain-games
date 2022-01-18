import greetings, { getUserAnswer, generateQuestion, explainRules } from './cli.js';

function brainGamesLogic(
  rules,
  generateQuestionAnswerPair,
) {
  const name = greetings();
  explainRules(rules);

  let correctAnswers = 0;
  do {
    const [questionValue, correctAnswer] = generateQuestionAnswerPair();

    generateQuestion(questionValue);

    const userAnswer = getUserAnswer();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }
  } while (correctAnswers < 3);

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default brainGamesLogic;
