import React from "react";
// import logo from './logo.svg';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [locations, setLocation] = useState<string[]>([]);

  const disableSearch = currentLocation.trim() === "";
  const addLocation = () => {
    setLocation([currentLocation, ...locations]);
    setLocationSearch("");
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <table className="table table-hover">
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
