import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CycleSnapshot } from '../types';

interface BatteryHealthProps {
  snapshot: CycleSnapshot;
  allSnapshots?: CycleSnapshot[];
}

export const BatteryHealth: React.FC<BatteryHealthProps> = ({ snapshot, allSnapshots }) => {
  const socData = [
    { name: 'Min SOC', value: snapshot.min_soc },
    { name: 'Average SOC', value: snapshot.average_soc },
    { name: 'Max SOC', value: snapshot.max_soc },
  ];

  const sohTrendData =
    allSnapshots?.map((s) => ({
      cycle: s.cycle_number,
      sohDrop: s.soh_drop,
      avgSoc: s.average_soc,
    })) || [];

  return (
    <div className="battery-health">
      <h2>Battery Health</h2>
      <div className="health-metrics">
        <div className="metric-card">
          <h3>State of Charge (SOC)</h3>
          <div className="soc-values">
            <div>
              <label>Min:</label>
              <span>{snapshot.min_soc.toFixed(2)}%</span>
            </div>
            <div>
              <label>Average:</label>
              <span>{snapshot.average_soc.toFixed(2)}%</span>
            </div>
            <div>
              <label>Max:</label>
              <span>{snapshot.max_soc.toFixed(2)}%</span>
            </div>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={socData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value: number) => [`${value.toFixed(2)}%`, 'SOC']} />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="metric-card">
          <h3>State of Health (SOH)</h3>
          <p className="soh-drop">SOH Drop: {snapshot.soh_drop.toFixed(4)}%</p>
          {allSnapshots && allSnapshots.length > 1 && (
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={sohTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="cycle" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sohDrop"
                    stroke="#8884d8"
                    name="SOH Drop (%)"
                  />
                  <Line
                    type="monotone"
                    dataKey="avgSoc"
                    stroke="#82ca9d"
                    name="Avg SOC (%)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


