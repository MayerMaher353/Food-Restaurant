// src/Components/team/TeamMemberCard.tsx
import '../css/about-us.css';
import React from 'react';
import type { TeamMemberCardProps } from '../../../types/teamTypes';

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, role, imageUrl, facebookUrl, instagramUrl, twitterUrl, youtubeUrl } = member;

  return (
    <div className="col-lg-4 col-md-4 col-sm-12">
      <div className="content">
        <div className="image-container">
          <img src={imageUrl} alt={`Picture of ${name}`} />
        </div>
        <h4>{name}</h4>
        <p>{role}</p>
        <div className="logos">
          {facebookUrl && <a href={facebookUrl}><i className="fab fa-facebook-f"></i></a>}
          {instagramUrl && <a href={instagramUrl}><i className="fab fa-instagram"></i></a>}
          {twitterUrl && <a href={twitterUrl}><i className="fab fa-x-twitter"></i></a>}
          {youtubeUrl && <a href={youtubeUrl}><i className="fab fa-youtube"></i></a>}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;