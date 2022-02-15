import axios from "axios";
import {
  createContext,
  createRef,
  Dispatch,
  RefObject,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../constants/api";
import { PromiseStates } from "../enums/PromiseStates";
import { IHistory } from "../interfaces/IHistory";
import { useGetLocationContext } from "./GetLocation";
import { useSidebarContext } from "./SidebarContext";

interface ISearchLocation {
  searchState: PromiseStates;
  searchLocation(): Promise<void>;
  searchInputRef: RefObject<HTMLInputElement>;
  setSearchState: Dispatch<SetStateAction<PromiseStates>>;
  dateHistory: IHistory | undefined;
}

export const SearchLocationContext = createContext({} as ISearchLocation);

export const SearchLocationContextProvider: React.FC = ({ children }) => {
  const searchInputRef = createRef<HTMLInputElement>();
  const { setLocation } = useGetLocationContext();
  const { setSearchLocationIsActive } = useSidebarContext();
  const [searchState, setSearchState] = useState(PromiseStates.none);
  const [dateHistory, setDateHistory] = useState<IHistory>();

  function addLocationHistory(location: string) {
    const tempHistory: IHistory = {
      history: [],
    };

    const { history } = JSON.parse(
      window.localStorage.getItem("history") || JSON.stringify(tempHistory)
    ) as IHistory;

    tempHistory.history = [...history, location];

    if (tempHistory.history.length > 4) tempHistory.history.shift();

    window.localStorage.setItem("history", JSON.stringify(tempHistory));

    setDateHistory(tempHistory);
  }

  async function searchLocation() {
    if (searchInputRef.current && searchInputRef.current.value.length > 0) {
      addLocationHistory(searchInputRef.current.value);
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

  useEffect(() => {
    const storagedHistory = window.localStorage.getItem("history");
    if (storagedHistory) {
      const history = JSON.parse(storagedHistory) as IHistory;
      setDateHistory(history);
    }
  }, []);

  return (
    <SearchLocationContext.Provider
      value={{
        searchState,
        searchLocation,
        searchInputRef,
        setSearchState,
        dateHistory,
      }}
    >
      {children}
    </SearchLocationContext.Provider>
  );
};

export const useSearchLocationContext = () => useContext(SearchLocationContext);
