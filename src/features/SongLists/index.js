import { Container } from "../../generalTypes/Container";
import { Header } from "../../generalTypes/Header";
import Section from "../../generalTypes/Section";
import { SavedLists } from "./SavedLists";

export const SongLists = () => (
  <Container>
    <Header>Zapisane listy utworów</Header>
    <Section
      title="Twoje listy"
      body={<SavedLists />}
    />
  </Container>
);