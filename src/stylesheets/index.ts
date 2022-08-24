import { Options } from "../Types";
import root from "./root";
import header from "./header";
import term from "./term";

export const termCss = (): string => "";

export const css = (options: Options): string => `
    ${root}
    ${header}
    ${term(options)}
  `;
