import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CycleSnapshot } from '../types';

interface TemperatureDistributionProps {
  snapshot: CycleSnapshot;
}

export const TemperatureDistribution: React.FC<TemperatureDistributionProps> = ({ snapshot }) => {
  const [samplingRate, setSamplingRate] = useState<'5deg' | '10deg' | '15deg' | '20deg'>('5deg');

  const getDistribution = () => {
    const key = `temperature_dist_${samplingRate}` as keyof CycleSnapshot;
    return snapshot[key] as Record<string, number>;
  };

  const distribution = getDistribution();
  const chartData = Object.entries(distribution).map(([range, minutes]) => ({
    range,
    minutes: parseFloat(minutes.toFixed(2)),
  }));

  return (
    <div className="temperature-distribution">
      <h2>Temperature Distribution</h2>
      <div className="sampling-controls">
        <label>Sampling Rate:</label>
        <select
          value={samplingRate}
          onChange={(e) => setSamplingRate(e.target.value as typeof samplingRate)}
        >
          <option value="5deg">5°C</option>
          <option value="10deg">10°C</option>
          <option value="15deg">15°C</option>
          <option value="20deg">20°C</option>
        </select>
        <span className="avg-temp">Avg: {snapshot.average_temperature.toFixed(2)}°C</span>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="range" angle={-45} textAnchor="end" height={80} />
            <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              formatter={(value: number) => [`${value.toFixed(2)} minutes`, 'Time Spent']}
            />
            <Bar dataKey="minutes" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


