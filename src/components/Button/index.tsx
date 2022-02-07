import { ReactNode } from "react"
import { ButtonContainer } from "./style"

export type ButtonProps = {
  children: ReactNode,
  ButtonColor?: string,
  onClick: () => void,
}

export function Button({children, ButtonColor, onClick}: ButtonProps){
  return(
    <ButtonContainer ButtonColor={ButtonColor} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}