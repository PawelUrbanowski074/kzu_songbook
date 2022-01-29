import { Container } from "../../generalTypes/Container";
import { Header } from "../../generalTypes/Header";
import Section from "../../generalTypes/Section";
import Search from "./Search";

export const SongBook = () => (
  <Container>
    <Header>Śpiewnik utworów  - KZU</Header>
    <Section
      title="Wyszykiwarka"
      body={<Search />}
    />
  </Container>
);