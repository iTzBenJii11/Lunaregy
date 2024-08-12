// Date Fetch API.
const dateAPI = async () => {
  const endpoint = "http://date.jsontest.com";
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonData = await response.json();
      console.log(jsonData);

      const element = document.getElementById("jsonData");

      element.innerHTML = ` 
            <div class='dataAPI'>
                <h1 id='date'>${jsonData.date}</h1>
                <p id='epoch'>${jsonData.milliseconds_since_epoch}</p>
                <p id='time'>${jsonData.time}</p>
            </div>
            `;
      return jsonData;
    }

    throw new Error("Request has failed!");
  } catch (e) {
    const element = document.getElementById("jsonData");

    element.innerHTML = `<h1>FAILED REACHING SERVER</h1>`;

    console.error(e);
  }
};

dateAPI();

// Pokemon Fetch API.
const pokemonAPI = async () => {
  try {
    const endpointAPI = "https://pokeapi.co/api/v2/pokemon/weedle";
    const response = await fetch(endpointAPI);
    if (response.ok) {
      const pokemonResponse = await response.json();
      console.log(pokemonResponse);

      const element = document.getElementById("pokemon");

      element.innerHTML = `<h1>${pokemonResponse.name}<h1>`;

      return pokemonResponse;
    }

    throw new error("request failed!");
  } catch (e) {
    const element = document.getElementById("pokemon");

    element.innerHTML = `<h1>FAILED REACHING SERVER</h1>`;
    console.error(e);
  }
};

pokemonAPI();
