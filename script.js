document.getElementById("register-button").addEventListener("click", function() {
    var registrationForm = document.getElementById("registration-section");
    registrationForm.style.display = "block";
});

document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get form data
    const teamCaptain = document.getElementById("team-captain").value;
    const playerNames = document.getElementById("player-names").value;

    // Send the data via email (you'll need a backend for this)
    const data = `Team Captain: ${teamCaptain}\nPlayer Names: ${playerNames}`;
    
    // Replace 'your-email@example.com' with your email address
    const recipientEmail = sahilhabib4455@gmail.com ;
    const subject = 'Cricket Tournament Registration';

    // Send the email using a mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${data}`;
    window.location.href = mailtoLink;
});