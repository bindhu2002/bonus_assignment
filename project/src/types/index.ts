export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  tags: string[];
  date: string;
  content: string;
}

export interface Certification {
  id: string;
  title: string;
  platform: string;
  date: string;
  verificationUrl?: string;
  logoUrl: string;
}