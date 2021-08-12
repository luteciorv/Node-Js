import  React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer, Grow } from "@material-ui/core";
import colors from "../../Utils/Color";
import {getImages} from "../../Utils/ImageAPI";

const useStyle = makeStyles((theme) => ({
    drawer:{
        width: "400px"
    },
    menu:{
        marginTop: theme.spacing(2),
        display: "flex",        
        justifyContent: "space-around"
    },
    box:{
        width: "45%",
        height: "90px",        
        borderRadius: "9px",
        marginBottom: theme.spacing(2)
    },
    optionContainer:{
        marginTop: theme.spacing(2),
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }
}));

export default function SideMenu({openSideMenu, setOpenSideMenu, setBackgroundImage}) {
    const classes = useStyle();
  
    const [openOptionColor, setOpenOptionColor] = useState(false);
    const [openOptionImage, setOpenOptionImage] = useState(false);

    const [images, setImage] = useState([]);

    const getListOfImage = async () => {
        const listOfImages = await getImages();
        setImage(listOfImages);
    }

    useEffect(() => {
        getListOfImage();
    }, [])

    return(
    <div>
        <Drawer open={openSideMenu} anchor="right" onClose={() => setOpenSideMenu(false)}>
            <div className={classes.drawer}>
                <div className={classes.menu}>
                    <div className={classes.box}
                    style={{
                        backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} onClick={() => setOpenOptionImage(true)}
                    ></div>
                    <div className={classes.box}
                    style={{
                        backgroundImage: "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators-hero.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }} onClick={() => {
                        setOpenOptionColor(true);
                        setOpenOptionImage(false);
                    }}
                    ></div>
                </div>      

                {openOptionImage ? 
                    <Grow in={openOptionImage}>
                        <div className={classes.optionContainer}>
                            {images.map((image, index) => {
                                return (
                                    <div key={index} className={classes.box}
                                    style={{
                                        backgroundImage: `url(${image.thumb})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover"
                                    }}
                                    onClick={() => setBackgroundImage(image.url)}
                                    ></div>
                                )
                            })}
                        </div>
                    </Grow>
                    :
                    <Grow in={openOptionColor}>
                        <div className={classes.optionContainer}>
                            {colors.map((color, index) => {
                                return (
                                    <div key={index} className={classes.box}
                                    style={{
                                        backgroundColor: color
                                    }}
                                    onClick={() => setBackgroundImage(color)}
                                    ></div>
                                )
                            })}
                        </div>
                    </Grow>      
                }                                       
            </div>            
        </Drawer>
    </div>
    )
}