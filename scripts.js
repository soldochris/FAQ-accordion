const questions = document.querySelectorAll('.question');
const contents = document.querySelectorAll('.content');
const icons = document.querySelectorAll('.icon');

questions.forEach( (question, index) =>{

  questions[index].addEventListener('click', () => {

    contents.forEach( (content, index) => {
      contents[index].classList.remove('active');
    });

    contents[index].classList.add('active');

    icons.forEach((icon, index) => {
      icons[index].src = "./assets/images/icon-plus.svg";
    });

    icons[index].src = "./assets/images/icon-minus.svg";
  });
});