import * as styleDefs from "./styles";
import { styler } from "@roseys/styler";
import { reduce, mapValues } from "@roseys/futils";
const styles = mapValues(
  v =>
    styler({
      ...v,
      options: { defaultLookup: false, defaultTransform: false }
    }),
  styleDefs
);

module.exports = styles;
