const mainTextFormEmail = document.querySelector(".main__text-form input[type=email]");
const formError = document.querySelector(".form-error");


mainTextFormEmail.addEventListener("input", (e) => {
    if(mainTextFormEmail.validity.typeMismatch){
        formError.classList.add("form-error--active");
        mainTextFormEmail.style.borderColor = "var(--LightRed)";
    }else{
        formError.classList.remove("form-error--active");
        mainTextFormEmail.style.borderColor = "var(--Gray)";
    }
})

const developer = document.querySelector(".developer");
const attribution = document.querySelector(".attribution");

developer.addEventListener("click", () => {
    attribution.classList.toggle("attribution--active");
})

