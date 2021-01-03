export default function dlv<T, K extends Extract<keyof NonNullable<T>, string> | string, L>(obj: T, key: K | K[], fallback?: NonNullable<L>, p?: number): L | T;
