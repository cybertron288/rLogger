import { baseLogger } from "./baseLogger";

import { getConfig } from "../utils/getConfig";
export function baseGroupLogger(label, children, isCollepsed = false) {
  const { theme } = getConfig();
  let data = children;

  if (isCollepsed) {
    collepsedGroupLogger(label, theme, data);
  } else {
    groupLogger(label, theme, data);
  }
}

function collepsedGroupLogger(label, theme, data) {
  console.groupCollapsed(
    "%c" +
      `${label || "-------------------- rlogger --------------------"}`,
    `background-color: ${theme?.bgColor || "#b8f153"}; 
        padding: ${theme?.padding || "2px 4px"}; 
        border-radius: ${theme?.borderRadius || "4px"}; 
        font-weight: ${theme?.fontWeight || "500"}; 
        font-size: ${theme?.fontSize || "12px"} ; 
        color: ${theme?.textColor || "black"}`,
  );
  baseLogger(`${label + " obj >>" || "rlogger obj"}`, formatObjectKeys(data));
  console.groupEnd();
}

function groupLogger(label, theme, data) {
  console.group(
    "%c" + `${label || "-------------------- rlogger --------------------"}`,
    `background-color: ${theme?.bgColor || "#b8f153"}; 
        padding: ${theme?.padding || "2px 4px"}; 
        border-radius: ${theme?.borderRadius || "4px"}; 
        font-weight: ${theme?.fontWeight || "500"}; 
        font-size: ${theme?.fontSize || "12px"} ; 
        color: ${theme?.textColor || "black"}`
  );
  baseLogger(`${label + " obj >>" || "rlogger obj"}`, formatObjectKeys(data));
  console.groupEnd();
}

function formatObjectKeys(obj) {
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === "object" && value !== null) {
        return value; // If the value is an object, return it as is
      } else {
        return `${value}`; // Format the key with color
      }
    },
    3
  );
}
