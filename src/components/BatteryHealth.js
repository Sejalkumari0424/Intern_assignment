"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatteryHealth = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var BatteryHealth = function (_a) {
    var snapshot = _a.snapshot, allSnapshots = _a.allSnapshots;
    var socData = [
        { name: 'Min SOC', value: snapshot.min_soc },
        { name: 'Average SOC', value: snapshot.average_soc },
        { name: 'Max SOC', value: snapshot.max_soc },
    ];
    var sohTrendData = (allSnapshots === null || allSnapshots === void 0 ? void 0 : allSnapshots.map(function (s) { return ({
        cycle: s.cycle_number,
        sohDrop: s.soh_drop,
        avgSoc: s.average_soc,
    }); })) || [];
    return (<div className="battery-health">
      <h2>Battery Health</h2>
      <div className="health-metrics">
        <div className="metric-card">
          <h3>State of Charge (SOC)</h3>
          <div className="soc-values">
            <div>
              <label>Min:</label>
              <span>{snapshot.min_soc.toFixed(2)}%</span>
            </div>
            <div>
              <label>Average:</label>
              <span>{snapshot.average_soc.toFixed(2)}%</span>
            </div>
            <div>
              <label>Max:</label>
              <span>{snapshot.max_soc.toFixed(2)}%</span>
            </div>
          </div>
          <div className="chart-container">
            <recharts_1.ResponsiveContainer width="100%" height={200}>
              <recharts_1.BarChart data={socData}>
                <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                <recharts_1.XAxis dataKey="name"/>
                <recharts_1.YAxis domain={[0, 100]}/>
                <recharts_1.Tooltip formatter={function (value) { return ["".concat(value.toFixed(2), "%"), 'SOC']; }}/>
                <recharts_1.Bar dataKey="value" fill="#8884d8"/>
              </recharts_1.BarChart>
            </recharts_1.ResponsiveContainer>
          </div>
        </div>
        <div className="metric-card">
          <h3>State of Health (SOH)</h3>
          <p className="soh-drop">SOH Drop: {snapshot.soh_drop.toFixed(4)}%</p>
          {allSnapshots && allSnapshots.length > 1 && (<div className="chart-container">
              <recharts_1.ResponsiveContainer width="100%" height={200}>
                <recharts_1.LineChart data={sohTrendData}>
                  <recharts_1.CartesianGrid strokeDasharray="3 3"/>
                  <recharts_1.XAxis dataKey="cycle"/>
                  <recharts_1.YAxis />
                  <recharts_1.Tooltip />
                  <recharts_1.Legend />
                  <recharts_1.Line type="monotone" dataKey="sohDrop" stroke="#8884d8" name="SOH Drop (%)"/>
                  <recharts_1.Line type="monotone" dataKey="avgSoc" stroke="#82ca9d" name="Avg SOC (%)"/>
                </recharts_1.LineChart>
              </recharts_1.ResponsiveContainer>
            </div>)}
        </div>
      </div>
    </div>);
};
exports.BatteryHealth = BatteryHealth;
