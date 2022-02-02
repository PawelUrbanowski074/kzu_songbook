import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { selectSongByQuery, toggleSelected, toggleShowText, selectShowSelected } from "../songsSlice";
import { Button, Content, HorizontalLine, Item, LineOfText, List, SongText, StyledArrow, StyledLink, TrackBar, Verse } from "./styled"
import searchQueryParamName from "../searchQueryParamName";

export const SongsList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const songs = useSelector(state => selectSongByQuery(state, query));
  const showSelected = useSelector(selectShowSelected);
  const dispatch = useDispatch();

  return (
    <List>
      {songs.map(song => (
        <Item
          key={song.id}
          hidden={!song.checked && !showSelected}
        >
          <TrackBar>
            <Content>
              <StyledLink to={`/utwory/${song.id}`}>
                {song.title}
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
              <StyledArrow rotate={song.showText} />
            </Button>
          </TrackBar>
          {
            song.showText &&
            <SongText>
              {song.text.split('%').map(verse => (
                <Verse>
                  {verse.split('*').map(line => (
                    <LineOfText>{line}</LineOfText>
                  ))}
                </Verse>
              ))}
            </SongText>
          }
        </Item>
      ))}
    </List>
  )
}