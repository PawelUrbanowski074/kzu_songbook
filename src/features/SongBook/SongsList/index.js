import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { selectSongByQuery, toggleSelected, toggleShowText } from "../songsSlice";
import { Button, Content, Item, List, SongText, StyledArrow, StyledLink, TrackBar } from "./styled"
import searchQueryParamName from "../searchQueryParamName";

export const SongsList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const songs = useSelector(state => selectSongByQuery(state, query));
  const dispatch = useDispatch();

  return (
    <List>
      {songs.map(song => (
        <Item key={song.id}>
          <TrackBar>
            <Content>
              <StyledLink to={`/utwory/${song.id}`}>
                {`${song.id}. ${song.title}`}
              </StyledLink>
            </Content>
            <Button
              onClick={() => dispatch(toggleSelected(song.id))}
              toggleDone
            >
              <span>{song.checked ? "✔" : ""}</span>
            </Button>
            <Button
              onClick={() => dispatch(toggleShowText(song.id))}
              toggleHiden
            >
              <StyledArrow rotate={song.showText}/>
            </Button>
          </TrackBar>
          {
            song.showText &&
            <SongText>
              {song.text}
            </SongText>
          }
        </Item>
      ))}
    </List>
  )
}