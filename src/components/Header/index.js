import React from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import * as C from "./styles";

const Header = ({ isDarkMode, toggleTheme }) => (
    <C.Container>
        <C.ThemeButton onClick={toggleTheme}>
        {isDarkMode 
            ? <>
                <span className="circle" />
                <LuMoon size={30} />
              </>
            : <>
                <LuSun size={30} />
                <span className="circle" />
              </>
        }
        </C.ThemeButton>

        <C.Title>Bem vindo ao seu app de <br/> controle financeiro!</C.Title>
    </C.Container>
);

export default Header;
