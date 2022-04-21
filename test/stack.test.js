const Stack = require('../exercises/stack');

describe('My Stack', () => {
  // Can setup the stack
  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('is created empty', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({}); // toBe checks for referential equality when the two empty objects are really two different locations in memory
  });
  
  it('can push to the top', () => {
    stack.push('🍩');
    expect(stack.top).toBe(0);
    expect(stack.peek).toEqual('🍩');
  });
  
  it('can pop off', () => {
    stack.push('🍩');
    expect(stack.pop()).toEqual('🍩')
    expect(stack.top).toBe(-1);
    expect(stack.pop()).toEqual(undefined)
    // expect(stack.items).toEqual({});
  });
})