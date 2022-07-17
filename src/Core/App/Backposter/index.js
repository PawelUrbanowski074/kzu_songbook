import { Image, Vignette, Wrapper } from "./styled";
import kzuTlo1 from './kzuTlo1.jpg';
import { useSelector } from "react-redux";
import { selectIsPhotoVisible } from "./photoSlice";
import VisibilitySwitch from "./VisibilitySwitch";

export const Backposter = () => {
  const isPhotoVisible = useSelector(selectIsPhotoVisible);

  return (
    <>
      <VisibilitySwitch />
      <Wrapper hidden={isPhotoVisible}>
        <Image url={kzuTlo1}>
          <Vignette />
        </Image>
      </Wrapper>
    </>
  )
};