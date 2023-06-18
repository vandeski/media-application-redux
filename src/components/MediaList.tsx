import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Media } from "../types/Media";
import { FilterBar } from "./FilterBar";
import { useNavigate } from "react-router-dom";
import { mediaAPI } from "../media/mediaAPI";

interface MediaListProps {
  setActiveMedia: Dispatch<SetStateAction<Media>>;
  setUpdate: Dispatch<SetStateAction<boolean>>;
}

export function MediaList({ setActiveMedia, setUpdate }: MediaListProps) {
  const navigate = useNavigate();
  const [data, setData] = useState<Media[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadMedia = async () => {
      setIsLoading(true);
      try {
        const data = await mediaAPI.get();
        setData(data);
      } catch (e) {
        if (e instanceof Error) {
          alert(e.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    loadMedia();
  }, []);

  const handleViewEditNew = (media: Media, update: boolean) => {
    setActiveMedia(media);
    setUpdate(update);
    navigate("media");
  };

  return (
    <>
      <h1>Media List</h1>
      <FilterBar search={search} setSearch={setSearch} setFilter={setFilter} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Type</th>
              <th>Rating (1-10)</th>
              <th>
                <button
                  className="inverse"
                  onClick={() => handleViewEditNew(new Media(), false)}
                >
                  New Media
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                let typeFilter = filter ? filter === item.type : true; // Check if the list needs to be filtered by type
                return (
                  typeFilter &&
                  item.title.toLowerCase().includes(search.toLowerCase())
                ); // Filter by possible type filter and search param
              })
              .map((item) => {
                return (
                  <tr key={item.id}>
                    <td data-label="Title">{item.title}</td>
                    <td data-label="Type">{item.type}</td>
                    <td data-label="Rating">{item.rating}</td>
                    <td>
                      <button
                        className="inverse"
                        onClick={() => handleViewEditNew(item, true)}
                      >
                        View/Update
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </>
  );
}
