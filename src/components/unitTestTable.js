// type unitTestTableProps = {
//     data: [],
//     label: string
// }
export function unitTestTable(label, data) {
  console.groupCollapsed("Testing unit: %s", label || "rlogger test");
  for (var r in data) {
    var res = data[r];
    console.groupCollapsed(
      "%c  %c" + res.status,
      "background-color: " +
        (res.status === "failed" ? "#ef4444" : "#22c55e") +
        "; margin-right: 10px",
      "background-color: transparent"
    );
    console.table({
      Result: { value: res.status },
      Function: { value: res.function },
      Asserted: { value: res.asserted },
      Returned: { value: res.returned },
    });
    console.groupEnd();
  }
  console.groupEnd();
}
