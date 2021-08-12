// Módulos externos
import  React from "react";
import { AppBar, Button, Toolbar } from "@material-ui/core";
import { topBarStyle } from "./Styles";

/*
    Cabeçalho da página
*/
export default function TopBar({setOpenSideMenu}) {
  // Classe estilizada
    const styleClass = topBarStyle();
  
  // Retorno da função
  // Retorna o Cabeçalho da página
  return(
    <div>
        <AppBar position="static" className={styleClass.header} elevation={20}>
            <Toolbar>
                <h1 className={styleClass.title}>Trello Clone</h1>
                <Button className={styleClass.changeBackgroundBtn} onClick={() => setOpenSideMenu(true)}>Plano de fundo</Button>
            </Toolbar>            
        </AppBar>
    </div>
  )
}