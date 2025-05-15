class liqpayForm {
  constructor() {
    this.locale = window.location.pathname;
    this.tabs = [...document.querySelectorAll("[liqpayDonationTab]")];
    this.inputField = document.getElementById("liqpayInput");
    this.currencySelector = document.getElementById("liqpayCurrencySelector");
    this.donationButtons = [
      ...document.querySelectorAll("[liqpayDonationButton]"),
    ];
    this.submitButton = document.getElementById("liqpaySubmitButton");
    this.liqpayKeyFormHolder = document.getElementById("liqpayKeyFormHolder");
    this.cancelWrapper = document.getElementById(
      "liqpaySubscriptionCancelWrapper"
    );

    this.currencyChange();
    this.tabChange();
    this.donationButtonClick();
    this.submitButtonClick();
    //this.log();
  }

  //   log() {
  //     console.log(this.tabs);
  //     console.log(this.inputField);
  //     console.log(this.currencySelector);
  //     console.log(this.donationButtons);
  //     console.log(this.submitButton);
  //   }

  currencyChange() {
    this.currencySelector.addEventListener("change", (el) => {
      let selectedCurrency =
        el.target.options[el.target.selectedIndex].innerHTML;

      this.donationButtons.forEach((btn) => {
        btn.querySelector("[donationButtonCurrency]").innerHTML =
          selectedCurrency;
      });
    });
  }

  tabChange() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.tabs.forEach((el) => el.classList.remove("clicked"));
        tab.classList.add("clicked");

        if (tab.getAttribute("liqpayTabAction") == "subscribe") {
          if (this.locale.startsWith("/en/")) {
            this.submitButton.innerHTML = "+ Donate Monthly";
          } else if (this.locale.startsWith("/ua/")) {
            this.submitButton.innerHTML = "+ Підтримати щомісячно";
          }

          this.cancelWrapper.style.display = "flex";
        } else {
          this.cancelWrapper.style.display = "none";
        }
      });
    });
  }

  donationButtonClick() {
    this.donationButtons.forEach((btn) => {
      btn.addEventListener("click", (el) => {
        const x = btn.querySelector("[donationButtonValue]").innerHTML;
        const y = this.inputField.value;
        this.inputField.value = Number(x) + Number(y);
      });
    });
  }

  /// Liqpay Build

  sha1(message) {
    return CryptoJS.SHA1(message).toString(CryptoJS.enc.Latin1);
  }

  getDate(tp) {
    var currentDate = new Date();
    //console.log(currentDate.toUTCString());
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

    let result = "";

    // year,month,day,hour,minute,second
    if (tp == "date") {
      var finalDate = [
        format[4].value,
        "-",
        format[0].value,
        "-",
        format[2].value,
        " ",
        format[6].value,
        ":",
        format[8].value,
        ":",
        format[10].value,
      ];
      result = finalDate.join("");
    } else if (tp == "id") {
      var finalDate = [
        format[4].value,
        format[0].value,
        format[2].value,
        format[6].value,
        format[8].value,
        format[10].value,
      ];
      result = "id" + finalDate.join("") + Math.floor(Math.random() * 10);
    }

    return result;
  }

  formGenerate() {
    const activeTab = this.tabs.find((tab) =>
      tab.classList.contains("clicked")
    );
    const tabValue = activeTab.getAttribute("liqpayTabAction");

    // generating data and signature

    const json_string = JSON.stringify({
      public_key: "sandbox_i34877559416", //i69188530090
      version: "3",
      action: tabValue, // pay or subscribe
      amount: this.inputField.value, // amount
      currency:
        this.currencySelector.options[this.currencySelector.selectedIndex]
          .innerHTML, //currency
      description:
        tabValue == "pay" ? "One-Time Donation" : "Monthly Subscription",

      subscribe_periodicity: "month",
      subscribe_date_start: this.getDate("date"),
      order_id: this.getDate("id"), // "id" + "Date" + "RandomNumber"
      result_url: "https://www.cmaukraine.com",
    });

    console.log("json - " + json_string);

    const data = btoa(json_string);
    console.log("data - " + data);

    //iOEJDUxsal5ZbNSIXVGo4Z0hxwM8GfnA0uiQ6Yxt
    const sign_string =
      "sandbox_YHV3x3Dx7oSe0jwtHmJI0SUmYyvhxP41USzDVIQk" +
      data +
      "sandbox_YHV3x3Dx7oSe0jwtHmJI0SUmYyvhxP41USzDVIQk";

    console.log("sign_string - " + sign_string);
    const signature = btoa(this.sha1(sign_string));
    console.log("signature - " + signature);

    //generating liqpay form
    const liqpayFormHTML = `
      <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
        <input type="hidden" name="data" value="${data}" />
        <input type="hidden" name="signature" value="${signature}" />
      </form>
    `;

    this.liqpayKeyFormHolder.innerHTML = liqpayFormHTML;
    this.liqpayKeyFormHolder.querySelector("form").submit();
  }

  submitButtonClick() {
    this.submitButton.addEventListener("click", (btn) => {
      btn.preventDefault();
      this.formGenerate();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const liqpay = new liqpayForm();
});

console.log("liqpay works");
