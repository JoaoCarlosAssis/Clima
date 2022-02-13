import { useContext } from "react";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { UnitContext } from "../../contexts/UnitContext";
import { WeatherCard } from "../WeatherCard";
import { WeatherList } from "./styles";

export const WeatherCardList = () => {
  const { location } = useGetLocationContext();
  const { handleGetMeasure } = useContext(UnitContext);

  const currentMeasures = handleGetMeasure();

  const handleRenderWeatherCards = () => {
    return location?.forecast.forecastday.map((info, index) => (
      <WeatherCard
        key={index}
        minTemp={`${info.day[`mintemp_${currentMeasures.temperature}`]}`}
        maxTemp={`${info.day[`maxtemp_${currentMeasures.temperature}`]}`}
        measure={currentMeasures.temperature}
        epoch={info.date_epoch}
        imageUrl={info.day.condition.icon}
      />
    ));
  };

  return <WeatherList>{handleRenderWeatherCards()}</WeatherList>;
};
