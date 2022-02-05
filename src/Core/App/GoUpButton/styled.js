import styled, { ThemeConsumer } from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  /* margin: auto 0; */
  padding: 0 0;
  display: block;
  text-align:center;

  background-color:${({ theme }) => theme.color.regent};
  opacity: 0.7;
  border: none;
  border-radius: 3px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 35px;
    height: 35px;
  }
`;