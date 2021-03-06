import { LinkItem, Links, LogoImage, LogoLink, LogoText, Main, StyledLink, Wrapper } from "./styled";
import { Container } from '../../../generalTypes/Container';
import kzu from './kzu.png';
import { toSongs} from '../../routes';

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
              <StyledLink to={toSongs()}>Opcja 2</StyledLink>
            </LinkItem>
            <LinkItem >
              <StyledLink to={toSongs()}>Opcja 3</StyledLink>
            </LinkItem>
          </Links>
        </nav>
      </Main>
    </Container>
  </Wrapper>
);