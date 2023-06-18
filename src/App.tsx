import React, { useState } from "react";
import "./App.css";
import { MediaList } from "./components/MediaList";
import { Media } from "./types/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MediaForm } from "./components/MediaForm";
import { mediaAPI } from "./media/mediaAPI";

function App() {
  const [activeMedia, setActiveMedia] = useState({} as Media);
  const [update, setUpdate] = useState(false);

  const deleteMedia = async (media: Media) => {
    try {
      await mediaAPI.delete(media);
      alert(`Successfully deleted ${media.title}`);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  const createMedia = async (media: Media) => {
    try {
      await mediaAPI.post(media);
      alert(`Successfully created ${media.title}`);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  const updateMedia = async (media: Media) => {
    try {
      await mediaAPI.put(media);
      alert(`Successfully updated ${media.title}`);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MediaList
                setActiveMedia={setActiveMedia}
                setUpdate={setUpdate}
              />
            }
          />
          <Route
            path="media"
            element={
              <MediaForm
                media={activeMedia}
                deleteMedia={deleteMedia}
                createMedia={createMedia}
                updateMedia={updateMedia}
                update={update}
              />
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
