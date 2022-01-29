import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin: 20px 0;
  background: ${({ theme }) => theme.color.white};
  box-shadow:  0 0 5px ${({ theme }) => theme.color.alto};
  border-radius: 5px;
`;

export const Header = styled.header`
  border-bottom: 2px solid ${({ theme }) => theme.color.silver};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;