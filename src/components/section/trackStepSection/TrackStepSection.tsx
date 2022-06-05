import React, { useState } from "react";
import TrackStepSectionStyled from "./TrackStepSectionStyled";
import TitleSection from "../titleSection/TitleSection";
import SectionContent from "../sectionContent/SectionContent";
// import Button from "../../common/button/Button";
import Button from '@mui/material/Button';
import { useEffect } from "@storybook/addons";
import Step from "../../../models/Step";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItemIcon } from "@mui/material";
import ButtonMui from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import ListSection from "../listSection/ListSection";

interface TrackStepSectionProps {
  step: Step;
}


const TrackStepSection: React.FC<TrackStepSectionProps> = (props) => {



  const [newEmail, setNewEmail] = useState("");
  const [addEmailInput, setAddEmailInput] = useState(false);


  function handleAddEmailChange(event: any) {
    setNewEmail(event.target.value);
  }

  function showEmailInput() {
    setAddEmailInput(!addEmailInput);
  }


  return (
    <TrackStepSectionStyled>
      <div >
        <div className="container" >
          <h1 className="stepTitle">{`${props.step.title} ${props.step.time.slice(0,10)}`} </h1>
          <p className="stepDescription">{props.step.description} </p>          
        </div>
      </div>
      <div className="notesContainer">
      <ListSection title="notes" content={props.step.comments as string[]} addBtnText="add note" />
      </div>
    </TrackStepSectionStyled>
  );
};

export default TrackStepSection;
