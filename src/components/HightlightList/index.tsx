import { useContext } from "react";
import { GetLocationContext } from "../../contexts/GetLocation";
import { HightlightCard, IHightlightCard } from "../HightlightCard";
import { HumidityBar } from "../HumidityBar";
import { WindIndicator } from "../WindIndicator";
import { HightlightList, HightlightListContainer } from "./styles";

export const HightlightCardList = () => {
  const { location } = useContext(GetLocationContext);

  const Cards: IHightlightCard[] = [
    {
      title: "Wind status",
      mainContent: {
        text: `${location?.current.wind_kph.toFixed(0)}`,
        smallText: "kph",
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
        text: location?.current.vis_km,
        smallText: "km",
      },
    },
    {
      title: "Air Pressure",
      mainContent: {
        text: location?.current.pressure_in.toFixed(0),
        smallText: "in",
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
