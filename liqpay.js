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
        this.inputField.value = parseInt(x) + parseInt(y);
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const liqpay = new liqpayForm();
});

console.log("liqpay works");
