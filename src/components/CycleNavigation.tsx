import React from 'react';

interface CycleNavigationProps {
  currentCycle: number;
  totalCycles: number;
  onCycleChange: (cycle: number) => void;
}

export const CycleNavigation: React.FC<CycleNavigationProps> = ({
  currentCycle,
  totalCycles,
  onCycleChange,
}) => {
  return (
    <div className="cycle-navigation">
      <h2>Cycle Navigation</h2>
      <div className="navigation-controls">
        <button
          onClick={() => onCycleChange(Math.max(1, currentCycle - 1))}
          disabled={currentCycle === 1}
        >
          Previous
        </button>
        <input
          type="range"
          min="1"
          max={totalCycles}
          value={currentCycle}
          onChange={(e) => onCycleChange(parseInt(e.target.value))}
          className="cycle-slider"
        />
        <button
          onClick={() => onCycleChange(Math.min(totalCycles, currentCycle + 1))}
          disabled={currentCycle === totalCycles}
        >
          Next
        </button>
        <select
          value={currentCycle}
          onChange={(e) => onCycleChange(parseInt(e.target.value))}
          className="cycle-select"
        >
          {Array.from({ length: totalCycles }, (_, i) => i + 1).map((cycle) => (
            <option key={cycle} value={cycle}>
              Cycle {cycle}
            </option>
          ))}
        </select>
        <span className="cycle-indicator">
          Cycle {currentCycle} of {totalCycles}
        </span>
      </div>
    </div>
  );
};


