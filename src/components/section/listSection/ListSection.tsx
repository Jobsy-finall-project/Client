import React, { useState } from "react";
import ListSectionStyled from "./ListSectionStyled";
import Button from '../../common/button/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { ListItemIcon } from "@mui/material";


interface ListSectionProps {
  title: string;
  content: string[];
  addBtnText: string;
}
const ListSection: React.FC<ListSectionProps> = (props) => {

  const [items, setItems] = useState([props.content]);
  const [newItem, setNewItem] = useState("");
  const [addItemInput, setAddItemInput] = React.useState(false);


  function handleAddItemChange(event: any) {
    setNewItem(event.target.value);
  }

  function handleAddItemClick() {
    if (newItem !== "") {
      setItems([...items, newItem] as any);
    }
    setNewItem("");
    setAddItemInput(!addItemInput);
  }


  function showItemInput() {
    setAddItemInput(!addItemInput);
  }


  function handeleDeleteItem() {

  }

  return (
    <ListSectionStyled>
      <List className="listContainer" sx={{ marginLeft: "100px" }}>
        <p className="commentTitle" >{props.title}:</p>

        {items?.map(currItem => {
          return (
            <ListItem>
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary={currItem} />
              </ListItemButton>
              <DeleteIcon onClick={handeleDeleteItem} />
            </ListItem>
          )
        })}

        <div className="addComments">
        <Button
            className="addBtn"
            onClick={showItemInput}
            title="Add comments"
            color=""
            height="50px"
            width="170px"
            top="32px"
            left="100px"
          />
          {addItemInput ? (
            <div className="addCommentInput">
              <input
                className="input-comment"
                type="text"
                value={newItem}
                onChange={handleAddItemChange}
              />
              <Button
                className="addBtn"
                onClick={handleAddItemClick}
                title="Add"
                color=""
                height="50px"
                width="170px"
                top="32px"
                left="100px"
              />
            </div>
          ) : null}
   
          {/* <Button 
            onClick={showItemInput}> {props.addBtnText}</Button> */}

        </div>
      </List>
    </ListSectionStyled>
  );
};

export default ListSection;
