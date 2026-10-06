export type WindowStyle = 'macos' | 'windows' | 'glass' | 'minimal' | 'terminal';

export type BackgroundType = 'gradient' | 'mesh' | 'solid' | 'pattern' | 'transparent';

export type PatternType = 'none' | 'dots' | 'grid' | 'isometric' | 'circuit';

export type ShadowType = 'none' | 'soft' | 'medium' | 'deep' | '3d-floating' | 'neon-glow' | 'glass-reflection';

export type AspectRatioType = 'auto' | '1/1' | '16/9' | '4/5' | '9/16' | 'twitter-header';

export type FontFamily = 'JetBrains Mono' | 'Fira Code' | 'Source Code Pro' | 'Space Grotesk' | 'monospace';

export interface CodeSettings {
  code: string;
  language: string;
  theme: string;
  fontFamily: FontFamily;
  fontSize: number;
  lineHeight: number;
  showLineNumbers: boolean;
  highlightedLines: number[];
  filename: string;
  showFilename: boolean;
  tabSize: number;
}

export interface BackgroundSettings {
  type: BackgroundType;
  gradientId: string;
  customColor: string;
  pattern: PatternType;
  padding: number;
  borderRadius: number;
  aspectRatio: AspectRatioType;
  blurBackground: boolean;
}

export interface WindowSettings {
  style: WindowStyle;
  shadow: ShadowType;
  opacity: number;
  showBorder: boolean;
  borderGlow: boolean;
  showIcon: boolean;
  showStats: boolean;
}

export interface AuthorSettings {
  show: boolean;
  name: string;
  handle: string;
  avatarUrl: string;
  showWatermark: boolean;
}

export interface SnipState {
  codeSettings: CodeSettings;
  backgroundSettings: BackgroundSettings;
  windowSettings: WindowSettings;
  authorSettings: AuthorSettings;
}

export interface PresetTemplate {
  id: string;
  name: string;
  description: string;
  badge: string;
  state: SnipState;
}
