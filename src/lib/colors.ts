export const G = ["#4285F4", "#EA4335", "#FBBC04", "#34A853"];
export const g = (i: number) => G[i % G.length];
export const tint = (c: string) => `${c}24`;
export const catColor: Record<string, string> = { "Web App": G[0], PWA: G[3], "AI/ML": G[1], Game: G[2], "F&B / Landing": G[1] };
