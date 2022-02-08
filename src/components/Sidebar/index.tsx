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
import { MdLocationOn } from "react-icons/md";
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { InputSelect } from '../InputSelect';
import { GeolocationButton } from '../GeolocationButton';
import { useGetLocationContext } from '../../contexts/GetLocation';

export function Sidebar() {
  const [searchLocationIsActive, setSearchLocationIsActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const {location} = useGetLocationContext()
  return (
    
    <SidebarContainer aria-label="Weather Info">
      
      {searchLocationIsActive ?  (
        <ContainerSearchLocation>
          <ButtonClose type="button" onClick={() => setSearchLocationIsActive(false)}><AiOutlineClose /></ButtonClose>

          <SearchLocationContent >

            <div>
              <AiOutlineSearch />
              <input
                type="text"
                placeholder='search location'
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)} />
            </div>
            <button onClick={() => console.log({ searchValue })}>Search</button>
          </SearchLocationContent>

          <InputSelect />
        </ContainerSearchLocation>

      ) : (
        
        <ContentSidebar>
        
          <HeaderSidebar>
            <Button ButtonColor={colors.gray} onClick={() => setSearchLocationIsActive(true)}>Search for places</Button>
            <GeolocationButton />
          </HeaderSidebar>
          <MainContentSidebar>
            <img src={location?.current.condition.icon} alt={location?.current.condition.text} />
            
            <strong>
              15<span>ºc</span>
            </strong>
            <p>{location?.current.condition.text}</p>
          </MainContentSidebar>

          <FooterSidebar>
          
            
             <span>{location?.location.localtime}</span>
             <div>
               <MdLocationOn /> {location?.location.name} - {location?.location.country}
             </div>
             
           
          </FooterSidebar>
        

        </ContentSidebar>
      )}
    </SidebarContainer>
    
  );
}
