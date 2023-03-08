//using queryselector
const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const medium = document.querySelector(".medium");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
//declaring variables
let ExpWeak = /[a-z]/;
let ExpMedium = /\d+/;
let ExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
let no = 0;

function trigger() {
    if (input.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (input.value.length <= 3 && (input.value.match(ExpWeak) || input.value.match(ExpMedium) || input.value.match(ExpStrong))) no = 1;
        if (input.value.length >= 6 && (input.value.match(ExpWeak) && input.value.match(ExpMedium) && input.value.match(ExpStrong)) || (input.value.match(ExpWeak) || input.value.match(ExpMedium) || input.value.match(ExpStrong))) no = 2;
        if (input.value.length >= 8 && (input.value.match(ExpWeak) && input.value.match(ExpMedium) && input.value.match(ExpStrong))) no = 3;

        if (no == 1) {
            weak.classList.add("active");
            text.style.display = "block"
            text.textContent = "Your password is too weak";
            text.classList.add("weak");
        }
        if (no == 2) {

            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");
        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }

        if (no == 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is strong";
            text.classList.add("strong");
        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }
        showBtn.style.display = "block";
        showBtn.onclick = function() {
            if (input.type == "password") {
                input.type = "text";
                showBtn.textContent = "HIDE";
                showBtn.style.color = "#23ad5c";
            } else {
                input.type = "password";
                showBtn.textContent = "SHOW";
                showBtn.style.color = "#000";
            }
        }
    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        showBtn.style.display = "none";
    }
}