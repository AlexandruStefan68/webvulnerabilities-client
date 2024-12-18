import React, { useState } from 'react';
import axios from 'axios';
import '../components_css/rules.css';

function SecurityRules() {
  const [securityRules, setSecurityRules] = useState("");

  const handleSaveRules = async () => {
    if (!securityRules.trim()) {
      alert("Please define some security rules before saving.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/security-rules", { rules: securityRules });
      alert("Security rules saved successfully.");
    } catch (error) {
      console.error("Error saving security rules:", error.response?.data?.error || error.message);
      alert("Failed to save security rules: " + (error.response?.data?.error || error.message));
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
      <button className="rules-button" onClick={handleSaveRules}>Salvează regulile</button>

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
