import { backgroundColor } from "../colors";
import { Options } from "../Types";

export default (options: Options): string => {
  return `
    .hyper_main {
      background-color: ${backgroundColor};
    }
  `;
};
