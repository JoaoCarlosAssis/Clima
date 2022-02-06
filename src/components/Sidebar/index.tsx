import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import {
  ButtonClose,
  ContainerSearchLocation,
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  LatestResearch,
  MainContentSidebar,
  SearchLocationContent,
  SidebarContainer,
} from "./styles";
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import ImgClima from "../../assets/Shower.png";
import Image from "next/image";
import { useState } from "react";
export function Sidebar() {
  const [searchLocationIsActive, setSearchLocationIsActive] = useState(false)

  return (

    <SidebarContainer aria-label="Weather Info">
      {searchLocationIsActive ? (
        <ContainerSearchLocation>
          <ButtonClose type="button" onClick={() => setSearchLocationIsActive(false)}><AiOutlineClose /></ButtonClose>

          <SearchLocationContent>
            
            <div>
              <AiOutlineSearch />
              <input type="text" placeholder='search location' />
            </div>
            <button onClick={() => console.log('search')}>Search</button>
          </SearchLocationContent>
            <select >
              <option value="London">London</option>
              <option value="London">London</option>
              <option value="London">London</option>
              <option value="London">London</option>
              <option value="London">London</option>
            </select>

            <LatestResearch>
              <span>Barcelona</span>
              <span>Long Beach</span>
            </LatestResearch>

        </ContainerSearchLocation>

      ) : (
        <ContentSidebar>
          <HeaderSidebar>
            <Button ButtonColor={colors.gray} onClick={() => setSearchLocationIsActive(true)}>Search for places</Button>
            <MdGpsFixed aria-label="Get current location" />
          </HeaderSidebar>
          <MainContentSidebar>
            <Image
              alt="Weather state"
              draggable={false}
              src={ImgClima}
              width={150}
              height={170}
            />
            <strong>
              15<span>ºc</span>
            </strong>
            <p>Shower</p>
          </MainContentSidebar>

          <FooterSidebar>
            <span>Today - Fri, 5 jun</span>
            <div>
              <MdLocationOn /> Helsinki
            </div>
          </FooterSidebar>
        </ContentSidebar>
      )}
    </SidebarContainer>
  );
}
