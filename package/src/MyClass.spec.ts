import { MyClass } from './MyClass';

describe('MyClass', () => {
  let myClass: MyClass;

  beforeEach(() => {
    myClass = new MyClass();
  });

  describe('doSomething', () => {
    it('should return Hello World', () => {
      const result = myClass.doSomething();
      expect(result).toBe('Hello World');
    });
  });
});
