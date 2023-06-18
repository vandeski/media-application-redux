import { useState } from "react";
import { Media } from "../types/Media";
import { useNavigate } from "react-router-dom";

interface MediaFormProps {
  media: Media | {};
  deleteMedia: (media: Media) => void;
  createMedia: (media: Media) => void;
  updateMedia: (media: Media) => void;
  update: boolean;
}

export function MediaForm({
  media,
  deleteMedia,
  createMedia,
  updateMedia,
  update,
}: MediaFormProps) {
  const navigate = useNavigate();
  const [activeMedia, setActiveMedia] = useState(media as Media);

  const handleInputChange = (input: EventTarget & HTMLInputElement) => {
    setActiveMedia({ ...activeMedia, [input.id]: input.value });
  };

  const handleSelectChange = (input: EventTarget & HTMLSelectElement) => {
    setActiveMedia({ ...activeMedia, [input.id]: input.value });
  };

  const handleUpdateSave = () => {
    //Check if all fields were filled
    for (const [key, value] of Object.entries(activeMedia)) {
      if (key !== "id" && !value) {
        alert(
          `Please fill in all fields before submitting the form. ${key} ${value}`
        );
        return;
      }
    }

    if (update) {
      updateMedia(activeMedia);
    } else {
      createMedia({ ...activeMedia, id: generateID() });
    }
    navigate("/");
  };

  const handleDelete = (media: Media) => {
    deleteMedia(media);
    navigate("/");
  };

  const handleCancel = () => {
    navigate("/");
  };

  const generateID = () => {
    // I would normally use a UUID but the requirements demand that this is a number and not a string
    return Math.floor(Math.random() * 1000000000);
  };

  return (
    <>
      <fieldset>
        <legend>{update ? "View/Edit Media" : "Create New Media"}</legend>
        <div className="row">
          {update && (
            <div className="col-sm-12 col-md-6">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="ID"
                value={activeMedia.id}
                disabled // Generated property
              />
            </div>
          )}
          <div className="col-sm-12 col-md-6">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={activeMedia.title}
              onChange={(e) => handleInputChange(e.target)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="type" className="doc">
              Type
            </label>
            <select
              id="type"
              value={activeMedia.type || ""}
              onChange={(e) => handleSelectChange(e.target)}
            >
              <option value="" disabled>
                Select a Type
              </option>
              <option value="movie">Movie</option>
              <option value="tv-show">TV Show</option>
              <option value="game">Game</option>
            </select>
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="genre">Genre</label>
            <input
              type="text"
              id="genre"
              value={activeMedia.genre}
              onChange={(e) => handleInputChange(e.target)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <label htmlFor="releaseYear">Release Year</label>
            <input
              type="number"
              min={1956} // The year modern anime began. Cite: https://www.britannica.com/art/anime-Japanese-animation
              max={new Date().getFullYear()}
              id="releaseYear"
              value={activeMedia.releaseYear}
              onChange={(e) => handleInputChange(e.target)}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              min={1}
              max={10}
              id="rating"
              value={activeMedia.rating}
              onChange={(e) => handleInputChange(e.target)}
            />
          </div>
        </div>
        <div className="input-group">
          <button
            className="primary bordered medium"
            onClick={() => handleUpdateSave()}
          >
            {update ? "Update" : "Save"}
          </button>
          <span />
          {update ? (
            <>
              <button
                className="secondary bordered medium"
                onClick={() => handleDelete(activeMedia)}
              >
                Delete
              </button>
              <span />
            </>
          ) : (
            <></>
          )}
          <button className="bordered medium" onClick={() => handleCancel()}>
            Cancel
          </button>
        </div>
      </fieldset>
    </>
  );
}
