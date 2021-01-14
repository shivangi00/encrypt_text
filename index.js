var text = document.querySelector('.e-input');
var etext = document.querySelector('.e-text');

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let encryptedText = '';

text.addEventListener('input', encrypt => {
  const letter = encrypt.data;
  if(letter === 'v' || letter === 'v') {
    encryptedText = encryptedText.concat('','a'); 
  } else if(letter === 'w' || letter === 'W') {
    encryptedText = encryptedText.concat('','b'); 
  } else if(letter === 'x' || letter === 'X') {
    encryptedText = encryptedText.concat('','c'); 
  } else if(letter === 'y' || letter === 'Y') {
    encryptedText = encryptedText.concat('','d'); 
  } else if(letter === 'z' || letter === 'Z') {
    encryptedText = encryptedText.concat('','e'); 
  } else if(letter === ' ') {
    encryptedText = encryptedText.concat('',' ');
  } else if(letter === null) {
    encryptedText = encryptedText.slice(0, -1);
  } else {
    encryptedText = encryptedText.concat('',alph[alph.indexOf(letter)+5]);
  }
  
  etext.value = encryptedText;
})