export default function hasArrayValues(set, arr) {
  return arr.every((value) => set.has(value));
}
