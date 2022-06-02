import type { NextPage } from 'next'
import ListaPet from '../ui/components/Lista/ListaPet'
import Titulo from '../ui/components/titulo/Titulo'


const Home: NextPage = () => {
  return (
    <div>
      <Titulo
        title='dasa'
        subtitle={<span>Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet virtualmente</strong></span>}
      />
      <ListaPet pets={[
        {
          id: 1,
          nome: 'Nike',
          historia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis expedita repellendus, pariatur perferendis nesciunt in provident est cupiditate praesentium laboriosam, totam, molestiae distinctio inventore at quos architecto dicta voluptatibus?',
          foto: 'https://mundodospetz.com/wp-content/uploads/2021/11/Dachshund-o-famoso-cachorro-salsicha-aqui-no-Brasil.jpg'
        },
        {
          id: 2,
          nome: 'Malvo',
          historia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deleniti, eum reprehenderit itaque fuga mollitia libero cum? Suscipit, enim quia nobis asperiores eaque illo quas nam sint pariatur consequuntur temporibus!',
          foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSMf8As0hrHykFNuqvDaTjfu1_ZCNcuk9YA&usqp=CAU'
        },
        {
          id: 3,
          nome: 'PitNike',
          historia: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga facilis expedita repellendus, pariatur perferendis nesciunt in provident est cupiditate praesentium laboriosam, totam, molestiae distinctio inventore at quos architecto dicta voluptatibus?',
          foto: 'https://images.virgula.com.br/2015/02/Rami-Dachshund-e-Pitbull-Moultrie-Colquitt-County-Humane-Society.jpg'
        }
      ]} />
    </div>
  )
}

export default Home
