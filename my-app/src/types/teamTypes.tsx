// src/types/TeamTypes.ts

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  twitterUrl: string;
  youtubeUrl: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
}