(async function () {
    document.addEventListener("DOMContentLoaded", async function () {
        const submitButton = document.querySelector("button");

        submitButton.addEventListener("mouseover", function () {
            this.textContent = "Ready to Join our club?";
        });

        submitButton.addEventListener("mouseout", function () {
            this.textContent = "Yes, I want in!!";
        });

        const form = document.querySelector("form");
        const emailInput = document.getElementById("email");

        form.addEventListener("submit", async function (event) {
            event.preventDefault();

            const emailValue = emailInput.value.trim();
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(emailValue)) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }

            // Simulate an asynchronous operation (like sending data)
            await new Promise(resolve => setTimeout(resolve, 500)); // fake delay
            alert("Form submitted successfully (simulated)!");
        });
    });
})();
