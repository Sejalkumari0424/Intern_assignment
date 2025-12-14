import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CycleSnapshot } from '../types';

interface ChargingInsightsProps {
  snapshot: CycleSnapshot;
}

export const ChargingInsights: React.FC<ChargingInsightsProps> = ({ snapshot }) => {
  const chargingData = [
    {
      name: 'Charging Instances',
      value: snapshot.charging_instances_count,
    },
    {
      name: 'Avg Charge Start SOC',
      value: snapshot.average_charge_start_soc,
    },
  ];

  return (
    <div className="charging-insights">
      <h2>Charging Insights</h2>
      <div className="charging-metrics">
        <div className="metric-card">
          <h3>Charging Instances</h3>
          <p className="metric-value">{snapshot.charging_instances_count}</p>
        </div>
        <div className="metric-card">
          <h3>Average Charge Start SOC</h3>
          <p className="metric-value">{snapshot.average_charge_start_soc.toFixed(2)}%</p>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chargingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number) => [value.toFixed(2), '']} />
            <Bar dataKey="value" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


