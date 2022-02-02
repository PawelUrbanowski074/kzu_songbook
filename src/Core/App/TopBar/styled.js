import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.brown_pod};
  line-height: 1;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap:wrap;
  font-family: 'Caveat', cursive;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 80px;
  width: auto;

  @media(max-width: ${({theme }) => theme.breakpoint.mobileMax}) {
    height: 60px;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileVerticalMax}) {
    height: 50px;
  }
`;

export const LogoText = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-left: 16px;

  @media(max-width: ${({theme }) => theme.breakpoint.tabletVerticalMax}) {
    margin-left: 8px;
    font-size: 22px;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 16px;
    font-size: 18px;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileVerticalMax}) {
    margin-left: 8px;
    font-size: 13px;
  }
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-left: 250px;
  
  @media(max-width: ${({theme }) => theme.breakpoint.tabletHorizontalMax}) {
    margin-left: 200px;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.tabletVerticalMax}) {
    margin-left: 130px;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 40px;
  }
`;

export const LinkItem = styled.li`
  margin-left: 8px;

  @media(max-width: ${({theme }) => theme.breakpoint.mobileMax}) {
    margin-left: 4px;
  }
`;


export const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  border: 1px solid transparent;
  transition: border-color: 0.3s;
  display: block;
  border-radius: 24px;
  padding: 14px 24px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 600;

  &.active, &:hover {
    border-color: currentColor;
  }

  @media(max-width: ${({theme }) => theme.breakpoint.mobileVerticalMax}) {
    font-size: 16px;
    padding: 8px 12px;
  }
`;