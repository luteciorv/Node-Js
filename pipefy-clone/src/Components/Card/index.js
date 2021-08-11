import React, {useRef} from "react";
import {useDrag, useDrop} from "react-dnd";

import {Container, Label} from "./styles";

export default function Card({ data, index }){
    const ref = useRef();

    // Arrastar o cartão
    const [{ isDragging }, dragRef] = useDrag({
        type: "CARD",
        item: {index},
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    // Soltar o cartão
    const [, dropRef] = useDrop({
        accept: "CARD",
        hover(item, monitor){
            console.log(item.index);
            console.log(index);
        }
    });

    dragRef(dropRef(ref));

    return(
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map(label => <Label key={label} color={label}></Label>)}                
            </header>

            <p>{data.content}</p>
            { data.user && <img src={data.user} alt=""></img>}
        </Container>
    );
}