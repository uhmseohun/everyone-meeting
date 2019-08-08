<script>
import { Line } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'CalorieChart',
  extends: Line,
  data: () => ({
    plugins: [ ChartDataLabels ],
    chartdata: {
      labels: ['비활동', '유산소', '근력운동', '근력심화'],
      datasets: [
        {
          label: '운동 목표 달성량',
          data: [420, 190, 22, 300]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        enabled: false
      },
      plugins: {
        datalabels: {
          font: {
            size: '15'
          },
          formatter (value, context) {
            return `${context.chart.data.labels[context.dataIndex]} : ${context.dataset.data[context.dataIndex]}`
          }
        }
      }
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
