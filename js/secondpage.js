let midContainer = document.querySelector("#center-container");

window.addEventListener('load', (event) => {
    createBottles(localStorage.getItem('numberOfBottles'));
    var bottles = document.querySelectorAll("img");
    for (b in bottles){
        bottles[b].addEventListener('click', () => disappear())
    };
});

function createBottles(numOfBottles){
    for (i = 0; i < numOfBottles; i++){
        midContainer.innerHTML += '<img class="bottle" src="imgs/bottle.png"/>';
    }
}

function disappear(){
    alert("Nice!");
    event.target.src = 'imgs/bottleFinished.png';
}