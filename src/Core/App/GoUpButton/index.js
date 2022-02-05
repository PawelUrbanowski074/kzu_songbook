import { StyledArrow } from "../../../generalTypes/Arrow"
import { Button } from "./styled"

export const GoUpButton = () => {
  return(
    <Button as="a" href="#search"><StyledArrow rotate big/></Button>
  )
}