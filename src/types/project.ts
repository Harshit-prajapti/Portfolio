export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  thumbnail: string;
  images: string[];
  // videoUrl?: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}
