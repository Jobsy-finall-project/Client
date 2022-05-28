import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";

const Logout = () => {
  const navigation = useNavigate();

  useEffect(() => {
    logout();
    navigation("/"); //TODO: navigate to landing page
  }, []);
  return null;
};

export default Logout;
