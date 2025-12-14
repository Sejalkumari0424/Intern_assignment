"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleNavigation = void 0;
var react_1 = require("react");
var CycleNavigation = function (_a) {
    var currentCycle = _a.currentCycle, totalCycles = _a.totalCycles, onCycleChange = _a.onCycleChange;
    return (<div className="cycle-navigation">
      <h2>Cycle Navigation</h2>
      <div className="navigation-controls">
        <button onClick={function () { return onCycleChange(Math.max(1, currentCycle - 1)); }} disabled={currentCycle === 1}>
          Previous
        </button>
        <input type="range" min="1" max={totalCycles} value={currentCycle} onChange={function (e) { return onCycleChange(parseInt(e.target.value)); }} className="cycle-slider"/>
        <button onClick={function () { return onCycleChange(Math.min(totalCycles, currentCycle + 1)); }} disabled={currentCycle === totalCycles}>
          Next
        </button>
        <select value={currentCycle} onChange={function (e) { return onCycleChange(parseInt(e.target.value)); }} className="cycle-select">
          {Array.from({ length: totalCycles }, function (_, i) { return i + 1; }).map(function (cycle) { return (<option key={cycle} value={cycle}>
              Cycle {cycle}
            </option>); })}
        </select>
        <span className="cycle-indicator">
          Cycle {currentCycle} of {totalCycles}
        </span>
      </div>
    </div>);
};
exports.CycleNavigation = CycleNavigation;
