import React, { useState } from "react";

import { InputBase, Typography } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { findByLabelText } from "@testing-library/react";

const useStyle = makeStyles((theme) => ({
    editableTitle:{
        flexGrow: 1,
        fontSize: "1.2rem",
        fontWeight: "bold"        
    },
    editableTitleContainer:{
        margin: theme.spacing(1),
        display: "flex"        
    },
    input:{
        fontSize: "1.2rem",
        fontWeight: "bold",
        margin: theme.spacing(1),
        "&:focus":{
            background: "#ddd"
        }
    }
}));

export default function Title(){
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    return(
        <div>
            {open?(
                <div>
                <InputBase 
                autoFocus
                value="A ser feito" inputProps={{
                    className: classes.input
                }}
                fullWidth
                onBlur={() => setOpen(!open)}
                />
                </div>
                ) : (
                <div className={classes.editableTitleContainer}>
                <Typography onClick={() => setOpen(!open)} className={classes.editableTitle}>A ser feito</Typography>
                <MoreHorizIcon></MoreHorizIcon>
                </div>
                )
            }                    
        </div>
    );
};