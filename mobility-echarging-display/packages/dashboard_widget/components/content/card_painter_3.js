export async function card_painter_3() {
  this.load_perc_3 = 0;
  await this.get_plugs_type_distribution();
  this.load_perc_3 = 100;

  let ctx_2 = this.shadowRoot.getElementById('chart_2').getContext('2d');
  new Chart(ctx_2, {
    type: 'doughnut',
    data: {
      datasets: [
        {
          data: this.chart_2_value,
          backgroundColor: ['#4285F4', '#DE7000', '#EF80FF', '#97BE0E', '#E6040E']
        }
      ]
    },
    options: {
      tooltips: {
        enabled: false
      },
      hover: { mode: null },
      maintainAspectRatio: true,
      aspectRatio: 1,
      title: {
        display: false
      },
      cutoutPercentage: 80,
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
}
