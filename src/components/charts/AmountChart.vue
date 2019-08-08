<script>
import { Doughnut } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'AmountChart',
  extends: Doughnut,
  data: () => ({
    plugins: [ ChartDataLabels ],
    chartdata: {
      labels: ['비활동', '유산소', '근력운동', '근력심화'],
      datasets: [
        {
          backgroundColor: ['#345e96', '#d09e7f', '#a4c2e3', '#fbe6a0'],
          data: [43, 26, 22, 9]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
