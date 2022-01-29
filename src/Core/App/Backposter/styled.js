import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.black};
`;

export const Image = styled.div`
  background-image: url("${({ url }) => url}");
  height: 800px;
  background-size: cover;
  background-position: 0% 30%;
  margin-bottom: 64px;

  @media(max-width: ${({ theme }) => theme.breakpoint.laptopMax}) {
    height: 55vw;
    margin-bottom: 56px;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-bottom: 8px;
  }
`;

export const Vignette = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
  background: linear-gradient(270deg, #000000 5%, 
      rgba(0, 0, 0, 0.873268) 7%, 
      rgba(0, 0, 0, 0.720529) 8%, 
      rgba(0, 0, 0, 0.294577) 10%, 
      rgba(0, 0, 0, 0.159921) 12%,
      rgba(0, 0, 0, 0) 15%), 
    linear-gradient(90deg, #000000 5%, 
      rgba(0, 0, 0, 0.873268) 7%, 
      rgba(0, 0, 0, 0.720529) 8%, 
      rgba(0, 0, 0, 0.294577) 10%, 
      rgba(0, 0, 0, 0.159921) 12%,
      rgba(0, 0, 0, 0) 15%), 
    linear-gradient(180deg, #000000 0%, 
      rgba(0, 0, 0, 0.689555) 4.66%, 
      rgba(0, 0, 0, 0.439033) 9.34%, 
      rgba(0, 0, 0, 0.20628) 15.16%, 
      rgba(0, 0, 0, 0) 24.22%), 
    linear-gradient(189.44deg, 
      rgba(0, 0, 0, 0) 58.48%, 
      rgba(0, 0, 0, 0.106473) 63.17%, 
      rgba(0, 0, 0, 0.235359) 68.85%, 
      rgba(0, 0, 0, 0.492821) 78.08%, 
      rgba(0, 0, 0, 0.740286) 85.86%,
       #000000 92.87%);

  @media(max-width: ${({ theme }) => theme.breakpoint.laptopMax}) {
    padding: 8px;
  }
`;