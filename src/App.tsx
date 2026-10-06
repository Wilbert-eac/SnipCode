import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SnipState, PresetTemplate } from './types';
import { PRESETS } from './data/presets';
import { LANGUAGES } from './data/languages';
import { GRADIENTS } from './data/backgrounds';
import { THEMES } from './data/themes';
import { encodeStateToUrl, decodeStateFromUrl } from './utils/urlState';
import { exportToPng, copyToClipboard } from './utils/exportImage';
import { Navbar } from './components/Navbar';
import { ControlsSidebar } from './components/ControlsSidebar';
import { CodeCanvas } from './components/CodeCanvas';
import { ExportToolbar } from './components/ExportToolbar';
import { PresetsModal } from './components/PresetsModal';
import { ShortcutsModal } from './components/ShortcutsModal';

const DEFAULT_STATE: SnipState = PRESETS[0].state;

export function App() {
  const [state, setState] = useState<SnipState>(() => {
    const urlState = decodeStateFromUrl();
    return urlState || DEFAULT_STATE;
  });

  const [isPresetsOpen, setIsPresetsOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [copiedShare, setCopiedShare] = useState(false);
  const [zoom, setZoom] = useState(1);

  const canvasRef = useRef<HTMLDivElement>(null);

  // Sync state to URL hash on change
  useEffect(() => {
    const hash = encodeStateToUrl(state);
    if (hash) {
      window.history.replaceState(null, '', hash);
    }
  }, [state]);

  // Handle language switch and load default sample code
  const handleLanguageChange = (langId: string) => {
    const selected = LANGUAGES.find((l) => l.id === langId);
    if (!selected) return;

    setState((prev) => ({
      ...prev,
      codeSettings: {
        ...prev.codeSettings,
        language: selected.id,
        filename: selected.defaultFilename,
        code: selected.sampleCode,
        highlightedLines: []
      }
    }));
  };

  // Toggle highlight for specific line
  const handleToggleLineHighlight = (lineNum: number) => {
    setState((prev) => {
      const isAlready = prev.codeSettings.highlightedLines.includes(lineNum);
      const updated = isAlready
        ? prev.codeSettings.highlightedLines.filter((l) => l !== lineNum)
        : [...prev.codeSettings.highlightedLines, lineNum];
      return {
        ...prev,
        codeSettings: {
          ...prev.codeSettings,
          highlightedLines: updated
        }
      };
    });
  };

  // Randomize styling
  const handleRandomize = useCallback(() => {
    const randomGrad = GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)];
    const randomTheme = THEMES[Math.floor(Math.random() * THEMES.length)];
    const patterns: Array<'none' | 'dots' | 'grid' | 'isometric' | 'circuit'> = ['none', 'dots', 'grid', 'circuit'];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    const shadows: Array<'soft' | 'medium' | 'deep' | '3d-floating' | 'neon-glow'> = ['deep', '3d-floating', 'neon-glow', 'medium'];
    const randomShadow = shadows[Math.floor(Math.random() * shadows.length)];

    setState((prev) => ({
      ...prev,
      backgroundSettings: {
        ...prev.backgroundSettings,
        type: Math.random() > 0.3 ? 'gradient' : 'mesh',
        gradientId: randomGrad.id,
        pattern: randomPattern
      },
      windowSettings: {
        ...prev.windowSettings,
        shadow: randomShadow,
        borderGlow: Math.random() > 0.4
      },
      codeSettings: {
        ...prev.codeSettings,
        theme: randomTheme.id
      }
    }));
  }, []);

  // Reset to default
  const handleReset = () => {
    setState(DEFAULT_STATE);
  };

  // Copy share URL
  const handleShareUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    } catch {
      // ignore
    }
  };

  // Load preset template
  const handleSelectPreset = (preset: PresetTemplate) => {
    setState(preset.state);
  };

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in a standard input or textarea (unless modifier combination)
      const target = e.target as HTMLElement;
      const isEditingText = target.tagName === 'INPUT' || (target.tagName === 'TEXTAREA' && !e.ctrlKey && !e.metaKey && !e.altKey);

      // Ctrl+S / Cmd+S: Download PNG
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        if (canvasRef.current) {
          const cleanName = state.codeSettings.filename ? state.codeSettings.filename.replace(/\.[^/.]+$/, '') : 'printcode';
          exportToPng(canvasRef.current, { scale: 2, filename: `${cleanName}-printcode.png` });
        }
        return;
      }

      // Alt+C or Ctrl+Shift+C: Copy PNG image to clipboard
      if ((e.altKey && e.key.toLowerCase() === 'c') || ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'c')) {
        e.preventDefault();
        if (canvasRef.current) {
          copyToClipboard(canvasRef.current, 2);
        }
        return;
      }

      // Alt+R: Randomize style
      if (e.altKey && e.key.toLowerCase() === 'r') {
        e.preventDefault();
        handleRandomize();
        return;
      }

      // Alt+P: Open Presets Modal
      if (e.altKey && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setIsPresetsOpen((prev) => !prev);
        return;
      }

      // Escape: Close any open modal
      if (e.key === 'Escape') {
        setIsPresetsOpen(false);
        setIsShortcutsOpen(false);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [state.codeSettings.filename, handleRandomize]);

  return (
    <div className="flex flex-col min-h-screen bg-[#070a13] text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenPresets={() => setIsPresetsOpen(true)}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
        onRandomize={handleRandomize}
        onReset={handleReset}
        onShareUrl={handleShareUrl}
        copiedShare={copiedShare}
      />

      {/* Main Studio Body: Sidebar + Interactive Canvas */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* Controls Sidebar */}
        <ControlsSidebar
          state={state}
          onChange={setState}
          onLanguageChange={handleLanguageChange}
        />

        {/* Code Canvas Area */}
        <CodeCanvas
          state={state}
          onCodeChange={(newCode) =>
            setState((prev) => ({
              ...prev,
              codeSettings: { ...prev.codeSettings, code: newCode }
            }))
          }
          onToggleLineHighlight={handleToggleLineHighlight}
          canvasRef={canvasRef}
          zoom={zoom}
          onZoomChange={setZoom}
        />
      </main>

      {/* Bottom Floating Export Toolbar */}
      <ExportToolbar
        canvasRef={canvasRef}
        rawCode={state.codeSettings.code}
        filename={state.codeSettings.filename}
      />

      {/* Modals */}
      <PresetsModal
        isOpen={isPresetsOpen}
        onClose={() => setIsPresetsOpen(false)}
        onSelectPreset={handleSelectPreset}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  );
}

export default App;
