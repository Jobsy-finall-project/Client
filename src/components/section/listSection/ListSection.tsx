import React, {useEffect, useState} from "react";
import ListSectionStyled from "./ListSectionStyled";
import Button from '../../common/button/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import { ListItemIcon } from "@mui/material";
import {addApplicationComments, deleteApplicationComments} from "../../../services/applicationService";
import {addStepComments, deleteStepComments} from "../../../services/stepService";
import Grid from '@mui/material/Grid'

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



  return (
    <ListSectionStyled>
      <List className="listContainer">
        <p className="commentTitle" >{props.title}:</p>
        <Grid item>
        {items?.map((currItem, index) => {
          return (
            <ListItem>
              <ListItemButton>
                <ListItemIcon />
                <ListItemText primary={currItem} />
              </ListItemButton>
              <DeleteIcon onClick={() =>  handeleDeleteItem(index)} />
            </ListItem>
          )
        })}
        </Grid>
        {/* <div > */}
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          className="addComments"
          width={"100%"}
        >
            {/* <div> */}
            <Grid item>
            <Button
              className="addCommentBtn"
              onClick={showItemInput}
              title="Add comments"
              color=""
              height="20px"
              width="180px"
              top="32px"
              left="100px"
            />
            </Grid>
            {/* </div> */}
          
          {/* <Grid item direction="column" width={"100%"} alignItems="center"
          justifyContent="center">        */}
          {addItemInput ? (
            // <div className="addCommentInput">
              <Grid item container className="addCommentInput" direction="column" width={"100%"} alignItems="center"
              justifyContent="center" spacing={2}>
              <Grid item width={"90%"} alignItems="center"> 
              <input
                className="input-comment"
                type="text"
                value={newItem}
                onChange={handleAddItemChange}
              />
              </Grid>
              <Grid>
              <Button
                className="addBtn"
                onClick={handleAddItemClick}
                title="Add"
                color=""
                height="30px"
                width="200px"
                top="32px"
                left="200px"
              />
              </Grid>
              </Grid>
            // </div>
          ) : null}
          </Grid> 
           {/* </Grid>  */}
          {/* <Button 
            onClick={showItemInput}> {props.addBtnText}</Button> */}

        {/* </div> */}
      </List>
    </ListSectionStyled>
  );
};

export default ListSection;
