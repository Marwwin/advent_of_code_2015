import { escapeChars, firstAndSecondIsDoubleQuote, getNumberOfChars } from "../src/day8/day8";
import { input } from "../src/day8/input";

describe("Day 8 Solutions", () => {
  it("should solve part 1", () => {});
  it("should solve part 2", () => {});
});

describe("Day 8 Tests", () => {


  it("Should give negative points for escape chars", () => {
    expect(escapeChars["\\"]).toBe(2);
    expect(escapeChars['"']).toBe(2);
    expect(escapeChars["\\x"]).toBe(4);
  });

  it("should test isEscapechar",(()=>{
    expect("\\" in escapeChars).toBeTruthy()
    expect("\\a" in escapeChars).toBeFalsy()
    const s = 'x\\tbklqz"';
    expect(s.includes("\\")).toBeTruthy();
    expect("\\a" in escapeChars).toBeFalsy()


  }))
  it("should give correct points for simple string",()=>{
    expect('""'.length).toBe(2);
    expect(getNumberOfChars('""')).toBe(0)
    expect(getNumberOfChars('"a"')).toBe(1)
    expect(getNumberOfChars('"1"')).toBe(1)
    expect(getNumberOfChars('"123abc"')).toBe(6)

})
it("should give correct points for strings with exscape chars",()=>{
    expect(getNumberOfChars('"\\"')).toBe(0)
})
it("should test string is valid",()=>{
    expect(firstAndSecondIsDoubleQuote('""')).toBeTruthy();    
    expect(firstAndSecondIsDoubleQuote('"123123123"')).toBeTruthy();    
    expect(firstAndSecondIsDoubleQuote('"asdf\"1adf2\x31"')).toBeTruthy();    

    expect(firstAndSecondIsDoubleQuote('asdf\"1adf2\x31"')).toBeFalsy();    
    expect(firstAndSecondIsDoubleQuote('"')).toBeFalsy();    
})
});
