import React, { useState } from "react";
import TrackStepSectionStyled from "./TrackStepSectionStyled";
import TitleSection from "../titleSection/TitleSection";
import SectionContent from "../sectionContent/SectionContent";
// import Button from "../../common/button/Button";
import Button from '@mui/material/Button';
import { useEffect } from "@storybook/addons";
import Step from "../../../models/forms/StepModel";


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
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <TitleSection title={`${props.step.title} ${props.step.date}`} />
          <SectionContent content={props.step.stepDetails} />
          <h3>related emails:</h3>
          <div>
            {relatedEmails.map((email) => (
              <li>{email}</li>
            ))}
          </div>
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
            {notes.map((note) => (
              <li>{note}</li>
            ))}
          </div>
          <div className="btn-new-item">
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
