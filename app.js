const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "your API key";

const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    }
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

    try {
        jokeEl.innerText= "...";
        btnEl.disabled=true;
        btnEl.innerText ="..."
        const response = await fetch(apiURL,options)
        const data = await response.json()
    
        btnEl.disabled=false;
        btnEl.innerText ="Tell me a joke"
    
        jokeEl.innerText = data[0].joke;
    }
     catch (error) {
        jokeEl.innerText="An error happend, try again later";
        console.log(error);
        btnEl.disabled=false;
        btnEl.innerText ="Tell me a joke";
    }
}

btnEl.addEventListener("click", getJoke);