import { useState } from 'react';
import styles from '../styles/ResumePopup.module.css';

export default function ResumePopup({ show, onClose }) {
  const [loading, setLoading] = useState(false);
  const [glitching, setGlitching] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      
      const download = document.createElement('a');
      download.href = '/resume.pdf'; // Ensure the URL is correct
      download.download = 'resume.pdf';
      document.body.appendChild(download); // Append to body
      download.click();
      document.body.removeChild(download); // Remove from body

    }, 2000); 
  };

  const handleClose = () => {
    setGlitching(true); // Start glitch animation
    setTimeout(() => {
      setGlitching(false); // Reset glitch animation
      onClose();
    }, 500); // Match the duration of the glitch animation
  };

  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.popup} ${glitching ? styles.glitchPopup : ''}`}>
        <h2>Resume</h2>
        <iframe src="/resume.pdf" title="Resume" className={styles.resumeIframe}></iframe>
        <a 
          download="resume.pdf"
          className={`${styles.downloadButton} ${loading ? 'loading' : ''}`} 
          onClick={handleDownload}
          aria-busy={loading}
        >
          {loading ? 'Downloading...' : 'Download Resume'}
        </a>
        <button 
          className={styles.closeButton}
          onClick={handleClose}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}
