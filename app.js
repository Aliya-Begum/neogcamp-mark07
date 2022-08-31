var txtInput = document.querySelector('.input-text');
var btnTranslate = document.querySelector('.btn-translate');
var txtOutput = document.querySelector('.output-div');
console.log(txtInput);
console.log(btnTranslate);
console.log(txtOutput);

var serverURL = "https://api.funtranslations.com/translate/jive.json";

function getServerURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server! Please try again later.")
}

function clickhandler() {
    var inputTxt = txtInput.value;
    fetch(getServerURL(inputTxt))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickhandler);