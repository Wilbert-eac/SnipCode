export interface GradientBackground {
  id: string;
  name: string;
  category: 'mesh' | 'gradient' | 'minimal' | 'neon';
  css: string;
  previewColor: string;
}

export const GRADIENTS: GradientBackground[] = [
  {
    id: 'hyper-sunset',
    name: 'Hyper Sunset',
    category: 'mesh',
    css: 'linear-gradient(135deg, #ff0844 0%, #ffb199 50%, #f77062 100%)',
    previewColor: '#ff0844'
  },
  {
    id: 'deep-aurora',
    name: 'Deep Aurora',
    category: 'mesh',
    css: 'radial-gradient(at 0% 0%, #00f2fe 0px, transparent 50%), radial-gradient(at 100% 0%, #4facfe 0px, transparent 50%), radial-gradient(at 100% 100%, #6b11ff 0px, transparent 50%), radial-gradient(at 0% 100%, #000428 0px, transparent 50%), #050514',
    previewColor: '#00f2fe'
  },
  {
    id: 'velvet-orchid',
    name: 'Velvet Orchid',
    category: 'gradient',
    css: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    previewColor: '#764ba2'
  },
  {
    id: 'cyber-matrix',
    name: 'Cyber Matrix',
    category: 'neon',
    css: 'radial-gradient(at 10% 20%, #0575E6 0px, transparent 40%), radial-gradient(at 90% 80%, #00F260 0px, transparent 40%), #020b14',
    previewColor: '#00F260'
  },
  {
    id: 'midnight-tokyo',
    name: 'Midnight Tokyo',
    category: 'mesh',
    css: 'radial-gradient(at 80% 0%, #f953c6 0px, transparent 45%), radial-gradient(at 0% 50%, #b91d73 0px, transparent 40%), radial-gradient(at 50% 100%, #8e2de2 0px, transparent 50%), #0d0f1a',
    previewColor: '#f953c6'
  },
  {
    id: 'emerald-glass',
    name: 'Emerald Glade',
    category: 'gradient',
    css: 'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
    previewColor: '#0ba360'
  },
  {
    id: 'cotton-candy',
    name: 'Cotton Candy',
    category: 'gradient',
    css: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
    previewColor: '#fbc2eb'
  },
  {
    id: 'obsidian-glow',
    name: 'Obsidian Glow',
    category: 'minimal',
    css: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15), transparent 70%), #0f172a',
    previewColor: '#1e293b'
  },
  {
    id: 'fire-ember',
    name: 'Fire Ember',
    category: 'gradient',
    css: 'linear-gradient(135deg, #f12711 0%, #f5af19 100%)',
    previewColor: '#f12711'
  },
  {
    id: 'synthwave-grid',
    name: 'Synthwave 80s',
    category: 'neon',
    css: 'linear-gradient(to bottom right, #ff007f, #7928ca, #4338ca)',
    previewColor: '#ff007f'
  },
  {
    id: 'holographic-foil',
    name: 'Holo Holographic',
    category: 'mesh',
    css: 'linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)',
    previewColor: '#ff9a9e'
  },
  {
    id: 'pure-carbon',
    name: 'Pure Carbon',
    category: 'minimal',
    css: 'linear-gradient(180deg, #18181b 0%, #09090b 100%)',
    previewColor: '#09090b'
  }
];

export const SOLID_COLORS = [
  '#000000',
  '#0f172a',
  '#1e1b4b',
  '#311042',
  '#042f2e',
  '#450a0a',
  '#ffffff',
  '#f8fafc',
  '#6366f1',
  '#ec4899',
  '#10b981',
  '#f59e0b'
];
