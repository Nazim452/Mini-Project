


// const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerSet = "abcdefghijklmnopqrstuvwxyz"
// const numberSet = "1234567890"
// const symbolSet = "~!@#$%^&*()_+/"

// const totalChar = document.getElementById("total-char");
// const passbox = document.getElementById("pass-box");

// const upperInput = document.getElementById("upper-case");
// const lowerInput = document.getElementById("lower-case");
// const numberInput = document.getElementById("number");
// const symbolInput = document.getElementById("symbol");



// const getRandomData = (dataset)=>{
//     return dataset[Math.floor(Math.random()*dataset.length)]
// }

// // initially password is empty


// const generatePass=(password = "")=>{
//     if(upperInput.checked) password+=getRandomData(upperSet);
//     if(lowerInput.checked) password+=getRandomData(lowerSet);
//     if(numberInput.checked) password+=getRandomData(numberSet);
//     if(symbolInput.checked) password+=getRandomData(symbolSet);
    
//     if(password.length<=totalChar.value)   return generatePass(password);
       
    
//    passbox.innerText = ( removedWExtrapass(password, totalChar.value));
    
// }

// document.getElementById("btn").addEventListener("click", function(){
//     generatePass();
// })



// // remove extra password

// function removedWExtrapass(str,  num){
//     if(str.length>num) return str.substring(0, num)
//     else return str;
// }











const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const copyPass = document.getElementById("copy-pass");
const i = document.getElementsByTagName("i");

let strength = document.querySelector(".sttength-right")
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return generatePassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value);
}


generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
        
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

// i.addEventListener("click", function(){
    
// navigator.clipboard.writeText(totalChar.value)
// })

if(symbolSet.checked){
    strength.innerText = "Hard";
}

