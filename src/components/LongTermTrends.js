"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LongTermTrends = void 0;
var react_1 = require("react");
var recharts_1 = require("recharts");
var LongTermTrends = function (_a) {
    var snapshots = _a.snapshots;
    if (snapshots.length < 2) {
        return (<div className="long-term-trends">
        <h2>Long-term Trends</h2>
        <p>Need at least 2 cycles to show trends</p>
      </div>);
    }
    var trendData = snapshots.map(function (s) { return ({
        cycle: s.cycle_number,
        sohDrop: s.soh_drop,
        avgSoc: s.average_soc,
        avgTemp: s.average_temperature,
        totalDistance: s.total_distance,
        avgSpeed: s.average_speed,
        voltageAvg: s.voltage_avg,
    }); });
    return (<div className="long-term-trends">
      <h2>Long-term Trends</h2>
      <div className="trends-container">
        <div className="trend-chart">
          <h3>SOH Degradation & SOC Trends</h3>
          <recharts_1.ResponsiveContainer width="100%" height={300}>
            <recharts_1.LineChart data={trendData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey="cycle"/>
              <recharts_1.YAxis yAxisId="left"/>
              <recharts_1.YAxis yAxisId="right" orientation="right"/>
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line yAxisId="left" type="monotone" dataKey="sohDrop" stroke="#8884d8" name="SOH Drop (%)"/>
              <recharts_1.Line yAxisId="right" type="monotone" dataKey="avgSoc" stroke="#82ca9d" name="Avg SOC (%)"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </div>
        <div className="trend-chart">
          <h3>Temperature & Distance Trends</h3>
          <recharts_1.ResponsiveContainer width="100%" height={300}>
            <recharts_1.LineChart data={trendData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey="cycle"/>
              <recharts_1.YAxis yAxisId="left"/>
              <recharts_1.YAxis yAxisId="right" orientation="right"/>
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line yAxisId="left" type="monotone" dataKey="avgTemp" stroke="#ff7300" name="Avg Temp (°C)"/>
              <recharts_1.Line yAxisId="right" type="monotone" dataKey="totalDistance" stroke="#0088fe" name="Distance (km)"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </div>
        <div className="trend-chart">
          <h3>Voltage & Speed Trends</h3>
          <recharts_1.ResponsiveContainer width="100%" height={300}>
            <recharts_1.LineChart data={trendData}>
              <recharts_1.CartesianGrid strokeDasharray="3 3"/>
              <recharts_1.XAxis dataKey="cycle"/>
              <recharts_1.YAxis yAxisId="left"/>
              <recharts_1.YAxis yAxisId="right" orientation="right"/>
              <recharts_1.Tooltip />
              <recharts_1.Legend />
              <recharts_1.Line yAxisId="left" type="monotone" dataKey="voltageAvg" stroke="#ffc658" name="Avg Voltage (V)"/>
              <recharts_1.Line yAxisId="right" type="monotone" dataKey="avgSpeed" stroke="#8884d8" name="Avg Speed (km/h)"/>
            </recharts_1.LineChart>
          </recharts_1.ResponsiveContainer>
        </div>
      </div>
    </div>);
};
exports.LongTermTrends = LongTermTrends;
