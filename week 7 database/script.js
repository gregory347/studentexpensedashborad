const expenses = [
  { date: "2024-09-01", category: "Food", amount: 100 },
  { date: "2024-09-03", category: "Rent", amount: 500 },
  { date: "2024-09-05", category: "Transport", amount: 50 },
  { date: "2024-10-01", category: "Food", amount: 100 },
  { date: "2024-10-02", category: "Rent", amount: 500 },
  { date: "2024-10-05", category: "Transport", amount: 70 },
  { date: "2024-10-08", category: "Sherehe", amount: 200 },
];

function calculateSummary() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const avgMonthly = total / 2;
  const topCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  document.getElementById(
    "total-expenses"
  ).textContent = `Total Expenses: $${total}`;
  document.getElementById(
    "monthly-average"
  ).textContent = `Monthly Average: $${avgMonthly.toFixed(2)}`;
  document.getElementById(
    "top-category"
  ).textContent = `Top Category: ${Object.keys(topCategory).reduce((a, b) =>
    topCategory[a] > topCategory[b] ? a : b
  )}`;
}

function createCategoryChart() {
  const ctx = document.getElementById("categoryChart").getContext("2d");
  const categories = Array.from(new Set(expenses.map((exp) => exp.category)));
  const categoryTotals = categories.map((cat) =>
    expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0)
  );

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: categories,
      datasets: [
        {
          data: categoryTotals,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        },
      ],
    },
  });
}

function createTrendChart() {
  const ctx = document.getElementById("trendChart").getContext("2d");
  const dates = Array.from(new Set(expenses.map((exp) => exp.date)));
  const amounts = dates.map((date) =>
    expenses
      .filter((exp) => exp.date === date)
      .reduce((sum, exp) => sum + exp.amount, 0)
  );

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Expenses Over Time",
          data: amounts,
          borderColor: "#15aacf",
          fill: false,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#000",
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Date",
            color: "#000",
          },
          ticks: {
            color: "#000",
          },
        },
        y: {
          title: {
            display: true,
            text: "Amount ($)",
            color: "#000",
          },
          ticks: {
            color: "#000",
          },
        },
      },
    },
  });
}

document
  .getElementById("categoryFilter")
  .addEventListener("change", function () {
    const category = this.value;
    const filteredExpenses =
      category === "all"
        ? expenses
        : expenses.filter((exp) => exp.category === category);
    updateCategoryChart(filteredExpenses);
  });

calculateSummary();
createCategoryChart();
createTrendChart();
