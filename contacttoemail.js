function emailSend(){
    Email.send({
        Host : "smtp.mailendo.com",
        Username : "edwink@betterglobeforestry.com",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}