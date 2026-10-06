import * as htmlToImage from 'html-to-image';
import confetti from 'canvas-confetti';

export interface ExportOptions {
  scale?: number;
  filename?: string;
}

export function fireCelebrationConfetti() {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.85 },
    colors: ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b']
  });
}

export async function exportToPng(element: HTMLElement, options: ExportOptions = {}): Promise<void> {
  const { scale = 2, filename = 'printcode-snippet.png' } = options;

  try {
    const dataUrl = await htmlToImage.toPng(element, {
      pixelRatio: scale,
      cacheBust: true,
      skipFonts: false
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
    
    fireCelebrationConfetti();
  } catch (error) {
    console.error('Error generating PNG export:', error);
    throw error;
  }
}

export async function exportToSvg(element: HTMLElement, options: ExportOptions = {}): Promise<void> {
  const { filename = 'printcode-snippet.svg' } = options;

  try {
    const dataUrl = await htmlToImage.toSvg(element, {
      cacheBust: true
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();

    fireCelebrationConfetti();
  } catch (error) {
    console.error('Error generating SVG export:', error);
    throw error;
  }
}

export async function copyToClipboard(element: HTMLElement, scale: number = 2): Promise<boolean> {
  try {
    const blob = await htmlToImage.toBlob(element, {
      pixelRatio: scale,
      cacheBust: true,
      skipFonts: false
    });

    if (!blob) {
      throw new Error('Failed to generate image blob');
    }

    // Try modern Clipboard API
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': blob
        })
      ]);
      fireCelebrationConfetti();
      return true;
    } else {
      throw new Error('Clipboard API not supported in this browser environment');
    }
  } catch (error) {
    console.error('Error copying snippet to clipboard:', error);
    throw error;
  }
}
