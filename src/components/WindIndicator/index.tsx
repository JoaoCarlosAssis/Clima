import { WindIndicatorCompass, WindIndicatorContainer } from "./styles";
import { FaLocationArrow } from "react-icons/fa";

export interface IWindIndicator {
  windDirectionDeg: number | undefined;
  windDirection: string | undefined;
}

export const WindIndicator: React.FC<IWindIndicator> = ({ ...props }) => {
  return (
    <WindIndicatorContainer>
      <WindIndicatorCompass {...props}>
        <FaLocationArrow />
      </WindIndicatorCompass>
      <p>{props.windDirection}</p>
    </WindIndicatorContainer>
  );
};
