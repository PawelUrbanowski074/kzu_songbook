import { Image, Title, Vignette, Wrapper } from "./styled";
import kzuTlo1 from './kzuTlo1.jpg';

export const Backposter = () => (
  <Wrapper>
    <Image url={kzuTlo1} >
      <Vignette/>
    </Image>
  </Wrapper>
);