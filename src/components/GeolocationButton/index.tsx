import { useState } from "react";
import { MdGpsFixed } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import { colors } from "../../constants/colors";
import { useGetLocationContext } from "../../contexts/GetLocation";
import { PromiseStates } from "../../enums/PromiseStates";
import { LoaderSpinnerContainer } from "../Sidebar/styles";
import { ButtonCurrentLocation } from "./styles";

export function GeolocationButton() {
  const [buttonStatus, setButtonStatus] = useState(PromiseStates.none);
  const { handleGetCurrentLocation } = useGetLocationContext();

  const handleCurrentLocationClick = async () => {
    setButtonStatus(PromiseStates.loading);
    await handleGetCurrentLocation(() =>
      setButtonStatus(PromiseStates.completed)
    );
  };

  return (
    <ButtonCurrentLocation onClick={handleCurrentLocationClick}>
      {buttonStatus === PromiseStates.loading ? (
        <LoaderSpinnerContainer>
          <TailSpin ariaLabel="loading-indicator" color={colors.white} />
        </LoaderSpinnerContainer>
      ) : (
        <MdGpsFixed aria-label="Get current location" />
      )}
    </ButtonCurrentLocation>
  );
}
