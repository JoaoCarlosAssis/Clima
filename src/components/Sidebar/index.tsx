import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
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
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import ImgClima from "../../assets/Shower.png";
import Image from "next/image";
import { useState } from "react";
import { InputSelect } from '../InputSelect';
export function Sidebar() {
  const [searchLocationIsActive, setSearchLocationIsActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  return (

    <SidebarContainer aria-label="Weather Info">
      {searchLocationIsActive ? (
        <ContainerSearchLocation>
          <ButtonClose type="button" onClick={() => setSearchLocationIsActive(false)}><AiOutlineClose /></ButtonClose>

          <SearchLocationContent>
            
            <div>
              <AiOutlineSearch />
              <input 
                type="text" 
                placeholder='search location' 
                value={searchValue} 
                onChange={event => setSearchValue(event.target.value)}/>
            </div>
            <button onClick={() => console.log({searchValue})}>Search</button>
          </SearchLocationContent>

          <InputSelect/>
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
