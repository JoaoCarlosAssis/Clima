import { useState } from "react"
import { InputBtn, InputContent, InputItem, InputSelectContainer } from "./styles"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

export function InputSelect() {
  const [isActive, setIsActive] = useState(false)
  const [selectedItemCity, setSelectedItemCity] = useState('London')

  function handleItemSelect(location: string){
    setSelectedItemCity(location)
    setIsActive(false)
  }
  return (
    <InputSelectContainer>
      <InputBtn onClick={() => setIsActive(!isActive)}>
        {selectedItemCity}
        {isActive ? (
          <span><IoMdArrowDropup /></span>
        ) : (
          <span><IoMdArrowDropdown /></span>
        )}

      </InputBtn>
      {isActive && (
        <InputContent className="inputContent">
          <InputItem onClick={() => handleItemSelect('Barcelona')}>Barcelona</InputItem>
          <InputItem onClick={() => handleItemSelect('Long Beach')}>Long Beach</InputItem>
        </InputContent>
      )}
    </InputSelectContainer>
  )
}