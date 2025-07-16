const socialSecurityRawData = [
    { label: 0, value: 0.00 },
    { label: 5000, value: 2656.50 },
    { label: 10000, value: 6579.00 },
    { label: 15000, value: 10501.50 },
    { label: 20000, value: 14424.00 },
    { label: 25000, value: 18346.50 },
    { label: 30000, value: 22269.00 },
    { label: 35000, value: 26191.50 },
    { label: 40000, value: 30114.00 },
    { label: 45000, value: 34036.50 },
    { label: 50000, value: 37959.00 },
    { label: 55000, value: 41881.50 },
    { label: 60000, value: 45804.00 },
    { label: 65000, value: 49937.25 },
    { label: 70000, value: 54070.50 }
];

const employerCosts = [0.00, 6092.00, 12480.00, 18727.00, 24974.00, 31207.00, 37455.00, 43687.00, 49934.00, 56182.00, 62429.00, 68662.00, 74910.00, 81142.00, 86991.00];

const socialSecurityLabels = socialSecurityRawData.map(entry => `${entry.label / 1000}k`);
const socialSecurityDatasets = [
    {
        label: 'Employer Cost',
        data: employerCosts,
        borderColor: 'rgb(230, 85, 85)',
        backgroundColor: 'transparent',
        tension: 0.1
    },
    {
        label: 'Employee Gross Salary',
        data: socialSecurityRawData.map(e => e.label),
        borderColor: 'rgb(60, 179, 113)',
        backgroundColor: 'transparent',
        tension: 0.1
    },
    {
        label: 'Social Security Deducted Salary',
        data: socialSecurityRawData.map(e => e.value),
        borderColor: 'rgb(70, 130, 180)',
        backgroundColor: 'rgba(173, 216, 230, 0.2)',
        tension: 0.1
    }
];
