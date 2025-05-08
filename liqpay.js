class liqpayForm {
  constructor() {
    this.tabs = [...document.querySelectorAll(".donationTab")];
    this.inputField = document.querySelector(".form__field.donationValue");
    this.currencySelector = document.querySelector(
      ".select__field.currencySelector"
    );
    this.donationButtons = [...document.querySelectorAll(".donationButton")];
    this.submitButton = document.querySelector(".submitButton.liqpay");

    this.currencyChange();
    this.tabChange();
    this.donationButtonClick();

    this.formSubmit();
    this.dataForm();
    this.signatureForm();
  }

  currencyChange() {
    this.currencySelector.addEventListener("change", (e) => {
      const selectedCurrency = e.target.value;
      this.donationButtons.forEach((btn) => {
        btn.querySelector(".donationButtonCurrency").innerHTML =
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
      btn.addEventListener("click", (e) => {
        const selectedValue = btn.querySelector(".donationValue").innerHTML;
        this.inputField.value = selectedValue;
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const liqpay = new liqpayForm();
});

console.log("liqpay works");
