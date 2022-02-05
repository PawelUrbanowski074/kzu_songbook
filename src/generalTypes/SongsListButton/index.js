import styled, { css } from "styled-components";

export const SongListButton = styled.button`
  color: ${({ theme }) => theme.color.white};
  width: 30px;
  height: 30px;
  border: none;
  justify-self: center;
  transition: 0.3s;
  margin: 0 10px;
  font-size: 18px;

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
  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
    width: 20px;
    height: 20px;
    font-size: 12px;
  }
`;