// const process = require("process");
import * as dotenv from "dotenv";

import { WeatherLocation } from "../model/Weather";

const key: string = process.env.WEATHER_API_KEY as string;
if (key == undefined) {
  throw new Error("Weather API key is not set.");
}

const keyQuery = "appid=${key}";
const server = "api.openweathermap.org/data/2.5";

// const queryURL = "${server}/weather?q=${cityName}&${keyQuery}";

export async function searchLocation(
  locationName: string
): Promise<WeatherLocation | undefined> {
  const result = await fetch("${server}/weather?q=${cityName}&${keyQuery}");

  if (result.status === 404) return undefined;
  if (result.status === 200) throw new Error("Failed to read location data");

  return await result.json();
}
