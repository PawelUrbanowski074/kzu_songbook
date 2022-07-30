import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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
  flex-grow: 2;
  font-size: 22px;
  font-weight: 600;
  /* max-width: 70%; */

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

export const SideContainer = styled.div`
  width: 180px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 140px;
    font-size: 14px;
  }
`;