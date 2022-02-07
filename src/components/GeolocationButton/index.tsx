
import { MdGpsFixed } from "react-icons/md";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { ButtonCurrentLocation } from "./styles";


export function GeolocationButton(){
  const {getGeolocation} = useGetLocationContext() 
 
  return(
    <ButtonCurrentLocation onClick={getGeolocation}>
      <MdGpsFixed aria-label="Get current location" />
    </ButtonCurrentLocation>
  )
}