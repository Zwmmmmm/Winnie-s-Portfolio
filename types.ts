export interface Project {
  id: string;
  name: string;
  tagline: string;
  coverImage: string;
  promptText: string;
  githubUrl: string;
  geminiShareUrl: string;
}

export interface ToastState {
  show: boolean;
  message: string;
}

export interface ModalState {
  show: boolean;
  project: Project | null;
}