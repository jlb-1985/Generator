document.addEventListener("DOMContentLoaded", function() {
    function displayFacts(data) {
        new Typewriter("#result", {
            strings: data.map(fact => fact.fact),
            autoStart: true,
            delay: 1,
            cursor: "",
        });
    }

    async function generateFacts(event) {
        event.preventDefault();

        const axios = await import('axios');

        const options = {
            method: 'GET',
            url: 'https://factopia.p.rapidapi.com/fact',
            headers: {
                'x-rapidapi-key': 'd3bade6b45msh554bcd1b7ef7561p1ad2e1jsnc22cc80bc110',
                'x-rapidapi-host': 'factopia.p.rapidapi.com'
            }
        };
        
        try {
            const response = await axios.request(options);
            console.log(response.data);
            displayFacts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    let factsFormElement = document.querySelector("#facts-generator-form");
    factsFormElement.addEventListener("submit", generateFacts);
});