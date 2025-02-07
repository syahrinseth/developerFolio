import React from 'react';
import './Education.css';
import EducationCard from '../../components/educationCard/EducationCard';
import { educationInfo } from '../../portfolio';
import emoji from "react-easy-emoji";

export default function Education() {
  return (
    <div className="education-section" id="education">
        <h1 className="education-heading">Education {emoji("📚")}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school) => (
            <EducationCard school={school} />
          ))}
        </div>
    </div>
  );
}
