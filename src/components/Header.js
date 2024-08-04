import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export default function Header({ onShowResumePopup }) {
  return (
    <header id="header">
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/repositories">Repositories</Link></li>
        </ul>
        <a id="resumeButton" onClick={onShowResumePopup}>
          <FontAwesomeIcon icon={faEye} style={{ margin: '0 0.5rem' }} />
          View Resume
        </a>
      </nav>
    </header>
  );
}
