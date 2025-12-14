"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargingInsights = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var ChargingInsights = function (_a) {
    var snapshot = _a.snapshot;
    var chargingData = [
        {
            name: 'Charging Instances',
            value: snapshot.charging_instances_count,
        },
        {
            name: 'Avg Charge Start SOC',
            value: snapshot.average_charge_start_soc,
        },
    ];
    return (<div className="charging-insights">
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
        <recharts_1.ResponsiveContainer width="100%" height={300}>
          <recharts_1.BarChart data={chargingData}>
            <recharts_1.CartesianGrid strokeDasharray="3 3"/>
            <recharts_1.XAxis dataKey="name"/>
            <recharts_1.YAxis />
            <recharts_1.Tooltip formatter={function (value) { return [value.toFixed(2), '']; }}/>
            <recharts_1.Bar dataKey="value" fill="#ffc658"/>
          </recharts_1.BarChart>
        </recharts_1.ResponsiveContainer>
      </div>
    </div>);
};
exports.ChargingInsights = ChargingInsights;
