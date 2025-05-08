class liqpayForm {
  constructor() {
    this.tabs = [...document.querySelectorAll("[liqpayDonationTab]")];
    this.inputField = document.getElementById("liqpayInput");
    this.currencySelector = document.getElementById("liqpayCurrencySelector");
    this.donationButtons = [
      ...document.querySelectorAll("[liqpayDonationButton]"),
    ];
    this.submitButton = document.getElementById("liqpaySubmitButton");

    this.currencyChange();
    this.tabChange();
    this.donationButtonClick();

    //this.formSubmit();
    //this.dataForm();
    //this.signatureForm();

    this.log();
  }

  log() {
    console.log(this.tabs);
    console.log(this.inputField);
    console.log(this.currencySelector);
    console.log(this.donationButtons);
    console.log(this.submitButton);
  }

  currencyChange() {
    this.currencySelector.addEventListener("change", (el) => {
      let selectedCurrency =
        el.target.options[el.target.selectedIndex].innerHTML;

      this.donationButtons.forEach((btn) => {
        btn.querySelectorAll(".donationButtonCurrency").forEach((el) => {
          el.innerHTML = selectedCurrency;
          console.log("button = " + el.innerHTML);
        });
      });

      console.log("currency = " + selectedCurrency);
    });
  }

  tabChange() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.tabs.forEach((el) => el.classList.remove("clicked"));
        tab.classList.add("clicked");
      });
      console.log("tab = clicked");
    });
  }

  donationButtonClick() {
    this.donationButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const addedValue = e.querySelector(".donationValue").innerHTML;
        this.inputField.value += addedValue;
        console.log("inputValue = " + this.inputField.value);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const liqpay = new liqpayForm();
});

console.log("liqpay works");
