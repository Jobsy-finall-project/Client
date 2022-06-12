import {
    Grid,
    InputAdornment,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
} from "@mui/material";
import ChipTag from "@material-ui/core/Chip";
import SearchIcon from "@mui/icons-material/Search";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import Track from "../../../models/Track";
import { getAllApplicationsByPositionId } from "../../../services/applicationService";
import { getIntersectionTagsBetweenUserAndPosition } from "../../../services/userService";
import { getCurrentUser } from "../../../services/authService";
import { actionsCreators, State } from "../../../state";
import ActiveApplicationsSectionStyled, {
    positionTitle,
} from "./ActiveApplicationsSectionStyled";
import UserModel from "../../../models/User";
import { getPositionById } from "../../../services/positionsService";
import Position from "../../../models/Position";

interface userSuggestions {
    user: UserModel;
    score: number;
    cvId: string;
}

const ActiveApplicationsSection: React.FC = () => {
    let navigation = useNavigate();
    const location = useLocation();

    const dispatch = useDispatch();
    const { createTrack } = bindActionCreators(actionsCreators, dispatch);

    const { positionId } = useParams();

    const suggestions = location.state as any;

    const state_tracks = useSelector((state: State) => state.tracks);
    const [users, setUsers] = useState<Array<UserModel>>([]);
    const [position, setPosition] = useState<Position>();

    async function getUsers() {
        const { data } = await getAllApplicationsByPositionId(
            positionId ? positionId : ""
        );

        let usersCopy = [...data];

        for (let curUser of usersCopy) {
            const suggestedCvId: string = suggestions.find(
                (userSug: userSuggestions) => userSug.user._id === curUser._id
            ).cvId;

            const { data: userTags } =
                await getIntersectionTagsBetweenUserAndPosition(
                    curUser._id as string,
                    positionId as string,
                    suggestedCvId as string
                );
            curUser.intersectionTags = [...userTags];
        }

        setUsers(usersCopy);

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
    async function getPosition() {
        const viewdPosition = await getPositionById(
            positionId ? positionId : ""
        );

        setPosition(viewdPosition);
    }

    useEffect(() => {
        getPosition();
        getUsers();
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
        console.log({ user });

        const app = user.applications?.find(
            (curr) => curr.position._id === positionId
        );
        console.log({ app });

        navigation("/recruitment-track-page/" + app?._id);
    };
    return (
        <ActiveApplicationsSectionStyled>
            <Grid
                container
                spacing={2}
                width={"100%"}
                direction="column"
                className="container"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item container>
                    <h1 className="activePositionsTitle">{position?.name}</h1>
                </Grid>
                <Grid item container>
                    <h3 className="activeActiveCandidateTitle">
                        Active Candidates:
                    </h3>
                </Grid>
                <Grid container item xs={12}>
                    <TextField
                        id="outlined-basic"
                        label="search candiate"
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
                        {users.length > 0 ? (
                            (users as Array<UserModel>).map(
                                (currUser: UserModel) => {
                                    return (
                                        <div>
                                            {searchFunction(
                                                currUser,
                                                search
                                            ) ? (
                                                <ListItem
                                                    className="listItem"
                                                    onClick={() => {
                                                        handleClick(currUser);
                                                    }}
                                                >
                                                    <ListItemButton>
                                                        <ListItemText
                                                            key={currUser.email}
                                                            primary={`${currUser.firstName} ${currUser.lastName}`}
                                                            primaryTypographyProps={
                                                                positionTitle
                                                            }
                                                        />
                                                        {currUser.intersectionTags &&
                                                            currUser.intersectionTags.map(
                                                                (tag) => (
                                                                    <ChipTag
                                                                        className="position-tag"
                                                                        label={
                                                                            tag
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                    </ListItemButton>
                                                </ListItem>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    );
                                }
                            )
                        ) : (
                            <p>opss... There are no active candidates yet</p>
                        )}
                    </List>
                </Grid>
            </Grid>
        </ActiveApplicationsSectionStyled>
    );
};

export default ActiveApplicationsSection;
