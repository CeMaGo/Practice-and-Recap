import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import {useState} from "react"

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);
 
 function handleFavorite() { setIsFavorite(!isFavorite)}

  return (
    <button
      className="favorite-button"
      onClick={handleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
