import readlineSync from 'readline-sync';

function greetings() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}

function explainRules(rule) {
  console.log(rule);
}

function generateQuestion(questionValue) {
  console.log(`Question: ${questionValue}`);
}

function getUserAnswer() {
  const answer = readlineSync.question('Your answer: ');
  return answer.toLowerCase();
}

export { generateQuestion, getUserAnswer, explainRules };
export default greetings;
