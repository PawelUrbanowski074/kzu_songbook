import styled from "styled-components";

export const Header = styled.header`
    font-size: 36px;
    margin-top: 56px;
    margin-bottom: 0;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileVerticalMax}) {
        font-size: 28px;
        margin-top: 20px;
        text-align: center;
    }
`;