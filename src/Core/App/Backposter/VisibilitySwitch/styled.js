import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  color: ${({ theme }) => theme.color.white};
  transition: ease-in-out 0.3s;

  ${({ isPhotoVisible }) => isPhotoVisible && css`
    color: ${({ theme }) => theme.color.black};
  `}
`;


export const Button = styled.button`
  cursor: pointer; 
  border: none;
  background: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-size: 12px; 
  margin: 0 12px;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;