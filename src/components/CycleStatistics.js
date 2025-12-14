"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CycleStatistics = void 0;
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var CycleStatistics = function (_a) {
    var snapshot = _a.snapshot;
    var formatDateTime = function (dateString) {
        return (0, date_fns_1.format)(new Date(dateString), 'PPpp');
    };
    var formatDuration = function (hours) {
        var h = Math.floor(hours);
        var m = Math.floor((hours - h) * 60);
        return "".concat(h, "h ").concat(m, "m");
    };
    return (<div className="cycle-statistics">
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
    </div>);
};
exports.CycleStatistics = CycleStatistics;
