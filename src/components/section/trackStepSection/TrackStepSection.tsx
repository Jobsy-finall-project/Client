import React, { useState } from "react";
import TrackStepSectionStyled from "./TrackStepSectionStyled";
import TitleSection from "../titleSection/TitleSection";
import SectionContent from "../sectionContent/SectionContent";
// import Button from "../../common/button/Button";
import Button from '@mui/material/Button';
import { useEffect } from "@storybook/addons";
import Step from "../../../models/forms/StepModel";
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

  const [relatedEmails, setRelatedEmails] = useState([
    props.step.relatedEmails,
  ]);

  const [newEmail, setNewEmail] = useState("");
  const [addEmailInput, setAddEmailInput] = useState(false);


  function handleAddEmailChange(event: any) {
    setNewEmail(event.target.value);
  }

  function handleAddEmailClick() {
    if (newEmail !== "") {
      setRelatedEmails([...relatedEmails, newEmail] as any);
    }
    setNewEmail("");
    setAddEmailInput(!addEmailInput);
  }


  function showEmailInput() {
    setAddEmailInput(!addEmailInput);
  }


  return (
    <TrackStepSectionStyled>
      <div >
        <div className="container" >
          <h1 className="stepTitle">{`${props.step.title} ${props.step.date}`} </h1>
          <p className="stepDescription">{props.step.stepDetails} </p>
          <p >related emails:</p>
          {relatedEmails? relatedEmails.map((email) => (
      <Accordion className="accordionContainer">
        <AccordionSummary 
        className="myAccordion"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
       
        >
          <p >Email from hr</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            {email}
          </p>
        </AccordionDetails>
      </Accordion>
        
            )):null}
            <div className="addEmails">
            <Button
            className="addEmailBtn"
          variant="contained"
          onClick={showEmailInput}
          >
            Add email
             </Button>
       
          {addEmailInput ? (
            <div className="addEmailInput">
            <input
              type="text"
              value={newEmail}
              onChange={handleAddEmailChange}
            />
            <ButtonMui className="addBtn"
            variant="contained"
            onClick={handleAddEmailClick}>
              +
            </ButtonMui> 
         
          </div>
          ) : null}
          </div>
          
        </div>
      </div>
      <div className="notesContainer">
      <ListSection title="notes" content={props.step.notes as string[]} addBtnText="add note" />
      </div>
    </TrackStepSectionStyled>
  );
};

export default TrackStepSection;
