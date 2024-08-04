import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/RepositoryGrid.module.css';

export default function RepositoryGrid() {
  const [repositories, setRepositories] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);

  useEffect(() => {
    fetch('/repos_portfolio.json')
      .then(response => response.json())
      .then(data => {
        setRepositories(data);
        setFilteredRepositories(data);
      })
      .catch(error => console.error('Error fetching repository data:', error));
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = event => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredRepos = repositories.filter(repo =>
      repo.custom.name.toLowerCase().includes(term)
    );
    setFilteredRepositories(filteredRepos);
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search repositories"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.grid}>
        {filteredRepositories.length > 0 ? (
          filteredRepositories.map(repo => (
            <motion.div
              key={repo.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image src={repo.custom.thumbnail} alt={repo.custom.name} width={200} height={100} />
              <h3>{repo.custom.name}</h3>
              <p>{repo.custom.shortDescription}</p>
              <a href={`https://github.com/${repo.by}/${repo.id}`} target="_blank" rel="noopener noreferrer" className="btn">
                Learn More
              </a>
            </motion.div>
          ))
        ) : (
          <motion.div 
          className={styles.noResults}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
            <img src="/no-result.svg" alt="No Results" />
            No Results Found
            </motion.div>
        )}
      </div>
    </>
  );
}
