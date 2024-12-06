const BtnRouge = document.querySelectorAll("rouge");
const BtnJaune = document.querySelectorAll("jaune");
const BtnBlue = document.querySelectorAll("blue");
const BtnViolet = document.querySelectorAll("violet");

BtnRouge.forEach((btn) => {
	btn.addEventListener("click", () => {
        WheelEvent('click')
    });
});
