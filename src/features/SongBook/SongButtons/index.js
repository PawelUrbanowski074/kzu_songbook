import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { 
  selectAreSongEmpty, 
  selectIsEverySongUnchecked, 
  selectShowSelected, 
  setAllUnchecked, 
  toggleShowSelected 
} from "../songsSlice";
import { Wrapper } from "./styled";

export const SongButtons = () => {
  const areSongEmpty = useSelector(selectAreSongEmpty);
  const showSelected = useSelector(selectShowSelected);
  const isEverySongUnchecked = useSelector(selectIsEverySongUnchecked);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areSongEmpty && (
        <>
          <Button onClick={() => dispatch(toggleShowSelected())}> 
            Pokaż {showSelected ? "zaznaczone" : " wszystkie"}
          </Button>
          <Button
            onClick={() => dispatch(setAllUnchecked())}
            disabled={isEverySongUnchecked}
          >
            Odznacz wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};