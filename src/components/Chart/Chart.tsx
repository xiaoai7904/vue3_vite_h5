import { defineComponent, onMounted, reactive, markRaw } from "vue";
import * as echarts from "echarts/core";
import { GridComponent, GridComponentOption } from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import "./Chart.style.less";

echarts.use([GridComponent, LineChart, SVGRenderer, UniversalTransition]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

type ChartStoreType = {
  options: EChartsOption;
};

export default defineComponent({
  setup() {
    const rawData = markRaw({
      chartIns: {} as echarts.EChartsType,
    });
    const chartStore = reactive<ChartStoreType>({
      options: {
        xAxis: {
          type: "category",
          data: [1, 2, 3, 4, 5, 6, 7],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
        grid: {
          left: "10%",
          top: "10%",
          bottom: "15%",
          right: "2%",
        },
      },
    });

    const setOption = (options: EChartsOption) => {
      rawData.chartIns && rawData.chartIns.setOption(options);
    };

    const scheduledUpdate = () => {
      setInterval(() => {
        const xAxis = chartStore.options.xAxis as any;
        const series = chartStore.options.series as any[];
        if (xAxis.data.length > 30) {
          xAxis.data = [];
          series[0].data = [];
        }
        series[0].data.push(Math.floor(Math.random() * 1000));
        xAxis.data.push(Math.floor(Math.random() * 10));
        setOption(chartStore.options);
      }, 4000);
    };

    onMounted(() => {
      const chartDom = document.getElementById("chart")!;
      rawData.chartIns = echarts.init(chartDom);
      setOption(chartStore.options);
      scheduledUpdate();
    });

    return () => <div id="chart" class="chart"></div>;
  },
});
