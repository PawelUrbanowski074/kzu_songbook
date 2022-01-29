import { SectionWrapper, Header, Title, Body } from './styled';

const Section = ({ title, extraHeaderContent, body }) => (
  <SectionWrapper>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </SectionWrapper>
);

export default Section;