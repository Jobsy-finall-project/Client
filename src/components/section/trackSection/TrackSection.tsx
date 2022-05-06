import React, { useState } from "react";
import Position from "../../../models/forms/Position";
import Step from "../../../models/forms/Step";

interface TrackSectionProps {
    position: Position,
    isActive: boolean,
    isFavorite: boolean,
    steps?: Step[],
    comments?: string[],
    emails?: string[],
    cvFiles?: string[]
  }

  const TrackSection: React.FC<TrackSectionProps> = (props) => {
      return(
          
      );
  }

  export default TrackSection;

  