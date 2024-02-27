const API_HOST = "http://172.17.21.146:300";

export async function getPokemonsApi() {
  try {
    const url = `${API_HOST}/peliculas`;
    console.log(url);
    // http://localhost:300/peliculas/
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}