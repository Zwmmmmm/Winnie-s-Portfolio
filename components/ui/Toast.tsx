import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
}

const Toast: React.FC<ToastProps> = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="glass-card px-6 py-3 rounded-full shadow-ios-lg flex items-center gap-3 backdrop-blur-xl bg-white/80 border border-white/20">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="text-white w-3 h-3" strokeWidth={3} />
            </div>
            <span className="text-sm font-medium text-gray-800">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;