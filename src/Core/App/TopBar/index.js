import { LinkItem, Links, LogoImage, LogoLink, LogoText, Main, StyledLink, Wrapper } from "./styled";
import { Container } from '../../../generalTypes/Container';
import kzu from './kzu.png';
import { toNewList, toSavedLists, toSongs} from '../../routes';

export const TopBar = () => (
  <Wrapper>
    <Container>
      <Main>
        <LogoLink to="/">
          <LogoImage src={kzu} />
          <LogoText> Kapucyński <br />Zespół <br />Uwielbienia</LogoText>
        </LogoLink>
        <nav>
          <Links >
            <LinkItem >
              <StyledLink to={toSongs()}>Śpiewnik</StyledLink>
            </LinkItem>
            <LinkItem >
              <StyledLink to={toSavedLists()}>Zapisane Listy</StyledLink>
            </LinkItem>
            <LinkItem >
              <StyledLink to={toNewList()}>Nowa lista</StyledLink>
            </LinkItem>
          </Links>
        </nav>
      </Main>
    </Container>
  </Wrapper>
);