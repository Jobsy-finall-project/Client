import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { State } from "../../../state";
import Track from "../../../models/Track";
import { useNavigate } from "react-router-dom";
import { GettingStartedSectionStyled, positionTitle } from "./GettingStartedSectionStyled";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import {
  getUserApplications,
  changeApplicationIsFavorite
} from "../../../services/applicationService";
import { bindActionCreators } from "redux";
import { actionsCreators } from "../../../state";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../../../services/authService";
import SignInSide from "../../../components/SignInSide/SignInSide"
import SignInForm from "../../form/forms/signinForm/SignInForm";

const GettingStartedSection: React.FC = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  return (
    <GettingStartedSectionStyled>
      <SignInForm></SignInForm>
    </GettingStartedSectionStyled>
  );
};

export default GettingStartedSection;
