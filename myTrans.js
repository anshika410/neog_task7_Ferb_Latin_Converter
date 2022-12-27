
var button = document.querySelector("#btn-translate");

var input = document.querySelector("#input-text");

var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";
function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}
 
function errorHandler(error) {
    console.log("error occured", error);
}

function clickHandler(){

    fetch (getTranslationURL(input.value))

        .then(res => res.json())
        .then(json=> {
            var translatedText = json.contents.translated;
            output.innerText = translatedText;
            })  

        
        .catch(errorHandler)         
};
button.addEventListener("click", clickHandler)

