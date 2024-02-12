import { getConfig } from "../utils/getConfig";
export function baseLogger(label, ...rest) {
  const { theme } = getConfig();
  console.log(
    "%c" + label + ":",
    `background-color: ${theme?.bgColor || "#b8f153"}; 
        padding: ${theme?.padding || "2px 4px"}; 
        border-radius: ${theme?.borderRadius || "4px"}; 
        font-weight: ${theme?.fontWeight || "500"}; 
        font-size: ${theme?.fontSize || "12px"} ; 
        color: ${theme?.textColor || "black"}`,
    ...rest
  );
}
