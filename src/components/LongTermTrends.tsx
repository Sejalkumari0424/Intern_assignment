import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { CycleSnapshot } from '../types';

interface LongTermTrendsProps {
  snapshots: CycleSnapshot[];
}

export const LongTermTrends: React.FC<LongTermTrendsProps> = ({ snapshots }) => {
  if (snapshots.length < 2) {
    return (
      <div className="long-term-trends">
        <h2>Long-term Trends</h2>
        <p>Need at least 2 cycles to show trends</p>
      </div>
    );
  }

  const trendData = snapshots.map((s) => ({
    cycle: s.cycle_number,
    sohDrop: s.soh_drop,
    avgSoc: s.average_soc,
    avgTemp: s.average_temperature,
    totalDistance: s.total_distance,
    avgSpeed: s.average_speed,
    voltageAvg: s.voltage_avg,
  }));

  return (
    <div className="long-term-trends">
      <h2>Long-term Trends</h2>
      <div className="trends-container">
        <div className="trend-chart">
          <h3>SOH Degradation & SOC Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cycle" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sohDrop"
                stroke="#8884d8"
                name="SOH Drop (%)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="avgSoc"
                stroke="#82ca9d"
                name="Avg SOC (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="trend-chart">
          <h3>Temperature & Distance Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cycle" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="avgTemp"
                stroke="#ff7300"
                name="Avg Temp (°C)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="totalDistance"
                stroke="#0088fe"
                name="Distance (km)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="trend-chart">
          <h3>Voltage & Speed Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cycle" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="voltageAvg"
                stroke="#ffc658"
                name="Avg Voltage (V)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="avgSpeed"
                stroke="#8884d8"
                name="Avg Speed (km/h)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};


