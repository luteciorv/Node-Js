import React from "react";

import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import {makeStyles, fade} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    card:{                
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

export default function InputCard({setOpen}){
    const classes = useStyle();
    
    return(
        <div>
            <div>
                <Paper className={classes.card}>
                    <InputBase multiline onBlur={() => setOpen(false)} fullWidth inputProps={{
                        className: classes.input
                    }} 
                    placeholder="Digite o título deste cartão..."
                    />                
                </Paper>
            </div>
            <div className={classes.confirm}>
                <Button className={classes.btnConfirm} onClick={() => setOpen(false)}>Adicionar Cartão</Button>
                <IconButton>
                    <ClearIcon onClick={() => setOpen(false)}/>
                </IconButton>
            </div>
        </div>
    );
};