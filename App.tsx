import React, { useState } from 'react';
import { 
  Trophy, 
  BookOpen, 
  Clock, 
  Hash, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { AppScreen } from './types';

// New components
import TheoryView from './TheoryView';
import TimeGame from './TimeGame';
import NumbersGame from './NumbersGame';

const Navbar = ({ currentScreen, setScreen }: { currentScreen: AppScreen, setScreen: (s: AppScreen) => void }) => (
  <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <button onClick={() => setScreen('menu')} className="flex items-center gap-2 group">
        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Sparkles className="text-white w-6 h-6" />
        </div>
        <span className="font-black text-slate-800 tracking-tighter uppercase italic hidden sm:block">
          Իսպաներեն: <span className="text-brand-blue">Ժամ և Թվեր</span>
        </span>
      </button>
      
      <div className="flex items-center gap-2">
        <NavButton active={currentScreen === 'theory'} icon={<BookOpen className="w-5 h-5"/>} label="Տեսություն" onClick={() => setScreen('theory')} />
        <NavButton active={currentScreen === 'time'} icon={<Clock className="w-5 h-5"/>} label="Ժամացույց" onClick={() => setScreen('time')} />
        <NavButton active={currentScreen === 'numbers'} icon={<Hash className="w-5 h-5"/>} label="Թվեր" onClick={() => setScreen('numbers')} />
      </div>
    </div>
  </nav>
);

const NavButton = ({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`p-2 sm:px-4 sm:py-2 rounded-xl flex items-center gap-2 transition-all ${
      active 
        ? 'bg-slate-800 text-white shadow-md' 
        : 'text-slate-400 hover:bg-slate-100 hover:text-slate-600'
    }`}
  >
    {icon}
    <span className="hidden md:block font-bold text-[10px] uppercase tracking-widest">{label}</span>
  </button>
);

function MenuCard({ icon, title, description, color, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className="group bg-white p-8 rounded-[40px] shadow-sm border-2 border-slate-100 flex items-start gap-6 text-left transition-all hover:scale-[1.02] hover:shadow-xl hover:border-slate-800"
    >
      <div className={`w-20 h-20 shrink-0 rounded-[24px] ${color} flex items-center justify-center text-white shadow-lg`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-black text-slate-800 uppercase italic mb-2 group-hover:text-slate-800">{title}</h3>
        <p className="text-slate-500 font-medium leading-relaxed">{description}</p>
      </div>
      <div className="shrink-0 p-2 rounded-full bg-slate-50 text-slate-300 group-hover:bg-slate-800 group-hover:text-white transition-colors self-center">
        <ArrowRight className="w-6 h-6" />
      </div>
    </button>
  );
}

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-12 py-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-black text-slate-800 tracking-tighter uppercase italic leading-none">
          ԺԱՄ <span className="text-brand-blue">&</span> ԹՎԵՐ
        </h1>
        <p className="text-xl md:text-2xl font-bold text-slate-400 uppercase tracking-[0.2em]">
          ԻՍՊԱՆԵՐԵՆԻ ՈՒՍՈՒՑՈՒՄ
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
        <MenuCard 
          icon={<BookOpen className="w-10 h-10" />}
          title="Տեսություն"
          description="Սովորիր թվերը և ժամը իսպաներեն"
          color="bg-blue-500"
          onClick={() => setScreen('theory')}
        />
        <MenuCard 
          icon={<Clock className="w-10 h-10" />}
          title="Ժամացույց"
          description="Գուշակիր ճիշտ ժամը"
          color="bg-emerald-500"
          onClick={() => setScreen('time')}
        />
        <MenuCard 
          icon={<Hash className="w-10 h-10" />}
          title="Թվեր"
          description="Ճանաչիր իսպաներեն թվերը"
          color="bg-orange-500"
          onClick={() => setScreen('numbers')}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-brand-blue selection:text-white pt-20 pb-12 overflow-x-hidden relative">
      {/* Background blobs for colorful vibe */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-blue/10 blur-[100px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-yellow-400/10 blur-[120px] rounded-full" />
          <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] bg-brand-blue-dark/5 blur-[80px] rounded-full animate-bounce-slow" />
      </div>

      <Navbar currentScreen={screen} setScreen={setScreen} />

      <main className="max-w-7xl mx-auto px-4 min-h-[80vh] relative z-10">
        {screen === 'menu' && <MainMenu setScreen={setScreen} />}
        {screen === 'theory' && <TheoryView />}
        {screen === 'time' && <TimeGame />}
        {screen === 'numbers' && <NumbersGame />}
      </main>

      <footer className="mt-20 border-t border-slate-200 pt-12 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
               &copy; 2024 ԻՍՊԱՆԵՐԵՆԻ ԱԿԱԴԵՄԻԱ
            </p>
        </div>
      </footer>
    </div>
  );
}


