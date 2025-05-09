class liqpayForm {
  constructor() {
    this.tabs = [...document.querySelectorAll("[liqpayDonationTab]")];
    this.inputField = document.getElementById("liqpayInput");
    this.currencySelector = document.getElementById("liqpayCurrencySelector");
    this.donationButtons = [
      ...document.querySelectorAll("[liqpayDonationButton]"),
    ];
    this.submitButton = document.getElementById("liqpaySubmitButton");
    this.liqpayKeyFormHolder = document.getElementById("liqpayKeyFormHolder");

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

  async sha1(str) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  getDate() {
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

  formGenerate() {
    const activeTab = this.tabs.find((tab) =>
      tab.classList.contains("clicked")
    );
    const tabValue = activeTab.getAttribute("liqpayTabAction");

    // generating data and signature
    json_string = JSON.stringify({
      public_key: "sandbox_i34877559416",
      version: "3",
      action: tabValue, // pay or subsribe
      amount: this.inputField.value, // amount
      currency:
        this.currencySelector.options[this.currencySelector.selectedIndex]
          .innerHTML, //currency
      description: "test",
      order_id: getDate(), // order id
    });

    data = btoa(json_string);

    sign_string =
      "sandbox_YHV3x3Dx7oSe0jwtHmJI0SUmYyvhxP41USzDVIQk" +
      data +
      "sandbox_YHV3x3Dx7oSe0jwtHmJI0SUmYyvhxP41USzDVIQk";

    signature = btoa(sha1(sign_string));

    //generating liqpay form
    const liqpayFormHTML = `
      <form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">
        <input type="hidden" name="data" value="${data}" />
        <input type="hidden" name="signature" value="${signature}" />
        <input type="image" src="//static.liqpay.ua/buttons/payUk.png" />
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
