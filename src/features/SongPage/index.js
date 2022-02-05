import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toSongs } from "../../core/routes"
import { Container } from "../../generalTypes/Container";
import { Header } from "../../generalTypes/Header";
import Section from "../../generalTypes/Section";
import { SongListButton } from "../../generalTypes/SongsListButton";
import { SongText } from "../../generalTypes/SongText";
import Button from "../SongBook/Button";
import { getSongById, toggleSelected } from "../SongBook/songsSlice";
import { OnList, TrackBar } from "./styled";

export const SongPage = () => {
  const { id } = useParams();
  const song = useSelector(state => getSongById(state, id));
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>Szczegóły utworu</Header>
      <Section
        title={song ? song.title : "Nie znaleziono utworu..."}
        extraHeaderContent={
          <Button as="a" href={toSongs()}>Wróć do strony głównej</Button>
        }
        body={!!song && (
          <>
          <TrackBar>
            <OnList>
              <strong>Na liście: </strong> {song.checked ? "Tak" : "Nie"}
            </OnList>
            <SongListButton
              onClick={() => dispatch(toggleSelected(song.id))}
              toggleDone
            >
              <span>{song.checked ? "✔" : ""}</span>
            </SongListButton>

          </TrackBar>
          <SongText id={song.id}/>
          </>
        )}
      />
    </Container>
  )
}