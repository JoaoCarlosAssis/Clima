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
import { IGeolocation } from "../interfaces/IGeolocation";

interface GetLocationContextProps {
  children: ReactNode;
}

interface GetLocationData {
  location: IGeolocation | undefined;
  contextState: States;
  buttonStatus: States;
  setSearchInput: Dispatch<SetStateAction<string>>;
  searchInput: string;
  searchLocationIsActive: boolean;
  setSearchLocationIsActive: Dispatch<SetStateAction<boolean>>;
  handleGetLocation: () => void;
  handleGetCurrentLocation: () => void;
  searchLocation: () => void;
}

export enum States {
  none,
  loading = "loading",
  completed = "completed",
  error = "error",
}

export const GetLocationContext = createContext({} as GetLocationData);

export function GetLocationContextProvider({
  children,
}: GetLocationContextProps) {
  const [searchLocationIsActive, setSearchLocationIsActive] = useState(false)
  const [location, setLocation] = useState<IGeolocation>();
  const [contextState, setContextState] = useState(States.none);
  const [buttonStatus, setButtonStatus] = useState(States.none)
  const [searchInput, setSearchInput] = useState('')
  function handleGetLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          await axios
            .get(
              `https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=${coords.latitude},${coords.longitude}&days=5&aqi=yes&alerts=yes`
            )
            .then((response) => setLocation(response.data));
          setContextState(States.completed);
        },
        async function () {
          await axios
            .get(
              `https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=divinopolis&days=5&aqi=yes&alerts=yes`
            )
            .then((response) => setLocation(response.data));
          setContextState(States.completed);
        }
      );
    }
  }

  function handleGetCurrentLocation() {
    setButtonStatus(States.loading)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async ({ coords }) => {
          await axios
            .get(
              `https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=${coords.latitude},${coords.longitude}&days=5&aqi=yes&alerts=yes`
            )
            .then((response) => setLocation(response.data));
          setButtonStatus(States.completed)
        }, function (err) {
          alert('Para buscar sua posição atual ative a localização do navegador')
          console.log(err)
        }
      );
    }
  }

  async function searchLocation() {
    try {
      await axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=661026bef3784058b4b161650220602&q=${searchInput}&days=1&aqi=yes&alerts=yes`
        )
        .then((response) => setLocation(response.data));
        setSearchLocationIsActive(false)
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    setContextState(States.loading);

    setTimeout(() => {
      handleGetLocation()
    }, 1000);
  }, []);

  console.log(location)
  return (
    <GetLocationContext.Provider
      value={{
        location,
        handleGetCurrentLocation,
        buttonStatus,
        contextState,
        handleGetLocation,
        setSearchInput,
        searchInput,
        searchLocation,
        searchLocationIsActive, 
        setSearchLocationIsActive,
      }}
    >
      {children}
    </GetLocationContext.Provider>
  );
}

export const useGetLocationContext = () => {
  return useContext(GetLocationContext);
};
