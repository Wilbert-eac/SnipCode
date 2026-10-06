import React, { useState } from 'react';
import {
  Code,
  Palette,
  Layout,
  User,
  Sliders,
  Maximize2,
  Minimize2,
  Sparkles,
  Layers,
  Box,
  FileCode,
  Check,
  Type,
  SunMoon,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';
import { SnipState, WindowStyle, BackgroundType, PatternType, ShadowType, AspectRatioType, FontFamily } from '../types';
import { LANGUAGES } from '../data/languages';
import { THEMES } from '../data/themes';
import { GRADIENTS, SOLID_COLORS } from '../data/backgrounds';

interface ControlsSidebarProps {
  state: SnipState;
  onChange: (updater: (prev: SnipState) => SnipState) => void;
  onLanguageChange: (langId: string) => void;
}

export const ControlsSidebar: React.FC<ControlsSidebarProps> = ({
  state,
  onChange,
  onLanguageChange
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'background' | 'window' | 'author'>('background');

  const { codeSettings, backgroundSettings, windowSettings, authorSettings } = state;

  return (
    <aside className="w-full lg:w-96 shrink-0 flex flex-col bg-[#0f172a]/90 backdrop-blur-2xl border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
      
      {/* Category Tabs */}
      <div className="flex border-b border-white/10 bg-slate-900/60 p-1.5 gap-1">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'code'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Code className="h-3.5 w-3.5" />
          <span>Código</span>
        </button>

        <button
          onClick={() => setActiveTab('background')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'background'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Palette className="h-3.5 w-3.5" />
          <span>Fondo</span>
        </button>

        <button
          onClick={() => setActiveTab('window')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'window'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <Box className="h-3.5 w-3.5" />
          <span>Ventana</span>
        </button>

        <button
          onClick={() => setActiveTab('author')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'author'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
          }`}
        >
          <User className="h-3.5 w-3.5" />
          <span>Autor</span>
        </button>
      </div>

      {/* Tab Panels Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6 max-h-[calc(100vh-140px)]">
        
        {/* ================= TAB 1: CÓDIGO Y LENGUAJE ================= */}
        {activeTab === 'code' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Language Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Lenguaje de Programación</span>
                <span className="text-[10px] text-indigo-400 font-normal">Sintaxis Prism</span>
              </label>
              <select
                value={codeSettings.language}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="w-full rounded-xl bg-slate-950/80 border border-white/10 px-3.5 py-2.5 text-sm font-medium text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-inner cursor-pointer"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.id} value={lang.id} className="bg-slate-900 text-slate-100">
                    {lang.name} (.{lang.extension})
                  </option>
                ))}
              </select>
            </div>

            {/* Theme Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
                Tema de Sintaxis
              </label>
              <div className="grid grid-cols-2 gap-2">
                {THEMES.map((theme) => {
                  const isSelected = codeSettings.theme === theme.id;
                  return (
                    <button
                      key={theme.id}
                      onClick={() =>
                        onChange((prev) => ({
                          ...prev,
                          codeSettings: { ...prev.codeSettings, theme: theme.id }
                        }))
                      }
                      className={`relative flex flex-col p-2.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-500/10 ring-1 ring-indigo-500'
                          : 'border-white/10 bg-slate-950/50 hover:border-white/20 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-semibold text-slate-200">{theme.name}</span>
                        {isSelected && <Check className="h-3 w-3 text-indigo-400" />}
                      </div>
                      {/* Theme Colors Swatches */}
                      <div className="flex items-center gap-1 mt-auto">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.keyword }} />
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.function }} />
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.string }} />
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.colors.variable }} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Font Family */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Tipografía de Código
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Space Grotesk'] as FontFamily[]).map((font) => (
                  <button
                    key={font}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        codeSettings: { ...prev.codeSettings, fontFamily: font }
                      }))
                    }
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-all text-left ${
                      codeSettings.fontFamily === font
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-200 font-semibold'
                        : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-slate-900'
                    }`}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>

            {/* Font Size & Line Height Sliders */}
            <div className="space-y-3 bg-slate-950/40 p-3.5 rounded-xl border border-white/5">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                  <span>Tamaño de Fuente</span>
                  <span className="text-indigo-400">{codeSettings.fontSize}px</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={24}
                  step={1}
                  value={codeSettings.fontSize}
                  onChange={(e) =>
                    onChange((prev) => ({
                      ...prev,
                      codeSettings: { ...prev.codeSettings, fontSize: Number(e.target.value) }
                    }))
                  }
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-slate-300 mb-1.5">
                  <span>Interlineado (Line Height)</span>
                  <span className="text-indigo-400">{codeSettings.lineHeight}</span>
                </div>
                <input
                  type="range"
                  min={1.2}
                  max={2.4}
                  step={0.1}
                  value={codeSettings.lineHeight}
                  onChange={(e) =>
                    onChange((prev) => ({
                      ...prev,
                      codeSettings: { ...prev.codeSettings, lineHeight: Number(e.target.value) }
                    }))
                  }
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Line numbers toggle */}
            <div className="flex items-center justify-between bg-slate-950/40 p-3 rounded-xl border border-white/5">
              <span className="text-xs font-semibold text-slate-200">Mostrar Números de Línea</span>
              <button
                onClick={() =>
                  onChange((prev) => ({
                    ...prev,
                    codeSettings: { ...prev.codeSettings, showLineNumbers: !prev.codeSettings.showLineNumbers }
                  }))
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  codeSettings.showLineNumbers ? 'bg-indigo-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    codeSettings.showLineNumbers ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Highlighted Lines Info */}
            <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl text-xs text-indigo-200">
              💡 <span className="font-semibold">Tip Pro:</span> Haz clic en los números de línea dentro del editor para resaltar u ocultar el resaltado de líneas específicas.
              {codeSettings.highlightedLines.length > 0 && (
                <button
                  onClick={() =>
                    onChange((prev) => ({
                      ...prev,
                      codeSettings: { ...prev.codeSettings, highlightedLines: [] }
                    }))
                  }
                  className="mt-2 block text-[11px] text-pink-400 underline hover:text-pink-300"
                >
                  Limpiar líneas resaltadas ({codeSettings.highlightedLines.length})
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: FONDO Y CANVAS ================= */}
        {activeTab === 'background' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Background Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Tipo de Fondo
              </label>
              <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-white/10">
                {(['gradient', 'mesh', 'solid', 'transparent'] as BackgroundType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, type }
                      }))
                    }
                    className={`py-1.5 px-2 rounded-lg text-xs font-semibold capitalize transition-all ${
                      backgroundSettings.type === type
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {type === 'gradient' ? 'Degradado' : type === 'mesh' ? 'Mesh 3D' : type === 'solid' ? 'Sólido' : 'Transp.'}
                  </button>
                ))}
              </div>
            </div>

            {/* Gradient Swatches (for gradient & mesh) */}
            {(backgroundSettings.type === 'gradient' || backgroundSettings.type === 'mesh') && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 block">
                  Paleta de Degradados ({GRADIENTS.length})
                </label>
                <div className="grid grid-cols-4 gap-2.5">
                  {GRADIENTS.map((grad) => {
                    const isSelected = backgroundSettings.gradientId === grad.id;
                    return (
                      <button
                        key={grad.id}
                        onClick={() =>
                          onChange((prev) => ({
                            ...prev,
                            backgroundSettings: {
                              ...prev.backgroundSettings,
                              gradientId: grad.id
                            }
                          }))
                        }
                        className={`group relative h-12 rounded-xl overflow-hidden border transition-all transform hover:scale-105 ${
                          isSelected ? 'ring-2 ring-indigo-500 border-white' : 'border-white/10 opacity-85 hover:opacity-100'
                        }`}
                        style={{ background: grad.css }}
                        title={grad.name}
                      >
                        {isSelected && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                            <Check className="h-4 w-4 text-white drop-shadow" />
                          </div>
                        )}
                        <span className="absolute bottom-0.5 left-1 text-[9px] font-bold text-white/90 drop-shadow truncate max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity">
                          {grad.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Solid Color Picker */}
            {backgroundSettings.type === 'solid' && (
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Color de Fondo Sólido
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={backgroundSettings.customColor}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, customColor: e.target.value }
                      }))
                    }
                    className="h-9 w-12 rounded-lg cursor-pointer bg-transparent border border-white/20"
                  />
                  <input
                    type="text"
                    value={backgroundSettings.customColor}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, customColor: e.target.value }
                      }))
                    }
                    className="flex-1 rounded-xl bg-slate-950 border border-white/10 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {SOLID_COLORS.map((col) => (
                    <button
                      key={col}
                      onClick={() =>
                        onChange((prev) => ({
                          ...prev,
                          backgroundSettings: { ...prev.backgroundSettings, customColor: col }
                        }))
                      }
                      className="h-7 rounded-lg border border-white/10 transition-transform hover:scale-110"
                      style={{ backgroundColor: col }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Background Pattern Overlay */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Patrón Texturizado
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Ninguno' },
                  { id: 'dots', label: 'Puntos' },
                  { id: 'grid', label: 'Cuadrícula' },
                  { id: 'isometric', label: 'Isométrico' },
                  { id: 'circuit', label: 'Circuitos' }
                ].map((pat) => (
                  <button
                    key={pat.id}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, pattern: pat.id as PatternType }
                      }))
                    }
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium capitalize transition-all ${
                      backgroundSettings.pattern === pat.id
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300 font-semibold'
                        : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {pat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Padding Controls */}
            <div className="bg-slate-950/40 p-3.5 rounded-xl border border-white/5 space-y-3">
              <div className="flex justify-between text-xs font-medium text-slate-300">
                <span>Espaciado / Padding</span>
                <span className="text-indigo-400">{backgroundSettings.padding}px</span>
              </div>
              <input
                type="range"
                min={0}
                max={128}
                step={4}
                value={backgroundSettings.padding}
                onChange={(e) =>
                  onChange((prev) => ({
                    ...prev,
                    backgroundSettings: { ...prev.backgroundSettings, padding: Number(e.target.value) }
                  }))
                }
                className="w-full accent-indigo-500 cursor-pointer"
              />
              <div className="flex gap-1.5 justify-between">
                {[16, 32, 56, 80, 104].map((pVal) => (
                  <button
                    key={pVal}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, padding: pVal }
                      }))
                    }
                    className={`flex-1 py-1 rounded text-[11px] font-semibold border ${
                      backgroundSettings.padding === pVal
                        ? 'bg-indigo-600 text-white border-indigo-500'
                        : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
                    }`}
                  >
                    {pVal}px
                  </button>
                ))}
              </div>
            </div>

            {/* Border Radius of Canvas */}
            <div className="bg-slate-950/40 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between text-xs font-medium text-slate-300">
                <span>Redondeo de Esquinas del Lienzo</span>
                <span className="text-indigo-400">{backgroundSettings.borderRadius}px</span>
              </div>
              <input
                type="range"
                min={0}
                max={48}
                step={4}
                value={backgroundSettings.borderRadius}
                onChange={(e) =>
                  onChange((prev) => ({
                    ...prev,
                    backgroundSettings: { ...prev.backgroundSettings, borderRadius: Number(e.target.value) }
                  }))
                }
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Aspect Ratio / Social Format Presets */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Formato Social / Proporción
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'auto', label: 'Auto (Ajustado)' },
                  { id: '16/9', label: '16:9 (X / Twitter)' },
                  { id: '1/1', label: '1:1 (Instagram)' },
                  { id: '4/5', label: '4:5 (Insta Retrato)' },
                  { id: '9/16', label: '9:16 (Stories)' }
                ].map((ratio) => (
                  <button
                    key={ratio.id}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        backgroundSettings: { ...prev.backgroundSettings, aspectRatio: ratio.id as AspectRatioType }
                      }))
                    }
                    className={`py-2 px-2 rounded-xl border text-[11px] font-medium transition-all ${
                      backgroundSettings.aspectRatio === ratio.id
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300 font-semibold'
                        : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {ratio.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: VENTANA Y ESTILO ================= */}
        {activeTab === 'window' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Window Style Buttons */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Estilo de Controles de Ventana
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'macos', name: 'macOS Traffic Lights', badge: '🔴 🟡 🟢' },
                  { id: 'windows', name: 'Windows 11 Glass', badge: '🗕 🗖 ✕' },
                  { id: 'glass', name: 'Glass Tabs Pro', badge: '✨ Tabs' },
                  { id: 'terminal', name: 'Terminal Retro', badge: '>_ CLI' },
                  { id: 'minimal', name: 'Minimalista Clean', badge: '— Sin botones' }
                ].map((style) => {
                  const isSelected = windowSettings.style === style.id;
                  return (
                    <button
                      key={style.id}
                      onClick={() =>
                        onChange((prev) => ({
                          ...prev,
                          windowSettings: { ...prev.windowSettings, style: style.id as WindowStyle }
                        }))
                      }
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-500'
                          : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <div className="text-xs font-semibold">{style.name}</div>
                      <div className="text-[11px] text-slate-400 mt-1">{style.badge}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Filename & Header options */}
            <div className="space-y-3 bg-slate-950/40 p-3.5 rounded-xl border border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-200">Mostrar Barra de Título / Archivo</span>
                <button
                  onClick={() =>
                    onChange((prev) => ({
                      ...prev,
                      codeSettings: { ...prev.codeSettings, showFilename: !prev.codeSettings.showFilename }
                    }))
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    codeSettings.showFilename ? 'bg-indigo-600' : 'bg-slate-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      codeSettings.showFilename ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {codeSettings.showFilename && (
                <div>
                  <label className="text-[11px] font-medium text-slate-400 mb-1 block">
                    Nombre del Archivo
                  </label>
                  <input
                    type="text"
                    value={codeSettings.filename}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        codeSettings: { ...prev.codeSettings, filename: e.target.value }
                      }))
                    }
                    placeholder="ej. index.ts"
                    className="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>
              )}
            </div>

            {/* Drop Shadow Preset */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                Sombra & Profundidad 3D
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Sin Sombra' },
                  { id: 'soft', label: 'Suave' },
                  { id: 'medium', label: 'Media' },
                  { id: 'deep', label: 'Profunda' },
                  { id: '3d-floating', label: '3D Flotante 🚀' },
                  { id: 'neon-glow', label: 'Neón Glow ✨' }
                ].map((shadow) => (
                  <button
                    key={shadow.id}
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        windowSettings: { ...prev.windowSettings, shadow: shadow.id as ShadowType }
                      }))
                    }
                    className={`py-2 px-2 rounded-xl border text-[11px] font-medium transition-all ${
                      windowSettings.shadow === shadow.id
                        ? 'border-indigo-500 bg-indigo-500/15 text-indigo-300 font-semibold'
                        : 'border-white/10 bg-slate-950/40 text-slate-300 hover:bg-slate-900'
                    }`}
                  >
                    {shadow.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Window Opacity */}
            <div className="bg-slate-950/40 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex justify-between text-xs font-medium text-slate-300">
                <span>Opacidad de la Ventana</span>
                <span className="text-indigo-400">{windowSettings.opacity}%</span>
              </div>
              <input
                type="range"
                min={60}
                max={100}
                step={2}
                value={windowSettings.opacity}
                onChange={(e) =>
                  onChange((prev) => ({
                    ...prev,
                    windowSettings: { ...prev.windowSettings, opacity: Number(e.target.value) }
                  }))
                }
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Border glow toggle */}
            <div className="flex items-center justify-between bg-slate-950/40 p-3 rounded-xl border border-white/5">
              <div>
                <div className="text-xs font-semibold text-slate-200">Resplandor de Borde (Glow)</div>
                <div className="text-[10px] text-slate-400">Añade borde cristalino con reflejo de luz</div>
              </div>
              <button
                onClick={() =>
                  onChange((prev) => ({
                    ...prev,
                    windowSettings: { ...prev.windowSettings, borderGlow: !prev.windowSettings.borderGlow }
                  }))
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  windowSettings.borderGlow ? 'bg-indigo-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    windowSettings.borderGlow ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Stats badge toggle */}
            <div className="flex items-center justify-between bg-slate-950/40 p-3 rounded-xl border border-white/5">
              <span className="text-xs font-semibold text-slate-200">Insignia de Estadísticas (Líneas/Chars)</span>
              <button
                onClick={() =>
                  onChange((prev) => ({
                    ...prev,
                    windowSettings: { ...prev.windowSettings, showStats: !prev.windowSettings.showStats }
                  }))
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  windowSettings.showStats ? 'bg-indigo-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    windowSettings.showStats ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* ================= TAB 4: AUTOR Y BRANDING ================= */}
        {activeTab === 'author' && (
          <div className="space-y-5 animate-fadeIn">
            {/* Show Author Card Toggle */}
            <div className="flex items-center justify-between bg-slate-950/40 p-3.5 rounded-xl border border-white/5">
              <div>
                <div className="text-xs font-semibold text-slate-200">Firma / Tarjeta de Autor</div>
                <div className="text-[10px] text-slate-400">Muestra tu nombre y perfil social al pie del snippet</div>
              </div>
              <button
                onClick={() =>
                  onChange((prev) => ({
                    ...prev,
                    authorSettings: { ...prev.authorSettings, show: !prev.authorSettings.show }
                  }))
                }
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  authorSettings.show ? 'bg-indigo-600' : 'bg-slate-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    authorSettings.show ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {authorSettings.show && (
              <div className="space-y-3.5 bg-slate-950/40 p-4 rounded-xl border border-white/5">
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    Nombre o Marca
                  </label>
                  <input
                    type="text"
                    value={authorSettings.name}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        authorSettings: { ...prev.authorSettings, name: e.target.value }
                      }))
                    }
                    placeholder="ej. Alan Developer"
                    className="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    Usuario de Twitter / X / GitHub
                  </label>
                  <input
                    type="text"
                    value={authorSettings.handle}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        authorSettings: { ...prev.authorSettings, handle: e.target.value }
                      }))
                    }
                    placeholder="ej. @alandev"
                    className="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    URL de Avatar (Opcional)
                  </label>
                  <input
                    type="text"
                    value={authorSettings.avatarUrl}
                    onChange={(e) =>
                      onChange((prev) => ({
                        ...prev,
                        authorSettings: { ...prev.authorSettings, avatarUrl: e.target.value }
                      }))
                    }
                    placeholder="https://images.unsplash.com/..."
                    className="w-full rounded-xl bg-slate-900 border border-white/10 px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs font-medium text-slate-300">Marca de Agua SnipCode</span>
                  <button
                    onClick={() =>
                      onChange((prev) => ({
                        ...prev,
                        authorSettings: { ...prev.authorSettings, showWatermark: !prev.authorSettings.showWatermark }
                      }))
                    }
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                      authorSettings.showWatermark ? 'bg-indigo-600' : 'bg-slate-700'
                    }`}
                  >
                    <span
                      className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                        authorSettings.showWatermark ? 'translate-x-5' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </aside>
  );
};
