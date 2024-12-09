var lang = navigator.language;

if (!$.cookie('language-uk-redirect-cookie') && lang.indexOf("uk") !== -1) {
    var date = new Date();      
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
    $.cookie('language-ua-redirect-cookie', true, { expires: date });
    $(location).attr('href', 'https://www.cmaukraine.com/ua');
} else {
    // do nothing
}