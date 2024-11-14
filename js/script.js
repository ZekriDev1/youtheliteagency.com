document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        var fullName = document.getElementById("fullName").value;
        var email = document.getElementById("email").value;
        //var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Basic email validation
        //var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //if (!emailRegex.test(email)) {
        //  alert("Please enter a valid email address.");
        //  return;
        //}

        // AJAX request to send data to server-side script
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "js/send_email.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            } else {
                alert("Error sending message. Please try again later.");
            }
        };
        xhr.send(
            "fullName=" + fullName + "&email=" + email + "&message=" + message
        );
        // xhr.send(
        //   "fullName=" +
        //     fullName +
        //     "&email=" +
        //     email +
        //     "&subject=" +
        //     subject +
        //     "&message=" +
        //     message
        // );
    });