import { WeatherCardTemp } from "./styles";
import { Card } from "../Card";
import { handleFormatDate } from "../../utils/handleFormatDate";

export const WeatherCard: React.FC<{
  epoch: number;
  imageUrl: string;
  maxTemp: number;
  minTemp: number;
}> = ({ epoch, imageUrl, maxTemp, minTemp }) => {
  return (
    <Card
      cardHeader={handleFormatDate(epoch)}
      cardImage={`https:${imageUrl.replace("64x64", "128x128")}`}
    >
      <WeatherCardTemp>
        <p>{maxTemp}°C</p>
        <p>{minTemp}°C</p>
      </WeatherCardTemp>
    </Card>
  );
};
