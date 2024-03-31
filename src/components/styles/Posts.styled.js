import styled, {keyframes} from "styled-components";

const fade = keyframes`
  from {
    color: #16FF00;
  }

  to {
    color: #aaff00;
  }
`

export const StyledPostList = styled.ul`
  list-style-type: none;
`;

export const StyledPostTitle = styled.h2`
  text-transform: capitalize;
  animation: ${fade} 3s linear infinite alternate;
`;

export const StyledPostText = styled.p`
  color: ${({theme}) => theme.main.text};
  width: 1000px;
  font-weight: 400;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  display: inline-block;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.main.button.background};
  color: ${({theme}) => theme.main.button.color};
  font-weight: bold;
  margin: 0 10px;
  padding: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 0.75;
  }
`;
