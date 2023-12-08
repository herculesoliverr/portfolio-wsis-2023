import { Card } from '../Card'
import imageSyngenta from '../../assets/images/syngenta.png'
import imageCoral from '../../assets/images/coral.jpg'

export const UserProjects = () => {
  const projectsData = [
    {
      image: imageSyngenta,
      title: 'Syngenta Digital',
      description:
        'Tenho atuado diretamente com dados referentes a qualidade do plantio de fazendas para trazer uma melhor visualização e otimização para grandes produtores.'
    },
    {
      image: imageCoral,
      title: 'Coral Tintas',
      description:
        'Atuei no front-end e pude ajudar na criação do ecommerce totalmente do zero utilizando VTEX IO.'
    }
  ]
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-black  text-xl">Principais Projetos</h3>
      <div className="flex flex-col md:flex-row">
        {projectsData.map(project => (
          <Card className="p-0 justify-start max-w-md">
            <img
              className="h-full w-44 rounded-md bg-cover"
              src={project.image}
            />
            <div>
              <h4 className="pl-2 py-2 text-black">{project.title}</h4>
              <p className="pl-2 pb-2">{project.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
