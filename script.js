function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));

    document.getElementById(`${tabName}-content`).classList.add('active');
    document.querySelector(`.tab-button[data-tab="${tabName}"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    createChart('incomeChart', incomeChartLabels, incomeChartData, 'Income (€)', 'Average Tax Rate (%)', 0, 35, '%');
    createChart('capitalChart', capitalGainsChartLabels, capitalGainsChartData, 'Capital Gains (€)', 'Average Tax Rate (%)', 0, 25, '%');
    createChart('socialSecurityChart', socialSecurityLabels, socialSecurityDatasets, 'Gross Salary (€)', 'Amount (€)', 0, undefined, '€');
});

function createChart(canvasId, labels, datasets, xLabel, yLabel, yMin, yMax, suffix = '') {
    const ctx = document.getElementById(canvasId).getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: context => `${context.dataset.label}: ${suffix}${context.raw.toFixed(2)}`
                    }
                }
            },
            scales: {
                x: { title: { display: true, text: xLabel } },
                y: {
                    title: { display: true, text: yLabel },
                    min: yMin,
                    max: yMax
                }
            }
        }
    });
}
