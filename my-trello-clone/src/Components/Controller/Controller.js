// Métodos externos
import  React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Métodos internos
import ContainerContent from "../Container/ContainerContent";
import Store from "../../Utils/Store"
import StoreAPI from "../../Utils/StoreAPI.js";
import Container from "../Container/Container.js";
import { controllerStyle } from "./Styles";

/*
  Lida com a maior parte da lógica do programa
  Listas dos cartões, das novas listas, etc
*/
export default function Controller() {
  // Classe estilizada
  const styleClass = controllerStyle();

  // Variável de estado => Refere-se as informações de um cartão
  const [data, setData] = useState(Store);

  // Adiciona um novo cartão a uma dada lista
  const addNewCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title
    };

    const list = data.lists[listId];    
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      }
    };

    setData(newState);
  };

  // Adicionar uma nova lista
  const addNewList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title,
      cards: []
    };

    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList
      }
    };

    setData(newState);
  };

  // Atualiza o título de uma lista
  const updateListTitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = title;

    const newState = {
     ...data,
      lists: {
        ...data.lists,
        [listId]: list
      }
    };

    setData(newState);
  };

  // Ao terminar de arrastar um cartão
  const onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result;
    
    if(!destination){
      return;
    }

    if(type === "list"){
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter((card) => card.id === draggableId)[0];

    if(source.droppableId === destination.droppableId){
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:destinationList
        }
      };

      setData(newState);
    }

    else{
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists:{
          ...data.lists,
          [sourceList.id]:sourceList,
          [destinationList.id]:destinationList 
        }
      };

      setData(newState);
    }
  };

  // Retorno da função
  return(
    <StoreAPI.Provider value={{ addNewCard, addNewList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided) => (
            <div className={styleClass.root} ref={provided.innerRef} {...provided.droppableProps}>
              {data.listIds.map((listId, index) => {
                const list = data.lists[listId];
                return <Container list={list} key={listId} index={index} />
              })}
              <ContainerContent type="list" />      
              {provided.placeholder}
            </div>
          )}          
        </Droppable>
      </DragDropContext>
    </StoreAPI.Provider>    
  );
}
