import { getConfig } from "../utils/getConfig";
import { baseErrorLogger } from "./baseError";
export function baseTable(
  label,
  visableColumns = [],
  data = []
) {
  const { theme } = getConfig();

  if (isPrimitiveOrCompoundCollection(data)) {
    console.groupCollapsed(
      "%c" +
        `${label || "-------------------- rlogger table --------------------"}`,
      `background-color: ${theme?.bgColor || "#b8f153"}; 
        padding: ${theme?.padding || "2px 4px"}; 
        border-radius: ${theme?.borderRadius || "4px"}; 
        font-weight: ${theme?.fontWeight || "500"}; 
        font-size: ${theme?.fontSize || "12px"} ; 
        color: ${theme?.textColor || "black"}`
    );
    console.table(data, [...visableColumns]);
    console.groupEnd();
  } else {
    baseErrorLogger(
      "---------- please pass valid collection to display in table ----------"
    );
  }

}


function isPrimitiveOrCompoundCollection(collection) {
  if (!Array.isArray(collection)) {
    return false;
  }

  let hasPrimitive = false;
  let hasCompound = false;

  for (const element of collection) {
    if (Array.isArray(element)) {
      const nestedType = isPrimitiveOrCompoundCollection(element);
      if (nestedType === "Collection of primitive types") {
        hasPrimitive = true;
      } else if (nestedType === "Collection of compound types") {
        hasCompound = true;
      } else if (nestedType === "Collection of mixed types") {
        return false;
      }
    } else if (typeof element === "object" && element !== null) {
      hasCompound = true;
    } else {
      hasPrimitive = true;
    }

    if (hasPrimitive && hasCompound) {
      return false;
    }
  }

  if (hasCompound) {
    return true;
  } else if (hasPrimitive) {
    return true;
  } else {
    return false;
  }
}