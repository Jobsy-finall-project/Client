import React, { useState } from "react";
import ListSectionStyled from "./ListSectionStyled";
import ButtonMui from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { ListItemIcon } from "@mui/material";


interface ListSectionProps {
  title: string;
  content:string[];
  addBtnText:string;
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


  function handeleDeleteItem(){
    
  }

  return (
    <ListSectionStyled>
    <List className="listContainer" sx={{ marginLeft: "100px" }}>
    <p className="commentTitle" >{props.title}:</p>

  {items?.map(currItem => {
    return (
      <ListItem
      secondaryAction={
        <Checkbox
          icon={<DeleteIcon />}
          checkedIcon={
            <DeleteIcon />
          }
          onClick={handeleDeleteItem}
        />
      }
      >
      <ListItemButton>
        <ListItemIcon />
        <ListItemText
          primary={currItem}
        />
      </ListItemButton>
      </ListItem>
                    )
                  })}

<div className="addComments">
<ButtonMui className="addCommentBtn" variant="contained" onClick={showItemInput}> {props.addBtnText}</ButtonMui>
{addItemInput ? (
  <div className="addCommentInput">
    <input
      type="text"
      value={newItem}
      onChange={handleAddItemChange}
    />
    <ButtonMui className="addBtn"
    variant="contained"
    onClick={handleAddItemClick}>
      add
    </ButtonMui> 
  </div>
) :null}
</div>
</List>
    </ListSectionStyled>
  );
};

export default ListSection;
