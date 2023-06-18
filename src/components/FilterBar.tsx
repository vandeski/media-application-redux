import { Dispatch, SetStateAction, useState } from "react";

interface FilterBarProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<string>>;
}

export function FilterBar({ search, setSearch, setFilter }: FilterBarProps) {
  const [searchPara, setSearchParam] = useState(search);

  const handleSearchParamUpdate = (val: string) => {
    setSearchParam(val);
  };

  const handleSearchUdate = () => {
    setSearch(searchPara);
  };
  const handleSearchClear = () => {
    setSearch("");
    setSearchParam("");
  };

  const handleSetFilter = (type: string) => {
    setFilter(type);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by Title..."
          onChange={(e) => handleSearchParamUpdate(e.target.value)}
        />
        <button className="primary" onClick={() => handleSearchUdate()}>
          Search
        </button>
        <button className="primary" onClick={() => handleSearchClear()}>
          Clear
        </button>
      </div>
      <div className="button-group">
        <button className="tertiary" onClick={() => handleSetFilter("movie")}>Movies</button>
        <button className="tertiary" onClick={() => handleSetFilter("tv-show")}>TV Shows</button>
        <button className="tertiary" onClick={() => handleSetFilter("game")}>Games</button>
        <button className="tertiary" onClick={() => handleSetFilter("")}>Clear</button>
      </div>
    </>
  );
}
