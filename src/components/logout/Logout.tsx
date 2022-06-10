import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { logout } from "../../services/authService";
import { actionsCreators } from "../../state";

const Logout = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const { clearTracks, clearCompanys, clearCvs, clearUsers, clearCurrUser } =
        bindActionCreators(actionsCreators, dispatch);

    useEffect(() => {
        logout();
        clearTracks();
        clearCompanys();
        clearCvs();
        clearUsers();
        clearCurrUser();
        navigation("/"); //TODO: navigate to landing page
    }, []);
    return null;
};

export default Logout;
