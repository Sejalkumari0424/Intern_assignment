"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformanceMetrics = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var PerformanceMetrics = function (_a) {
    var snapshot = _a.snapshot;
    var performanceData = [
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
    return (<div className="performance-metrics">
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
        <recharts_1.ResponsiveContainer width="100%" height={300}>
          <recharts_1.BarChart data={performanceData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey="name"/>
            <recharts_1.YAxis />
            <recharts_1.Tooltip formatter={function (value, name) { return ["".concat(value.toFixed(2)), name]; }}/>
            <recharts_1.Bar dataKey="value" fill="#8884d8"/>
          </recharts_1.BarChart>
        </recharts_1.ResponsiveContainer>
      </div>
    </div>);
};
exports.PerformanceMetrics = PerformanceMetrics;
