document.getElementById("captcha_form").addEventListener("submit",function(evt)
  {

  var response = grecaptcha.getResponse();
  if(response.length == 0)
  {
    //reCaptcha not verified

    document.getElementById("recaptcha").style.display= "block" ;

    evt.preventDefault();
    return false;
  }
  //captcha verified
  //do the rest of your validations here

});