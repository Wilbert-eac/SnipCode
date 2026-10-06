import React from 'react';
import { X, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PRESETS } from '../data/presets';
import { PresetTemplate, SnipState } from '../types';
import { GRADIENTS } from '../data/backgrounds';

interface PresetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (preset: PresetTemplate) => void;
}

export const PresetsModal: React.FC<PresetsModalProps> = ({
  isOpen,
  onClose,
  onSelectPreset
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl rounded-2xl bg-[#0f172a] border border-white/10 p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-500 to-pink-500 text-white shadow">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Galería de Plantillas & Presets</h3>
              <p className="text-xs text-slate-400">Elige estilos prediseñados listos para redes sociales</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body: Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 overflow-y-auto">
          {PRESETS.map((preset) => {
            const grad = GRADIENTS.find((g) => g.id === preset.state.backgroundSettings.gradientId) || GRADIENTS[0];
            return (
              <div
                key={preset.id}
                onClick={() => {
                  onSelectPreset(preset);
                  onClose();
                }}
                className="group relative cursor-pointer rounded-xl border border-white/10 bg-slate-900/60 p-4 transition-all duration-200 hover:border-indigo-500/50 hover:bg-slate-900 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
              >
                {/* Visual Preview Swatch */}
                <div
                  className="h-28 w-full rounded-lg mb-3 flex items-center justify-center p-3 relative overflow-hidden shadow-inner border border-white/10"
                  style={{ background: grad.css }}
                >
                  <div className="w-4/5 h-16 rounded-md bg-slate-950/90 border border-white/20 p-2 shadow-2xl flex flex-col justify-between">
                    <div className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-3/4 rounded bg-indigo-400/60" />
                      <div className="h-1.5 w-1/2 rounded bg-pink-400/60" />
                    </div>
                  </div>
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/10">
                    {preset.badge}
                  </span>
                </div>

                {/* Preset Info */}
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center justify-between">
                    <span>{preset.name}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{preset.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
