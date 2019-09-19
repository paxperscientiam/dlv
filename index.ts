export default function dlv<T, K extends Extract<keyof T, string>>(obj: T,
                                                                   key: K|K[],
                                                                   def?: any,
                                                                   p: number = 0): any {
    const accessor = (key as string).split ? (key as string).split(".") : (key as string[])
    while (obj && p < accessor.length) {
        obj = obj[accessor[p++]]
    }
    return (obj === undefined || p < accessor.length) ? def : obj
}
