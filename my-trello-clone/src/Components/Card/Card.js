// Módulos externos
import React from "react";
import {Paper} from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

// Módulos internos
import { cardStyle } from "./Styles";

/*
    Lida com os cartões
    Interação de arrastar e soltar
*/
export default function Card({ card, index }) {
    // Classe estilizada
    const styleClass = cardStyle();

    // Retorno da função
    return (
        <Draggable draggableId={card.id} index={index}>
            {(provided) => (
                <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                    <Paper  className={styleClass.card}>{card.title}</Paper>
                </div>
            )}        
            
        </Draggable>
    );  
};