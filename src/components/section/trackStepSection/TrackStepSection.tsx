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

interface TrackStepSectionProps {
  step: Step;
}
const TrackStepSection: React.FC<TrackStepSectionProps> = (props) => {
  const [notes, setNotes] = useState([props.step.notes]);
  const [newNote, setNewNote] = useState("");
  const [addNoteInput, setAddNoteInput] = React.useState(false);

  const [relatedEmails, setRelatedEmails] = useState([
    props.step.relatedEmails,
  ]);
  const [newEmail, setNewEmail] = useState("");
  const [addEmailInput, setAddEmailInput] = useState(false);

  function handleAddNoteChange(event: any) {
    setNewNote(event.target.value);
  }

  function handleAddNoteClick() {
    if (newNote !== "") {
      setNotes([...notes, newNote] as any);
    }
    setNewNote("");
  }

  function handleAddEmailChange(event: any) {
    setNewEmail(event.target.value);
  }

  function handleAddEmailClick() {
    if (newEmail !== "") {
      setRelatedEmails([...relatedEmails, newEmail] as any);
    }
    setNewEmail("");
  }

  function showNoteInput() {
    setAddNoteInput(!addNoteInput);
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
       
          {addEmailInput ? (
            <div>
              <input
                type="text"
                value={newEmail}
                onChange={handleAddEmailChange}
              />
              <Button
              variant="contained"
              onClick={handleAddEmailClick}>
                +
              </Button> 
           
            </div>
          ) : null}
          <Button
          variant="contained"
          onClick={showEmailInput}
          >
             {addEmailInput ? "X" : "Add email"}
             </Button>
          <h3>notes:</h3>
          <div>
            {notes? notes.map((note) => (

            <Accordion className="accordionContainer">
        <AccordionSummary 
         className="myAccordion"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
     
        >
          <p>note title</p>
        </AccordionSummary>
        <AccordionDetails >
          <p>
            {note}
          </p>
        </AccordionDetails>
      </Accordion>
            )): null}
          </div>
          <div >
            
            {addNoteInput ? (
              <div>
                <input
                  type="text"
                  value={newNote}
                  onChange={handleAddNoteChange}
                />
                <Button
                  variant="contained"
                  onClick={handleAddNoteClick}
                  >
                    +
                  </Button>
              
              </div>
            ) : null}
            <Button
             variant="contained"
             onClick={showNoteInput}
             >
             {addNoteInput ? "X" : "Add note"}
             </Button>
           
          </div>
        </div>
      </div>
    </TrackStepSectionStyled>
  );
};

export default TrackStepSection;
