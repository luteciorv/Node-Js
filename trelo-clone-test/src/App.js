import  React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./Components/Wrapper";
import Navigation from "./Components/Nav/Navigation";

const useStyle = makeStyles((theme) => ({

}));

export default function App() {
  const classes = useStyle();
  const [backgroundImage, setBackgroundImage] = useState("green");

  return(
    <div className={classes.root}
    style={{
      backgroundColor: backgroundImage,
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
  }}>
      <Navigation setBackgroundImage={setBackgroundImage}/>
      <Wrapper />
    </div>
  )
}
