import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import "../styles/global.css";

function Dashboard() {
  // Mock data for demonstration
  const documents = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      uploadDate: '2024-01-15',
      summary: 'This document covers the basics of machine learning including supervised and unsupervised learning...'
    },
    {
      id: 2,
      title: 'Advanced Calculus Notes',
      uploadDate: '2024-01-14',
      summary: 'Comprehensive notes on calculus concepts including derivatives, integrals, and differential equations...'
    },
    {
      id: 3,
      title: 'Physics Fundamentals',
      uploadDate: '2024-01-13',
      summary: 'Introduction to physics covering mechanics, thermodynamics, and electromagnetism...'
    }
  ];

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <p>Manage your study documents</p>
          </div>
          
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Total Documents</h3>
              <p className="stat-number">{documents.length}</p>
            </div>
            <div className="stat-card">
              <h3>Recent Uploads</h3>
              <p className="stat-number">3</p>
            </div>
            <div className="stat-card">
              <h3>AI Summaries</h3>
              <p className="stat-number">{documents.length}</p>
            </div>
          </div>
          
          <div className="documents-section">
            <div className="section-header">
              <h2>Your Documents</h2>
              <button className="upload-button">Upload PDF</button>
            </div>
            
            <div className="documents-grid">
              {documents.map((doc) => (
                <div key={doc.id} className="document-card">
                  <div className="document-icon">📄</div>
                  <h3 className="document-title">{doc.title}</h3>
                  <p className="document-date">Uploaded: {doc.uploadDate}</p>
                  <p className="document-summary">{doc.summary}</p>
                  <div className="document-actions">
                    <button className="action-button view">View</button>
                    <button className="action-button delete">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
