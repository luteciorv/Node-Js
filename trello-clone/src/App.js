import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";

// Módulos
import Header from "./Components/Header";
import Board from "./Components/Board";

function App() 
{
  return (
    <DndProvider backend={HTML5Backend}>
      <Header></Header>
      <Board></Board>
      
      <GlobalStyle> </GlobalStyle>      
    </DndProvider>
  );
}

export default App;
