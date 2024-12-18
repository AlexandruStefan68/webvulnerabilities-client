import React, { useState, useEffect } from 'react';
import '../components_css/rules.css';

function SecurityRules() {
  const [securityRules, setSecurityRules] = useState("");

  // Fetch rules when the component loads
  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/security-rules`);
        const data = await response.json();
        if (data.rules) {
          setSecurityRules(data.rules.join('\n')); // Join rules into a single string
        }
      } catch (error) {
        console.error("Failed to fetch security rules:", error);
      }
    };

    fetchRules();
  }, []);

  // Save rules to the backend
  const handleSaveRules = async () => {
    if (!securityRules.trim()) {
      alert("Please define some security rules before saving.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/security-rules`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rules: securityRules }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Security rules saved successfully.");
      } else {
        alert("Failed to save security rules: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Failed to save security rules:", error);
      alert("Failed to save security rules: " + error.message);
    }
  };

  return (
    <div className="rules-container">
      <h2 className="rules-title">Setează regulile de securitate</h2>
      <textarea
        className="rules-textarea"
        placeholder="Scrie regulile de securitate aici..."
        value={securityRules}
        onChange={(e) => setSecurityRules(e.target.value)}
        rows="5"
      />
      <button className="rules-button" onClick={handleSaveRules}>
        Salvează regulile
      </button>

      <div className="commands-section">
        <h3 className="commands-title">Comenzi disponibile</h3>
        <p>AllowFileType: ex: pdf</p>
        <p>MaxFileSize: ex: 5 MB</p>
        <p>LimitRequests: ex: 5 (intrari pe minut)</p>
      </div>
    </div>
  );
}

export default SecurityRules;
