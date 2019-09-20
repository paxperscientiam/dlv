// https://www.typescriptlang.org/docs/handbook/utility-types.html#nonnullablet

export default function dlv<T, K extends Extract<keyof T, string>, L>(obj: T,
                                                                      key: K|K[],
                                                                      fallback?: NonNullable<L>,
                                                                      p: number = 0): L|T {
    const accessor = (key as string).split ? (key as string).split(".") : (key as string[])
    while (obj && p < accessor.length) {
        obj = obj[accessor[p++]]
    }

    return (obj === undefined || p < accessor!.length) ? fallback as L : obj as T
}

// dlv({a: 3, b: true, n: 4, g: {f: true}}, "a", null) // disallow null fallback
