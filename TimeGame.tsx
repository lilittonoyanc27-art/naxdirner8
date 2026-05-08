import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIME_QUESTIONS } from './data';
import { CheckCircle2, AlertCircle, RefreshCcw, Clock, ArrowRight } from 'lucide-react';

const AnalogClock = ({ hours, minutes }: { hours: number, minutes: number }) => {
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;

  return (
    <div className="relative w-64 h-64 rounded-full border-[12px] border-slate-100 bg-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.4),_inset_0_-10px_20px_rgba(0,0,0,0.1),_inset_0_10px_20px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden">
      {/* 3D Glass Effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-20" />
      
      {/* Hour Hand */}
      <motion.div 
        initial={false}
        animate={{ rotate: hourDeg }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="absolute w-2 h-16 bg-slate-800 rounded-full origin-bottom shadow-md z-10"
        style={{ top: '25%', transformOrigin: 'bottom center' }}
      />
      {/* Minute Hand */}
      <motion.div 
        initial={false}
        animate={{ rotate: minuteDeg }}
        transition={{ type: 'spring', stiffness: 50 }}
        className="absolute w-1.5 h-24 bg-brand-blue rounded-full origin-bottom shadow-lg z-10"
        style={{ top: '12%', transformOrigin: 'bottom center' }}
      />
      {/* Center Dot */}
      <div className="w-5 h-5 bg-slate-900 rounded-full z-10 shadow-inner flex items-center justify-center">
        <div className="w-2 h-2 bg-slate-400 rounded-full" />
      </div>
      
      {/* Numbers */}
      {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => {
        const angle = (num * 30) * (Math.PI / 180);
        const radius = 95; // distance from center
        return (
          <span 
            key={num} 
            className="absolute font-black text-slate-300 text-lg"
            style={{ 
              transform: `translate(${Math.sin(angle) * radius}px, ${-Math.cos(angle) * radius}px)`
            }}
          >
            {num}
          </span>
        );
      })}
    </div>
  );
};

export default function TimeGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const question = TIME_QUESTIONS[currentIndex];

  const handleSelect = (opt: string) => {
    if (selectedOption) return;
    setSelectedOption(opt);
    const correct = opt === question.correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < TIME_QUESTIONS.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 p-12 bg-white rounded-[48px] shadow-[0_32px_64px_rgba(0,0,0,0.1)] mt-20 border-b-8 border-slate-100">
        <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <Clock className="w-12 h-12 text-slate-800" />
        </div>
        <div>
            <h2 className="text-4xl font-black text-slate-800 uppercase italic">ԱՐԴՅՈՒՆՔ</h2>
            <p className="text-6xl font-black text-brand-blue mt-2">{score} / {TIME_QUESTIONS.length}</p>
        </div>
        <button onClick={() => window.location.reload()} className="w-full py-5 bg-brand-blue-dark text-white rounded-[24px] font-black shadow-xl hover:scale-105 active:scale-95 transition-all">
          ԿՐԿՆԵԼ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 space-y-12">
      <div className="flex flex-col items-center gap-12">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           key={currentIndex}
        >
            <AnalogClock hours={question.hours} minutes={question.minutes} />
        </motion.div>
        
        <div className="bg-white p-10 rounded-[48px] shadow-[0_40px_80px_rgba(0,0,0,0.05)] border-2 border-slate-50 w-full text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-blue/10 rounded-full -ml-12 -mb-12" />

          <h2 className="text-3xl font-black text-slate-800 mb-10 uppercase italic tracking-widest flex items-center justify-center gap-3">
             <span className="text-yellow-500 font-serif">¿</span>Qué hora es<span className="text-brand-blue font-serif">?</span>
          </h2>
          
          <div className="grid gap-5">
            {question.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`p-6 rounded-[24px] text-2xl font-black transition-all flex justify-between items-center border-b-4 ${
                  selectedOption === opt
                    ? opt === question.correctAnswer 
                        ? 'bg-emerald-500 text-white border-emerald-700 shadow-lg' 
                        : 'bg-red-500 text-white border-red-700 shadow-lg'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-brand-blue hover:bg-brand-ice hover:text-brand-blue shadow-sm'
                }`}
              >
                {opt}
                {selectedOption === opt && (
                    opt === question.correctAnswer 
                    ? <CheckCircle2 className="w-8 h-8" /> 
                    : <AlertCircle className="w-8 h-8" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedOption && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="mt-10 w-full py-5 bg-brand-blue text-white rounded-[24px] font-black flex items-center justify-center gap-3 shadow-2xl hover:bg-brand-blue-dark transition-all transform active:scale-95"
              >
                ՀԱՋՈՐԴԸ <ArrowRight className="w-7 h-7" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
