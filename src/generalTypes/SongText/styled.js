import styled from "styled-components";

export const Text = styled.article`
  padding: 15px;
  padding-left: 0 ;
  border-top: solid 1px ${({ theme }) => theme.color.silver};

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    padding: 5px;
  }

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 0 10px;
  grid-template-areas:
    "text chords";
`;


export const TextVerse = styled.div`
  padding-bottom: 5px;
  grid-area: text;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    font-size: 12px;
  }
`;
export const LineOfText = styled.div`
  margin: 0;
  padding: 0;
  line-height: 1.1;
`;

export const Chords = styled.div`
  grid-area: chords;
  font-weight: 600;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    font-size: 12px;
  }
`;

export const LineOfChords = styled.div`
  margin: 0;
  padding: 0;
  line-height: 1.1;
`;