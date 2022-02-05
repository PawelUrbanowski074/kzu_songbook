import styled, { css } from "styled-components";
import { ReactComponent as ArrowIcon } from "./arrow.svg";


export const StyledArrow = styled(ArrowIcon)`
  color: ${({ theme }) => theme.color.white};
  transform: rotate(90deg);
  transition: 0.3s;
  width: 6px;
  height: auto;

  *:disabled & {
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}){
    height: 8px;
  }

  ${({ rotate }) => rotate && css`
    transform: rotate(270deg);
  `}

  ${({ big }) => big && css`
    width: 12px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}){
      width: 10px;
    }
  `}
`;