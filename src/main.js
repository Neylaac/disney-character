import "./style.css";

const API_URL = "https://api.disneyapi.dev/character?page=1&pageSize=50";

const getDisneyCharacters = async () => {
  const response = await fetch(API_URL);
  const characters = await response.json();

  console.log(characters.data);
};

getDisneyCharacters();