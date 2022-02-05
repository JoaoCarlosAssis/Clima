import { ReactNode } from "react"
import { ButtonContainer } from "./style"

export type ButtonProps = {
  children: ReactNode,
  ButtonColor?: string,
}

export function Button({children, ButtonColor}: ButtonProps){
  return(
    <ButtonContainer ButtonColor={ButtonColor}>
      {children}
    </ButtonContainer>
  )
}