class liqpayForm {
  constructor() {
    this.tabs = [...document.querySelectorAll(".donationTab")];
    this.inputField = document.querySelector(".form__field.donationValue");
    this.currencySelector = document.getElementById("currencySelector");
    this.donationButtons = [...document.querySelectorAll(".donationButton")];
    this.submitButton = document.querySelector(".submitButton.liqpay");

    this.currencyChange();
    this.tabChange();
    this.donationButtonClick();

    //this.formSubmit();
    //this.dataForm();
    //this.signatureForm();
  }

  currencyChange() {
    this.currencySelector.addEventListener("change", (el) => {
      const selectedCurrency = el.target.innerHTML;
      this.donationButtons.forEach((btn) => {
        btn.querySelector(".donationButtonCurrency").innerHTML =
          selectedCurrency;
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
        const addedValue = btn.querySelector(".donationValue").innerHTML;
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
