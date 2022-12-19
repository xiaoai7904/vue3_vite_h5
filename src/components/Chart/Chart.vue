<script setup>
import { toRaw, onMounted, reactive } from 'vue'
import Canvas from '@antv/f2-vue'
import { Chart, Axis, Line } from '@antv/f2'

const store = reactive({
  devicePixelRatio: window.devicePixelRatio,
  chartData: [
    {
      time: new Date().getTime(),
      value: 12,
    },
  ],
  scale: {
    value: {
      min: 0,
    },
  },
})

const getRecord = () => {
  return {
    time: new Date().getTime(),
    value: Math.random() * 2 + 10,
  }
}

onMounted(() => {
//   setInterval(() => {
//     const newData = [].concat(store.chartData)
//     newData.push(getRecord())
//     console.log(store.chartData)
//     store.chartData = [...newData]
//   }, 1000)
})
// export default {
// //   components: { Canvas, Chart, Axis, Line },
//   data() {
//     return {
//       chartData: [
//         {
//           time: new Date().getTime(),
//           value: 12,
//         },
//       ],
//     }
//   },
//   methods: {
//     getRecord() {
//       return {
//         time: new Date().getTime(),
//         value: Math.random() * 2 + 10,
//       }
//     },
//   },
//   mounted() {
//     setInterval(() => {
//       const newData = [].concat(store.chartData)
//       newData.push(this.getRecord())
//       console.log(store.chartData)
//       this.chartData = [...newData]
//     }, 1000)
//   },
//   render() {
//     return (
//       <div>
//         <Canvas pixelRatio={window.devicePixelRatio}>
//           <Chart data={toRaw(this.chartData)}>
//             <Axis field="value" />
//             <Axis field="time" type="timeCat" tickCount={5} mask="mm:ss" />
//             <Line x="time" y="value" />
//           </Chart>
//         </Canvas>
//       </div>
//     )
//   },
// }
// const stroe = reactive({
//   chartData: [
//     {
//       time: new Date().getTime(),
//       value: 12,
//     },
//   ],
// })
// return () => (
//   <div>
//     <Canvas pixelRatio={window.devicePixelRatio}>
//       <Chart data={toRaw(stroe.chartData)}>
//         <Axis field="value" />
//         <Axis field="time" type="timeCat" tickCount={5} mask="mm:ss" />
//         <Line x="time" y="value" />
//       </Chart>
//     </Canvas>
//   </div>
// )
</script>

<template>
  <div>
    <Canvas :pixelRatio="store.devicePixelRatio">
      <Chart :data="store.chartData" :scale="store.scale">
        <Axis field="value" />
        <Axis field="time" type="timeCat" :tickCount="5" mask="mm:ss" />
        <Line x="time" y="value" />
      </Chart>
    </Canvas>
  </div>
</template>
