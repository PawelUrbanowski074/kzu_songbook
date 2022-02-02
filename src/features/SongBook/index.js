import { useSelector } from "react-redux";
import { Container } from "../../generalTypes/Container";
import { Header } from "../../generalTypes/Header";
import Section from "../../generalTypes/Section";
import { ExampleSongButton } from "./ExampleSongButton";
import Search from "./Search";
import { SongButtons } from "./SongButtons";
import { SongsList } from "./SongsList";

export const SongBook = () => {

  return (
    <Container>
      <Header>Śpiewnik utworów  - KZU</Header>
      <Section
        title="Wyszykiwarka"
        body={<Search />}
        extraHeaderContent={<ExampleSongButton />}
      />
      <Section
        title="Lista utworów"
        extraHeaderContent={<SongButtons />}
        body={<SongsList />}
      />
    </Container>
  );
}