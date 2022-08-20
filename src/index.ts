import {
  backgroundColor,
  foregroundColor,
  borderColor,
  selectionColor,
  colors,
  cursorColor,
} from "./colors";
import { termCss, css } from "./stylesheets";
import { Options } from "./Types";

exports.decorateConfig = (config: any) => {
  const options: Options = Object.assign(
    {},
    {
      illust: true,
      opacity: 0.3,
    },
    config.otaniTsumugu,
  );

  return Object.assign({}, config, {
    backgroundColor,
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
      ${termCss()}
    `,
  });
};
