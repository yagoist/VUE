const validateFunc = (value) => {
    if(value % 2 === 0 || value % 2 === 1) {
        return false
    }
    return true
}

module.exports = validateFunc