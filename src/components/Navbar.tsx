import React from 'react';
import { Sparkles, Shuffle, RotateCcw, LayoutTemplate, Keyboard, Share2 } from 'lucide-react';

interface NavbarProps {
  onOpenPresets: () => void;
  onOpenShortcuts: () => void;
  onRandomize: () => void;
  onReset: () => void;
  onShareUrl: () => void;
  copiedShare: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPresets,
  onOpenShortcuts,
  onRandomize,
  onReset,
  onShareUrl,
  copiedShare
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0f19]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-lg shadow-indigo-500/25">
            <Sparkles className="h-5 w-5 text-white" />
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 opacity-30 blur-sm -z-10 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                SnipCode
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Generador de Snippets de Código Estilizados para Redes
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Presets Modal Button */}
          <button
            onClick={onOpenPresets}
            className="flex items-center gap-1.5 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 border border-white/10 hover:bg-white/10 hover:border-indigo-500/40 hover:text-white transition-all shadow-sm active:scale-95"
            title="Explorar plantillas y presets (Alt + P)"
          >
            <LayoutTemplate className="h-4 w-4 text-indigo-400" />
            <span className="hidden md:inline">Plantillas</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-pink-500" />
          </button>

          {/* Randomize Style */}
          <button
            onClick={onRandomize}
            className="flex items-center gap-1.5 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 border border-white/10 hover:bg-white/10 hover:border-pink-500/40 hover:text-white transition-all active:scale-95"
            title="Generar estilo aleatorio sorpresa (Alt + R)"
          >
            <Shuffle className="h-4 w-4 text-pink-400" />
            <span className="hidden md:inline">Aleatorio</span>
          </button>

          {/* Share Link */}
          <button
            onClick={onShareUrl}
            className="flex items-center gap-1.5 rounded-xl bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 border border-white/10 hover:bg-white/10 hover:border-emerald-500/40 hover:text-white transition-all active:scale-95"
            title="Copiar enlace con configuración"
          >
            <Share2 className="h-4 w-4 text-emerald-400" />
            <span className="hidden md:inline">{copiedShare ? '¡Enlace Copiado!' : 'Compartir'}</span>
          </button>

          {/* Shortcuts */}
          <button
            onClick={onOpenShortcuts}
            className="hidden sm:flex items-center gap-1.5 rounded-xl bg-white/5 px-2.5 py-2 text-xs font-semibold text-slate-300 border border-white/10 hover:bg-white/10 hover:text-white transition-all active:scale-95"
            title="Atajos de teclado"
          >
            <Keyboard className="h-4 w-4 text-slate-400" />
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 rounded-xl bg-white/5 p-2 text-xs text-slate-400 border border-white/10 hover:bg-white/10 hover:text-rose-400 transition-all active:scale-95"
            title="Restablecer valores por defecto"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
