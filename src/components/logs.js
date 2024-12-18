import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components_css/logs.css';

function Logs() {
  const [logs, setLogs] = useState({ layer1: "", layer2: "", layer3: "" });

  const fetchLogs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/monitor");
      const rawLogs = response.data.logs || "No suspicious traffic detected.";
      const layer2Logs = [];
      const layer3Logs = [];

      rawLogs.split("\n").forEach((log) => {
        if (log.startsWith("L2:")) layer2Logs.push(log);
        else if (log.startsWith("L3:")) layer3Logs.push(log);
      });

      setLogs({
        layer2: layer2Logs.join("\n"),
        layer3: layer3Logs.join("\n"),
      });
    } catch (error) {
      console.error("Error fetching logs:", error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  return (
    <div className="logs-container">
      <h2 className="logs-title">Monitorizare trafic</h2>
      <button className="refresh-button" onClick={fetchLogs}>Reîncarcă</button>

      <div className="logs-section">
        <h3 className="logs-subtitle">Layer 2: Data Link</h3>
        <textarea value={logs.layer2} readOnly rows="5" className="logs-textarea" />
      </div>

      <div className="logs-section">
        <h3 className="logs-subtitle">Layer 3: Network</h3>
        <textarea value={logs.layer3} readOnly rows="5" className="logs-textarea" />
      </div>
    </div>
  );
}

export default Logs;
