var txtInput = document.querySelector("#textarea");
var btnTranslate = document.querySelector("#button");
var output = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/navi.json";

btnTranslate.addEventListener("click", clickHandler)

function updateURL(input) {
     return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
     console.log(error);
     alert("Something is wrong with the server, please try again later");
}

function clickHandler() {
     var inputText = txtInput.value;
     console.log(inputText);
     console.log(updateURL(inputText))
     fetch(updateURL(inputText))
     .then(response => response.json())
     .then(json => {
                    var translatedTxt = json.contents.translated;
                    output.innerText = translatedTxt;
     })
     .catch(errorHandler)
}