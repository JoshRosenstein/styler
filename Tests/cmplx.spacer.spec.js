/**
 * @jest-environment node
 */
import * as R from "ramda";
import { negate, pipe, endsWith, replace, is } from "ramda";
import stylerWithTheme from "./utils/stylerWithTheme";
import {
  spaceProp,
  pct,
  styler,
  pxToRem,
  px,
  minWidth,
  width,
  maxWidth,
  minHeight,
  height,
  maxHeight,
  justifyContent,
  alignContent,
  justifyItems,
  alignItems,
  order,
  zIndex,
  flex,
  alignSelf,
  Util
} from "../src";

const SizeCss = p => {
  if (p.x === true && !p.y) return ["minWidth", "width"];
  if (!p.x && p.y === true) return ["minHeight", "height"];
  return ["minWidth", "width", "minHeight", "height"];
};

const MarginCss = p => {
  if (p.x === true && !p.y) return "marginLeft";
  if (!p.x && p.y === true) return "marginTop";
  return ["marginLeft", "marginTop"];
};

const isNotNeg = R.complement(R.test(/^-.+/));

const SpaceGetter = isSize => v =>
  isSize
    ? R.equals(0, v) ? 0 : isNotNeg(v) ? pxToRem(v) : null
    : R.equals(0, v) ? 0 : !isNotNeg(v) ? pxToRem(v) : null;

describe("SpaceProp Space", () => {
  describe("with static features", () => {
    it("should add correct styles for default", () => {
      const a = spaceProp(SizeCss, SpaceGetter(true))({ mobile: "sm" });

      expect(a).toEqual({
        height: "0.5rem",
        minHeight: "0.5rem",
        minWidth: "0.5rem",
        width: "0.5rem"
      });
    });
  });
});
