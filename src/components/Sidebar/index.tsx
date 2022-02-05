import {
  ContentSidebar,
  FooterSidebar,
  HeaderSidebar,
  MainContentSidebar,
  SidebarContainer,
} from "./styles";
import { MdGpsFixed, MdLocationOn } from "react-icons/md";
import { Button } from "../Button";
import { colors } from "../../constants/colors";
import ImgClima from "../../assets/Shower.png";
import Image from "next/image";
export function Sidebar() {
  return (
    <SidebarContainer aria-label="Weather Info">
      <ContentSidebar>
        <HeaderSidebar>
          <Button ButtonColor={colors.gray}>Search for places</Button>
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
    </SidebarContainer>
  );
}
