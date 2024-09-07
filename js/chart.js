const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
  },
});
// myChart.resize();

const doughnut = document.getElementById("myDoughnutChart").getContext("2d");
const myDoughnutChart = new Chart(doughnut, {
  type: "doughnut", // Specify the chart type
  data: {
    labels: ["Red", "Blue", "Yellow", "Green"], // Labels for the chart segments
    datasets: [
      {
        label: "Dataset 1", // Optional label
        data: [300, 50, 100, 75], // Data for each segment
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Display legend on top
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  },
});

const line = document.getElementById("myLineChart").getContext("2d");
const myLineChart = new Chart(line, {
  type: "line", // Define the chart type
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"], // X-axis labels
    datasets: [
      {
        label: "Sales Over Time",
        data: [65, 59, 80, 81, 56, 55, 40], // Data points
        backgroundColor: "rgba(0, 128, 0, 0.322)", // Line fill color (under the line)
        borderColor: "green", // Line color
        borderWidth: 5, // **This makes the line thick**
        fill: true, // Fill the area under the line
        tension: 0.4, // Line smoothness (0 for straight lines, higher values for more curve)
        pointRadius: 4, // Size of the data points on the line
        pointBackgroundColor: "rgba(54, 162, 235, 1)", // Data point fill color
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    // maintainAspectRatio: false, // Optional: disable aspect ratio if you want more control over sizing
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from 0
      },
    },
    plugins: {
      legend: {
        display: true, // Display the legend
        position: "top", // Position the legend at the top
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  },
});
