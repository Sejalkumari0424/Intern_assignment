"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemperatureDistribution = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var TemperatureDistribution = function (_a) {
    var snapshot = _a.snapshot;
    var _b = (0, react_1.useState)('5deg'), samplingRate = _b[0], setSamplingRate = _b[1];
    var getDistribution = function () {
        var key = "temperature_dist_".concat(samplingRate);
        return snapshot[key];
    };
    var distribution = getDistribution();
    var chartData = Object.entries(distribution).map(function (_a) {
        var range = _a[0], minutes = _a[1];
        return ({
            range: range,
            minutes: parseFloat(minutes.toFixed(2)),
        });
    });
    return (<div className="temperature-distribution">
      <h2>Temperature Distribution</h2>
      <div className="sampling-controls">
        <label>Sampling Rate:</label>
        <select value={samplingRate} onChange={function (e) { return setSamplingRate(e.target.value); }}>
          <option value="5deg">5°C</option>
          <option value="10deg">10°C</option>
          <option value="15deg">15°C</option>
          <option value="20deg">20°C</option>
        </select>
        <span className="avg-temp">Avg: {snapshot.average_temperature.toFixed(2)}°C</span>
      </div>
      <div className="chart-container">
        <recharts_1.ResponsiveContainer width="100%" height={400}>
          <recharts_1.BarChart data={chartData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey="range" angle={-45} textAnchor="end" height={80}/>
            <recharts_1.YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}/>
            <recharts_1.Tooltip formatter={function (value) { return ["".concat(value.toFixed(2), " minutes"), 'Time Spent']; }}/>
            <recharts_1.Bar dataKey="minutes" fill="#82ca9d"/>
          </recharts_1.BarChart>
        </recharts_1.ResponsiveContainer>
      </div>
    </div>);
};
exports.TemperatureDistribution = TemperatureDistribution;
