import React, {useEffect, useState} from "react";
import ListSectionStyled from "./ListSectionStyled";
import ButtonMui from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { ListItemIcon } from "@mui/material";
import {addApplicationComments, deleteApplicationComments} from "../../../services/applicationService";
import {addStepComments, deleteStepComments} from "../../../services/stepService";


interface ListSectionProps {
  appId: string;
  title: string;
  content:string[];
  addBtnText:string;
  fromComponent: "step" | "track";
}
const ListSection: React.FC<ListSectionProps> = (props) => {

    const [items, setItems] = useState(props.content);
    const [newItem, setNewItem] = useState("");
    const [addItemInput, setAddItemInput] = React.useState(false);

  async function updateTrackComments() {
      const { data } = await addApplicationComments(props.appId, newItem);
  }

  async function updateStepComments() {
    const { data } = await addStepComments(props.appId, newItem);
}

  async function deleteTrackComments(index: number) {
    const { data } = await deleteApplicationComments(props.appId, index);
}

  function updateComments(){
    if (props.fromComponent == "track") {
      updateTrackComments()
    }
    if (props.fromComponent == "step") {
      updateStepComments()
    }
  }

  function handeleDeleteItem(index: number){
    const newArr=[...items]
    newArr.splice(index,1)
    setItems(newArr)
    if (props.fromComponent == "track") {
      deleteTrackComments(index)
    }
  }


  function handleAddItemChange(event: any) {
    setNewItem(event.target.value);
  }

  function handleAddItemClick() {
    if (newItem !== "") {
      setItems([...items, newItem] as any);
    }
    updateComments()
    setNewItem("");
    setAddItemInput(!addItemInput);
  }


  function showItemInput() {
    setAddItemInput(!addItemInput);
  }


  // function handeleDeleteItem(item: number){
    
  // }

  return (
    <ListSectionStyled>
    <List className="listContainer" sx={{ marginLeft: "100px" }}>
    <p className="commentTitle" >{props.title}:</p>
  {items?.map((currItem, index)  => {
    return (
      <div>
      <ListItem
      secondaryAction={
        <Checkbox
          icon={<DeleteIcon />}
          checkedIcon={
            <DeleteIcon />
          }
          onClick={() =>  handeleDeleteItem(index)}
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
      </div>
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
