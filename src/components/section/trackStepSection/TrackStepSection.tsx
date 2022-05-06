import React, { useState } from "react";
import TrackStepSectionStyled from "./TrackStepSectionStyled";
import TitleSection from "../titleSection/TitleSection";
import SectionContent from "../sectionContent/SectionContent";
import Button from "../../common/button/Button"
import { useEffect } from "@storybook/addons";

interface TrackStepSectionProps {
  title: string,
  step: string,
  description: string,
  date: string,
  relatedEmails?: string[],
  notes?: string[]
}
const TrackStepSection: React.FC<TrackStepSectionProps> = (props) => {

  const [notes, setNotes]=useState([props.notes]);
  const [newNote, setNewNote]=useState('');
  const [addNoteInput, setAddNoteInput] = React.useState(false);

  const [relatedEmails, setRelatedEmails]=useState([props.relatedEmails]);
  const [newEmail, setNewEmail]=useState('');
  const [addEmailInput, setAddEmailInput]=useState(false);


  function handleAddNoteChange(event:any){
    setNewNote(event.target.value);
  }

  function handleAddNoteClick(){
    if(newNote!==""){
      setNotes([...notes,newNote] as any);
    }
    setNewNote("");
  }

  function handleAddEmailChange(event:any){
    setNewEmail(event.target.value);
  }

  function handleAddEmailClick(){
    if(newEmail!==""){
      setRelatedEmails([...relatedEmails,newEmail] as any);
    }
    setNewEmail("");
  }

  function showNoteInput(){
    setAddNoteInput(!addNoteInput);
  }

  function showEmailInput(){
    setAddEmailInput(!addEmailInput);

  }
  const goToCreateNewStep = () => {
    window.location.href = "/create-step"
  }
  
  return (
      <TrackStepSectionStyled>
       <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <TitleSection title={`${props.title} ${props.date}`}/>
          <SectionContent content={props.description} />
          <h3>related emails:</h3>
          <div>{relatedEmails.map((email) => <li>{email}</li> )}</div>
          {
            addEmailInput?
            <div>
          <input type="text" value={newEmail} onChange={handleAddEmailChange} />
          <Button
              style="success"
              size="lg"
              title="+"
              onClick={handleAddEmailClick}
            />
              </div>
              :null
          }
        <Button
              style={addEmailInput? "danger" : "primary"}
              size="lg"
              title={addEmailInput ? "X" : "Add email"}
              onClick={showEmailInput}
            />
          <h3>notes:</h3>
          <div>{notes.map((note) => <li>{note}</li> )}</div>
          <div className="btn-new-item">
          {addNoteInput?
          <div >
             <input type="text" value={newNote} onChange={handleAddNoteChange} /> 
             <Button
              style="success"
              size="lg"
              title="+"
              onClick={handleAddNoteClick}
            />
          </div>
                :null}
            <Button
              style={addNoteInput ? "danger" : "primary"}
              size="lg"
              title={addNoteInput ? "X" : "Add note"}
              onClick={showNoteInput}
            />
          </div>
        </div>
      </div>

    <Button 
      title="Add New Step"
      onClick={goToCreateNewStep}
      style="success"
      size="lg"
    />
  
    </TrackStepSectionStyled>
  );
};

export default TrackStepSection;