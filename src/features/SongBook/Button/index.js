import styled from "styled-components";

export default styled.button`
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.brown_pod};
  border-style: none;
  padding: 5px 5px;
  transition: 0.3s;
  font-weight: 600;

  &:hover:not([disabled]) {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active:not([disabled]) {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: not-allowed;
  }
`;