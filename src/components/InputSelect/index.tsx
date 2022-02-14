import axios from "axios";
import { Rings } from "react-loader-spinner";
import { api } from "../../constants/api";
import { colors } from "../../constants/colors";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { useSearchLocationContext } from "../../contexts/SearchLocationContext";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { PromiseStates } from "../../enums/PromiseStates";
import { LoaderSpinnerContainer } from "../Sidebar/styles";
import { InputItem, InputSelectContainer } from "./styles"

export function InputSelect() {
  const { setSearchLocationIsActive } = useSidebarContext();
  const { setLocation } = useGetLocationContext();
  const { setSearchState, searchState, dateHistory } = useSearchLocationContext()

  async function searchLocation(item: string) {
    if (item) {
      try {
        setSearchState(PromiseStates.loading);
        const { data } = await axios.get(
          api.url.forecast.replace("{{query}}", item)
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
    <>
      {searchState === "loading" ? (
        <LoaderSpinnerContainer>
          <Rings
            ariaLabel="loading-indicator"
            color={colors.lightBlue}
            width={200}
            height={200}
          />
        </LoaderSpinnerContainer>
      ) : (
        <>
          <InputSelectContainer>
            {dateHistory?.map(item => (
              <InputItem key={item} onClick={() => searchLocation(item)}>{item}</InputItem>
            ))}
          </InputSelectContainer>
        </>
      )}
    </>

  )
}