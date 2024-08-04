import { useState } from 'react';
import Header from '../components/Header';
import ResumePopup from '../components/ResumePopup';
import RepositoryGrid from '../components/RepositoryGrid';
import Footer from '../components/Footer';

export default function Repositories() {
  const [showResumePopup, setShowResumePopup] = useState(false);

  return (
    <div>
      <Header onShowResumePopup={() => setShowResumePopup(true)} />
      <RepositoryGrid />
      <ResumePopup show={showResumePopup} onClose={() => setShowResumePopup(false)} />
      <Footer />
    </div>
  );
}
