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
  alignSelf
} from "../src";

export const supportsModernGrid = `@supports (grid-row-gap:0)`;

export const gridAutoFlowGetter = (v, p) => {
  let { dense } = p;
  if (!is(String)(v) && dense) return "dense";
  dense = dense && v !== "dense" ? " dense" : "";
  if (v !== "column" && v !== "row" && v !== "dense") {
    v = "row";
  }
  return v + dense;
};

export const gridContainerStyles = {
  display: {
    inline: "inline-grid",
    gdInline: "inline-grid",
    default: "grid"
  },
  gridAutoRows: {
    gridAutoRows: "returnAsIs",
    gdARows: "returnAsIs",
    autoRows: "returnAsIs",
    gdRows: "returnAsIs",
    options: {
      getter: (v, { gridAutoRows, gdARows, gdRows }) =>
        gridAutoRows || gdARows
          ? v
          : endsWith("!", v) ? replace("!", "", v) : undefined
    }
  },
  gridTemplateRows: {
    gridTemplateRows: "returnAsIs",
    templateRows: "returnAsIs",
    gdTRows: "returnAsIs",
    gdRows: "returnAsIs",
    options: {
      getter: (v, { gridAutoRows, gdTRows, gdRows }) =>
        gridAutoRows || gdTRows ? v : !endsWith("!", v) ? v : undefined
    }
  },
  gridAutoColumns: {
    gridAutoColumns: "returnAsIs",
    gdACols: "returnAsIs",
    gdCols: "returnAsIs",
    options: {
      getter: (v, { gridAutoColumns, gdACols, gdCols }) =>
        gridAutoColumns || gdACols
          ? v
          : endsWith("!", v) ? replace("!", "", v) : undefined
    }
  },
  gridTemplateColumns: {
    gridTemplateColumns: "returnAsIs",
    gdTCols: "returnAsIs",
    gdCols: "returnAsIs",
    options: {
      getter: (v, { gridAutoColumns, gdTCols, gdCols }) =>
        gridAutoColumns || gdTCols ? v : !endsWith("!", v) ? v : undefined
    }
  },
  gridTemplateAreas: {
    gridTemplateAreas: "returnAsIs",
    gdAreas: "returnAsIs"
  },
  gridTemplate: {
    gridTemplate: "returnAsIs",
    gdTemplate: "returnAsIs",
    template: "returnAsIs"
  },
  gridAutoFlow: {
    options: {
      getter: gridAutoFlowGetter
    },
    autoFlow: "returnAsIs",
    direction: "returnAsIs",
    gridAutoFlow: "returnAsIs",
    gdAuto: "returnAsIs"
  },
  grid: {
    options: {
      key: "grids"
    },
    grid: "returnAsIs"
  },
  gridGap: {
    options: {
      key: "space",
      getter: pxToRem
    },
    gridGap: "returnAsIs",
    gap: "returnAsIs"
  },
  gridRowGap: {
    options: {
      key: "space"
    },
    gridRowGap: "returnAsIs",
    gdRowGap: "returnAsIs",
    rowGap: "returnAsIs"
  },
  gridColumnGap: {
    options: {
      key: "space"
    },
    gridColumnGap: "returnAsIs",
    gdColwGap: "returnAsIs",
    colGap: "returnAsIs",
    columnGap: "returnAsIs"
  },
  justifyContent,
  alignContent,
  justifyItems,
  alignItems
};

export const ColumnStyles = {
  "> :first-child": {
    "> *": {
      flexGrow: {
        flexGrow: "returnAsIs",
        fxGrow: "returnAsIs",
        grow: "returnAsIs",
        default: 1
      },
      width: {
        columnCount: "returnAsIs",
        columnWidth: "returnAsIs",
        columnW: "returnAsIs",
        colWidth: "returnAsIs",
        colW: "returnAsIs",

        options: {
          key: "space",
          getter: (v, p) => (p.columnCount ? pct(100 / v) : pxToRem)
        }
      }
    },
    [supportsModernGrid]: p => ({
      "> *": {
        width: "initial",
        paddingTop: "initial",
        paddingLeft: "initial"
      },
      display: "grid",
      ...gridContainerStyles,
      "gridTemplateColumns ": {
        columnWidth: "returnAsIs",
        options: {
          key: "space",
          getter: (v, { columnWidth, columnCount }) =>
            columnWidth
              ? `repeat(auto-fit,minmax(${pxToRem(v)}, 1fr))`
              : `repeat(${v}, 1fr)`
        }
      },
      marginTop: "initial",
      marginLeft: "initial",
      ...spaceProp("gridGap")(p)
    })
  }
};

export const GridContainer = stylerWithTheme(gridContainerStyles);
export const Columns = stylerWithTheme(ColumnStyles);

export const spacing = {
  mobileSm: "sm",
  mobileMd: "md"
};

describe.skip("Dummy", () => {

  it("Dummy", () => {
    expect(1).toEqual(1);
  });

    });
