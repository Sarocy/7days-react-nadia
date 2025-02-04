import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.backgroundColor};
        transition: background-color 0.3s ease;
    }
`;

const lightTheme = {
    backgroundColor: "#C2C6C9",
};

const darkTheme = {
    backgroundColor: "#0F1214",
};

export { Global, lightTheme, darkTheme };
