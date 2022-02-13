import { useContext } from "react";
import {
  UnitContext,
  UnitContextProvider,
  Units,
} from "../../contexts/UnitContext";
import { Selector, SelectorItem } from "./styles";

export const UnitsSelector: React.FC = () => {
  const { selectedUnit, setSelectedUnit } = useContext(UnitContext);

  const units = Object.values(Units);

  const handleRenderUnits = () => {
    return units.map((unit, index) => {
      return (
        <SelectorItem
          key={index}
          role={"button"}
          aria-label={`Change unit to ${unit}`}
          tabIndex={0}
          onClick={() => setSelectedUnit(unit)}
          isSelected={selectedUnit === unit}
        >
          {unit}
        </SelectorItem>
      );
    });
  };

  return (
    <UnitContextProvider>
      <Selector>{handleRenderUnits()}</Selector>
    </UnitContextProvider>
  );
};
