document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button");

    submitButton.addEventListener("mouseover", function() {
        this.textContent = "Ready to Join our club?";
    });

    submitButton.addEventListener("mouseout", function() {
        this.textContent = "Yes, I want in!!";
    });

    // Email validation code is added below!
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", function(event) {
        const emailValue = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {
            alert("Please enter a valid email address.");
            emailInput.focus();
            event.preventDefault(); // This should hopefully prevent the form from being submitted.
        }
    });
});
