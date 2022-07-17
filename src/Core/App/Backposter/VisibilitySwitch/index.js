import { useDispatch, useSelector } from "react-redux";
import { StyledArrow } from "../../../../generalTypes/Arrow";
import { selectIsPhotoVisible, togglePhoto } from "../photoSlice";
import { Button, Text, Wrapper } from "./styled";

const VisibilitySwitch = () => {
  const isPhotoVisible = useSelector(selectIsPhotoVisible);
  const dispatch = useDispatch();

  return (
    <Wrapper isPhotoVisible={isPhotoVisible}>
      <Button onClick={() => dispatch(togglePhoto())}>
        <StyledArrow  isPhotoVisible={isPhotoVisible}/>
        <Text>{isPhotoVisible ? "Show" : "Hide"}  photo</Text>
      </Button>
    </Wrapper>
  )
}

export default VisibilitySwitch;