import React from 'react';
import { format } from 'date-fns';
import { CycleSnapshot } from '../types';

interface CycleStatisticsProps {
  snapshot: CycleSnapshot;
}

export const CycleStatistics: React.FC<CycleStatisticsProps> = ({ snapshot }) => {
  const formatDateTime = (dateString: string) => {
    return format(new Date(dateString), 'PPpp');
  };

  const formatDuration = (hours: number) => {
    const h = Math.floor(hours);
    const m = Math.floor((hours - h) * 60);
    return `${h}h ${m}m`;
  };

  return (
    <div className="cycle-statistics">
      <h2>Cycle Statistics</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <label>Cycle Number</label>
          <div className="stat-value">{snapshot.cycle_number}</div>
        </div>
        <div className="stat-card">
          <label>Start Time</label>
          <div className="stat-value">{formatDateTime(snapshot.cycle_start_time)}</div>
        </div>
        <div className="stat-card">
          <label>End Time</label>
          <div className="stat-value">{formatDateTime(snapshot.cycle_end_time)}</div>
        </div>
        <div className="stat-card">
          <label>Duration</label>
          <div className="stat-value">{formatDuration(snapshot.cycle_duration_hours)}</div>
        </div>
        <div className="stat-card">
          <label>SOH Drop</label>
          <div className="stat-value">{snapshot.soh_drop.toFixed(3)}%</div>
        </div>
        <div className="stat-card">
          <label>IMEI</label>
          <div className="stat-value">{snapshot.imei}</div>
        </div>
      </div>
    </div>
  );
};

