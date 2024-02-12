import { getConfig } from "../utils/getConfig";
export function baseTraceLogger(label, ...rest) {
  const { theme } = getConfig();
  console.log(
    "%c" + label,
    `background-color: #a855f7; 
        padding: ${theme?.padding || "2px 4px"}; 
        border-radius: ${theme?.borderRadius || "4px"}; 
        font-weight: ${theme?.fontWeight || "600"}; 
        font-size: ${theme?.fontSize || "12px"} ; 
        color: white`,
    ...rest
  );
}
