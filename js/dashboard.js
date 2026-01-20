// Wait for HTML to load (Fixes Missing Charts)
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Sidebar Toggle
    window.toggleSidebar = function() {
        document.querySelector('.sidebar').classList.toggle('active');
    };

    // 2. Chart Configurations
    Chart.defaults.font.family = "'Poppins', sans-serif";

    // --- CHART 1: LINE CHART ---
    const lineCanvas = document.getElementById('usageLineChart');
    if (lineCanvas) {
        const ctx1 = lineCanvas.getContext('2d');
        let gradient = ctx1.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(236, 179, 13, 0.25)');
        gradient.addColorStop(1, 'rgba(236, 179, 13, 0.0)');

        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Usage',
                    data: [180, 200, 150, 240, 250, 200, 140],
                    borderColor: '#ECB30D',
                    backgroundColor: gradient,
                    tension: 0.4,
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#ECB30D',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, grid: { borderDash: [5, 5], color: '#f0f0f0' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

    // --- CHART 2: DOUGHNUT CHART ---
    const doughnutCanvas = document.getElementById('topCalculatorsChart');
    if (doughnutCanvas) {
        const ctx2 = doughnutCanvas.getContext('2d');
        const pieData = {
            labels: ['Conversion Calculator', 'Door Calculator', 'Geo Tech Calculator', 'Earth Work Calculator', 'Marble Calculator'],
            data: [39.11, 28.02, 23.13, 5.03, 5.03],
            colors: ['#ECB30D', '#F3C845', '#FDE68A', '#FFF7D1', '#FFFDF5']
        };

        new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: pieData.labels,
                datasets: [{
                    data: pieData.data,
                    backgroundColor: pieData.colors,
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: { legend: { display: false } }
            }
        });

        // Custom Legend Generation
        const legendContainer = document.getElementById('customLegend');
        if (legendContainer) {
            legendContainer.innerHTML = '';
            pieData.labels.forEach((label, index) => {
                const item = document.createElement('div');
                item.className = 'legend-item';
                item.innerHTML = `
                    <div class="legend-left">
                        <span class="legend-color" style="background-color: ${pieData.colors[index]}"></span>
                        <span>${label}</span>
                    </div>
                    <div class="legend-percent">${pieData.data[index]}%</div>
                `;
                legendContainer.appendChild(item);
            });
        }
    }

    // --- CHART 3: BAR CHART ---
    const barCanvas = document.getElementById('barChart');
    if (barCanvas) {
        const ctx3 = barCanvas.getContext('2d');
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Conversion', 'Door', 'Geo Tech', 'Earth Work', 'Marble', 'Construction', 'Concrete', 'Land Scaping', 'Drive Way'],
                datasets: [{
                    label: 'Times Used',
                    data: [230, 120, 180, 140, 290, 130, 200, 200, 200],
                    backgroundColor: (ctx) => (ctx.dataIndex === 4 ? '#ECB30D' : '#FFF8E1'),
                    borderRadius: 6,
                    barThickness: 18
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, border: { display: false }, grid: { borderDash: [5, 5], color: '#f5f5f5' } },
                    x: { grid: { display: false } }
                }
            }
        });
    }

});