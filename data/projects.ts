import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Agent Autorater',
    tagline: '这里以智能评估智能，为AI Agent 提供多维度且个性化的量化体验',
    coverImage: 'https://i.postimg.cc/BnJjF7V3/Group-1.png',
    promptText: '',
    githubUrl: '',
    geminiShareUrl: 'https://gen-flow-98mb.vercel.app/',
  },
  {
    id: '2',
    name: 'Sonic Shuttle',
    tagline: '这里是一款动态音游，在这里，音乐的频率将化作你需要穿越的瞬间',
    coverImage: 'https://i.postimg.cc/kGrhBCGS/20977803c19324bff4c26a4390c3f6e6.png',
    promptText: '',
    githubUrl: '',
    geminiShareUrl: 'https://animated-axolotl-51775a.netlify.app/',
  },
  {
    id: '3',
    name: 'Mind Mapify',
    tagline: '一键将复杂长文转化为清晰的思维导图结构。',
    coverImage: 'https://picsum.photos/seed/mindmap/800/600',
    promptText: 'Summarize the text into a hierarchical markdown list suitable for mind map visualization.',
    githubUrl: 'https://github.com/winnie/mind-mapify',
    geminiShareUrl: 'https://aistudio.google.com/prompts/example-3',
  },
  {
    id: '4',
    name: 'Daily Stoic',
    tagline: '你的个人斯多葛哲学导师，提供每日反思指引。',
    coverImage: 'https://picsum.photos/seed/stoic/800/600',
    promptText: 'You are Marcus Aurelius. Based on my current situation, offer advice from Stoic philosophy.',
    githubUrl: 'https://github.com/winnie/daily-stoic',
    geminiShareUrl: 'https://aistudio.google.com/prompts/example-4',
  },
];