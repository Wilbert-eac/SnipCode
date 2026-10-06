import { SnipState } from '../types';

export function encodeStateToUrl(state: SnipState): string {
  try {
    const json = JSON.stringify(state);
    const encoded = btoa(encodeURIComponent(json));
    return `#snip=${encoded}`;
  } catch {
    return '';
  }
}

export function decodeStateFromUrl(): SnipState | null {
  try {
    const hash = window.location.hash;
    if (!hash.startsWith('#snip=')) return null;
    const base64 = hash.replace('#snip=', '');
    const json = decodeURIComponent(atob(base64));
    return JSON.parse(json) as SnipState;
  } catch {
    return null;
  }
}
