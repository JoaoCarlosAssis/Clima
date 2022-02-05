import { useState } from "react";
import { Selector, SelectorItem } from "./styles";

enum Measurements {
  celsius,
  fahrenheit,
}

export const MeasurementSelector: React.FC = () => {
  const [measure, setMeasure] = useState(Measurements.celsius);

  return (
    <Selector>
      <SelectorItem
        role={"button"}
        aria-label="Change measure to celsius"
        tabIndex={0}
        onClick={() => setMeasure(Measurements.celsius)}
        isSelected={measure === Measurements.celsius}
      >
        ℃
      </SelectorItem>
      <SelectorItem
        role={"button"}
        aria-label="Change measure to fahrenheit"
        tabIndex={0}
        onClick={() => setMeasure(Measurements.fahrenheit)}
        isSelected={measure === Measurements.fahrenheit}
      >
        ℉
      </SelectorItem>
    </Selector>
  );
};
