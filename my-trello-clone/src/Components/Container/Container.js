// Métodos externos
import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { Draggable, Droppable } from "react-beautiful-dnd";

// Métodos internos
import ContainerTitle from "./ContainerTitle";
import Card from "../Card/Card.js";
import ContainerContent from "./ContainerContent";
import { containerStyle } from "./Styles";

/*
    Lida com os containers, a estrutura deles
*/
export default function Container({ list, index }){
    // Classe estilizada
    const styleClass = containerStyle();

    // Retorno da função
    return (
        <Draggable draggableId={list.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef}>
                    <Paper className={styleClass.root} {...provided.dragHandleProps}>
                        <CssBaseline/>
                        <ContainerTitle title={list.title} listId={list.id} />
                        <Droppable droppableId={ list.id }>
                            {(provided) => (
                                <div ref={provided.innerRef}{...provided.droppableProps} className={styleClass.cardContainer}>
                                    {list.cards.map((card, index) => (<Card key={card.id} card={card} index={index} />)) } 
                                    {provided.placeholder}
                                </div>
                            )}                    
                        </Droppable>

                        <ContainerContent listId={list.id} type="card" />                                             
                    </Paper>
                </div>
            )}           
        </Draggable>
    );
};