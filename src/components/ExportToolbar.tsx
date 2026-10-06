import React, { useState } from 'react';
import { Copy, Download, Image, Code2, Check, Sparkles, FileImage, Loader2 } from 'lucide-react';
import { copyToClipboard, exportToPng, exportToSvg } from '../utils/exportImage';

interface ExportToolbarProps {
  canvasRef: React.RefObject<HTMLDivElement | null>;
  rawCode: string;
  filename: string;
}

export const ExportToolbar: React.FC<ExportToolbarProps> = ({
  canvasRef,
  rawCode,
  filename
}) => {
  const [isCopyingImg, setIsCopyingImg] = useState(false);
  const [copiedImgSuccess, setCopiedImgSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [scale, setScale] = useState<number>(2);
  const [copiedCodeSuccess, setCopiedCodeSuccess] = useState(false);

  // Copy Image to Clipboard
  const handleCopyImage = async () => {
    if (!canvasRef.current || isCopyingImg) return;
    setIsCopyingImg(true);
    try {
      await copyToClipboard(canvasRef.current, scale);
      setCopiedImgSuccess(true);
      setTimeout(() => setCopiedImgSuccess(false), 2500);
    } catch (err) {
      alert('No se pudo copiar la imagen al portapapeles directamente. Puedes usar el botón de Descargar PNG.');
    } finally {
      setIsCopyingImg(false);
    }
  };

  // Download PNG
  const handleDownloadPng = async () => {
    if (!canvasRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      const cleanName = filename ? filename.replace(/\.[^/.]+$/, '') : 'snipcode';
      await exportToPng(canvasRef.current, {
        scale,
        filename: `${cleanName}-snipcode.png`
      });
    } catch (err) {
      alert('Error exportando la imagen PNG.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Download SVG
  const handleDownloadSvg = async () => {
    if (!canvasRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      const cleanName = filename ? filename.replace(/\.[^/.]+$/, '') : 'snipcode';
      await exportToSvg(canvasRef.current, {
        filename: `${cleanName}-snipcode.svg`
      });
    } catch (err) {
      alert('Error exportando SVG.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Copy Raw Code Text
  const handleCopyRawCode = async () => {
    try {
      await navigator.clipboard.writeText(rawCode);
      setCopiedCodeSuccess(true);
      setTimeout(() => setCopiedCodeSuccess(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <footer className="sticky bottom-0 z-40 w-full border-t border-white/10 bg-[#0b0f19]/90 backdrop-blur-2xl px-4 py-3 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        
        {/* Scale resolution picker */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="hidden sm:inline font-medium">Resolución:</span>
          <div className="flex bg-slate-900/90 rounded-xl p-1 border border-white/10 shadow-inner">
            {[
              { val: 1, label: '1x SD' },
              { val: 2, label: '2x HD' },
              { val: 3, label: '3x 4K' }
            ].map((res) => (
              <button
                key={res.val}
                onClick={() => setScale(res.val)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  scale === res.val
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {res.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Export Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto flex-wrap">
          {/* Copy Raw Code */}
          <button
            onClick={handleCopyRawCode}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all active:scale-95"
            title="Copiar texto de código fuente"
          >
            {copiedCodeSuccess ? <Check className="h-4 w-4 text-emerald-400" /> : <Code2 className="h-4 w-4 text-slate-400" />}
            <span className="hidden sm:inline">{copiedCodeSuccess ? '¡Código Copiado!' : 'Copiar Texto'}</span>
          </button>

          {/* Download SVG */}
          <button
            onClick={handleDownloadSvg}
            disabled={isDownloading}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all active:scale-95 disabled:opacity-50"
            title="Descargar gráfico vectorial SVG"
          >
            <FileImage className="h-4 w-4 text-purple-400" />
            <span className="hidden sm:inline">SVG</span>
          </button>

          {/* Download PNG */}
          <button
            onClick={handleDownloadPng}
            disabled={isDownloading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-xs font-semibold text-indigo-200 hover:bg-indigo-600/30 hover:text-white transition-all active:scale-95 disabled:opacity-50"
          >
            {isDownloading ? (
              <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
            ) : (
              <Download className="h-4 w-4 text-indigo-400" />
            )}
            <span>Descargar PNG</span>
          </button>

          {/* Primary Action: Copy Image (PNG to Clipboard) */}
          <button
            onClick={handleCopyImage}
            disabled={isCopyingImg}
            className="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xs font-bold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 active:scale-95 transition-all disabled:opacity-75"
          >
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 opacity-40 blur group-hover:opacity-75 transition duration-300 -z-10" />
            {isCopyingImg ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : copiedImgSuccess ? (
              <Check className="h-4 w-4 text-white animate-bounce" />
            ) : (
              <Copy className="h-4 w-4 text-white" />
            )}
            <span>{copiedImgSuccess ? '¡Imagen Copiada al Portapapeles!' : 'Copiar Imagen PNG'}</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
