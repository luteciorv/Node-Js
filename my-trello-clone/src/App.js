// Módulos externos
import  React, { useState } from "react";

// Módulos internos
import Controller from "./Components/Controller/Controller";
import Navigation from "./Components/Nav/Navigation";

/*
  Programa principal
*/
export default function App() {
  // Variável de estado => Refere-se ao plano de fundo
  const [backgroundImage, setBackgroundImage] = useState("https://i.pinimg.com/originals/eb/bc/ed/ebbced209b13a1b433cafbf1cb44e3ce.jpg");

  // Retorno da função
  return(
    <div
    style={{
      backgroundColor: backgroundImage,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  }}>
      <Navigation setBackgroundImage={setBackgroundImage}/>
      <Controller />
    </div>
  )
}
