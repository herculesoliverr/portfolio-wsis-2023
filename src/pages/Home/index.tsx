import { Card } from '../../components/Card'
import { UserProfile } from '../../components/Title'
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
      <section className="flex flex-col min-w-300 items-center">
        <Card>
          <h1>Linkedin</h1>
        </Card>
      </section>
    </div>
  )
}
