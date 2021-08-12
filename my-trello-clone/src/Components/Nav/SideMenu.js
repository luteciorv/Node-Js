// Métodos externos
import  React, { useEffect, useState } from "react";
import { Drawer, Grow } from "@material-ui/core";

// Métodos internos
import colors from "../../Utils/Colors";
import { getImages } from "../../Utils/ImageAPI";
import { sideMenuStyle } from "./Styles";

/*
    Lida com o menu lateral
*/
export default function SideMenu({openSideMenu, setOpenSideMenu, setBackgroundImage}) {
    // Classe estilizada
    const styleClass = sideMenuStyle();
     
    // Variável de estado => Refere-se plano de fundo, um lida com as cores e outro as imagens
    const [backgroundColor, setbackgroundColor] = useState(false);
    const [backgroundImage, setbackgroundImage] = useState(false);

    // Variável de estado => Refere-se a imagem escolhida como pano de fundo
    const [images, setImage] = useState([]);

    // Retorna uma lista com imagens aleatórias da API
    const getRandomImages = async () => {
        const listOfImages = await getImages();
        setImage(listOfImages);
    }

    // Atualiza o local que irá comportar as imagens aleatórias da API
    useEffect(() => {
        getRandomImages();
    }, [])

    // Função de retorno
    return(
    <div>
        <Drawer open={openSideMenu} anchor="right" onClose={() => setOpenSideMenu(false)}>
            <div className={styleClass.container}>
                <div className={styleClass.sideMenu}>                    
                    <div className={styleClass.iconsFrame}
                    style={{                        
                        backgroundImage: "url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        boxShadow: "0px 2px 10px 5px rgba(0, 0, 0, 0.5)"
                    }} onClick={() => setbackgroundImage(true)}
                    ></div>                    
                    <div className={styleClass.iconsFrame}
                    style={{
                        backgroundImage: "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators-hero.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        boxShadow: "0px 2px 10px 5px rgba(0, 0, 0, 0.5)"
                    }} onClick={() => {
                        setbackgroundColor(true);
                        setbackgroundImage(false);
                    }}
                    ></div>
                </div>      

                {backgroundImage ? 
                    <Grow in={backgroundImage}>
                        <div className={styleClass.iconsFrameContainer}>
                            {images.map((image, index) => {
                                return (
                                    <div key={index} className={styleClass.iconsFrame}
                                    style={{
                                        backgroundImage: `url(${image.thumb})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover",
                                        boxShadow: "0px 2px 8px 5px rgba(0, 0, 0, 0.3)"
                                    }}
                                    onClick={() => setBackgroundImage(image.url)}
                                    ></div>
                                )
                            })}
                        </div>
                    </Grow>
                    :
                    <Grow in={backgroundColor}>
                        <div className={styleClass.iconsFrameContainer}>
                            {colors.map((color, index) => {
                                return (
                                    <div key={index} className={styleClass.iconsFrame}
                                    style={{
                                        backgroundColor: color,
                                        boxShadow: "0px 2px 8px 5px rgba(0, 0, 0, 0.3)"
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