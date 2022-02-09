import axios from "axios";
import {
  createContext,
  createRef,
  RefObject,
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
}

export const SearchLocationContext = createContext({} as ISearchLocation);

export const SearchLocationContextProvider: React.FC = ({ children }) => {
  const searchInputRef = createRef<HTMLInputElement>();
  const [searchState, setSearchState] = useState(PromiseStates.none);
  const { setLocation } = useGetLocationContext();
  const { setSearchLocationIsActive } = useSidebarContext();

  async function searchLocation() {
    if (searchInputRef.current && searchInputRef.current.value.length > 0) {
      try {
        setSearchState(PromiseStates.loading);
        const { data } = await axios.get(
          api.url.replace("{{query}}", searchInputRef.current.value)
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
      }}
    >
      {children}
    </SearchLocationContext.Provider>
  );
};

export const useSearchLocationContext = () => useContext(SearchLocationContext);
