import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { selectSongByQuery, toggleSelected, toggleShowText, selectShowSelected } from "../songsSlice";
import {
  Chords,
  Content,
  Item,
  LineOfChords,
  LineOfText,
  List,
  SongText,
  StyledArrow,
  StyledLink,
  TextVerse,
  TrackBar
} from "./styled"
import { SongListButton } from '../../../generalTypes/SongsListButton';
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
            <SongListButton
              onClick={() => dispatch(toggleSelected(song.id))}
              toggleDone
            >
              <span>{song.checked ? "✔" : ""}</span>
            </SongListButton>
            <SongListButton
              onClick={() => dispatch(toggleShowText(song.id))}
              toggleHiden
            >
              <StyledArrow rotate={song.showText} />
            </SongListButton>
          </TrackBar>
          {
            song.showText &&
            <SongText>
              <TextVerse>
                {song.text.split('%').map(verse => (
                  <div>
                    {verse.split('*').map(line => (
                      <LineOfText>{line}</LineOfText>
                    ))}
                    <br />
                  </div>
                ))}
              </TextVerse>

              <Chords>
                {song.chords.split('%').map(verse => (
                  <div>
                    {verse.split('*').map(line => (
                      <LineOfChords>{line}</LineOfChords>
                    ))}
                    <br />
                  </div>
                ))}
              </Chords>
            </SongText>
          }
        </Item>
      ))}
    </List>
  )
}