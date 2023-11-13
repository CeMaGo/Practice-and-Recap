import {add} from "./index.mjs"

// add()

// returns 5 if called with add(2, 3)
// returns a negative value if the greater argument is negative (Hint: use the matcher toBeLessThan())
// returns a value close to 0.3 if called with add(0.1, 0.2) (Hint: use the matcher toBeCloseTo())
// subtract()

test("adds the numbers 13 and 28 correctly", () => {
  const result = add(13, 28);
  expect(result).toBe(41);
});

test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});


test("returns a negative value if the greater argument is negative", () => {
  const result = add(-8, 5);
  expect(result).toBeLessThan(0);
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});


// returns 10 if called with subtract(15, 5)
// returns a negative value if the second argument is greater than the first one (use toBeLessThan() again)
// multiply()

// returns 8 if called with multiply(2, 4)
// returns a negative value if only the first argument is negative
// returns a negative value if only the second argument is negative
// returns a positive value if called with two negative arguments
// divide()

// returns 3 if called with divide(9, 3)
// returns "You should not do this!" if called with 0 as second argument
