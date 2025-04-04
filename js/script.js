document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button");

    submitButton.addEventListener("mouseover", function() {
        this.textContent = "Ready to Join our club?";
    });

    submitButton.addEventListener("mouseout", function() {
        this.textContent = "Yes, I want in!!";
    });
});
