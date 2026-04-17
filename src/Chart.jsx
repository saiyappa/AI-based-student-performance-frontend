import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

function Chart({ history }) {
  const data = {
    labels: history.map((item, index) => `Test ${index + 1}`),
    datasets: [
      {
        label: "Predicted Marks",
        data: history.map(item => item.prediction),
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Line data={data} />
    </div>
  );
}

export default Chart;