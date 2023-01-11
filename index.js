const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1El = document.getElementById("pw1-el")
let pw2El = document.getElementById("pw2-el")
let isEmpty = true

function generatePW() {
    // condition to have empty password fields, so the generate button stops working
    if (isEmpty === true) {
        for (i = 0; i < 15; i++) {
            let password1 = characters[Math.floor(Math.random() * characters.length)]
            pw1El.textContent += password1
            let password2 = characters[Math.floor(Math.random() * characters.length)]
            pw2El.textContent += password2
        }
    }
    isEmpty = false
}

function reset() {
    // button to reset the generator and empty the password fields
    pw1El.textContent = ""
    pw2El.textContent = ""
    isEmpty = true
}