export default function createNavPagination(){
const pagination = document.createElement("span");
pagination.classList.add("navigation_pagination");
pagination.textContent = "1 / 1"
return pagination
}