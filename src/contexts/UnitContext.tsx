import { useEffect } from "react";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export enum Units {
  metric = "Metric",
  imperial = "Imperial",
}

interface IUnitContext {
  selectedUnit: Units;
  setSelectedUnit: Dispatch<SetStateAction<Units>>;
  handleGetMeasure: () => Record<Measures, string>;
}

export const UnitContext = createContext({} as IUnitContext);

type Measures = "temperature" | "velocity" | "distance" | "pressure";

export const UnitContextProvider: React.FC = ({ children }) => {
  const [selectedUnit, setSelectedUnit] = useState<Units>(Units.metric);

  const handleUserLocale = () => {
    if (navigator.language === "en-US") {
      setSelectedUnit(Units.imperial);
    } else {
      setSelectedUnit(Units.metric);
    }
  };

  const handleGetMeasure = () => {
    const valuesTable: {
      [key: string]: Record<Measures, string>;
    } = {
      Metric: {
        temperature: "c",
        velocity: "kph",
        distance: "km",
        pressure: "in",
      },
      Imperial: {
        temperature: "f",
        velocity: "mph",
        distance: "miles",
        pressure: "mb",
      },
    };

    return valuesTable[selectedUnit];
  };

  useEffect(() => {
    handleUserLocale();
  }, []);

  return (
    <UnitContext.Provider
      value={{ selectedUnit, setSelectedUnit, handleGetMeasure }}
    >
      {children}
    </UnitContext.Provider>
  );
};
