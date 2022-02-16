import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import {
  ButtonClose,
  ContainerSearchLocation,
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  MainContentSidebar,
  SearchLocationContent,
  SidebarContainer,
} from "./styles";
import { MdLocationOn } from "react-icons/md";
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import { InputSelect } from "../InputSelect";
import { GeolocationButton } from "../GeolocationButton";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { useSearchLocationContext } from "../../contexts/SearchLocationContext";
import { useContext } from "react";
import { UnitContext } from "../../contexts/UnitContext";
import { handleFormatDate } from "../../utils/handleFormatDate";

export function Sidebar() {
  const { location } = useGetLocationContext();
  const { searchInputRef, searchLocation } = useSearchLocationContext();
  const { searchLocationIsActive, setSearchLocationIsActive } =
    useSidebarContext();
  const { handleGetMeasure } = useContext(UnitContext);

  const currentMeasures = handleGetMeasure();

  return (
    <SidebarContainer aria-label="Weather Info">
      {searchLocationIsActive ? (
        <ContainerSearchLocation>
          <ButtonClose
            type="button"
            onClick={() => setSearchLocationIsActive(false)}
          >
            <AiOutlineClose />
          </ButtonClose>

          <SearchLocationContent>
            <div>
              <AiOutlineSearch />
              <input
                type="text"
                placeholder="search location"
                ref={searchInputRef}
              />
            </div>
            <button onClick={searchLocation}>Search</button>
          </SearchLocationContent>
          <InputSelect />
        </ContainerSearchLocation>
      ) : (
        <ContentSidebar>
          <HeaderSidebar>
            <Button
              ButtonColor={colors.gray}
              onClick={() => setSearchLocationIsActive(true)}
            >
              Search for places
            </Button>
            <GeolocationButton />
          </HeaderSidebar>
          <MainContentSidebar>
            <img
              src={location?.current.condition.icon}
              alt={location?.current.condition.text}
            />

            <strong>
              {location?.current[`temp_${currentMeasures.temperature}`]}
              <span>º{currentMeasures.temperature}</span>
            </strong>
            <p>{location?.current.condition.text}</p>
          </MainContentSidebar>

          <FooterSidebar>
            <span>
              Today •{" "}
              {handleFormatDate(location?.location.localtime_epoch ?? 0)}
            </span>
            <div>
              <MdLocationOn /> {location?.location.name} -{" "}
              {location?.location.region}
            </div>
          </FooterSidebar>
        </ContentSidebar>
      )}
    </SidebarContainer>
  );
}
