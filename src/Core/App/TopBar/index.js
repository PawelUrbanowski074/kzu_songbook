import { LinkItem, Links, LogoImage, LogoLink, LogoText, Main, StyledLink, Wrapper } from "./styled";
import { Container } from '../../../generalTypes/Container';
import kzu from './kzu.png';


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
              <StyledLink>Śpiewnik</StyledLink>
            </LinkItem>
            <LinkItem >
              <StyledLink>Opcja 2</StyledLink>
            </LinkItem>
            <LinkItem >
              <StyledLink>Opcja 3</StyledLink>
            </LinkItem>
          </Links>
        </nav>
      </Main>
    </Container>
  </Wrapper>
);