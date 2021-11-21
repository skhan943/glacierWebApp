let submitbtn = document.querySelector('#submit-btn');
submitbtn.addEventListener('click', () => takeInput(event));

function takeInput(event){
    let clickedBtn = event.target;
    let txt = clickedBtn.previousElementSibling.previousElementSibling.previousElementSibling.value;
    localStorage.setItem('numberOfBottles', Math.ceil(2000/txt));
    alert(`You need to drink ${Math.ceil(2000/txt)} of those bottles to get your recommended 2L`);
}