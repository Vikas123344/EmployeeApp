/* eslint-disable no-unused-vars */
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BarData } from "../../data/chartdata/Linedata";

const BarChartdata = ({ title, dataKey, xKey }) => {
  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={BarData}>
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip cursor={false} />
            <Bar
              type="monotone"
              dataKey="completed"
              fill="orange"
            />
            <Bar
              type="monotone"
              dataKey="pending"
              fill="green"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartdata;
