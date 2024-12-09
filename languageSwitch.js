//getting browser language
var lang = navigator.language;

//checking if there was a "click"
const ls = localStorage.hasOwnProperty('languageState');

if (lang=="uk-UA" && !ls){
    window.location.href = 'https://www.cmaukraine.com/ua';
    localStorage.setItem('languageState', 1);
}

