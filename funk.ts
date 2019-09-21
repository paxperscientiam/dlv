type HEAD<T extends any[]> =
    T extends [any, ...any[]]
    ? T[0]
    : never

type TAIL<T extends any[]> =
    ((...t: T) => any) extends ((_: any, ...tail: infer TT) => any)
    ? TT
    : []

type ObjectInfer<O> =
    O extends { a: infer A }
    ? A
    : never

const objectz = { a: {b: 3 } }

type tt0 = ObjectInfer<typeof objectz>

type t9 = HEAD<[1, 2, string, number]>
type t10 = TAIL<[1, 2, string, number]>

function bark<T, K extends Extract<keyof NonNullable<T>, string>>(obj: T, key: K[]): any[] {
    const arr = []
    for (const k of key) {
        arr.push(obj[k as string])
    }
    return arr
}

const x = {
    a: 1,
    b: 2,
    c: 3,
    d: {
        z: 3,
    },
}

bark(x, ["d"])
