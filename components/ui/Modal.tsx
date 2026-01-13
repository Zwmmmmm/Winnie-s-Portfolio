import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Link as LinkIcon } from 'lucide-react';
import { Project } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  onCopy: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project, onCopy }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal Content - Centered on desktop, bottom sheet on mobile */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="bg-white/90 backdrop-blur-2xl w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden pointer-events-auto border border-white/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-gray-100/50 text-center">
                <h3 className="text-lg font-semibold text-gray-900">获取链接</h3>
                <p className="text-sm text-gray-500 mt-1">{project.name}</p>
                <button
                  onClick={onClose}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 p-2 bg-gray-100/50 rounded-full hover:bg-gray-200/50 transition-colors"
                >
                  <X size={18} className="text-gray-500" />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <LinkIcon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-2">Gemini Experience Link</p>
                    <p className="text-xs text-gray-400 break-all px-4 font-mono bg-gray-50 py-2 rounded-lg">
                      {project.geminiShareUrl}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      onCopy(project.geminiShareUrl);
                    }}
                    className="flex-1 py-3.5 bg-gray-900 hover:bg-black text-white rounded-2xl font-medium shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Copy size={18} />
                    复制链接
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3.5 bg-white border border-gray-200 text-gray-900 rounded-2xl font-medium hover:bg-gray-50 active:scale-95 transition-all"
                  >
                    关闭
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;