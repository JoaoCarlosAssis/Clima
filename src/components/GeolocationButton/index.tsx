
import { MdGpsFixed } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import { colors } from "../../constants/colors";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { LoaderSpinnerContainer } from "../Sidebar/styles";
import { ButtonCurrentLocation } from "./styles";


export function GeolocationButton() {
  const { handleGetCurrentLocation, buttonStatus } = useGetLocationContext()

  return (
    <ButtonCurrentLocation onClick={handleGetCurrentLocation}>
      {buttonStatus === 'loading' ? (
        <LoaderSpinnerContainer>
          <TailSpin ariaLabel="loading-indicator" color={colors.white}/>

        </LoaderSpinnerContainer>
      ) : (
        <MdGpsFixed aria-label="Get current location" />
      )}
    </ButtonCurrentLocation>
  )
}