import React, { useRef, useMemo } from 'react';
import { SnipState, FontFamily } from '../types';
import { THEMES } from '../data/themes';
import { GRADIENTS } from '../data/backgrounds';
import { highlightCode } from '../utils/prismHelper';
import { Terminal, FileCode, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';

interface CodeCanvasProps {
  state: SnipState;
  onCodeChange: (newCode: string) => void;
  onToggleLineHighlight: (lineNum: number) => void;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  zoom: number;
  onZoomChange: (newZoom: number) => void;
}

export const CodeCanvas: React.FC<CodeCanvasProps> = ({
  state,
  onCodeChange,
  onToggleLineHighlight,
  canvasRef,
  zoom,
  onZoomChange
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const { codeSettings, backgroundSettings, windowSettings, authorSettings } = state;

  // Selected Theme Data
  const currentTheme = useMemo(() => {
    return THEMES.find((t) => t.id === codeSettings.theme) || THEMES[0];
  }, [codeSettings.theme]);

  // Selected Gradient Background Data
  const currentGradient = useMemo(() => {
    return GRADIENTS.find((g) => g.id === backgroundSettings.gradientId) || GRADIENTS[0];
  }, [backgroundSettings.gradientId]);

  // Highlighted HTML
  const highlightedCode = useMemo(() => {
    return highlightCode(codeSettings.code, codeSettings.language);
  }, [codeSettings.code, codeSettings.language]);

  // Code line count and lines
  const lines = useMemo(() => {
    return codeSettings.code.split('\n');
  }, [codeSettings.code]);

  // Precise Font Family mapping with fallback monospace
  const resolvedFontFamily = useMemo(() => {
    switch (codeSettings.fontFamily) {
      case 'JetBrains Mono':
        return "'JetBrains Mono', 'Fira Code', 'Courier New', monospace";
      case 'Fira Code':
        return "'Fira Code', 'JetBrains Mono', 'Courier New', monospace";
      case 'Source Code Pro':
        return "'Source Code Pro', 'JetBrains Mono', 'Courier New', monospace";
      case 'Space Grotesk':
        return "'Space Grotesk', 'JetBrains Mono', monospace";
      default:
        return "'JetBrains Mono', 'Fira Code', monospace";
    }
  }, [codeSettings.fontFamily]);

  // Exact Pixel Line Height (ensures 100% pixel-perfect alignment across all browsers)
  const computedLineHeightPx = useMemo(() => {
    return Math.round(codeSettings.fontSize * codeSettings.lineHeight);
  }, [codeSettings.fontSize, codeSettings.lineHeight]);

  // Total code block height
  const codeBlockHeightPx = useMemo(() => {
    return Math.max(lines.length * computedLineHeightPx, computedLineHeightPx * 2);
  }, [lines.length, computedLineHeightPx]);

  // Background style computation
  const getBackgroundStyle = () => {
    if (backgroundSettings.type === 'transparent') {
      return {
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
        backgroundColor: 'rgba(15, 23, 42, 0.4)'
      };
    }
    if (backgroundSettings.type === 'solid') {
      return { backgroundColor: backgroundSettings.customColor };
    }
    return { background: currentGradient.css };
  };

  // Pattern Class
  const getPatternClass = () => {
    switch (backgroundSettings.pattern) {
      case 'dots':
        return 'bg-pattern-dots';
      case 'grid':
        return 'bg-pattern-grid';
      case 'isometric':
        return 'bg-pattern-isometric';
      case 'circuit':
        return 'bg-pattern-circuit';
      default:
        return '';
    }
  };

  // Window Shadow Style
  const getShadowStyle = () => {
    switch (windowSettings.shadow) {
      case 'soft':
        return '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
      case 'medium':
        return '0 20px 40px -10px rgba(0, 0, 0, 0.5)';
      case 'deep':
        return '0 30px 60px -12px rgba(0, 0, 0, 0.7)';
      case '3d-floating':
        return '0 35px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(99, 102, 241, 0.25)';
      case 'neon-glow':
        return `0 0 50px ${currentTheme.borderGlowColor}, 0 25px 50px -10px rgba(0,0,0,0.85)`;
      case 'glass-reflection':
        return '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)';
      default:
        return 'none';
    }
  };

  // Handle Tab key and shortcuts in textarea for code indenting
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const spaces = '  '; // 2 spaces
      const newCode = codeSettings.code.substring(0, start) + spaces + codeSettings.code.substring(end);
      onCodeChange(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
      }, 0);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-between min-h-[500px] overflow-hidden bg-[#070a13] relative">
      
      {/* Canvas Header / Zoom Bar */}
      <div className="w-full flex items-center justify-between px-6 py-3 border-b border-white/5 bg-[#0b0f19]/40 backdrop-blur-md z-10 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-300">Lienzo Interactivo de Renderizado</span>
          <span className="text-[11px] text-slate-500 hidden sm:inline">• Tipografía activa: <strong className="text-indigo-300">{codeSettings.fontFamily}</strong></span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-lg border border-white/10 shadow-inner">
          <button
            onClick={() => onZoomChange(Math.max(0.5, zoom - 0.1))}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Reducir zoom"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <span className="w-12 text-center text-xs font-mono font-semibold text-indigo-300">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={() => onZoomChange(Math.min(1.5, zoom + 0.1))}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            title="Aumentar zoom"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => onZoomChange(1)}
            className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-300 hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport Area */}
      <div className="flex-1 w-full overflow-auto flex items-center justify-center p-4 sm:p-8 md:p-12">
        <div
          style={{
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
            transition: 'transform 0.15s ease-out'
          }}
        >
          {/* THE EXPORTABLE ELEMENT */}
          <div
            ref={canvasRef}
            id="printcode-export-node"
            className={`relative overflow-hidden transition-all duration-300 flex flex-col items-center justify-center ${getPatternClass()}`}
            style={{
              ...getBackgroundStyle(),
              padding: `${backgroundSettings.padding}px`,
              borderRadius: `${backgroundSettings.borderRadius}px`,
              minWidth: backgroundSettings.aspectRatio === '1/1' ? '600px' : '500px',
              maxWidth: '920px',
              aspectRatio: backgroundSettings.aspectRatio === 'auto' ? undefined : backgroundSettings.aspectRatio.replace('/', ' / ')
            }}
          >
            {/* Ambient Background Glow Spot */}
            <div
              className="absolute -inset-20 opacity-30 blur-3xl pointer-events-none rounded-full"
              style={{
                background: currentGradient.css
              }}
            />

            {/* THE CODE WINDOW */}
            <div
              className="relative w-full max-w-full overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: currentTheme.windowBg,
                opacity: windowSettings.opacity / 100,
                borderRadius: '16px',
                boxShadow: getShadowStyle(),
                border: windowSettings.showBorder
                  ? `1px solid ${windowSettings.borderGlow ? currentTheme.borderGlowColor : 'rgba(255, 255, 255, 0.12)'}`
                  : 'none'
              }}
            >
              {/* Window Header Bar */}
              {windowSettings.style !== 'minimal' && (
                <div
                  className="flex items-center justify-between px-4 py-3 border-b"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(0, 0, 0, 0.18)'
                  }}
                >
                  {/* Left: Window Controls */}
                  <div className="flex items-center gap-2">
                    {windowSettings.style === 'macos' && (
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 shadow-sm" />
                        <div className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 shadow-sm" />
                        <div className="h-3 w-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 shadow-sm" />
                      </div>
                    )}

                    {windowSettings.style === 'windows' && (
                      <div className="flex items-center gap-2 text-slate-400 text-xs">
                        <span className="cursor-default hover:text-white">─</span>
                        <span className="cursor-default hover:text-white">▢</span>
                        <span className="cursor-default hover:text-red-400">✕</span>
                      </div>
                    )}

                    {windowSettings.style === 'glass' && (
                      <div className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-200 border border-white/10">
                        <FileCode className="h-3 w-3 text-indigo-400 mr-1" />
                        <span>{codeSettings.filename || 'snippet'}</span>
                      </div>
                    )}

                    {windowSettings.style === 'terminal' && (
                      <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Terminal className="h-3.5 w-3.5" />
                        <span>bash ~ printcode</span>
                      </div>
                    )}
                  </div>

                  {/* Center: Title / Filename */}
                  {codeSettings.showFilename && windowSettings.style !== 'glass' && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 px-3" style={{ fontFamily: resolvedFontFamily }}>
                      <FileCode className="h-3.5 w-3.5 text-indigo-400/80" />
                      <span className="truncate max-w-[200px]">{codeSettings.filename || 'snippet'}</span>
                    </div>
                  )}

                  {/* Right: Quick language badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: currentTheme.colors.keyword,
                        fontFamily: resolvedFontFamily
                      }}
                    >
                      {codeSettings.language}
                    </span>
                  </div>
                </div>
              )}

              {/* Code Content Body with synchronized editor layer */}
              <div
                className="relative overflow-x-auto p-5"
                style={{
                  fontFamily: resolvedFontFamily,
                  fontSize: `${codeSettings.fontSize}px`,
                  lineHeight: `${computedLineHeightPx}px`
                }}
              >
                <div className="flex items-start">
                  {/* Line Numbers Column */}
                  {codeSettings.showLineNumbers && (
                    <div
                      className="select-none pr-4 mr-4 text-right flex flex-col border-r shrink-0"
                      style={{
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                        color: currentTheme.lineNumberColor,
                        fontFamily: resolvedFontFamily,
                        fontSize: `${codeSettings.fontSize}px`,
                        lineHeight: `${computedLineHeightPx}px`,
                        minHeight: `${codeBlockHeightPx}px`
                      }}
                    >
                      {lines.map((_, idx) => {
                        const lineNum = idx + 1;
                        const isHighlighted = codeSettings.highlightedLines.includes(lineNum);
                        return (
                          <span
                            key={lineNum}
                            onClick={() => onToggleLineHighlight(lineNum)}
                            className={`cursor-pointer px-1 transition-colors block hover:text-white ${
                              isHighlighted ? 'text-indigo-400 font-bold' : ''
                            }`}
                            style={{
                              height: `${computedLineHeightPx}px`,
                              lineHeight: `${computedLineHeightPx}px`
                            }}
                            title={`Línea ${lineNum} (Clic para resaltar)`}
                          >
                            {lineNum}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {/* Editable Code Box Container */}
                  <div
                    className="relative flex-1 min-w-[300px]"
                    style={{
                      minHeight: `${codeBlockHeightPx}px`
                    }}
                  >
                    {/* Line Highlight Overlays */}
                    {codeSettings.highlightedLines.map((lineNum) => {
                      const topOffset = (lineNum - 1) * computedLineHeightPx;
                      return (
                        <div
                          key={lineNum}
                          className="absolute left-0 right-0 pointer-events-none rounded"
                          style={{
                            top: `${topOffset}px`,
                            height: `${computedLineHeightPx}px`,
                            backgroundColor: currentTheme.lineHighlightBg,
                            borderLeft: `3px solid ${currentTheme.colors.keyword}`
                          }}
                        />
                      );
                    })}

                    {/* Syntax Highlighted Render Layer */}
                    <pre
                      ref={preRef}
                      className="m-0 p-0 pointer-events-none select-none overflow-visible"
                      style={{
                        fontFamily: resolvedFontFamily,
                        fontSize: `${codeSettings.fontSize}px`,
                        lineHeight: `${computedLineHeightPx}px`,
                        color: currentTheme.textColor,
                        tabSize: codeSettings.tabSize,
                        minHeight: `${codeBlockHeightPx}px`
                      }}
                    >
                      <code
                        className={`language-${codeSettings.language}`}
                        style={{
                          fontFamily: resolvedFontFamily,
                          fontSize: `${codeSettings.fontSize}px`,
                          lineHeight: `${computedLineHeightPx}px`
                        }}
                        dangerouslySetInnerHTML={{ __html: highlightedCode }}
                      />
                    </pre>

                    {/* Transparent Live Textarea on Top */}
                    <textarea
                      ref={textareaRef}
                      value={codeSettings.code}
                      onChange={(e) => onCodeChange(e.target.value)}
                      onKeyDown={handleKeyDown}
                      spellCheck={false}
                      className="printcode-editor absolute inset-0 w-full h-full bg-transparent text-transparent caret-white outline-none resize-none overflow-hidden m-0 p-0 whitespace-pre"
                      style={{
                        fontFamily: resolvedFontFamily,
                        fontSize: `${codeSettings.fontSize}px`,
                        lineHeight: `${computedLineHeightPx}px`,
                        caretColor: currentTheme.cursorColor,
                        tabSize: codeSettings.tabSize,
                        minHeight: `${codeBlockHeightPx}px`
                      }}
                    />
                  </div>
                </div>

                {/* Optional Window Stats at the bottom */}
                {windowSettings.showStats && (
                  <div
                    className="mt-5 pt-3 flex items-center justify-between border-t text-[11px] text-slate-400 select-none"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                      fontFamily: resolvedFontFamily
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span>⚡ {lines.length} líneas</span>
                      <span>•</span>
                      <span>{codeSettings.code.length} caracteres</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-indigo-300">
                      <Sparkles className="h-3 w-3" />
                      <span>{currentTheme.name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* AUTHOR / BRANDING CARD AT BOTTOM */}
            {authorSettings.show && (
              <div
                className="mt-4 flex items-center justify-between w-full max-w-full px-4 py-2.5 rounded-xl backdrop-blur-xl border select-none transition-all shadow-lg"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.75)',
                  borderColor: 'rgba(255, 255, 255, 0.12)'
                }}
              >
                {/* Author Info */}
                <div className="flex items-center gap-2.5">
                  {authorSettings.avatarUrl ? (
                    <img
                      src={authorSettings.avatarUrl}
                      alt={authorSettings.name}
                      crossOrigin="anonymous"
                      className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20"
                    />
                  ) : (
                    <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow">
                      {authorSettings.name ? authorSettings.name[0]?.toUpperCase() : '⚡'}
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-bold text-white leading-tight">
                      {authorSettings.name || 'Desarrollador'}
                    </div>
                    <div className="text-[10px] font-mono text-indigo-300">
                      {authorSettings.handle || '@printcode'}
                    </div>
                  </div>
                </div>

                {/* SnipCode Watermark */}
                {authorSettings.showWatermark && (
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    <Sparkles className="h-3 w-3 text-pink-400" />
                    <span>PrintCode</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
