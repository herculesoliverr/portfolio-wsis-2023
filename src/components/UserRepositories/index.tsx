import React, { useEffect, useState } from 'react';
import GitHubService, { Repository } from '../../services/api';
import Card from '../Card';

const Repositories: React.FC<{ username: string }> = ({ username }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchUserRepos = async () => {
      try {
        const userRepos = await GitHubService.getUserRepos(username);
        setRepositories(userRepos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserRepos();
  }, [username]);

  return (
    <div>
      <h2>User Repositories</h2>
      <div className="flex flex-wrap justify-center">
        {repositories.map((repo) => (
          <a href={repo.html_url} key={repo.id} target="_blank" rel="noopener noreferrer">
            <Card repository={repo} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
