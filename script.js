
    const contactBtn = document.getElementById("contactBtn");
    const popup = document.getElementById("popup");
    const contactForm = document.getElementById("contactForm");

    contactBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add your email sending logic here.
        // For demonstration purposes, we'll just show an alert.
        alert("Form submitted successfully!");

        // Clear the form and hide the popup
        contactForm.reset();
        popup.style.display = "none";
    });

