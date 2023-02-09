let password=document.getElementById("password");
function genPassword() {
    let passwordLength=document.getElementById("passwordLength").value;
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let password = '';
    for (let i = 0; i <= passwordLength-1; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
    document.getElementById("password").value = password;
    
 }
function copyPassword() {
  let copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy"); 
  //alert("Copied the text: " + copyText.value); 
}