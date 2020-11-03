export function superFn(options) {
  return {
    difficult: somethingDifficultToImplement(options),
    some: 'other stuff'
  }
}

export function somethingDifficultToImplement(options) {
  return `It was difficult to implement with options: ${JSON.stringify(options)}`;
}
