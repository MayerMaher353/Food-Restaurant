// src/Components/team/TeamSection.tsx

import React from 'react';
import TeamMemberCard from "./teamCard";
import type { TeamMember } from '../../../types/teamTypes';
import '../css/about-us.css'; // Make sure this path is correct

// Import all required assets
import paulImg from '../../../assets/images/about-us/face-c1.jpg.webp';
import oscarImg from '../../../assets/images/about-us/face-c2.jpg.webp';
import emmaImg from '../../../assets/images/about-us/face-c3.jpg.webp';

// Data array is strongly typed
const teamMembersData: TeamMember[] = [
  {
    name: 'Paul Trueman',
    role: 'Master Chef',
    imageUrl: paulImg,
    facebookUrl: '#',
    instagramUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
  },
  {
    name: 'Oscar Oldman',
    role: 'Master Chef',
    imageUrl: oscarImg,
    facebookUrl: '#',
    instagramUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
  },
  {
    name: 'Emma Newman',
    role: 'Master Chef',
    imageUrl: emmaImg,
    facebookUrl: '#',
    instagramUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
  },
];

function TeamSection() {
  return (
    <section className="team">
      {/* Team Title */}
      <div className="team-title">
        <p>TEAM</p>
        <h1>They Are Ready to Treat You</h1>
        <p>
          Porro eveniet, autem ipsam corrupti consectetur cum.
          <br />
          Repudiandae dignissimos fugiat sit nam.
        </p>
      </div>
      
      {/* Team Members Grid */}
      <div className="container">
        <div className="row">
          {teamMembersData.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;