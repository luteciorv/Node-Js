// Módulos externos
import React, { useContext, useState } from "react";
import { InputBase, Typography } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// Módulos internos
import StoreAPI from "../../Utils/StoreAPI";
import { containerTitleStyle } from "./Styles";

/*
    Lida com o título do container
*/
export default function ContainerTitle({ title, listId }){
    // Variável de estado => Refere-se a ação de abrir/fechar o título do recipiente
    const [open, setOpen] = useState(false);

    // Variável de estado => Refere-se a ação de escrever um novo título
    const [newTitle, setNewTitle] = useState(title);  
    
    // Atualiza o título da lista
    const {updateListTitle} = useContext(StoreAPI);
    
    // Classe estilizada
    const styleClass = containerTitleStyle();
    
    // Chamada quando o título do recipiente muda
    const changeTitle = (e) => {        
        setNewTitle(e.target.value);
    };
    
    // Chamada quando o título do recipiente perde o foco
    const focus = () => {        
        updateListTitle(newTitle, listId);
        setOpen(false);        
    };

    // Retorno da função
    return(
        <div>
            {open?(
                <div>
                    <InputBase onChange={changeTitle} autoFocus value={newTitle} 
                    inputProps={{
                        className: styleClass.titleInput
                    }}
                    fullWidth onBlur={focus}
                    />
                </div>
                ) 
                : 
                (
                <div className={styleClass.titleContainer}>
                    <Typography onClick={() => setOpen(!open)} className={styleClass.title}>{title}</Typography>
                    <MoreHorizIcon/>
                </div>
                )
            }                    
        </div>
    );
};