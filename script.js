const plusIcon = document.querySelectorAll('.plusIcon');
const minusIcon = document.querySelectorAll('.minusIcon');
const button = document.querySelector('.faq-button');
const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.answer');


for(let i=0;i<questions.length;i++){
    questions[i].addEventListener('click',()=>{
        plusIcon[i].classList.toggle('hidden');
        minusIcon[i].classList.toggle('hidden');

        answers[i].classList.toggle('hidden');
    })
}



