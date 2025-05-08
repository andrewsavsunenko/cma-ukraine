//getting browser language
var lang = navigator.language;

//checking if there was a "click"
const ls = localStorage.hasOwnProperty("languageState");
console.log("has State " + ls);

if (lang == "uk-UA" && !ls) {
  window.location.href = "https://www.cmaukraine.com/ua";
  localStorage.setItem("languageState", 1);
  console.log("State = " + localStorage.getItem("languageState"));
}
