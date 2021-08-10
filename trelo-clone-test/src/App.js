import  React, { useState } from "react";

import {v4 as uuid} from "uuid";
import InputContainer from "./Components/Input/InputContainer.js";
import { makeStyles } from "@material-ui/core/styles";

import List from "./Components/List/List.js";
import Store from "./Utils/Store";
import StoreAPI from "./Utils/StoreAPI.js";

const useStyle = makeStyles((theme) => ({
  root:{    
    display: "flex",
    minHeight: "100vh",
    background: "green",
    width: "100%"
  }
}))

export default function App() {
  const [data, setData] = useState(Store);
  const classes = useStyle();
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title
    };

    const list = data.lists[listId];
    list.cards = [... list.cards, newCard];

    const newState = {
      ...data,
      lists:{
        ...data.lists,
        [listId]: list,
      }
    };

    setData(newState);
  };

  const addMoreList = (title) => {
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

  return(
    <StoreAPI.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <div className={classes.root}>
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />
        })}
        <InputContainer type="list" />      
    </div>
    </StoreAPI.Provider>    
  );
}
