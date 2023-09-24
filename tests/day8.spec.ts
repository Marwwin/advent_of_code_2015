import { countCharsAsIfInSource, escapeChars, firstAndSecondIsDoubleQuote, getNumberOfChars, numberOfChars, numberOfCodeChars, part1 } from "../src/day8/day8";
import { input } from "../src/day8/input";

describe("Day 8 Solutions", () => {
  it("should solve part 1", () => {
  });
  it("should solve part 2", () => {});
});

describe('Day8', () => { 
  const testData = `""
  "abc"
  "aaa\"aaa"
  "\x27"
`
  it("get code length ",()=>{
    expect(countCharsAsIfInSource(`""`)).toBe(2)
    expect(countCharsAsIfInSource(`"abc"`)).toBe(5)
    expect(countCharsAsIfInSource(`"aaa\"aaa"`)).toBe(10)
    expect(countCharsAsIfInSource(`"\x27"`)).toBe(4)

  })
  it("get char lengths",()=>{
    expect(numberOfChars(`""`)).toBe(0)
    expect(numberOfChars(`"abc"`)).toBe(3)
    expect(numberOfChars(`"aaa\"aaa"`)).toBe(7)
    expect(numberOfChars(`"\x27"`)).toBe(1)
  })
 })

describe("Day 8 Tests", () => {
  const testData = `""
  "abc"
  "aaa\"aaa"
  "\x27"
`

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
