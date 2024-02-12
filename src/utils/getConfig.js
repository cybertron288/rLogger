// let config = {
//   theme: {
//     bgColor: "#b8f153",
//     padding: "2px 4px",
//     borderRadius: "4px",
//     fontWeight: "500",
//     fontSize: "12px",
//     textColor: "black",
//   },
// };

export function getConfig() {
  let config = {};

  config.theme = {
    "background-color": `${config?.theme?.bgColor || "#42f153"}`,
    padding: `${config?.theme?.padding || "2px 4px"}`,
    "border-radius": `${config?.theme?.borderRadius || "4px"}`,
    "font-weight": `${config?.theme?.fontWeight || "500"}`,
    "font-size": `${config?.theme?.fontSize || "12px"}`,
    color: `${config?.theme?.textColor || "black"}`,
  };

  return config;
}
