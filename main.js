const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("results-div");
const clearBtn = document.getElementById("clear-btn");
const numberRegex = /^1?\s*(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;



checkBtn.addEventListener("click", () => {
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }
    
    userInput.value = userInput.value.trim();
    // result.innerHTML += `Valid US number: ${userInput.value} <br>`;

    if (validator(numberRegex, userInput.value)) {
        result.innerHTML += "Valid US number: " + userInput.value + "<br>";
        userInput.value = "";
        return;
    } else {
        result.innerHTML += "Invalid US number: " + userInput.value + "<br>"; 
        userInput.value = "";
        return;
    }
    
    
})

clearBtn.addEventListener("click", () => {
    result.innerText = "";
})


const validator = (regex, str) => {
    return regex.test(str);
}