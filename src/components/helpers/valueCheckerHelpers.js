const checkBoolean = (value) => {
    return (typeof value === 'undefined'|| value === null) ? null : String(value)
}

const checkString = (value) => {
    return (typeof value === 'undefined') ? "" : value
}

export { checkBoolean, checkString }