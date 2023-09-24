import createCard from "./components/card/card.js";
import createNavButton from "./components/nav-button/nav-button.js";
import createPagination from "./components/nav-pagination/nav-pagination.js";
import createSearchBar from "./components/search-bar/search-bar.js";

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Components
const prevButton = createNavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacters();
});

const nextButton = createNavButton("next", () => {
  if (page >= maxPage) return;
  page++;
  fetchCharacters();
});

const pagination = createPagination();

const searchBar = createSearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacters();
});

navigation.append(prevButton, pagination, nextButton);
searchBarContainer.append(searchBar);

fetchCharacters();

async function fetchCharacters() {
  const result = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
  const data = await result.json();
  maxPage = data.info.pages;
  const characters = data.results;
  pagination.textContent = `${page} / ${maxPage}`;
  cardContainer.innerHTML = "";
  characters.map(createCard).forEach((card) => cardContainer.append(card));
}