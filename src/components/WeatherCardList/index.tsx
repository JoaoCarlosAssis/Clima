import { useGetLocationContext } from "../../contexts/GetLocation";
import { WeatherCard } from "../WeatherCard";
import { WeatherList } from "./styles";

export const WeatherCardList = () => {
  const { location } = useGetLocationContext();

  const handleRenderWeatherCards = () => {
    return location?.forecast.forecastday.map((info, index) => (
      <WeatherCard
        key={index}
        minTemp={info.day.mintemp_c}
        maxTemp={info.day.maxtemp_c}
        epoch={info.date_epoch}
        imageUrl={info.day.condition.icon}
      />
    ));
  };

  return <WeatherList>{handleRenderWeatherCards()}</WeatherList>;
};
