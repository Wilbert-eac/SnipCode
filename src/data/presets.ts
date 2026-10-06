import { PresetTemplate } from '../types';

export const PRESETS: PresetTemplate[] = [
  {
    id: 'viral-twitter',
    name: 'Viral Tech Tip',
    description: 'Perfect for Twitter / X engagement with vivid sunset gradient and 3D depth.',
    badge: 'Popular 🔥',
    state: {
      codeSettings: {
        code: `// ✨ Modern React 19 Action Pattern
async function updateProfile(formData: FormData) {
  'use server';
  const name = formData.get('name');
  await db.users.update({ where: { id: user.id }, data: { name } });
  revalidatePath('/dashboard');
}`,
        language: 'typescript',
        theme: 'one-dark',
        fontFamily: 'JetBrains Mono',
        fontSize: 14,
        lineHeight: 1.6,
        showLineNumbers: true,
        highlightedLines: [2, 3],
        filename: 'actions.ts',
        showFilename: true,
        tabSize: 2
      },
      backgroundSettings: {
        type: 'gradient',
        gradientId: 'hyper-sunset',
        customColor: '#ff0844',
        pattern: 'dots',
        padding: 56,
        borderRadius: 20,
        aspectRatio: 'auto',
        blurBackground: false
      },
      windowSettings: {
        style: 'macos',
        shadow: '3d-floating',
        opacity: 96,
        showBorder: true,
        borderGlow: true,
        showIcon: true,
        showStats: true
      },
      authorSettings: {
        show: true,
        name: 'Alex Rivera',
        handle: '@alexrivera_dev',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        showWatermark: true
      }
    }
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk 2077',
    description: 'Ultra-vibrant neon glow with dark matrix background.',
    badge: 'Neon ⚡',
    state: {
      codeSettings: {
        code: `const matrix = new QuantumCore({
  neuralSync: true,
  overclockRate: '4.8GHz',
  quantumTunneling: Infinity
});

matrix.on('singularity', (event) => {
  console.log("⚡ Reality breach detected:", event.energy);
});`,
        language: 'javascript',
        theme: 'cyberpunk',
        fontFamily: 'Fira Code',
        fontSize: 15,
        lineHeight: 1.65,
        showLineNumbers: true,
        highlightedLines: [1, 2, 7],
        filename: 'cyberCore.js',
        showFilename: true,
        tabSize: 2
      },
      backgroundSettings: {
        type: 'mesh',
        gradientId: 'cyber-matrix',
        customColor: '#00F260',
        pattern: 'circuit',
        padding: 64,
        borderRadius: 24,
        aspectRatio: 'auto',
        blurBackground: false
      },
      windowSettings: {
        style: 'macos',
        shadow: 'neon-glow',
        opacity: 98,
        showBorder: true,
        borderGlow: true,
        showIcon: true,
        showStats: false
      },
      authorSettings: {
        show: true,
        name: 'CyberGhost',
        handle: '@cyber_runner',
        avatarUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&auto=format&fit=crop&q=80',
        showWatermark: true
      }
    }
  },
  {
    id: 'nordic-minimal',
    name: 'Nordic Frost Clean',
    description: 'Elegant Arctic palette with minimalist windows.',
    badge: 'Clean ❄️',
    state: {
      codeSettings: {
        code: `pub fn optimize_pipeline<T>(data: Vec<T>) -> Result<Vec<T>, Error> {
    data.into_par_iter()
        .filter(|item| item.is_valid())
        .collect()
}`,
        language: 'rust',
        theme: 'nord',
        fontFamily: 'JetBrains Mono',
        fontSize: 14,
        lineHeight: 1.55,
        showLineNumbers: false,
        highlightedLines: [],
        filename: 'pipeline.rs',
        showFilename: true,
        tabSize: 4
      },
      backgroundSettings: {
        type: 'mesh',
        gradientId: 'deep-aurora',
        customColor: '#00f2fe',
        pattern: 'grid',
        padding: 48,
        borderRadius: 16,
        aspectRatio: 'auto',
        blurBackground: false
      },
      windowSettings: {
        style: 'glass',
        shadow: 'deep',
        opacity: 90,
        showBorder: true,
        borderGlow: false,
        showIcon: true,
        showStats: true
      },
      authorSettings: {
        show: false,
        name: '',
        handle: '',
        avatarUrl: '',
        showWatermark: false
      }
    }
  },
  {
    id: 'tokyo-synth',
    name: 'Tokyo Sunset',
    description: 'Warm purple & magenta tones for sleek presentation slides.',
    badge: 'Aesthetic 🌸',
    state: {
      codeSettings: {
        code: `def calculate_attention(Q, K, V, mask=None):
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, -1e9)
    p_attn = F.softmax(scores, dim=-1)
    return torch.matmul(p_attn, V), p_attn`,
        language: 'python',
        theme: 'tokyo-night',
        fontFamily: 'JetBrains Mono',
        fontSize: 14,
        lineHeight: 1.6,
        showLineNumbers: true,
        highlightedLines: [4],
        filename: 'attention.py',
        showFilename: true,
        tabSize: 4
      },
      backgroundSettings: {
        type: 'mesh',
        gradientId: 'midnight-tokyo',
        customColor: '#f953c6',
        pattern: 'dots',
        padding: 56,
        borderRadius: 20,
        aspectRatio: 'auto',
        blurBackground: false
      },
      windowSettings: {
        style: 'macos',
        shadow: '3d-floating',
        opacity: 95,
        showBorder: true,
        borderGlow: true,
        showIcon: true,
        showStats: true
      },
      authorSettings: {
        show: true,
        name: 'SnipCode Studio',
        handle: '@snipcode',
        avatarUrl: '',
        showWatermark: true
      }
    }
  }
];
