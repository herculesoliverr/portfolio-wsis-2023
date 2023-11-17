import { useEffect, useState } from 'react'
import GitHubService, { Repository } from '../../services/api'
import Card from '../Card'

interface UserRepositoriesProps {
  username: string
}

export const UserRepositories = ({ username }: UserRepositoriesProps) => {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    const fetchUserRepos = async () => {
      if (!username) return
      const userRepos = await GitHubService.getUserRepos(username)
      setRepositories(userRepos)
    }
    fetchUserRepos()
  }, [username])

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>User Repositories</h2>
      <div className="flex flex-wrap justify-center">
        {repositories.map(repo => (
          <a
            href={repo.html_url}
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card repository={repo} />
          </a>
        ))}
      </div>
    </div>
  )
}
