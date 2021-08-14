import root from "./root";
import header from "./header";
import term from "./term";
import { Options } from "../Types";

export const termCSS = (): string => {
  return "";
};

export const css = (options: Options): string => {
  return `
    ${root(options)}
    ${header()}
    ${term(options)}
  `;
};
