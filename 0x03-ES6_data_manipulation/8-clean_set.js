export default function cleanSet(set, startString) {
  const arr = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      arr.push(value.slice(startString.length));
    }
  });

  return arr.join('-');
}
