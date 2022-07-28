let device = [
  { type: "notebook", condition: "working" },
  { type: "desktop", condition: "working" },
  { type: "netbook", condition: "working" },
  { type: "monitor", condition: "working" },
  { type: "impressora", condition: "working" },
  { type: "scanner", condition: "notWorking" },
];

let devicesTypes = [
  "notebook",
  "desktop",
  "netbook",
  "monitor",
  "impressora",
  "scanner",
];

const result = device.map((item) => {
  return devicesTypes.includes(item.type);
});

console.log("Resultado da avaliação de cada item: " + result);

console.log("FINAL: " + result.every((element) => element == true));
