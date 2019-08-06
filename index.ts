export default function dlv(obj: object, key: string|string[], def?: any, p: number = 0): any {
    const accessor = (key as string).split ? (key as string).split(".") : (key as string[])
    while (obj && p < accessor.length) {
        obj = obj[accessor[p++]]
    }
    return (obj === undefined || p < accessor.length) ? def : obj
}
