import React, {useContext, useState} from "react";

import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import {makeStyles, fade} from "@material-ui/core/styles";
import StoreAPI from "../../Utils/StoreAPI";

const useStyle = makeStyles((theme) => ({
    card:{      
        width: "280px",          
        margin: theme.spacing(0, 1, 1, 1),
        paddingBottom: theme.spacing(4)
    },
    input:{
        margin: theme.spacing(1)
    },
    btnConfirm:{
        background: "#5AAC44",
        color: "#FFF",
        "&:hover":{
            background: fade("#5AAC44", 0.75)
        }
    },
    confirm:{
        margin: theme.spacing(0, 1, 1, 1),        
    }
}));

export default function InputCard({ setOpen, listId, type }){
    const classes = useStyle();
    const { addMoreCard, addMoreList } = useContext(StoreAPI);
    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };
    const [title, setTitle] = useState("");
    const handleBtnConfirm = () => {
        if(type == "card"){
            addMoreCard(title, listId);
            setTitle("");
            setOpen(false);
        }

        else{
            addMoreList(title);
            setTitle("");
            setOpen(false);
        }
    };

    return(
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase onChange={handleOnChange} 
                    multiline 
                    onBlur={() => setOpen(false)} 
                    fullWidth 
                    inputProps={{
                        className: classes.input
                    }}
                    value={title} 
                    placeholder={
                        type == "card" ? 
                        "Digite o título deste cartão..." : 
                        "Digite o título desta lista..."}
                    />                
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
                    {type == "card" ? 
                    "Adicionar Cartão":
                    "Adicionar Lista"}
                </Button>
                <IconButton>
                    <ClearIcon onClick={() => setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    );
};