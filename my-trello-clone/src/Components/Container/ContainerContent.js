// Módulos externos
import React, { useState } from "react";
import { Collapse, Paper, Typography } from "@material-ui/core";

// Módulos internos
import TitleCard from "../Card/TitleCard";
import { containerContentStyle } from "./Styles";

/* 
    Lida com o conteúdo onde os cartões/listas serão adiconados
    Como se fosse o Canvas deles
*/ 
export default function ContainerContent({ listId, type }){
    // Classe estilizada
    const styleClass = containerContentStyle();

    // Variável de estado => Refere-se a açao de abrir/fechar o container
    const [openContainer, setOpenContainer] = useState(false);

    // Retorno da função
    return (
        <div className={styleClass.root}>
            <Collapse in={openContainer}>
                <TitleCard setOpen={setOpenContainer} listId={listId} type={type} />
            </Collapse>  

            <Collapse in={!openContainer}>            
                <Paper className={styleClass.addNew} elevation={0} onClick={() => setOpenContainer(!openContainer)}>
                    <Typography>
                        {type === "card" ? 
                        "+ Adicionar um cartão" 
                        : 
                        "+ Adicionar outra lista"}
                    </Typography>
                </Paper>
            </Collapse>
        </div>
    );
};