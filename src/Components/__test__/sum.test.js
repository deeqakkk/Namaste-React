const sum = (a, b) => a + b

test('Sum of two functions', () => {
    expect(sum(2, 5)).toBe(7);
})