import  React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Toolbar } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    appBar:{
        background: "None"
    },
    title:{
        flexGrow: 1
    },
    btn:{
        color:"#FFF",
        backgroundColor: "#000"
    }
}));

export default function TopBar({setOpenSideMenu}) {
  const classes = useStyle();
  
  return(
    <div>
        <AppBar position="static" className={classes.appBar} elevation={0}>
            <Toolbar>
                <h1 className={classes.title}>Tarefas diárias</h1>
                <Button className={classes.btn} onClick={() => setOpenSideMenu(true)}>Alterar plano de fundo</Button>
            </Toolbar>            
        </AppBar>
    </div>
  )
}