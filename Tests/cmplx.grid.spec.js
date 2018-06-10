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

import {
  spacing,
  Columns,
  GridContainer,
  gridContainerStyles,
  gridAutoFlowGetter,
  supportsModernGrid,
  ColumnStyles
} from "./grid.helpers.spec";

describe("GridContainer", () => {
  describe("with static features", () => {
    it("should add correct styles for default", () => {
      const a = GridContainer({});

      expect(a).toEqual({ display: "grid" });
    });
    it("should add correct styles for default", () => {
      const a = GridContainer({ gap: spacing });

      expect(a).toEqual({
        "@media screen and (min-width:mobileMd)": { gridGap: "1rem" },
        "@media screen and (min-width:mobileSm)": { gridGap: "0.5rem" },
        display: "grid"
      });
    });
  });

  describe("Columns", () => {
    describe("with static features", () => {
      it("should add correct styles for <Flex.Item width={itemBasis}> usage", () => {
        const a = Columns({});

        expect(a).toEqual({
          "> :first-child > *": { flexGrow: 1 },
          "@supports (grid-row-gap:0)": {
            "> :first-child": {
              display: "grid",
              marginLeft: "initial",
              marginTop: "initial"
            },
            "> :first-child > *": {
              paddingLeft: "initial",
              paddingTop: "initial",
              width: "initial"
            }
          }
        });
      });
      it("should add correct styles for <Columns {spacing}> usage", () => {
        const a = Columns(spacing);
        const b = Columns({ gap: spacing });

        const result = {
          "> :first-child > *": { flexGrow: 1 },
          "@supports (grid-row-gap:0)": {
            "> :first-child": {
              display: "grid",
              marginLeft: "initial",
              marginTop: "initial"
            },
            "> :first-child > *": {
              paddingLeft: "initial",
              paddingTop: "initial",
              width: "initial"
            },
            "@media screen and (min-width:mobileMd)": {
              "> :first-child": { gridGap: "1rem" }
            },
            "@media screen and (min-width:mobileSm)": {
              "> :first-child": { gridGap: "0.5rem" }
            }
          }
        };
        expect(a).toEqual(result);
        expect(b).toEqual(result);
      });
    });
  });
});
