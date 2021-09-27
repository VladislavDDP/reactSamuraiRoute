export const MaxLengthCreator = (max) => (value) => {
    if (value.length && value.length <= max) {
        return undefined
    }
    return `Too many symbols. Max length is ${max}`
}