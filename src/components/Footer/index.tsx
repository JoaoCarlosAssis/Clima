import { AiFillGithub } from "react-icons/ai";
import { FooterContent } from "./styles";

export function FooterContainer() {
  return (
    <FooterContent>
      <div>
        <span>
          Powered by  
          <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>
        </span>
      </div>
      <div>
        <a href="https://github.com/mathmorais" target="_blank" rel="noreferrer" title="Github - mathmorais"> <AiFillGithub /> Matheus Morais</a>
        <a href="https://github.com/JoaoCarlosAssis" target="_blank" rel="noreferrer" title="Github - JoaoCarlosAssis"> <AiFillGithub /> João Carlos</a>
      </div>
    </FooterContent>
  )
}