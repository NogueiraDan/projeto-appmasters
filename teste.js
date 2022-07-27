let device = [
  { type: "notebook", condition: "working" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
  { type: "desktop", condition: "notWorking" },
];

for (let prop in device) {
  console.log(device[prop].type);
}
