import { Bar, BarContainer, BarLabels, IHumidityBar } from "./styles";

export const HumidityBar: React.FC<IHumidityBar> = ({ percentage }) => {
  return (
    <BarContainer>
      <BarLabels>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </BarLabels>
      <Bar percentage={percentage} />
      <BarLabels>
        <div></div>
        <p>%</p>
      </BarLabels>
    </BarContainer>
  );
};
