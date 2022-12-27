<script lang="jsx">
import { toRaw } from 'vue'
import Canvas from '@antv/f2-vue'
import { Chart, Interval, Axis, Line } from '@antv/f2'

// const data1 = [
//   { genre: 'Sports', sold: 275 },
//   { genre: 'Strategy', sold: 115 },
//   { genre: 'Action', sold: 120 },
//   { genre: 'Shooter', sold: 350 },
//   { genre: 'Other', sold: 150 },
// ]

// const data2 = [
//   { genre: 'Sports', sold: 275 },
//   { genre: 'Strategy', sold: 115 },
//   { genre: 'Shooter', sold: 50 },
//   { genre: 'Action', sold: 20 },
//   { genre: 'Other', sold: 50 },
// ]

export default {
  name: 'App',
  data() {
    return {
      show: true,
      chartData: [
        {
          time: new Date().getTime(),
          value: 12,
        },
      ],
    }
  },
  mounted() {
    setInterval(() => {
      this.show = false
      const newData = [].concat(this.chartData)
      newData.push(this.getRecord())
      this.chartData = [...newData]
      setTimeout(() => {
        this.show = true
      }, 300)
    }, 1000)
  },
  methods: {
    getRecord() {
      return {
        time: new Date().getTime(),
        value: Math.random() * 2 + 10,
      }
    },
  },
  render() {
    const { chartData } = this
    return (
      <div className="container">
        <Canvas pixelRatio={window.devicePixelRatio}>
          <Chart data={toRaw(chartData)}>
              <Axis field="value" />
              <Axis field="time" type="timeCat" tickCount={5} mask="mm:ss" />
              <Line x="time" y="value" />
          </Chart>
        </Canvas>
      </div>
    )
  },
}
</script>

<style>
/* .container {
  width: 500px;
  height: 300px;
} */
</style>
