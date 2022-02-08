import { ReactNode } from "react";
import { Card } from "../Card";
import { HightlightCardFooter, HightlightCardText } from "./styles";

export interface IHightlightCard {
  title: string;
  mainContent:
    | {
        text: string | number | undefined;
        smallText: string;
      }
    | string;
  footerContent?: string | ReactNode;
}

export const HightlightCard: React.FC<IHightlightCard> = ({
  title,
  mainContent,
  footerContent,
}) => {
  return (
    <Card cardHeader={title}>
      {typeof mainContent !== "string" ? (
        <HightlightCardText>
          {mainContent.text}
          <small>{mainContent.smallText}</small>
        </HightlightCardText>
      ) : (
        <HightlightCardText>{mainContent}</HightlightCardText>
      )}
      {footerContent && (
        <HightlightCardFooter>{footerContent}</HightlightCardFooter>
      )}
    </Card>
  );
};
