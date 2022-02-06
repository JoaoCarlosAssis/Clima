import { CardContainer, CardImage, CardTitle } from "./styles";
import Image from "next/image";

interface ICard {
  cardHeader: string;
  cardImage?: StaticImageData;
}

export const Card: React.FC<ICard> = ({ cardHeader, cardImage, children }) => {
  return (
    <CardContainer>
      <CardTitle>{cardHeader}</CardTitle>
      {cardImage && (
        <CardImage>
          <Image sizes="10vw" layout="responsive" src={cardImage} />
        </CardImage>
      )}
      {children}
    </CardContainer>
  );
};
