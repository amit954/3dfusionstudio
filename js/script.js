grecaptcha.ready(function () {
    if (grecaptcha.getResponse() === "") {
        alert("Please validate the Google reCaptcha.");
    } else {
        alert("Successful validation! Now you can submit this form to your server side processing.");
    }
});