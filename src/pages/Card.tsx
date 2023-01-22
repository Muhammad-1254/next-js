import React, { useState } from "react";
import classes from '../styles/Card.module.css'

type Data = {
  items: string[];
  setItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const Card = (props: Data) => {
  const [editValue, setEditValue] = useState<string>("");
  const [edit, setEdit] = useState(false);

  const deleteHandler = (index: number) => {
    const updateItems = items.filter((item, i) => {
      return i !== index;
    });
    setItems(updateItems);
  };
  const editInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setEditValue(event.currentTarget.value);
  };

  const editHandler = () => {
    setEdit(true);
  };

  const items = props.items;
  const setItems = props.setItems;

  return (
    <div className={classes.main_div}>
      {items?.map((item, i) => {
        return (
          <div key={i} className={classes.item_div}>
            <input type="checkbox" className={classes.checkbox} />
            <h3 className={classes.item_heading}>{item}</h3>
            <div className={classes.del_btn}>
              {" "}
              <button type="reset" onClick={() => deleteHandler(i)}>
                delete
              </button>
              {/* <button type="reset" onClick={() => editHandler()}>
                edit
              </button> */}
              {/* <div>{edit? <NewItem index={i} editInputHandler={editInputHandler} editValue={editValue} items={items} setItems={setItems} 
               /> :null}</div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
