import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../constants/api";
import { PromiseStates } from "../enums/PromiseStates";
import { IGeolocation } from "../interfaces/IGeolocation";

interface GetLocationContextProps {
  children: ReactNode;
}

interface GetLocationData {
  location: IGeolocation | undefined;
  setLocation: Dispatch<SetStateAction<IGeolocation | undefined>>;
  contextState: PromiseStates;
  handleGetLocation: () => Promise<void>;
  handleGetCurrentLocation: (onComplete?: () => void) => Promise<void>;
}

export const GetLocationContext = createContext({} as GetLocationData);

export function GetLocationContextProvider({
  children,
}: GetLocationContextProps) {
  const [location, setLocation] = useState<IGeolocation>();
  const [contextState, setContextState] = useState(PromiseStates.none);

  const handleFetchLocation = async (coords?: GeolocationCoordinates) => {
    const fallbackLocation = "divinopolis";
    const query = coords
      ? `${coords?.latitude}, ${coords?.longitude}`
      : fallbackLocation;

    const { data } = await axios.get<IGeolocation>(
      api.url.forecast.replace("{{query}}", query)
    );
    setLocation(data);
    setContextState(PromiseStates.completed);
  };

  const handleGetLocation = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => await handleFetchLocation(coords),
        async () => await handleFetchLocation()
      );
    }
  };

  const handleGetCurrentLocation = async (onComplete?: () => void) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          await handleFetchLocation(coords);
          onComplete && onComplete();
        },
        () => {
          alert(
            "Para buscar sua posição atual ative a localização do navegador"
          );
          onComplete && onComplete();
        }
      );
    }
  };

  useEffect(() => {
    setContextState(PromiseStates.loading);
    handleGetLocation();
  }, []);

  return (
    <GetLocationContext.Provider
      value={{
        location,
        setLocation,
        handleGetCurrentLocation,
        contextState,
        handleGetLocation,
      }}
    >
      {children}
    </GetLocationContext.Provider>
  );
}

export const useGetLocationContext = () => {
  return useContext(GetLocationContext);
};
