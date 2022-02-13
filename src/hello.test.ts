import { hello } from "./hello";

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("hello world", () => {
  expect(hello("world")).toBe("Hello world");
});
