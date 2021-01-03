// https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullablet

export default function dlv<T, K extends Extract<keyof NonNullable<T>, string> | string, L>(obj: T,
                                                                                            key: K|K[],
                                                                                            fallback?: NonNullable<L>,
                                                                                            p: number = 0): L|T {
    const accessor = typeof key === "string" ? (key as string).split(".") : (key as string[])
    while (obj && p < accessor.length) {
        obj = (obj as any)[accessor[p++]]
    }
    return (obj === undefined || p < accessor!.length) ? fallback as L : obj
}
