import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const totalMaximumValue = Math.max(...dataPoints.map((dataPoint) => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={totalMaximumValue} />
      ))}
    </div>
  );
};

export default Chart;