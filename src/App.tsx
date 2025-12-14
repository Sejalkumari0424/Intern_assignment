import { useState, useEffect } from 'react';
import { batteryAPI } from './services/api';
import { CycleSnapshot, BatterySummary } from './types';
import { CycleNavigation } from './components/CycleNavigation';
import { CycleStatistics } from './components/CycleStatistics';
import { PerformanceMetrics } from './components/PerformanceMetrics';
import { TemperatureDistribution } from './components/TemperatureDistribution';
import { BatteryHealth } from './components/BatteryHealth';
import { AlertsSafety } from './components/AlertsSafety';
import { ChargingInsights } from './components/ChargingInsights';
import { LongTermTrends } from './components/LongTermTrends';
import './styles/App.css';

const ALLOWED_IMEIS = ['865044073967657', '865044073949366'];

function App() {
  const [selectedImei, setSelectedImei] = useState<string>(ALLOWED_IMEIS[0]);
  const [, setSummaries] = useState<BatterySummary[]>([]);
  const [snapshots, setSnapshots] = useState<CycleSnapshot[]>([]);
  const [currentCycle, setCurrentCycle] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, [selectedImei]);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const summaryData = await batteryAPI.getSummary();
      setSummaries(summaryData);

      const snapshotData = await batteryAPI.getSnapshots(selectedImei, 100, 0);
      setSnapshots(snapshotData);

      if (snapshotData.length > 0) {
        setCurrentCycle(snapshotData[0].cycle_number);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
      console.error('Error loading data:', err);
    } finally {
      setLoading(false);
    }
  };

  const currentSnapshot = snapshots.find((s) => s.cycle_number === currentCycle);
  const totalCycles = snapshots.length > 0 ? Math.max(...snapshots.map((s) => s.cycle_number)) : 0;

  if (loading) {
    return (
      <div className="app-loading">
        <div className="loader">Loading battery data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={loadData}>Retry</button>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Battery Analytics Dashboard</h1>
        <div className="imei-selector">
          <label>Select IMEI:</label>
          <select value={selectedImei} onChange={(e) => setSelectedImei(e.target.value)}>
            {ALLOWED_IMEIS.map((imei) => (
              <option key={imei} value={imei}>
                {imei}
              </option>
            ))}
          </select>
        </div>
      </header>

      {currentSnapshot && (
        <>
          <CycleNavigation
            currentCycle={currentCycle}
            totalCycles={totalCycles}
            onCycleChange={setCurrentCycle}
          />

          <CycleStatistics snapshot={currentSnapshot} />

          <PerformanceMetrics snapshot={currentSnapshot} />

          <TemperatureDistribution snapshot={currentSnapshot} />

          <BatteryHealth snapshot={currentSnapshot} allSnapshots={snapshots} />

          <AlertsSafety snapshot={currentSnapshot} />

          <ChargingInsights snapshot={currentSnapshot} />

          {snapshots.length > 1 && <LongTermTrends snapshots={snapshots} />}
        </>
      )}

      {!currentSnapshot && (
        <div className="no-data">
          <p>No snapshot data available for the selected cycle.</p>
        </div>
      )}
    </div>
  );
}

export default App;


