document.addEventListener('DOMContentLoaded', () => {
  const chartOptionsDefault = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Montserrat',
            size: 11
          },
          padding: 15
        }
      }
    }
  };

  // Helper to lazy-load charts when they enter viewport
  const initChartOnVisibility = (canvasId, initFunction) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initFunction(canvas);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(canvas);
  };

  // 1. Pie Chart - Sales Volume per Tier
  initChartOnVisibility('chartSalesTier', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'pie',
      data: {
        labels: [
          'Tier 1: Traffic Magnet (15%)',
          'Tier 2: Sweet Spot (65%)',
          'Tier 3: Value Builder (20%)'
        ],
        datasets: [{
          data: [15, 65, 20],
          backgroundColor: ['#e2e8f0', '#2b3d29', '#c9a96e'],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        ...chartOptionsDefault,
        plugins: {
          ...chartOptionsDefault.plugins,
          tooltip: {
            callbacks: {
              label: (item) => `Volume Penjualan: ${item.raw}%`
            }
          }
        }
      }
    });
  });

  // 2. Bar Chart - Revenue Projections
  initChartOnVisibility('chartRevenueTarget', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Harian (Target)', 'Bulanan (Target)', 'Tahunan (Proyeksi)'],
        datasets: [{
          label: 'Estimasi Omzet (Rp)',
          data: [1500000, 45000000, 540000000],
          backgroundColor: ['#c9a96e', '#2b3d29', '#121212'],
          borderRadius: 6
        }]
      },
      options: {
        ...chartOptionsDefault,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => 'Rp ' + val.toLocaleString('id-ID')
            }
          }
        }
      }
    });
  });

  // 3. Doughnut Chart - Cost Breakdown
  initChartOnVisibility('chartCostBreakdown', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: [
          'HPP Bahan Baku (30%)',
          'Sewa & Operasional (25%)',
          'Gaji Tenaga Kerja (20%)',
          'Pemasaran / Marketing (10%)',
          'Net Profit Margin (15%)'
        ],
        datasets: [{
          data: [30, 25, 20, 10, 15],
          backgroundColor: ['#2b3d29', '#c9a96e', '#888888', '#d1d5db', '#10b981'],
          borderWidth: 2
        }]
      },
      options: chartOptionsDefault
    });
  });

  // 4. Horizontal Bar - Cafe Growth in Malang
  initChartOnVisibility('chartMalangCafeGrowth', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['2022', '2023', '2024', '2025 (Estimasi)'],
        datasets: [{
          label: 'Jumlah Wajib Pajak Restoran & Cafe',
          data: [2200, 2600, 2900, 3500],
          backgroundColor: ['#d1d5db', '#888888', '#c9a96e', '#2b3d29'],
          borderRadius: 6
        }]
      },
      options: {
        ...chartOptionsDefault,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true
          }
        }
      }
    });
  });

  // 5. Line Chart - Indonesian Herbal Market Value
  initChartOnVisibility('chartHerbalMarket', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['2025', '2027', '2029', '2032'],
        datasets: [{
          label: 'Nilai Pasar Produk Herbal (Juta USD)',
          data: [935, 1010, 1090, 1220],
          borderColor: '#2b3d29',
          backgroundColor: 'rgba(43, 61, 41, 0.1)',
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointBackgroundColor: '#c9a96e',
          pointBorderWidth: 2,
          pointRadius: 6
        }]
      },
      options: chartOptionsDefault
    });
  });

  // 6. Radar Chart - Competitive Landscape
  initChartOnVisibility('chartCompetitors', (canvas) => {
    new Chart(canvas.getContext('2d'), {
      type: 'radar',
      data: {
        labels: ['Rasa & Kesegaran', 'Affordable Price', 'Fasilitas WFC/Co-Working', 'Nilai Kesehatan', 'Instagramability', 'Keunikan Produk'],
        datasets: [
          {
            label: 'MEREMPAH',
            data: [9, 8, 9, 9, 8, 9],
            backgroundColor: 'rgba(43, 61, 41, 0.2)',
            borderColor: '#2b3d29',
            borderWidth: 2,
            pointBackgroundColor: '#2b3d29'
          },
          {
            label: 'Ramu Space',
            data: [7, 6, 9, 6, 9, 7],
            backgroundColor: 'rgba(201, 169, 110, 0.2)',
            borderColor: '#c9a96e',
            borderWidth: 2,
            pointBackgroundColor: '#c9a96e'
          },
          {
            label: 'STMJ Tradisional',
            data: [8, 9, 3, 8, 2, 5],
            backgroundColor: 'rgba(18, 18, 18, 0.1)',
            borderColor: '#121212',
            borderWidth: 1,
            pointBackgroundColor: '#121212'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { display: true },
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: { stepSize: 2 },
            pointLabels: {
              font: {
                family: 'Montserrat',
                size: window.innerWidth < 480 ? 8 : 11
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { family: 'Montserrat', size: 10 }
            }
          }
        }
      }
    });
  });
});
