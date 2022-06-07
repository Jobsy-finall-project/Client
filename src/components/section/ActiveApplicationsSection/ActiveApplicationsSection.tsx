import {
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import Track from "../../../models/Track";
import { getAllApplicationsByPositionId } from "../../../services/applicationService";
import { getCurrentUser } from "../../../services/authService";
import { actionsCreators, State } from "../../../state";
import ActiveApplicationsSectionStyled, {
    positionTitle,
} from "./ActiveApplicationsSectionStyled";
import UserModel from "../../../models/User";
import { PositionListSectionStyled } from "../positionList/PositionListSectionStyled";
import { getPositionById } from "../../../services/positionsService";
import Position from "../../../models/Position";

const ActiveApplicationsSection: React.FC = () => {
    let navigation = useNavigate();
    // const location = useLocation();
    // const currUser = getCurrentUser();
    const dispatch = useDispatch();
    const { createTrack } = bindActionCreators(actionsCreators, dispatch);

    // const positionId: string = location.state as string;
    const { positionId } = useParams();

    const state_tracks = useSelector((state: State) => state.tracks);
    const [users, setUsers] = useState<Array<UserModel>>([]);
    const [position, setPosition] = useState<Position>();

    useEffect(() => {
        async function getPosition() {
            console.log({ positionId });
            const viewdPosition = await getPositionById(
                positionId ? positionId : ""
            );
            console.log({ viewdPosition });
            setPosition(viewdPosition);
            const { data } = await getAllApplicationsByPositionId(
                positionId ? positionId : ""
            );
            setUsers(data)
            data.forEach((user: UserModel) => {
                if (
                    user.applications &&
                    !state_tracks.find(
                        (curr) => curr._id === user.applications!![0]._id
                    )
                ) {
                    createTrack(user.applications[0]);
                }
            });
        }

        getPosition();
    }, []);
    const [search, setSearchBar] = useState("");
    const handleSetSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const title = event.currentTarget.value;
        setSearchBar(title);
    };

    const searchFunction = (user: UserModel, query: string) => {
        const searchTerm = query.toLowerCase();
        return (
            (user.firstName &&
                user.firstName.toLowerCase().includes(searchTerm)) ||
            (user.lastName && user.lastName.toLowerCase().includes(searchTerm))
        );
    };
    const handleClick = (user: UserModel) => {
        navigation("/recruitment-track-page", { state: user.applications!![0] }); //TODO handle Later
    };
    return (
        <PositionListSectionStyled>
            <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item container>
                    <h1 className="welcomeTitle">{position?.name}</h1>
                </Grid>

                <Grid item container>
                    <h3 className="activePositionsTitle">Active Users:</h3>
                </Grid>
                <Grid container item xs={12}>
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

                <Grid container item width={"50%"}>
                    <List>
                        {(users as Array<UserModel>).map(
                            (currUser: UserModel) => {
                                return (
                                    <div>
                                        {searchFunction(currUser, search) ? (
                                            <ListItem>
                                                <ListItemButton>
                                                    <ListItemText
                                                        key={currUser.email}
                                                        primary={`${currUser.firstName} ${currUser.lastName}`}
                                                        primaryTypographyProps={
                                                            positionTitle
                                                        }
                                                        onClick={() => {
                                                            handleClick(
                                                                currUser
                                                            );
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                );
                            }
                        )}
                    </List>
                </Grid>
            </Grid>
        </PositionListSectionStyled>
    );
};

export default ActiveApplicationsSection;
