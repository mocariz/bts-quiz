import React from 'react'
import { useRouter } from 'next/router'

import db from '../../db.json'

import Layout from '../components/Layout'
import Widget from '../components/Widget/styled'

const Home = () => {
  const router = useRouter()
  const [name, setName] = React.useState('')

  return (
    <Layout backgroundImage={db.bg} title="AluraQuiz - Modelo Base">
      <Widget>
        <Widget.Header>
          <h1>{db.title}</h1>
        </Widget.Header>
        <Widget.Content>
          <p>{db.description}</p>

          <form
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault()
              router.push(`/quiz?name=${name}`)
              console.log('Fazendo uma submissão por meio do react')
            }}
          >
            <input
              onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value)
                // State
                // name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value)
              }}
              placeholder="Diz ai seu nome"
            />
            <button type="submit" disabled={name.length === 0}>
              Jogar
              {name}
            </button>
          </form>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>Quizes da galera</h1>
          <p>
            Dá uma olhada nesses quizes incríveis que o pessoal da Imersão
            Alguma coisa fez:
          </p>
        </Widget.Content>
      </Widget>
    </Layout>
  )
}

export default Home
