import { useState, useEffect } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import BarLoader from "react-spinners/BarLoader";

import './Chart.css'

const VolumeChart = ({ collection_id }) => {
    const [data, setData] = useState([]);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(0);
    const [loading, setLoading] = useState(true);
  
    const get_data = async () => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/sales_volume?collection_id=${collection_id}`
              );
              const sales = await response.json();
          
              setData(sales);
              setEnd(sales[sales.length - 1].index);
              setStart(sales[sales.length - 7].index);
              setLoading(false);
        } catch (error) {
            console.log(error)
        }
    };
  
    useEffect(() => {
      get_data();
    }, []);
  
    return (
      <>
        {loading ? (
          <div className="chart-loader">
            <BarLoader color={"orange"} loading={loading} height={6} width={100} />
          </div>
        ) : (
          <div className="chart">
            <ResponsiveContainer width="100%" aspect={3}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 50,
                  right: 50,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid horizontal="" vertical="" />
                <XAxis dataKey="index" tick={{ fill: "#fff" }} />
                <YAxis tick={{ fill: "#fff" }} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#35363A", color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Sales"
                  stroke="orange"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <ReferenceArea
                  x1={start}
                  x2={end}
                  stroke="#78ffd6"
                  label={{
                    value: "Predictions",
                    fill: "#fff",
                    fontSize: "2em",
                    fontFamily: "sans-serif",
                  }}
                  strokeOpacity={0.6}
                  fill="#1e3837"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </>
    );
}

export default VolumeChart