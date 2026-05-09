import "./style.css";

const API_URL = "https://api.disneyapi.dev/character?page=1&pageSize=50";

const app = document.querySelector("#app");

const getDisneyCharacters = async () => {
  const response = await fetch(API_URL);
  const characters = await response.json();
  

   const characterCards = characters.data.map((character) => {
    return `
      <article>
        <h2>${character.name}</h2>
        <img src="${character.imageUrl}" alt="${character.name}">
      </article>
    `;
  });
  
    app.innerHTML = characterCards.join("");


};

getDisneyCharacters();