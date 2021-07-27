import React from "react";
// import logo from './logo.svg';
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { LocationSearch } from "./components/LocationSearch";
import { LocationTable } from "./components/LocationTable";

function App() {
  const [locations, setLocation] = useState<string[]>([]);
  const addLocation = (location: string) =>
    setLocation([location, ...locations]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation} />
      <LocationTable fetchLocations={locations} />
    </div>
  );
}

export default App;
