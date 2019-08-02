export default function dlv(obj: object, key: string|string[], def?: any, p?: number): any {
    p = 0
    key = (key as string).split ? (key as string).split(".") : (key as string[])
    while (obj && p < key.length) {
        obj = obj[key[p++]]
    }
    return (obj === undefined || p < key.length) ? def : obj
}
