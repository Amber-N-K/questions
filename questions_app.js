//using selectors inside the element
// traversing the dom


const question = document.querySelectorAll(".question")
const showText = document.querySelectorAll(".show-text")
const questionText = document.querySelectorAll(".question-text")



question.forEach(function(text){
    text.addEventListener('click', textQuestion)});

function textQuestion(){
  //console.log(this)
  this.classList.toggle("show-text");
};



/*

/
*/