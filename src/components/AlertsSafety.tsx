import React from 'react';
import { CycleSnapshot } from '../types';

interface AlertsSafetyProps {
  snapshot: CycleSnapshot;
}

export const AlertsSafety: React.FC<AlertsSafetyProps> = ({ snapshot }) => {
  const { warnings, protections } = snapshot.alert_details;

  return (
    <div className="alerts-safety">
      <h2>Alerts & Safety</h2>
      <div className="alerts-grid">
        <div className="alert-section">
          <h3 className={warnings.length > 0 ? 'has-warnings' : 'no-alerts'}>
            Warnings ({warnings.length})
          </h3>
          {warnings.length > 0 ? (
            <ul className="alert-list">
              {warnings.map((warning, index) => (
                <li key={index} className="warning-item">
                  {warning}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-alerts-message">No warnings detected</p>
          )}
        </div>
        <div className="alert-section">
          <h3 className={protections.length > 0 ? 'has-protections' : 'no-alerts'}>
            Protections ({protections.length})
          </h3>
          {protections.length > 0 ? (
            <ul className="alert-list">
              {protections.map((protection, index) => (
                <li key={index} className="protection-item">
                  {protection}
                </li>
              ))}
            </ul>
          ) : (
            <p className="no-alerts-message">No protection events triggered</p>
          )}
        </div>
      </div>
    </div>
  );
};


