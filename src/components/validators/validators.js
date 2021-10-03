export const isEmpty = value => {
    return value? undefined : 'Empty string...'
}

export const MaxLengthCreator = (max) => (value='') => {  
    return value.length && value.length <= max ? undefined : `Max length is ${max}` 
}