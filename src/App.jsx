import React from 'react';
import {ThemeProvider} from "styled-components";
import Header from "./components/Header.jsx";
import GlobalStyles from "./components/styles/Global.js";
import Posts from "./components/Posts.jsx";
import {theme} from "./components/styles/Themes.js";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header/>
            <Posts/>
        </ThemeProvider>
    );
};

export default App;
