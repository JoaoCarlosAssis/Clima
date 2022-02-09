import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface GetLocationContextProps {
  children: ReactNode;
}

interface GetLocationData {
  searchLocationIsActive: boolean;
  setSearchLocationIsActive: Dispatch<SetStateAction<boolean>>;
}

export const SidebarContext = createContext({} as GetLocationData);

export function SidebarContextProvider({ children }: GetLocationContextProps) {
  const [searchLocationIsActive, setSearchLocationIsActive] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        searchLocationIsActive,
        setSearchLocationIsActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};
