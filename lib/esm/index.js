export default function dlv(obj, key, fallback, p = 0) {
    const accessor = typeof key === "string" ? key.split(".") : key;
    while (obj && p < accessor.length) {
        obj = obj[accessor[p++]];
    }
    return (obj === undefined || p < accessor.length) ? fallback : obj;
}
const xxx = {
    a: 33
};
console.log(dlv(xxx, "a"));
