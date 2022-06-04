import React, { useState, useEffect } from "react";
import { userIsConnect, getCurrentUser } from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import DecodeJwt from "../../../models/DecodeJwt";


const HomePageRedirector = () => {
  const navigate = useNavigate();
  async function getUser() {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      navigate("/sign-in")
    } else {
      if (currentUser.role == "Candidate") {
        navigate("/applications")
      } else if (currentUser.role == "HR") {
        navigate("/positions")
      } else {
        navigate("/temp")
      }
    }
  }
    useEffect(() => {

      getUser()
    }, []);
    return (
      <div>
      </div>
    );
  };

  export default HomePageRedirector;
