// src/types/SkillTypes.ts

export interface SkillItem {
  name: string;
  percentage: number; // Stored as a number (e.g., 90)
  className: string;  // Class for the CSS bar (e.g., 'precentge-90')
}

export interface SkillItemCardProps {
  skill: SkillItem;
}