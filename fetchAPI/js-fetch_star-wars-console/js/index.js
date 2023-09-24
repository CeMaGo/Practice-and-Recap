console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    let response;

    try {
      response = await fetch(url);
    } catch (error) {
      console.log('There was an error', error);
    }
    
    // Uses the 'optional chaining' operator
    if (response?.ok) {
      console.log('Use the response here!', response);
    } else {
      console.log(`HTTP Response Code: ${response?.status}`)
    }
}

fetchData()