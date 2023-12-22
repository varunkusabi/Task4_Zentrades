let data1 = {
  labels: ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"],
  datasets: [
    {
      backgroundColor: "#40be99",
      data: [80000, 75000, 49000, 47000, 46000, 34000],
    },
  ],
};

let data2 = {
  labels: [
    "Service Plumbing",
    "Bid Work HVAC",
    "Service HVAC",
    "Bid Work Plumbing",
    "HWT Replacement",
    "Maintenance",
    "Material Sale",
  ],
  datasets: [
    {
      backgroundColor: "#40be99",
      data: [190000, 130000, 79000, 78000, 44000, 42000, 2000],
    },
  ],
};

let option1 = {
  indexAxis: "y",
  legend: { display: false },
  scales: {
    xAxes: [{ ticks: { stepSize: 5000, beginAtZero: true } }],
    yAxes: [{ ticks: { beginAtZero: true } }],
  },
};

let option2 = {
  indexAxis: "y",
  legend: { display: false },
  scales: {
    xAxes: [{ ticks: { stepSize: 20000, beginAtZero: true } }],
    yAxes: [{ ticks: { beginAtZero: true } }],
  },
};

let ctx1 = document
  .getElementById("graph1")
  .querySelector("canvas")
  .getContext("2d");
new Chart(ctx1, {
  type: "horizontalBar",
  data: data1,
  options: option1,
});

let ctx2 = document
  .getElementById("graph2")
  .querySelector("canvas")
  .getContext("2d");
new Chart(ctx2, {
  type: "horizontalBar",
  data: data2,
  options: option2,
});
