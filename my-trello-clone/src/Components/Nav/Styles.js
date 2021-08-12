// Módulos externos
import { makeStyles } from "@material-ui/core/styles";

// Classe de estilização => SideMenu
export const sideMenuStyle = makeStyles((theme) => ({
    // Container do menu lateral
    container:{
        width: "400px",                
        backgroundColor: "rgba(160, 160, 160, 1)",        
    },
    // Menu lateral
    sideMenu:{
        marginTop: theme.spacing(3),
        display: "flex",        
        justifyContent: "space-around"        
    },
    // Ícones de cada imagem/cor
    iconsFrame:{
        width: "45%",
        height: "90px",        
        borderRadius: "10px",
        marginBottom: theme.spacing(3)
    },
    // Ícoens das imagens/cores geradasa
    iconsFrameContainer:{
        marginTop: theme.spacing(5),
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
}));

// Classe de estilização => TopBar
export const topBarStyle = makeStyles((theme) => ({
    header:{
        background: "rgba(0, 0, 0, 0.5)",
        minHeight: "50px",
        height: "70px"
    },
    title:{
        flexGrow: 1,
        textAlign: "center",
        fontFamily: "Arial Black",
        color: "rgba(255, 255, 255, 0.65)"
    },
    changeBackgroundBtn:{
        color:"#FFF",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        fontFamily: "Arial"        
    }
}));