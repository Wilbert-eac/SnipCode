import React from 'react';
import { X, Keyboard, Sparkles } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { keys: ['Tab'], desc: 'Indentar 2 espacios en el editor' },
    { keys: ['Clic en Línea'], desc: 'Resaltar o quitar resaltado de línea' },
    { keys: ['Ctrl / ⌘', 'S'], desc: 'Descargar imagen PNG instantáneamente' },
    { keys: ['Alt / Opt', 'C'], desc: 'Copiar imagen PNG al portapapeles' },
    { keys: ['Alt / Opt', 'R'], desc: 'Generar estilo aleatorio sorpresa' },
    { keys: ['Alt / Opt', 'P'], desc: 'Abrir galería de plantillas / presets' },
    { keys: ['Esc'], desc: 'Cerrar ventanas y modales activos' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-2xl bg-[#0f172a] border border-white/10 p-6 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-400">
              <Keyboard className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Atajos de Teclado PrintCode</h3>
              <p className="text-xs text-slate-400">Agiliza tu flujo de trabajo de creación</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* List */}
        <div className="py-4 space-y-2.5">
          {shortcuts.map((sc, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-2 px-3 rounded-xl bg-slate-900/60 border border-white/5">
              <span className="text-slate-300 font-medium">{sc.desc}</span>
              <div className="flex items-center gap-1.5 shrink-0">
                {sc.keys.map((k, j) => (
                  <kbd
                    key={j}
                    className="px-2 py-0.5 rounded-md bg-slate-800 border border-white/15 font-mono text-[11px] font-semibold text-indigo-300 shadow-sm"
                  >
                    {k}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold hover:brightness-110 transition-all shadow-md shadow-indigo-600/30"
        >
          ¡Listo, entendido!
        </button>
      </div>
    </div>
  );
};
