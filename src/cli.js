import readlineSync from 'readline-sync';

function greetings() {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
}

function generateQuestion(questionValue) {
    console.log(`Question: ${questionValue}`);
}

function getUserAnswer() {
    const answer = readlineSync.question('Your answer: ');
    return answer.toLowerCase();
}

export { generateQuestion, getUserAnswer };
export default greetings;
