console.log('Hello from typescript')

// Catch html elements

const titleEl: HTMLElement = document.getElementById('title') as HTMLElement;
const answer1: HTMLElement = document.getElementById('answer1') as HTMLElement;
const answer2: HTMLElement = document.getElementById('answer2') as HTMLElement;

import { isInterfaceDeclaration } from '../node_modules/typescript/lib/typescript.js';
import {Q1, Q2} from './questions.js'

let CurrentQuestion: number = 0;
// initialize first question
function init(){
    titleEl.textContent = Q1.title;
    answer1.textContent = Q1.firstAnswerTitle;
    answer2.textContent = Q1.secondAnswerTitle;
    CurrentQuestion = 1;
}
init();

answer1.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('paspaustas pirmasis mygtukas')
    checkAnswer(CurrentQuestion, 1);
})
answer2.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('paspaustas antrasis mygtukas')
    checkAnswer(CurrentQuestion, 2);
})

function checkAnswer(CurrentQuestion:number, answer:number){
if(answer === Q2.correctId)
{
    console.log('ATSPEJAI SAUNUOLIS VALIO')
}
else{
    console.log('NEPATAIKEI NEPATAIKEI')
}
}