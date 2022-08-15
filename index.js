import { testBank } from './constant.js';
import reader from 'readline-sync';

const totalScore = 0;

const askQuestion = (test) => {
  const answer = reader.question(test.question);
  const realAnswer = test.answer.toLowerCase();
  if (realAnswer === answer.toLowerCase()) {
    console.log(`Absolutely CORRECT!!!`);
    totalScore = totalScore + test.marks;
  } else console.log(`Its a WRONG answer!!!`);
};

const welcomeQuestion = () => {
  console.log('Welcome to the quiz, "How well you know Abhishek?"');
  const name = reader.question(`What's your name?\n`);
  console.log(`Hi ${name}!`);
};

const quizStart = () => {
  testBank.forEach(askQuestion);
};

const printScore = () => {
  if (totalScore === 10)
    console.log(
      `You scored ${totalScore}, WOW!!! you do know Abhishek very well :`,
      totalScore
    );
  if (totalScore >= 8)
    console.log(
      `You know Abhishek quite well, I see!! You scored : 
      ${totalScore}`
    );
  else if (totalScore >= 5)
    console.log(
      `You know Abhishek, good job. You scored : 
    ${totalScore}`
    );
  else
    console.log(
      `Who are you stranger, You scored : 
          ${totalScore}`
    );
};

welcomeQuestion();
quizStart();
printScore();

export {};
