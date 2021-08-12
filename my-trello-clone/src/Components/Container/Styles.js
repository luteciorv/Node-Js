// Módulos externos
import { makeStyles, alpha } from "@material-ui/core/styles";

// Classe de estilização => Container
export const containerStyle = makeStyles((theme) => ({
    // Corpo do container
    root:{
        minWidth: "300px",        
        backgroundColor: "rgba(235, 236, 240, 0.9)",
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(4),
        boxShadow: "0px 2px 8px 5px rgba(0, 0, 0, 0.3)"
    },
    // Cartões atrelados ao container
    cardContainer:{
        marginTop: theme.spacing(1)
    }
}));

// Classe de estilização => ContainerContent
export const containerContentStyle = makeStyles((theme) => ({
    // Corpo do container
    root:{
        width: "300px",
        marginTop: theme.spacing(4)
    },
    // Botão de adicionar novo cartão/lista
    addNew:{
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(0, 1, 1, 1),        
        color: "#5e6c84",               
        backgroundColor: "rgba(235, 236, 240, 0.9)",
        "&:hover":{
            backgroundColor: alpha("rgb(200, 200, 200)", 0.8)
        }
    }
}));

// Classe de estilização => ContainerTitle
export const containerTitleStyle = makeStyles((theme) => ({
    // Título
    title:{
        flexGrow: 1,
        padding: theme.spacing(1, 0, 0, 1),
        fontSize: "18px",         
    },
    // Container do título
    titleContainer:{
        margin: theme.spacing(1),
        display: "flex"        
    },
    // Escrever novo título
    titleInput:{
        fontSize: "1.2rem",
        fontWeight: "bold",
        padding: theme.spacing(1, 0, 0, 1),
        "&:focus":{
            background: "#ddd"
        }
    }
}));