import React from "react";
// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

function App() {
  const [currentLocation, setLocationSearch] = useState("Kolkata");
  const [locations, setLocation] = useState([
    "Berlin",
    "London",
    "New York",
    "Tokyo",
  ]);
  return (
    <div className="App">
      <h1>Weather App</h1>

      <label>
        Pick location:
        <input
          type="text"
          value={currentLocation}
          onChange={(e) => setLocationSearch(e.target.value)}
        ></input>
      </label>
      <button>Search</button>

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
