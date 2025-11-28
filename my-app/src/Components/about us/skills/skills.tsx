// src/Components/skills/SkillsSection.tsx

import React from 'react';
import SkillItemCard from './skillTeamCard';
import type { SkillItem } from '../../../types/SkillTypes';
import '../css/about-us.css'; // Import skills-specific CSS

const skillsData: SkillItem[] = [
  { name: 'Willingness to Learn', percentage: 90, className: 'precentge' },
  // Note: The original HTML had inconsistent class names. 
  // We use standardized className here and let CSS map to it.
  { name: 'Genuine Passion', percentage: 80, className: 'precentge-80' },
  { name: 'Organisation', percentage: 75, className: 'precentge-75' },
  { name: 'Creativity', percentage: 85, className: 'precentge-85' },
  { name: 'Time Management', percentage: 75, className: 'precentge-75' },
  { name: 'Teamwork', percentage: 95, className: 'precentge-95' },
];

function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          {/* Main Title Block */}
          <div className="col-lg-12 col-md-12 col-sm-12 skills-main-text">
            <h5>My Professional</h5>
            <h2>Skills</h2>
            <p>Velit eius illo a commodi veniam beatae.</p>
          </div>

          {/* Skills Grid Wrapper */}
          <div className="skills-wrapper col-lg-12 col-md-12 col-sm-12">
            <div className="container">
              <div className="row">
                {/* Dynamically render all skills */}
                {skillsData.map((skill, index) => (
                  <SkillItemCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkillsSection;