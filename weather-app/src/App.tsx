import React from "react";
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [currentLocation, setLocationSearch] = useState("");
  const [locations, setLocation] = useState<string[]>([]);

  const disableSearch = currentLocation.trim() === "";
  const addLocation = () => {
    setLocation([currentLocation, ...locations]);
    setLocationSearch("");
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <label>
        Add location:
        <input
          type="text"
          onChange={(e) => setLocationSearch(e.target.value)}
        ></input>
      </label>
      <button onClick={addLocation} disabled={disableSearch}>
        Search
      </button>

      <table>
        <thead>
          <tr>
            <th>Locations</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr>
              <td>{index}</td>
              <td>{location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
