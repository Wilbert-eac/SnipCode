export interface LanguageOption {
  id: string;
  name: string;
  extension: string;
  prismKey: string;
  defaultFilename: string;
  sampleCode: string;
}

export const LANGUAGES: LanguageOption[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    extension: 'ts',
    prismKey: 'typescript',
    defaultFilename: 'useMagicSnippet.ts',
    sampleCode: `import { useState, useEffect } from 'react';

// 🚀 Custom Hook with Type Inference
export function useCodeSnippet<T>(initialData: T) {
  const [data, setData] = useState<T>(initialData);
  const [isExporting, setExporting] = useState(false);

  const exportHighRes = async (scale: number = 3) => {
    setExporting(true);
    // Render beautiful 4K graphics
    await new Promise((res) => setTimeout(res, 600));
    setExporting(false);
  };

  return { data, setData, exportHighRes, isExporting };
}`
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    extension: 'js',
    prismKey: 'javascript',
    defaultFilename: 'server.js',
    sampleCode: `import express from 'express';
import { generateGradient } from 'snipcode';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/snippet', (req, res) => {
  const mesh = generateGradient({ style: 'hyper-sunset' });
  res.json({ success: true, timestamp: Date.now(), mesh });
});

app.listen(PORT, () => {
  console.log(\`⚡ Server blazing on http://localhost:\${PORT}\`);
});`
  },
  {
    id: 'python',
    name: 'Python',
    extension: 'py',
    prismKey: 'python',
    defaultFilename: 'neural_snip.py',
    sampleCode: `import torch
import torch.nn as nn

class SnipTransformer(nn.Module):
    def __init__(self, embed_dim: int = 768, heads: int = 12):
        super().__init__()
        self.attention = nn.MultiheadAttention(embed_dim, heads)
        self.norm = nn.LayerNorm(embed_dim)
        
    def forward(self, tokens: torch.Tensor) -> torch.Tensor:
        attn_out, _ = self.attention(tokens, tokens, tokens)
        return self.norm(tokens + attn_out)

model = SnipTransformer()
print(f"✨ Model loaded: {sum(p.numel() for p in model.parameters()):,} params")`
  },
  {
    id: 'rust',
    name: 'Rust',
    extension: 'rs',
    prismKey: 'rust',
    defaultFilename: 'main.rs',
    sampleCode: `use tokio::sync::mpsc;
use std::time::Duration;

#[derive(Debug, Clone)]
struct Snippet {
    id: u64,
    views: usize,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let (tx, mut rx) = mpsc::channel(32);
    
    tokio::spawn(async move {
        let snip = Snippet { id: 42, views: 10_000 };
        tx.send(snip).await.unwrap();
    });

    while let Some(msg) = rx.recv().await {
        println!("🚀 Snippet received: {:?}", msg);
    }
    Ok(())
}`
  },
  {
    id: 'go',
    name: 'Go',
    extension: 'go',
    prismKey: 'go',
    defaultFilename: 'stream.go',
    sampleCode: `package main

import (
	"context"
	"fmt"
	"time"
)

func StreamSnippets(ctx context.Context) <-chan string {
	out := make(chan string)
	go func() {
		defer close(out)
		for i := 1; i <= 3; i++ {
			select {
			case <-ctx.Done():
				return
			case out <- fmt.Sprintf("🔥 Code Card #%d generated", i):
				time.Sleep(100 * time.Millisecond)
			}
		}
	}()
	return out
}`
  },
  {
    id: 'css',
    name: 'CSS / Tailwind',
    extension: 'css',
    prismKey: 'css',
    defaultFilename: 'styles.css',
    sampleCode: `.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.glass-card:hover {
  transform: translateY(-4px) scale(1.02);
}`
  },
  {
    id: 'html',
    name: 'HTML5',
    extension: 'html',
    prismKey: 'markup',
    defaultFilename: 'index.html',
    sampleCode: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SnipCode ✨</title>
  </head>
  <body class="bg-gradient-mesh flex min-h-screen items-center justify-center">
    <div class="card p-8 shadow-2xl backdrop-blur-xl">
      <h1 class="text-4xl font-bold text-white">Share Your Code</h1>
      <p class="text-indigo-200">Export high-resolution snippets for socials.</p>
    </div>
  </body>
</html>`
  },
  {
    id: 'sql',
    name: 'SQL',
    extension: 'sql',
    prismKey: 'sql',
    defaultFilename: 'query.sql',
    sampleCode: `WITH top_snippets AS (
  SELECT 
    s.id,
    s.title,
    s.author_id,
    COUNT(l.id) AS total_likes,
    DENSE_RANK() OVER (ORDER BY COUNT(l.id) DESC) as ranking
  FROM snippets s
  LEFT JOIN likes l ON l.snippet_id = s.id
  WHERE s.created_at >= NOW() - INTERVAL '30 days'
  GROUP BY s.id, s.title, s.author_id
)
SELECT * FROM top_snippets WHERE ranking <= 5;`
  },
  {
    id: 'json',
    name: 'JSON',
    extension: 'json',
    prismKey: 'json',
    defaultFilename: 'package.json',
    sampleCode: `{
  "name": "snipcode-studio",
  "version": "1.0.0",
  "description": "The sleekest code snapshot generator for developers",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  },
  "dependencies": {
    "html-to-image": "^1.11.11",
    "lucide-react": "^0.475.0"
  }
}`
  },
  {
    id: 'bash',
    name: 'Bash / Shell',
    extension: 'sh',
    prismKey: 'bash',
    defaultFilename: 'deploy.sh',
    sampleCode: `#!/usr/bin/env bash
set -euo pipefail

echo "🚀 Deploying SnipCode to Production..."
npm run build

# Sync assets to edge CDN
aws s3 sync ./dist s3://snipcode-cdn --delete --cache-control "max-age=31536000"

echo "✨ Deployment successful in 2.3s!"`
  }
];
