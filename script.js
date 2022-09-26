const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

let passList="abcdefghijklmnopqrstuvwxyz";
let passList2="0123456789abcdefghijklmnopqrstuvwxyz";
let passList3="0123%456789@#abc~d!efgh$ijk%lmn^opq&r*st+uv-wx_yz";
let passList4="0123%456789@#AbC~d!efgh$iJk%lmn^oPq&r*sT+uV-wx_yZ";

clipboardEl.addEventListener('click', () => {
    let copyText=resultEl;
    navigator.clipboard.writeText(copyText.innerText);
    alert("Copied the text: " + copyText.innerText);
})

generateEl.addEventListener('click', () => {
    generatePassword(lowercaseEl,uppercaseEl,numbersEl,symbolsEl,lengthEl.value);
  
})

function generatePassword(lower, upper, number, symbol, length) {
    if(lower.checked)
    {
        getRandomLower(length);
    }
    if(upper.checked){
        getRandomUpper(length);
    }
    if(number.checked){
        getRandomNumber(length);
    }
    if(symbol.checked){
        getRandomSymbol(length);
    }
}
function getRandomLower(l) {
    let pass="";
    for(let i=0;i<l;i++){
        pass=pass+passList[Math.floor(Math.random()*(passList.length-1))];
    }
    resultEl.innerText=pass;
}

function getRandomUpper(l) {

    let pass="";
    for(let i=0;i<l;i++){
        pass=pass+passList4[Math.floor(Math.random()*(passList4.length-1))];
    }
    resultEl.innerText=pass;
}

function getRandomNumber(l) {
    let pass="";
    for(let i=0;i<l;i++){
        pass=pass+passList2[Math.floor(Math.random()*(passList2.length-1))];
    }
    resultEl.innerText=pass;
}

function getRandomSymbol(l) {
    let pass="";
    for(let i=0;i<l;i++){
        pass=pass+passList3[Math.floor(Math.random()*(passList3.length-1))];
    }
    resultEl.innerText=pass;
}