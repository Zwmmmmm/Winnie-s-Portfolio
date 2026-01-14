import React from 'react';
import { Project } from '../types';
import { Copy, Github, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  onCopy: (text: string, type: string) => void;
  onShowModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCopy, onShowModal }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.005 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative bg-white rounded-3xl shadow-ios-sm hover:shadow-ios-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full"
    >
      {/* Cover Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <motion.img
          src={project.coverImage}
          alt={project.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        {/* Subtle gradient overlay for better text contrast if we had text over image, mostly for aesthetic here */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
          {project.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-2.5 mt-auto">
          <button
            onClick={() => onCopy(project.promptText, 'Prompt')}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-50 text-gray-700 text-sm font-medium hover:bg-cream-100 hover:text-cream-900 active:scale-[0.98] transition-all duration-200"
          >
            <Copy size={16} />
            <span>复制 prompt</span>
          </button>
          
          <div className="flex gap-2.5">
            <button
              onClick={() => onCopy(project.githubUrl, 'GitHub Link')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 active:scale-[0.98] transition-all duration-200"
            >
              <Github size={16} />
              <span>复制 github 链接</span>
            </button>
            <button
              onClick={() => onShowModal(project)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium hover:bg-black active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Share2 size={16} />
              <span>获取项目体验链接</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;