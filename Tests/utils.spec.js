/**
 * @jest-environment node
 */
import stylerWithTheme from "./utils/stylerWithTheme";
import * as Utils from "../src/utils";
import defaultTheme from "../src/defaultTheme";
import theme from "./utils/theme";

describe("Basic Utils Tests", () => {
  describe("isArray", () => {
    it("should return true", () => {
      expect(Utils.isArray([])).toBe(true);
      expect(Utils.isArray([1])).toBe(true);
      expect(Utils.isArray([[2]])).toBe(true);
    });
    it("should return false", () => {
      expect(Utils.isArray({})).toBe(false);
      expect(Utils.isArray(undefined)).toBe(false);
      expect(Utils.isArray(1)).toBe(false);
    });
  });
  describe("isString", () => {
    it("should return true", () => {
      expect(Utils.isString("[]")).toBe(true);
      expect(Utils.isString("")).toBe(true);
      expect(Utils.isString(``)).toBe(true);
    });
    it("should return false", () => {
      expect(Utils.isString({})).toBe(false);
      expect(Utils.isString(undefined)).toBe(false);
      expect(Utils.isString(1)).toBe(false);
      expect(Utils.isString([1])).toBe(false);
    });
  });

  describe("isNumber", () => {
    it("should return true", () => {
      expect(Utils.isNumber(1)).toBe(true);
      expect(Utils.isNumber(-8)).toBe(true);
      expect(Utils.isNumber(0)).toBe(true);
      expect(Utils.isNumber(Infinity)).toBe(true);
    });
    it("should return false", () => {
      expect(Utils.isNumber({})).toBe(false);
      expect(Utils.isNumber(undefined)).toBe(false);
      expect(Utils.isNumber("1")).toBe(false);
      expect(Utils.isNumber([1])).toBe(false);
    });
  });

  describe("isNonZeroNumber", () => {
    it("should return true", () => {
      expect(Utils.isNonZeroNumber(1)).toBe(true);
      expect(Utils.isNonZeroNumber(-8)).toBe(true);
      expect(Utils.isNonZeroNumber(0.1)).toBe(true);
      expect(Utils.isNonZeroNumber(Infinity)).toBe(true);
    });
    it("should return false", () => {
      expect(Utils.isNonZeroNumber({})).toBe(false);
      expect(Utils.isNonZeroNumber(undefined)).toBe(false);
      expect(Utils.isNonZeroNumber("1")).toBe(false);
      expect(Utils.isNonZeroNumber(0)).toBe(false);
    });
  });

  describe("whenisNonZeroNumber", () => {
    const fn = n => true;

    it("It should be curried", () => {
      expect(Utils.whenisNonZeroNumber(fn)(1)).toBe(true);
      expect(Utils.whenisNonZeroNumber(fn, 2)).toBe(true);
    });

    it("should apply function when true", () => {
      expect(Utils.whenisNonZeroNumber(fn)(1)).toBe(true);
      expect(Utils.whenisNonZeroNumber(fn)(2)).toBe(true);
      expect(Utils.whenisNonZeroNumber(fn)(-1)).toBe(true);
    });
    it("should return original input", () => {
      expect(Utils.whenisNonZeroNumber(fn)("1")).toBe("1");
      expect(Utils.whenisNonZeroNumber(fn)({ a: 1 })).toEqual({ a: 1 });
      expect(Utils.whenisNonZeroNumber(fn)([1])).toEqual([1]);
    });
  });

  describe("pxTo", () => {
    it("It should be curried", () => {
      expect(Utils.pxTo(16, "rem", 16)).toBe("1rem");
      expect(Utils.pxTo(16, "rem")(16)).toBe("1rem");
      expect(Utils.pxTo(16)("rem")(16)).toBe("1rem");
    });
    it("Divisor should default to 16", () => {
      expect(Utils.pxTo(null, "rem", 16)).toBe("1rem");
      expect(Utils.pxTo(undefined, "rem")(16)).toBe("1rem");
      expect(Utils.pxTo(NaN)("rem")(16)).toBe("1rem");
    });
  });

  describe("pxToPct", () => {
    it("It Should Convert Corectly", () => {
      expect(Utils.pxToPct(16)).toBe("100%");
      expect(Utils.pxToPct(8)).toBe("50%");
    });
    it("It Should Return Original Input", () => {
      expect(Utils.pxToPct("16%")).toBe("16%");
      expect(Utils.pxToPct("8%")).toBe("8%");
      expect(Utils.pxToPct(0)).toBe(0);
    });
  });
  describe("pxToRem", () => {
    it("It Should Convert Corectly", () => {
      expect(Utils.pxToRem(16)).toBe("1rem");
      expect(Utils.pxToRem(8)).toBe("0.5rem");
    });
    it("It Should Return Original Input", () => {
      expect(Utils.pxToRem("1rem")).toBe("1rem");
      expect(Utils.pxToRem("0.5rem")).toBe("0.5rem");
      expect(Utils.pxToRem(0)).toBe(0);
    });
  });

  describe("rem", () => {
    it("It Should Append Rem", () => {
      expect(Utils.rem(16)).toBe("16rem");
      expect(Utils.rem(8)).toBe("8rem");
    });
    it("It Should Return Original Input", () => {
      expect(Utils.rem("1rem")).toBe("1rem");
      expect(Utils.rem("0.5rem")).toBe("0.5rem");
      expect(Utils.rem(0)).toBe(0);
    });
  });

  describe("getThemeAttr", () => {
    it("Should Return Fallback Theme", () => {
      expect(Utils.getThemeAttr("breakpoints")({})).toEqual(
        defaultTheme["breakpoints"]
      );
    });

    it("Should Return Theme from Props", () => {
      expect(Utils.getThemeAttr("breakpoints")({ theme })).toEqual(
        theme["breakpoints"]
      );
    });

    it("Should exact value From Dot Path", () => {
      const props = { theme: { breakpoints: { test: 1 } } };
      expect(Utils.getThemeAttr("breakpoints.test")(props)).toEqual(1);
    });
    it("Should Fallback to defaultTheme even with theme in props", () => {
      const props = { theme: { breakpoints: { test: 1 } } };
      expect(Utils.getThemeAttr("breakpoints.tablet")(props)).toEqual(600);
    });
  });
});
