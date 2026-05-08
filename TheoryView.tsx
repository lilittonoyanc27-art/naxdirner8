import React from 'react';
import { motion } from 'motion/react';
import { THEORY_POINTS } from './data';
import { Lightbulb, Info } from 'lucide-react';

export default function TheoryView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-8 py-8"
    >
      <div className="bg-white p-8 rounded-[40px] shadow-sm border-2 border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Lightbulb className="w-32 h-32 text-brand-blue" />
        </div>
        <h2 className="text-4xl font-black text-slate-800 uppercase italic mb-6">Ժամ և Թվեր</h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
          Իսպաներենում ժամը և թվերը սովորելը շատ կարևոր է առօրյա շփման համար:
        </p>
      </div>

      <div className="grid gap-6">
        {THEORY_POINTS.map((point, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex gap-6 hover:border-brand-blue transition-all"
          >
            <div className="w-16 h-16 shrink-0 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
              <span className="text-xl font-black italic">!</span>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl font-black text-slate-800 uppercase italic">{point.title}</h3>
              <p className="text-slate-500 font-medium">{point.explanation}</p>
              <div className="bg-slate-50 p-4 rounded-2xl border-l-4 border-brand-blue mt-4">
                <p className="text-brand-blue-dark font-black text-lg italic">"{point.example}"</p>
                <p className="text-slate-400 font-bold text-sm uppercase tracking-wider">{point.translation}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-blue-dark p-8 rounded-[40px] text-white flex items-center gap-8 shadow-xl">
          <div className="w-20 h-20 shrink-0 bg-white/20 rounded-full flex items-center justify-center shadow-inner">
             <Info className="w-10 h-10" />
          </div>
          <div className="space-y-1">
             <p className="text-xl font-black uppercase italic">Հիշի՛ր</p>
             <p className="text-white/80 font-medium leading-relaxed">
                Ժամը ասելիս օգտագործում ենք 'la' եզակիի (երբ ժամը 1-ն է) և 'las' հոգնակիի համար:
             </p>
          </div>
      </div>
    </motion.div>
  );
}
