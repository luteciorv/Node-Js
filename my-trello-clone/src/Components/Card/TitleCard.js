// Módulos externos
import React, { useContext, useState } from "react";
import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

// Módulos internos
import StoreAPI from "../../Utils/StoreAPI";
import { titleCardStyle } from "./Styles";

/*
    Lida com título do cartão a ser criado
*/
export default function TitleCard({ setOpen, listId, type }){
    // Classe estilizada
    const styleClass = titleCardStyle();

    // Funções => Adicionar novo cartão | Adicionar nova lista
    const { addNewCard, addNewList } = useContext(StoreAPI);

    // Chamada quando o usuário digitar o título do novo cartão/lista
    const onTitleChange = (entry) => {        
        setTitle(entry.target.value);
    };

    // Variável de estado => Refere-se ao título do cartão/lista
    const [title, setTitle] = useState("");
    
    // Chamada quando o usuário adicionar um cartão ou lista
    const addNew = () => {        
        // Caso o usuário não escreva nada
        if(title === ""){
            setOpen(false);
            return;
        }

        // Adicionar novo cartão
        if(type === "card"){            
            addNewCard(title, listId);
            setTitle("");
            setOpen(false);
        }

        // Adicionar nova lista
        else{
            addNewList(title);
            setTitle("");
            setOpen(false);
        }
    };

    // Retorno da função
    return(
        <div>
            <div>
                <Paper className={styleClass.card}>
                    <InputBase onChange={onTitleChange} multiline onBlur={() => setOpen(false)} fullWidth 
                    inputProps={{
                        className: styleClass.title
                    }}
                    value={title} placeholder={
                        type === "card" ? 
                        "Digite o título deste cartão..." 
                        : 
                        "Digite o título desta lista..."}
                    />                
                </Paper>
            </div>
            
            <div className={styleClass.addNewDiv}>
                <Button className={styleClass.addNewBtn} onClick={addNew}>
                    {type === "card" ? 
                    "Adicionar Cartão"
                    :
                    "Adicionar Lista"}
                </Button>
                <IconButton>
                    <ClearIcon onClick={() => setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    );
};