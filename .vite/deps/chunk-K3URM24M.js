import {
  defaultTheme_default,
  identifier_default,
  init_defaultTheme,
  init_esm2 as init_esm,
  init_identifier,
  useTheme_default
} from "./chunk-L4AOHQZZ.js";
import {
  __toESM,
  require_react
} from "./chunk-HS7GO4I2.js";

// node_modules/@mui/material/styles/useTheme.js
var React = __toESM(require_react());
init_esm();
init_defaultTheme();
init_identifier();
function useTheme() {
  const theme = useTheme_default(defaultTheme_default);
  if (true) {
    React.useDebugValue(theme);
  }
  return theme[identifier_default] || theme;
}

// node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
var getOverlayAlpha_default = getOverlayAlpha;

export {
  getOverlayAlpha_default,
  useTheme
};
//# sourceMappingURL=chunk-K3URM24M.js.map