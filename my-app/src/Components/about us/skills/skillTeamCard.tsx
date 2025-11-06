// src/Components/skills/SkillItemCard.tsx

import React from 'react';
import type { SkillItemCardProps } from '../../../types/SkillTypes';

function SkillItemCard({ skill }: SkillItemCardProps) {
  const { name, percentage, className } = skill;

  // Function to determine the class for the percentage text span
  // Based on your HTML: "90%" had no extra class, others had classes like '80-precent'
  const percentageSpanClass = className.replace('precentge-', '') + '-precent';

  return (
    <div className="skills-item col-lg-4 col-md-4 col-sm-12">
      <div className="skill-item-main-text">
        <h6>{name}</h6>
        {/* Note: The HTML had inconsistent class names for the span, so we handle the 90% case */}
        <span className={percentage === 90 ? '' : percentageSpanClass}>
            {percentage}%
        </span>
      </div>
      
      {/* The CSS classes will drive the progress bar animation/width */}
      <div className={className}></div> 
    </div>
  );
}

export default SkillItemCard;