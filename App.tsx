import React, { useState, useCallback } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import Toast from './components/ui/Toast';
import Modal from './components/ui/Modal';
import { projects } from './data/projects';
import { Project, ToastState, ModalState } from './types';

const App: React.FC = () => {
  // Toast State
  const [toast, setToast] = useState<ToastState>({ show: false, message: '' });

  // Modal State
  const [modal, setModal] = useState<ModalState>({ show: false, project: null });

  // Handle Copy Action
  const handleCopy = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ show: true, message: `${label} Copied` });
      
      // Auto dismiss toast
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
      setToast({ show: true, message: 'Failed to copy' });
    });
  }, []);

  // Modal Handlers
  const openModal = useCallback((project: Project) => {
    setModal({ show: true, project });
  }, []);

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, show: false }));
  }, []);

  // Modal internal copy handler wrapper
  const handleModalCopy = useCallback((text: string) => {
    handleCopy(text, 'Link');
  }, [handleCopy]);

  return (
    <main className="min-h-screen bg-cream-50 font-sans selection:bg-cream-300 selection:text-cream-900">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Projects Section */}
      <section id="projects" className="relative py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
              A collection of AI-powered tools crafted with care.
            </p>
          </div>

          {/* Grid Layout - Changed to 2 columns max */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onCopy={handleCopy}
                onShowModal={openModal}
              />
            ))}
          </div>
        </div>
        
        {/* Footer Credit */}
        <footer className="mt-32 text-center text-gray-400 text-sm py-8 border-t border-gray-100">
          <p>© {new Date().getFullYear()} Winnie. Designed with simplicity.</p>
        </footer>
      </section>

      {/* 3. Global UI Overlays */}
      <Toast show={toast.show} message={toast.message} />
      
      <Modal 
        isOpen={modal.show} 
        project={modal.project} 
        onClose={closeModal} 
        onCopy={handleModalCopy} 
      />
    </main>
  );
};

export default App;