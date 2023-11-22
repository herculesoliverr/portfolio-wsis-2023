import { Card } from '../../components/Card'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

export const UserContacts = () => {
  return (
      <section className="flex flex-col min-w-300 items-center">
        <Card>
          <FaLinkedinIn />
          <h1>Linkedin</h1>
        </Card>
        <Card>
          <FaGithub />
          <h1>Github</h1>
        </Card>
        <Card>
        <FaWhatsapp />
          <h1>Contate-me</h1>
        </Card>
        
      </section>
  )
}
