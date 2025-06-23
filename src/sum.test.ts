import { sum } from "./sum";
let sumResult: number;

describe("sum", () => {
  beforeAll(() => {
    sumResult = 10;
  });

  afterAll(() => {
    sumResult = 0;
    console.log("Executado depois dos testes", sumResult);
  });
  it("should do sum 3 + 7 must be 10 ", () => {
    const result = sum(3, 7);
    expect(sumResult).toBe(sumResult);
  });

  it("should do sum of 2 + 2 must to be 4", () => {
    const result = sum(8, 2);
    return expect(result).toBe(sumResult);
  });
});
