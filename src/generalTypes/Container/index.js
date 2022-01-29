import styled from "styled-components";

export const Container = styled.div`
  width: 1368px;
  max-width: calc(100% - 2 * 40px);
  margin: auto;

  @media(max-width: ${({theme }) => theme.breakpoint.mobileMax}) {
    max-width: calc(100% - 2 * 20px);
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileVerticalMax}) {
    max-width: calc(100% - 2 * 12px);
  }
`;