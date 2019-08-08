<script>
import { Bar } from 'vue-chartjs'

export default {
  name: 'AmountRateChart',
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['비활동', '유산소', '근력운동', '근력심화'],
      datasets: [
        {
          label: '운동 목표 달성량',
          backgroundColor: ['#df8244', '#f9c044', '#4d72be', '#fbe6a0'],
          data: [420, 190, 22, 300]
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
