const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const buttons = document.getElementById("Generate")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")

function generateRandomPassword(length) {
            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }
            return password
}


buttons.addEventListener('click',function(){
     // Prompt user for password length
        let length = parseInt(prompt("Enter the password length:", "12"), 10);

        // Validate the input
        if (isNaN(length) || length < 12 || length > 16) {
            alert("Invalid length. Please enter a number between 12 and 16.");
        } else {
            // Generate and display passwords
            const password1 = generateRandomPassword(length);
            const password2 = generateRandomPassword(length);
            
            btn1.textContent = password1
            btn2.textContent = password2
        }
})
