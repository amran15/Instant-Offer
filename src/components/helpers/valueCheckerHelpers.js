const checkBoolean = (value) => {
    // return String(value) && '';
    return (typeof value === 'undefined'|| value === null) ? null : String(value)
}

const checkCheckbox = (value) => {
    return (typeof value === 'undefined') ? null : value;
    // return (typeof value === 'undefined') ? "" : value
}

const checkString = (value) => {
    return (typeof value === 'undefined') ? null : value
    // return (typeof value === 'undefined') ? "" : value
}

export { checkBoolean, checkString, checkCheckbox }