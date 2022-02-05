import { WeatherCardTemp } from "./styles";
import { Card } from "../Card";
import ImgTest from "../../assets/Shower.png";

export const WeatherCard: React.FC<{
  dayOfTheWeek: string;
  maxTemp: string;
  minTemp: string;
}> = ({ dayOfTheWeek, maxTemp, minTemp }) => {
  return (
    <Card cardHeader={dayOfTheWeek} cardImage={ImgTest}>
      <WeatherCardTemp>
        <p>{maxTemp}</p>
        <p>{minTemp}</p>
      </WeatherCardTemp>
    </Card>
  );
};
