import * as React from "react";
import { FC, useState } from "react";

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({ onSearch }) => {
  const [currentLocation, setLocationSearch] = useState("");
  const disableSearch = currentLocation.trim() === "";

  const addLocation = () => {
    onSearch(currentLocation); // Prop callback invoked - string passed
    setLocationSearch("");
  };

  return (
    <div>
      <label>
        Add location:
        <input
          className="ml-1 mr-1"
          type="text"
          onChange={(e) => setLocationSearch(e.target.value)}
        ></input>
      </label>
      <button
        className="btn btn-primary"
        onClick={addLocation}
        disabled={disableSearch}
      >
        Search
      </button>
    </div>
  );
};
