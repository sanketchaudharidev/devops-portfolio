export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  project?: string;
  domain?: string;
  technologies: string[];
  responsibilities: string[];
  keyAchievements?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'Automation Pipeline' | 'Personal Technical Project';
  technologies: string[];
  problem: string;
  approach: string[];
  result: string;
  metrics?: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
  context: string;
}

export interface PipelineStage {
  id: string;
  number: string;
  name: string;
  description: string;
  tools: string[];
  category: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subTitles: string[];
  location: string;
  email: string;
  phone: string;
  summary: string;
  resumeUrl: string;
  resumeFilename: string;
  placeholders: {
    github: {
      text: string;
      url: string | null;
      isPlaceholder: boolean;
    };
    linkedin: {
      text: string;
      url: string | null;
      isPlaceholder: boolean;
    };
  };
  impact: ImpactMetric[];
  experience: ExperienceItem[];
  pipelineStages: PipelineStage[];
  skillCategories: SkillCategory[];
  awsExperience: {
    handsOn: string[];
    currentlyStudying: string[];
  };
  projects: ProjectItem[];
  education: {
    degree: string;
    field: string;
    institution: string;
    graduationDate: string;
  };
  certifications: {
    name: string;
    issuer: string;
    url?: string;
  }[];
}
