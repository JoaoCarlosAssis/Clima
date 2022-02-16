import { WeatherCardTemp } from "./styles";
import { Card } from "../Card";
import { handleFormatDate } from "../../utils/handleFormatDate";

export const WeatherCard: React.FC<{
  epoch: number;
  imageUrl: string;
  measure: string;
  maxTemp: string | undefined;
  minTemp: string | undefined;
}> = ({ epoch, imageUrl, maxTemp, minTemp, measure }) => {
  return (
    <Card
      cardHeader={handleFormatDate(epoch)}
      cardImage={`https:${imageUrl.replace("64x64", "128x128")}`}
    >
      <WeatherCardTemp>
        <p>
          {maxTemp}
          <span>°{measure}</span>
        </p>
        <p>
          {minTemp}
          <span>°{measure}</span>
        </p>
      </WeatherCardTemp>
    </Card>
  );
};
