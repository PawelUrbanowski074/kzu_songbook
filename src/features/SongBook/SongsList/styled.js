import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 18px;
  padding: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.color.silver};
  display: flex;
  flex-direction: column;
  word-break: break-word; 

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const TrackBar = styled.div`
  display: flex;
  align-items: center;
  word-break: break-word; 
  padding: 5px 0;
`;

export const Content = styled.span`
  padding: 0 15px 0 0;
  flex-grow: 1;
  font-size: 22px;
  font-weight: 600;

  ${({ done }) => done && css`
    text-decoration: line-through;
  `}  
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    font-size: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.3s;
  color: ${({ theme }) => theme.color.brown_pod};


  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }
`;

export const SongText = styled.article`
  padding: 15px;
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