// Módulos externos
import { makeStyles, alpha } from "@material-ui/core/styles";

// Classe de estilização => TitleCard
export const titleCardStyle = makeStyles((theme) => ({
    // Cartão
    card:{      
        width: "280px",          
        margin: theme.spacing(0, 1, 1, 1),
        paddingLeft: 4,
        paddingBottom: theme.spacing(4),        
    },
    title:{
        margin: theme.spacing(1)
    },
    // Botão => Adicionar novo cartão/lista
    addNewBtn:{
        background: "#5AAC44",
        color: "#FFF",
        "&:hover":{
            background: alpha("#5AAC44", 0.75)
        },
        margin: theme.spacing(1)
    },
    // Div => Aidicionar novo cartão/lista
    addNewDiv:{
        margin: theme.spacing(0, 1, 1, 0),        
    }
}));

// Classe de estilização => CardStyle
export const cardStyle = makeStyles((theme) => ({
    // Cartão
    card:{
        padding: theme.spacing(1, 1, 1, 2),
        margin: theme.spacing(1),        
    }
}));