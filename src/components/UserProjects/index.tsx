import { Card } from '../Card'
import imageSyngenta from '../../assets/images/syngenta.png'
import imageCoral from '../../assets/images/coral.png'

export const UserProjects = () => {
  return (
    <section className="flex flex-col items-center">
      <h3>Principais Projetos</h3>
      <Card className="p-0 justify-start max-w-md max-h-40">
        <img
          className="h-full rounded-md"
          src={imageSyngenta}
          alt="logo da syngenta digital"
        />
        <div>
          <h4 className="pl-2 py-2 text-black">Cropwise Analytics</h4>
          <p className="pl-2">
            Tenho atuado diretamente com dados referentes a qualidade do plantio
            de fazendas para trazer uma melhor visualicação e otimização para
            grandes produtores.
          </p>
        </div>
      </Card>
      <Card className="p-0 justify-start max-w-md max-h-40">
        <img
          className="h-full w-40 rounded-md"
          src={imageCoral}
          alt="logo da syngenta digital"
        />
        <div>
          <h4 className="pl-2 py-2 text-black">Coral Tintas</h4>
          <p className="pl-2">
            Atuei com a crianção do ecommerce totalmente do zero utilizando
            VTEX.
          </p>
        </div>
      </Card>
    </section>
  )
}
