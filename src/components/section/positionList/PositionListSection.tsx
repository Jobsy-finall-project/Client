import AddBoxIcon from "@mui/icons-material/AddBox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SearchIcon from "@mui/icons-material/Search";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import Position from "../../../models/Position";
import { getCurrentUser } from "../../../services/authService";
import { getCompanyByHrId } from "../../../services/companyService";
import { actionsCreators, State } from "../../../state";
import {
  PositionListSectionStyled,
  positionTitle
} from "./PositionListSectionStyled";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteAplication} from "../../../services/applicationService";
import { deletePositionById} from "../../../services/positionsService";
import Company from "../../../models/Company";
import Button from "../../common/button/Button";


const PositionListSection: React.FC = () => {
  let navigation = useNavigate();
  const dispatch = useDispatch();
  const { AddPosition, CreateCompany, deletePosition } = bindActionCreators(
    actionsCreators,
    dispatch
  );

    async function handleDeletePosition(position: Position){
        await deletePositionById(position._id as string);
        const { data } = await getCompanyByHrId();
        const company = {...data};
        company.positions=company.positions.filter((cur:Position)=>cur._id !==position._id);
        deletePosition(company);
    }

  async function getCompanyPositions() {

      const { data } = await getCompanyByHrId();
      const curUser = getCurrentUser();
   
      const newData = {...data, positions:data.positions.filter((cur:Position)=>cur.hrId===curUser._id)};
    
      CreateCompany(newData);
      AddPosition(newData);
  }

  useEffect(() => {
      getCompanyPositions();
  }, []);

  const currUser = getCurrentUser()
  const company = useSelector((state: State) => state.companys)
      .find((curr) => curr._id === currUser?.company)
      const positions = company ? company.positions.filter((cur:Position)=>cur.hrId === currUser._id) : []

  const [search, setSearchBar] = useState("");
  
  const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
      const title = event.currentTarget.value;
      setSearchBar(title);
  };

  const handleClick = (position: Position) => {
      navigation("/position/"+position._id/* , { state: position._id } */);
  };

  const handleAddPosition = () => {
      navigation("/create-position");
  };

  const searchFunction = (position: Position, query: string) => {
      const searchTerm = query.toLowerCase();
      if (position.name) {
      return (
          position.name.toLowerCase().includes(searchTerm) || 
          position.description?.toLowerCase().includes(searchTerm)
      );
      }
  };

  return (
    <PositionListSectionStyled>
        <Grid container 
          width={"100%"}
          className="container"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          direction="column">
          { positions && positions.length > 0 ?
          <>
          <Grid item>
            <h3 className="activePositionsTitle"> My Positions</h3>
          </Grid>
          <Grid item>
        <Button
            className="addNewTrackButton"
            title="Add new position"
            color= "#008CBA"
            height="50px"
            width="300px"
            top="0"
            left="0"
            onClick={handleAddPosition}
          ></Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="search position"
              className="searchPosition"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={handleSetSearch}
            />
          </Grid>

          <Grid container item width={"100%"}>
            <List className="positionsList">
              {(positions as Array<Position>).map((currPosition: Position) => {
                return (
                  <div>
                    {searchFunction(currPosition, search) ? (
                      <>
                        <ListItem
                          className="listItem"
                          secondaryAction={
                              <IconButton onClick={e =>
                                  handleDeletePosition(currPosition as Position)
                              }>
                                  <DeleteIcon/>
                              </IconButton>
                          }
                        >
                          
                          <ListItemButton>
                            <KeyboardIcon />
                            <ListItemText
                              primary={`${currPosition.name}`}
                              primaryTypographyProps={positionTitle}
                              onClick={() => {
                                handleClick(currPosition);
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </List>
          </Grid>
          </> :
            <>
            <h6 className="emptyListTitle">Add your first position</h6>
          <Grid item>
          <Button
          className="addNewTrackButton"
          title="Add new position"
          color="#008CBA"
          height="50px"
          width="300px"
          top="0"
          left="0"
          onClick={handleAddPosition}
          ></Button>
          </Grid>
            </>}
        </Grid>
    </PositionListSectionStyled>
  );
};

export default PositionListSection;
