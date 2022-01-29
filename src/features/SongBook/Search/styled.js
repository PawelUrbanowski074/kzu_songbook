import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Input = styled.input`
  padding: 10px;
  flex-grow: 1;
  border: 1px solid ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
      margin: 10px 0;
  }
`;