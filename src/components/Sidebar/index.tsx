import { ContentSidebar, FooterSidebar, HeaderSidebar, SidebarContainer } from "./styles";
import { MdGpsFixed, MdLocationOn } from 'react-icons/md'
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import ImgClima from '../../assets/Shower.png'
import Image from "next/image";
export function Sidebar() {
  return (
    <SidebarContainer>
      <HeaderSidebar>
        <Button ButtonColor={colors.gray}>
          Search for places
        </Button>
        <MdGpsFixed />
        
      </HeaderSidebar>
      <ContentSidebar>
        <Image src={ImgClima} width={150} height={170}/>
        <strong>15<span>ºc</span></strong>

        <p>Shower</p>
        
        <span>Today - Fri, 5 jun</span>

        <FooterSidebar><MdLocationOn/> Helsinki</FooterSidebar>
      </ContentSidebar>
    </SidebarContainer>
  )
}