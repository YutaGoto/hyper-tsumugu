import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor,
} from "./colors";
import { termCSS, css } from "./stylesheets";
import { Options } from "./Types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
exports.decorateConfig = (config: any) => {
  const options: Options = Object.assign(
    {},
    {
      illust: true,
      opacity: 0.3,
    },
    config.otaniTsumugu
  );

  return Object.assign({}, config, {
    backgroundColor: backgroundColor,
    foregroundColor,
    borderColor,
    selectionColor,
    colors,
    cursorColor,
    termCSS: `
      ${config.termCSS || ""}
    `,
    css: `
      ${config.css || ""}
      ${css(options)}
      ${termCSS()}
    `,
  });
};
