import {
  defineComponent,
  onMounted,
  reactive,
  markRaw,
  PropType,
  watch,
} from "vue";
import * as echarts from "echarts/core";
import {
  GridComponent,
  GridComponentOption,
  DataZoomComponent,
  TooltipComponent,
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { SVGRenderer } from "echarts/renderers";
import "./Chart.style.less";

echarts.use([
  GridComponent,
  LineChart,
  SVGRenderer,
  UniversalTransition,
  DataZoomComponent,
  TooltipComponent,
]);

type EChartsOption = echarts.ComposeOption<
  GridComponentOption | LineSeriesOption
>;

type ChartStoreType = {
  options: EChartsOption;
};

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Record<string, number>[]>,
      default: () => [],
    },
  },
  setup(props) {
    const rawData = markRaw({
      chartIns: {} as echarts.EChartsType,
    });
    const chartStore = reactive<ChartStoreType>({
      options: {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: props.data ? props.data.map(item => item.date) : [],
        },
        yAxis: {
          type: "value",
          min: "dataMin",
          minInterval: 0.5
        },
        series: [
          {
            data: props.data ? props.data.map(item => item.value) : [],
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#89bdec", // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#c9e0f7", // 50% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#eef6fb", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            symbol: "none",
            smooth: true,
            type: "line",
          },
        ],
        grid: {
          left: "10%",
          top: "10%",
          bottom: "15%",
          right: "2%",
        },
        dataZoom: [
          {
            type: "inside",
            start: 0,
            end: 20,
            show: false,
          },
          // {
          //   start: 0,
          //   end: 20,
          // },
        ],
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

    watch(
      () => props.data,
      (newVlaue) => {
        (chartStore.options.xAxis as any).data = Object.keys(newVlaue);
        (chartStore.options.series as any)[0].data = Object.values(newVlaue);
        setOption(chartStore.options);
      },
      { deep: true }
    );
    onMounted(() => {
      const chartDom = document.getElementById("chart")!;
      rawData.chartIns = echarts.init(chartDom);
      // setOption(chartStore.options);
      // scheduledUpdate();
    });

    return () => <div id="chart" class="chart"></div>;
  },
});
