import { HightlightCard, IHightlightCard } from "../HightlightCard";
import { HightlightList, HightlightListContainer } from "./styles";

export const HightlightCardList = () => {
  const mockInfo: IHightlightCard[] = [
    {
      title: "Wind status",
      mainContent: {
        text: "7",
        smallText: "mph",
      },
      footerContent: "WindDirectionComponent",
    },
    {
      title: "Humidity",
      mainContent: {
        text: "84",
        smallText: "%",
      },
      footerContent: "HumidityBarComponent",
    },
    {
      title: "Visibility",
      mainContent: {
        text: "6,4",
        smallText: "miles",
      },
    },
    {
      title: "Air Pressure",
      mainContent: {
        text: "994",
        smallText: "mb",
      },
    },
  ];

  const handleRenderHightlightCards = () => {
    return mockInfo.map((info, index) => (
      <HightlightCard key={index} {...info} />
    ));
  };

  return (
    <HightlightListContainer>
      <h1>Today&rsquo;s Hightlights </h1>
      <HightlightList>{handleRenderHightlightCards()}</HightlightList>
    </HightlightListContainer>
  );
};
