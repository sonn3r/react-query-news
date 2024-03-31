// ThemeSwitch.jsx

import React from 'react';
import styled from 'styled-components';
import {theme} from "./styles/Themes.js";

const SwitchButton = styled.button`
  background-color: ${({ theme }) => theme.light.background};
  color: ${({ theme }) => theme.light.textColor};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const ThemeSwitch = ({ handleThemeChange }) => {
    return (
        <div>
            <SwitchButton onClick={() => handleThemeChange(theme.light)}>Theme 1</SwitchButton>
            <SwitchButton onClick={() => handleThemeChange(theme.blue)}>Theme 2</SwitchButton>
            <SwitchButton onClick={() => handleThemeChange(theme.dark)}>Theme 3</SwitchButton>
        </div>
    );
};

export default ThemeSwitch;
