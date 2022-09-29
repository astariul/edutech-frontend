import { CSSProperties } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import useStyles from './style';

interface LearningCurveProps {
  datas: {
    main: {
      title: string,
      data: number[],
    },
    subs?: [{
      title: string,
      data: number[],
    }]
  };
  dates: string[];
  xaxisType?: string;
  colors?: string[],
  title?: string;
  height?: number | string;
  width?: number | string;
  fontColor?: string;
  gridLineColor?: string;
  markerSize?: number;
  lineWidth?: number;
  style?: CSSProperties;
  dataLabelOn?: boolean;
}

const LearningCurve = ({
  datas,
  dates,
  style,
  colors,
  height,
  width,
  title,
  xaxisType,
  dataLabelOn = false,
  gridLineColor = "#f1f1f1",
  markerSize = 0,
  lineWidth = 2,
  fontColor = "#373d3f",
}: LearningCurveProps) => {
  const {classes, cx} = useStyles();

  const seriesSub = datas.subs ? (
    datas.subs.map(
      (each) => {
        return {
          name: each.title,
          data: each.data
        }
      }
      ) as {name: string, data: number[]}[]
      )
      :
      []
  const series = [
    {
      name: datas.main.title,
      data: datas.main.data
        
    },
    ...seriesSub
  ]

  const options: ApexOptions = {
      chart: {
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        foreColor: fontColor
      },
      noData: {
        text: "loading...",
        align: "center"
      },
      dataLabels: {
        enabled: dataLabelOn,
      },
      markers: {
        size: markerSize
      },
      stroke: {
        width: lineWidth
      },
      colors: colors,
      title: {
        text: title,
        align: "left"
      },
      xaxis: {
        type: xaxisType as undefined,
        categories: dates
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100,
        show: true,
      },
      grid: {
        borderColor: gridLineColor,
      }
  }

  return (
    <div className={cx(classes.chart)} style={style}>
      <Chart
        options={options}
        series={series}
        type="line"
        height={height}
        width={width}
      />
    </div>
  )
}

export default LearningCurve;
