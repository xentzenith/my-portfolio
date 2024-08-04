import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Profile.module.css';

export default function Profile() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('/profile_data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  return (
    <div className={styles.timeline}>
      {data.profile && (
        <div className={styles.profile}>
          <h1>{data.profile.name} <span className={styles.pronouns}>({data.profile.pronouns})</span></h1>
          <div className={styles.roleBadge}>
            <FontAwesomeIcon icon={faCode} style={{padding: '0px 10px'}}/>
            <strong>{data.profile.role}</strong>
          </div>
          <p><em>{data.profile.summary}</em></p>
          <div className={styles.socials}>
            {data.profile.socials.linkedin && (
              <a href={data.profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
            {data.profile.socials.github && (
              <a href={data.profile.socials.github} target="_blank" rel="noopener noreferrer">
                GitHub <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
            {data.profile.socials.hackerrank && (
              <a href={data.profile.socials.hackerrank} target="_blank" rel="noopener noreferrer">
                HackerRank <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
          </div>
        </div>
      )}

      <div className={styles.timelineContainer}>
        {data.experience && data.experience.map((exp, index) => (
          <div key={index} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p>{exp.duration}</p>
            <p>{exp.location}</p>
            <ul>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
