import { useContext } from "react";
import { GetLocationContext } from "../../contexts/GetLocation";
import { UnitContext } from "../../contexts/UnitContext";
import { HightlightCard, IHightlightCard } from "../HightlightCard";
import { HumidityBar } from "../HumidityBar";
import { WindIndicator } from "../WindIndicator";
import { HightlightList, HightlightListContainer } from "./styles";

export const HightlightCardList = () => {
  const { location } = useContext(GetLocationContext);
  const { handleGetMeasure } = useContext(UnitContext);

  const currentMeasures = handleGetMeasure();

  const Cards: IHightlightCard[] = [
    {
      title: "Wind status",
      mainContent: {
        text: `${location?.current[`wind_${currentMeasures.velocity}`]}`,
        smallText: currentMeasures.velocity,
      },
      footerContent: (
        <WindIndicator
          windDirection={location?.current.wind_dir}
          windDirectionDeg={location?.current.wind_degree}
        />
      ),
    },
    {
      title: "Humidity",
      mainContent: {
        text: location?.current.humidity,
        smallText: "%",
      },
      footerContent: <HumidityBar percentage={location?.current.humidity} />,
    },
    {
      title: "Visibility",
      mainContent: {
        text: `${location?.current[`vis_${currentMeasures.distance}`]}`,
        smallText: currentMeasures.distance,
      },
    },
    {
      title: "Air Pressure",
      mainContent: {
        text: `${location?.current[`pressure_${currentMeasures.pressure}`]}`,
        smallText: currentMeasures.pressure,
      },
    },
  ];

  const handleRenderHightlightCards = () => {
    return Cards.map((info, index) => <HightlightCard key={index} {...info} />);
  };

  return (
    <HightlightListContainer>
      <h1>Today&rsquo;s Hightlights </h1>
      <HightlightList>{handleRenderHightlightCards()}</HightlightList>
    </HightlightListContainer>
  );
};
