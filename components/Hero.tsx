import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with subtle noise and breathing gradient */}
      <div className="absolute inset-0 z-0 bg-cream-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-cream-100 via-white to-blue-50 opacity-60" />
        <div 
            className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-200/20 rounded-full blur-[120px] animate-pulse" 
            style={{ animationDuration: '8s' }} 
        />
        <div 
            className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-cream-300/20 rounded-full blur-[100px] animate-pulse" 
            style={{ animationDuration: '10s', animationDelay: '1s' }} 
        />
        {/* Simple noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} // iOS ease curve
        className="relative z-10 max-w-2xl mx-6 md:mx-auto"
      >
        <div className="glass-card p-8 md:p-12 rounded-3xl shadow-ios-md">
          <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed tracking-wide font-sans">
            Hi there，我是 winnie🍓。
            <br className="block my-2" />
            很开心能和你分享我用 AI 做的小工具，希望可以帮助到你。
            <br className="block my-4" />
            Last but not least，希望你有美好的一天。
          </p>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;