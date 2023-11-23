import { Card } from '../Card'
import imageSyngenta from '../../assets/images/syngenta.png'
import imageCoral from '../../assets/images/coral.png'

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
        'Atuei com a criação do ecommerce totalmente do zero utilizando VTEX.'
    }
  ]
  return (
    <section className="flex flex-col items-center">
      <h3 className="text-black  text-xl">Principais Projetos</h3>
      {projectsData.map(project => (
        <Card className="p-0 justify-start max-w-md max-h-40">
          <img className="h-full w-40 rounded-md" src={project.image} />
          <div>
            <h4 className="pl-2 py-2 text-black">{project.title}</h4>
            <p className="pl-2">{project.description}</p>
          </div>
        </Card>
      ))}
    </section>
  )
}
