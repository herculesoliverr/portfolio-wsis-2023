import { UserProfile } from '../../components/Title'
import { UserContacts } from '../../components/UserContacts'
import { UserImage } from '../../components/UserImage'
import { UserProjects } from '../../components/UserProjects'

interface HomeProps {
  username: string
}

const linkedinUrl = '/hercules-oliveira-18599b1b0/'
const githubUrl = 'herculesoliverr'
const whatsappNumber = '5531993563361'

export const Home = ({ username }: HomeProps) => {
  return (
    <div className="flex items-center flex-col h-screen overflow-auto">
      <UserImage username={username} />
      <UserProfile username={username} />
      <UserProjects />
      <UserContacts
        githubUrl={githubUrl}
        linkendinUrl={linkedinUrl}
        whatsappNumber={whatsappNumber}
      />
    </div>
  )
}
