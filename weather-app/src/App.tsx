import React from "react";
// import logo from './logo.svg';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { LocationSearch } from "./components/LocationSearch";
import { LocationTable } from "./components/LocationTable";
import { WeatherLocation } from "./model/Weather";

function App() {
  const [locations, setLocation] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");

  const addLocation = (location: WeatherLocation) =>
    setLocation([location, ...locations]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} />
      {error ? <div className={`alert alert-danger`}>{error}</div> : null}
      {warning ? <div className={`alert alert-warning`}>{warning}</div> : null}
      <LocationTable fetchLocations={locations} />
    </div>
  );
}

export default App;
