import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CycleSnapshot } from '../types';

interface PerformanceMetricsProps {
  snapshot: CycleSnapshot;
}

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ snapshot }) => {
  const performanceData = [
    {
      name: 'Average Speed',
      value: snapshot.average_speed,
      unit: 'km/h',
    },
    {
      name: 'Max Speed',
      value: snapshot.max_speed,
      unit: 'km/h',
    },
    {
      name: 'Total Distance',
      value: snapshot.total_distance,
      unit: 'km',
    },
  ];

  return (
    <div className="performance-metrics">
      <h2>Performance Metrics</h2>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Average Speed</h3>
          <p className="metric-value">{snapshot.average_speed.toFixed(2)} km/h</p>
        </div>
        <div className="metric-card">
          <h3>Max Speed</h3>
          <p className="metric-value">{snapshot.max_speed.toFixed(2)} km/h</p>
        </div>
        <div className="metric-card">
          <h3>Total Distance</h3>
          <p className="metric-value">{snapshot.total_distance.toFixed(2)} km</p>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number, name: string) => [`${value.toFixed(2)}`, name]} />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};


