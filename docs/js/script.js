var open = document.querySelector(".btn-popup");
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=user]");
var mail = popup.querySelector("[name=mail]");
var question = popup.querySelector("[name=question]");

var storage = localStorage.getItem("login");

var isStorageSupport = true;
var storage = " ";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

open.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("popup-show");

    if (storage) {
        login.value = storage;
        mail.focus();
    } else {
        login.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("popup-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !mail.value || !question.value) {
        evt.preventDefault();
        console.log("Введи");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login.value");
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            evt.preventDefault();
            popup.classList.remove("popup-show");
            popup.classList.remove("modal-error");
        }
    }
});
