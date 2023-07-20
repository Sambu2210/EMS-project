import Title from "antd/es/typography/Title";
import ReactApexChart from "react-apexcharts";
import lineChart from "../datas/Linechartdata";
import Chart from "react-apexcharts";

const LineChart = () => {
  return (
    <>
      <div>
        <Title level={4}>Revenue Generated</Title>
      </div>
      <div>
        <Chart
          options={lineChart.options}
          series={lineChart.series}
          type="line"
          height={350}
          width={"100%"}
        />
      </div>
    </>
  );
};
export default LineChart;
