
export function flat(arr) {
  return arr.reduce((pre, value) => {
    return Array.isArray(value) ? [...pre, ...flat(value)] : [...pre, value]
  }, [])
}
