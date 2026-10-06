export interface EditorTheme {
  id: string;
  name: string;
  type: 'dark' | 'light';
  windowBg: string;
  textColor: string;
  cursorColor: string;
  lineHighlightBg: string;
  lineNumberColor: string;
  borderGlowColor: string;
  // Syntax token colors
  colors: {
    keyword: string;
    string: string;
    comment: string;
    function: string;
    number: string;
    operator: string;
    variable: string;
    tag: string;
    attr: string;
    boolean: string;
    punctuation: string;
  };
}

export const THEMES: EditorTheme[] = [
  {
    id: 'one-dark',
    name: 'One Dark Pro',
    type: 'dark',
    windowBg: '#1e222b',
    textColor: '#abb2bf',
    cursorColor: '#528bff',
    lineHighlightBg: 'rgba(255, 255, 255, 0.07)',
    lineNumberColor: '#4b5263',
    borderGlowColor: 'rgba(97, 175, 239, 0.25)',
    colors: {
      keyword: '#c678dd',
      string: '#98c379',
      comment: '#5c6370',
      function: '#61afef',
      number: '#d19a66',
      operator: '#56b6c2',
      variable: '#e06c75',
      tag: '#e06c75',
      attr: '#d19a66',
      boolean: '#d19a66',
      punctuation: '#abb2bf'
    }
  },
  {
    id: 'dracula',
    name: 'Dracula Dark',
    type: 'dark',
    windowBg: '#282a36',
    textColor: '#f8f8f2',
    cursorColor: '#ff79c6',
    lineHighlightBg: 'rgba(68, 71, 90, 0.5)',
    lineNumberColor: '#6272a4',
    borderGlowColor: 'rgba(189, 147, 249, 0.3)',
    colors: {
      keyword: '#ff79c6',
      string: '#f1fa8c',
      comment: '#6272a4',
      function: '#50fa7b',
      number: '#bd93f9',
      operator: '#ff79c6',
      variable: '#8be9fd',
      tag: '#ff79c6',
      attr: '#50fa7b',
      boolean: '#bd93f9',
      punctuation: '#f8f8f2'
    }
  },
  {
    id: 'tokyo-night',
    name: 'Tokyo Night',
    type: 'dark',
    windowBg: '#1a1b26',
    textColor: '#a9b1d6',
    cursorColor: '#7aa2f7',
    lineHighlightBg: 'rgba(41, 46, 66, 0.6)',
    lineNumberColor: '#444b6a',
    borderGlowColor: 'rgba(122, 162, 247, 0.3)',
    colors: {
      keyword: '#bb9af7',
      string: '#9ece6a',
      comment: '#565f89',
      function: '#7aa2f7',
      number: '#ff9e64',
      operator: '#89ddff',
      variable: '#f7768e',
      tag: '#f7768e',
      attr: '#bb9af7',
      boolean: '#ff9e64',
      punctuation: '#c0caf5'
    }
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk 2077',
    type: 'dark',
    windowBg: '#0f0c29',
    textColor: '#e0fbfc',
    cursorColor: '#00ff9f',
    lineHighlightBg: 'rgba(255, 0, 85, 0.15)',
    lineNumberColor: '#5c4d7d',
    borderGlowColor: 'rgba(0, 255, 234, 0.4)',
    colors: {
      keyword: '#ff0055',
      string: '#00ff9f',
      comment: '#6c5b7b',
      function: '#00f0ff',
      number: '#ffe600',
      operator: '#ff0055',
      variable: '#00f0ff',
      tag: '#ffe600',
      attr: '#ff0055',
      boolean: '#ffe600',
      punctuation: '#e0fbfc'
    }
  },
  {
    id: 'nord',
    name: 'Nord Frost',
    type: 'dark',
    windowBg: '#2e3440',
    textColor: '#d8dee9',
    cursorColor: '#88c0d0',
    lineHighlightBg: 'rgba(67, 76, 94, 0.5)',
    lineNumberColor: '#4c566a',
    borderGlowColor: 'rgba(136, 192, 208, 0.25)',
    colors: {
      keyword: '#81a1c1',
      string: '#a3be8c',
      comment: '#616e88',
      function: '#88c0d0',
      number: '#b48ead',
      operator: '#81a1c1',
      variable: '#d8dee9',
      tag: '#81a1c1',
      attr: '#8fbcbb',
      boolean: '#b48ead',
      punctuation: '#eceff4'
    }
  },
  {
    id: 'catppuccin',
    name: 'Catppuccin Mocha',
    type: 'dark',
    windowBg: '#181825',
    textColor: '#cdd6f4',
    cursorColor: '#f5c2e7',
    lineHighlightBg: 'rgba(49, 50, 68, 0.6)',
    lineNumberColor: '#585b70',
    borderGlowColor: 'rgba(203, 166, 247, 0.3)',
    colors: {
      keyword: '#cba6f7',
      string: '#a6e3a1',
      comment: '#6c7086',
      function: '#89b4fa',
      number: '#fab387',
      operator: '#94e2d5',
      variable: '#f38ba8',
      tag: '#f38ba8',
      attr: '#f9e2af',
      boolean: '#fab387',
      punctuation: '#bac2de'
    }
  },
  {
    id: 'monokai',
    name: 'Monokai Pro',
    type: 'dark',
    windowBg: '#272822',
    textColor: '#f8f8f2',
    cursorColor: '#f92672',
    lineHighlightBg: 'rgba(62, 61, 50, 0.5)',
    lineNumberColor: '#75715e',
    borderGlowColor: 'rgba(230, 219, 116, 0.25)',
    colors: {
      keyword: '#f92672',
      string: '#e6db74',
      comment: '#75715e',
      function: '#a6e22e',
      number: '#ae81ff',
      operator: '#f92672',
      variable: '#66d9ef',
      tag: '#f92672',
      attr: '#a6e22e',
      boolean: '#ae81ff',
      punctuation: '#f8f8f2'
    }
  },
  {
    id: 'github-light',
    name: 'GitHub Clean Light',
    type: 'light',
    windowBg: '#ffffff',
    textColor: '#24292f',
    cursorColor: '#0969da',
    lineHighlightBg: 'rgba(234, 238, 242, 0.8)',
    lineNumberColor: '#8c959f',
    borderGlowColor: 'rgba(9, 105, 218, 0.15)',
    colors: {
      keyword: '#cf222e',
      string: '#0a3069',
      comment: '#6e7781',
      function: '#8250df',
      number: '#0550ae',
      operator: '#cf222e',
      variable: '#953800',
      tag: '#116329',
      attr: '#0550ae',
      boolean: '#0550ae',
      punctuation: '#24292f'
    }
  }
];
