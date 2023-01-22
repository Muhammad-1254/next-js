import React from "react";
import UI from './UI'
import classes from '../styles/index.module.css'

const App = ()=>{
return(
  <div className={classes.main_div}>
    <h1 className="main-heading">AWESOME TODO APP</h1>
    <UI />
  </div>
)

}

export default App ;