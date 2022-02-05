import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../generalTypes/Container";
import { Header } from "../../generalTypes/Header";
import Section from "../../generalTypes/Section";
import { SongListButton } from "../../generalTypes/SongsListButton";
import { getSongById, toggleSelected } from "../SongBook/songsSlice";

export const SongPage = () => {
  const { id } = useParams();
  const song = useSelector(state => getSongById(state, id));
  const dispatch = useDispatch();

  return (
    <Container>
      <Header>Szczegóły utworu</Header>
      <Section 
        title={song ? song.title : "Nie znaleziono utworu..."}
        body={!!song && (
          <>
            <strong>Na liście: </strong> {song.checked ? "Tak" : " Nie"}
            <SongListButton
              onClick={() => dispatch(toggleSelected(song.id))}
              toggleDone
            >
              <span>{song.checked ? "✔" : ""}</span>
            </SongListButton>
          </>
        )}
      />
    </Container>
  )
}