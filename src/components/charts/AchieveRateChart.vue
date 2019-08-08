<script>
import { Bar } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'AmountRateChart',
  extends: Bar,
  data: () => ({
    plugins: [ ChartDataLabels ],
    chartdata: {
      labels: ['비활동', '유산소', '근력운동', '근력심화'],
      datasets: [
        {
          label: '운동 목표 달성량',
          backgroundColor: ['#df8244', '#f9c044', '#4d72be', '#b1ff52'],
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
          color: 'white',
          font: {
            size: '15'
          },
          formatter (value, context) {
            return context.dataset.data[context.dataIndex]
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
