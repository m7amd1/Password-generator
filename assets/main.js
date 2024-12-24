const generateBtn = document.getElementById("generateBtn");
const input = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "$#@%&*(_)(___(+*(@{}[]{@!!&$%^";
const allChars = upperCase + lowerCase + symbols + numbers;

function generatePw() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  input.value = password;
}

function copyPassword() {
  input.select();
  document.execCommand("copy");
}

copyBtn.addEventListener("click", () => {
  if (input.value) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      width: 500,
      title: "Password Copied to Clipboard!",
      showConfirmButton: false,
      timer: 1500,
    });
    copyPassword();
  }
});

generateBtn.addEventListener("click", () => {
  generatePw();
});
