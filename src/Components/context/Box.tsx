import {ThemeContext} from "./ThemeContext";
import {useContext} from "react";

const Box = () => {

  const theme = useContext(ThemeContext);
  return(
      <div style={{backgroundColor: theme.secondary.main, color: theme.secondary.text}}>
        <h1>Hello, I am a theme context</h1>
        <h2>This is generated from a predefined theme values and theme context</h2>
      </div>
  )


}
export default Box