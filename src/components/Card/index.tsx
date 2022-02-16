import { CardContainer, CardImage, CardTitle } from "./styles";
import Image from "next/image";

interface ICard {
  cardHeader: string;
  cardImage?: string;
}

export const Card: React.FC<ICard> = ({ cardHeader, cardImage, children }) => {
  return (
    <CardContainer>
      <CardTitle>{cardHeader}</CardTitle>
      {cardImage && (
        <CardImage>
          <Image layout="responsive" width={100} height={100} src={cardImage} />
        </CardImage>
      )}
      {children}
    </CardContainer>
  );
};
