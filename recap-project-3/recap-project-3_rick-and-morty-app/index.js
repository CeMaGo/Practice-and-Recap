import createCard from "./components/card/card.js";
import createNavButton from "./components/nav-button/nav-button.js";
import createPagination from "./components/nav-pagination/nav-pagination.js";
 import createSearchBar from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);

const navigation = document.querySelector('[data-js="navigation"]');

// States
let maxPage = 42;
let page = 1;
let searchQuery = "";

// Components
const prevButton = createNavButton("prev", () => {
  if (page <= 1) return;
  page--;
  fetchCharacter()
});

const nextButton = createNavButton("next", () => {
  if (page >= maxPage) return;
  page++;
  fetchCharacter()
})

const pagination = createPagination();

const searchBar = createSearchBar((event) => {
  event.preventDefault();
  searchQuery = event.target.elements.query.value;
  page = 1;
  fetchCharacter()
});

navigation.append(prevButton, pagination,nextButton);
searchBarContainer.append(searchBar);

fetchCharacter()

async function fetchCharacter(){
  const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`
  );
const data = await result.json();
maxPage = data.info.pages;
const characters = data.results;
pagination.textContent = `${page}/${maxPage}`;
cardContainer.innerHTML = ""
characters.map(createCard).forEach((card)=> cardContainer.append(card))
console.log("data:",data);
};
