const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let characters = letters.concat(numbers, symbols);

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let passwordButton = document.getElementById("password-btn")
let passwordLengthValue = document.getElementById("password-length-value")
let passwordLength = document.getElementById("password-length")
let toggleEl = document.getElementsByClassName("toggle")
let lettersToggle = document.getElementById("letters-toggle")
let numbersToggle = document.getElementById("numbers-toggle")
let symbolsToggle = document.getElementById("symbols-toggle")

passwordLengthValue.textContent = passwordLength.value;

function randomIndex() {
    return Math.floor(Math.random() * characters.length)
}

function generatePassword() {
    password = ""
    for (i = 0; i < passwordLength.value; i++) {
        password += characters[randomIndex()]
    }
    return password;
}

async function setClipboard(text) {
  const type = "text/plain";
  const clipboardItemData = {
    [type]: text,
  };
  const clipboardItem = new ClipboardItem(clipboardItemData);
  await navigator.clipboard.write([clipboardItem]);
}

async function selectPasswordLength() {
  passwordLengthValue.textContent = passwordLength.value; 

}

async function selectCharacterOptions(){
    let letterValue = lettersToggle.checked
    let numbersValue = numbersToggle.checked
    let symbolsValue = symbolsToggle.checked
    characters = [];
 
    if (letterValue | numbersValue | symbolsValue) {
        for (let i = 0; i < toggleEl.length; i++) {
            if (letterValue) characters = characters.concat(letters)

            if (numbersValue) characters = characters.concat(numbers);

            if (symbolsValue) characters = characters.concat(symbols);
        }
    } else {
        characters = "-"
    }
}


passwordButton.addEventListener("click", function() {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()

})

password1El.addEventListener("click", function() {
    setClipboard(password1El.textContent)
})


password2El.addEventListener("click", function() {
    setClipboard(password2El.textContent)
})



passwordLength.addEventListener("input", function() {
    selectPasswordLength()
})

lettersToggle.addEventListener("input", function(){
    selectCharacterOptions()
})

numbersToggle.addEventListener("input", function(){
    selectCharacterOptions()
})

symbolsToggle.addEventListener("input", function(){
    selectCharacterOptions()
})