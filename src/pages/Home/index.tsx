import { UserProfile } from '../../components/Title'
import { UserImage } from '../../components/UserImage'
import { UserRepositories } from '../../components/UserRepositories'

interface HomeProps {
  username: string
}

export const Home = ({ username }: HomeProps) => {
  return (
    <div className="flex flex-col h-screen">
      <UserImage username={username} />
      <UserProfile username={username} />
      <UserRepositories username={username} />
    </div>
  )
}
