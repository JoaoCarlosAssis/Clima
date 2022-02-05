import { WeatherCard } from "../WeatherCard";
import { WeatherList } from "./styles";

export const WeatherCardList = () => {
  const mockInfo = [
    {
      dayOfTheWeek: "Tomorrow",
      maxTemp: "20°C",
      minTemp: "15°C",
    },
    {
      dayOfTheWeek: "Sun, 7 Jun",
      maxTemp: "20°C",
      minTemp: "15°C",
    },
    {
      dayOfTheWeek: "Mon, 8 Jun",
      maxTemp: "20°C",
      minTemp: "15°C",
    },
    {
      dayOfTheWeek: "Tomorrow",
      maxTemp: "20°C",
      minTemp: "15°C",
    },
    {
      dayOfTheWeek: "Tomorrow",
      maxTemp: "20°C",
      minTemp: "15°C",
    },
  ];

  const handleRenderWeatherCards = () => {
    return mockInfo.map((info, index) => <WeatherCard key={index} {...info} />);
  };

  return <WeatherList>{handleRenderWeatherCards()}</WeatherList>;
};
