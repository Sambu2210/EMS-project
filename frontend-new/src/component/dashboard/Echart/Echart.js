import Chart from "react-apexcharts";
import eChart from "../datas/Echartdata";
import Title from "antd/es/typography/Title";

const Echart = () => {
  return (
    <>
      <div>
        <Title level={4}>Teams Work</Title>
      </div>
      <div>
        <Chart
          className="w-100"
          options={eChart.options}
          series={eChart.series}
          type="bar"
          height={350}
          width={"100%"}
        />
      </div>
    </>
  );
};
export default Echart;
