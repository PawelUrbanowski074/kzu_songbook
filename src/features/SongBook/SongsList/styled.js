import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "./arrow.svg";

export const List = styled.ul`
  list-style: none;
  padding-left: 0;
`;

export const Item = styled.li`
  font-size: 18px;
  padding: 10px;
  border-bottom: solid 1px ${({ theme }) => theme.color.silver};
  display: flex;
  flex-direction: column;
  /* align-items: center; */
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
  padding: 0px 15px 0 0;
  flex-grow: 1;
  font-size: 22px;
  font-weight: bold;

  ${({ done }) => done && css`
      text-decoration: line-through;
  `}  
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  border: none;
  justify-self: center;
  transition: 0.3s;
  margin: 0 10px;

  ${({ toggleDone }) => toggleDone && css`
      background-color: ${({ theme }) => theme.color.forestGreen};
  `}

  ${({ toggleHiden }) => toggleHiden && css`
      background-color: ${({ theme }) => theme.color.brown_pod};
  `}

  &:hover {
      filter: brightness(110%);
      cursor: pointer;
  }

  &:active {
      filter: brightness(120%);
  }
`;

// export const StyledLink = styled(Link)`
export const StyledLink = styled.div`
  text-decoration: none;
  transition: 0.3s;

  &:hover {
      filter: brightness(110%);
      cursor: pointer;
  }

  &:active {
      filter: brightness(120%);
  }
`;

export const StyledArrow = styled(ArrowIcon)`
    color: ${({ theme }) => theme.color.white};
    width: auto;
    transform: rotate(90deg);
    transition: 0.3s;
    
    ${({ rotate }) => rotate && css`
      transform: rotate(270deg);
    `}

    *:disabled & {
      color: ${({ theme }) => theme.color.waterloo};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}){
      height: 8px;
    }
`;

export const SongText = styled.article`
  padding: 15px;
  border-top: solid 1px ${({ theme }) => theme.color.silver};

  ${({ toggleHiden }) => toggleHiden && css`
    display: none;
  `}
`;