const url = "https://www.liqpay.ua/api/3/checkout;";

function liqpayGetRequest() {
  const request = new Request(url, {
    version: 3,
    public_key: "sandbox_i34877559416",

    action: "pay",
    amount: 500,
    currency: USD,

    order_id: "name here",
    description: "text here",

    /*
        'subscribe_date_start' getDate(), //Date should be like 2015-03-31 00:00:00
        'subscribe_periodicity' : month,
    */
  });
}

function getDate() {
  var currentDate = new Date();
  console.log(currentDate.toUTCString());

  var format = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).formatToParts(currentDate);

  // year,month,day,hour,minute,second
  var finalDate = [
    format[4].value,
    format[0].value,
    format[2].value,
    format[6].value,
    format[8].value,
    format[10].value,
  ];

  return finalDate.join("");
}
console.log(getDate());

/*
public_key = sandbox_i34877559416;
private_key = sandbox_YHV3x3Dx7oSe0jwtHmJI0SUmYyvhxP41USzDVIQk;

subscribe_date_start = 2015-03-31 00:00:00
subscribe_periodicity = month

result_url= String
- URL у Вашому магазиніна який покупця буде
переадресовано після завершення покупки.

*/
