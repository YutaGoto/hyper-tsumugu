import illust from "../images/tsumugu.svg";
import { Options } from "../Types";

export default (options: Options): string => {
  return `
    .terms_terms:before {
      content: "";
      display: ${options.illust ? "block" : "none"};
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(${illust});
      background-size: auto 80%;
      background-position: right bottom;
      background-repeat: no-repeat;
      opacity: ${options.opacity};
    }
    .xterm .xterm-viewport {
      background-color: rgba(0,0,0,0) !impotant;
    }
  `;
};
