import axios from "axios";
import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { api } from "../constants/api";
import { PromiseStates } from "../enums/PromiseStates";
import { useGetLocationContext } from "./GetLocation";
import { useSidebarContext } from "./SidebarContext";

interface ISearchLocation {
  searchState: PromiseStates;
  searchLocation(): Promise<void>;
  searchInputRef: RefObject<HTMLInputElement>;
  setSearchState: Dispatch<SetStateAction<PromiseStates>>;
  dateHistory: Array<string> | undefined;
}

export const SearchLocationContext = createContext({} as ISearchLocation);



export const SearchLocationContextProvider: React.FC = ({ children }) => {
  const searchInputRef = createRef<HTMLInputElement>();
  const [searchState, setSearchState] = useState(PromiseStates.none);
  const { setLocation } = useGetLocationContext();
  const { setSearchLocationIsActive } = useSidebarContext();
  const [dateHistory, setDateHistory] = useState<string[]>()

  function addLocationHistory(location: string) {
    const prevHistoryString = window.localStorage.getItem("history")

    if (!prevHistoryString) window.localStorage.setItem("history", JSON.stringify({ history: [] }))

    const prevHistory = JSON.parse(window.localStorage.getItem("history") || "{}") as { history: string[] }

    const updatedHistory = [...prevHistory.history, location]

    if (updatedHistory.length > 3) updatedHistory.shift();

    window.localStorage.setItem("history", JSON.stringify({
      history: updatedHistory
    }))

    setDateHistory(updatedHistory)
  }

  async function searchLocation() {
    if (searchInputRef.current && searchInputRef.current.value.length > 0) {
      addLocationHistory(searchInputRef.current.value)
      try {
        setSearchState(PromiseStates.loading);
        const { data } = await axios.get(
          api.url.forecast.replace("{{query}}", searchInputRef.current.value)
        );
        setLocation(data);
        setSearchState(PromiseStates.completed);
        setSearchLocationIsActive(false);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <SearchLocationContext.Provider
      value={{
        searchState,
        searchLocation,
        searchInputRef,
        setSearchState,
        dateHistory
      }}
    >
      {children}
    </SearchLocationContext.Provider>
  );
};

export const useSearchLocationContext = () => useContext(SearchLocationContext);
