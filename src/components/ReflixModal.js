import { useEffect, useState } from "react";
import { fetchGif, fetchKeyword } from "../requests/fetchData";
import { getKeyword, giphyLink } from "../config/constants";

export default function ReflixModal({ movie, setOpenModal }) {
  const [gifLink, setGifLink] = useState("");
  useEffect(() => {
    async function fetchData() {
      const keyword = await fetchKeyword(getKeyword(movie.id));
      const response = await fetchGif(giphyLink, keyword);
      setGifLink(response);
    }
    fetchData();
  }, []);

  return (
    <div className="reflix-modal__container">
      <div className="reflix-modal__window">
        <div className="reflix-modal__button-container">
          <button
            className="reflix-modal__title__exit-button"
            onClick={() => setOpenModal(false)}
          >
            {"X"}
          </button>
        </div>

        <div className="reflix-modal__title">{`Rented ${JSON.stringify(
          movie.original_title
        )} Sucessfully!`}</div>
        <iframe className="reflix-modal__gif-container" src={gifLink}></iframe>
      </div>
    </div>
  );
}
