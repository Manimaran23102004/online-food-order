let usermail=document.getElementById('mail-id').value;

function sendEmail(){
  Email.send({
      Host : "smtp.gmail.com",
      Username : "manimaranganeshkumar@gmail.com",
      Password : "MaRaN@123",
      To : 'manimaranganeshkumar@gmail.com',
      From :mail,
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}