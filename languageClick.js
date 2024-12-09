
const b1 = document.getElementById('eng1');
const b2 = document.getElementById('eng2');
const b3 = document.getElementById('eng3');

function bClick(){
    localStorage.setItem('languageState', 1);
}

b1.addEventListener("click", bClick);
b2.addEventListener("click", bClick);
b3.addEventListener("click", bClick);