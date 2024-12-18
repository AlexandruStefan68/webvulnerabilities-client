import React, { useState } from 'react';
import axios from 'axios';
import '../components_css/analizer.css';

function FileAnalysis() {
  const [file, setFile] = useState(null);
  const [reportLink, setReportLink] = useState(null);
  const [vulnerabilities, setVulnerabilities] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/analyze", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setReportLink(response.data.report_url);
      setVulnerabilities(response.data.vulnerabilities || []);
    } catch (error) {
      console.error("Error during file analysis:", error.response?.data?.error || error.message);
      alert("Failed to analyze file: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="file-analysis container py-4">
      <h2 className="text-center mb-4">Analizare fișiere</h2>
      <div className="upload-section mb-4">
        <label className="form-label">Încarcă un fișier pentru analizare:</label>
        <div className="input-group">
        <input
          type="file"
          className="form-control"
          onChange={handleFileChange}
        />
        <button
          className="btn btn-primary"
          onClick={handleAnalyze}
        >
          Analizează fișierul
        </button>
      </div>
    </div>

    {reportLink && (
      <div className="report-section mt-4">
        <h4>Raport de analiză</h4>
        <a
          href={reportLink}
          download="report.pdf"
          className="btn btn-success mt-2"
        >
          Descarca raport
        </a>
      </div>
    )}

    {vulnerabilities.length > 0 && (
      <div className="vulnerabilities-section mt-4">
        <h4>Vulnerabilități detectate</h4>
        <ul className="list-group mt-3">
          {vulnerabilities.map((vuln, index) => (
            <li key={index} className="list-group-item">
              <strong>Tip:</strong> {vuln.type} <br />
              <strong>Severitate:</strong> {vuln.severity} <br />
              <strong>Descriere:</strong> {vuln.description}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
}

export default FileAnalysis;
