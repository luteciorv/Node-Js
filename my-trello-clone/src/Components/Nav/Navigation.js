// Módulos externos
import  React, { useState } from "react";

// Módulos internos
import SideMenu from "./SideMenu";
import TopBar from "./TopBar";

/*
    Lida com a barra de navegação superior
    Diz quando o menu lateral deve ser aberto ou não
*/
export default function Navigation({ setBackgroundImage }) {
    // Variável de estado => Refere-se ao menu lateral
    const [openSideMenu, setOpenSideMenu] = useState(false);

    // Retorno da função
    return(
    <div>
        <TopBar setOpenSideMenu={setOpenSideMenu}/>
        <SideMenu openSideMenu={openSideMenu} setOpenSideMenu={setOpenSideMenu} setBackgroundImage={setBackgroundImage}/>
    </div>
    )
}