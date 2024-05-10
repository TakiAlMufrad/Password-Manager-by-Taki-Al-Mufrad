// //Author-Taki. Editing this and publishing this without credit will be counted as copyright strike.
    const secretPassword = localStorage.getItem("secretPassword");
    const mainPassword = localStorage.getItem("mainPassword")

document.addEventListener("DOMContentLoaded", function() {
    // Check if the user has already provided their name
    

    if (mainPassword && secretPassword) {
    } else {
        // User has not provided their name yet, prompt them for it
        const sPass = prompt("Please enter your secret password:");
        const mPass = prompt("Please enter your main password:")
        if (sPass && mPass) {
            // Store the name in localStorage
            localStorage.setItem("secretPassword", sPass);
            localStorage.setItem("mainPassword", mPass)
            alert("Passwords saved successfully.");
        } else {
            alert("No passwords entered. Please refresh the extension and provide your passwords.");
        }
    }
});

  document.addEventListener("DOMContentLoaded", function () {
    const retrievePasswordBtn = document.getElementById("retrievePassword");
    const passwordInput = document.getElementById("password");

    // Function to handle password retrieval
    function retrievePassword() {        

        if (passwordInput.value === secretPassword) {
            
            navigator.clipboard.writeText(mainPassword)
                .then(function () {
                    alert("Main password copied to clipboard!");
                })
                .catch(function (error) {
                    console.error("Failed to copy main password to clipboard:", error);
                });
        } else {
            alert("Invalid password. Try again!");
        }
    }

    // Event listener for the button click
    retrievePasswordBtn.addEventListener("click", retrievePassword);

    // Event listener for the Enter key press
    passwordInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form
            retrievePassword();
        }
    });
});
