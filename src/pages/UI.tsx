import React, { useState } from "react";
import Card from "./Card";
import classes from '../styles/UI.module.css'


const UI = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);
  const removeAll = () => {
    setItems([]);
  };
  const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };
  const buttonHandler = () => {
    if (inputValue.length < 1) {
      alert("input length must be greater than one");
    } else {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };
const isEnterKeyPressed= (event: React.KeyboardEvent )=>{

if(event.key === "Enter"){
  buttonHandler()
}}
  return (
    <div className={classes.main_div}>
      <div className={classes.input_div}>
      <div >
        <input
          type="text"
          placeholder="enter your to here"
          value={inputValue}
          onChange={inputHandler}
          onKeyDown={isEnterKeyPressed}
        />
      </div>
      <div className="btn-div">
        <button type="submit" onClick={() => buttonHandler() }>
          Add
        </button>
      </div></div>
      <div className={classes.card_div}>
        <Card items={items} setItems={setItems} /> <div />
        <div className={classes.btn_div_removeAll}>
          {items.length > 1 ? (
            <button type="submit" onClick={() => removeAll()}>
              Remove All
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default UI;
