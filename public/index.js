//fn
const getElement = (elName) => {
  return document.querySelector(`${elName}`);
};
const getAllElement = (elName) => {
  return [...document.querySelectorAll(`${elName}`)];
};
const checkInput = () => {
  const results = allInputs.every((input) => input.reportValidity());
  return results;
};
const yearToday = new Date().getFullYear();
const yearTodayEl = getElement(".year-today");
const whatsappBtn = getElement(".assistance-container");
const payNowBtn = getElement(".glow-on-hover");
const allInputs = getAllElement("input");

yearTodayEl.textContent = yearToday;

//eventListeners
payNowBtn.addEventListener("click", async (e) => {
  try {
    e.preventDefault();
    const checkInputs = checkInput();
    if (!checkInputs) {
      return alert(
        "Please Agree To 0ur Terms & Conditions Before Proceeding To Payment Section"
      );
    }
    const data = await axios.post("/payments/clientIntentCode");
    if (data.status === 200) {
      window.location.href = `${data.data.message}`;
    }
  } catch (error) {
    window.location.href = `${
      window.location.href.split("/")[0]
    }/paymentResponse/cancel.html`;
  }
});
whatsappBtn.addEventListener("click", () => {
  window.location.href =
    "https://wa.me/60138845477?text=Need Assistance With My Accommodations";
});
