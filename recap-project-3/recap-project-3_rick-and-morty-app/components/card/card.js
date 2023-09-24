export default function createCard(character) {
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `
        <div class='card_image-container'>
        <img
        class="card_image"
        src="${character.image}"
        alt="${character.name}"
        </>
        <div class='card_image-gradient'></div>
        </div>
        <div class='card_content'>
        <h2 class ='card_title'>${character.name}</h2>
        <dl class='card_info'>
        <dt class='card_info-title'>Status</dt>
        <dd class='card_info-description'>${character.status}</dd>
        <dt class='card_info_title'>Type</dt>
        <dd class='card_info_description'>${character.type}</dd>
        <dt class='card_info_title'>Occurrences</dt>
        <dd class='card_info_description'>${character.episode.length}</dd>
        </dl>
        </div>
    `;
    return card;
}
