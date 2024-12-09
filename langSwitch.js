//getting browser language
var lang = navigator.language;

//checking if there was a "click"
const ls = localStorage.hasOwnProperty('languageState');
console.log("has State"+ls)

if (lang=="uk-UA" && !ls){
    window.location.href = 'https://www.cmaukraine.com/ua';
    localStorage.setItem('languageState', 1);
    console.log("State = " + localStorage.getItem('languageState'))
}

/*
//adding "click" on language switch
const b1 = document.getElementById('eng1');
const b2 = document.getElementById('eng2');
const b3 = document.getElementById('eng3');

function bClick(){
    localStorage.setItem('languageState', 1);
    console.log("click Eng 1");
    console.log(b1.innerText);
}

b1.addEventListener("click", bClick);
b2.addEventListener("click", bClick);
b3.addEventListener("click", bClick);
*/