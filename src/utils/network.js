const SWAPI_ROOT = "https://swapi.dev/api/";
const SWAPI_PEOPLE = "people"

export const getApiResourcee = (url) => {
  fetch(url)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => console.error(error))
}

export const getApiResource = async (url) => {
  try {
    const result = await fetch(url);
    if (!result.ok){
      console.error("Couldn't fetch with status " + (result.status))
    };

    return await result.json();
  } catch (err) {
    console.error("Couldn't fetch: " + err.message);
    return false;
  }
}

getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
.then(res => console.log(res))