var lang = navigator.language;
const ls = localStorage.hasOwnProperty('languageState');

if (lang=="uk-UA" && !ls){
    window.location.href = 'https://www.cmaukraine.com/ua';
}