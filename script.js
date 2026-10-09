
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".quote-form");

    if (!form) {
        console.error("Quote form not found.");
        return;
    }

    const button = form.querySelector('button[type="submit"]');

    if (!button) {
        console.error("Quote submit button not found.");
        return;
    }

    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const service = document.getElementById("service");
    const address = document.getElementById("address");


function updateQuoteButton() {
    const complete =
        name.value.trim() !== "" &&
        phone.value.trim() !== "" &&
        service.value !== "" &&
        address.value.trim() !== "";

    button.classList.toggle("active", complete);

    console.log("Fields complete:", complete);
    console.log("Button classes:", button.className);
}

    form.addEventListener("input", updateQuoteButton);
    form.addEventListener("change", updateQuoteButton);

    updateQuoteButton();

    console.log("Quote button color script loaded.");
});