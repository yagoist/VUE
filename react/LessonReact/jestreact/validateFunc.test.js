const validateFunc = require('./validateFunc')

describe('validateFunc', () => {
    test('two even digits', () => {
        expect(validateFunc(50)).toBe(false)    
    })
    test('one minus not even digit', () => {
        expect(validateFunc(-1)).toBe(true)    
    })
    test('three not even digits', () => {
        expect(validateFunc(101)).toBe(false)    
    })
    test('null', () => {
        expect(validateFunc(0)).toBe(false)    
    })
    test('three even digits', () => {
        expect(validateFunc(100)).toBe(false)    
    })
}) 