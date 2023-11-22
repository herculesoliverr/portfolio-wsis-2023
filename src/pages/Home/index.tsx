import { Card } from '../../components/Card'
import { UserProfile } from '../../components/Title'
import { UserContacts } from '../../components/UserContacts'
import { UserImage } from '../../components/UserImage'
import { UserProjects } from '../../components/UserProjects'

interface HomeProps {
  username: string
}

export const Home = ({ username }: HomeProps) => {
  return (
    <div className="flex items-center flex-col h-screen overflow-auto">
      <UserImage username={username} />
      <UserProfile username={username} />
      <UserProjects />
      <UserContacts />
    </div>
  )
}
