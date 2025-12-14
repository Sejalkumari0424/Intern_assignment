"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertsSafety = void 0;
var react_1 = require("react");
var AlertsSafety = function (_a) {
    var snapshot = _a.snapshot;
    var _b = snapshot.alert_details, warnings = _b.warnings, protections = _b.protections;
    return (<div className="alerts-safety">
      <h2>Alerts & Safety</h2>
      <div className="alerts-grid">
        <div className="alert-section">
          <h3 className={warnings.length > 0 ? 'has-warnings' : 'no-alerts'}>
            Warnings ({warnings.length})
          </h3>
          {warnings.length > 0 ? (<ul className="alert-list">
              {warnings.map(function (warning, index) { return (<li key={index} className="warning-item">
                  {warning}
                </li>); })}
            </ul>) : (<p className="no-alerts-message">No warnings detected</p>)}
        </div>
        <div className="alert-section">
          <h3 className={protections.length > 0 ? 'has-protections' : 'no-alerts'}>
            Protections ({protections.length})
          </h3>
          {protections.length > 0 ? (<ul className="alert-list">
              {protections.map(function (protection, index) { return (<li key={index} className="protection-item">
                  {protection}
                </li>); })}
            </ul>) : (<p className="no-alerts-message">No protection events triggered</p>)}
        </div>
      </div>
    </div>);
};
exports.AlertsSafety = AlertsSafety;
