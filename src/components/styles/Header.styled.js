import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0;
  padding: 0;
  background-color: ${({theme}) => theme.main.header.background};
  color: ${({theme}) => theme.main.header.color};
  width: 100%;
  height: 100px;
  
  h1 {
    margin: 0 0 0 20px;
    padding: 20px;
    font-weight: 800;
  }
`;
