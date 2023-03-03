export function alert(message) {
    const dialog = document.getElementById("dialog");
    dialog.innerHTML = document.getElementById("alert-template").innerHTML;
    dialog.querySelector("form > p").textContent = message;
    dialog.showModal();
}

export function confirm(message, callback) {
    const dialog = document.getElementById("dialog");
    dialog.innerHTML = document.getElementById("confirm-template").innerHTML;
    dialog.querySelector("form > p").textContent = message;
    dialog.showModal();
    dialog.addEventListener("close", () => callback(dialog.returnValue));
}

export function prompt(message, callback) {
    const dialog = document.getElementById("dialog");
    dialog.innerHTML = document.getElementById("prompt-template").innerHTML;
    dialog.querySelector("form > p").textContent = message;
    dialog.showModal();
    dialog.addEventListener("close", () => {
        let value = dialog.querySelector("input").value;
        callback((value.length > 0) ? value : null);
    });
}