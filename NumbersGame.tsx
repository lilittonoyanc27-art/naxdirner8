import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NUMBER_QUESTIONS } from './data';
import { CheckCircle2, AlertCircle, RefreshCcw, Hash, ArrowRight } from 'lucide-react';

export default function NumbersGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const question = NUMBER_QUESTIONS[currentIndex];

  const handleSelect = (opt: string) => {
    if (selectedOption) return;
    setSelectedOption(opt);
    if (opt === question.correctAnswer) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < NUMBER_QUESTIONS.length - 1) {
      setCurrentIndex(c => c + 1);
      setSelectedOption(null);
    } else {
      setShowSummary(true);
    }
  };

  if (showSummary) {
    return (
      <div className="max-w-md mx-auto text-center space-y-8 p-12 bg-white rounded-[40px] shadow-2xl mt-20">
        <Hash className="w-20 h-20 mx-auto text-orange-500" />
        <h2 className="text-4xl font-black text-slate-800 uppercase italic">ԹՎԵՐ</h2>
        <p className="text-2xl font-bold text-slate-400">{score} / {NUMBER_QUESTIONS.length}</p>
        <button onClick={() => window.location.reload()} className="w-full py-4 bg-orange-500 text-white rounded-2xl font-black">
          ԿՐԿՆԵԼ
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 space-y-12">
      <div className="flex flex-col items-center gap-12">
        <div className="w-48 h-48 bg-white rounded-[40px] shadow-2xl border-4 border-slate-50 flex items-center justify-center">
            <span className="text-8xl font-black text-slate-800 tracking-tighter">{question.number}</span>
        </div>

        <div className="bg-white p-8 rounded-[40px] shadow-xl border-2 border-slate-50 w-full text-center">
          <h2 className="text-2xl font-black text-slate-800 mb-8 uppercase italic tracking-widest">
            Ինչպե՞ս է այս թիվը
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map(opt => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`p-6 rounded-2xl text-2xl font-black uppercase italic transition-all flex justify-between items-center ${
                  selectedOption === opt
                    ? opt === question.correctAnswer ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'
                    : 'bg-slate-50 text-slate-800 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {opt}
                {selectedOption === opt && (opt === question.correctAnswer ? <CheckCircle2 /> : <AlertCircle />)}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedOption && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="mt-8 w-full py-4 bg-slate-800 text-white rounded-2xl font-black flex items-center justify-center gap-2"
              >
                ՀԱՋՈՐԴԸ <ArrowRight />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
